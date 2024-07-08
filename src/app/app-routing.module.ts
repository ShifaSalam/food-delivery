import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { CartComponent } from './components/cart/cart.component';
import { FoodOrderComponent } from './components/food-order/food-order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'items',component:ItemsComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'order',component:FoodOrderComponent},
  {path:'pay',component:PaymentComponent},
  {path:'log',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
