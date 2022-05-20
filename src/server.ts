/**
 * Main module.
 */

import { config } from './config';
import { Express } from './express'
import { connectToDB } from './mongoose';
import i18n from 'i18n';
import path from 'path';

class Server {
    static async run() {
        await connectToDB();
        let express = new Express()
        i18n.configure({
            locales: ['es', 'en'],
            defaultLocale: 'es',
            directory: path.join(__dirname, "locales")
        })
        express.app.listen(config.port, config.host, () => {
            console.log(`server started on ${config.host}:${config.port}`);
        }).on('error', function(err: any) {
            process.exit()
        });
    }
}

Server.run()