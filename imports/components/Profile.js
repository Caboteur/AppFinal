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
          this.ReturnArticle();
        }
      });
    }


    getCard (){

      const i = this.state.num;


       this.state.articles[i];

       this.setState({objet:this.state.articles[i]});





       if (i < this.state.articles.length-1) {
         const count = i + 1 ;
         console.log(count);

         this.setState({num:count});

      }else {
        const count = 0 ;
        console.log(count);

        this.setState({num:count});

      }
    }



    getlessCard (){

      const i = this.state.num;



             this.state.articles[i];

             this.setState({objet:this.state.articles[i]});



             if(i > 0 ){
               const count = i - 1 ;
               console.log(count);

               this.setState({num:count});
             }else {
               const count = this.state.articles.length-1 ;
               console.log(count);

               this.setState({num:count});


             }

    }

    ReturnArticle () {
      const StopCard = this.state.articles.slice(0, 4);
      console.log(StopCard)
      this.setState({stopcard: StopCard});
      console.log(this.state.stopcard);
      console.log(this.state.articles);
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


          <Media query="(max-width: 1250px)">
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
                            <img className="card-img" src={article.image} />
                      </div>
                        <div className="">
                          <h1 className="card-h1">{article.title}</h1>
                      </div>

                       <h3 className="card-h3">acteur</h3>

                      <div className='trait'></div>



                      </div>
                </div>

                    )
               } )}</div>

       )}
       </Media>




        );
      }
    }
