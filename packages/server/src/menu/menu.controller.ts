import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SupplierDto } from 'src/dto/supplier.dto';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './menu.dto';
import { Menu } from './menu.entity';

@ApiTags('menu')
@Controller('/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @ApiOperation({ summary: '新建目录' })
  save(@Body() menu: CreateMenuDto): Promise<Menu> {
    return this.menuService.save(menu);
  }

  @Delete('/:id')
  @ApiOperation({ summary: '删除目录' })
  delete(id: number): void {
    this.menuService.delete(id);
  }
}
