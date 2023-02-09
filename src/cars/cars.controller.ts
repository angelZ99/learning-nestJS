import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Param,
	Body,
	ParseIntPipe,
	NotFoundException
} from '@nestjs/common';
import { Car, CarsService } from './cars.service';

// The controller is a class that is used to handle incoming requests and return responses to the client
// The controller is also used to define the routes that the application will respond to and the HTTP methods that it will accept
@Controller('cars')
export class CarsController {
	// The constructor is used to inject the service into the controller
	// The service is then used to retrieve data from the database
	constructor(private readonly carsService: CarsService) {}

	@Get()
	findAll() {
		const allCars = this.carsService.getCars();
		return allCars ? allCars : new NotFoundException('No cars found');
	}

	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number) {
		const car = this.carsService.getCar(id);
		return car ? car : new NotFoundException(`Car with id ${id} not found`);
	}

	@Post()
	createOne(@Body('car') body: any) {
		return 'Create a new car';
	}

	@Put(':id')
	updateOne(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
		return `Update car with id ${id}`;
	}

	@Delete(':id')
	deleteOne(@Param('id', ParseIntPipe) id: number) {
		return `Delete car with id ${id}`;
	}
}
