import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminGuard } from './guard/admin.guard';


// vamos a hacer un ejemplo con el guardian sobre contact


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: "home",
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
      },
      {
        path: "products",
        canActivate: [AdminGuard],
        component: ProductsComponent,
      },
      {
        path: "products/:id",
        component: ProductDetailComponent,
      },
      {
        path: "contact",
        canActivate: [AdminGuard],
        component: ContactComponent,
      },
    ]
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "demo",
    component: DemoComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
