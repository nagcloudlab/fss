import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CartViewComponent} from './cart-view/cart-view.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductListHomeComponent} from './product-list-home/product-list-home.component';
import {CartHomeComponent} from './cart-home/cart-home.component';
import {CartSummaryComponent} from './cart-summary/cart-summary.component';
import {productResolver} from './product.resolver';


export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductListHomeComponent,
    children:[
      {
        // /products/electronics
        path: ':category',
        component: ProductListComponent,
        resolve:{
          products: productResolver
        }
      },
      {
        // /products/other
        path:':category',
        component: ProductListComponent
      }
    ]
  },
  {
    path:'cart',
    component: CartHomeComponent,
    children:[
      {
        path:'',
        component: CartViewComponent,
        outlet: 'primary'
      },
      {
        path:'',
        component: CartSummaryComponent,
        outlet: 'secondary'
      }
      ]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
