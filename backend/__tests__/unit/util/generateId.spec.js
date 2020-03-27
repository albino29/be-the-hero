const generateId = require('../../../src/utils/generateId');

describe('Generate unique id', () => {
  it('Should be generated an unique ID using Crypto lib', () => {
    const id = generateId();
    expect(id).toHaveLength(8);
  });
});
