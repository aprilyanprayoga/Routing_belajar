import type { Product } from "../data/product";

export interface CartItem extends Product {
    quantity: number;
}