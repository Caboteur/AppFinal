import React, {Component} from 'react';
import { Grid, Image  } from 'semantic-ui-react'

import styles from '../style/Gallery.css';

export default class Gallery extends Component {
  constructor(){
     super()
     this.state={
      pics:[{ _id: 'caypg3w7sGBH5ZyYm', pics: '/image/paysage.jpg' }]

     };
   }


   componentDidMount(){
     Meteor.call('listePics', (err,res) =>{
       if(err){
         Bert.alert({
           title: "Erreur",
           message: err.message,
           type: 'danger'
         });
       } else {
         this.setState({pics: res.reverse().slice(0, 5)})
         console.log(res)
         console.log(this.state.pics)
       }
     });
  console.log(this.state.pics)
   }


  render() {

  console.log(this.state.pics);

    return (
      <div className='main'>
        <section className="gallery">
              <ol>

                                       {this.state.pics.map( (element)=> {

                                        const pp = '/image/photo-test.jpg';

                                          return (

                                            <li>
                                               <a />
                                                <div className="info">
                                                  <h3>"gsjhdfb"</h3>
                                                  <p>by Brandon James Scott</p>
                                                </div>


                                         </li>
                                     )

                               }
                               )
                             }
                             </ol>
                           </section>
                           </div>


    );
  }
}
