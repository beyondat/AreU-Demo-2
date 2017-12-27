import { Injectable } from "@angular/core";

export class Recommend{
	constructor( public id: number,
				 public title: string,
				 public desc: string,
				 public pos: string,
				 public period: number,
				 public like: number){}
}

export class RecommendRanking{
    constructor( public id: number,
                 public recommendId: number,
                 public title: string,
                 public regDate: Date,
                 public regUser: string,
                 public like: number,
                 public cource: string[]){}
}

@Injectable()
export class RecommendService{
    getRecommends(): Recommend[]{
        return recommends.map(i => new Recommend(i.id, i.title, i.desc, i.pos, i.period, i.like));
    }
    getRecommendById(recommendId: number): Recommend{
        return recommends.find(i => i.id === recommendId);
    }
    getRecommendRankingsById(recommendId: number): RecommendRanking[]{
        return recommendRankings.map(i => new RecommendRanking(i.id, i.recommendId, i.title, new Date(i.regDate), i.regUser, i.like, i.cource));
    }
}

var recommends = [
    {
        id: 1,
        title: "Happy",
        desc: "Cill",
        pos: "JEJU ISLAND",
        period: 1,
        like: 9999
    },
    {
        id: 2,
        title: "Classic",
        desc: "Tranditional",
        pos: "SEOUL",
        period: 1,
        like: 9999
    },
    {
        id: 3,
        title: "Dope",
        desc: "Chill",
        pos: "JEJU ISLAND",
        period: 1,
        like: 9999
    }
];

var recommendRankings = [
    {
        id: 1,
        recommendId: 1,
        title: "Happy Traveling on HyupJea beatch",
        regDate: "2014-05-20T02:17:00+00:00",
        regUser: "David Hwang",
        like: 9999,
        cource: ["now", "airport", "bus", "HyupJea"]
    },
    {
        id: 2,
        recommendId: 1,
        title: "Happy Traveling on HyupJea beatch",
        regDate: "2014-05-20T02:17:00+00:00",
        regUser: "David Hwang",
        like: 9999,
        cource: ["now", "airport", "bus", "HyupJea"]
    },
    {
        id: 3,
        recommendId: 1,
        title: "Happy Traveling on HyupJea beatch",
        regDate: "2014-05-20T02:17:00+00:00",
        regUser: "David Hwang",
        like: 9999,
        cource: ["now", "airport", "bus", "HyupJea"]
    },
];