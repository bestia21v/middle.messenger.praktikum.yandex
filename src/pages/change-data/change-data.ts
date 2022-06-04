import page from 'bundle-text:./change-data.hbs';
import { Block } from '../../abstract/block';
import { FormProps } from '../../structures/form/form';
import { SubTitleProps } from '../../components/sub-title/sub-title';

interface Props {
    form: Block<FormProps>;
    subTitle: Block<SubTitleProps>;
}

export class ChangeDataPage extends Block<Props> {
  render() {
    return this.compile(page, {
      form: this.props.form,
      subTitle: this.props.subTitle,
    });
  }
}
