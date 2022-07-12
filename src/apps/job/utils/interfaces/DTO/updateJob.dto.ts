import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateJobDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}
