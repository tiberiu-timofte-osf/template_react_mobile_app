import Base64 from './base64';

const isLink = (path: string) => path.indexOf('http') >= 0;

const removeLeadingZero = (phoneNumber: string): string => {
  // Remove spaces and check if the number starts with "+61 0"
  if (phoneNumber.startsWith('+61 0')) {
    // Remove the zero after "+61"
    return phoneNumber.replace('+61 0', '+61 ');
  }
  return phoneNumber;
};

const clearPhoneNumber = (num: string) =>
  num.replace('+61', '').replace(/\s+/g, '').trim();

const removeSpaces = (text: string) =>
  text.replace(/\s+/g, '').replace('+', '');

const getInitials = (name: string): string => {
  if (!name) {
    return 'n/a';
  }
  const namesArray = name.split(' ');
  const initials = namesArray.map(n => n.charAt(0)).join('');
  return initials.toUpperCase();
};

const separateCountryCode = (
  phoneNumber: string,
): { countryCode: string; number: string } => {
  if (!phoneNumber) {
    return { countryCode: '', number: '' };
  }

  const regex = /^(\+\d{1,3})(\d+)$/;
  const match = phoneNumber.match(regex);

  if (match) {
    const [, countryCode, number] = match;
    return { countryCode, number };
  } else {
    return { countryCode: '', number: '' };
  }
};

type Token = {
  user_id: number;
  timestamp: string;
};

const parseJwt = (token: string) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    Base64.atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );

  return JSON.parse(jsonPayload) as Token;
};

export {
  isLink,
  removeLeadingZero,
  clearPhoneNumber,
  removeSpaces,
  getInitials,
  separateCountryCode,
  parseJwt,
};
