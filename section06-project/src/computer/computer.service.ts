import { Injectable } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Injectable()
export class ComputerService {
  constructor(
    private readonly cpuService: CpuService,
    private readonly diskService: DiskService,
  ) { }
    
}
