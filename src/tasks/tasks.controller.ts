import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  getAllTasks() {
    return this.service.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.service.createTask(newTask.title, newTask.description);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    return this.service.updateTask(id, updatedFields);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.service.deleteTask(id);
  }
}
