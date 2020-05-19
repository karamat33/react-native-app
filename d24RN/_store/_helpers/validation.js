const validateEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

const validateEmail = (email) => validateEmailRegex.test(email) ? true : false

const isEmpty = (text) => text == '' ? true : false

const validatePassword = (text) => text.length >= 6 ? true : false

export const validation = {
  validateEmail,
  isEmpty,
  validatePassword
}