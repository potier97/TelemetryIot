import maxBy from 'lodash/maxBy'



export function formatWeather(weather) {

    
    
    let lastWeather = maxBy(weather,"dateTimeCaptureTelemetry");


    // return Object.entries(weatherByType).map(([key, arr]) => {

    //     const totals = arr.reduce((result, expense) => {

    //         const date = moment(expense.date).startOf('day');

    //         const key = date.format('DD MMM, YYYY');

    //         if (!result[key]) {
    //             result[key] = { total: 0, timestamp: date.valueOf() };
    //         }

    //         result[key].total += expense.amount;

    //         return result;
    //     }, {});

    //     let data = Object.entries(totals).map(([key, data]) => ({
    //         x: key,
    //         y: data.total,
    //         timestamp: data.timestamp,
    //     }));

    //     data.sort((a, b) => {
    //         if (a.timestamp > b.timestamp) return 1;
    //         if (a.timestamp < b.timestamp) return -1;
    //         return 0;
    //     });

    //     return {
    //         type: key,
    //         data,
    //     };
    // });
}

