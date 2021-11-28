import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
const LoginForm = (props) => {
  const onFinish = (values) => {
    // console.log('Success:', values);
    axios.post("https://reqres.in/api/login", {
      "email":values.email,
      "password":values.password
    }).then((res)=>{
      alert("Logged in !! "+JSON.stringify(res.data));
      console.log(res.data);
      localStorage.setItem("token",res.data.token);
    }).catch(err => err.response && alert("Error : "+err.response.data.error))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return ( 
    <>
      <div className="row text-center mb-4 pb-3">
        <h2 className="mb-0 fw-bold" style={{color:"#00121b"}}>Welcome Back</h2>
        <div className="text-muted">Sub-title text goes here</div>
      </div>
      <div className="row w-100" style={{maxWidth:"300px"}}>
        <Form
        
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input placeholder="Email Address *"/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password visibilityToggle={false} placeholder="Password *"/>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              span: 24,
            }}
            style={{marginBottom:"0px"}}
          >
            <Button type="primary" htmlType="submit" style={{width:"100%", background:"#023047",border:"#023047"}}>
              Submit
            </Button>
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <Checkbox style={{color:"#023047"}}>Remember me</Checkbox>
            <a href="#" className="float-end forgot-password" style={{color:"#023047"}}>Forgot password?</a>
          </Form.Item>

          
        </Form>
        
      </div>
    </> 
  );
}

export default LoginForm;