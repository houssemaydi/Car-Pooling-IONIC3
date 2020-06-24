export class User{
     id: string;
     name: string;
     prename: string;
     email: string;
     password: string;
     num: number;
     picture: string;
     verification: boolean;
     rating: number;
     activeTripId: string;
     history: number[];
	constructor($id: string, $name: string, $prename: string, $email: string, $password: string, $num: number) {
		this.id = $id;
		this.name = $name;
		this.prename = $prename;
		this.email = $email;
		this.password = $password;
		this.num = $num;
		this.picture = "";
		this.verification = false;
		this.rating = 0;
		this.activeTripId = "";
		this.history = [];
	}
    

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPrename(): string {
        return this.prename;
    }

    public setPrename(prename: string): void {
        this.prename = prename;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getNum(): number {
        return this.num;
    }

    public setNum(num: number): void {
        this.num = num;
    }

    public getPicture(): string {
        return this.picture;
    }

    public setPicture(picture: string): void {
        this.picture = picture;
    }

    public isVerification(): boolean {
        return this.verification;
    }

    public setVerification(verification: boolean): void {
        this.verification = verification;
    }

    public getRating(): number {
        return this.rating;
    }

    public setRating(rating: number): void {
        this.rating = rating;
    }

    public getActiveTripId(): string {
        return this.activeTripId;
    }

    public setActiveTripId(activeTripId: string): void {
        this.activeTripId = activeTripId;
    }

    public getHistory(): number[] {
        return this.history;
    }

    public setHistory(history: number[]): void {
        this.history = history;
    }


	

    
}