import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SupplierDto } from 'src/dto/supplier.dto';
import { Supplier } from './supplier.entity';
import { SupplierService } from './supplier.service';

@ApiTags('supplier')
@Controller('/supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Get('/all')
  @ApiOperation({ summary: '获取所有供应商' })
  findAll(): Promise<Supplier[]> {
    return this.supplierService.findAll();
  }

  @Post()
  @ApiOperation({ summary: '新建供应商' })
  save(@Body() supplier: SupplierDto): Promise<Supplier> {
    return this.supplierService.save(supplier);
  }
}
