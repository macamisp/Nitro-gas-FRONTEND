import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartForm: FormGroup;
  totalPrice: number = 0;

  constructor(private fb: FormBuilder) {
    this.cartForm = this.fb.group({
      itemName: ['', Validators.required],
      itemPrice: [0, [Validators.required, Validators.min(0)]],
      itemQuantity: [1, [Validators.required, Validators.min(1)]],
      itemDetails: ['', Validators.required],
      customerName: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerMobile: ['', Validators.required],
      customerAddress: ['', Validators.required],
      customerNIC: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cartForm.get('itemPrice')?.valueChanges.subscribe(() => this.updateTotalPrice());
    this.cartForm.get('itemQuantity')?.valueChanges.subscribe(() => this.updateTotalPrice());
  }

  increaseQuantity(): void {
    const quantity = this.cartForm.get('itemQuantity')?.value;
    this.cartForm.get('itemQuantity')?.setValue(quantity + 1);
  }

  decreaseQuantity(): void {
    const quantity = this.cartForm.get('itemQuantity')?.value;
    if (quantity > 1) {
      this.cartForm.get('itemQuantity')?.setValue(quantity - 1);
    }
  }

  updateTotalPrice(): void {
    const price = this.cartForm.get('itemPrice')?.value || 0;
    const quantity = this.cartForm.get('itemQuantity')?.value || 1;
    this.totalPrice = price * quantity;
  }

  onSubmit(): void {
    if (this.cartForm.valid) {
      console.log('Form Data:', this.cartForm.value);
      this.cartForm.reset({ itemQuantity: 1 });
    } else {
      console.log('Form is invalid');
    }
  }
}
