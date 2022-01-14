import { ButtonComponentConfig } from '../button';
import { HeadingComponentConfig } from '../heading';
import { ImageComponentConfig } from '../image';
import { Tag } from '../tag';

export interface CardOneComponentConfig {
    data?: any;
    image?: ImageComponentConfig;
    imageTags?: Tag[];
    imageButtons?: ButtonComponentConfig[];
    rate?: number;
    titles?: HeadingComponentConfig[];
    currency?: string;
    finalPrice?: number;
    price?: number;
    additionalTags?: Tag[];
    additionalButtons?: ButtonComponentConfig[];
    descriptions?: string[];
}
