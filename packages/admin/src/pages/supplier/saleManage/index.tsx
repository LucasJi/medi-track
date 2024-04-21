import { Form, Input, Button, Table, Space, Drawer } from 'antd';
import { useState } from 'react';

import { TablePaginationPosition } from '@/type/pagination';

import AddSale from '../static/addSale';

type FieldType = {
  supplierName?: string;
  phoneNumber?: string;
  remember?: string;
};
const columns = [
  {
    title: '系统编码',
    dataIndex: 'id',
    valueType: 'textarea',
  },
  {
    title: '单位名称',
    dataIndex: 'deptName',
  },
  {
    title: '电话',
    dataIndex: 'phoneNumber',
    valueType: 'textarea',
  },
  {
    title: '单位地址',
    dataIndex: 'produceAddress',
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
/** 经销商管理 */
export default function SupplierManage() {
  const [top, setTop] = useState<TablePaginationPosition>('topLeft');
  const [bottom, setBottom] = useState<TablePaginationPosition>('bottomRight');
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
          label="经销商名称"
          name="supplierName"
          rules={[{ required: false, message: '请输入经销商名称' }]}
        >
          <Input placeholder="请输入经销商" />
        </Form.Item>

        <Form.Item<FieldType>
          label="联系人"
          name="phoneNumber"
          rules={[{ required: false, message: '请输入联系人电话' }]}
        >
          <Input placeholder="请输入电话" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Form>
      <Space className="p-4">
        <Button onClick={showDrawer} type="primary">
          新建首营经销商
        </Button>
      </Space>
      <Table columns={columns} pagination={{ position: [top, bottom] }} />
      <Drawer
        title="新建首营经销商"
        width={920}
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
        {/** 经销商表单 */}
        <AddSale />
      </Drawer>
    </div>
  );
}
