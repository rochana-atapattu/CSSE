import React, {Component} from 'react';
import {fetchPosts} from "../actions";
import {connect} from "react-redux";
import Buses from '../containers/buses/buses'
import Routes from '../containers/routes/route'
import RoutesM from '../containers/routes/routes'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../components/header";
import Login from "../containers/login";

class App extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>

                <BrowserRouter>
                    <div>
                        <div><Header/></div>
                        <Switch>
                            <Route path="/buses" component={Buses}/>
                            <Route path="/route" component={RoutesM}/>
                            <Route path="/login" component={Login}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {buses: state.buses};
}

export default connect(mapStateToProps, {fetchPosts})(App);