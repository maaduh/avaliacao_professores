import { Module } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoController } from './avaliacao.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService, PrismaService],
})
export class AvaliacaoModule {}
