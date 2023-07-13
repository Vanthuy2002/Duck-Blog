import {
  ChartPieIcon,
  DocumentTextIcon,
  TagIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuDashBoard } from '../../../utils/contants';

type SideProps = {
  isShow: boolean;
};

const MenuSidebar: MenuDashBoard = [
  { title: 'Dashboard', to: '', icon: ChartPieIcon },
  { title: 'Post', to: '/manage/post', icon: DocumentTextIcon },
  { title: 'Category', to: '/manage/category', icon: TagIcon },
  { title: 'User', to: '/manage/user', icon: UserIcon },
];

const Sidebar: React.FC<SideProps> = ({ isShow }) => {
  return (
    <aside
      className={`side-bar sm:translate-x-0 ${
        isShow ? '-translate-x-full' : ''
      }`}
    >
      <div className='h-full px-3 pb-4 overflow-y-auto bg-white'>
        <ul className='space-y-2 font-medium'>
          {MenuSidebar.length > 0 &&
            MenuSidebar.map((menu, index) => (
              <li className='my-2' key={index}>
                <Link
                  to={menu.to}
                  className='flex items-center p-4 text-gray-900 rounded-lg hover:bg-gray-100 group'
                >
                  <menu.icon className='w-6 h-6' />
                  <span className='ml-3'>{menu.title}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
