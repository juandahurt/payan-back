import { connectToDB, disconnectDB } from "../../../../mongoose";
import AppVersionModel, { AppVersion } from "./app-version.model";

export class AppVersionDAO {
    /**
     * Creates a new app version
     */
     async create(version: AppVersion): Promise<AppVersion> {
        let versionCreated = await AppVersionModel.create(version);
        return versionCreated;
    }

    async list(): Promise<AppVersion[]> {
        let versions = await AppVersionModel.find({});
        return versions;
    }
}