import { ChangePasswordPage } from './change-password';
import { SubTitle } from '../../components/sub-title';
import { Form } from '../../structures/form';
import { isValidPassword } from '../../utils/validators';
import { Field } from '../../components/field';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import { Button } from '../../components/button';
import UserController from '../../controllers/userController';

const changePasswordPage = new ChangePasswordPage({
  subTitle: new SubTitle({ subTitle: 'Изменить пароль' }),
  form: new Form({
    events: {
      async submit(event: SubmitEvent) {
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
          await UserController.updatePassword({ data: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
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

export { changePasswordPage };
