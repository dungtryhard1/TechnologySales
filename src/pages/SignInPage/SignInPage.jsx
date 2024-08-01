import React, { useState } from "react";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { WrapperForm } from "./style";

const SignInPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <WrapperForm>
      <h2>Đăng Nhập</h2>
      <Form
        name="login"
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 360,
          width: "60%"
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
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Mật khẩu"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Nhớ đăng nhập</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Đăng nhập
          </Button>
          hoặc <a href="/sign-up">Đăng ký tại đây!</a>
        </Form.Item>
      </Form>
    </WrapperForm>
  );
};

export default SignInPage;
