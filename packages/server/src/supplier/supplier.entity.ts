import { Audit } from '@common/entity/audit.entity';
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity({
  name: 'supplier',
  comment: '供应商',
})
export class Supplier extends Audit {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
    name: 'phone',
    comment: '电话',
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: false,
    name: 'company_name',
    comment: '单位名',
  })
  companyName: string;

  @Column({
    type: 'varchar',
    length: '512',
    nullable: false,
    name: 'address',
    comment: '地址',
  })
  address: string;

  @Column({
    type: 'varchar',
    length: '64',
    nullable: false,
    name: 'contact',
    comment: '联系人',
  })
  contact: string;

  @Column({
    type: 'boolean',
    name: 'class_one_business',
    nullable: false,
    comment: '一类经营',
  })
  classOneBusiness: boolean;

  @Column({
    type: 'varchar',
    length: '128',
    name: 'class_two_business',
    comment: '二类经营',
    nullable: true,
  })
  classTwoBusiness: string;

  @Column({
    type: 'varchar',
    length: '128',
    name: 'class_two_license_number',
    comment: '二类许可证号',
    nullable: true,
  })
  classTwoLicenseNumber: string;

  @Column({
    type: 'varchar',
    length: '128',
    name: 'class_three_business',
    comment: '三类经营',
    nullable: true,
  })
  classThreeBusiness: string;

  @Column({
    type: 'varchar',
    length: '128',
    name: 'class_three_license_number',
    comment: '三类许可证号',
    nullable: true,
  })
  classThreeLicenseNumber: string;

  @Column({
    type: 'varchar',
    length: '512',
    name: 'business_certificate',
    comment: '营业执照',
    nullable: true,
  })
  businessCertificate: string;

  @Column({
    type: 'timestamp',
    name: 'business_certificate_expiration',
    comment: '营业执照有效期',
    nullable: true,
  })
  businessCertificateExpiration: Timestamp;

  @Column({
    type: 'varchar',
    length: '512',
    name: 'production_certificate',
    comment: '生产许可',
    nullable: true,
  })
  productionCertificate: string;

  @Column({
    type: 'timestamp',
    name: 'production_certificate_expiration',
    comment: '生产许可有效期',
    nullable: true,
  })
  productionCertificateExpiration: Timestamp;
}
