import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const SupplierSchema = z.object({
  phone: z.string().describe('电话'),
  companyName: z.string().describe('单位名称'),
  address: z.string().describe('地址'),
  contact: z.string().describe('联系人'),
  classOneBusiness: z.boolean().describe('一类经营'),

  classTwoBusiness: z.string().optional().describe('二类经营'),
  classTwoLicenseNumber: z.string().optional().default('二类经营许可'),
  classThreeBusiness: z.string().optional().describe('三类经营'),
  classThreeLicenseNumber: z.string().optional().describe('三类经营许可'),
  businessCertificate: z.string().optional().describe('营业执照'),
  businessCertificateExpiration: z.date().optional().describe('营业执照有效期'),
  productionCertificate: z.string().optional().describe('生产许可'),
  productionCertificateExpiration: z
    .date()
    .optional()
    .describe('生产许可有效期'),
});

export class SupplierDto extends createZodDto(SupplierSchema) {}
