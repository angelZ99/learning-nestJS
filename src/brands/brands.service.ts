import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
	private brands: Brand[] = [
		{
			id: uuid(),
			name: 'Nissan',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: uuid(),
			name: 'Toyota',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: uuid(),
			name: 'Honda',
			createdAt: new Date(),
			updatedAt: new Date()
		}
	];

	create(createBrandDto: CreateBrandDto) {
		const { name } = createBrandDto;
		const brand: Brand = {
			id: uuid(),
			name,
			createdAt: new Date(),
			updatedAt: new Date()
		};
		this.brands.push(brand);

		return brand;
	}

	findAll() {
		const brands = this.brands;
		if (!brands.length) {
			throw new NotFoundException('Brands not found');
		}
		return brands;
	}

	findOne(id: string) {
		const brand = this.brands.find((brand) => brand.id === id);
		if (!brand) {
			throw new NotFoundException(`Brand with id: "${id} not found`);
		}
		return brand;
	}

	update(id: string, updateBrandDto: UpdateBrandDto) {
		const { name } = updateBrandDto;

		const brandToUpdate = this.findOne(id);

		this.brands.map((brand) => {
			if (brand.id === id) {
				brandToUpdate.name = name;
				brandToUpdate.updatedAt = new Date();
				return brandToUpdate;
			} else {
				return brand;
			}
		});

		return brandToUpdate;
	}

	remove(id: string) {
		const findBrand = this.findOne(id);

		this.brands = this.brands.filter((brand) => brand.id !== id);
		return findBrand;
	}
}
