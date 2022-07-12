import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './service/employee/employee.service';
import { CreateEmployeeDTO, UpdateEmployeeDTO } from './utils/interfaces';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Get()
  allEmployees() {
    return this.employeeService.getAllEmployees();
  }

  @Get(':id')
  getEmployeeById(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.getEmployeeById(id);
  }

  @Post()
  createEmployee(@Body() employeeData: CreateEmployeeDTO) {
    return this.employeeService.createEmployee(employeeData);
  }

  @Put(':id')
  updateEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Body() employeeData: UpdateEmployeeDTO,
  ) {
    return this.employeeService.updateEmployee(id, employeeData);
  }

  @Delete(':id')
  deleteEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.deleteEmployee(id);
  }
}
