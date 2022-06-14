import React from 'react';
import './login.css'
import logo from '../assets/icons/vit.png'
import student from '../assets/icons/graduated.png'

const users=[
    {
        id:"20BLC1028",
        password:"Amal@2323",
    }
    {
        id:"20BLC1029",
        password:"Amal@2304",
    }
]

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


                    <div class="carousel">
                        <input type="checkbox" class="faux-ui-facia" />
                        <div class="slide" slide="5" annot="This is the fifth slide title. Photo by David Marcu.">
                            <img src="https://ununsplash.imgix.net/uploads/141223808515744db9995/3361b5e1?q=75&fm=jpg&w=602" alt="Slide 5" />
                        </div>
                        <input type="checkbox" class="faux-ui-facia" />
                        <div class="slide" slide="4" annot="This is the fourth slide title. Photo by Ryan Lum.">
                            <img src="https://unsplash.imgix.net/photo-1415356838286-df6fd593e8b3?q=75&fm=jpg&w=600" alt="Slide 4" />
                        </div>
                        <input type="checkbox" class="faux-ui-facia" />
                        <div class="slide" slide="3" annot="This is the third slide title. Photo by Tomasz Paciorek.">
                            <img src="https://ununsplash.imgix.net/reserve/JaI1BywIT5Or8Jfmci1E_zakopane.jpg?q=75&fm=jpg&w=600" alt="Slide 3" />
                        </div>
                        <input type="checkbox" class="faux-ui-facia" />
                        <div class="slide" slide="2" annot="This is the second slide title. Photo by S Charles.">
                            <img src="https://ununsplash.imgix.net/uploads/1413387158190559d80f7/6108b580?fit=crop&fm=jpg&q=75&w=600" alt="Slide 2" />
                        </div>
                        <input type="checkbox" class="faux-ui-facia" />
                        <div class="slide" slide="1" annot="First slide title. Photo by Forrest Cavale.">
                            <img src="https://ununsplash.imgix.net/uploads/1413399939678471ea070/2c0343f7?q=75&fm=jpg&w=601" alt="Slide 1" />
                        </div>
                        <div class="counter" count="5"> / 5</div>

                    </div>





                </div>

            </div>
        </div >
    );
}


export default Login;
