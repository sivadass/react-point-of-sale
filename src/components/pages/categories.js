import React from "react";
import Service from "../../utils/service";

class Categories extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      categories: []
    }
  }

  componentDidMount(){
    this.getCategories();
  }

  nextPage = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1
    }, () => {
      this.getCategories();
    })
  }

  getCategories  = () => {
    this.setState({loading: true});
    Service.get(`https://pos.sivadass.in/wp-json/wc/v2/products/categories`, (status, data, headers) => {
      this.setState({loading: false});
      console.log(headers);
      if(status === 200){
        this.setState({
          categories: data,
          totalProducts: headers["x-wp-total"],
          totalPages: headers["x-wp-totalpages"]
        })
      }
    })
  }

  render(){
    const {loading, categories} = this.state;
    if(loading){
      return(
        <div className="app-wrapper">
          <p>Loading...</p>
        </div>
      )
    }

    let renderCategories = categories.map( (item) => {
      return(
        <div className="category-item" key={item.id}>
          {(typeof item.image !== "null") && <img src={item.image.src} />}
          <p>{item.name}</p>
        </div>
      )
    })
    return (
      <div className="app-wrapper">
        <div className="products-container">
          {this.state.categories.length > 0 && renderCategories}
        </div>
        <div className="pagination">
          Showing 10 products out of {this.state.totalProducts} <a href="#" onClick={this.nextPage}>More Products</a>
        </div>
      </div>
    )
  }
};

export default Categories;
