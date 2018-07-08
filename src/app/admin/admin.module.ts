import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RestaurantModule } from '../restaurant/restaurant.module';
import { AccountModule } from '../account/account.module';
import { ProductModule } from '../product/product.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RestaurantModule,
    AccountModule,
    ProductModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [AdminComponent],
  exports:[AdminComponent]
})
export class AdminModule { }
