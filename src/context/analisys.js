import React, { Component } from 'react';
import { watchPlants, watchUserChnages, watchWeather } from '../firebase';
import moment from 'moment';
import orderBy from 'lodash/orderBy';
import takeRight from 'lodash/takeRight';
import map from 'lodash/map';
import filter from 'lodash/filter';
import meanBy from 'lodash/meanBy';
import round from 'lodash/round';
import mean from 'lodash/mean';
import sum from 'lodash/sum';



// async function simpleAverage(collection, carData, vardac, averageVar, isMax) {
//     let collectionFilter = null;
//     if (isMax) {
//         collectionFilter = await filter(collection, (data) => data[carData][vardac] >= averageVar);
//     } else {
//         collectionFilter = await filter(collection, (data) => data[carData][vardac] <= averageVar);
//     }
//     const collectionMap = await map(collectionFilter, (data) => data[carData][vardac])
//     const collectionRound = await round(mean(collectionMap), 2);
//     return collectionRound;
// }

function Finderror(dataA, dataB) {
    let distance = (dataA - dataB); //  / TheoreticalError
    let percentError = Math.abs(distance);
    return round(percentError, 2);
}

async function percentage(partialValue) {
    let totalValue = await sum(partialValue);
    return map(partialValue, (n) => ((100 * (totalValue - n)) / totalValue));
}

async function SimplePercentage(partialValue) {
    let totalValue = await sum(partialValue);
    return map(partialValue, (n) => {
        let result = round(((100 * n) / totalValue), 2);
        return (result)
    });
}



export const AnalysisContext = React.createContext();

