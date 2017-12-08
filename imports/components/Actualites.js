import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import styles from '../style/carte.css';

import {Button, Grid, Card, Image, Icon} from 'semantic-ui-react';

import Carte from '../components/Carte.js';

export default class HomeReact extends Component {

   constructor(){
     super()
     this.state= {
       ViewArticle:[],
       articles: [],
       article: {}
     };
   }

   componentWillMount(){
     this.getArticles();


     console.log(this.state.articles)
   }


   handleRemove(e){
     console.log(e.target.name)
     Meteor.call('removeArticle', e.target.name, (err, res)=>{
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
     Meteor.call('listeArticles', (err,res) =>{
       if(err){
         Bert.alert({
           title: "Erreur",
           message: err.message,
           type: 'danger'
         });
       } else {
         this.setState({articles: res.reverse()})
       }
     });

   }


   ReturnArticle () {

     for(const i = 0 ; i<4; i++) {
       const array = this.state.articles;
      console.log(array);

     }

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


         const settings = {
           dots: true,
           infinite: true,
           speed: 500,
           slidesToShow: 1,
           slidesToScroll: 1
         };

   const FolowButton = () => {

         return(<Button
         size="mini"
         color='yellow'
         content="Lire plus"
           />)


         }

   const label = (props) => {

      var cont = props.substring(0,250);

        return (cont)}



     return (


        <div className="Card">

        <Card.Group>
         {this.state.articles.map( (article)=> {



           return (


                 <Card key={article._id} target="blanck">
                 <Image src='/image/Back.svg' style={{minHeight: '250px'}}/>
                 <Card.Content>
                   <Card.Header>
                   </Card.Header>
                   <Card.Meta>
                     <span className='date'>
                       {article.title}
                     </span>
                    </Card.Meta>
                    <Card.Description>
                    {label (article.description)}
                     </Card.Description>
                     {FolowButton()}
                    </Card.Content>
                    <Card.Content extra>
                    {RemoveButton(article._id)}
                    </Card.Content>
                   </Card>

            )
         } )}
         </Card.Group>



        <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
        <Icon name='right arrow' />
        </Button.Content>
        </Button>


    </div>

     );
   }
 }
