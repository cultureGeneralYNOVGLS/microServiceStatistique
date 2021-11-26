import { ObjectId } from 'bson';
import { Router } from 'express';
import { StatisticService } from '../services/statistic.services';

const statisticRouter = Router();
const statisticService = new StatisticService();

statisticRouter.get('/:user',async (request, response) => {
    console.log('route');
    response.json(await statisticService.getStatisticByUser(request.params.user));
})
statisticRouter.get('/:user/:category',async (request, response) => {
    console.log('route2');
    response.json(await statisticService.getStatisticByCategoryByUser(request.params.user,new ObjectId(request.params.category)));
})
export default statisticRouter;