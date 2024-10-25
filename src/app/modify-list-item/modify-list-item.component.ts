import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../data/mock-content';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
   ],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  modifyForm: FormGroup;
  isEditMode: boolean = false;
  productToEdit: Product | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    // Initialize form
    this.modifyForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: [''],
      isAvailable: [false],
      imageUrl: ['']
    });
  }

  ngOnInit(): void {

    const productToEdit = this.productService.getProductToEdit();
    if (productToEdit) {
      this.isEditMode = true;
      this.productToEdit = productToEdit;

      this.modifyForm.patchValue(productToEdit);
    }
  }

  // Method to handle form submission
  onSubmit() {
    if (this.modifyForm.valid) {
      const productData = this.modifyForm.value;

      if (this.isEditMode && this.productToEdit) {
        // Update existing product
        this.productService.updateProduct({ ...this.productToEdit, ...productData }).subscribe({
          next: () => {
            console.log('Product updated successfully');
            this.router.navigate(['/products']);
          },
          error: (err) => {
            console.error('Failed to update product', err);
          }
        });
      } else {
        // Add new product
        this.productService.createProduct(productData).subscribe({
          next: () => {
            console.log('Product added successfully');
            this.router.navigate(['/products']);
          },
          error: (err) => {
            console.error('Failed to add product', err);
          }
        });
      }

      this.modifyForm.reset();
    }
  }

  //Let's reset the form
  onReset() {
    this.modifyForm.reset();
  }
}
