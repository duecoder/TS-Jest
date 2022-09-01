import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    // SUT = System under test
    const sut = createSut('shirt', 50.9);

    expect(sut).toHaveProperty('name', 'shirt');
    expect(sut).toHaveProperty('price', 50.9);
    expect(sut.price).toBeCloseTo(50.9);
  });
});
