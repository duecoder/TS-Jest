import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // SUT = System under test
    const sut = createSut();

    expect(sut.sendMessage('any')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('any');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Received:" and msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('any');
    expect(consoleSpy).toHaveBeenCalledWith('Received:', 'any');
  });
});
