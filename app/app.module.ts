import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import ApplicationComponent from './components/application/application.component';
import CarouselComponent from './components/carousel/carousel.component';
import FooterComponent from './components/footer/footer.component';
import NavbarComponent from './components/navbar/navbar.component';
import ProductItemComponent from './components/product-item/product-item.component';
import SearchComponent from './components/search/search.component';
import StarsComponent from './components/stars/stars.component';
import { ProductService } from './services/product.service';
import HomeComponent from './components/home/home.component';
import ProductDetailComponent from './components/product-detail/product-detail.component';
import ResultComponent from './components/result/result.component';
import { FilterPipe } from './components/pipes/filter.pipe';
import { RecommendService } from './services/recommend.service';


@NgModule({
	imports : [BrowserModule, ReactiveFormsModule,
		RouterModule.forRoot([
			{ path : '', component : HomeComponent },
			{ path : 'recommends/:recommendId', component : ProductDetailComponent },
			{ path : 'result/:recommendRankingId', component : ResultComponent }
		])],
	declarations : [ApplicationComponent,
		CarouselComponent,
		FooterComponent,
		NavbarComponent,
		HomeComponent,
		ProductDetailComponent,
		ProductItemComponent,
		ResultComponent,
		SearchComponent,
		StarsComponent,
		FilterPipe
		],
	providers : [ProductService, RecommendService,
		{ provide : LocationStrategy, useClass : HashLocationStrategy }],
	bootstrap : [ApplicationComponent]
})
export class AppModule {}