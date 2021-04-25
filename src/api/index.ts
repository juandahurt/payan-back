import express from 'express';
import { PlaceRouter } from './components/place/web/place.router';

const appRouter = express.Router();
appRouter.use('/place', new PlaceRouter().router);

export default appRouter;