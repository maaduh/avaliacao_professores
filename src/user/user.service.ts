import { Injectable } from '@nestjs/common';
import { userDto } from './dto/user.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
    constructor (private prisma: PrismaService) {}

    async create(data: userDto) {
      const senhaHashed = await bcrypt.hash(data.senha, 10);  
      const user = await this.prisma.user.create({
          data: {
              ...data,            
              senha: senhaHashed, 
              createdt: new Date(), 
          },
      });
  
      const { senha, ...userWithoutSenha } = user;

      return userWithoutSenha;
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
    
    findByEmail(email: string) {
      return this.prisma.user.findUnique({
        where: {
          email,
        },
      });
    }

    async GetuserPosts(id: number){
      const posts = await this.prisma.user.findUnique({
        where: { id },
        include: { avaliacoes: true},
      });
      return posts
    }

}


