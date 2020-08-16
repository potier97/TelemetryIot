import React, { Component } from 'react';
import { watchUserChnages, watchWeather } from '../firebase';

export const WeatherContext = React.createContext();

export class WeatherContexProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather:[],
            isSetup: false,
        }
    };

    componentDidMount() {

        watchUserChnages((user) => {
            if (user && !this.isSetup) {
                this.setState({
                    isSetup: true
                })
                watchWeather((weather) => {
                    this.setState({ weather })
                })
            }

        })
    };

    render() {
        return (
            <WeatherContext.Provider value={this.state}>
                {this.props.children}
            </WeatherContext.Provider>
        )
    }

};

export const WeatherContextConsumer = WeatherContext.Consumer;

