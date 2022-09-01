import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Eduardo', 'Castro', '442.455.198-94');

    expect(sut).toHaveProperty('firstName', 'Eduardo');
    expect(sut).toHaveProperty('lastName', 'Castro');
    expect(sut).toHaveProperty('cpf', '442.455.198-94');
  });

  it('should have methods getName and getIDN', () => {
    const sut = createIndividualCustomer('Eduardo', 'Castro', '442.455.198-94');

    expect(sut.getName()).toBe('Eduardo Castro');
    expect(sut.getIDN()).toBe('442.455.198-94');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Raccoon', '47.216.757/0001-80');

    expect(sut).toHaveProperty('name', 'Raccoon');
    expect(sut).toHaveProperty('cnpj', '47.216.757/0001-80');
  });

  it('should have methods getName and getIDN', () => {
    const sut = createEnterpriseCustomer('Raccoon', '47.216.757/0001-80');

    expect(sut.getName()).toBe('Raccoon');
    expect(sut.getIDN()).toBe('47.216.757/0001-80');
  });
});
