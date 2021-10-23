import { AppVersionDAO } from "../dal/app-version.dao";
import { AppVersion } from "../dal/app-version.model";
import { AppVersionError } from "../errors/app-version.errors";

export class AppVersionService {
    /**
     * Creates a place
     * @param place Contains the info of the new version
     */
     public async create(version: AppVersion): Promise<AppVersion> {
        let dao = new AppVersionDAO();
        let versions = await dao.list();
        versions.forEach(v => {
            if (v.number == version.number) {
                throw AppVersionError.numberAlreadyUsed
            }
        })
        return await dao.create(version);
    }
}