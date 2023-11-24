import regexp from '@/utils/regexp';

const REQUIRED_RULE = {
  required: {
    value: true,
    message: 'Fill out information',
  },
};

const EMAIL_RULE = {
  required: {
    value: true,
    message: 'Fill out information',
  },
  pattern: {
    value: regexp.email,
    message: 'Invalid email',
  },
};

const PASSWORD_RULE = {
  required: {
    value: true,
    message: 'Fill out information',
  },
  minLength: {
    value: 7,
    message: 'Should be more 6 digits',
  },
};

export { EMAIL_RULE, PASSWORD_RULE, REQUIRED_RULE };
