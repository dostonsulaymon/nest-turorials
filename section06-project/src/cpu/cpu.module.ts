import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CpuController } from './cpu.controller';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [CpuService],
  controllers: [CpuController],
  providers: [CpuService],
  exports: [PowerModule],
})
export class CpuModule {}
