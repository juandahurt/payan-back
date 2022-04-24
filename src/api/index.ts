import express from 'express';
import { AppVersionRouter } from './components/app-version/web/app-version.router';
import { AuthRouter } from './components/auth/web/auth.router';
import { FactRouter } from './components/fact/web/fact.router';
import { PYFeedRouter } from './components/feed/web/feed.router';
import { PlaceRouter } from './components/place/web/place.router';

const appRouter = express.Router();
appRouter.use('/place', new PlaceRouter().router);
appRouter.use('/auth', new AuthRouter().router);
appRouter.use('/fact', new FactRouter().router);
appRouter.use('/app-version', new AppVersionRouter().router);
appRouter.use('/feed', new PYFeedRouter().router)

export default appRouter;