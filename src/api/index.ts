import express from 'express';
import { AuthRouter } from './components/auth/web/auth.router';
import { FactRouter } from './components/fact/web/fact.router';
import { PlaceRouter } from './components/place/web/place.router';

const appRouter = express.Router();
appRouter.use('/place', new PlaceRouter().router);
appRouter.use('/auth', new AuthRouter().router);
appRouter.use('/fact', new FactRouter().router);

export default appRouter;