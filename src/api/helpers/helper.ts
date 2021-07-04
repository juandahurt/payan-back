
export class Helper {
    static async randomDocument(model: any) {
        let count = await model.countDocuments();
        let rand = Math.floor(Math.random() * count);
        return await model.findOne().skip(rand);
    }
}