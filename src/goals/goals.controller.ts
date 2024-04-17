import { Body, Controller, Post } from '@nestjs/common';
import { CreateGoalDto } from './dtos/create-goal.dto';

@Controller('goals')
export class GoalsController {
  @Post()
  create(@Body() input: CreateGoalDto) {
    return input;
  }
}
