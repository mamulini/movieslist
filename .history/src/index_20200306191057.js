import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

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


// function MovieItem(props) {
//     console.log('MovieItem props: ',props);
//     const {data: {tittle, vote, image, overview}} = props
//     return(
//      <div className={'container'}>
//         <h1 className={'tittle'}>{tittle}</h1>
//         <p className={'vote'}>{vote}</p>
//         <Image src={image} alt={tittle}/>
//         <p className={'overview'}>{overview}</p>
//      </div>
//     )
// }

class MovieItem extends React.Component{
    constructor(){
        super();

        this.state = {
            show: false,
            like: false
        }
    }

    toogleOverview = () => this.setState({show: !this.state.show})
    handleLike = () => this.setState({like: !this.state.like})
    
    render(){
        const {data: {tittle, vote, image, overview}} = this.props
        console.log( this.state)
        return(
            <div className={'container'}>
        <h1 className={'tittle'}>{tittle}</h1>
        <Image src={image} alt={tittle}/>
        <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <p className={'vote'}>{vote}</p>
            <button style={ {backgroundColor: this.state.like ? 'blue' : 'white' }} type='button' onClick={this.handleLike}>Like</button>
          </div>
        <button type="button" onClick={this.toogleOverview}>{this.state.show?'Hide overview' : 'Show overview'}</button>
        {this.state.show ? <p className={'overview'}>{overview}</p> : null }
        

        
     </div>
        )
    }
}



function App() {
    return (
    <div>
        <MovieItem data={movie} 

        /> 
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();


{/* <p>{props.tittle}</p> 
        <p>{props.vote}</p>  */}

// class MovieItem extends React.Component {
//     render() {
//         const {data: {tittle, vote, image, overview}} = this.props;
//         return (
//             <div>
//             <h1>{tittle}</h1>
//             <p>{vote}</p>
//             <Image src={image} alt={tittle}/>
//             <p>{overview}</p>
//         )
//     }
// }