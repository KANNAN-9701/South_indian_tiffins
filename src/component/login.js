import React ,{useState}from "react";
import './login.css';
import data from "./menu1";

function Login(){
    const [show,setShow]=useState(false);
    const [show1,setShow1]=useState(false);
    const [show2,setShow2]=useState(false);
    const [searchitem,setSearchitem]=useState("");

    const [card,setCard]=useState([]);

    const addToCard=(data)=>{
        setCard([...card,data]);
    }

    const removeFromCard=(dataToRemove)=>{
        setCard(card.filter((data)=>data!==dataToRemove));
    }

    return(
        <div>
            <nav className="l-nav">
                <ul>
                    <li><input type="search" placeholder="Search Items" onChange={(e)=>setSearchitem(e.target.value)}/></li>
                    <button onClick={()=>setShow1(true)}>Card({card.length})</button>
                    <button onClick={()=>setShow(true)}>Feedback</button>
                </ul>
            </nav>
            <div class="m-cont">
            <h1>Foods</h1>
            <div className="m-items">
            {data.foods.filter((value)=>{
                if(searchitem===""){
                    return value;
                }
                if(value.name.toLowerCase().includes(searchitem.toLowerCase())){
                    return value;
                }
                else{
                    return null;
                }
             })
            .map(data =>(
                <div key={data.id} class="root">
                    <img src={data.image} alt={data.name} />
                    <h2>{data.name}</h2>
                    <h3>{"Rs."+data.price}</h3>
                    <button onClick={()=>addToCard(data)}>Add to Card</button>
                </div>
            
             ))}
            </div>
        </div>
       {show?<div className="feedback">
            <form>
            <button onClick={()=>setShow(false)} className="fcancelbtn">X</button>
                    <h1>Feedback Form</h1>
                    <input type="text" placeholder="Name" required />
                    <input type="text" placeholder="Rating out of 5" required />
                    <textarea placeholder="Details" required></textarea>
                    <button>Sumbit</button>
                </form>
             </div>:null}
        
            {show1?<div className="card-con">
            <button onClick={()=>setShow1(false)} className="fcancelbtn">X</button>
                    <h1>Card</h1>
                <div className="card">
                    {card.map(data =>(
                <div key={data.id} class="root">
                    <img src={data.image} alt={data.name} />
                    <h2>{data.name}</h2>
                    <h3>{"Rs."+data.price}</h3>
                    <button onClick={()=>removeFromCard(data)}>Remove to Card</button>
                </div>
            
             ))}
                 </div> 
                 <button onClick={()=>setShow2(true)}>Purchase</button> 
             </div>:null}

             {show2?<div className="pur-con">
            <button onClick={()=>setShow2(false)} className="fcancelbtn">X</button>
                    <h1>Purchase</h1>
                <div className="purchase">
                    <form>
                        
                        <input type="text"placeholder="Bank Name" required/>
                        <input type="text"placeholder="Card Number" required/>
                        <input type="text"placeholder="CVV" required/>
                        <input type="text"placeholder="Valid from (MM/YYYY)" required/>
                        <input type="text"placeholder="Valid To (MM/YYYY)" required/>
                        <input type="text"placeholder="Door No,Street Name,City" required/>
                        <input type="text"placeholder="District" required/>
                        <input type="text"placeholder="Post code" required/>
                        
                          
                    </form>
                </div>
                 <button>Buy</button> 
             </div>:null}
        </div>
    );
}

export default Login;