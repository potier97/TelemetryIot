import React, { Component } from 'react';
import { watchUserChnages } from '../firebase';

export const AuthContext = React.createContext();

export class AuthContexProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authReady: false,
            isLoggedIn: false,
            user: null,
        }
    };

    componentDidMount() {
        watchUserChnages((user) => {
            if (user) {
                this.setState({
                    authReady: true,
                    isLoggedIn: true,
                    user,
                })
            } else {
                this.setState({
                    authReady: true,
                    isLoggedIn: false,
                    user: null,
                })
            }
        })
    };

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }

};

export const AuthContextConsumer = AuthContext.Consumer;

