import { lazy, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { SvgIcon } from '@/components/icon';
import { CircleLoading } from '@/components/loading';

import { AppRouteObject } from '#/router';

const HomePage = lazy(() => import(`@/pages/supplier/supplierManage`));
const ProductManage = lazy(() => import(`@/pages/supplier/productManage`));
const SaleManage = lazy(() => import(`@/pages/supplier/saleManage`));
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
    {
      path: 'saleManage',
      element: <SaleManage />,
      meta: { hideMenu: false, label: 'sys.menu.saleManage', key: '/supplier/saleManage' },
    },
    {
      path: 'productManage',
      element: <ProductManage />,
      meta: { hideMenu: false, label: 'sys.menu.productManage', key: '/supplier/productManage' },
    },
  ],
};
export default supplier;
