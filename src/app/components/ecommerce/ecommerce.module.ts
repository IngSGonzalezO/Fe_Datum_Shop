import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './product/filter/filter.component';
import { ProductBoxComponent } from './product/product-box/product-box.component';
import { QuickViewComponent } from './product/quick-view/quick-view.component';
// import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BrandComponent } from './product-page/brand/brand.component';
import { DescriptionTabComponent } from './product-page/description-tab/description-tab.component';
import { DetailsComponent } from './product-page/details/details.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListDirective } from 'src/app/shared/directives/product-list.directive';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { CodComponent } from './payment-details/cod/cod.component';
import { CreditCardComponent } from './payment-details/credit-card/credit-card.component';
import { DebitCardComponent } from './payment-details/debit-card/debit-card.component';
import { EmiComponent } from './payment-details/emi/emi.component';
import { NetBankingComponent } from './payment-details/net-banking/net-banking.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceDataTableComponent } from './invoice/invoice-data-table/invoice-data-table.component';
import { NgxPrintModule } from 'ngx-print';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PricingComponent } from './pricing/pricing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BillingDetailComponent } from './checkout/billing-detail/billing-detail.component';
import { PlaceOrderComponent } from './checkout/place-order/place-order.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { AddProductComponent } from './add-product/add-product.component';
import { DescriptionCategoryComponent } from './add-product/description-category/description-category.component';
import { SizeImageComponent } from './add-product/size-image/size-image.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
// import { GalleryModule } from 'ng-gallery';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    ProductComponent,
    FilterComponent,
    ProductBoxComponent,
    QuickViewComponent,
    BrandComponent,
    DescriptionTabComponent,
    DetailsComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductListDirective,
    OrderHistoryComponent,
    PaymentDetailsComponent,
    CodComponent,
    CreditCardComponent,
    DebitCardComponent,
    EmiComponent,
    NetBankingComponent,
    InvoiceComponent,
    InvoiceDataTableComponent,
    CartComponent,
    WishlistComponent,
    PricingComponent,
    CheckoutComponent,
    BillingDetailComponent,
    PlaceOrderComponent,
    AddProductComponent,
    DescriptionCategoryComponent,
    SizeImageComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    SharedModule,
    GalleryModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPrintModule,
    BarRatingModule,
    NgxDropzoneModule,
    InfiniteScrollModule

  ],
  exports: [
    ProductBoxComponent,
    ProductPageComponent,

  ]
})
export class EcommerceModule { }
