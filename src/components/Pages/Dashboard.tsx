import React from 'react';
import { LayoutDashboard, TableDashboard } from '../module';

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <LayoutDashboard />
      <TableDashboard />
    </React.Fragment>
  );
};

export default Dashboard;
