import React from 'react'
import { Card, Icon } from 'semantic-ui-react'



const Carte = () => (
  <Card
    image='/assets/images/avatar/large/elliot.jpg'
    header={this.props.header}
    meta={this.props.meta}
    description={this.props.descritpion}
    extra={this.props.extra}
  />
)

export default Carte
