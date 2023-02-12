import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUpdateCarDto {
	@IsNotEmpty({ message: 'Make is required' })
	@IsString({ message: 'Make must be a string' })
	readonly make: string;
	@IsNotEmpty({ message: 'Model is required' })
	@IsString({ message: 'Model must be a string' })
	readonly model: string;
}
