import form from 'bundle-text:./form.hbs';
import Block from '../../block';

interface Props {
    fields: {
        type: string;
        name: string;
        text: string;
        value?: any;
    }[];
    submit?: {
        text: string;
    };
    customClass?: string;
}

export class Form extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(form, this.props);
  }
}
