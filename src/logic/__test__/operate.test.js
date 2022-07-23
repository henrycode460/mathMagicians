import operate from '../operate';

describe('calculator operator testing', () => {
    it('division', () => {
        expect(operate(40, 5, '÷')).toBe('8');
      });

      it('subtraction', () => {
        expect(operate(2, 1, '-')).toBe('1');
      });

    it(' addition', () => {
      expect(operate(10, 5, '+')).toBe('15');
    });
   
    it(' multiplication', () => {
      expect(operate(2, 5, 'x')).toBe('10');
    });
   
    it('Modulus', () => {
      expect(operate(8, 2, '%')).toBe('0');
    });
  });