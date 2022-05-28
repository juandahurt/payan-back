import express from 'express';
import { PYCollectionRouter } from './components/collection/web/collection.router';
import { PYFeedRouter } from './components/feed/web/feed.router';
import { PYPlaceRouter } from './components/place/web/place.router';

const appRouter = express.Router();
appRouter.use('/feed', new PYFeedRouter().router)
appRouter.use('/collection', new PYCollectionRouter().router)
appRouter.use('/place', new PYPlaceRouter().router)

export default appRouter;