import { LoginPage } from './login';
import { Link } from '../../components/link';
import { Form } from '../../structures/form';
import { isValidLogin, isValidPassword } from '../../utils/validators';
import AuthAPI from '../../services/authAPI';
import { Field } from '../../components/field';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import { Button } from '../../components/button';
import router from '../../router/router';

const loginPage = new LoginPage({
  registration: new Link({
    text: 'Регистрация',
    attributes: {
      class: 'link',
    },
    events: {
      click(event: MouseEvent) {
        event.preventDefault();
        router.go('/registration');
      },
    },
  }),
  form: new Form({
    events: {
      async submit(event: SubmitEvent) {
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

          const result = await AuthAPI.signIn({ data: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
          const { status } = result;
          if (status === 200) {
            router.go('/chat');
          }
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
});

export { loginPage };
