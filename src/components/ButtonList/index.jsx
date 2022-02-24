import React, { Fragment } from 'react';
import { Button } from "@mui/material";

function ButtonList(props) {

     return (
        <Fragment>
            {props.planets.map((planet) => (
              <Button variant={props.selectedPlanet === planet.name ? "contained" : "outlined"}
                sx={{mr: 1.5}}
                onClick={() => props.onPress(planet)}>
               <img src={planet.icon} width={20} height={20} className="imagem" alt="IconeSol"/>
                  {planet.name}
               </Button>
        ))
        }
        </Fragment>
     );
}

export default ButtonList;