import {statsCalculator} from "./index";

const INPUT_ARRAY = [6, 9, 15, -2, 92, 11]

describe('Stats calculator should', () => {
  it('return the lowest number in the sequence', () => {
    expect(statsCalculator(INPUT_ARRAY).minimum).toEqual(-2);
  });

  it('return the highest number in the sequence', () => {
    expect(statsCalculator(INPUT_ARRAY).maximum).toEqual(92);
  });

  it('return the number of elements in the sequence', () => {
    expect(statsCalculator(INPUT_ARRAY).length).toEqual(6);
  });

  it('return the average value of the elements in the sequence', () => {
    // better to use .toBeCloseTo when handling floats so as to avoid failing tests due to rounding errors
    expect(statsCalculator(INPUT_ARRAY).average).toBeCloseTo(131/6);
  });
});