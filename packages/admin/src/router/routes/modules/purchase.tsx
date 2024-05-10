import { lazy, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { SvgIcon } from '@/components/icon';
import { CircleLoading } from '@/components/loading';

import { AppRouteObject } from '#/router';

const HomePage = lazy(() => import(`@/pages/orderPurchase/makeOrder`));
const AntiMakeOrder = lazy(() => import(`@/pages/orderPurchase/antiMakeOrder`));
const GoodsCheck = lazy(() => import(`@/pages/orderPurchase/goodsCheck`));
const ReceiptGoods = lazy(() => import(`@/pages/orderPurchase/receiptGoods`));
const ReturnGoods = lazy(() => import(`@/pages/orderPurchase/returnGoods`));
const Warehouse = lazy(() => import(`@/pages/orderPurchase/wareHouse`));
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
      element: <Navigate to="makeOrder" replace />,
    },
    {
      path: 'makeOrder',
      element: <HomePage />,
      meta: { label: 'sys.menu.makeOrder', key: '/orderPurchase/makeOrder' },
    },
    {
      path: 'antiMakeOrder',
      element: <AntiMakeOrder />,
      meta: { hideMenu: false, label: 'sys.menu.antiMakeOrder', key: '/orderPurchase/antiMakeOrder' },
    },
    {
      path: 'returnGoods',
      element: <ReturnGoods />,
      meta: { hideMenu: false, label: 'sys.menu.returnGoods', key: '/orderPurchase/returnGoods' },
    },
    {
      path:'goodsCheck',
      element: <GoodsCheck />,
      meta: { hideMenu: false, label: 'sys.menu.goodsCheck', key: '/orderPurchase/goodsCheck' },
    },
    {
      path:'receiptGoods',
      element: <ReceiptGoods />,
      meta: { hideMenu: false, label: 'sys.menu.receiptGoods', key: '/orderPurchase/receiptGoods' },
    },
    
    {
      path:'wareHouse',
      element: <Warehouse />,
      meta: { hideMenu: false, label: 'sys.menu.wareHouse', key: '/orderPurchase/wareHouse' },
    },
  ],
};
export default supplier;
