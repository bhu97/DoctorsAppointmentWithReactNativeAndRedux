export const validateName = name => {
  const validator = /^[a-zA-Z\s]*$/;

  if (!name) {
    return 'Name cannot be empty';
  }
  if (!name.match(validator)) {
    return 'Name should be proper i.e, Alphabets only';
  }
  return '';
};

export const validateEmail = email => {
  const validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email) {
    return 'email cannot be empty';
  }
  if (!email.match(validator)) {
    return 'Invalid email';
  }
  return '';
};

export const validateMobile = mobile => {
  const validator = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  if (!mobile) {
    return 'mobile number cannot be empty';
  }
  if (
    !(
      mobile.length === 10 &&
      mobile !== '' &&
      (mobile[0] === '9' || mobile[0] === '8')
    )
  ) {
    return 'Invalid mobile number';
  }
  return '';
};

export const validateDate = date => {
  const validator =
    /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[-]([0]?[1-9]|[1][0-2])[-]([0-9]{4}|[0-9]{2})$/;

  if (!date) {
    return 'Name cannot be empty';
  }

  if (!date.match(validator)) {
    return 'date should be of the form DD-MM-YYYY only';
  }

  return '';
};

export const validatePassword = password => {
  if (!password) {
    return 'Password cannot be empty';
  }

  if (password.length < 6) {
    return 'length should be >=6';
  }

  return '';
};

export const validatePlace = place => {
  if (!place) {
    return 'Place cannot be empty';
  }

  if (place.length < 5) {
    return 'should contain at least 5 characters';
  }

  return '';
};
