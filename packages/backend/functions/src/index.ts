import { onOrderCreate } from "./order";
import { onCartCreate } from "./payment";

export const makePayment = onCartCreate;
export const createOrder = onOrderCreate;
