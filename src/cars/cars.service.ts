import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { CreateUpdateCarDto } from './dtos/createUpdateCarDto';

import { Car } from './interfaces/car.interface';

// * The service is a class that is used to provide data to the controller
// * This data is generally retrieved from a database, before being returned to the controller
@Injectable()
export class CarsService {
	// $ This is a private property that is used to store the cars
	private cars: Car[] = [
		{
			id: uuid(),
			make: 'Ford',
			model: 'Fusion Hybrid'
		},
		{
			id: uuid(),
			make: 'Tesla',
			model: 'Model S'
		},
		{
			id: uuid(),
			make: 'Tesla',
			model: 'Model 3'
		},
		{
			id: uuid(),
			make: 'Tesla',
			model: 'Model X'
		},
		{
			id: uuid(),
			make: 'Tesla',
			model: 'Model Y'
		},
		{
			id: uuid(),
			make: 'Tesla',
			model: 'Cybertruck'
		},
		{
			id: uuid(),
			make: 'Tesla',
			model: 'Roadster'
		}
	];

	// - Public method that is used to retrieve all cars
	public getCars(): Car[] | null {
		if (this.cars.length > 0) {
			return this.cars;
		}
		throw new NotFoundException('No cars found');
	}

	// - Public method that is used to retrieve a single car by id
	public getCar(id: string): Car | null {
		const findCar = this.cars.find((car) => car.id === id);
		if (findCar) {
			return findCar;
		}
		throw new NotFoundException(`Car with id ${id} not found`);
	}

	//- Public method that is used to create a new car
	public createCar(car: CreateUpdateCarDto): Car {
		const newCar: Car = {
			id: uuid(),
			...car
		};
		this.cars.push(newCar);
		return newCar;
	}

	// - Public method that is used to update a car by id
	public updateCar(id: string, car: CreateUpdateCarDto): Car | null {
		let findCar = this.getCar(id);

		findCar.make = car.make;
		findCar.model = car.model;
		return findCar;
	}

	// - Public method that is used to delete a car by id
	public deleteCar(id: string): Car | null {
		const findCar = this.getCar(id);

		this.cars = this.cars.filter((car) => car.id !== id);
		return findCar;
	}
}
