import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoapiService } from './todoapi.service';
import { CreateTodoapiDto } from './dto/create-todoapi.dto';
import { UpdateTodoapiDto } from './dto/update-todoapi.dto';
import { Todoapi } from './entities/todoapi.entity';

@Controller('todoapi')
export class TodoapiController {
  constructor(private readonly todoapiService: TodoapiService) {}

  @Post()
  create(@Body() createTodoapiDto: CreateTodoapiDto, todoapi : Todoapi) {
    return this.todoapiService.create(createTodoapiDto);
  }

  @Get()
  findAll() {
    return this.todoapiService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.todoapiService.findOne(+id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateTodoapiDto: UpdateTodoapiDto) {
    return this.todoapiService.update(+id, updateTodoapiDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.todoapiService.remove(+id);
  }
}
