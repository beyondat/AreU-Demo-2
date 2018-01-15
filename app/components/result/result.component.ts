import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecommendService, Result } from '../../services/recommend.service';

@Component({
	selector: 'result',
	templateUrl: 'app/components/result/result.component.html'
})
export default class ResultComponent{
	 result: Result;
	constructor(route: ActivatedRoute, recommendService: RecommendService) {
		let rankingId: number = parseInt(route.snapshot.params['recommendRankingId']);
		this.result = recommendService.getResultByRecommendRankingId(rankingId);
	 }

}