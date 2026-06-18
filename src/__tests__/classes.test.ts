import { Shelter, Habitant, Food } from '../classes';

describe('Shelter Klasse', () => {
    it('initialisiert mit Standardwerten', () => {
        const shelter = new Shelter();
        expect(shelter.getHunger()).toBe(0);
        expect(shelter.getStock()).toBe(100);
        expect(shelter.getInfected()).toBe(0);
    });

    it('setzt Werte korrekt', () => {
        const shelter = new Shelter();
        shelter.setHunger(50);
        expect(shelter.getHunger()).toBe(50);
    });
});

describe('Habitant Klasse', () => {
    it('initialisiert mit übergebenen Werten', () => {
        const habitant = new Habitant("Charlie", 10, 90, false, true, false, false, false, 0);
        expect(habitant.getName()).toBe("Charlie");
        expect(habitant.getVeggie()).toBe(true);
        expect(habitant.getPoisonCount()).toBe(0);
    });

    it('erhöht den PoisonCount um 1', () => {
        const habitant = new Habitant("Charlie", 0, 100, false, true, false, false, false, 0);
        habitant.increasePoisonCount();
        expect(habitant.getPoisonCount()).toBe(1);
    });
});

describe('Food Klasse', () => {
    it('gibt korrekte Eigenschaften zurück', () => {
        const food = new Food("Apfel", true, false, true, false);
        expect(food.getName()).toBe("Apfel");
        expect(food.getMilk()).toBe(false);
    });
});