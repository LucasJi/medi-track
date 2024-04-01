import { Body, Controller, Get, Post } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { Supplier } from './supplier.entity';
import { SupplierDto } from 'src/dto/supplier.dto';

@Controller('/supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Get('/all')
  findAll(): Promise<Supplier[]> {
    return this.supplierService.findAll();
  }

  @Post()
  save(@Body() supplier: SupplierDto): Promise<Supplier> {
    return this.supplierService.save(supplier);
  }
}
