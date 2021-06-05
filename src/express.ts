import express from 'express';
import { config, environments } from './config';
import swaggerJsDocs, { SwaggerDefinition } from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

// @ts-ignore
import morgan from 'morgan';
import cors from 'cors';
import appRouter from './api';

export class Express {
    public app: any

    constructor() {
        this.app = express();
        this.setMiddlewares();
        if (config.env === environments.dev) {
            this.setDevDependecies();
        }
        this.setRouter();
        this.setDocs();
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

    private setDocs() {
        let swaggerOptions = {
            swaggerDefinition: {
                info: {
                    title: "Payán API",
                    version: "1.0.0"
                },
                tags: [
                    {
                        name: "place",
                        description: "Acceso a los lugares más emblemáticos"
                    }
                ],
                schemes: [
                    "http",
                    "https"
                ]
            },
            apis: [
                "src/api/components/place/web/place.router.ts"
            ]
        }
        const swaggerDocs = swaggerJsDocs(swaggerOptions);
        this.app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
    }
}
