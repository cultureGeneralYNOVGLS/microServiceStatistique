import { StatisticModel } from "../models/statistic.model";
import { GameModel } from "../models/game.model";
import { StatisticDAO } from "../dao/statistic.dao";
import { ObjectId } from 'bson';

export class StatisticService {
    statisiticDao = new StatisticDAO();

    async getStatisticByUser(user: string) : Promise<StatisticModel>{
        const statistics: StatisticModel = {
            nbParty:0,
            nbBadAnswer:0,
            nbGoodAnswer:0,
            nameGame:"ALL"
        };
        const game = await this.statisiticDao.getStatisticByUser(user);
        let i = 0;
        game.forEach(element => {
            statistics.nbGoodAnswer = element.score + statistics.nbGoodAnswer;
            statistics.nbBadAnswer = element.numberQuestions - element.score + statistics.nbBadAnswer;
            i++;
        });
        statistics.nbParty = i;
        return statistics;
    }

    async getStatisticByCategoryByUser(user: string, category: ObjectId) : Promise<StatisticModel[]>{
        const statistics: StatisticModel[] = [];
        const game = await this.statisiticDao.getStatisticByUser(user);
        let i=0;
        game.forEach(element => {
            const statistic: StatisticModel = {
                nbParty:0,
                nbBadAnswer:0,
                nbGoodAnswer:0,
                nameGame:""
            };
            statistic.nbGoodAnswer = element.score;
            statistic.nbBadAnswer = element.numberQuestions - element.score;
            statistic.nameGame = element.name;
            i++;
            if(new ObjectId(element.category._id).equals(category)){
                statistics.push(statistic);
            }
        });

        return statistics;
    }
}