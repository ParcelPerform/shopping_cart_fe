class OrderItem extends React.Component {
  render() {
    return (
      <div className="form-group row">
        <div className="col-md-7">
          <input 
            onChange={this.onNameChange.bind(this)} 
            className="form-control" 
            placeholder="Enter item name"
            value={this.props.itemModel.name} />
        </div>
        <div className="col-md-5">
          <input 
            onChange={this.onQuantityChange.bind(this)} 
            type="number" 
            className="form-control"
            value={this.props.itemModel.quantity} />
        </div>
      </div>
    )
  }

  onNameChange(event) {
    this.forceUpdate()
    this.props.itemModel.name = event.target.value
  }

  onQuantityChange(event) {
    this.forceUpdate()
    this.props.itemModel.quantity = event.target.value
  }
}

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
    return (
      <div className="container">
        <h3 className="mt-3 text-center">ORDER FORM</h3>
        <div className="mt-3 row">
          <div className="col-md-7 font-weight-bold">Item 1</div>
          <div className="col-md-5 font-weight-bold">Quantity</div>
        </div>
        
        <div id="orderForm" className="mt-3">
          <fieldset disabled={this.state.submitting}>
            {
              _.map(this.items, (item, index) => <OrderItem key={index} itemModel={ item } />)
            }
            <button onClick={ this.onOrder.bind(this) } className="btn btn-primary btn-lg btn-block">
              { this.state.submitting ? 'Loading...' : 'Order' }
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

    console.log(this.items)
  }
}

ReactDOM.render(
  <OrderForm />,
  document.getElementById('root')
);



