import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZodValidationPipe } from 'nestjs-zod';
import configuration from '../config/configuration';
import { Supplier } from './supplier/supplier.entity';
import { SupplierModule } from './supplier/supplier.module';
import { MenuModule } from './menu/menu.module';
import { Menu } from './menu/menu.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('dataSource.host') || 'localhost',
        port: configService.get('dataSource.port') || 5432,
        username: configService.get('dataSource.username') || 'postgres',
        password: configService.get('dataSource.password') || 'postgres',
        database: configService.get('dataSource.database') || 'medi-track',
        schema: configService.get('dataSource.schema') || 'public',
        entities: [Supplier, Menu],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    SupplierModule,
    MenuModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
