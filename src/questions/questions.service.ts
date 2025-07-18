import { Inject, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class QuestionsService {
  @Inject()
  private readonly prisma: PrismaService

  async create(createQuestionDto: CreateQuestionDto, userId: number) {
    return await this.prisma.question.create({
      data: { 
        ...createQuestionDto, 
        user: { 
          connect: { id: userId } 
        } 
      },
    });
  }

  async findAll() {
    return await this.prisma.question.findMany({
      include: {
        answers: true,
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.question.findUnique({ 
      where: { id },
      include: {
        answers: true,
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return await this.prisma.question.update({
      where: { id },
      data: updateQuestionDto,
    });
  }

  async remove(id: number) {
    await this.prisma.answer.deleteMany({
      where: { questionId: id },
    });

    return this.prisma.question.delete({ where: { id }
    });
  }
}
