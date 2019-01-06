import React, { Component } from "react"
import Button from "../../../components/UI/Button/Button"
import axios from "../../../axios-orders"
import Spinner from "../../../components/UI/Spinner/Spinner"
import "./ContactData.css"
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  }
  orderHandler = event => {
    //to prevent sending request and reloading the page
    event.preventDefault()
    //sending our purchase to firebase
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Braden Shipley",
        address: {
          street: "test street",
          zipcode: "1234",
          country: "USA"
        },
        email: "test@email.com"
      },
      deliveryMethod: "fastest"
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
  render() {
    let form = (
      <form>
        <input
          className='Input'
          type='text'
          name='name'
          placeholder='Your name'
        />
        <input
          className='Input'
          type='email'
          name='email'
          placeholder='Your email'
        />
        <input
          className='Input'
          type='text'
          name='street'
          placeholder='Street'
        />
        <input
          className='Input'
          type='text'
          name='postalCode'
          placeholder='Postal code'
        />
        <Button btnType='Success' clicked={this.orderHandler}>
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
