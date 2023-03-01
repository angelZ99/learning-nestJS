import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
	@IsString()
	@IsNotEmpty()
	name: string;
}
