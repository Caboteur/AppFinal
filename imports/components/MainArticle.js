import React, {Component} from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import {ReactiveVar} from 'meteor/reactive-var';
import {withTracker} from 'meteor/react-meteor-data';




 class MainArticleReact extends Component {


  render() {
    const article = () => {if(this.props.mainArticle.get()== undefined){
      console.log('nul')
    }else{
      const def =this.props.mainArticle.get();
       return (
         <div  key={def._id} className="item" >
             <div className="div-img">
              <img className="article-img" src={def.image} />
              </div>
              <div className="article-title"><p >{def.title}</p></div>
              <div className="border-1"></div>
              <p className="article-description">{def.description}</p>
               <p className="article-date">{def.date}</p>
              <div className="border"></div>
             </div>

       )
    }
    }
    return (



      <div >

{article()}

      </div>
    );
  }
}

const MainArticle = withTracker( ()=>{

 return {
   mainArticle: userStore.mainArticle,
 }

})(MainArticleReact);

 export default MainArticle
