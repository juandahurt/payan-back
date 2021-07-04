import { User } from "../dal/user.model";
import { UserDAO } from "../dal/user.dao";

export class UserService {
    async findByUsername(username: string): Promise<User | null> {
        return new UserDAO().findByUsername(username);
    }
}