import { ImageComponentConfig } from '../image';

export interface ShoppingCartItem {
  title?: string;
  image?: ImageComponentConfig;
  subtitle?: string;
  additionalContents?: string[];
  price?: string;
  total?: string;
  step?: number;
  max?: number;
  min?: number;
  value?: number;
}
