/**
 * Express config.
 */

import express from 'express';
import { config, environments } from './config'

// @ts-ignore
import morgan from 'morgan';
import cors from 'cors';
import appRouter from './api';

export class Express {
    public app: any

    constructor() {
        this.app = express()
        this.setMiddlewares()
        if (config.env === environments.dev) {
            this.setDevDependecies()
        }
        this.setRouter()
    }

    private setMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());
    }

    private setRouter() {
        this.app.use(appRouter)
    }

    private setDevDependecies() {
        this.app.use(morgan('dev'))           
    }
}
