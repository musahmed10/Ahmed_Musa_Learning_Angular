import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule
} from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../data/mock-content';
import {AutoFocusDirective} from "../directives/highlight-on-focus.directive";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";

@Component({
  selector: 'app-modify-list-item',
  templateUrl: './modify-list-item.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AutoFocusDirective,
    HoverHighlightDirective
  ],
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
      name: ['', [Validators.required, this.noSpecialChars]],
      // Validator for price to have only positive numbers
      price: ['', [Validators.required, Validators.min(0), Validators.pattern('^[0-9]*$')]],
      description: [''],
      isAvailable: [false],
      imageUrl: ['']
    }, { validators: [this.uniqueProductName.bind(this)] });
  }

  ngOnInit(): void {
    const productToEdit = this.productService.getProductToEdit();
    if (productToEdit) {
      this.isEditMode = true;
      this.productToEdit = productToEdit;

      this.modifyForm.patchValue(productToEdit);
    }
  }

  // Validator for product names to not contain special characters
  noSpecialChars(control: AbstractControl): ValidationErrors | null {
    const specialChars = /[#?!]/;
    if (specialChars.test(control.value)) {
      return { specialChars: true };
    }
    return null;
  }

  // Validator that ensures product name is unique
  uniqueProductName(control: AbstractControl): ValidationErrors | null {
    const existingProducts = this.productService.getProductsSync();
    const isDuplicate = existingProducts.some(product => product.name === control.get('name')?.value);
    return isDuplicate ? { duplicate: true } : null;
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

  // Reset the form
  onReset() {
    this.modifyForm.reset();
  }
}
