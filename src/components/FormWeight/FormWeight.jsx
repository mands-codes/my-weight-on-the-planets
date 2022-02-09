import React, { useState }  from "react";
import { Button, TextField } from "@mui/material";
import './styles.css';

function FormWeight() {

const [planet, setPlanet] = useState("");
const [pesoValor, setPesoValor] = useState(0);

const calcularPeso = (planet, pesoValor) =>
{
    var result = 0; 
    var pesoTerra = 9.7;
    
    switch(planet)
    {
        case 'Sun': result = (pesoValor * 274) / pesoTerra;
        break;
        case 'Moon': result = (pesoValor * 1.6) / pesoTerra;
        break;
        case 'Mercury': result = (pesoValor * 3.7) / pesoTerra;
        break;
        case 'Venus': result = (pesoValor * 8.8) / pesoTerra;
        break;
        case 'Earth': result = pesoValor;
        break;
        case 'Mars': result = (pesoValor * 3.7) / pesoTerra;
        break;
        case 'Jupiter': result = (pesoValor * 24.9) / pesoTerra;
        break;
        case 'Saturn': result = (pesoValor * 10.4) / pesoTerra;
        break;
        case 'Neptune': result = (pesoValor * 11.1) / pesoTerra;
        break;
        case 'Uranus': result = (pesoValor * 8.8 ) /pesoTerra;
        break;
        case 'Pluto': result = (pesoValor * 0.5 ) / pesoTerra;
        break;
        default: result = pesoValor;
        break;
    }

    return result.toFixed(2);
}

 return(  
        <>
        <div className="Container">
            <div className="form">
                <TextField sx={{ mt: 3, ml: 2 }} label="Seu peso na terra"  
                onChange={(e) => setPesoValor(Number(e.target.value))}/>
                <TextField
                sx={{ mt: 3 , ml : 2}}
                disabled
                label={`Seu peso em: ${planet}`}
                value={calcularPeso(planet, pesoValor)}
                />
            </div>
            <div className="buttonPlanets">
            
                <Button variant={planet === "Sun" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                onClick={() => setPlanet("Sun")}
                 >Sun</Button>
            
                <Button variant = {planet === "Moon" ? "contained" : "outlined"}
                 sx={{mr: 1.5}}
                onClick={() => setPlanet("Moon")}
                >Moon</Button>
       
                <Button variant= {planet === "Mercury" ? "contained" : "outlined"}
                 sx={{mr: 1.5}}
                 onClick={() => setPlanet("Mercury")}
                >Mercury</Button>
       
                <Button variant= {planet === "Venus" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                onClick={() => setPlanet("Venus")}
                >Venus</Button>
      
                <Button variant="contained"
                sx={{mr: 1.5}}
                >Earth</Button>
       
                <Button variant = {planet === "Mars" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                >Mars</Button>
       
                <Button variant= {planet === "Jupiter" ? "contained" : "outlined"}
                 sx={{mr: 1.5}}
                >Jupiter</Button>
      
                <Button variant={planet === "Saturn" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                >Saturn</Button>
     
                <Button variant= {planet === "Neptune" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                >Neptune</Button>
       
                <Button variant={planet === "Uranus" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                >Uranus</Button>
       
                <Button variant={planet === "Pluto" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                >Pluto</Button>
            </div>
        </div>
        </>

    );
}

export default FormWeight;