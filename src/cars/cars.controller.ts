// prettier-ignore
import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, ParseUUIDPipe } from '@nestjs/common';

import { CarsService } from './cars.service';

import { CreateUpdateCarDto } from './dtos/createUpdateCarDto';

// The controller is a class that is used to handle incoming requests and return responses to the client
// The controller is also used to define the routes that the application will respond to and the HTTP methods that it will accept
@Controller('cars')
export class CarsController {
	// The constructor is used to inject the service into the controller
	// The service is then used to retrieve data from the database
	constructor(private readonly carsService: CarsService) {}

	// obtain all cars
	@Get()
	findAll() {
		const allCars = this.carsService.getCars();
		return allCars;
	}

	// obtain a single car by id
	@Get(':id')
	findOne(@Param('id', ParseUUIDPipe) id: string) {
		const car = this.carsService.getCar(id);
		return car;
	}

	// create a new car
	@Post()
	createOne(@Body() requestCar: CreateUpdateCarDto) {
		const car = this.carsService.createCar(requestCar);
		return car;
	}

	// update a car by id
	@Put(':id')
	updateOne(
		@Param('id', ParseUUIDPipe) id: string,
		@Body() requestCar: CreateUpdateCarDto
	) {
		const car = this.carsService.updateCar(id, requestCar);
		return car;
	}

	// delete a car by id
	@Delete(':id')
	deleteOne(@Param('id', ParseUUIDPipe) id: string) {
		const car = this.carsService.deleteCar(id);
		return car;
	}
}
