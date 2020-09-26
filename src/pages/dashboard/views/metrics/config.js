import filter from 'lodash/filter';
import moment from 'moment';


export function formatWeather(airTempNode0, airHumNode0, earthTempNode0, earthHumNode0, lightNode0,
    airTempNode1, airHumNode1, earthTempNode1, earthHumNode1, lightNode1,
    airTempNode2, airHumNode2, earthTempNode2, earthHumNode2, lightNode2,
    airTempNode3, airHumNode3, earthTempNode3, earthHumNode3, lightNode3,
    airTempNode4, airHumNode4, earthTempNode4, earthHumNode4, lightNode4,
    airTempNode5, airHumNode5, earthTempNode5, earthHumNode5, lightNode5, statusDate, startDate, endDate) {


    //console.log(airTempNode0)


    if (statusDate === true) {
        // console.log(startDate)
        // console.log(endDate) 
        //console.log(fechaaaa)
        let unixStartDate = parseInt(moment(startDate).format('x'));
        let unixEndDate = parseInt(moment(endDate).add(1, 'd').format('x'));
        //console.log('unixStartDate', typeof(unixStartDate));
        //console.log('unixEndDate', unixStartDate)

        //Obtener datos Filtrados
        let airTempNode0s = filter(airTempNode0, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        console.log(airTempNode0s)
        let airHumNode0s = filter(airHumNode0, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let earthTempNode0s = filter(earthTempNode0, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let earthHumNode0s = filter(earthHumNode0, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let lightNode0s = filter(lightNode0, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  


        let airTempNode1s = filter(airTempNode1, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let airHumNode1s = filter(airHumNode1, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let earthTempNode1s = filter(earthTempNode1, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let earthHumNode1s = filter(earthHumNode1, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let lightNode1s = filter(lightNode1, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate) 

        let airTempNode2s = filter(airTempNode2, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let airHumNode2s = filter(airHumNode2, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let earthTempNode2s = filter(earthTempNode2, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let earthHumNode2s = filter(earthHumNode2, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let lightNode2s = filter(lightNode2, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate) 

        let airTempNode3s = filter(airTempNode3, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let airHumNode3s = filter(airHumNode3, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let earthTempNode3s = filter(earthTempNode3, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let earthHumNode3s = filter(earthHumNode3, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let lightNode3s = filter(lightNode3, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate) 

        let airTempNode4s = filter(airTempNode4, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let airHumNode4s = filter(airHumNode4, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let earthTempNode4s = filter(earthTempNode4, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let earthHumNode4s = filter(earthHumNode4, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let lightNode4s = filter(lightNode4, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate) 

        let airTempNode5s = filter(airTempNode5, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let airHumNode5s = filter(airHumNode5, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let earthTempNode5s = filter(earthTempNode5, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let earthHumNode5s = filter(earthHumNode5, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate)  
        let lightNode5s = filter(lightNode5, (data) => unixStartDate <= data.timeDate && data.timeDate <= unixEndDate) 

        return ({
            airTempNode0s,
            airHumNode0s,
            earthTempNode0s,
            earthHumNode0s,
            lightNode0s,

            airTempNode1s,
            airHumNode1s,
            earthTempNode1s,
            earthHumNode1s,
            lightNode1s,

            airTempNode2s,
            airHumNode2s,
            earthTempNode2s,
            earthHumNode2s,
            lightNode2s,

            airTempNode3s,
            airHumNode3s,
            earthTempNode3s,
            earthHumNode3s,
            lightNode3s,

            airTempNode4s,
            airHumNode4s,
            earthTempNode4s,
            earthHumNode4s,
            lightNode4s,

            airTempNode5s,
            airHumNode5s,
            earthTempNode5s,
            earthHumNode5s,
            lightNode5s
        })
    } else {
        return ({
            airTempNode0s: airTempNode0,
            airHumNode0s: airHumNode0,
            earthTempNode0s: earthTempNode0,
            earthHumNode0s: earthHumNode0,
            lightNode0s: lightNode0,

            airTempNode1s: airTempNode1,
            airHumNode1s: airHumNode1,
            earthTempNode1s: earthTempNode1,
            earthHumNode1s: earthHumNode1,
            lightNode1s: lightNode1,

            airTempNode2s: airTempNode2,
            airHumNode2s: airHumNode2,
            earthTempNode2s: earthTempNode2,
            earthHumNode2s: earthHumNode2,
            lightNode2s: lightNode2,

            airTempNode3s: airTempNode3,
            airHumNode3s: airHumNode3,
            earthTempNode3s: earthTempNode3,
            earthHumNode3s: earthHumNode3,
            lightNode3s: lightNode3,

            airTempNode4s: airTempNode4,
            airHumNode4s: airHumNode4,
            earthTempNode4s: earthTempNode4,
            earthHumNode4s: earthHumNode4,
            lightNode4s: lightNode4,

            airTempNode5s: airTempNode5,
            airHumNode5s: airHumNode5,
            earthTempNode5s: earthTempNode5,
            earthHumNode5s: earthHumNode5,
            lightNode5s: lightNode5
        })
    }

}

