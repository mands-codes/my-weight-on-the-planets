import React, { useState }  from "react";
import { Button, TextField, Alert } from "@mui/material";
import './styles.css';
import Informations from "../Informations";
import Sun from '../../assets/Sun.png';
import Moon from '../../assets/Moon.png';
import Mercury from '../../assets/Mercury.png';
import Venus from '../../assets/Venus.png';
import Earth from '../../assets/Earth.png';
import Mars from '../../assets/Mars.png';
import Jupiter from '../../assets/Jupiter.png';
import Saturn from '../../assets/Saturn.png';
import Neptune from '../../assets/Neptune.png';
import Uranus from '../../assets/Uranus.png';
import Pluto from '../../assets/Pluto.png';

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
    const showAlert = planet === "" && pesoValor > 0;

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
                { showAlert &&
                <Alert severity="warning">Precisa escolher um planeta primeiro!</Alert>
                }
            </div>
            <div className="buttonPlanets">
                <Button variant={planet === "Sun" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                onClick={() => setPlanet("Sun")}>
                <img src={Sun} width={20} height={20} className="imagem" alt="IconeSol"/>
                Sun
                 </Button>
            
                <Button variant = {planet === "Moon" ? "contained" : "outlined"}
                 sx={{mr: 1.5}}
                onClick={() => setPlanet("Moon")}>
                <img src={Moon} width={20} height={20} className="imagem" alt="IconeLua"/>    
                Moon</Button>
       
                <Button variant= {planet === "Mercury" ? "contained" : "outlined"}
                 sx={{mr: 1.5}}
                 onClick={() => setPlanet("Mercury")}>
                <img src={Mercury} width={20} height={20} className="imagem" alt="IconeMercurio"/>
                Mercury</Button>
       
                <Button variant= {planet === "Venus" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                onClick={() => setPlanet("Venus")}>
                <img src={Venus} width={20} height={20} className="imagem" alt="IconeVenus"/>
                Venus</Button>
      
                <Button variant="contained"
                sx={{mr: 1.5}}>
                <img src={Earth} width={20} height={20} className="imagem" alt="IconeTerra"/>
                Earth</Button>
       
                <Button variant = {planet === "Mars" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                onClick={() => setPlanet("Mars")}>
                <img src={Mars} width={20} height={20} className="imagem" alt="IconeMarte"/>
                Mars</Button>
       
                <Button variant= {planet === "Jupiter" ? "contained" : "outlined"}
                 sx={{mr: 1.5}}
                 onClick={() => setPlanet("Jupiter")}>
                <img src={Jupiter} width={20} height={20} className="imagem" alt="IconeJupiter"/>
                Jupiter</Button>
      
                <Button variant={planet === "Saturn" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                onClick={() => setPlanet("Saturn")}>
                <img src={Saturn} width={20} height={20} className="imagem" alt="IconeSaturno"/>
                Saturn</Button>
     
                <Button variant= {planet === "Neptune" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                onClick={() => setPlanet("Neptune")}>
                <img src={Neptune} width={20} height={20} className="imagem" alt="IconeNetuno"/>       
                Neptune</Button>
       
                <Button variant={planet === "Uranus" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                onClick={() => setPlanet("Uranus")}>
                <img src={Uranus} width={20} height={20} className="imagem" alt="IconeUrano"/>
                Uranus</Button>
       
                <Button variant={planet === "Pluto" ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                onClick={() => setPlanet("Pluto")}>
                <img src={Pluto} width={20} height={20} className="imagem" alt="IconePlutao"/>
                Pluto</Button>
            </div>
        </div>
        <Informations planet={planet}/>
        
        </>
    );
}

export default FormWeight;