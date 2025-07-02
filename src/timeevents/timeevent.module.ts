import { Module } from '@nestjs/common';

@Module({})
export class TimeEvent {
    id: number;
    title: string;
    description: string;
    year: number;
    periodId: number;
}
