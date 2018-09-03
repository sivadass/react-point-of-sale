import React from "react";
import Service from "../../utils/service";

class Products extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      products: []
    }
  }

  componentDidMount(){
    this.getProucts();
  }

  getProucts = () => {
    this.setState({loading: true});
    Service.get('https://pos.sivadass.in/wp-json/wc/v2/products', (status, data) => {
      this.setState({loading: false});
      if(status === 200){
        this.setState({
          products: data
        })
      }
    })
  }

  render(){
    const {loading, products} = this.state;
    if(loading){
      return(
        <div className="app-wrapper">
          <p>Loading...</p>
        </div>
      )
    }

    let renderProducts = products.map( (item) => {
      return(
        <div className="product-item" key={item.id}>
          {item.images.length > 0 && <img src={item.images[0].src} />}
          <p>{item.name}</p>
          <h3>${item.price}</h3>
        </div>
      )
    })
    return (
      <div className="app-wrapper">
      <div className="products-container">
        {this.state.products.length > 0 && renderProducts}
      </div>
      </div>
    )
  }
};

export default Products;
