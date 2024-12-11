import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { professorDto } from './dto/professor.dto';

@Controller('professor')
export class ProfessorController {
  constructor (private readonly professorService: ProfessorService) {}
    @Post()
    async create(@Body() data: professorDto){
        return this.professorService.create(data);
    }
    @Get()
    async findALL(){
        return this.professorService.findALL();
    }
    @Put(":id")
    async update(@Param('id') id: number, @Body() data: professorDto ){
        return this.professorService.update(Number(id),data);
    }
    @Delete(":id")
    async delete(@Param("id") id: number){
        return this.professorService.delete(Number(id));
    }

    @Get(":id")
    async getById(@Param("id") id: number){
        return this.professorService.getById(Number(id));
    }
}
