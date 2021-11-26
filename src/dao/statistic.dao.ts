import { ObjectId } from 'bson';
import { GameModel } from '../models/game.model';
const fetch =  require('node-fetch');

export class StatisticDAO {

    async getStatisticByUser(user: string) : Promise<GameModel[]>{
        const game = await fetch('http://10.44.17.0:7510/game/user/'+user);
        return await game.json() as GameModel[];
    }

}
