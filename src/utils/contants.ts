// defined type of form Login , Register
export type FormValue = {
  email: string;
  password: string;
  username?: string;
  terms?: boolean;
};

// defined type of message error
type MessLogProps = {
  require: string;
  accept: string;
} & FormValue;

// defined role type of users
type RoleProps = {
  USER: string;
  ADMIN: string;
  BLOGGER: string;
};

// defined user status type
type UserStatusProps = {
  ACTIVE: string;
  PENDING: string;
  BANNER: string;
};

// defined hero icons type
type HeroIcons = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

type MenuProps = { title: string; to: string };

type MenuWithIconProps = {
  icon: HeroIcons;
} & MenuProps;

export type MenuDataProps = Array<MenuProps>;
export type MenuDashBoard = Array<MenuWithIconProps>;

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
