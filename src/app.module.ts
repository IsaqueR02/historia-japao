import { Module } from '@nestjs/common';
import { Period } from './periods/period.module';
import { Character } from './characters/character.module';
import { TimeEvent } from './timeevents/timeevent.module';
import { PeriodsController } from './periods/period.controller';
import { TimeEventsController } from './timeevents/timeevent.controller';
import { CharactersController } from './characters/character.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { DatabaseModule } from './database/database.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [Period, Character, TimeEvent, AuthModule, UserModule, DatabaseModule, QuestionsModule],
  controllers: [PeriodsController, TimeEventsController, CharactersController],
  providers: [],
})
export class AppModule {}
