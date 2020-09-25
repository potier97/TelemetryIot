import maxBy from 'lodash/maxBy';


export function formatWeather(weather) {

    
    
    let lastWeather = maxBy(weather,"dateTimeCaptureTelemetry");


    return(
        {
            algo: 'dscsc'
        }
    )
}

