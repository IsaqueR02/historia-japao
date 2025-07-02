import { Controller, Get } from '@nestjs/common';
import { Period } from './period.module';

@Controller('periods')
export class PeriodsController {
    private periodos: Period[] = [
        {
            id: 1,
            nome: 'Período Jomon',
            descricao: 'Período de cultura pré-histórica no Japão.',
            anoInicio: -14000,
            anoFim: -300,
        },
        {
            id: 2,
            nome: 'Período Heian',
            descricao: 'Período que marca o auge da cultura japonesa clássica.',
            anoInicio: 794,
            anoFim: 1185,
        },
    ];

    @Get()
    getHistoria(): Period[] {
        return this.periodos;
    }
}