import { Customer } from "./customer.model";
import { CustomersController } from "./customers.controller";
import { CustomersService } from "./customers.service";


describe('CustomersController', () => {
  let customersController: CustomersController;
  let customersService: CustomersService;

  beforeEach(() => {
    customersService =  new CustomersService(Customer);    
    customersController = new CustomersController(customersService);

  });

  describe('findAll',() => {
    it('should return an array of customers', async() => {
      const result = Promise ['test'];
      jest.spyOn(customersService, 'findAll').mockImplementation(() => result);

      expect(await customersController.findAll()).toBe(result);

    });

  });  



});