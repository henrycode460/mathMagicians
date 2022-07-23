import calculate from '../logic/calculate'

describe('tests for calculate', () => {
    let obj = {};
    test('Division', () => {
        obj.operation = '÷';
        obj.total = 12;
        obj.next = 3;
        expect(calculate(obj, '=')).toEqual({ next: null, operation: null, total: '4' });
      });
  
test('Substraction', () => {
    const obj = {
      total: 5,
      next: 0,
      operation: '-',
    };
    const buttonName = '0';
    expect(calculate(obj, buttonName).total).toBe(5);
  });

  test('Check when AC Button is press', () => {
    const obj = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const buttonName = 'AC';
    expect(calculate(obj, buttonName).total).toBeNull();
  });

  test('Modulus', () => {
    obj.operation = '%';
    obj.total = 6;
    obj.next = 2;
    expect(calculate(obj, '=')).toEqual({ next: null, operation: null, total: '0' });
  });

})
  
 



    