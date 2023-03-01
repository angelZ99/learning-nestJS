import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUpdateCarDto {
	@IsNotEmpty({ message: 'Brand is required' })
	@IsString({ message: 'Brand must be a string' })
	readonly brand: string;
	@IsNotEmpty({ message: 'Model is required' })
	@IsString({ message: 'Model must be a string' })
	readonly model: string;
}
