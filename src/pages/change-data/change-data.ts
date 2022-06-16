import page from 'bundle-text:./change-data.hbs';
import { Block } from '../../abstract/block';
import { Form, FormProps } from '../../structures/form/form';
import { SubTitleProps } from '../../components/sub-title/sub-title';
import { connect } from '../../utils/HOC';
import {
  isValidEmail, isValidLogin, isValidName, isValidPhone,
} from '../../utils/validators';
import { Field } from '../../components/field';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import { Button } from '../../components/button';
import UserController from '../../controllers/userController';
import { LinkProps } from '../../components/link/link';

interface Props {
  form: Block<FormProps>;
  subTitle: Block<SubTitleProps>;
  back: Block<LinkProps>
}

class ChangeDataPage extends Block<Props> {
  render() {
    return this.compile(page, this.props);
  }
}

function mapUserToProps(state: any) {
  const { user } = state;
  return {
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
              type: 'text', name: 'first_name', value: user?.first_name || '',
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
              type: 'text', name: 'second_name', value: user?.second_name || '',
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
              type: 'text', name: 'display_name', value: user?.display_name || '',
            },
          }),
          label: new Label({ text: 'Имя в чате' }),
        }),
        new Field({
          input: new Input({
            attributes: {
              type: 'text', name: 'login', value: user?.login || '',
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
              type: 'email', name: 'email', value: user?.email || '',
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
              type: 'phone', name: 'phone', value: user?.phone || '',
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
  };
}

export default connect<Props>(ChangeDataPage as typeof Block, mapUserToProps);
