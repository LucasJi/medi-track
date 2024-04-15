import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

export enum MenuType {
  CATALOGUE = 'CATALOGUE',
  MENU = 'MENU',
}

export enum MenuStatus {
  ENABLE = 'ENABLE',
  DISABLE = 'DISABLE',
}

@Entity({
  name: 'menu',
  comment: '菜单',
})
export class Menu {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({
    type: 'enum',
    enum: MenuType,
    name: 'type',
    comment: '类型',
    default: MenuType.CATALOGUE,
  })
  type: MenuType;

  @Column({
    type: 'varchar',
    length: 128,
    name: 'name',
    comment: '名称',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 128,
    name: 'label',
    comment: '标签',
  })
  label: string;

  @Column({
    type: 'integer',
    nullable: true,
    name: 'parent_id',
    comment: '父目录id',
  })
  parentId: number;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'route',
    comment: '路由',
  })
  route: string;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'component',
    nullable: true,
    comment: '组件',
  })
  component: string;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'icon',
    nullable: true,
    comment: '图标',
  })
  icon: string;

  @Column({
    type: 'boolean',
    name: 'hide',
    default: false,
    comment: '是否隐藏',
  })
  hide: boolean;

  @Column({
    type: 'integer',
    name: 'order',
    nullable: true,
    comment: '顺序',
  })
  order: number;

  @Column({
    type: 'enum',
    enum: MenuStatus,
    name: 'status',
    comment: '状态',
    default: MenuStatus.ENABLE,
  })
  status: string;
}
