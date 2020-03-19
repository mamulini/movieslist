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
          <p className={'vote'}>{vote}</p>
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
