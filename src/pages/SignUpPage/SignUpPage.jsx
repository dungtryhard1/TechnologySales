import React from "react";
import { WrapperForm } from "../SignInPage/style";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const SignUpPage = () => {
  return (
    <WrapperForm>
      <h2>Đăng Ký</h2>
      <Form
        name="login"
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 360,
          width: "60%",
        }}
        // onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Hãy nhập tài khoản!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Tài khoản" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Hãy nhập mật khẩu!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <Form.Item
          name="verifyPassword"
        >
          <Input
            prefix={<LockOutlined />}
            placeholder=" Xác nhận lại mật khẩu"
          />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Đăng ký
          </Button>
          Nếu đã có tài khoản? <a href="/sign-in">Đăng nhập tại đây!</a>
        </Form.Item>
      </Form>
    </WrapperForm>
  );
};

export default SignUpPage;
