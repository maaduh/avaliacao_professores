import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { avaliacaoDto } from './dto/avaliacao.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('avaliacao')
export class AvaliacaoController {

  constructor (private readonly AvaliacaoService:AvaliacaoService) {}
    @Post()
    async create(@Body() data: avaliacaoDto){
        return this.AvaliacaoService.create(data);
    }
    @Get()
    async findALL(){
        return this.AvaliacaoService.findALL();
    }
    @Put(":id")
    async update(@Param('id') id: number, @Body() data: avaliacaoDto ){
        return this.AvaliacaoService.update(Number(id),data);
    }
    @Delete(":id")
    async delete(@Param("id") id: number){
        return this.AvaliacaoService.delete(Number(id));
    }

    @Get(":id")
    async getById(@Param("id") id: number){
        return this.AvaliacaoService.getById(Number(id));
    }

    @IsPublic()
    @Get("comments/:id")
    async Getavalcomments(@Param("id") id: number){
        return this.AvaliacaoService.Getavalcomments(Number(id));
    }

    @Get("countcomments/:id")
    async CountAvalComments(@Param("id") id: number){
        return this.AvaliacaoService.CountAvalComments(Number(id));
    }
}
