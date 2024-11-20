import { Injectable } from '@nestjs/common';
import { userDto } from './dto/user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService {
    constructor (private prisma: PrismaService) {}

    async create(data: userDto){
        const user = await this.prisma.user.create({
            data: {
              ...data,
              createdt: new Date(),  
            },
          });

        return user
    }

    async findALL(){
      return await this.prisma.user.findMany();
    }

    async update(id: number, data: userDto){

      const userExists = await this.prisma.user.findUnique({
        where: {
          id,
        }
      });
      if(!userExists) {
        throw new Error("usuário não encontrado");
      }

      await this.prisma.user.update({
        data,
        where: {
          id,
        }
      })

    }

    async delete(id:number){
      const userExists = await this.prisma.user.findUnique({
        where: {
          id,
        }
      });
      if(!userExists) {
        throw new Error("usuário não encontrado");
      }

      return await this.prisma.user.delete({
        where: {
          id,
        }
      });
    }

    async getById(id: number) {
      const userExists = await this.prisma.user.findUnique({
        where: {
          id,
        }
      });
      if(!userExists) {
        throw new Error("usuário não encontrado");
      }
      return userExists
    }
    
}


