import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

interface item {
  name: string;
  price: string;
  weight: string;
  details: string;
}

@Component({
  selector: 'app-gass',
  standalone: true,
  imports: [CartComponent, RouterLink, CommonModule],
  templateUrl: './gass.component.html',
  styleUrls: ['./gass.component.css']
})
export class GassComponent {
  ismodelOpen = false;

  openCartModal(item: any): void {
    const modal = document.getElementById('cartModal');
    if (modal) {
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  loadCart() {
    this.ismodelOpen = true;
  }

  cartForm: FormGroup;
  totalPrice: number = 0;

  items: item[] = [
    {
      name: 'Nitro pocket',
      price: "LKR500",
      weight: "1kg",
      details: "A pocket gas (often called a pocket stove or mini gas canister) is a small, portable gas canister specifically designed to be compact and easy to carry, often used for outdoor cooking"
    },
    {
      name: 'Nito travel',
      price: "LKR1000",
      weight: "2.5KG",
      details: ' A traveling gas cylinder (or "travel gas cylinder") is a small, portable gas canister designed for use onthe go, typically for outdoor activities such as camping,hiking, and road trips. These cylinders'
    },
    {
      name: 'Nito mini',
      price: "LKR1500",
      weight: "3.5KG",
      details: 'A 3.5 kg gas cylinder is a small to medium-sized  gas container that typically holds 3.5 kilograms of liquefied petroleum gas (LPG), usually propane, butane, or a mixture of both.'
    },
    {
      name: 'Nito mini',
      price: "",
      weight: "500G",
      details: 'A 3.5 kg gas cylinder is a small to medium-sized gas container that typically holds 3.5 kilograms of liquefied petroleum gas (LPG), usually propane, butane, or a mixture of both.'
    },
    {
      name: 'Nito singel',
      price: "LKR2000",
      weight: "5KG",
      details: 'A 5 kg gas cylinder typically refers to a small-sizedliquefied petroleum gas (LPG) cylinder used for cooking or heating purposes. The "5 kg" indicates the weight ofthe LPG gas inside the cylinder,'
    },
    {
      name: 'Nito all in one',
      price: "LKR2500",
      weight: "7.5KG",
      details: ' A 7.5 kg gas cylinder typically refers to a portableLPG (liquefied petroleum gas) cylinder with a capacityof around 7.5 kilograms of gas. These cylinders are widelyused for cooking in households, outdoor activities'
    },
    {
      name: 'Nito Home',
      price: "LKR3900",
      weight: "12.5KG",
      details: 'A 12 kg gas cylinder refers to an LPG (liquefiedpetroleum gas) cylinder with a capacity of around12 kilograms of gas. This type of cylinder is common for both household and small commercial use, as it provides'
    }
    ,
    {
      name: 'Nito Hotel',
      price: "LKR5900",
      weight: "20KG",
      details: 'A 20 kg gas cylinder is a larger LPG (liquefied petroleum gas)cylinder commonly used in both households with high gas consumptionand in commercial or industrial settings where more fuel is neededregularly. This size offers'
    },
    {
      name: 'Nito Company',
      price: "LKR20000",
      weight: "50KG",
      details: 'A 50 kg gas cylinder is a large-capacity LPG (liquefied petroleum gas)cylinder primarily used in commercial, industrial, and high-demand residential settings. Given its high fuel content, this size is idealfor operations that require a significant'
    },

  ];

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

  setItemDetails(item: item): void {
    this.cartForm.patchValue({
      itemName: item.name,
      itemPrice: item.price,
      itemQuantity: 1,
      itemDetails: item.details
    });
    this.updateTotalPrice();
  }
}
