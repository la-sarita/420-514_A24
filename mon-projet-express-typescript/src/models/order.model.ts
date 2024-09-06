import { IOrder } from '../interfaces/order.interface';

export class Order implements IOrder {
    constructor(
        public id: number,
        public userId: number,
        public productId: number,
        public quantity: number,
        public totalPrice: number
    ) {}
}
