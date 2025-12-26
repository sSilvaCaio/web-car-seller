import { v4 as uuidv4 } from 'uuid';

export class CarBody {
    private _id: string;
    private _type: string;

    constructor(type: string) {
        this._id = uuidv4();
        this._type = type;
    }

    get id(): string {
        return this._id;
    }

    get type(): string {
        return this._type;
    }
}