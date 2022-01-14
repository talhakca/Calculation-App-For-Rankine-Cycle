import { ImageComponentConfig, CartItem, CartItemAdditionalContent } from '..';

export interface CartItemComponentConfig {
    image: ImageComponentConfig;
    divider: string;
    item: CartItem;
    additionalItems: CartItemAdditionalContent[];
}
