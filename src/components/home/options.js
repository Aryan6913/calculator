import React from 'react';
import { Link } from 'react-router-dom';
import './optionsCss.css';

const optionsCardStyle = {
    width: '18rem'
}
export default function Options({availableOptions}) {
  return (
    <>
        {availableOptions.map((options,i)=>{
            return (
                <div key={i} className="card text-center my-3" style={optionsCardStyle}>
                    <img src={options.imgLoc} className="card-img-top" alt={options.name}/> 
                    <div className="card-body">
                        <h5 className="card-title">{options.name}</h5>
                        <p className="card-text">{options.desc}</p>
                        <Link to={options.location} className="btn btn-primary">Calculate</Link>
                    </div>
                </div>
            );
        })}
    </>
  );
}
