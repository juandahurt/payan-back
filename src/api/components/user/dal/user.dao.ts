import { connectToDB, disconnectDB } from "../../../../mongoose";
import UserModel, { User } from "./user.model";

export class UserDAO {
    async findByUsername(username: string): Promise<User | null> {
        let user = await UserModel.findOne({
            username: username
        })
        return user;
    }
}