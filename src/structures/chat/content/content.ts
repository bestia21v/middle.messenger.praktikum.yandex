import { content } from './content.tmpl';
import { Block } from '../../../abstract/block';
import { AvatarProps } from '../../../components/avatar/avatar';
import { Form, FormProps } from '../../form/form';
import './content.scss';
import { LinkProps } from '../../../components/link/link';
import { connect } from '../../../utils/HOC';
import { Avatar } from '../../../components/avatar';
import { AVATAR_RESOURCE } from '../../../consts';
import store from '../../../utils/store';
import { isValidId, isValidMessage } from '../../../utils/validators';
import { Field } from '../../../components/field';
import { Input } from '../../../components/input';
import { Label } from '../../../components/label';
import { Button } from '../../../components/button';
import { Socket } from '../../../utils/webSocket';
import { ContentMessage } from './message';
import chatController from '../../../controllers/chatController';

export interface ContentProps {
  displayName: string;
  chatId: string;
  avatar: Block<AvatarProps>;
  form: Block<FormProps>;
  profile: Block<LinkProps>;
  addForm: Block<FormProps>;
  chatMessages: any[];
}
let socket: Socket | null;

class Content extends Block<ContentProps> {
  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (newProps.chatId !== oldProps.chatId) {
      // вызываем вебсокет
      const { user, chatId, token } = store.getState();
      const { id } = user as any;

      socket = new Socket(id, chatId as string, token as string);

      return true;
    }
    return JSON.stringify(oldProps) !== JSON.stringify(newProps);
  }

  render() {
    const fragment = this.compile(content, this.props);
    return fragment;
  }
}

function mapUserToProps(state: any) {
  const { user, chatId, messages } = state;
  return {
    displayName: user?.displayName || user?.first_name || '',
    avatar: new Avatar({
      src: (user as any)?.avatar
        ? `${AVATAR_RESOURCE}/${(user as any).avatar}`
        : './static/no-image.jpg',
      attributes: {
        class: 'avatar--small',
      },
    }),
    chatId,
    chatMessages: (messages || []).map((message: any) => new ContentMessage({
      text: message.content,
      attributes: {
        class: user?.id === message?.user_id ? 'content-message content-message--self' : 'content-message',
      },
    })).reverse(),
    form: new Form({
      events: {
        submit(event: SubmitEvent) {
          event.preventDefault();

          const message = this.querySelector('input[name="message"]');
          const messageValue = message.value;

          if (isValidMessage(messageValue)) {
            socket?.sendData(messageValue);
          }
        },
      },
      fields: [
        new Field({
          input: new Input({
            attributes: {
              type: 'text',
              name: 'message',
              value: '',
              class: 'form__form-field-input--horizontal',
            },
            events: {
              blur(event: FocusEvent) {
                const input = event.target as HTMLInputElement;
                if (isValidMessage(input.value)) {
                  input.classList.remove('form__form-field-input--error');
                } else {
                  input.classList.add('form__form-field-input--error');
                }
              },
            },
          }),
          label: new Label({ text: '' }),
          attributes: {
            class: 'form__form-field--horizontal',
          },
        }),
      ],
      button: new Button({
        text: 'Отправить',
        attributes: {
          class: 'button',
        },
      }),
      attributes: {
        class: 'form--horizontal',
      },
    }),
    addForm: new Form({
      events: {
        async submit(event: SubmitEvent) {
          event.preventDefault();

          const userId = this.querySelector('input[name="userId"]');
          const userIdValue = userId.value;

          if (isValidId(userIdValue)) {
            const data = {
              users: [userIdValue],
              chatId: store.getState().chatId,
            };
            await chatController.addUserToChat({ data: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
            await chatController.getChats({});
          }
        },
      },
      fields: [
        new Field({
          input: new Input({
            attributes: {
              type: 'text',
              name: 'userId',
              value: '',
              class: 'form__form-field-input--horizontal',
            },
            events: {
              blur(event: FocusEvent) {
                const input = event.target as HTMLInputElement;
                if (isValidId(input.value)) {
                  input.classList.remove('form__form-field-input--error');
                } else {
                  input.classList.add('form__form-field-input--error');
                }
              },
            },
          }),
          label: new Label({ text: '' }),
          attributes: {
            class: 'form__form-field--horizontal',
          },
        }),
      ],
      button: new Button({
        text: 'Добавить в чат',
        attributes: {
          class: 'button',
        },
      }),
      attributes: {
        class: 'form--horizontal',
      },
    }),
  };
}

export default connect<ContentProps>(Content as typeof Block, mapUserToProps);
