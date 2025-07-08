
import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  @Inject()
  private readonly prisma: PrismaService;

  async user(
    UserWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<Omit<User, 'passwords'> | null> {
    return this.prisma.user.findUnique({
      where: UserWhereUniqueInput,
      select: {
        id: true,
        email: true,
        name: true,
        passwords: false,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async createUser(data: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(data.passwords, 10);
    
    return this.prisma.user.create({ 
      data: { ...data, passwords: hashedPassword }
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
