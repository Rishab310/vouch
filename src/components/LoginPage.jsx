import LoginForm from "./LoginForm";
import landingImg from '../assets/landing-img.png';
import { Layout, Menu, Button } from 'antd';
import logo from '../assets/logo.png';
const LoginPage = () => {
  return ( 
    <>
      <div className="" style={{maxheight:"100vh"}}>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{height:"10vh"}}>
        <div className="logo ms-3 h-100">
          <img src={logo} alt="" height="100%"/>
        </div>
        <Button type="primary" className="d-none d-md-block float-end ms-auto my-auto me-4" style={{width:"160px", background:"#023047", border:"#023047"}}>Start Free Trail</Button>
        <Button type="primary" className="d-none d-md-block float-end my-auto me-5" style={{width:"160px", background:"#fb8500",border:"#fb8500"}}>Login</Button>
      </Menu>
      <div className="row px-0 mx-0 h-100" style={{minHeight:"90vh"}}>
        <div className="col-12 col-md-4 d-flex justify-content-center flex-column align-items-center">
          <LoginForm/>
        </div>
        <div className="col-8 d-none d-md-block px-0 d-flex justify-content-end">
          <img src={landingImg} className="img-fluid" style={{ height:"90vh",width:"100%",maxWidth:"100%"}} />
        </div>
      </div>
      </div>
    </> 
  );
}

export default LoginPage;