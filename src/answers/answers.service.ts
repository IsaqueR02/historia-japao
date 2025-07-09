import { Inject, Injectable, Request } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AnswersService {
  @Inject()
  private readonly prisma: PrismaService;

  create(createAnswerDto: CreateAnswerDto, userId: any, questionId: number) {
    const newAnswer = {
      content: createAnswerDto.content,
      user: {
        connect: { id: userId },
      },
      question: {
        connect: { id: questionId },
      },
    };
    return this.prisma.answer.create({
      data: newAnswer,
    });
  }

  findAll() {
    return this.prisma.question.findMany();
  }

  findOne(id: number) {
    return this.prisma.question.findUnique({ where: { id } });
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return this.prisma.question.update({
      where: { id },
      data: updateAnswerDto,
    });
  }

  async remove(id: number) {
    await this.prisma.answer.deleteMany({
      where: { questionId: id },
    });
    
    return this.prisma.question.delete({ where: { id } });
  }
}
