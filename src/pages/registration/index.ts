import { RegistrationPage } from './registration';
import { Link } from '../../components/link';
import { Form } from '../../structures/form';
import {
  isValidEmail, isValidLogin, isValidName, isValidPassword, isValidPhone,
} from '../../utils/validators';
import { Field } from '../../components/field';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import { Button } from '../../components/button';
import router from '../../router/router';
import AuthAPI from '../../services/authAPI';

const registrationPage = new RegistrationPage({
  login: new Link({
    text: 'Войти',
    attributes: {
      class: 'link',
    },
    events: {
      click(event: MouseEvent) {
        event.preventDefault();
        router.go('/');
      },
    },
  }),
  form: new Form({
    events: {
      async submit(event: SubmitEvent) {
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
          await AuthAPI.signUp({ data: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
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
});

export { registrationPage };
