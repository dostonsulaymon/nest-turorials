import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportsEntity } from './reports.entity';
import { CreateReportsDto } from './dtos/create-reports.dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(ReportsEntity)
    private readonly repository: Repository<ReportsEntity>,
  ) {}

  createReport(dto: CreateReportsDto) {
    const report = this.repository.create({
      title: dto.title,
      content: dto.content,
      secret: dto.secret,
    });

    return this.repository.save(report);
  }

  getAllReports() {
    return this.repository.find();
  }

  getReport(id: number) {
    return this.repository.findOne({ where: { id } });
  }
}
