
// const element = document.createElement('h1');
// element.innerText = 'Hello, Worldddd !!!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './styles.css';
//import Badge from './components/Badge';
//import BadgeNew from './pages/BadgeNew';
//import Badges from './pages/Badges';
import App from './components/App';
//import data from './data.json';
//import logo from './images/logo.svg';
//import Loader from './components/Loader';


// function CharacterCard(props){
//     const { character } = props;

//     return(
//         <div className="CharacterCard" style={{backgroundImage: `url(${character.image})`}}>
//             <div className="CharacterCard__name-container text-truncated">
//                 {character.name}
//             </div>
            
//         </div>
//     );
// }

// class App extends React.Component{
//     state = {
//         nextPage: 1,
//         loading: true, 
//         error: null,
//         data: {
//             results: [],
//         },
//     }
    
//     componentDidMount(){
//         this.fetchCharacters() //Iniciar una llamada a la API. Es un proceso asyncrono.
//     }

//     fetchCharacters = async () => {
//         this.setState({loading: true, error:null})

//         try{
//             const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`); //respuesta  de la API.
//             const data = await response.json(); //Carga los datos de la API.

//             this.setState({
//                 loading: false,
//                 data: {
//                     info: data.info,
//                     results: [].concat(
//                         this.state.data.results,
//                         data.results
//                     ),
//                 },
//                 nextPage: this.state.nextPage + 1,
//             });
//         } catch (error) {
//             this.setState({
//                 loading: false,
//                 error: error,
//             });
//         }
        
//     };

//     render(){
//         return (
//             <div className="container">
//                 <div className="App">
//                     <img className="Logo" src={logo} alt="Rick y Morty" />
//                     <ul className="row">
//                         {this.state.data.results.map(character =>(
//                             <li className="col-6 col-md-3" key={character.id}>
//                                 <CharacterCard character={character} />
//                             </li>
//                         ))}
//                     </ul>

//                    {/* {this.state.loading && (
//                        <div className="loader">
//                            <Loader />
//                        </div>
//                    )}  */}
//                    {this.state.loading && <p className="text-center">Loading...</p>}

//                     {!this.state.loading && this.state.data.info.next && (
//                     <button onClick={() => this.fetchCharacters()}>Load More</button>
//                     )}
//                 </div>
//             </div>
//         );
//     }
// }
//const jsx = <h1>Hello, WDNA !!!</h1>
//const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a Platzi');
//const name = 'WDNA';
//const element = React.createElement('h1',{},`Hola, esto es ${name}`);
//const jsx = <h1>hola esto es {name}</h1>
// const jsx = (
//     <div>
//         <h1>Hola, esto es WDNA.</h1>
//         <p>Parte frontend.</p>
//     </div>
// );

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola, esto es WDNA 2.'),
//     React.createElement('p', {}, 'Parte frontend 2.')
// );
const container = document.getElementById('app');

//  ReactDOM.render(__qué__,__dónde__);

 // <Badge
    //     firstName="Adrián"
    //     lastName="Cristiá"
    //     avatarUrl=""
    //     jobTitle="Frontend Engineer"
    //     twitter="adriveloso33"
    // />,
ReactDOM.render(<App/>,container);

