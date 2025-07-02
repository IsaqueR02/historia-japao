import { Module } from '@nestjs/common';
import { Period } from './periods/period.module';
import { Character } from './characters/character.module';
import { TimeEvent } from './timeevents/timeevent.module';
import { PeriodsController } from './periods/period.controller';
import { TimeEventsController } from './timeevents/timeevent.controller';
import { CharactersController } from './characters/character.controller';

@Module({
  imports: [Period, Character, TimeEvent],
  controllers: [PeriodsController, TimeEventsController, CharactersController],
  providers: [],
})
export class AppModule {}
