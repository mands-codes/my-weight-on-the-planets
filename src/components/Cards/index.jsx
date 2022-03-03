import React  from "react";
import './style.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useSWR from 'swr';
import axios from 'axios';
const fetcher = (...params) => axios.get(...params).then(res => res.data);

function Cards(props) 
{
const nome = props.planet.name;

const { data } = useSWR(`https://api.le-systeme-solaire.net/rest/bodies/${nome}`, fetcher)
console.log(data);
if(!data)
{
  return (<Box sx={{ display: 'flex' }}>
  <CircularProgress />
</Box>);
}

    return(
      <div className="row justify-content-center">
         {nome && (
            <div className="card">
            <div className="card-body">
              <p><strong>Nome do Planeta:</strong>{data.englishName}</p>
              <p><strong>Período Gravitacional:</strong>{data.sideralOrbit} dias</p>
            </div>
          </div>
         )}   
      </div>
    );
}

export default Cards;

