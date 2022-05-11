import page from 'bundle-text:./change-data.hbs';
import Block from '../../block';

interface Props {
    form: Block;
    subTitle: Block;
}

export class ChangeDataPage extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(page, {
      form: this.props.form,
      subTitle: this.props.subTitle,
    });
  }
}
