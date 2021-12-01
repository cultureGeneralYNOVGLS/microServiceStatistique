import { ObjectId } from 'bson';
import { GameModel } from '../models/game.model';
const fetch =  require('node-fetch');

export class StatisticDAO {

    async getStatisticByUser(user: string) : Promise<GameModel[]>{
        const game = await fetch('http://micro-service-game:3000/game/user/'+user);
        return await game.json() as GameModel[];
    }

}
