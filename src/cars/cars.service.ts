import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { CreateUpdateCarDto } from './dtos/createUpdateCarDto';

import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
	private cars: Car[] = [
		{
			id: uuid(),
			brand: 'Ford',
			model: 'Fusion Hybrid'
		},
		{
			id: uuid(),
			brand: 'Tesla',
			model: 'Model S'
		},
		{
			id: uuid(),
			brand: 'Tesla',
			model: 'Model 3'
		},
		{
			id: uuid(),
			brand: 'Tesla',
			model: 'Model X'
		},
		{
			id: uuid(),
			brand: 'Tesla',
			model: 'Model Y'
		},
		{
			id: uuid(),
			brand: 'Tesla',
			model: 'Cybertruck'
		},
		{
			id: uuid(),
			brand: 'Tesla',
			model: 'Roadster'
		}
	];

	public getCars(): Car[] | null {
		if (this.cars.length > 0) {
			return this.cars;
		}
		throw new NotFoundException('No cars found');
	}

	public getCar(id: string): Car | null {
		const findCar = this.cars.find((car) => car.id === id);
		if (findCar) {
			return findCar;
		}
		throw new NotFoundException(`Car with id ${id} not found`);
	}

	public createCar(car: CreateUpdateCarDto): Car {
		const newCar: Car = {
			id: uuid(),
			...car
		};
		this.cars.push(newCar);
		return newCar;
	}

	public updateCar(id: string, car: CreateUpdateCarDto): Car | null {
		const findCar = this.getCar(id);

		findCar.brand = car.brand;
		findCar.model = car.model;
		return findCar;
	}

	public deleteCar(id: string): Car | null {
		const findCar = this.getCar(id);

		this.cars = this.cars.filter((car) => car.id !== id);
		return findCar;
	}
}
