/**
 * Main module.
 */

import { config } from './config';
import { Express } from './express'
import { connectToDB } from './mongoose';

class Server {
    static async run() {
        await connectToDB();
        let express = new Express()
        express.app.listen(config.port, config.host, () => {
            console.log(`server started on ${config.host}:${config.port}`);
        }).on('error', function(err: any) {
            process.exit()
        });
    }
}

Server.run()