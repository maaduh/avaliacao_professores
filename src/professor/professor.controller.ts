import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { professorDto } from './dto/professor.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('professor')
export class ProfessorController {
  constructor (private readonly professorService: ProfessorService) {}
    
    @IsPublic()
    @Post()
    async create(@Body() data: professorDto){
        return this.professorService.create(data);
    }

    @IsPublic()
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

    @Get(":nome")
    async getByname(@Param("nome") nome: string){
        return this.professorService.getByname(String(nome));
    }
}
