import { Injectable } from '@nestjs/common';
import { commentsDto } from './dto/comments.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CommentsService {
    constructor (private prisma: PrismaService) {}

    async create(data: commentsDto){
      console.log('Data being inserted:', data);
      
      // Ensure userID is an integer
      const processedData = {
          ...data,
          userID: parseInt(data.userID as unknown as string, 10)
      };
  
      return await this.prisma.comments.create({
          data: processedData
      });
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
