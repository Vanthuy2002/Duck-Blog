export type FormValue = {
  email: string;
  password: string;
  username?: string;
};

type MessLogProps = {
  require: string;
} & FormValue;

const messErr: MessLogProps = {
  email: 'This field must be email',
  password: 'This field must be less than 8 character',
  username: 'This field can not contains special character',
  require: 'This field is required',
};

export { messErr };
