import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Customer } from '../customer/customer.model';
import { CustomersController } from '../customer/customers.controller';
import { CustomersService } from '../customer/customers.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'customer',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Customer]),
    
  ],
  controllers: [AppController,CustomersController],
  providers: [AppService,CustomersService],
})
export class AppModule {}
