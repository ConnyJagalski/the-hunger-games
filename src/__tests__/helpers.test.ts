import { random, randomBoolean } from '../helpers';

describe('Hilfsfunktionen', () => {
    it('random gibt eine Zahl kleiner als der Parameter zurück', () => {
        const result = random(10);
        expect(result).toBeLessThan(10);
        expect(result).toBeGreaterThanOrEqual(0);
    });

    it('randomBoolean gibt einen Boolean zurück', () => {
        const result = randomBoolean(10);
        expect(typeof result).toBe('boolean');
    });
});