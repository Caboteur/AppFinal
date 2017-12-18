import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

import styles from '../style/FormReact.css'

const FormReact = () => (
  <div className="form-group">
  <Form>
    <Form.Group widths='equal'>
      <Form.Field id='form-input-control-first-name' color="green" control={Input} label='First name' placeholder='First name' />
      <Form.Field id='form-input-control-last-name' color="green" control={Input} label='Last name' placeholder='Last name' />
    </Form.Group>
    <Form.Field id='form-textarea-control-opinion' color="green" control={TextArea} label='Opinion' placeholder='Opinion' />
    <Form.Field id='form-button-control-public' color="blue" control={Button} content='Confirm' label='Label with htmlFor' />
  </Form>
  </div>
)

export default FormReact
