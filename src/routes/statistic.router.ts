import { ObjectId } from 'bson';
import { Router } from 'express';
import { StatisticService } from '../services/statistic.services';

const userPing = require('../middleware/pingUser.middleware');

const statisticRouter = Router();
const statisticService = new StatisticService();

/**
 * @openapi
 * /api/stat/:user:
 *   get:
 *     summary: Retrieve a statistic of user
 *     description: Retrieve a statistic of user
 */
statisticRouter.get('/:user', userPing,async (request, response) => {
    console.log('route');
    response.json(await statisticService.getStatisticByUser(request.params.user));
})

/**
 * @openapi
 * /api/stat/:user/:category:
 *   get:
 *     summary: Retrieve a statistic of user of category
 *     description: Retrieve a statistic of user of category
 */
statisticRouter.get('/:user/:category',async (request, response) => {
    console.log('route2');
    response.json(await statisticService.getStatisticByCategoryByUser(request.params.user,new ObjectId(request.params.category)));
})
export default statisticRouter;