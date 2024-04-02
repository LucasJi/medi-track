import { Column } from 'typeorm';

export abstract class Audit {
  @Column({
    name: 'audit',
    type: 'boolean',
    default: false,
  })
  audit: boolean;

  @Column({
    name: 'opinion',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  opinion: string;
}
