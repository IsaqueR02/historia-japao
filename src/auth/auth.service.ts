
import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  @Inject()
  private readonly userService: UserService;

  @Inject()
  private readonly jwtService: JwtService;

  async signIn(params: Prisma.UserCreateInput): Promise<{ access_token: string }> {
    const user = await this.userService.user({ email: params.email});
    if (!user) throw new NotFoundException('User Not Found');
    const passwordMatch = await bcrypt.compare(params.passwords, user.passwords);
    if (!passwordMatch) throw new UnauthorizedException('Invalid redentials')

    const payload = { sub: user.id}
      
    return { access_token: await this.jwtService.signAsync(payload)}
  }
}
