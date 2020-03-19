import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  
  render(){
    const movie = {
      tittle: 'Avangers: Infinity wars',
      vote: 8.1,
      image: 'https://static.posters.cz/image/1300/%D0%9A%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80/avengers-infinity-war-i62710.jpg',
      overview: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'
  }
    function Image (props){
      return (
          <img className={'poster'} src={props.src} alt={props.alt} />
      )
  }
  
  
  function MovieItem(props) {
      console.log('MovieItem props: ',props);
      const {data: {tittle, vote, image, overview}} = props
      return(
       <div className={'container'}>
          <h1 className={'tittle'}>{tittle}</h1>
          <div style={{display:'flex'}}>
            {/* <p className={'vote'}>{vote}</p>
            <button type='button'>Like</button> */}
          </div>
          <Image src={image} alt={tittle}/>
          <p className={'overview'}>{overview}</p>
       </div>
      )
  }
    return(
      <div>
        <MovieItem data={movie} 

        /> 
    </div>

    )
  }
}

export default App;
