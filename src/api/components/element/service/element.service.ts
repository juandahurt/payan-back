import { PYElementDAO } from "../dal/element.dao";
import { PYElementPageDTO } from "../dtos/element-page.dto";
import { PYElementBusinessLogic } from "../interfaces/element-business-logic.interface";
import { PYElementSectionImageItem, PYElementSectionItemLayout, PYElementSectionTitleItem } from "../models/element-section-item.model";
import { PYElementSection } from "../models/element-section.model";

export class PYElementService implements PYElementBusinessLogic {
    elementDAO: PYElementDAO;

    constructor() {
        this.elementDAO = new PYElementDAO();
    }

    async buildLayout(id: string): Promise<PYElementPageDTO> {
        // TODO: throw error when element is not found!
        let element = await this.elementDAO.getElementById(id);
        let page = new PYElementPageDTO();

        if (element) {
            // image section
            let imageItem = new PYElementSectionImageItem(element.image);
            let imageSection = new PYElementSection(PYElementSectionItemLayout.image);
            imageSection.items = [imageItem];

            // title section
            let titleItem = new PYElementSectionTitleItem(
                element.title,
                element.subtitle,
                element.secondaryImage
            );
            let titleSection = new PYElementSection(PYElementSectionItemLayout.title);
            titleSection.items = [titleItem];
            
            page.sections = [imageSection, titleSection];
        }

        return page;
    }
}