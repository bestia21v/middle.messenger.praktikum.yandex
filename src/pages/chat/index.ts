import { ChatPage } from './chat';
import { Avatar } from '../../components/avatar';
import { Content } from '../../structures/chat/content';
import { Form } from '../../structures/form';
import { isValidId, isValidMessage } from '../../utils/validators';
import { Field } from '../../components/field';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import { Button } from '../../components/button';
import { Sidebar } from '../../structures/chat/sidebar';
import chatController from '../../controllers/chatController';
import { Link } from '../../components/link';
import router from '../../router/router';
import store from '../../utils/store';

const chatPage = new ChatPage({
  sidebar: new Sidebar({
    title: 'Лента чатов',
    createChat: new Button({
      text: 'Создать чат',
      attributes: {
        class: 'button',
      },
      events: {
        async click() {
          await chatController.createChat({
            data: JSON.stringify({ title: 'Без названия' }),
            headers: { 'Content-Type': 'application/json' },
          });
          await chatController.getChats({});
        },
      },
    }),
    messages: [],
    attributes: {
      class: 'sidebar',
    },
  }),
  content: new Content({
    displayName: '',
    chatId: '',
    chatMessages: [],
    avatar: new Avatar({
      src: '/static/no-image.jpg',
      attributes: {
        class: 'avatar--small',
      },
    }),
    profile: new Link({
      text: 'Профиль',
      attributes: {
        class: 'link',
      },
      events: {
        click(event: MouseEvent) {
          event.preventDefault();
          router.go('/profile');
        },
      },
    }),
    form: new Form({
      events: {
        submit(event: SubmitEvent) {
          event.preventDefault();

          const message = this.querySelector('input[name="message"]');
          const messageValue = message.value;

          if (isValidMessage(messageValue)) {
            const data = {
              message: messageValue,
            };
            console.log(data);
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
        text: 'Добавить',
        attributes: {
          class: 'button',
        },
      }),
      attributes: {
        class: 'form--horizontal',
      },
    }),
    attributes: {
      class: 'content',
    },
  }),
  attributes: {
    class: 'overlay overlay--full-width',
  },
});

export { chatPage };
