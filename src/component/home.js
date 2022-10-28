import React,{useState,useRef} from "react";
import {useNavigate} from 'react-router-dom';
import './home.css';



function Home(){
    const [show,setShow]=useState(false);
    
    const unameRef = useRef(null);
    const upassRef = useRef(null);
     
    const navigate=useNavigate()
    function handleClick(){
         
        if(unameRef.current.value==="kannan@gmail.com" && upassRef.current.value==="12345"){
            navigate("/login");
        }
        else{
            alert("Incorrect UserName and PassWord...Try Again...😊")
        }
    }
     
    


    return(
        <div className="h-container">
            <div className="h-bg"></div>
            <div className="h-content">
                <h1>Welcome to South Indian Tiffins</h1>
                <div className="h-cont">
                    <h2>Are You Hungry ?</h2>
                    <h2>Don't Wail !!!</h2>
                    <h2>Let Start To Order Food Now !</h2>
                    <button onClick={()=>setShow(true)}>Log In</button>
                   {show ? <div className="login-con">
                        <div className="form-cont sign-up-con">
                        
                            <form>
                                <h2>Create Account</h2>
                                <input type="text" placeholder="Name" required/>
                                <input type="email" placeholder="Email" required/>
                                <input type="text" placeholder="Number" required/>
                                <input type="password" placeholder="password" required/>
                                <input type="password" placeholder="password" required/>
                                <input type="submit" value="Sign Up"/>
                            </form>
                        </div>
                        <div className="form-cont sign-in-con">
                        <button onClick={()=>setShow(false)} className="cancelbtn">X</button>
                            <form>
                                <h2>Log in Here</h2>
                                <input type="email" placeholder="Email" ref={unameRef}/>
                                <input type="password" placeholder="password" ref={upassRef}/>
                                <input type="submit" value="Sign In" onClick={handleClick}/>
                            </form>
                        </div>
                    </div> : null}
                </div>
                
                <div className="img-con2">
                <img src={require("./images/b-1.jpg")} alt=""/>
                <img src={require("./images/b-2.jpg")} alt=""/>
                <img src={require("./images/b-3.jpg")} alt=""/>
                <img src={require("./images/b-4.jpg")} alt=""/>
                <img src={require("./images/b-5.jpg")} alt=""/>
                <img src={require("./images/b-6.jpg")} alt=""/>
                <img src={require("./images/b-7.jpg")} alt=""/>
                <img src={require("./images/b-8.jfif")} alt=""/>
                <img src={require("./images/b-9.jfif")} alt=""/>
                <img src={require("./images/b-10.jpg")} alt=""/>
                </div>
            </div>
            <div className="img-con">
                <img src={require("./images/briyani1.jpg")} alt=""/>
                <img src={require("./images/idly1.jpg")} alt=""/>
                <img src={require("./images/dosa1.jpg")} alt=""/>
                <img src={require("./images/pongal1.jpg")} alt=""/>
                <img src={require("./images/noodle1.jpg")} alt=""/>
            </div>
        </div>
    )
}



export default Home;