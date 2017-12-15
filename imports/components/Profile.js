import React, { Component } from 'react';
import { Button, Grid, Card, Image, Icon} from 'semantic-ui-react'


export default class Profile extends Component {

  constructor(){
      super()
      this.state= {
        articles: [],
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


       console.log(this.state.num);
       this.state.articles[i];
       console.log(this.state.articles[i]);
       this.setState({objet:this.state.articles[i]});



       if(i === this.state.articles.length){
         const count = this.state.articles.length - 2 ;
          this.setState({num:count});
          console.log(count)
       }else if(i<this.state.articles.length){
         const count = i + 1 ;
         this.setState({num:count});
         console.log(count)
         console.log(this.state.articles.length)

       }
       }

    getlessCard (){

      const i = this.state.num;


       console.log(this.state.num);
       this.state.articles[i];
       console.log(this.state.articles[i]);
       this.setState({objet:this.state.articles[i]});
       const count = i - 1 ;
       this.setState({num:count});
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
         if(this.state.num==0){

          console.log("attends")

        } else {

          var cont = props.substring(0,250);

            return (cont)}


        }








        return (


           <div className="Card-container">

           <Button onClick={this.getlessCard.bind(this)}/>

           <Card id="card" key={this.state.objet._id}>
      <Image src='/assets/images/avatar/large/matthew.png' />
      <Card.Content>
        <Card.Header>
          {this.state.objet.title}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            Joined in 2015
          </span>
        </Card.Meta>
        <Card.Description>
          {label(this.state.objet.description)}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
        {FolowButton ()}
        {RemoveButton ()}
      </Card.Content>
    </Card>


        <Button onClick={this.getCard.bind(this)}/>


       </div>

        );
      }
    }
