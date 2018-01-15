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

//TransThings interface -> car, bus, subway, airplan

//it's sample result
export class Result{
    constructor( public RankingId: number,
                 public airplan: string,
                 public bus: string,
                 public walk: string,
                 public goal: string){}
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
    getResultByRecommendRankingId(recommendRankingId: number): Result{
        return results.find( i => i.RankingId === recommendRankingId );
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
    {
        id: 1,
        recommendId: 2,
        title: "Happy Traveling on HyupJea beatch",
        regDate: "2014-05-20T02:17:00+00:00",
        regUser: "David Hwang",
        like: 9999,
        cource: ["now", "airport", "bus", "HyupJea"]
    },
    {
        id: 2,
        recommendId: 2,
        title: "Happy Traveling on HyupJea beatch",
        regDate: "2014-05-20T02:17:00+00:00",
        regUser: "David Hwang",
        like: 9999,
        cource: ["now", "airport", "bus", "HyupJea"]
    },
    {
        id: 3,
        recommendId: 2,
        title: "Happy Traveling on HyupJea beatch",
        regDate: "2014-05-20T02:17:00+00:00",
        regUser: "David Hwang",
        like: 9999,
        cource: ["now", "airport", "bus", "HyupJea"]
    },
    {
        id: 1,
        recommendId: 3,
        title: "Happy Traveling on HyupJea beatch",
        regDate: "2014-05-20T02:17:00+00:00",
        regUser: "David Hwang",
        like: 9999,
        cource: ["now", "airport", "bus", "HyupJea"]
    },
    {
        id: 2,
        recommendId: 3,
        title: "Happy Traveling on HyupJea beatch",
        regDate: "2014-05-20T02:17:00+00:00",
        regUser: "David Hwang",
        like: 9999,
        cource: ["now", "airport", "bus", "HyupJea"]
    },
    {
        id: 3,
        recommendId: 3,
        title: "Happy Traveling on HyupJea beatch",
        regDate: "2014-05-20T02:17:00+00:00",
        regUser: "David Hwang",
        like: 9999,
        cource: ["now", "airport", "bus", "HyupJea"]
    },
];

// results 상속 구조 필요. model 역시 세분화 필요.
var results = [
    {
        RankingId: 1,
        airplan: "take a airplan at 3:00",
        bus: "take a 2200 bus front airport",
        walk: "you'd walk to HyupJae for 5min",
        goal: "have a good time."
    },
    {
        RankingId: 2,
        airplan: "take a airplan at 3:00",
        bus: "take a 2200 bus front airport",
        walk: "you'd walk to HyupJae for 5min",
        goal: "have a good time."
    },
    {
        RankingId: 3,
        airplan: "take a airplan at 3:00",
        bus: "take a 2200 bus front airport",
        walk: "you'd walk to HyupJae for 5min!!!!",
        goal: "have a good time!!!."
    }
];