import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Input, Row, Select, Upload, UploadFile } from 'antd';

const fileList: UploadFile[] = [
  {
    uid: '-1',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];
/** 新增产品 */
export default function AddProduct() {
  return (
    <Form layout="vertical">
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item
            label="产品名称"
            name="productName"
            rules={[
              {
                required: true,
                message: '请输入产品名称！',
              },
              {
                max: 20,
                min: 3,
                message: '名称大于3字小于20字',
              },
              {
                message: '请输入正确的产品名称！',
                pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]+/g,
              },
            ]}
          >
            <Input placeholder="请输入产品名称" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="流水号" name="movingNum">
            <Input placeholder="请输入流水号" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="产品编码" name="productCode">
            <Input placeholder="请输入产品编码" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="器械类型" name="produceType">
            <Select
              options={[
                { value: '0', label: <span>Ⅰ类</span> },
                { value: '1', label: <span>Ⅱ类</span> },
                { value: '2', label: <span>Ⅲ类</span> },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item
            label="规格型号"
            rules={[
              {
                required: true,
                message: '请输入规格型号！',
              },
              {
                max: 20,
                min: 3,
                message: '名称大于3字小于20字',
              },
              {
                message: '请输入正确的规格型号！',
                pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]+/g,
              },
            ]}
          >
            <Input placeholder="请输入规格型号" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="单位">
            <Input placeholder="请输入单位" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="单价">
            <Input placeholder="请输入单价" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="存储条件">
            <Select
              options={[
                { value: '0', label: <span>常温</span> },
                { value: '1', label: <span>冷冻</span> },
                { value: '2', label: <span>冷藏</span> },
                { value: '3', label: <span>阴凉</span> },
                { value: '4', label: <span>无尘</span> },
                { value: '5', label: <span>其他</span> },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item
            label="生产厂家"
            name="producer"
            rules={[
              {
                required: true,
                message: '请输入厂家名称！',
              },
              {
                max: 20,
                min: 3,
                message: '名称大于3字小于20字',
              },
              {
                message: '请输入合法的厂家名称！',
                pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]+/g,
              },
            ]}
          >
            <Input placeholder="请输入生产厂家" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="供货单位"
            name="supplier"
            rules={[
              {
                required: true,
                message: '请选择供应单位！',
              },
            ]}
          >
            <Select options={[{ label: '3r教室', value: 0 }]} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item
            label="请输入备案号"
            rules={[
              {
                required: true,
                message: '请输入注册/备案号！',
              },
              {
                max: 20,
                min: 4,
                message: '名称大于4字小于20字',
              },
              {
                message: '请输入合法的备案号！',
                pattern: /^[0-9\u4e00-\u9fa5]*$/g,
              },
            ]}
          >
            <Input placeholder="请输入备案证号" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="请输入生产许可证"
            rules={[
              {
                required: true,
                message: '请输入生产许可证',
              },
              {
                max: 20,
                min: 4,
                message: '名称大于4字小于20字',
              },
            ]}
          >
            <Input placeholder="请输入生产许可证" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="请输入经营代码"
            rules={[
              {
                required: true,
                message: '请输入经营代码',
              },
            ]}
          >
            <Input placeholder="请输入经营代码" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="注册证">
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture"
              defaultFileList={[...fileList]}
              className="upload-list-inline"
            >
              <Button icon={<UploadOutlined />}>上传注册证</Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="注册证有效期">
            <DatePicker.RangePicker />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="授权证">
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture"
              defaultFileList={[...fileList]}
              className="upload-list-inline"
            >
              <Button icon={<UploadOutlined />}>上传授权证</Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="授权证有效期">
            <DatePicker.RangePicker />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="备注">
            <Input.TextArea placeholder="请输入备注" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
