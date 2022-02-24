import React  from "react";
import './style.css';
import  Card  from 'react-bootstrap/Card';
 
function Cards(props) 
{
  const planets = [
    {
      id: 'Sun',
      name: 'Sol (Sun)',
      info: 'O Sol (do latim sol, solis) é a estrela central do Sistema Solar.  Todos os outros corpos do Sistema Solar, como planetas, planetas capn, asteroides,  cometas e poeira, bem como todos os satélites associados a estes corpos, giram ao seu redor ',
      age: '4,5 bilhões de anos',
      image: 'https://s2.glbimg.com/r8WE-ELD3128cp63sjO-3wIKvKg=/e.glbimg.com/og/ed/f/original/2019/03/11/captura_de_tela_2019-03-11_as_11.10.47.png',
      imageAlt: 'fotoLua',
    },
    {
      id: 'Moon',
      name: 'Lua (Moon)',
      info: 'A Lua é o único satélite natural da Terra e o quinto maior do Sistema Solar. \n É o maior satélite natural de um planeta no sistema solar em relação ao tamanho do seu corpo primário, tendo 27% do diâmetro e 60% da densidade da Terra. ',
      age: ' 4,51 mil milhões',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Lua_Azul_observada_do_Observat%C3%B3rio_Municipal_de_Campinas_Jean_Nicolini.png',
      imageAlt: 'fotoLua'
    },
    {
      id: 'Mercury',
      name: 'Mercúrio (Mercury)',
      info: 'Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres \n A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar',
      age: '4,51 mil milhões',
      durationDay: '58d 15h 30m',
      timeCourse: '88 dias',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg',
      imageAlt: 'fotoMercurio',
    },
    {
      id: 'Venus',
      name: 'Vênus (Venus)',
      info: 'Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. \n Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. \n Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras. ',
      age: '4,503 * 10^9 anos',
      durationDay: '116d 18h 0m',
      timeCourse: '225 dias',
      image: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/f5c821353c57b50225cda29678232840.jpg',
      imageAlt: 'fotoVenus',
    },
    {
      id: 'Earth',
      name: 'Terra (Earth)',
      info: 'A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. \n Lar de milhões de espécies de seres vivos, incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida.',
      age: '4,56 bilhões de anos',
      durationDay: '24h',
      timeCourse: '365 dias',
      image: 'https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2014/11/21/nasaplanetaterra01.jpg',
      imageAlt: 'fotoTerra',
    },
    {
      id: 'Mars',
      name: 'Marte (Mars)',
      info: 'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada',
      age: '4,603 * 10^9 anos',
      durationDay: "1d 0h 37m",
      timeCourse: '687 dias',
      image: 'https://s2.glbimg.com/TCdsZqvzdFBebLLdarHDDTjY2I0=/620x620/smart/e.glbimg.com/og/ed/f/original/2021/04/26/hypebeast_176875279_909432406557780_5887379695959626292_n.jpg',
      imageAlt: 'fotoMarte',
    },
    {
      id: 'Jupiter',
      name: 'Júpiter',
      info: 'Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. \n Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno',
      age: '4,603 * 10^9 anos',
      durationDay: '0d 9h 56m',
      timeCourse: '12 anos',
      image: 'https://www.infoescola.com/wp-content/uploads/2008/04/jupiter.jpg',
      imageAlt: 'fotoJupiter',
    },
    {
      id: 'Saturn',
      name: 'Saturno (Saturn)',
      info: 'Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.',
      age: '4,503 * 10^9 anos',
      durationDay: '0d 10h 42m',
      timeCourse: '29 anos',
      image: 'data:image/jpeg;base64,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',
      imageAlt: 'fotoSaturno',
    },
    {
      id: 'Neptune',
      name: 'Netuno (Neptune)',
      info: 'Netuno ou Neptuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres',
      age: '4,503 * 10^9 anos',
      durationDay: '0d 16h 6m',
      timeCourse: '165 anos',
      image: 'https://www.infoescola.com/wp-content/uploads/2008/04/netuno.jpg',
      imageAlt: 'fotoNetuno',
    },
    {
      id: 'Uranus',
      name: 'Urano (Uranus)',
      info: 'Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano',
      durationDay: '0d 17h 14m',
      timeCourse: '84 anos',
      image: 'https://s2.static.brasilescola.uol.com.br/be/2021/04/planeta-urano.jpg',
      imageAlt: 'fotoUrano',
    },
    {
      id: 'Pluto',
      name: 'Plutão (Pluto)',
      info: 'Plutão, formalmente designado 134340 Plutão é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol',
      age: '4,6 bilhões de anos',
      durationDay: '6,5 dias',
      timeCourse: '248 anos',
      image: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/sonda-new-horizons-registrou-imagem-plutao-em-julho-2015-55a55da01dda4.jpg',
      imageAlt: 'fotoPlutao',
    },
  ]

  const selectedPlanet = planets.find((item) => item.id === props.planet.name);

    return(
      <div className="row justify-content-center">
         {selectedPlanet && (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" alt={selectedPlanet.imageAlt} src={selectedPlanet.image} />
            <Card.Body>
              <Card.Title>{selectedPlanet.name}</Card.Title>
            <Card.Text>
            <p>{selectedPlanet.info}</p>
                <span><b>Idade:</b> {selectedPlanet.age}</span>
                <br></br>
                <span><b>Duração do Dia:</b>{selectedPlanet.durationDay}</span>
                <br></br>
                <span><b>Período Orbital:</b>{selectedPlanet.timeCourse}</span>
            </Card.Text>
            </Card.Body>
            </Card>
         )}   
      </div>
    );
}

export default Cards;

