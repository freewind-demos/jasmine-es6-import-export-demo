import index from '../index';

describe('index', () => {
  it('return hello', () => {
    expect(index()).toEqual('hello');
  })
})