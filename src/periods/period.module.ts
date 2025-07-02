import { Module } from '@nestjs/common';
import { PeriodsController } from './period.controller';

@Module({
  controllers: [PeriodsController]
})
export class Period {
    id: number;
    nome: string;
    descricao: string;
    anoInicio: number;
    anoFim: number;
}
