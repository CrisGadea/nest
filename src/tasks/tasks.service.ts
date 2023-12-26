import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid'; // Librería de uuid
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks = [
    {
      id: '1',
      title: 'First Task',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }
  updateTask(id: string, updatedFields: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updatedFields);
    this.tasks.map((task) => (task.id === id ? newTask : Task));
    return newTask;
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
