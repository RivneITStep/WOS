import React from 'react'
import { connect } from "react-redux";

// Actions
import { getProductList } from "../../Actions/ProductAtions";
// Import api-service
import { getAllProducts } from "../../Services/api-service";
class Main extends React.Component {
    componentDidMount() {
        const { getProductList } = this.props;
        getAllProducts().then(data => {
            getProductList(data.products);
        })
    }

    render() {
        const { ProductList } = this.props;
        console.log("productList => ", ProductList)
        return (
            <main>

            </main>
        )
    }
}

const mapStateToProps = ({ productReducer }) => {
    console.log("productReducer ", productReducer);
    const { ProductList } = productReducer;
    return { ProductList };
}
const mapDispatchToProps = {
    getProductList
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
