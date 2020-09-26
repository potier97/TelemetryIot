import React, { Component } from 'react';
import { watchUserChnages, watchWeather } from '../firebase';
import maxBy from 'lodash/maxBy';
import round from 'lodash/round';
import orderBy from 'lodash/orderBy';
import map from 'lodash/map';

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


        try {
            this.userWatcherUnsub = await watchUserChnages((user) => {
                if (user && !this.expenseWatcherUnsub) {
                    this.expenseWatcherUnsub = watchWeather(async (weather) => {

                        //Obtener erl ultimo fecha en ser subida a la nube
                        let lastWeather = await maxBy(weather, "dateTimeCaptureTelemetry")

                        //Organizar datos por fechas
                        let ordenData = await orderBy(weather, ["dateTimeCaptureTelemetry"])


                        // let organizate = await map(ordenData, (weatherData) => {
                        //     //let getData = pick(weatherData, ["dateTimeCaptureTelemetry", "nodeId0.airTemp"]) 
                        //     let dates =weatherData.dateTimeCaptureTelemetry.toDate(); //d/m/Y H:M:S
                        //     let varData = weatherData.nodeId0.airTemp
                        //     return ({
                        //         x: dates,
                        //         y: varData
                        //})})

                        //Organizar los datos de TEMPERATURA AIRE -- PROMEDIO
                        let airTempNode0 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId0.airTemp
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de HUMEDAD AIRE -- PROMEDIO
                        let airHumNode0 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId0.airHum
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de TEMPERATURA TIERRA -- PROMEDIO
                        let earthTempNode0 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId0.earthTemp
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de HUMEDAD TIERRA -- PROMEDIO
                        let earthHumNode0 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId0.earthHum
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de LUZ -- PROMEDIO
                        let lightNode0 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId0.light
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //console.log('Atras:', ordenData) 

                        //Organizar los datos de LUZ -- NODO 1
                        let lightNode1 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId1.light
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de TEMPERATURA AIRE -- NODO 1
                        let airTempNode1 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId1.airTemp
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de HUMEDAD AIRE -- NODO 1
                        let airHumNode1 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId1.airHum
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de TEMPERATURA TIERRA -- NODO 1
                        let earthTempNode1 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId1.earthTemp
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de HUMEDAD TIERRA -- NODO 1
                        let earthHumNode1 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId1.earthHum
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })

                        //Organizar los datos de LUZ -- NODO 2
                        let lightNode2 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId2.light
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de TEMPERATURA AIRE -- NODO 2
                        let airTempNode2 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId2.airTemp
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de HUMEDAD AIRE -- NODO 2
                        let airHumNode2 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId2.airHum
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de TEMPERATURA TIERRA -- NODO 2
                        let earthTempNode2 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId2.earthTemp
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de HUMEDAD TIERRA -- NODO 2
                        let earthHumNode2 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId2.earthHum
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })

                        //Organizar los datos de LUZ -- NODO 3
                        let lightNode3 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId3.light
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de TEMPERATURA AIRE -- NODO 3
                        let airTempNode3 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId3.airTemp
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de HUMEDAD AIRE -- NODO 3
                        let airHumNode3 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId3.airHum
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de TEMPERATURA TIERRA -- NODO 3
                        let earthTempNode3 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId3.earthTemp
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de HUMEDAD TIERRA -- NODO 3
                        let earthHumNode3 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId3.earthHum
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })

                        //Organizar los datos de LUZ -- NODO 4
                        let lightNode4 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId4.light
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de TEMPERATURA AIRE -- NODO 4 
                        let airTempNode4 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId4.airTemp
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de HUMEDAD AIRE -- NODO 4
                        let airHumNode4 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId4.airHum
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de TEMPERATURA TIERRA -- NODO 4
                        let earthTempNode4 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId4.earthTemp
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de HUMEDAD TIERRA -- NODO 4
                        let earthHumNode4 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId4.earthHum
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })

                        //Organizar los datos de LUZ -- NODO 5
                        let lightNode5 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId5.light
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de TEMPERATURA AIRE -- NODO 5
                        let airTempNode5 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId5.airTemp
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de HUMEDAD AIRE -- NODO 5
                        let airHumNode5 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId5.airHum
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de TEMPERATURA TIERRA -- NODO 5
                        let earthTempNode5 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId5.earthTemp
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })
                        //Organizar los datos de HUMEDAD TIERRA -- NODO 1
                        let earthHumNode5 = await map(ordenData, (weatherData) => {
                            let dates = weatherData.dateTimeCaptureTelemetry.toDate();
                            let varData = weatherData.nodeId5.earthHum
                            let timeDate = weatherData.dateTimeCaptureTelemetry.toMillis();
                            return ({
                                x: dates,
                                y: varData,
                                timeDate
                            })
                        })


                        await this.setState(() => ({
                            weather: ordenData,
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
                            airTempNode0,
                            airHumNode0,
                            earthTempNode0,
                            earthHumNode0,
                            lightNode0,
                            lightNode1,
                            airTempNode1,
                            airHumNode1,
                            earthTempNode1,
                            earthHumNode1,

                            lightNode2,
                            airTempNode2,
                            airHumNode2,
                            earthTempNode2,
                            earthHumNode2,

                            lightNode3,
                            airTempNode3,
                            airHumNode3,
                            earthTempNode3,
                            earthHumNode3,

                            lightNode4,
                            airTempNode4,
                            airHumNode4,
                            earthTempNode4,
                            earthHumNode4,

                            lightNode5,
                            airTempNode5,
                            airHumNode5,
                            earthTempNode5,
                            earthHumNode5,
                            dataReady: true
                        }))
                    })
                }

            })
        } catch (error) {
            console.log("Error: ", error)
        }
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

