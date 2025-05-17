import { IsString } from 'class-validator';

export class CreateReportsDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  secret: string;
}
