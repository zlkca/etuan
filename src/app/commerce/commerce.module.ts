import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//import { UiModule } from '../ui/ui.module';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

import { SharedService } from '../shared/shared.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './commerce.service';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';



@NgModule({
   imports:[
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
      //UiModule
   ],
   providers: [SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
   exports:[CategoryListComponent,CategoryFormComponent,ProductListComponent,ProductFilterComponent, RestaurantListComponent],
   declarations:[CategoryListComponent,CategoryFormComponent,ProductListComponent, ProductFilterComponent, RestaurantListComponent]
})
export class CommerceModule { }
