import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { userDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService) {}

    @Post()
    async create(@Body() data: userDto){
        return this.userService.create(data);
    }

    @Get()
    async findALL(){
        return this.userService.findALL();
    }

    @Put(":id")
    async update(@Param('id') id: number, @Body() data: userDto ){
        return this.userService.update(Number(id),data);
    }

    @Delete(":id")
    async delete(@Param("id") id: number){
        return this.userService.delete(Number(id));
    }

    @Get(":id")
    async getById(@Param("id") id: number){
        return this.userService.getById(Number(id));
    }
}
