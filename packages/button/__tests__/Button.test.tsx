import Button from '../src';

describe('Button', () => {
  test('should match snapshot and styles for default props', () => {
    expect(Button).toMatchSnapshot();
  });
});
