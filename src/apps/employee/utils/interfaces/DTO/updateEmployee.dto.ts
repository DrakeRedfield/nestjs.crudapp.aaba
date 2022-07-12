import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateEmployeeDTO {
  @IsString()
  @IsNotEmpty()
  firstName?: string;

  @IsString()
  @IsNotEmpty()
  lastName?: string;

  @IsInt()
  @IsNotEmpty()
  jobId?: number;
}
