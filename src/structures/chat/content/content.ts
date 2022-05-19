import content from 'bundle-text:./content.hbs';
import { Block } from '../../../abstract/block';
import { AvatarProps } from '../../../components/avatar/avatar';
import { FormProps } from '../../form/form';
import './content.scss';

interface Props {
    activeCompanionDisplayName: string;
    avatar: Block<AvatarProps>;
    form: Block<FormProps>
}

export class Content extends Block<Props> {
  render() {
    return this.compile(content, this.props);
  }
}
