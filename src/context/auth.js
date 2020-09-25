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

    async componentDidMount() {
        try {
            this.userWatcherUnsub = await watchUserChnages((user) => {
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
        } catch (error) {
            console.log("Error: ", error)
        }
    };

    componentWillUnmount() {
        if (this.userWatcherUnsub) {
            this.userWatcherUnsub();
        }
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }

};

export const AuthContextConsumer = AuthContext.Consumer;

