import { Module } from '@nestjs/common';
import { CharactersController } from './character.controller';

@Module({
  controllers: [CharactersController]
})
export class Character {
    id: number;
    name: string;
    description: string;
    periodId: number; 
}
