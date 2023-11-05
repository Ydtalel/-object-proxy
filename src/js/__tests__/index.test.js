const { orderByProps, getSpecialAttacks } = require('../../index');

describe('orderByProps', () => {
  it('should return properties ordered by provided order', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ['name', 'level'];
    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  it('should return properties ordered alphabetically for properties not in the order list', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ['name', 'level'];
    const result = orderByProps(obj, order);

    expect(result[2].key).toBe('attack');
    expect(result[3].key).toBe('defence');
    expect(result[4].key).toBe('health');
  });

  it('should return an empty array for invalid input', () => {
    const result = getSpecialAttacks({});
    expect(result).toEqual([]);
  });

  it('should return an array of special attacks with descriptions', () => {
    const character = {
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };

    const result = getSpecialAttacks(character);

    expect(result).toEqual([
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ]);
  });

  it('should handle empty special attacks', () => {
    const character = {
      special: [],
    };

    const result = getSpecialAttacks(character);

    expect(result).toEqual([]);
  });

  it('should handle undefined special attacks', () => {
    const result = getSpecialAttacks({});
    expect(result).toEqual([]);
  });

});
