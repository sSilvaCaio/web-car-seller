import { v4 as uuidv4 } from "uuid";

export class Sell{
    private _id: string;
    private _buyerId: string;
    private _carId: string;
    private _price: number;

    constructor(buyerId: string, carId: string, price: number) {
        this._id = uuidv4();
        this._buyerId = buyerId;
        this._carId = carId;
        this._price = price;
    }

    get id(): string {
        return this._id;
    }

    get buyerId(): string {
        return this._buyerId;
    }

    get carId(): string {
        return this._carId;
    }

    get price(): number {
        return this._price;
    }
}