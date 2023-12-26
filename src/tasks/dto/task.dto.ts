import { TaskStatus } from '../task.entity';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @IsString() // Valida que el campo solo pueda ser string
  @IsNotEmpty() // Valida que el campo no esté vacío
  @MinLength(4) // Valida que el campo tenga la longitud que se especifique
  title: string;
  @IsString()
  description: string;
}

export class UpdateTaskDto {
  @IsString()
  @IsOptional() // Valida que el campo puede venir o no, que sea opcional
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE]) // Valida que solo pueda recibir los valores dados
  status?: TaskStatus;
}
