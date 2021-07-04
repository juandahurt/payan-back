import express from 'express';
import { AuthRouter } from './components/auth/web/auth.router';
import { PlaceRouter } from './components/place/web/place.router';

const appRouter = express.Router();
appRouter.use('/place', new PlaceRouter().router);
appRouter.use('/auth', new AuthRouter().router);

export default appRouter;