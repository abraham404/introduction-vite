import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un héroe por ID', () => {
        const id = 5;
        const hero = getHeroeById( id )
        
        expect( hero ).toEqual({ id: 5, name: 'Iron Man', owner: 'Marvel' })

    },

    test('getHeroeById debe de retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById( id )
        
        expect( hero ).toBeFalsy();

    }),

    test('getHeroesByOwner debe de retornar un arreglo con 3 heroes de DC', () => {
        const owner = 'DC'
        const heros = getHeroesByOwner( owner )
        const ownerDC = heros.some(hero => hero.owner === 'DC')

        expect(heros).toHaveLength(3)
        expect(ownerDC).toBe(true)
        
    }),
    test('getHeroesByOwner debe de retornar un arreglo con 2 heroes de Marvel', () => {
        const owner = 'Marvel'
        const heros = getHeroesByOwner( owner )
        const ownerMarvel = heros.some(hero => hero.owner === 'Marvel')

        expect(heros).toHaveLength(2)
        expect(ownerMarvel).toBe(true)
        
    })
)
});