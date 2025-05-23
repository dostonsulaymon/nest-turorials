import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { DiskController } from './disk.controller';
import { PowerModule } from 'src/power/power.module';

@Module({
  controllers: [DiskController],
  providers: [DiskService],
  exports: [PowerModule],
  imports: [DiskService],
})
export class DiskModule {}
