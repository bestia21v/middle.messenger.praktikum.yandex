import { Block } from './block';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

class DummyBlock extends Block<any> {
  render() {
    return this.compile('{{text}}', this.props);
  }
}

const dummyBlock = new DummyBlock({
  text: 'dummy',
  attributes: {
    class: 'dummy-class',
  },
});

test('Блок должен создавать правильный тег', () => {
  expect(dummyBlock._tagName).toEqual('div');
});

test('Блок должен рендерить содержимое', () => {
  expect(dummyBlock._element?.innerHTML).toEqual('dummy');
});

test('Блок должен устанавливать атрибуты', () => {
  expect(dummyBlock._element?.getAttribute('class')).toEqual('dummy-class');
});

test('Блок должен менять свойства при вызове setProps', () => {
  dummyBlock.setProps({
    text: 'dummy updated',
  });
  expect(dummyBlock.props.text).toEqual('dummy updated');
});
