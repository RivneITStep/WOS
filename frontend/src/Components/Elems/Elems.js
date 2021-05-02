import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import "../Content/content.css"
import { getAllProducts } from "../../Services/api-service"
import { getAllElems } from "../../Actions/wosActions"

class Elems extends React.Component {

    render() {
        const { name, price, descriptions, images, category } = this.props;
        return (
            <div className="card h-100">
                <div className="card-body">
                    <div style={{ width: "250px", height: "190px" }}>
                        <img className="card-img" src={images[0].url}></img>
                    </div>

                    <h4 className="card-title">{name}</h4>
                    <h5>{price}</h5>
                    <p className="card-text">{descriptions}</p>
                    <p className="card-category">{category}</p>
                    <div className="card-footer"><small className="text-muted">★ ★ ★ ★ ☆</small></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ WOSReducer }) => {
    const { WOSList } = WOSReducer
    return { WOSList }
}
export default connect(mapStateToProps, null)(Elems);