import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DiciplinaService } from './diciplina.service';
import { disciplinaDto } from './dto/disciplina.dto';


@Controller('diciplina')
export class DiciplinaController {
  constructor(private readonly diciplinaService: DiciplinaService) {}

    @Post()
    async create(@Body() data: disciplinaDto){
        return this.diciplinaService.create(data);
    }
    @Get()
    async findALL(){
        return this.diciplinaService.findALL();
    }
    @Put(":id")
    async update(@Param('id') id: number, @Body() data: disciplinaDto ){
        return this.diciplinaService.update(Number(id),data);
    }
    @Delete(":id")
    async delete(@Param("id") id: number){
        return this.diciplinaService.delete(Number(id));
    }

    @Get(":id")
    async getById(@Param("id") id: number){
        return this.diciplinaService.getById(Number(id));
    }

    @Get("professores/:id")
    async GetProfessores(@Param("id") id: number){
        return this.diciplinaService.GetProfessores(Number(id));
    }
}
