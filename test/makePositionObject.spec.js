import makePositionObject from '../dist/shared/makePositionObject';
import { positionMock } from './mocks/GeoLocationApi.mock';

describe('makePositionObject utility', () => {
  it('should be a function', () => {
    expect(makePositionObject).to.be.a('function');
  });

  it('should return null if nothing is provided', () => {
    const result = makePositionObject();

    expect(result).to.be.null;
  });

  it('should remove unwanted property from a position object', () => {
    const pos = {
      ...positionMock,
      foo: 'bar',
      bar: 'foo',
    };

    const result = makePositionObject(pos);

    expect(result).to.be.deep.equal(positionMock);
  });
});
