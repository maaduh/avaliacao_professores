import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { error } from 'console';
import { User } from '@prisma/client';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService){}
    
    login(user: User): UserToken {
        const payload: UserPayload = {
            sub: user.id,
            email: user.email,
            name: user.name,
        };
        const jwtToken = this.jwtService.sign(payload);

        return {
            access_token: jwtToken,
        };
    }

    async validateUser(email: string, password: string){
        const user = await this.userService.findByEmail(email);

        if (user){
            const isPasswordValid = await bcrypt.compare(password, user.senha);

            if (isPasswordValid){
                const { senha, ...userWithoutSenha } = user;

                return userWithoutSenha;
            }
        }

        throw new Error('Email e/ou senha incorretos');

    }
}


