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

type RoleProps = {
  USER: string;
  ADMIN: string;
  BLOGGER: string;
};

type UserStatusProps = {
  ACTIVE: string;
  PENDING: string;
  BANNER: string;
};

type MenuProps = { title: string; to: string };

export type MenuDataProps = Array<MenuProps>;

const messErr: MessLogProps = {
  email: 'This field must be email',
  password: 'This field must be less than 8 character',
  username: 'This field can not contains special character',
  require: 'This field is required',
  accept: ' Please accept our policy to use products',
};

const roleUser: RoleProps = {
  ADMIN: 'Admin',
  BLOGGER: 'Blogger',
  USER: 'User',
};

const userStatus: UserStatusProps = {
  ACTIVE: 'Active',
  PENDING: 'Pending',
  BANNER: 'Banner',
};

export { messErr, roleUser, userStatus };
