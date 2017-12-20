import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';

import Media from 'react-media';

import Userstore from '../store/store.js';
import Menu from '../components/Menu.js';

import {Button, Grid, Card, Image, Icon} from 'semantic-ui-react';

import styles from '../style/Article.css'

class Actualites extends Component {

   constructor(){
     super()
     this.state= {
       FolowArticle:[],
       FolowArticleLarge:[],
       articles: [],
       FirstArticle: []
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
     const FirstArticle = this.state.articles.slice(0, 1);
     this.setState({FirstArticle:FirstArticle });
     console.log(FirstArticle)
     const FolowArticleLarge = this.state.articles.slice(2,6);
     this.setState({FolowArticleLarge:FolowArticleLarge });
   }



   render(){

     const RemoveButton = (id) => {
           if (this.props.loggedin) {
         return (<Button
           size="mini"
           icon="delete"
           color="red"
           name={id}
           content="Supprimer"
           onClick={this.handleRemove.bind(this)}/>)
         }

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

      var cont = props.substring(0,140);

        return (cont)}


   const ArticleSuite = this.state.FolowArticleLarge.map( (article)=> {
        return (
       <div  className="item-second">
        <div key={article._id} className="article-meta-second">
       <p className="article-title">{article.title}</p>
         <div><img className="article-img-2" src="/image/Back.svg" /></div>
         <Media query="(max-width: 599px)">
                    {matches => matches ? (
                  <p> ok</p>
                    ) : (
                  <p className="article-description">{label (article.description)}...</p>
               )}
            </Media>
          </div>
         {RemoveButton(article._id)}
          </div>

)
} )

     return (
       <div className="Article-container">



              {this.state.FirstArticle.map( (article)=> {

                 return (

                   <div  className="item">

                    <div key={article._id} className="article-meta">
                    <p className="article-title">{article.title}</p>
                     <div><img className="article-img" src="/image/Back.svg" /></div>
                     <p className="article-description">{label (article.description)}...</p>

                      </div>
                      {RemoveButton(article._id)}
                      </div>

            )

      }
      )
    }



              {this.state.FolowArticle.map( (article)=> {
                   return (
                  <div  className="item-second">
                   <div key={article._id} className="article-meta-second">
                  <p className="article-title">{article.title}</p>
                    <div><img className="article-img-2" src="/image/Back.svg" /></div>
                    <Media query="(max-width: 599px)">
                               {matches => matches ? (
                             <p> ok</p>
                               ) : (
                             <p className="article-description">{label (article.description)}...</p>
                          )}
                       </Media>
                     </div>
                    {RemoveButton(article._id)}
                     </div>

           )
      } )
    }

    {this.state.FolowArticleLarge.map( (article)=> {
          return (
        <div  className="item-after">
        <div key={article._id} className="article-meta-after">
         <p className="article-title">{article.title}</p>
         <div><img className="article-img-2" src="/image/Back.svg" /></div>
        <p className="article-description">{label (article.description)}...</p>
       {RemoveButton(article._id)}

       </div>
    </div>
)
} )
}




            </div>

     )
   }
 }


 const ActualitesReact = withTracker( ()=>{
  console.log(Userstore.loggedin.get())
  return {
    loggedin: Userstore.loggedin.get(),
  }

})(Actualites);

  export default ActualitesReact
