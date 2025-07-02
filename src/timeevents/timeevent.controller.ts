import { Controller, Get } from '@nestjs/common';
import { TimeEvent } from './timeevent.module';

@Controller('timeevents')
export class TimeEventsController {
    private events: TimeEvent[] = [
        {
            id: 1,
            title: 'Unificação do Japão',
            description: 'Unificação do Japão sob Oda Nobunaga.',
            year: 1568,
            periodId: 4,  // Referência ao ID do período
        },
        // Adicione mais eventos conforme necessário
    ];

    @Get()
    getAllEvents(): TimeEvent[] {
        return this.events;
    }
}