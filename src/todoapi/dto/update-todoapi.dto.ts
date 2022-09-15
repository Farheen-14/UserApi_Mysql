import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { CreateTodoapiDto } from './create-todoapi.dto';

export class UpdateTodoapiDto extends PartialType(CreateTodoapiDto) {

    @IsString()
    name : string
    
    @IsEmail()
    email : string
    
    @IsString()
    address : string
    
    isActive : boolean
    
}
