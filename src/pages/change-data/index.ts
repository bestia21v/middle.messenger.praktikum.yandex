import ChangeDataPage from './change-data';
import { SubTitle } from '../../components/sub-title';
import { Form } from '../../structures/form';
import {
  isValidEmail, isValidLogin, isValidName, isValidPhone,
} from '../../utils/validators';
import { Field } from '../../components/field';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import { Button } from '../../components/button';
import UserController from '../../controllers/userController';

const changeDataPage = new ChangeDataPage({
  subTitle: new SubTitle({ subTitle: 'Изменить данные' }),
  form: new Form({
    events: {
      async submit(event: SubmitEvent) {
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
          await UserController.updateProfile({ data: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
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
});

export { changeDataPage };
