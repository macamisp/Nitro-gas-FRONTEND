import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from "./common/background/background.component";
import { BackanimationComponent } from "./common/backanimation/backanimation.component";
import { NavBarComponent } from "./common/nav-bar/nav-bar.component";
import { CallIconComponent } from "./common/call-icon/call-icon.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { GassComponent } from './gass/gass.component';
import { MapComponent } from './map/map.component';
import { CartComponent } from "./cart/cart.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackgroundComponent, BackanimationComponent, NavBarComponent, CallIconComponent, LoginComponent, HomeComponent, AboutComponent, GassComponent, MapComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
