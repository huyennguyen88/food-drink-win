import React, { Component } from 'react'
import LogSign from './LogSign'
import {connect} from 'react-redux'
import * as actions from './../../../actions/index'
import axios from 'axios';
import Loader from './../../../loader.gif';
class SubMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            token:'',
            search:'',
            query: '',
            loading: false,
            message: '',   
            results: []         

        }
    }
    componentWillMount(){
        let token = JSON.parse(localStorage.getItem('token'));
        this.setState({
            token: token
        })
    }
    onChange = (e)=>{  
        let target = e.target;
        let name = target.name;
        let value = target.value
        this.setState({
            [name]: value
        })
    }
    onSubmit = ()=>{
       this.props.search(this.state.search)
    }
    fetchSearchResults = (query) => {
        const searchUrl = `http://localhost:3000/products/search/${query}`;
        if (this.cancel) {
            // Cancel the previous request before making a new request
            this.cancel.cancel();
        }
        // Create a new CancelToken
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
                    <div className ="live">
                        <ul className ="live">
                            {results.map((result) => {
                                return (
                                    // <Link to={`/product/${result.id}`}>
                                    <li key={result.id} className ="live">
                                        {/* <img src={result.image} className ="live" /> */}
                                        <h3 className ="live">{result.name} </h3>
                                        {/* <p className ="live">$ {result.price/20000}</p> */}
                                    </li>
                                    
                                   // </Link>
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
            <div className="SubMenu d-flex justify-content-between my-3">
                <div>
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
                            <input name="search" onChange={this.handleOnInputChange} value={query} onKeyUp={this.onChange} type="text" className="form-control border-success" placeholder="I want to eat..." aria-label="Text input with dropdown button" />
                        </div>
                        <button onClick={this.onSubmit} className="btn btn-success my-2 my-sm-0" type="button">Search</button>
                    </form>
                </div>
                <LogSign/>
                {/*Error Message*/}
                {message && <p className="message">{message}</p>}
                {/*Loader*/}
                {/* <img src={Loader} className={`search-loading ${loading ? 'show' : 'hide'}`} alt="loader" /> */}
                {/*Result*/}
                {this.renderSearchResults()}
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        search: (keyword)=>{
            dispatch(actions.Search(keyword))
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(SubMenu)