import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Customer } from "./customer.model";
import { CustomersService } from "./customers.service";

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {

  }

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }
  @Get(':id')
  async findOne(@Param() params): Promise<Customer> {
    return this.customersService.findOne(params.id);
  }

  @Post()
  async create(@Body() customer: Customer) {
    this.customersService.create(customer);
  }

  
  @Delete(':id')
  async delete(@Param() params) {
    this.customersService.delete(params.id);
  }





}