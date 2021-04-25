import { Place } from "../dal/place.model";
import { PlaceService } from "../services/place.service";

export class PlaceController {
    /**
     * Lists all the historic places
     * @param req Client request
     * @param res Server response
     */
     static async list(req: any, res: any) {
        try {
            let places = await new PlaceService().list();
            let response: ServerResponse<Place[]> = {
                success: true,
                title: "Éxito",
                description: "Los lugares históricos han sido listados exitosamente.",
                data: places
            }
            res.status(200).send(response);
        } catch (err) {
            console.log(err)
        }
    }
}