export class AnalysisContexProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heatMaps: [],
            weather: [],
            plants: [],
            dataReady: false
        }
    };

    async componentDidMount() {
        try {
            this.userWatcherUnsub = await watchUserChnages((user) => {
                if (user && !this.analyticUnsub && !this.expenseWatcherUnsub) {
                    this.analyticUnsub = watchPlants((plants) => {
                        this.expenseWatcherUnsub = watchWeather(async (weather) => {

                            //Organizar datos por fechas
                            let ordenData = await orderBy(weather, ["dateTimeCaptureTelemetry"]);
                            //Obtener los ultimos 48 registros
                            let lastData = await takeRight(ordenData, 48);
                            //Obtener solo las imagenes de esos reguistros
                            let heatMaps = await map(lastData, (data) => {
                                return ({
                                    airTempImg: data.updateImages["url-AT"],
                                    airHumImg: data.updateImages["url-AH"],
                                    earthTempImg: data.updateImages["url-ET"],
                                    earthHumImg: data.updateImages["url-EH"],
                                    lightImg: data.updateImages["url-L"]
                                })
                            });


                            //Obtener la fecha de los ultimos 7 días
                            var dateFrom = moment().subtract(7, 'd').format('x');   //unix()  //.format('YYYY-MM-DD H:m:s');  //format('m/d/Y H:M:S');   //format('dddd, MMMM Do YYYY, H:m:s');
                            //console.log("tiempo de 7 dias: ", dateFrom) //Formato Unix millis
                            //var fromUnix = moment.unix(dateFrom).format('dddd, MMMM Do YYYY, H:m:s');
                            //console.log(fromUnix)

                            //Obtener datos de la ultima semana
                            let lastWeek = await filter(ordenData, (data) => data.dateTimeCaptureTelemetry.toMillis() > dateFrom);
                            //console.log(lastWeek)

                            //Promedio normal de cada variable
                            const airTempAverage = await round(meanBy(lastWeek, (average) => average.nodeId0.airTemp), 2);
                            const airHumAverage = await round(meanBy(lastWeek, (average) => average.nodeId0.airHum), 2);
                            const earthTempAverage = await round(meanBy(lastWeek, (average) => average.nodeId0.earthTemp), 2);
                            const earthHumAverage = await round(meanBy(lastWeek, (average) => average.nodeId0.earthHum), 2);
                            const lightAverage = await round(meanBy(lastWeek, (average) => average.nodeId0.light), 2);

                            // //Valores maximos y minimos del promedio Temperatura Aire
                            // const airTempAverageMax = await simpleAverage(lastWeek, 'nodeId0', 'airTemp', airTempAverage, true);
                            // const airTempAverageMin = await simpleAverage(lastWeek, 'nodeId0', 'airTemp', airTempAverage, false);
                            // //Valores maximos y minimos del promedio Humedad Aire
                            // const airHumAverageMax = await simpleAverage(lastWeek, 'nodeId0', 'airHum', airHumAverage, true);
                            // const airHumAverageMin = await simpleAverage(lastWeek, 'nodeId0', 'airHum', airHumAverage, false);
                            // //Valores maximos y minimos del promedio Temperatura Tierra 
                            // const earthTempAverageMax = await simpleAverage(lastWeek, 'nodeId0', 'earthTemp', earthTempAverage, true);
                            // const earthTempAverageMin = await simpleAverage(lastWeek, 'nodeId0', 'earthTemp', earthTempAverage, false);
                            // //Valores maximos y minimos del promedio Humedad Tierra 
                            // const earthHumAverageMax = await simpleAverage(lastWeek, 'nodeId0', 'earthHum', earthHumAverage, true);
                            // const earthHumAverageMin = await simpleAverage(lastWeek, 'nodeId0', 'earthHum', earthHumAverage, false);
                            // //Valores maximos y minimos del promedio Luz 
                            // const lightAverageMax = await simpleAverage(lastWeek, 'nodeId0', 'light', lightAverage, true);
                            // const lightAverageMin = await simpleAverage(lastWeek, 'nodeId0', 'light', lightAverage, false);

                            //console.log(airTempAverage, airHumAverage, earthTempAverage, earthHumAverage, lightAverage);


                            //Calcular el promedio de cada variable a cada planta
                            let plantsMedium = await map(plants, (data) => {
                                let tempMedium = mean([parseFloat(data.tempMax), parseFloat(data.tempMin)])
                                let humMedium = mean([parseFloat(data.humMax), parseFloat(data.humMin)])
                                let lightMedium = mean([parseFloat(data.lightMax), parseFloat(data.lightMin)])
                                let distanceAirTemp = Finderror(tempMedium, airTempAverage)
                                let distanceAirHum = Finderror(humMedium, airHumAverage)
                                let distanceEarthTemp = Finderror(tempMedium, earthTempAverage)
                                let distanceEarthHum = Finderror(humMedium, earthHumAverage)
                                let distanceLight = Finderror(lightMedium, lightAverage)
                                return ({
                                    ...data,
                                    tempMin: parseFloat(data.tempMin),
                                    tempMax: parseFloat(data.tempMax),
                                    humMin: parseFloat(data.humMin),
                                    humMax: parseFloat(data.humMax),
                                    lightMin: parseFloat(data.lightMin),
                                    lightMax: parseFloat(data.lightMax),
                                    tempMedium,
                                    humMedium,
                                    lightMedium,
                                    distanceAirTemp,
                                    distanceAirHum,
                                    distanceEarthTemp,
                                    distanceEarthHum,
                                    distanceLight,
                                })
                            })
                            //console.log(plantsMedium)

                            let percentAirTempPlants = await percentage(map(plantsMedium, (data) => data.distanceAirTemp))
                            let percentAirHumPlants = await percentage(map(plantsMedium, (data) => data.distanceAirHum))
                            let percentEarthTempPlants = await percentage(map(plantsMedium, (data) => data.distanceEarthTemp))
                            let percentEarthHumPlants = await percentage(map(plantsMedium, (data) => data.distanceEarthHum))
                            let percentLightPlants = await percentage(map(plantsMedium, (data) => data.distanceLight))

                            // console.log('Porcentajes dos')
                            // console.log('Porcentajes ', percentAirTempPlants)
                            // console.log('Porcentajes ', percentAirHumPlants)
                            // console.log('Porcentajes ', percentEarthTempPlants)
                            // console.log('Porcentajes ', percentEarthHumPlants)
                            // console.log('Porcentajes ', percentLightPlants)


                            plantsMedium = await map(plantsMedium, (data, i) => {
                                let reliabilityAirTemp = round(percentAirTempPlants[i], 2)
                                let reliabilityAirHum = round(percentAirHumPlants[i], 2)
                                let reliabilityEarthTemp = round(percentEarthTempPlants[i], 2)
                                let reliabilityEarthHum = round(percentEarthHumPlants[i], 2)
                                let reliabilityLight = round(percentLightPlants[i], 2)
                                let reliabilityTotal = round(reliabilityAirTemp + reliabilityAirHum + reliabilityEarthTemp + reliabilityEarthHum + reliabilityLight, 2)
                                return ({
                                    ...data,
                                    reliabilityAirTemp,
                                    reliabilityAirHum,
                                    reliabilityEarthTemp,
                                    reliabilityEarthHum,
                                    reliabilityLight,
                                    reliabilityTotal
                                })
                            })


                            //Calcular el porcentaje para las mejores plantas
                            let bestPlants = await SimplePercentage(map(plantsMedium, (data) => { return data.reliabilityTotal }));

                            plantsMedium = await map(plantsMedium, (data, i) => {
                                let value = bestPlants[i]
                                let title = data.namePlants
                                return ({
                                    ...data,
                                    value,
                                    title
                                })
                            })

                            plantsMedium = await orderBy(plantsMedium, ["value"], ['desc'])
                            console.log('plantsMedium ', plantsMedium)

                            this.setState({
                                plants: plantsMedium,
                                heatMaps,
                                //weather: lastWeek,
                                dataReady: true
                            })
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

