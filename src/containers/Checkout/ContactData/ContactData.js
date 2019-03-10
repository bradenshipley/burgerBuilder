import React, { Component } from "react"
import Button from "../../../components/UI/Button/Button"
import axios from "../../../axios-orders"
import Spinner from "../../../components/UI/Spinner/Spinner"
import Input from '../../../components/UI/Input/Input'
import "./ContactData.css"
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      zipcode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ]
        },
        value: ''
      },
    },
    loading: false
  }
  orderHandler = event => {
    //to prevent sending request and reloading the page
    event.preventDefault()
    //sending our purchase to firebase
    this.setState({ loading: true })
    const formData = {}
    for (let formElementId in this.state.orderForm) {
      formData[formElementId] = this.state.orderForm[formElementId].value
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    }
    //add nodeNameOfYourChoice.json when using firebase
    axios
      .post("/orders.json", order)
      .then(res => {
        this.setState({ loading: false })
        this.props.history.push("/")
      })
      .catch(err => this.setState({ loading: false }))
  }
  inputChangedHandler = (e, inputIndentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement = {
      ...updatedOrderForm[inputIndentifier]
    }
    updatedFormElement.value = event.target.value
    updatedOrderForm[inputIndentifier] = updatedFormElement
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    this.setState({ orderForm: updatedOrderForm })
  }
  checkValidity = (value, rules) => {
    if (rules.required) {
      return (value.trim() !== '')
    }
  }
  render() {
    const formElementsArray = []
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(e) => this.inputChangedHandler(e, formElement.id)}
          />
        ))}
        <Button btnType='Success' >
          ORDER
        </Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className='ContactData'>
        <h4>Enter your Contact data</h4>
        {form}{" "}
      </div>
    )
  }
}
export default ContactData
