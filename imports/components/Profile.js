import React, { Component } from 'react';
import { Button, Grid, Card, Image, Icon} from 'semantic-ui-react'


export default class Profile extends Component {

  constructor(){
      super()
      this.state= {
        articles: [],
        acteur: [],
        technicien: [],
        realisateur: [],
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

        }
      });
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
                    <Image src='/image/template.jpg' style={{minHeight: '250px'}}/>
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
