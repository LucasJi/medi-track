import { Form, Row, Col, Input } from 'antd';

/** 新增首营供应商抽屉 */
export default function AddSupplierDrawer(props: any) {
  console.log(props);

  return (
    <div>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter user name' }]}
            >
              <Input placeholder="Please enter user name" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
