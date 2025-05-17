import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportsDto } from './dtos/create-reports.dto';
import { Serialize } from '../interceptors/custom-interceptor';
import { ReportDto } from './dtos/report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  createReport(@Body() dto: CreateReportsDto) {
    return this.reportsService.createReport(dto);
  }

  @Get()
  @Serialize(ReportDto)
  getAllReports() {
    return this.reportsService.getAllReports();
  }

  @Get('/:id')
  getReport(id: number) {
    return this.reportsService.getReport(id);
  }
}
