import  jwt from 'jsonwebtoken';
import { UserService } from '../../user/services/user.service';
import { UserCredential } from '../dal/credential.model';
import { AuthError } from '../errors/auth.errors';

export class AuthService {
    async signIn(credential: UserCredential): Promise<String> {
        let userService = new UserService();
        let user = await userService.findByUsername(credential.username)
        if (user == null) {
            throw AuthError.invalidCredential;
        } else if (credential.password != user.password) {
            throw AuthError.invalidCredential;
        } else {
            user.password = null;
            let token = jwt.sign(user.toJSON(), process.env.JWT_PRIVATE_KEY || "private_key");
            return token;
        }
    }
}