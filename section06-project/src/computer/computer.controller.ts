import { Controller } from '@nestjs/common';
import { ComputerService } from './computer.service';

@Controller('computer')
export class ComputerController {
  constructor(private readonly computerService: ComputerService) {}
}
