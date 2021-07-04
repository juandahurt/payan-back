import { connectToDB, disconnectDB } from "../../../../mongoose";
import UserModel, { User } from "./user.model";

export class UserDAO {
    async findByUsername(username: string): Promise<User | null> {
        await connectToDB();
        let user = await UserModel.findOne({
            username: username
        })
        await disconnectDB();
        return user;
    }
}