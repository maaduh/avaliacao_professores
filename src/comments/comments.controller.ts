import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { commentsDto } from './dto/comments.dto';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor (private readonly commentsService: CommentsService) {}
    @Post()
    async create(@Body() data: commentsDto){
        return this.commentsService.create(data);
    }
    @Get()
    async findALL(){
        return this.commentsService.findALL();
    }
    @Put(":id")
    async update(@Param('id') id: number, @Body() data: commentsDto ){
        return this.commentsService.update(Number(id),data);
    }
    @Delete(":id")
    async delete(@Param("id") id: number){
        return this.commentsService.delete(Number(id));
    }

    @Get(":id")
    async getById(@Param("id") id: number){
        return this.commentsService.getById(Number(id));
    }
}
