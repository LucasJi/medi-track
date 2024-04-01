import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './supplier.entity';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>,
  ) {}

  save(supplier: Supplier): Promise<Supplier> {
    return this.supplierRepository.save(supplier);
  }

  findAll(): Promise<Supplier[]> {
    return this.supplierRepository.find();
  }

  findOne(id: number): Promise<Supplier | null> {
    return this.supplierRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.supplierRepository.delete(id);
  }
}
