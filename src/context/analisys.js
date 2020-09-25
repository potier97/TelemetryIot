import React, { Component } from 'react';
import { watchPlants, watchUserChnages, watchWeather } from '../firebase';
import orderBy from 'lodash/orderBy';
import takeRight from 'lodash/takeRight';
import map from 'lodash/map';



export const AnalysisContext = React.createContext();

export class AnalysisContexProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heatMaps: [],
            weather: [],
            dataReady: false
        }
    };

    async componentDidMount() {
        try {
            this.userWatcherUnsub = await watchUserChnages((user) => {
                if (user && !this.analyticUnsub && !this.expenseWatcherUnsub) {
                    this.analyticUnsub = watchPlants((heatMaps) => {
                        this.expenseWatcherUnsub = watchWeather(async (weather) => {

                            //Organizar datos por fechas
                            let ordenData = await orderBy(weather, ["dateTimeCaptureTelemetry"])
                            let lastData = await takeRight(ordenData, 48);
                            let heatMaps = await map(lastData, (data) => { 
                                return({
                                    airTempImg: data.updateImages["url-AT"],
                                    airHumImg: data.updateImages["url-AH"],
                                    earthTempImg: data.updateImages["url-ET"],
                                    earthHumImg: data.updateImages["url-EH"],
                                    lightImg: data.updateImages["url-L"]
                                })
                            })

                            this.setState({ heatMaps, weather, dataReady: true })
                        })
                    })
                }
            })
        } catch (error) {
            console.log("Error: ", error)
        }
    };


    componentWillUnmount() {
        if (this.analyticUnsub) {
            this.analyticUnsub();
        }
        if (this.expenseWatcherUnsub) {
            this.expenseWatcherUnsub();
        }
    }

    render() {
        const { children } = this.props;
        return (
            <AnalysisContext.Provider value={this.state}>
                {children}
            </AnalysisContext.Provider>
        )
    }

};

export const AnalysisContextConsumer = AnalysisContext.Consumer;

