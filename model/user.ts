
export class User {
    private _ssn: string;
    private _name: string;
    private _email: string;
    private _password: string;
    private _role: string;
    constructor(
        ssn: string,
        name: string,
        email: string,
        password: string,
        role: string,
    ) {
        this._ssn = ssn;
        this._name = name;
        this._email = email;
        this._password = password;
        this._role = role;
    }

    get ssn(): string {
        return this._ssn;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    get role(): string {
        return this._role;
    }

    set role(role: string) {
        this._role = role;
    }
}