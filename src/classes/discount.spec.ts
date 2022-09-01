import { Discount, FiftyDiscount, TenDiscount, NoDiscount } from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    // SUT = System under test
    const sut = createSut(NoDiscount);

    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('should apply 50% discount', () => {
    // SUT = System under test
    const sut = createSut(FiftyDiscount);

    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount', () => {
    // SUT = System under test
    const sut = createSut(TenDiscount);

    expect(sut.calculate(300)).toBe(270);
  });
});
