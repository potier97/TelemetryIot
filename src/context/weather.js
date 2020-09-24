import React, { Component } from 'react';
import { watchUserChnages, watchWeather } from '../firebase';
import maxBy from 'lodash/maxBy';
import round from 'lodash/round';
import pick from 'lodash/pick';
import forEach from 'lodash/forEach';


export const WeatherContext = React.createContext();

export class WeatherContexProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            chartData: {},
            lastWeather: {},
            //isSetup: false,
            dataReady: false,
        }
    };

    async componentDidMount() {
        this.userWatcherUnsub = await watchUserChnages((user) => {
            if (user && !this.expenseWatcherUnsub) { 
                this.expenseWatcherUnsub =  watchWeather( async (weather) => {
                    let lastWeather = await maxBy(weather, "dateTimeCaptureTelemetry")
                    //let organizate = await pick(weather, 'dateTimeCaptureTelemetry')
                    //let { x = dateTimeCaptureTelemetry } = weather
                    //console.log(x)
                    // let organizate = await forEach(weather, (value, key) => {
                    //     return (
                    //         { key.dateTimeCaptureTelemetry,
                    //             key.nodeId0
                    //         }
                    //     )
                    // })



                    await this.setState(() => ({
                        weather,
                        lastWeather: {
                            nodeId0: {
                                airHum: round(lastWeather.nodeId0.airHum, 2),
                                airHumSensation: round(lastWeather.nodeId0.airHumSensation, 2),
                                airTemp: round(lastWeather.nodeId0.airTemp, 2),
                                airTempSensation: round(lastWeather.nodeId0.airTempSensation, 2),
                                earthHum: round(lastWeather.nodeId0.earthHum, 2),
                                earthTemp: round(lastWeather.nodeId0.earthTemp, 2),
                                light: round(lastWeather.nodeId0.light, 2),
                            },
                            nodeId1: {
                                airHum: round(lastWeather.nodeId1.airHum, 2),
                                airHumSensation: round(lastWeather.nodeId1.airHumSensation, 2),
                                airTemp: round(lastWeather.nodeId1.airTemp, 2),
                                airTempSensation: round(lastWeather.nodeId1.airTempSensation, 2),
                                earthHum: round(lastWeather.nodeId1.earthHum, 2),
                                earthTemp: round(lastWeather.nodeId1.earthTemp, 2),
                                light: round(lastWeather.nodeId1.light, 2),
                            },
                            nodeId2: {
                                airHum: round(lastWeather.nodeId2.airHum, 2),
                                airHumSensation: round(lastWeather.nodeId2.airHumSensation, 2),
                                airTemp: round(lastWeather.nodeId2.airTemp, 2),
                                airTempSensation: round(lastWeather.nodeId2.airTempSensation, 2),
                                earthHum: round(lastWeather.nodeId2.earthHum, 2),
                                earthTemp: round(lastWeather.nodeId2.earthTemp, 2),
                                light: round(lastWeather.nodeId2.light, 2),
                            },
                            nodeId3: {
                                airHum: round(lastWeather.nodeId3.airHum, 2),
                                airHumSensation: round(lastWeather.nodeId3.airHumSensation, 2),
                                airTemp: round(lastWeather.nodeId3.airTemp, 2),
                                airTempSensation: round(lastWeather.nodeId3.airTempSensation, 2),
                                earthHum: round(lastWeather.nodeId3.earthHum, 2),
                                earthTemp: round(lastWeather.nodeId3.earthTemp, 2),
                                light: round(lastWeather.nodeId3.light, 2),
                            },
                            nodeId4: {
                                airHum: round(lastWeather.nodeId4.airHum, 2),
                                airHumSensation: round(lastWeather.nodeId4.airHumSensation, 2),
                                airTemp: round(lastWeather.nodeId4.airTemp, 2),
                                airTempSensation: round(lastWeather.nodeId4.airTempSensation, 2),
                                earthHum: round(lastWeather.nodeId4.earthHum, 2),
                                earthTemp: round(lastWeather.nodeId4.earthTemp, 2),
                                light: round(lastWeather.nodeId4.light, 2),
                            },
                            nodeId5: {
                                airHum: round(lastWeather.nodeId5.airHum, 2),
                                airHumSensation: round(lastWeather.nodeId5.airHumSensation, 2),
                                airTemp: round(lastWeather.nodeId5.airTemp, 2),
                                airTempSensation: round(lastWeather.nodeId5.airTempSensation, 2),
                                earthHum: round(lastWeather.nodeId5.earthHum, 2),
                                earthTemp: round(lastWeather.nodeId5.earthTemp, 2),
                                light: round(lastWeather.nodeId5.light, 2),
                            },
                            id: lastWeather.id,
                            currentDate: lastWeather.currentDate,
                            dateTimeCaptureTelemetry: lastWeather.dateTimeCaptureTelemetry,
                            updateImages: lastWeather.updateImages

                        },
                        dataReady: true
                    }))
                })
            }

        })
    };

    componentWillUnmount() {
        if (this.expenseWatcherUnsub) {
            this.expenseWatcherUnsub();
        }
    }



    render() {
        const { children } = this.props;
        return (
            <WeatherContext.Provider value={this.state}>
                {children}
            </WeatherContext.Provider>
        )
    }

};

export const WeatherContextConsumer = WeatherContext.Consumer;

