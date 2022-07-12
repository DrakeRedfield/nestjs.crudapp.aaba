import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/db/postgres/entities';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  getAllEmployees(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  getEmployeeById(id: number): Promise<Employee> {
    return this.employeeRepository.findOneBy({ id });
  }

  createEmployee(
    employeeData: Omit<Partial<Employee>, 'id'>,
  ): Promise<Employee> {
    return this.employeeRepository.save(employeeData);
  }

  async updateEmployee(
    id: number,
    newEmployeeData: Omit<Partial<Employee>, 'id'>,
  ): Promise<Employee> {
    const previousEmployeeData = await this.employeeRepository.findOneBy({
      id,
    });

    if (!previousEmployeeData)
      throw new NotFoundException("Employee doesn't exist.");

    const updatedEmployeeData = Object.assign(
      previousEmployeeData,
      newEmployeeData,
    );

    return this.employeeRepository.save(updatedEmployeeData);
  }

  deleteEmployee(id: number): Promise<DeleteResult> {
    return this.employeeRepository.softDelete(id);
  }
}
