import React from "react";
import data from "./menu1";
import './menu.css';

function Menu(){
 

    return(
        <div class="m-cont">
            <h1>Menu List</h1>
            <div className="m-items">
            {
             data.foods.map(data =>(
                <div key={data.id} class="root">
                    <img src={data.image} alt={data.name} />
                    <h2>{data.name}</h2>
                    <h3>{"Rs."+data.price}</h3>
                </div>
            
             ))}
            </div>
            <h4>(Login to get More items)</h4>
        </div>
    );  
             }

export default Menu;