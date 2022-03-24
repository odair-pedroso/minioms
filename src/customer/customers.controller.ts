import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Customer } from "./customer.model";
import { CustomersService } from "./customers.service";

@ApiTags('customers')
@Controller('/v1/customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {

  }
  @Get()  
  @ApiResponse({ status: 200, description: 'The customer list has been displayed successfully.' })
  async findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }
  @Get(':id')
  @ApiResponse({ status: 200, description: 'The customer has been displayed successfully.' })
  async findOne(@Param() params): Promise<Customer> {
    return this.customersService.findOne(params.id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  async create(@Body() customer: Customer) {
    this.customersService.create(customer);
  }


  @Delete(':id')
  @ApiResponse({ status: 200, description: 'The client was successfully deleted' })
  async delete(@Param() params) {
    this.customersService.delete(params.id);
  }
}