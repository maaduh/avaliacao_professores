import { Module } from '@nestjs/common';
import { DiciplinaService } from './diciplina.service';
import { DiciplinaController } from './diciplina.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [DiciplinaController],
  providers: [DiciplinaService, PrismaService],
})
export class DiciplinaModule {}
