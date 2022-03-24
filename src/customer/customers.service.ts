import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Customer } from "./customer.model";

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer)
    private customerModel: typeof Customer
  ) { }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.findAll();
  }

  async findOne(id: number): Promise<Customer> {
    return this.customerModel.findByPk(id);
  }

  async create(customer: Customer) {
    this.customerModel.create(customer);
  }

  
  async delete(id: number) {
    const customer: Customer = await this.findOne(id);
    customer.destroy();
  }


}


