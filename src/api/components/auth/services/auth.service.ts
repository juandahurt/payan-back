import  jwt from 'jsonwebtoken';
import { connectToDB, disconnectDB } from '../../../../mongoose';
import userModel, { User } from '../../user/dal/user.model';
import { UserService } from '../../user/services/user.service';
import { UserCredential } from '../dal/credential.model';
import { AuthError } from '../errors/auth.errors';

export class AuthService {
    async signIn(credential: UserCredential): Promise<String> {
        let userService = new UserService();
        let user = await userService.findByUsername(credential.username)
        if (user == null) {
            throw AuthError.invalidCredential;
        } else {
            let token = jwt.sign(credential, 'private_key');
            return token;
        }
    }
}