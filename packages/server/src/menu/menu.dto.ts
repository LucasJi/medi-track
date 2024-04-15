import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { MenuStatus, MenuType } from './menu.entity';

const MenuSchema = z.object({
  id: z.number().describe('id'),
  type: z.nativeEnum(MenuType).describe('类型'),
  name: z.string().describe('名称'),
  label: z.string().describe('标签'),
  parentId: z.number().optional().describe('父目录id'),
  route: z.string().describe('路由'),
  component: z.string().optional().describe('组件'),
  icon: z.string().optional().describe('图标'),
  hide: z.boolean().optional().describe('是否隐藏'),
  order: z.number().optional().describe('顺序'),
  status: z.nativeEnum(MenuStatus).describe('状态'),
});

export class MenuDto extends createZodDto(MenuSchema) {}

export class CreateMenuDto extends createZodDto(
  MenuSchema.omit({ id: true }),
) {}
