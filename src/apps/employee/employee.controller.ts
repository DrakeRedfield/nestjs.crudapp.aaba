import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './service/employee/employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Get()
  allEmployees() {
    return this.employeeService.getAllEmployees();
  }
}
