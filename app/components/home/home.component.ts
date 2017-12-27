import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product, ProductService } from '../../services/product.service';
import { Recommend, RecommendService } from '../../services/recommend.service';
import 'rxjs/add/operator/debounceTime';

@Component({
	selector : 'auction-home-page',
	styleUrls : ['app/components/home/home.component.css'],
	template : `
		<div class="row">
			<div *ngFor="let recommend of recommends | filter : 'title'"
			    class="col-sm-12 col-lg-12 col-md-12">
				<auction-product-item [recommend]="recommend"></auction-product-item>
			</div>
		</div>
	`
})
export default class HomeComponent {
	recommends : Recommend[] = [];

	constructor (private recommendService : RecommendService) {
		this.recommends = this.recommendService.getRecommends();

	}
}