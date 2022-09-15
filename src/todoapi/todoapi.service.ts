import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoapiDto } from './dto/create-todoapi.dto';
import { UpdateTodoapiDto } from './dto/update-todoapi.dto';
import { Todoapi } from './entities/todoapi.entity';

@Injectable()
export class TodoapiService {
  constructor(@InjectRepository(Todoapi) private todoRepository : Repository<Todoapi>){}
  async create(createTodoapiDto: CreateTodoapiDto) {
    const getData = await this.todoRepository.create(createTodoapiDto)
    return this.todoRepository.save(getData)
  }

  findAll() {
    return this.todoRepository.find()
  }

  async findOne(id: number) {
    const getOne =  await this.todoRepository.find({where : {id : id}})
    if(getOne){
      return getOne
    }
    throw new NotFoundException("Not found")
  }

  async update(id: number, updateTodoapiDto: UpdateTodoapiDto) {
    const getOne = await this.todoRepository.findOne({where : {id : id}})
    if(getOne){
      Object.assign(getOne,updateTodoapiDto)
      return this.todoRepository.save(getOne)
    }
    throw new NotFoundException("Not found")
  }


  async remove(id: number) {
    const getOne = await this.todoRepository.findOne({where : {id : id}})
    if(getOne){
      return this.todoRepository.remove(getOne)
    }
    throw new NotFoundException("Not found")
  }
}
