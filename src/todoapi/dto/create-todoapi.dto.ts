import { IsEmail, IsString } from "class-validator"


export class CreateTodoapiDto {

    @IsString()
    name : string
    
    @IsEmail()
    email : string
    
    @IsString()
    address : string
    
    isActive : boolean


}
