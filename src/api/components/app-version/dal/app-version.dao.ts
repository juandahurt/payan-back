import { connectToDB, disconnectDB } from "../../../../mongoose";
import AppVersionModel, { AppVersion } from "./app-version.model";

export class AppVersionDAO {
    /**
     * Creates a new app version
     */
     async create(version: AppVersion): Promise<AppVersion> {
        await connectToDB();
        let versionCreated = await AppVersionModel.create(version)
        await disconnectDB();
        return versionCreated;
    }

    async list(): Promise<AppVersion[]> {
        await connectToDB();
        let versions = await AppVersionModel.find({})
        await disconnectDB();
        return versions;
    }
}