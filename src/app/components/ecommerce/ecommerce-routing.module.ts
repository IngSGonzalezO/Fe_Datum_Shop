import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';
import { WishlistComponent } from './wishlist/wishlist.component';

var routingAnimation = localStorage.getItem('animate')

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: "product",
        component: ProductComponent,
        data: {
          title: 'Product',
          breadcrumb: 'Product',
          animation: [routingAnimation]
        }
      },
      {
        path: "product-page",
        component: ProductPageComponent,
        data: {
          title: 'Product Page',
          breadcrumb: 'Product Page',
          animation: [routingAnimation]
        }
      },
      {
        path: "product-list",
        component: ProductListComponent,
        data: {
          title: 'Lista de Productos',
          breadcrumb: 'Lista de Productos',
          animation: [routingAnimation]
        }
      },
      {
        path: "order-history",
        component: OrderHistoryComponent,
        data: {
          title: 'Order History',
          breadcrumb: 'Order History',
          animation: [routingAnimation]
        }
      },
      {
        path: "payment-details",
        component: PaymentDetailsComponent,
        data: {
          title: 'Payment Details',
          breadcrumb: 'Payment Details',
          animation: [routingAnimation]
        }
      },
      {
        path: "invoice",
        component: InvoiceComponent,
        data: {
          title: 'Invoice',
          breadcrumb: 'Invoice',
          animation: [routingAnimation]
        }
      },
      {
        path: "cart",
        component: CartComponent,
        data: {
          title: 'Cart',
          breadcrumb: 'Cart',
          animation: [routingAnimation]
        }
      },
      {
        path: "wishlist",
        component: WishlistComponent,
        data: {
          title: 'Wishlist',
          breadcrumb: 'Wishlist',
          animation: [routingAnimation]
        }
      },
      {
        path: "checkout",
        component: CheckoutComponent,
        data: {
          title: 'Checkout',
          breadcrumb: 'Checkout',
          animation: [routingAnimation]
        }
      },
      {
        path: "pricing",
        component: PricingComponent,
        data: {
          title: 'Pricing',
          breadcrumb: 'Pricing',
          animation: [routingAnimation]
        }
      },
      {
        path: "add-product",
        component: AddProductComponent,
        data: {
          title: 'Agregar Producto',
          breadcrumb: 'Agregar Producto',
          animation: [routingAnimation]
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
