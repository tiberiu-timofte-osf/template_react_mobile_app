export default {
  EMAIL:
    /^[a-z0-9]+([-.’'`+]?[_a-z0-9])*@[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9-]+)*(\.[a-z]{2,})$/gi,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([a-zA-Z0-9]+)$/,
  BIRTHDAY: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/,
  PHONE: /^\d{2} \d{4} \d{4}$/,

};
