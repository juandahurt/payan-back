import express from 'express';
import { AppVersionRouter } from './components/app-version/web/app-version.router';
import { PYCollectionRouter } from './components/collection/web/collection.router';
import { PYFeedRouter } from './components/feed/web/feed.router';

const appRouter = express.Router();
appRouter.use('/app-version', new AppVersionRouter().router);
appRouter.use('/feed', new PYFeedRouter().router)
appRouter.use('/collection', new PYCollectionRouter().router)

export default appRouter;