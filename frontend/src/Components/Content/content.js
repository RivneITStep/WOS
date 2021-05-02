import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import "./content.css"
import { getAllProducts } from "../../Services/api-service"
import { getAllElems } from "../../Actions/wosActions"
import Elems from "../Elems/Elems"

class Content extends React.Component {

    componentDidMount() {
        const { getAllElems } = this.props
        getAllProducts().then(data => {
            getAllElems(data.products)
        })
    }

    render() {
        const { WOSList } = this.props
        console.log(WOSList)

        const renderList = () => {
            return WOSList.map(products => {
                return (
                    <Elems name={products.name} descriptions={products.descriptions} category={products.category} price={products.price} images={products.images} />
                )
            })
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="col-lg-12 col-md-6 mb-4 heights">
                            <div className=" h-100 main">
                                {renderList()}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = ({ WOSReducer }) => {
    console.log("mapstatetoprops", WOSReducer)
    const { WOSList } = WOSReducer
    return { WOSList }
}
const mapDispatchToProps = {
    getAllElems
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);