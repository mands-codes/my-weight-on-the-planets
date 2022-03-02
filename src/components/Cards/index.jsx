import React, {useState, useEffect}  from "react";
import './style.css';

function Cards(props) 
{
const [planet, setPlanet] = useState(null);

const nomePlaneta = props.planet.name;

useEffect(()=>{
  fetch(`https://api.le-systeme-solaire.net/rest/bodies/${nomePlaneta}`)
  .then(res=> res.json)
  .then(data=>setPlanet(data)
  )
}, [])
 
    return(
      <div className="row justify-content-center">
         {nomePlaneta && (
            <div className="card">
            <div className="card-body">
              <p><strong>Nome do Planeta:</strong>{planet.englishName}</p>
              <p><strong>Inclinação:</strong>{planet.inclination}</p>
            </div>
          </div>
         )}   
      </div>
    );
}

export default Cards;

