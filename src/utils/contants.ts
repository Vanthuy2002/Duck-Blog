export type FormValue = {
  email: string;
  password: string;
  username?: string;
  terms?: boolean;
};

type MessLogProps = {
  require: string;
  accept: string;
} & FormValue;

const messErr: MessLogProps = {
  email: 'This field must be email',
  password: 'This field must be less than 8 character',
  username: 'This field can not contains special character',
  require: 'This field is required',
  accept: ' Please accept our policy to use products',
};

type MenuProps = { title: string; to: string };

export type MenuDataProps = Array<MenuProps>;

export { messErr };
