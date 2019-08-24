import { TidFixPipe } from './tid-fix.pipe';

describe('TidFixPipe', () => {
  it('create an instance', () => {
    const pipe = new TidFixPipe();
    expect(pipe).toBeTruthy();
  });
});

//Testar om datum/tid fungerar
describe('TidFixPipe', () => {
  let pipe = new TidFixPipe();

  it('transform "2019-08-24 & 10:00:00" to "2019-08-24 & 11:00:00"', () => {
    expect(pipe.transform('2019-08-24 & 10:00:00')).toBe('2019-08-24 & 11:00:00');
  });

});
