import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


//Gráfico
import { Line } from "react-chartjs-2";

// styles
import { withStyles } from '@material-ui/core/styles';
import useStyles from "./style";
import "./styles.css"

const roundNumber = (x) => {
    return Math.ceil(x / 10) * 10
};

const maxNumber = (data) => {
    let a = Math.max.apply(Math, data.map((number) => { return number.y; }))
    let b = Math.min.apply(Math, data.map((number) => { return number.y; }))
    //determinar máximo
    let max = roundNumber(a);
    //determinar mínimo
    let min = roundNumber(b);
    return { max, min }
};

// // eslint-disable-next-line
// function getHotTempData() {
//     return [
//         //00:00:00 UTC del 1 de enero de 1970.
//         //0=enero and 11=diciembre.
//         //año_num  mes_num  dia_num  hor_num  min_num  seg_num  mils_num
//         { x: new Date(2020, 0, 1, 14, 1, 19, 0), y: Math.random() * 0.5 + 77 },
//         { x: new Date(2020, 0, 1, 14, 1, 20, 0), y: Math.random() * 0.5 + 35 },
//         { x: new Date(2020, 0, 1, 14, 1, 21, 0), y: Math.random() * 0.5 + 45 },
//         { x: new Date(2020, 0, 1, 14, 1, 22, 0), y: Math.random() * 0.5 + 35 },
//         { x: new Date(2020, 0, 1, 14, 1, 23, 0), y: Math.random() * 0.5 + 45 },
//         { x: new Date(2020, 0, 1, 14, 1, 24, 0), y: Math.random() * 0.5 + 35 },
//         { x: new Date(2020, 0, 1, 14, 1, 25, 0), y: Math.random() * 0.5 + 35 },
//         { x: new Date(2020, 0, 1, 14, 1, 26, 0), y: Math.random() * 0.5 + 23.5 },
//         { x: new Date(2020, 0, 1, 14, 1, 27, 0), y: Math.random() * 0.5 },
//         { x: new Date(2020, 0, 1, 14, 1, 28, 0), y: Math.random() * 0.5 + 23.5 },
//         { x: new Date(2020, 0, 1, 14, 1, 29, 0), y: Math.random() * 0.5 - 23.5 },
//         { x: new Date(2020, 0, 1, 14, 1, 30, 0), y: Math.random() * 0.5 + 23.5 },
//     ];
// }



function SimpleLines(props) {
    const { stepLabel, firstLabel, xLabel, yOneLabel, oneColor, borderOneColor, data } = props;

    //const dataA = 
    let detNumber = maxNumber(data)

    //console.log(detNumber)

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.down('xs'));
    //console.log(isDesktop)

    return (
        <>
            <Line

                data={{
                    labels: [],
                    datasets: [
                        {
                            label: firstLabel,
                            data: data,
                            fill: true, //relleno 
                            lineTension: 0.3,
                            borderWidth: 1.5,
                            borderColor: borderOneColor,
                            backgroundColor: oneColor,
                            type: 'line',
                            yAxisID: 'left-y-axis',
                            pointRadius: 5,
                            pointStyle: 'circle'
                        },
                    ],

                }}

                options={{  
                    scales: {
                        xAxes: [{

                            type: 'time',
                            distrubution: 'series',
                            scaleLabel: {
                                display: true,
                                labelString: xLabel
                            },
                            time: {
                                //unitStepSize: 10, cada cuantas ñineas se dibuja un label 
                                //stepSize: 5, cada cuantas ñineas se dibuja un label
                                //unit: "hour",  iempre muestre unidades por la unidad que se defina
                                //   Si se define, obligará a la unidad a ser de cierto tipo. Consulte la sección Unidades de tiempo a continuación para obtener más detalles.
                                stepSize: 1,

                                //seleccionar formato en:
                                //https://momentjs.com/docs/#/displaying/format/

                                tooltipFormat: "dddd, MMMM Do YYYY, H:m:s",
                                displayFormats: {
                                    hour: 'MMM D YYYY',
                                    millisecond: 'MMM D YYYY',
                                    second: 'MMM D YYYY',
                                    minute: 'MMM D YYYY',
                                    day: 'MMM D YYYY',
                                    week: 'MMM D YYYY',
                                    month: 'MMM D YYYY',
                                    quarter: 'MMM D YYYY',
                                    year: 'MMM D YYYY',
                                    // MMM MES: DEC
                                    // D DAY OF MONTH
                                    //YYYY  AÑO

                                }
                            },
                            ticks: {
                                callback: function (dataLabel, index) {
                                    return index % stepLabel === 0 ? dataLabel : '';
                                },
                                autoSkip: false,
                                maxRotation: 35,
                                minRotation: 35,
                                stepSize: 1,
                            },
                        }],
                        yAxes: [{
                            id: 'left-y-axis',
                            type: 'linear',
                            position: 'left',
                            scaleLabel: {
                                display: true,
                                labelString: yOneLabel
                            },
                            ticks: {
                                display: !isDesktop,   //No ver el numero
                                beginAtZero: true,
                                suggestedMin: detNumber.min - 10,
                                suggestedMax: detNumber.max + 10
                            },
                            gridLines: {
                                display: true,
                                drawBorder: false
                            },
                            labels: {
                                show: true
                            },
                        }]
                    }
                }}
            />
        </>
    );
};
export default withStyles(useStyles)(SimpleLines);
