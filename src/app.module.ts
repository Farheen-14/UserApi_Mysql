import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Todoapi } from './todoapi/entities/todoapi.entity';
import { TodoapiModule } from './todoapi/todoapi.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      username : "root",
      password : "mysqlpw",
      type : "mysql",
      host : "host.docker.internal",
      port : 49153,
      entities : [Todoapi],
      database : "todoapi",
      synchronize : true
    }),
    TodoapiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
