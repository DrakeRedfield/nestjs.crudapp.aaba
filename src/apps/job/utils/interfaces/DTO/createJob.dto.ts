import { IsNotEmpty, IsString } from 'class-validator';

export class CreateJobDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}
