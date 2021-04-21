// @ts-ignore
import logger from '@juandahurt_t/logger';
import { AppError } from '../../../error';
import { UserService } from './user.services';

export class UserController {
    /**
     * Creates a new user.
     * @param req - client request
     * @param res - server response
     */
    static async create(req: any, res: any) {
        let context = {
            user: req.body
        };
        try {
            let user = await new UserService().create(context);
            logger.info(`user ${user._id} has been created`);
            res.status(200).send({
                status: 'success',
                message: 'User created successfully',
                data: user
            });
        } catch (err) {
            logger.error('create user failed: ' + err.name);
            if (err instanceof AppError) {
                res.status(err.httpCode).send({
                    status: 'error',
                    error: {
                        name: err.name,
                        description: err.description
                    },
                    data: context.user
                });
            } else {
                res.status(500).send(err.message);
            }
        }
    }

    static async delete(req: any, res: any) {
        // let context = {
        //     userId: req.params.id
        // }
        // try {
        //     let user = await new UserService().delete(context);
        //     logger.info(`user ${user._id} has been deleted`);
        //     res.status(200).send({
        //         status: 'success',
        //         message: 'User deleted successfully',
        //         data: user
        //     });
        // } catch (err) {
        //     logger.error('delete user failed: ' + err.name);
        //     if (err instanceof AppError) {
        //         res.status(err.httpCode).send({
        //             status: 'error',
        //             error: {
        //                 name: err.name,
        //                 description: err.description
        //             },
        //             data: {
        //                 userId: context.userId
        //             }
        //         });
        //     } else {
        //         res.status(500).send(err.message);
        //     }
        // }
    }
}