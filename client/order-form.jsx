class OrderForm extends React.Component {
  constructor() {
    super()

    this.items = [
      { name: 'Item name 1', quantity: 1 },
      { name: 'Item name 2', quantity: 2 }
    ]

    this.state = {
      submitting: false
    }
  }

  render() {
    return this.state.submitted ? (
      <div className="container">
        <h3 className="mt-3 text-center">YOUR ORDER SUBMITTED !</h3>
        <div className="mt-3 text-center">We are processing your order.</div>
      </div>
    ) : (
      <div className="container">
        <h3 className="mt-3 text-center">ORDER FORM</h3>
        <div className="mt-3 row">
          <div className="col-md-7 font-weight-bold">Item Name</div>
          <div className="col-md-5 font-weight-bold">Quantity</div>
        </div>
        
        <div id="orderForm" className="mt-3">
          <fieldset disabled={this.state.submitting}>
            {
              this.items.map(
                (item, index) => <OrderItem key={index} itemModel={ item } />
              )
            }
            <button onClick={ this.onOrder.bind(this) } className="btn btn-primary btn-lg btn-block">
              { this.state.submitting ? 'Submitting...' : 'Order' }
            </button>
          </fieldset>
        </div>
      </div>
    )
  }

  onOrder() {
    this.setState({
      submitting: true
    })

    axios
      .post('http://localhost:8080/create-order/', {
        items: this.items
      })
      .then(resp => {
        console.log(resp.data)

        this.setState({
          submitted: true
        })
      })
  }
}
