import { Controller, Get } from '@nestjs/common';
import { Character } from './character.module';

@Controller('characters')
export class CharactersController {
    private characters: Character[] = [
        {
            id: 1,
            name: 'Oda Nobunaga',
            description: 'Um dos grandes unificadores do Japão.',
            periodId: 4,  // Referência ao ID do período
        },
        // Adicione mais personagens conforme necessário
    ];

    @Get()
    getAllCharacters(): Character[] {
        return this.characters;
    }
}