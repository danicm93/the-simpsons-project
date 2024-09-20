import simpsonsData from '../data/the-simpsons.json'
import { calculateGridPosition } from './calculateGridPosition'

export const simpsonsNodes = simpsonsData.characters.map((character, index) => {
    const position = calculateGridPosition(index, simpsonsData.characters.length)

    return ({
        id: character.id,
        type: 'customNode',
        position,
        data: {
            name: character.name,
            image: character.image,
        }
    })
})
