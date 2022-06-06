import { LoginPage } from './login';
import { Link } from '../components/link';
import { Form } from '../structures/form';
import { Title } from '../components/title';
import { SubTitle } from '../components/sub-title';
import { ServerErrorPage } from './server-error-page';
import { NotFoundPage } from './not-found-page';
import { ChangeDataPage } from './change-data';
import { ChangePasswordPage } from './change-password';
import { RegistrationPage } from './registration';
import { ChangeAvatarPage } from './change-avatar';
import { Avatar } from '../components/avatar';
import { ProfilePage } from './profile';
import { ChatPage } from './chat';
import { Sidebar } from '../structures/chat/sidebar';
import { Content } from '../structures/chat/content';
import { Message } from '../structures/chat/sidebar/message';
import { Field } from '../components/field';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Label } from '../components/label';
import {
  isValidEmail,
  isValidLogin, isValidMessage, isValidName, isValidPassword, isValidPhone,
} from '../utils/validators';
import AuthAPI from '../services/authAPI';

const loginPage = new LoginPage({
  registration: new Link({
    text: 'Регистрация',
    attributes: {
      href: '/registration',
      class: 'link',
    },
  }),
  form: new Form({
    events: {
      submit(event: SubmitEvent) {
        event.preventDefault();

        const login = this.querySelector('input[name="login"]');
        const password = this.querySelector('input[name="password"]');
        const loginValue = login.value;
        const passwordValue = password.value;

        const isValid = isValidLogin(loginValue) && isValidPassword(passwordValue);

        if (isValid) {
          const data = {
            login: loginValue,
            password: passwordValue,
          };
          AuthAPI.signUp(data);
        }
      },
    },
    fields: [
      new Field({
        input: new Input(
          {
            attributes: { type: 'text', name: 'login' },
            events: {
              blur(event: FocusEvent) {
                const input = event.target as HTMLInputElement;
                if (isValidLogin(input.value)) {
                  input.classList.remove('form__form-field-input--error');
                } else {
                  input.classList.add('form__form-field-input--error');
                }
              },
            },
          },
        ),
        label: new Label({ text: 'Логин' }),
      }),
      new Field({
        input: new Input(
          {
            attributes: { type: 'password', name: 'password' },
            events: {
              blur(event: FocusEvent) {
                const input = event.target as HTMLInputElement;
                if (isValidPassword(input.value)) {
                  input.classList.remove('form__form-field-input--error');
                } else {
                  input.classList.add('form__form-field-input--error');
                }
              },
            },
          },
        ),
        label: new Label({ text: 'Пароль' }),
      }),
    ],
    button: new Button({
      text: 'Войти',
      attributes: {
        class: 'button',
        type: 'submit',
      },
    }),
  }),
  attributes: {
    class: 'overlay',
  },
});

