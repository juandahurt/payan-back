import { PYElementPageDTO } from "../dtos/element-page.dto";

export interface PYElementBusinessLogic {
    buildLayout(id: string): Promise<PYElementPageDTO> 
}