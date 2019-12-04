import React, { Component } from 'react'
import "./LiveSearch.css"
import { Link } from "react-router-dom";
import axios from 'axios';
import Rating from 'react-rating'
// import Loader from './../../../loader.gif';
class LiveSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            loading: false,
            message: '',
            results: []

        }
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value
        this.setState({
            [name]: value
        })
    }
    fetchSearchResults = (query) => {
        const searchUrl = `http://localhost:3000/products/search/${query}`;
        if (this.cancel) {
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();
        axios
            .get(searchUrl, {
                cancelToken: this.cancel.token,
            })
            .then((res) => {
                const resultNotFoundMsg = !res.data.length
                    ? 'There are no more search results. Please try a new search.'
                    : '';
                this.setState({
                    results: res.data,
                    message: resultNotFoundMsg,
                    loading: false,
                });
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch results.Please check network',
                    });
                }
            });
    };
    handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            this.setState({ query, results: {}, message: '' });
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(query);
            });
        }
    };
    renderSearchResults = () => {
        const { results } = this.state;
        if (results) {
            if (Object.keys(results).length && results.length) {
                return (
                    <div >
                        <ul className="Search list-group">
                            {results.map((result, index) => {
                                return (
                                    <Link key={index} className="list-group-item flex-column" to={"/products/"+result.id}>
                                        <div style={style} className="d-flex w-100">
                                            <img style= {{height: "60px"}} className="w-25 " src={result.image} />
                                            <div className="w-75 ml-3">
                                                <p className="text-dark h5 ">{result.name}</p>
                                                <div className="row justify-content-around">
                                                    <p className=" text-danger">{result.price}đ</p>
                                                    <Rating
                                                    className="text-warning"
                                                    emptySymbol="fa fa-star-o "
                                                    fullSymbol="fas fa-star "
                                                    initialRating = {result.rate}
                                                    readonly = {true}
                                                    quiet = {true}
                                                                                  
                                                    />
                                                </div>

                                            </div>

                                        </div>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                );
            }
        }
    };
    render() {
        const { query } = this.state;
        const { message, loading } = this.state;
        return (
            <div className="LiveSearch">
                <form className="form-inline my-2 my-lg-0">
                    <div className="input-group ">

                        <div className="input-group-prepend">
                            <select className="custom-select border-success" defaultValue={1}>

                                <option value={1}>20.000-50.000</option>
                                <option value={2}>50.000-100.000</option>
                                <option value={3}>Trên 100.000</option>
                            </select>
                            <select className="custom-select border-success" defaultValue={1}>

                                <option value={1}>Food</option>
                                <option value={2}>Drink</option>
                            </select>

                        </div>
                        <div style = {style.search}  className="input-group md-form form-sm form-2 pl-0">
                            <div >
                                <input className="form-control amber-border"  name="search" onChange={this.handleOnInputChange} value={query}  type="text" placeholder="Search" aria-label="Search" />
                                {this.renderSearchResults()}
                            </div>
                            <div className="input-group-append">
                                <span className="input-group-text amber lighten-3" id="basic-text1"><i className="fas fa-search text-grey" aria-hidden="true" /></span>
                            </div>
                            
                        </div>                        
                        {/* {message && <p className="message">{message}</p>} */}
                        {/*Loader*/}
                        {/* <img src={Loader} className={`search-loading ${loading ? 'show' : 'hide'}`} alt="loader" /> */}
                    </div>
                    
                </form>
            </div>
        )
    }
}
export default LiveSearch
const style = {
    search : {
        width : "400px"
    },
    maxWidth: "300px",
    maxHeight: "100px"
}