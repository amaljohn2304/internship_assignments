import React from 'react';
import './login.css'
import logo from '../assets/icons/vit.png'
import student from '../assets/icons/graduated.png'

const Login = () => {
    return (
        <div className='login_page' style={{
            backgroundImage:
                "url('https://images.unsplash.com/photo-1544991185-13fe5d113fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')",
            height: '100vh',
            marginTop: '-70px',
            fontSize: '1vw',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className='login_box'>
                <div className='item' id="login_info">

                    <div className='org_info' style={{ display: "flex", alignContent: "flex- start", margin: "3%" }}><img src={logo} style={{ height: "10%", width: "10%" }} />
                        <div style={{ marginTop: "2%", marginLeft: "2%" }}>Vellore Institute of Technology</div>
                    </div>

                    <div style={{ marginTop: "8%" }}>
                        <img src={student} style={{ height: "20%", width: "20%" }} />
                    </div>
                    <div style={{ fontSize: "1.5vw", fontWeight: "500" }}>
                        Student Login
                    </div>

                    <div className="input_field" style={{ display: 'block' }}>
                        <form className='input_form'>

                            <input type="text" name="name" className='text_box' placeholder='Username' />
                            <br></br>

                            <input type="password" name="pass" className='text_box' placeholder='Password' />
                            <br></br>

                            <div className='input_foot'>
                                <input type="submit" value="Submit" />
                                <div className='forgot_pass'>Forgot Password?</div>
                            </div>


                        </form>
                    </div>

                </div>
                <div className='item'>
                    Aesthetics
                </div>

            </div>
        </div >
    );
}


export default Login;
