export class User {
    private _email: string;
    private _password: string;

    constructor(email: string, password: string) {
        this._email = email;
        this._password = password;
    }

    public get getEmail(): string {
        return this._email;
    }

    public set setEmail(value: string) {
        this._email = value;
    }

    public get getPassword(): string {
        return this._password;
    }

    public set setPassword(value: string) {
        this._password = value;
    }
}
