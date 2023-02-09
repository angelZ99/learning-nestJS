import { Injectable } from '@nestjs/common';

export interface Car {
	id: number; // Id is a optional property
	make: string;
	model: string;
}

// The service is a class that is used to provide data to the controller
// This data is generally retrieved from a database, before being returned to the controller
@Injectable()
export class CarsService {
	// This is a private property that is used to store the cars
	private cars = [
		{
			id: 1,
			make: 'Ford',
			model: 'Fusion Hybrid'
		},
		{
			id: 2,
			make: 'Tesla',
			model: 'Model S'
		},
		{
			id: 3,
			make: 'Tesla',
			model: 'Model 3'
		},
		{
			id: 4,
			make: 'Tesla',
			model: 'Model X'
		},
		{
			id: 5,
			make: 'Tesla',
			model: 'Model Y'
		},
		{
			id: 6,
			make: 'Tesla',
			model: 'Cybertruck'
		},
		{
			id: 7,
			make: 'Tesla',
			model: 'Roadster'
		}
	];

	// This is a public method that is used to retrieve all cars
	public getCars() {
		if (this.cars.length > 0) {
			return this.cars;
		}
		return null;
	}

	// This is a public method that is used to retrieve a single car by id
	public getCar(id: number) {
		const findCar = this.cars.find((car) => car.id === id);
		return findCar ? findCar : null;
	}
}
