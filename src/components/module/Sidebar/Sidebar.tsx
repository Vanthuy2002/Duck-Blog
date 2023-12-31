import {
  ChartPieIcon,
  DocumentTextIcon,
  TagIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuDashBoard } from 'src/utils/contants';

type SideProps = {
  isShow: boolean;
};

type refProps = React.ForwardedRef<HTMLDivElement>;

const MenuSidebar: MenuDashBoard = [
  { title: 'Dashboard', to: '/dashboard', icon: ChartPieIcon },
  { title: 'Post', to: '/manage/post', icon: DocumentTextIcon },
  { title: 'Category', to: '/manage/category', icon: TagIcon },
  { title: 'User', to: '/manage/user', icon: UserIcon },
];

const Sidebar = forwardRef((props: SideProps, ref: refProps) => {
  return (
    <>
      <aside
        className={`side-bar flex xl:translate-x-0 ${
          props.isShow ? '-translate-x-full' : ''
        }`}
      >
        <div
          ref={ref}
          className='h-full w-[256px] px-3 pb-4 overflow-y-auto bg-[#eceff4]'
        >
          <ul className='space-y-2 font-medium'>
            {MenuSidebar.length > 0 &&
              MenuSidebar.map((menu, index) => (
                <li className='my-2' key={index}>
                  <NavLink
                    to={menu.to}
                    className='flex items-center p-4 text-gray-900 rounded-lg'
                  >
                    <menu.icon className='w-6 h-6' />
                    <span className='ml-3'>{menu.title}</span>
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </aside>
    </>
  );
});

export default Sidebar;
