import express from 'express';
import { PYFeedRouter } from './components/feed/web/feed.router';

const appRouter = express.Router();
appRouter.use('/feed', new PYFeedRouter().router)

export default appRouter;