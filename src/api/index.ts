import express from 'express';
import { PYCollectionRouter } from './components/collection/web/collection.router';
import { PYFeedRouter } from './components/feed/web/feed.router';
import { PYHeroRouter } from './components/hero/web/hero.router';
import { PYPlaceRouter } from './components/place/web/place.router';
import { SearchRouter } from './components/search/web/search.router';

const appRouter = express.Router();
appRouter.use('/feed', new PYFeedRouter().router);
appRouter.use('/collection', new PYCollectionRouter().router);
appRouter.use('/place', new PYPlaceRouter().router);
appRouter.use('/hero', new PYHeroRouter().router);
appRouter.use('/search', new SearchRouter().router);

export default appRouter;