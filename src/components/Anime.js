import React, { Component } from 'react'
import Animeitem from './Animeitem';

export class Anime extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading :false
        }
    }
    async componentDidMount(){
      fetch("https://ghibliapi.herokuapp.com/films").then(
            response => {
                return response.json()
            })
            .then(data =>{
                this.setState({articles : data})
            })
    }
        // let data = await fetch(url);
        // let parseddata = await data.json();
        // console.log(parseddata)
        // this.setState({articles: parseddata.articles})

      
     
  render() {
    console.log("results : ", this.state.articles);
    return (
        //  <div>
        //    app this is
        //  </div>
        <div className="container my-3">
        <h2>Anime - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return  <div className="col-md-4"  key={element.id}>
            <Animeitem
              title={element.title}
              descripton={element.description}
              image={element.image}
              url={element.url}
            />
          </div>
        })}
         
        </div>
        </div>
    );
  }

}
export default Anime;