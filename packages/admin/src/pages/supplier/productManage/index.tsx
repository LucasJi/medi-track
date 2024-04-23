import { Button, Drawer, Form, Input, Space, Table } from 'antd';
import { useState } from 'react';

import AddProduct from '../static/addProduct';

type FieldType = {
  productName?: string;
  phoneNumber?: string;
  remember?: string;
};
const columns = [
  {
    title: '产品名称',
    dataIndex: 'productName',
    valueType: 'textarea',
  },
  {
    title: '规格型号',
    dataIndex: 'format',
  },
  {
    title: '生产厂家',
    dataIndex: 'supplier',
    valueType: 'textarea',
  },
  {
    title: '单位',
    dataIndex: 'unit',
    valueType: 'textarea',
  },
  {
    title: '价格',
    dataIndex: 'price',
    valueType: 'textarea',
  },
  {
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
    render: () => [
      <>
        <a href="javascript(0)">详情</a>, <a href="javascript(0)">修改</a>,{' '}
        <a href="javascript(0)">删除</a>
      </>,
    ],
  },
];
export default function ProductManage() {
  const [openState, setOpenState] = useState(false);
  const showDrawer = () => {
    setOpenState(true);
  };

  const onClose = () => {
    setOpenState(false);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="inline"
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="产品名称"
          name="productName"
          rules={[{ required: false, message: '请输入产品名称' }]}
        >
          <Input placeholder="请输入产品名" />
        </Form.Item>
      </Form>
      <Space className="p-4">
        <Button onClick={showDrawer} type="primary">
          新建首营产品
        </Button>
      </Space>
      <Table columns={columns} />
      <Drawer
        title="新建首营产品"
        width={1020}
        onClose={onClose}
        open={openState}
        style={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>取消</Button>
            <Button onClick={onClose} type="primary">
              提交
            </Button>
          </Space>
        }
      >
        {/** 产品表单 */}
        <AddProduct />
      </Drawer>
    </div>
  );
}
