import { User } from '../../users/entities/user.entity';
import { Question } from '../../questions/entities/question.entity';
import { Answer as Answers } from "@prisma/client"

export class Answer implements Answers {
    id: number;
    questionId: number;
    userId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    question: Question;
    user: User;
}
