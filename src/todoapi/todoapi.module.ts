import { Module } from '@nestjs/common';
import { TodoapiService } from './todoapi.service';
import { TodoapiController } from './todoapi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todoapi } from './entities/todoapi.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Todoapi])], //for removing the dependency error 
  controllers: [TodoapiController],
  providers: [TodoapiService],
  exports : [TypeOrmModule]
})
export class TodoapiModule {}
