import { Form, Input, Button, Table, Space } from 'antd';
import { useState } from 'react';

import { TablePaginationPosition } from '@/type/pagination';

type FieldType = {
  productName?: string;
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
/** 供应商管理 */
export default function SupplierManage() {
  const [top, setTop] = useState<TablePaginationPosition>('topLeft');
  const [bottom, setBottom] = useState<TablePaginationPosition>('bottomRight');
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
          label="供应商名称"
          name="productName"
          rules={[{ required: false, message: '请输入供应商名称' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="联系人"
          name="phoneNumber"
          rules={[{ required: false, message: '请输入联系人电话' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Form>
      <Space className="p-4">
        <Button onClick={() => setTop('topLeft')} type="primary">
          新建供应商
        </Button>
      </Space>
      <Table columns={columns} pagination={{ position: [top, bottom] }} />
    </div>
  );
}
