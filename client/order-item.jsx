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
