import {v4 as uuidv4} from 'uuid';
import {Make} from './make';


export abstract class Car {
    private _id: string;
    private _make: Make;
    private _model: string;
    private _year: number;
    private _motor_type: string;
    constructor(
        make: Make,
        model: string,
        year: number,
        motor_type: string,
    ) {
        this._id = uuidv4();
        this._make = make;
        this._model = model;
        this._year = year;
        this._motor_type = motor_type;
    }
    
        get id(): string {
            return this._id;
        }
    
    get make(): Make {
        return this._make;
    }

    get model(): string {
        return this._model;
    }

    get year(): number {
        return this._year;
    }

    get motor_type(): string {
        return this._motor_type;
    }
}