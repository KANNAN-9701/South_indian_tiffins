import React from "react";
import './about.css';

function About(){
    return(
        <div className="a-body">
            <div class="step-container">
                <h1 class="heading title">How It Works</h1>
            <section class="steps">
                <div class="box">
                    <img src={require("./images/step-1.jpg")} alt="" />
                        <h3>choose your favorite food</h3>
                </div>
                <div class="box">
                    <img src={require("./images/step-2.jpg")} alt="" />
                    <h3>free and fast delivery</h3>
                </div>
                <div class="box">
                    <img src={require("./images/step-3.jpg")} alt=""></img>
                    <h3>easy payments methods</h3>
                </div>
                <div class="box">
                    <img src={require("./images/step-4.jpg")} alt=""></img>
                    <h3>and finally, enjoy your food</h3>
                </div>
            </section>
        </div>
        <hr className="hr"/>
        <section class="speciality">
            <h1 class="heading title">Our Speciality</h1>
                <div class="box-container">
                    <div class="box">
                        <img class="image" src={require('./images/taste1.jpg')} alt="" />
                        <div class="content">
                            <img src={require('./images/taste.jpg')} alt="" />
                            <h3>Tasty Foods</h3>
                        </div>
                        </div>
                        <div class="box">
                            <img class="image" src={require('./images/twentyfour1.jpg')} alt="" />
                            <div class="content">
                                <img src={require('./images/twentyfour.jpg')} alt="" />
                                <h3>24X7 Available</h3>
                            </div>
                        </div>
                        <div class="box">
                            <img class="image" src={require('./images/payment1.jpg')} alt="" />
                            <div class="content">
                                <img src={require('./images/payment.png')} alt="" />
                                <h3>Simple Payment</h3>
                            </div>
                        </div>
                        <div class="box">
                            <img class="image" src={require('./images/hygiene1.jpg')} alt="" />
                            <div class="content">
                                <img src={require('./images/hygiene.jpg')} alt="" />
                                <h3>Hygienic Foods</h3>
                            </div>
                        </div>
                        <div class="box">
                            <img class="image" src={require('./images/fast1.jpg')} alt="" />
                            <div class="content">
                                <img src={require('./images/fast.jpg')} alt="" />
                                <h3>Fast Delivery</h3>
                            </div>
                        </div>
                        <div class="box">
                            <img class="image" src={require('./images/easy1.jpg')} alt="" />
                            <div class="content">
                                <img src={require('./images/easy.png')} alt="" />
                                <h3>Easy To Order</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="hr" />
                <div className="details">
                    <p>kannan@gmail.com <br/> 9876543210 <br/> 1/2,abc Street, Chennai <br/> 600008.</p>
                </div>
            </div>
    )
}

export default About;