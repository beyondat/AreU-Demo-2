import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Review, ProductService } from '../../services/product.service';
import { Recommend, RecommendRanking, RecommendService } from '../../services/recommend.service';
@Component({
	selector : 'auction-product-page',
	templateUrl : 'app/components/product-detail/product-detail.component.html'
})
export default class ProductDetailComponent {
	recommend : Recommend;
	recommendRankings : RecommendRanking[];

	constructor (route : ActivatedRoute, recommendService : RecommendService) {
		let recommendId : number = parseInt(route.snapshot.params['recommendId']);
		this.recommend = recommendService.getRecommendById(recommendId);
		this.recommendRankings = recommendService.getRecommendRankingsById(this.recommend.id);
	}
}
