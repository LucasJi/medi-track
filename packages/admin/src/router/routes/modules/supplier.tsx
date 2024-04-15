import { lazy, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { SvgIcon } from '@/components/icon';
import { CircleLoading } from '@/components/loading';

import { AppRouteObject } from '#/router';

const HomePage = lazy(() => import(`@/pages/supplier/supplierManage`));
const supplier: AppRouteObject = {
  order: 1,
  path: 'supplier',
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Outlet />
    </Suspense>
  ),
  meta: {
    label: 'sys.menu.supplier',
    icon: <SvgIcon icon="ic-analysis" className="ant-menu-item-icon" size="24" />,
    key: '/supplier',
  },
  children: [
    {
      index: true,
      element: <Navigate to="supplierManage" replace />,
    },
    {
      path: 'supplierManage',
      element: <HomePage />,
      meta: { label: 'sys.menu.supplierManage', key: '/supplier/supplierManage' },
    },
  ],
};
export default supplier;
