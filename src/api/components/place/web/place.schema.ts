import Joi from "joi";
import { PlaceError } from "../errors/place.errors";

export default Joi.object({
    name: Joi.string()
        .required()
        .error(new Error(PlaceError.noNameProvided.id)),

    category: Joi.string()
        .required()
        .valid('MUSEUM')
        .error(errors => {
            errors.forEach(e => {
                switch (e.code) {
                    case "any.required":
                        e.message = PlaceError.noCategoryProvided.id
                        break
                    case "any.only":
                        e.message = PlaceError.categoryNotSupported.id
                        break
                    default:
                        break
                }
            });
            return errors[0];
        })
});