import { Injectable } from '@nestjs/common';
import { commentsDto } from './dto/comments.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CommentsService {
    constructor (private prisma: PrismaService) {}

    async create(data: commentsDto){
        const comments = await this.prisma.comments.create({
            data,
          });
        return comments
    }
    async findALL(){
        return await this.prisma.comments.findMany();
    }
    async update(id: number, data: commentsDto){

        const commentExists = await this.prisma.comments.findUnique({
          where: {
            id,
          }
        });
        if(!commentExists) {
          throw new Error("comentário não encontrado");
        }
  
        await this.prisma.comments.update({
          data,
          where: {
            id,
          }
        })
  
      }
      async delete(id:number){
        const commentExists = await this.prisma.comments.findUnique({
          where: {
            id,
          }
        });
        if(!commentExists) {
          throw new Error("comentário não encontrado");
        }
  
        return await this.prisma.comments.delete({
          where: {
            id,
          }
        });
      }
  
      async getById(id: number) {
        const commentExists = await this.prisma.comments.findUnique({
          where: {
            id,
          }
        });
        if(!commentExists) {
          throw new Error("comentário não encontrado");
        }
        return commentExists
      }

}
