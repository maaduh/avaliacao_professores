import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { userDto } from './dto/user.dto';
import { UserService } from './user.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService) {}

    @IsPublic()
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

    @Get("id/:id")
    async getById(@Param("id") id: number){
        return this.userService.getById(Number(id));
    }
    @Post("email")
    async findByEmail(@Body('email') email: string){
        return this.userService.findByEmail(email);
    }
    @Get("posts/:id")
    async GetuserPosts(@Param("id") id: number){
        return this.userService.GetuserPosts(Number(id));
    }
}
