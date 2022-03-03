import React, { useState }  from "react";
import {  TextField, Alert } from "@mui/material";
import './styles.css';

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

import ButtonList from "../ButtonList";
import Cards from "../Cards";

function FormWeight() {

const [planet, setPlanet] = useState("");
const [pesoValor, setPesoValor] = useState(0);

 const planets = [
    {
        name: 'Sun',
        gravity: 274,
        icon: Sun
    },
    {
        name: 'Moon',
        gravity: 1.6,
        icon: Moon
    },
    {
        name: 'Mercury',
        gravity: 3.7,
        icon: Mercury
    },
    {
        name: 'Venus',
        gravity: 8.8,
        icon: Venus
    },
    {
        name: 'Earth',
        gravity: 9.7,
        icon: Earth
    },
    {
        name: 'Mars',
        gravity: 3.7,
        icon: Mars
    },
    {
        name: 'Jupiter',
        gravity: 24.9,
        icon: Jupiter
    },
    {
        name: 'Saturn',
        gravity: 10.4,
        icon: Saturn
    },
    {
        name: 'Neptune',
        gravity: 11.1,
        icon: Neptune
    },
    {
        name: 'Uranus',
        gravity: 8.8,
        icon: Uranus
    },
    {
        name: 'Pluto',
        gravity: 0.5,
        icon: Pluto
    }
]

const calculaPesoValor = (gravity, pesoValor) =>
{
    var result = 0; 
    var pesoTerra = 9.7;
    result = (pesoValor * gravity) / pesoTerra;

    return result.toFixed(2);
}
    const showAlert = planet === "" && pesoValor > 0;

 return(  
        <>
        <div className="Container">

        <div className="buttonPlanets">
                { <ButtonList
                    planets={planets}
                    selectedPlanet={planet}
                    onPress={(value) => setPlanet(value)}     
                  /> 
                 }  
            </div>
            <div className="form">
                <TextField sx={{ mt: 3, ml: 2 }} label="Seu peso na terra" 
                onChange={(e) => setPesoValor(Number(e.target.value))}/>
                <TextField
                sx={{ mt: 3 , ml : 2}}
                disabled
                label={`Seu peso em: ${planet.name}`}
                value={calculaPesoValor(`${planet.gravity}`, pesoValor)}
                />
                { showAlert &&
                <Alert severity="warning">Precisa escolher um planeta primeiro!</Alert>
                }
            </div>
            
        </div>
        {planet !== "" &&
            <Cards planet={planet} />
        }
        </>
    );
}

export default FormWeight;