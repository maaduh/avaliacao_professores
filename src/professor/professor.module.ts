import { Module } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorController } from './professor.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ProfessorController],
  providers: [ProfessorService, PrismaService],
})
export class ProfessorModule {}
