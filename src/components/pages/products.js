import React from "react";
import Service from "../../utils/service";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      products: [],
      pageNumber: 1,
      totalPages: 0,
      totalProducts: 0
    };
  }

  componentDidMount() {
    this.getProucts();
  }

  nextPage = () => {
    this.setState(
      {
        pageNumber: this.state.pageNumber + 1
      },
      () => {
        this.getProucts();
      }
    );
  };

  getProucts = () => {
    this.setState({ loading: true });
    Service.get(
      `https://pos.sivadass.in/wp-json/wc/v2/products?page=${
        this.state.pageNumber
      }`,
      (status, data, headers) => {
        this.setState({ loading: false });
        console.log(headers);
        if (status === 200) {
          this.setState({
            products: data,
            totalProducts: headers["x-wp-total"],
            totalPages: headers["x-wp-totalpages"]
          });
        }
      }
    );
  };

  render() {
    const { loading, products } = this.state;
    if (loading) {
      return (
        <div className="app-wrapper">
          <p>Loading products ...</p>
        </div>
      );
    }

    let renderProducts = products.map(item => {
      return (
        <div className="product-item" key={item.id}>
          {item.images.length > 0 && <img src={item.images[0].src} />}
          <p>{item.name}</p>
          <h3>${item.price}</h3>
        </div>
      );
    });
    return (
      <div className="app-wrapper">
        <div className="products-container">
          {this.state.products.length > 0 && renderProducts}
        </div>
        <div className="pagination">
          Showing {this.state.products.length} products out of{" "}
          {this.state.totalProducts}
          <a
            href="#"
            onClick={this.nextPage}
            disabled={this.state.totalPages === this.state.pageNumber}
          >
            More Products
          </a>
        </div>
      </div>
    );
  }
}

export default Products;
