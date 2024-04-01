import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'supplier',
  comment: '供应商',
})
export class Supplier {
  // 电话/单位名/地址/联系人/一类经营（具备/不具备）
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({
    name: 'phone',
    comment: '电话',
  })
  phone: string;

  @Column({
    name: 'company_name',
    comment: '单位名',
  })
  companyName: string;

  @Column({
    name: 'address',
    comment: '地址',
  })
  address: string;

  @Column({
    name: 'contact_person',
    comment: '联系人',
  })
  contactPerson: string;

  @Column({
    name: 'class_one_business',
    comment: '一类经营',
  })
  classOneBusiness: boolean;
}
