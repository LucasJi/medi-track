import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, DatePicker, Upload, UploadFile, Select } from 'antd';

const fileList: UploadFile[] = [
  {
    uid: '-1',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];
/** 新增/编辑供应商 */
export default function AddSupplier() {
  return (
    <Form layout="vertical">
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item
            name="phone"
            label="联系电话"
            rules={[
              { required: true, message: '请输入联系人电话' },
              {
                max: 20,
                min: 4,
                message: '大于4字小于20字',
              },
              {
                message: '请输入正确的电话号码！',
                pattern: /^\d{10,11}$/g,
              },
            ]}
          >
            <Input placeholder="请输入联系电话" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="供应商名"
            name="supplier"
            rules={[{ required: true, message: '请输入供应商名' }]}
          >
            <Input placeholder="请输入供应商名" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="地址" rules={[{ required: true, message: '请输入地址' }]}>
            <Input placeholder="请输入地址" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="联系人" rules={[{ required: true, message: '请输入联系人' }]}>
            <Input placeholder="请输入联系人" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Ⅰ类经营">
            <Select
              options={[
                { value: '0', label: <span>具备</span> },
                { value: '1', label: <span>不具备</span> },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Ⅱ类经营范围">
            <Input placeholder="如有请填写" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Ⅲ类经营范围">
            <Input placeholder="如有请填写" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Ⅱ类许可证号">
            <Input placeholder="具备Ⅱ类许可时填写" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Ⅲ类许可证号">
            <Input placeholder="具备Ⅲ类许可时填写" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="营业执照有效期">
            <DatePicker.RangePicker />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="营业执照">
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture"
              defaultFileList={[...fileList]}
              className="upload-list-inline"
            >
              <Button icon={<UploadOutlined />}>上传</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="生产许可有效期">
            <DatePicker.RangePicker />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="生产许可">
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture"
              defaultFileList={[...fileList]}
              className="upload-list-inline"
            >
              <Button icon={<UploadOutlined />}>上传</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="经营许可有效期">
            <DatePicker.RangePicker />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="经营许可">
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture"
              defaultFileList={[...fileList]}
              className="upload-list-inline"
            >
              <Button icon={<UploadOutlined />}>上传</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item label="二类备案许可">
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture"
              defaultFileList={[...fileList]}
              className="upload-list-inline"
            >
              <Button icon={<UploadOutlined />}>上传</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
