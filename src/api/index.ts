import express from 'express';
import { AppVersionRouter } from './components/app-version/web/app-version.router';
import { PYFeedRouter } from './components/feed/web/feed.router';

const appRouter = express.Router();
appRouter.use('/app-version', new AppVersionRouter().router);
appRouter.use('/feed', new PYFeedRouter().router)

export default appRouter;