const serverErrorPage = new ServerErrorPage({
  title: new Title({ title: '5XX что-то пошло не так' }),
  subTitle: new SubTitle({ subTitle: 'дроидов на починку отправили уже' }),
});
const notFoundPage = new NotFoundPage({
  title: new Title({ title: '404 страница не найдена' }),
  subTitle: new SubTitle({ subTitle: 'это не та страница, которую ты ищешь' }),
});
const changeDataPage = new ChangeDataPage({
  subTitle: new SubTitle({ subTitle: 'Изменить данные' }),
  form: new Form({
    events: {
      submit(event: SubmitEvent) {
        event.preventDefault();

        const firstName = this.querySelector('input[name="first_name"]');
        const firstNameValue = firstName.value;

        const secondName = this.querySelector('input[name="second_name"]');
        const secondNameValue = secondName.value;

        const displayName = this.querySelector('input[name="display_name"]');
        const displayNameValue = displayName.value;

        const login = this.querySelector('input[name="login"]');
        const loginValue = login.value;

        const email = this.querySelector('input[name="email"]');
        const emailValue = email.value;

        const phone = this.querySelector('input[name="phone"]');
        const phoneValue = phone.value;

        const isValid = isValidName(firstNameValue)
            && isValidName(secondNameValue)
            && isValidLogin(loginValue)
            && isValidEmail(emailValue)
            && isValidPhone(phoneValue);

        if (isValid) {
          const data = {
            first_name: firstNameValue,
            second_name: secondNameValue,
            display_name: displayNameValue,
            login: loginValue,
            email: emailValue,
            phone: phoneValue,
          };
          console.log(data);
        }
      },
    },
    fields: [
      new Field({
        input: new Input({
          attributes: {
            type: 'text', name: 'first_name', value: 'Иван',
          },
          events: {
            blur(event: FocusEvent) {
              const input = event.target as HTMLInputElement;
              if (isValidName(input.value)) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Имя' }),

      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'text', name: 'second_name', value: 'Иванов',
          },
          events: {
            blur(event: FocusEvent) {
              const input = event.target as HTMLInputElement;
              if (isValidName(input.value)) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Фамилия' }),

      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'text', name: 'display_name', value: 'Иван-Иванов',
          },
        }),
        label: new Label({ text: 'Имя в чате' }),

      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'text', name: 'login', value: 'ivanov',
          },
          events: {
            blur(event: FocusEvent) {
              const input = event.target as HTMLInputElement;
              if (isValidLogin(input.value)) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Логин' }),

      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'email', name: 'email', value: 'ivanov@yandex.ru',
          },
          events: {
            blur(event: FocusEvent) {
              const input = event.target as HTMLInputElement;
              if (isValidEmail(input.value)) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Емайл' }),

      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'phone', name: 'phone', value: '+7 999 999 99 99',
          },
          events: {
            blur(event: FocusEvent) {
              const input = event.target as HTMLInputElement;
              if (isValidPhone(input.value)) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Телефон' }),

      }),
    ],
    button: new Button({
      text: 'Сохранить',
      attributes: {
        class: 'button',
      },
    }),
  }),
  attributes: {
    class: 'overlay',
  },
});
const changePasswordPage = new ChangePasswordPage({
  subTitle: new SubTitle({ subTitle: 'Изменить пароль' }),
  form: new Form({
    events: {
      submit(event: SubmitEvent) {
        event.preventDefault();

        const oldPassword = this.querySelector('input[name="oldPassword"]');
        const oldPasswordValue = oldPassword.value;
        const newPassword = this.querySelector('input[name="newPassword"]');
        const newPasswordValue = newPassword.value;
        const confirmPassword = this.querySelector('input[name="confirmPassword"]');
        const confirmPasswordValue = confirmPassword.value;

        const isValid = isValidPassword(oldPasswordValue)
            && isValidPassword(newPasswordValue)
            && isValidPassword(confirmPasswordValue)
            && newPasswordValue === confirmPasswordValue;

        if (isValid) {
          const data = {
            oldPassword: oldPasswordValue,
            newPassword: newPasswordValue,
          };
          console.log(data);
        }
      },
    },
    fields: [
      new Field({
        input: new Input({
          attributes: { type: 'password', name: 'oldPassword' },
          events: {
            blur(event: FocusEvent) {
              const input = event.target as HTMLInputElement;
              if (isValidPassword(input.value)) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Старый пароль' }),
      }),
      new Field({
        input: new Input({
          attributes: { type: 'password', name: 'newPassword' },
          events: {
            blur(event: FocusEvent) {
              const input = event.target as HTMLInputElement;
              if (isValidPassword(input.value)) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Новый пароль' }),
      }),
      new Field({
        input: new Input({
          attributes: { type: 'password', name: 'confirmPassword' },
          events: {
            blur(event: FocusEvent) {
              const newPassword = document.querySelector('input[name="newPassword"]') as HTMLInputElement;
              const newPasswordValue = newPassword.value;
              const input = event.target as HTMLInputElement;
              const isValid = isValidPassword(input.value) && newPasswordValue === input.value;

              if (isValid) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Подтверждение пароля' }),
      }),
    ],
    button: new Button({
      text: 'Сохранить',
      attributes: {
        class: 'button',
      },
    }),
  }),
  attributes: {
    class: 'overlay',
  },
});
const registrationPage = new RegistrationPage({
  login: new Link({
    text: 'Войти',
    attributes: {
      href: '/login',
      class: 'link',
    },
  }),
  form: new Form({
    events: {
      submit(event: SubmitEvent) {
        event.preventDefault();

        const firstName = this.querySelector('input[name="first_name"]');
        const firstNameValue = firstName.value;

        const secondName = this.querySelector('input[name="second_name"]');
        const secondNameValue = secondName.value;

        const login = this.querySelector('input[name="login"]');
        const loginValue = login.value;

        const email = this.querySelector('input[name="email"]');
        const emailValue = email.value;

        const phone = this.querySelector('input[name="phone"]');
        const phoneValue = phone.value;

        const password = this.querySelector('input[name="password"]');
        const passwordValue = password.value;

        const isValid = isValidName(firstNameValue)
            && isValidName(secondNameValue)
            && isValidLogin(loginValue)
            && isValidEmail(emailValue)
            && isValidPhone(phoneValue);

        if (isValid) {
          const data = {
            first_name: firstNameValue,
            second_name: secondNameValue,
            password: passwordValue,
            login: loginValue,
            email: emailValue,
            phone: phoneValue,
          };
          console.log(data);
        }
      },
    },
    fields: [
      new Field({
        input: new Input({
          attributes: { type: 'text', name: 'first_name' },
          events: {
            blur(event: FocusEvent) {
              const input = event.target as HTMLInputElement;
              if (isValidName(input.value)) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Имя' }),
      }),
      new Field({
        input: new Input({
          attributes: { type: 'text', name: 'second_name' },
          events: {
            blur(event: FocusEvent) {
              const input = event.target as HTMLInputElement;
              if (isValidName(input.value)) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Фамилия' }),
      }),
      new Field({
        input: new Input({
          attributes: { type: 'text', name: 'login' },
          events: {
            blur(event: FocusEvent) {
              const input = event.target as HTMLInputElement;
              if (isValidLogin(input.value)) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Логин' }),
      }),
      new Field({
        input: new Input({
          attributes: { type: 'email', name: 'email' },
          events: {
            blur(event: FocusEvent) {
              const input = event.target as HTMLInputElement;
              if (isValidEmail(input.value)) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Емайл' }),
      }),
      new Field({
        input: new Input({
          attributes: { type: 'phone', name: 'phone' },
          events: {
            blur(event: FocusEvent) {
              const input = event.target as HTMLInputElement;
              if (isValidPhone(input.value)) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Телефон' }),
      }),
      new Field({
        input: new Input({
          attributes: { type: 'password', name: 'password' },
          events: {
            blur(event: FocusEvent) {
              const input = event.target as HTMLInputElement;
              if (isValidPassword(input.value)) {
                input.classList.remove('form__form-field-input--error');
              } else {
                input.classList.add('form__form-field-input--error');
              }
            },
          },
        }),
        label: new Label({ text: 'Пароль' }),
      }),
      new Field({
        input: new Input({
          attributes: { type: 'password', name: 'confirm_password' },
        }),
        label: new Label({ text: 'Подтверждение пароля' }),
      }),
    ],
    button: new Button({
      text: 'Регистрация',
      attributes: {
        class: 'button',
      },
    }),
  }),
  attributes: {
    class: 'overlay',
  },
});
const changeAvatarPage = new ChangeAvatarPage({
  subTitle: new SubTitle({ subTitle: 'Изменить аватар' }),
  avatar: new Avatar({ src: '/static/no-image.jpg' }),
  form: new Form({
    events: {
      submit(event: SubmitEvent) {
        event.preventDefault();

        const avatar = this.querySelector('input[name="avatar"]');
        const avatarValue = avatar.value;

        const data = {
          avatar: avatarValue,
        };
        console.log(data);
      },
    },
    fields: [
      new Field({
        input: new Input({ attributes: { type: 'file', name: 'avatar' } }),
        label: new Label({ text: 'Выберите файл' }),
      }),
    ],
    button: new Button({
      text: 'Сохранить',
      attributes: {
        class: 'button',
      },
    }),
  }),
  attributes: {
    class: 'overlay',
  },
});
const profilePage = new ProfilePage({
  avatar: new Avatar({ src: '/static/no-image.jpg' }),
  form: new Form({
    fields: [
      new Field({
        input: new Input({
          attributes: {
            type: 'text', name: 'first_name', value: 'Иван', disabled: true,
          },
        }),
        label: new Label({ text: 'Имя' }),
      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'text', name: 'second_name', value: 'Иванов', disabled: true,
          },
        }),
        label: new Label({ text: 'Фамилия' }),
      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'text', name: 'display_name', value: 'Иван-Иванов', disabled: true,
          },
        }),
        label: new Label({ text: 'Имя в чате' }),
      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'text', name: 'login', value: 'ivanov', disabled: true,
          },
        }),
        label: new Label({ text: 'Логин' }),
      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'email', name: 'email', value: 'ivanov@yandex.ru', disabled: true,
          },
        }),
        label: new Label({ text: 'Емайл' }),
      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'phone', name: 'phone', value: '+7 999 999 99 99', disabled: true,
          },
        }),
        label: new Label({ text: 'Телефон' }),
      }),
    ],
  }),
  changeAvatarLink: new Link({ text: 'Сменить аватар', attributes: { href: '/change-avatar', class: 'link' } }),
  changePasswordLink: new Link({ text: 'Сменить пароль', attributes: { href: '/change-password', class: 'link' } }),
  changeDataLink: new Link({ text: 'Сменить данные', attributes: { href: '/change-data', class: 'link' } }),
  loginLink: new Link({ text: 'Выйти', attributes: { href: '/login', class: 'link link--error' } }),
  attributes: {
    class: 'overlay',
  },
});
const chatPage = new ChatPage({
  sidebar: new Sidebar({
    title: 'Лента чатов',
    messages: [
      new Message({
        time: '11:05',
        avatar: new Avatar({
          src: '/static/no-image.jpg',
          attributes: {
            class: 'avatar--small',
          },
        }),
        companionDisplayName: 'Андрей',
        unreadCount: Math.round(Math.random() * 100),
        lastMessage: 'Вы: стикер',
      }),
      new Message({
        time: '15:05',
        avatar: new Avatar({
          src: '/static/no-image.jpg',
          attributes: {
            class: 'avatar--small',
          },
        }),
        companionDisplayName: 'Илья',
        unreadCount: Math.round(Math.random() * 100),
        lastMessage: 'Приветики',
      }),
      new Message({
        time: '16:11',
        avatar: new Avatar({
          src: '/static/no-image.jpg',
          attributes: {
            class: 'avatar--small',
          },
        }),
        companionDisplayName: 'Вадим',
        unreadCount: Math.round(Math.random() * 100),
        lastMessage: 'Вы: Я вижу будущее! Тут будет очень-очень много текста',
      }),
      new Message({
        time: '11:05',
        avatar: new Avatar({
          src: '/static/no-image.jpg',
          attributes: {
            class: 'avatar--small',
          },
        }),
        companionDisplayName: 'Андрей',
        unreadCount: Math.round(Math.random() * 100),
        lastMessage: 'Вы: стикер',
      }),
      new Message({
        time: '15:05',
        avatar: new Avatar({
          src: '/static/no-image.jpg',
          attributes: {
            class: 'avatar--small',
          },
        }),
        companionDisplayName: 'Илья',
        unreadCount: Math.round(Math.random() * 100),
        lastMessage: 'Приветики',
      }),
      new Message({
        time: '16:11',
        avatar: new Avatar({
          src: '/static/no-image.jpg',
          attributes: {
            class: 'avatar--small',
          },
        }),
        companionDisplayName: 'Вадим',
        unreadCount: Math.round(Math.random() * 100),
        lastMessage: 'Вы: Я вижу будущее! Тут будет очень-очень много текста',
      }),
      new Message({
        time: '11:05',
        avatar: new Avatar({
          src: '/static/no-image.jpg',
          attributes: {
            class: 'avatar--small',
          },
        }),
        companionDisplayName: 'Андрей',
        unreadCount: Math.round(Math.random() * 100),
        lastMessage: 'Вы: стикер',
      }),
      new Message({
        time: '15:05',
        avatar: new Avatar({
          src: '/static/no-image.jpg',
          attributes: {
            class: 'avatar--small',
          },
        }),
        companionDisplayName: 'Илья',
        unreadCount: Math.round(Math.random() * 100),
        lastMessage: 'Приветики',
      }),
      new Message({
        time: '16:11',
        avatar: new Avatar({
          src: '/static/no-image.jpg',
          attributes: {
            class: 'avatar--small',
          },
        }),
        companionDisplayName: 'Вадим',
        unreadCount: Math.round(Math.random() * 100),
        lastMessage: 'Вы: Я вижу будущее! Тут будет очень-очень много текста',
      }),
      new Message({
        time: '11:05',
        avatar: new Avatar({
          src: '/static/no-image.jpg',
          attributes: {
            class: 'avatar--small',
          },
        }),
        companionDisplayName: 'Андрей',
        unreadCount: Math.round(Math.random() * 100),
        lastMessage: 'Вы: стикер',
      }),
      new Message({
        time: '15:05',
        avatar: new Avatar({
          src: '/static/no-image.jpg',
          attributes: {
            class: 'avatar--small',
          },
        }),
        companionDisplayName: 'Илья',
        unreadCount: Math.round(Math.random() * 100),
        lastMessage: 'Приветики',
      }),
      new Message({
        time: '16:11',
        avatar: new Avatar({
          src: '/static/no-image.jpg',
          attributes: {
            class: 'avatar--small',
          },
        }),
        companionDisplayName: 'Вадим',
        unreadCount: Math.round(Math.random() * 100),
        lastMessage: 'Вы: Я вижу будущее! Тут будет очень-очень много текста',
      }),
    ],
    attributes: {
      class: 'sidebar',
    },
  }),
  content: new Content({
    activeCompanionDisplayName: 'Иван',
    avatar: new Avatar({
      src: '/static/no-image.jpg',
      attributes: {
        class: 'avatar--small',
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
    attributes: {
      class: 'content',
    },
  }),
  attributes: {
    class: 'overlay overlay--full-width',
  },
});

export {
  loginPage,
  serverErrorPage,
  notFoundPage,
  changeDataPage,
  changePasswordPage,
  registrationPage,
  changeAvatarPage,
  profilePage,
  chatPage,
};
