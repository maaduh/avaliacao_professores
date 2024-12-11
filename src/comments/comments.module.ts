import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({

    providers: [CommentsService, PrismaService],
    controllers: [CommentsController]


})
export class CommentsModule {}
