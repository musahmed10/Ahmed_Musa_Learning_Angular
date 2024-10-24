// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-modify-list-item',
//   standalone: true,
//   imports: [],
//   templateUrl: './modify-list-item.component.html',
//   styleUrl: './modify-list-item.component.css'
// })
// export class ModifyListItemComponent {
//
// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
export class ModifyListItemComponent {
  modifyForm: FormGroup;  // Declare the form group

  constructor(private fb: FormBuilder) {
    this.modifyForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: [''],
      isAvailable: [false],
      imageUrl: ['']
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.modifyForm.valid) {
      console.log('Form Submitted', this.modifyForm.value);
      // Here you can call the ProductService to handle Create or Update logic
    }
  }

  // Method to reset the form
  onReset() {
    this.modifyForm.reset();
  }
}
