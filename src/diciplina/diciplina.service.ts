import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { disciplinaDto } from './dto/disciplina.dto';
import { Professor } from 'src/professor/entities/professor.entity';


@Injectable()
export class DiciplinaService {
  constructor (private prisma: PrismaService) {}

    async create(data: disciplinaDto){
        const diciplina = await this.prisma.diciplina.create({
            data,
          });
        return diciplina
    }
    async findALL(){
        return await this.prisma.diciplina.findMany();
    }
    async update(id: number, data: disciplinaDto){

        const diciplinaExists = await this.prisma.diciplina.findUnique({
          where: {
            id,
          }
        });
        if(!diciplinaExists) {
          throw new Error("diciplina não encontrado");
        }
  
        await this.prisma.diciplina.update({
          data,
          where: {
            id,
          }
        })
  
      }
      async delete(id:number){
        const diciplinaExists = await this.prisma.diciplina.findUnique({
          where: {
            id,
          }
        });
        if(!diciplinaExists) {
          throw new Error("diciplina não encontrado");
        }
  
        return await this.prisma.diciplina.delete({
          where: {
            id,
          }
        });
      }
  
      async getById(id: number) {
        const diciplinaExists = await this.prisma.diciplina.findUnique({
          where: {
            id,
          }
        });
        if(!diciplinaExists) {
          throw new Error("diciplina não encontrado");
        }
        return diciplinaExists
      }

    async GetProfessores(id: number) {
      const diciplinaExists = await this.prisma.diciplina.findUnique({
        where: {
          id,
        }
      });

      if(!diciplinaExists) {
        throw new Error ("Disciplina não existe");
      }
        const professores = await this.prisma.diciplina.findUnique({
          where: {
            id
          },
          include: {
            professor: true
          },
        });
        return professores
      
    }
    async getByname(nome: string) {
      const disciplina = await this.prisma.diciplina.findMany({ where: { nome } });
      if (!disciplina) {
          throw new Error('disciplina não encontrada');
      }
      return disciplina;
  }
}
