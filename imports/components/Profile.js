import React, { Component } from 'react';
import { Button, Grid, Card, Image, Icon} from 'semantic-ui-react'

import Menu from '../components/Menu.js';
import Media from 'react-media';

import styles from '../style/Profile.css';

export default class Profile extends Component {

  constructor(){
      super()
      this.state= {
        articles: [],
        stopcard: [],
        objet:"",
        num: 0
      };
    }

    componentWillMount(){
      this.getArticles();

    }



    handleRemove(e){
      console.log(e.target.name)
      Meteor.call('removeProfile', e.target.name, (err, res)=>{
        if(err){
          Bert.alert({
            title: "Erreur",
            message: err.message,
            type: 'danger'
          });
        } else {
          Bert.alert({
            title: "Bravo",
            message: "Votre article a été supprimé",
            type: 'success'
          });
          this.getArticles();
        }
      })
    }

    getArticles(){
      Meteor.call('listeProfile', (err,res) =>{
        if(err){
          Bert.alert({
            title: "Erreur",
            message: err.message,
            type: 'danger'
          });
        } else {
           this.setState({articles: res.reverse()})
          this.getCard();
        }
      });
    }


    getCard (){

      const i = this.state.num;



       this.state.articles[i];

       this.setState({objet:this.state.articles[i]});



       if(i === this.state.articles.length - 1){
         const count = this.state.articles.length  ;
          this.setState({num:count});
          console.log(count)
       }

       else {
         const count = i + 1 ;
         this.setState({num:count});
         console.log(count)
         console.log(this.state.articles.length)
        console.log(i);

       }
       }


    getlessCard (){

      const i = this.state.num;



             this.state.articles[i];

             this.setState({objet:this.state.articles[i]});



             if(i == 1 ){
               const count = 0 ;
                this.setState({num:count});
                console.log(count)
             }else {
               const count = i - 1 ;
               this.setState({num:count});
               console.log(count)


             }

    }

    ReturnArticle () {
      const StopCard = this.state.articles.slice(0, 2);
      this.setState({stopcard: StopCard});
      console.log(this.state.stopcard);
    }

    render(){

      const RemoveButton = (id) => {

          return (<Button
            size="mini"
            icon="delete"
            color="red"
            name={id}
            content="Supprimer"
            onClick={this.handleRemove.bind(this)}/>)
        }



      const FolowButton = () => {

            return(<Button
            size="mini"
            color='yellow'
            content="Lire plus"
              />)


            }

       const label = (props) => {
         if(this.state.objet == ""){

          console.log("attends")

        } else {

          var cont = props.substring(0,150);

            return (cont)}


        }




        return (


          <Media query="(max-width: 599px)">
                   {matches => matches ? (
                     <div className="Card-container">

                     <div className="card" key={this.state.objet._id}>

             <div className="card-circle">
                   <img className="card-img" src="/image/persona.jpg" />
             </div>
               <div className="">
                 <h1 className="card-h1">{this.state.objet.title}</h1>
             </div>

              <h3 className="card-h3">acteur</h3>

             <div className='trait'></div>
             <p className="paraph">{label(this.state.objet.description)}</p>


             </div>


            <div className="footer-profile">
            <div className="arrow" onClick={this.getlessCard.bind(this)}></div>
            <div className="add-span"><h1></h1></div>
            <div className="arrow-2" onClick={this.getCard.bind(this)}></div>
             </div>
                 </div>

               ) : (


          <div className="card-contains">{this.state.stopcard.map( (article)=> {
                            return (
                              <div className="Card-container">

                              <div className="card" key={article._id}>

                      <div className="card-circle">
                            <img className="card-img" src="/image/persona.jpg" />
                      </div>
                        <div className="">
                          <h1 className="card-h1">{article.title}</h1>
                      </div>

                       <h3 className="card-h3">acteur</h3>

                      <div className='trait'></div>
                      <p className="paraph">{label(article.description)}</p>


                      </div>
                </div>

                    )
               } )}</div>

       )}
       </Media>




        );
      }
    }
