import { Expose } from 'class-transformer';

export class ReportDto {
  @Expose()
  title: string;

  @Expose()
  content: string;
}
