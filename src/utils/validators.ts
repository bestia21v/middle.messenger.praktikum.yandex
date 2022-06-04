export function isValidName(name: string): boolean {
  const regExp = /[A-ZА-Я][-a-zа-я]+/gm;

  return regExp.test(name);
}

export function isValidLogin(login: string): boolean {
  const regExp = /[-A-Za-z\d_]{3,20}/gm;
  const regExpOnlyDigits = /^\d+$/;
  regExp.lastIndex = 0;
  regExpOnlyDigits.lastIndex = 0;

  return regExp.test(login) && !regExpOnlyDigits.test(login);
}

export function isValidPassword(password: string): boolean {
  const regExp = /(?=.*\d)(?=.*[A-Z])([A-Za-z\d]){8,40}/gm;
  regExp.lastIndex = 0;

  return regExp.test(password);
}

export function isValidPhone(phone: string): boolean {
  const regExp = /\+?\d{10,15}/gm;
  regExp.lastIndex = 0;

  return regExp.test(phone);
}

export function isValidMessage(message: string): boolean {
  return message.length > 0;
}

export function isValidEmail(email: string): boolean {
  const regExp = /(.+)@(.+){2,}\.(.+){2,}/gm;
  regExp.lastIndex = 0;

  return regExp.test(email);
}
