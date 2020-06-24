import { User } from './user.model';

export class Trip{
     id: string;
     user: User;
     departure: string;
     destination: string;
     car: string;
     price: number;
     date: Date;
     paticipations: User[];
     rating: string;
     comment: string;
     availablePlaces: number;
     bags: number; 

	constructor($id: string, $user: User, $departure: string, $destination: string, $car: string, $price: number, $date: Date, $comment: string, $availablePlaces: number, $bags: number, $paticipations: User[]) {
		this.id = $id;
		this.user = $user;
		this.departure = $departure;
		this.destination = $destination;
		this.car = $car;
		this.price = $price;
		this.date = $date;
		this.paticipations = $paticipations;
		this.rating = "";
		this.comment = $comment;
		this.availablePlaces = $availablePlaces;
        this.bags = $bags;
        
	}



    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getuser(): User {
        return this.user;
    }

    public setuser(user: User): void {
        this.user = user;
    }

    public getDeparture(): string {
        return this.departure;
    }

    public setDeparture(departure: string): void {
        this.departure = departure;
    }

    public getDestination(): string {
        return this.destination;
    }

    public setDestination(destination: string): void {
        this.destination = destination;
    }

    public getCar(): string {
        return this.car;
    }

    public setCar(car: string): void {
        this.car = car;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getDate(): Date {
        return this.date;
    }

    public setDate(date: Date): void {
        this.date = date;
    }

    public getPaticipations(): User[] {
        return this.paticipations;
    }

    public setPaticipations(paticipations: User[]): void {
        this.paticipations = paticipations;
    }

    public getRating(): string {
        return this.rating;
    }

    public setRating(rating: string): void {
        this.rating = rating;
    }

    public getComment(): string {
        return this.comment;
    }

    public setComment(comment: string): void {
        this.comment = comment;
    }

    public getAvailablePlaces(): number {
        return this.availablePlaces;
    }

    public setAvailablePlaces(availablePlaces: number): void {
        this.availablePlaces = availablePlaces;
    }

    public getBags(): number {
        return this.bags;
    }

    public setBags(bags: number): void {
        this.bags = bags;
    }

    

}