import { Col, Form, Input, Row } from 'antd';

/** 新增/编辑供应商 */
export default function AddSupplier() {
  return (
    <Form layout="vertical">
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item name="date-picker" label="电话">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="date-picker" label="单位名">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="date-picker" label="地址">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="date-picker" label="联系人">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="date-picker" label="Ⅰ类经营">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="date-picker" label="Ⅱ类经营范围">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="date-picker" label="Ⅲ类经营范围">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="date-picker" label="Ⅱ类许可证号">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="date-picker" label="Ⅲ类许可证号">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="date-picker" label="营业执照">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="date-picker" label="营业执照有效期">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="date-picker" label="生产许可">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="date-picker" label="生产许可有效期">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="date-picker" label="经营许可">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="date-picker" label="经营许可有效期">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item label="二类备案许可">
            <Input type="text" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
