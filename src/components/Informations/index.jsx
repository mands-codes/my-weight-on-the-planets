import React  from "react";
import './style.css';
import  Card  from 'react-bootstrap/Card';
import { Sun } from "../Cards/Sun";
function Informations(props) 
{
    return(
        <div className="container">  
            <Card style={{ width: '18rem' }} id="Sun">
            <Card.Img variant="top" alt="FotoSol" src="https://s2.glbimg.com/r8WE-ELD3128cp63sjO-3wIKvKg=/e.glbimg.com/og/ed/f/original/2019/03/11/captura_de_tela_2019-03-11_as_11.10.47.png" />
            <Card.Body>
              <Card.Title>Sol (Sun)</Card.Title>
            <Card.Text>
            <p>O Sol (do latim sol, solis) é a estrela central do Sistema Solar. 
                   Todos os outros corpos do Sistema Solar, como planetas, planetas capn, asteroides, 
                   cometas e poeira, bem como todos os satélites associados a estes corpos, giram ao seu redor 
                </p>
                <span><b>Idade:</b> 4,5 bilhões de anos</span>
                <br></br>
                <span><b>Diametro:</b> 1.392.700 km</span>
                <br></br>
                <span><b>Temperatura:</b> 15.000.000° C</span>
            </Card.Text>
            </Card.Body>
            </Card>
        
            <Card style={{ width: '18rem' }} id="Moon">
            <Card.Img variant="top" alt="Foto Lua" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Lua_Azul_observada_do_Observat%C3%B3rio_Municipal_de_Campinas_Jean_Nicolini.png" />
            <Card.Body>
              <Card.Title>Lua (Moon)</Card.Title>
            <Card.Text>
                 <p>A Lua é o único satélite natural da Terra e o quinto maior do Sistema Solar. 
                      É o maior satélite natural de um planeta no sistema solar em relação ao tamanho do seu corpo primário,
                    tendo 27% do diâmetro e 60% da densidade da Terra, o que representa 1⁄81 da sua massa. 
                </p>
                <span><b>Idade:</b> 4,51 mil milhões </span>
                <br></br>
                <span><b>Diametro:</b> 3.474,8 km</span>
                <br></br>
                <span><b>Temperatura:</b> Média: -53,1 ºC Mínima: -173,1 ºC; Máxima: 116,9 ºC</span>
            </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} id="Mercury">
            <Card.Img variant="top" alt="Foto Mercurio" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg" />
            <Card.Body>
              <Card.Title>Mercúrio (Mercury)</Card.Title>
            <Card.Text>
            <p>Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres.
                 A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita
                  dentre todos os planetas do Sistema Solar.
                </p>
                <span><b>Idade:</b> 4,51 mil milhões </span>
                <br></br>
                <span><b>Diametro:</b> 3.474,8 km</span>
                <br></br>
                <span><b>Temperatura:</b>Média: 166,85 ºC - Mínima: -183,15 ºC - Máxima: 426,85 ºC</span>
            </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} id="Venus">
            <Card.Img variant="top" alt="FotoVenus" src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/f5c821353c57b50225cda29678232840.jpg" />
            <Card.Body>
              <Card.Title>Vênus (Venus)</Card.Title>
            <Card.Text>
                Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. 
                Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. 
                Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras. 
            </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} id="Earth">
            <Card.Img variant="top" alt="FotoTerra" src="https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2014/11/21/nasaplanetaterra01.jpg" />
            <Card.Body>
              <Card.Title>Terra (Earth)</Card.Title>
            <Card.Text>
                A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. 
                É também o maior dos quatro planetas telúricos. 
                É por vezes designada como Mundo ou Planeta Azul. 
                Lar de milhões de espécies de seres vivos, incluindo os humanos, a Terra é o único corpo celeste onde é conhecida 
                a existência de vida. O planeta formou-se há 4,56 bilhões de anos, e a vida surgiu na sua superfície um bilhão de anos depois.
            </Card.Text>
            </Card.Body>
            </Card>



            
           
        </div>
        


    );
}

export default Informations;

