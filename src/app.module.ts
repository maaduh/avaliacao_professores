import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { CommentsService } from './comments/comments.service';
import { CommentsController } from './comments/comments.controller';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ProfessorModule } from './professor/professor.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { DiciplinaModule } from './diciplina/diciplina.module';

@Module({
  imports: [UserModule, CommentsModule, AuthModule, ProfessorModule, AvaliacaoModule, DiciplinaModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },
],
})
export class AppModule {}
