import React, {Component} from 'react';
import Media from 'react-media';


import Userstore from '../store/store.js';
import Menu from '../components/Menu.js';
import Sidebar from '../components/Sidebar.js';


import {ReactiveVar} from 'meteor/reactive-var';
import {withTracker} from 'meteor/react-meteor-data';
import {Button, Grid, Card, Image, Icon} from 'semantic-ui-react';

import styles from '../style/Article.css'

 class Actualites extends Component {

   constructor(){
     super()
     this.state= {
       FolowArticle:[],
       FolowArticleLarge:[],
       articles: [],
       FirstArticle: [],
       StockArticle:""
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
         console.log(res);
         this.ReturnArticle();
         console.log(this.state.ViewArticle)
       }
     });

   }



   ReturnArticle () {

     const FolowArticle = this.state.articles.slice(1, 2);
     this.setState({FolowArticle: FolowArticle});
     const FirstArticle = this.state.articles.slice(0, 3);
     this.setState({FirstArticle:FirstArticle });
     console.log(FirstArticle)
     const FolowArticleLarge = this.state.articles.slice(2,5);
     this.setState({FolowArticleLarge:FolowArticleLarge });
   }



   render(){


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
       var cont = props.substring(0,140);
       return (cont)}




     return (

         <div className="article-container">
         <h1  >News</h1>
          <Grid >
           <Grid.Row>
           <Grid.Column mobile={16} tablet={12} computer={12}>





              {this.state.FirstArticle.map( (article)=> {

                const handleClick = ()=> {
                  this.props.mainArticle.set(article)
                   FlowRouter.go('/MainArticle')
                  console.log(this.props.mainArticle)
                }

                 return (

                   <div  key={article._id} className="item" onClick={handleClick}>
                      <div className="div-img">
                       <img className="article-img" src={article.image} />
                       </div>
                       <div className="article-title"><p >{article.title}<p className="article-date">{article.date}</p></p></div>

                       <p className="article-description">{label (article.description)}...</p>

                       <div className="border"></div>
                      </div>

            )

      }
      )
    }
                  <Icon size="huge" name='add circle' color="blue" className="plus-btn" />
                   </Grid.Column>
                 <Grid.Column mobile={16} tablet={4} computer={4}>
                     <Sidebar />
                           </Grid.Column>
                                 </Grid.Row>
                             </Grid>



    </div>


     )
   }
 }

 const ActualitesReact = withTracker( ()=>{

  return {
    mainArticle: userStore.mainArticle,
  }

})(Actualites);

  export default ActualitesReact
