import { PYLocalizableString } from "../../../abstract/localizable-string.interface";

export class PYElementType {
    _id: string;
    name: string;
    parent?: string;

    constructor(_id: string, name: string, parent?: string) {
        this._id = _id;
        this.name = name;
        this.parent = parent;
    }
}