
import { useContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
    test('Debe retornar un objeto con los valores correctos', () => {
        const clave = 'IronMan';
        const nombre = 'Tony Stark';
        const edad = 45;
        const rango = 'General';
        const context = useContext({ clave, nombre, edad, rango });

        expect(context).toEqual({
            clave,
            nombre,
            edad,
            rango
        })
    })


})