import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { avaliacaoDto } from './dto/avaliacao.dto';

@Injectable()
export class AvaliacaoService {
  constructor (private prisma: PrismaService) {}

    async create(data: avaliacaoDto){
        const avaliacao = await this.prisma.avaliacao.create({
            data
          });
        return avaliacao
    }
    async findALL(){
        return await this.prisma.avaliacao.findMany();
    }
    async update(id: number, data: avaliacaoDto){

        const avaliacaoExists = await this.prisma.avaliacao.findUnique({
          where: {
            id,
          }
        });
        if(!avaliacaoExists) {
          throw new Error("avaliacao não encontrado");
        }
  
        await this.prisma.avaliacao.update({
          data,
          where: {
            id,
          }
        })
  
      }
      async delete(id:number){
        const avaliacaoExists = await this.prisma.avaliacao.findUnique({
          where: {
            id,
          }
        });
        if(!avaliacaoExists) {
          throw new Error("avaliacao não encontrado");
        }
  
        return await this.prisma.avaliacao.delete({
          where: {
            id,
          }
        });
      }
  
      async getById(id: number) {
        const avaliacaoExists = await this.prisma.avaliacao.findUnique({
          where: {
            id,
          }
        });
        if(!avaliacaoExists) {
          throw new Error("avaliacao não encontrado");
        }
        return avaliacaoExists
      }

      async Getavalcomments(id: number){
        const avaliacao = await this.prisma.avaliacao.findUnique({
          where: { id },
          include: { comentarios: true, professor: true, usuario: true, diciplina:true },
        });
        return avaliacao
        
      }

      async CountAvalComments(id: number){
        const avaliacao = await this.prisma.avaliacao.findUnique({
          where: { id },
          include: { comentarios: true},
        });
        return avaliacao?.comentarios?.length || 0;
        
      }
}
