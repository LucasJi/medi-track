import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Menu } from './menu.entity';
import { CreateMenuDto, MenuDto } from './menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  save(createMenuDto: CreateMenuDto): Promise<Menu> {
    return this.menuRepository.save(createMenuDto);
  }

  delete(id: number): Promise<DeleteResult> {
    // TODO: 删除目录需要检查是否包含子目录
    return this.menuRepository.delete(id);
  }
}
