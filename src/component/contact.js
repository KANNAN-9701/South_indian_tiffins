import React from "react";
import './contact.css';

function Contact(){
    return(
<div className="body">
    <div className="wrap">
        <h1>CONTACT US</h1>
        <div className="form-wrap">
            <form>
                <label for="name">Enter Your Name</label>
                <input type="text" name="name" required/>
                <label for="email">Enter Your Email</label>
                <input type="email" name="email" required/>
                <label for="number">Enter Your Number</label>
                <input type="text" name="number" required/>
                <label for="subject">Enter Your Subject</label>
                <textarea name="subject" required></textarea>
                <input type="submit" value="SEND" />
            </form>
        </div>
    </div>
</div>
);
}

export default Contact;