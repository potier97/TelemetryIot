import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


//Gráfico
import { Line } from "react-chartjs-2";

// styles
import { withStyles } from '@material-ui/core/styles';
import useStyles from "./style";


const roundNumber = (x) => {
    return Math.ceil(x / 10) * 10
};


const maxNumber = (leftData, rightData) => {

    let a = Math.max.apply(Math, leftData.map((number) => { return number.y; }))
    let b = Math.min.apply(Math, leftData.map((number) => { return number.y; }))
    let c = Math.max.apply(Math, rightData.map((number) => { return number.y; }))
    let d = Math.min.apply(Math, rightData.map((number) => { return number.y; }))
    //console.log(a, b, c, d)

    //console.log(a )

    let max;
    let min;
    //determinar máximo 
    if (a > c) {
        max = roundNumber(a);
    } else {
        max = roundNumber(c);
    }
    //determinar mínimo
    if (b < d) {
        min = roundNumber(b);
    } else {
        min = roundNumber(d);
    }
    return { max, min }
};


function getHotTempData() {
    return [
        //00:00:00 UTC del 1 de enero de 1970.
        //0=enero and 11=diciembre.
        //año_num  mes_num  dia_num  hor_num  min_num  seg_num  mils_num
        { x: new Date(2020, 0, 1, 14, 1, 19, 0), y: Math.random() * 0.5 + 77 },
        { x: new Date(2020, 0, 1, 14, 1, 20, 0), y: Math.random() * 0.5 + 35 },
        { x: new Date(2020, 0, 1, 14, 1, 21, 0), y: Math.random() * 0.5 + 45 },
        { x: new Date(2020, 0, 1, 14, 1, 22, 0), y: Math.random() * 0.5 + 35 },
        { x: new Date(2020, 0, 1, 14, 1, 23, 0), y: Math.random() * 0.5 + 45 },
        { x: new Date(2020, 0, 1, 14, 1, 24, 0), y: Math.random() * 0.5 + 35 },
        { x: new Date(2020, 0, 1, 14, 1, 25, 0), y: Math.random() * 0.5 + 35 },
        { x: new Date(2020, 0, 1, 14, 1, 26, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 27, 0), y: Math.random() * 0.5 },
        { x: new Date(2020, 0, 1, 14, 1, 28, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 29, 0), y: Math.random() * 0.5 - 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 30, 0), y: Math.random() * 0.5 + 23.5 },
    ];
}

function getColdTempData() {
    return [
        { x: new Date(2020, 0, 1, 14, 1, 19, 0), y: Math.random() * 0.5 + 55.5 },
        { x: new Date(2020, 0, 1, 14, 1, 20, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 21, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 22, 0), y: Math.random() * 0.5 + 0.5 },
        { x: new Date(2020, 0, 1, 14, 1, 23, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 24, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 25, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 26, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 27, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 28, 0), y: Math.random() * 0.5 + 99.5 },
        { x: new Date(2020, 0, 1, 14, 1, 29, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 30, 0), y: Math.random() * 0.5 + 11.5 }
    ];
}





function MultiLines(props) {
    const { stepLabel, firstLabel, secondLabel, xLabel, yOneLabel, yTwoLabel,  oneColor, twoColor } = props;

    const dataA = getHotTempData();
    const dataB = getColdTempData();
    let detNumber = maxNumber(dataA, dataB)
    //console.log(detNumber)

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <>
            <Line
                data={{
                    //labels: labelData,
                    labels: [],
                    datasets: [
                        {
                            label: firstLabel,
                            data: dataA,
                            fill: true, //relleno 
                            lineTension: 0.3,
                            borderWidth: 1.5,
                            borderColor: oneColor,
                            backgroundColor: oneColor, //"rgba(75,192,192,0.4)",
                            type: 'line',
                            yAxisID: 'left-y-axis',
                            pointRadius: 5,
                            pointStyle: 'circle'
                        },
                        {
                            label: secondLabel,
                            data: dataB,
                            fill: true,
                            lineTension: 0.3,
                            borderWidth: 1.5,
                            borderColor: twoColor,
                            backgroundColor: twoColor,
                            type: 'line',
                            yAxisID: 'right-y-axis',
                            pointRadius: 5,
                            pointStyle: 'rectRot'
                        }
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
                                    hour: 'MMM D YYYY, H:m:s',
                                    millisecond: 'MMM D YYYY,  H:m:s',
                                    second: 'MMM D YYYY, H:m:s',
                                    minute: 'MMM D YYYY, H:m:s',
                                    day: 'MMM D YYYY, H:m:s',
                                    week: 'MMM D YYYY, H:m:s',
                                    month: 'MMM D YYYY, H:m:s',
                                    quarter: 'MMM D YYYY, H:m:s',
                                    year: 'MMM D YYYY, H:m:s',
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
                                suggestedMin: detNumber.min - 5,
                                suggestedMax: detNumber.max + 5
                            },
                            //offset: true,
                            gridLines: {
                                display: true,
                                drawBorder: false
                            },
                            labels: {
                                show: true
                            },
                        }, {
                            id: 'right-y-axis',
                            type: 'linear',
                            position: 'right',
                            scaleLabel: {
                                display: true,
                                labelString: yTwoLabel
                            },
                            ticks: {
                                display: !isDesktop, //No ver el numero
                                beginAtZero: true,
                                suggestedMin: detNumber.min - 5,
                                suggestedMax: detNumber.max + 5
                            },
                            //offset: true,
                            gridLines: {
                                display: true,
                                drawBorder: false
                            },
                            labels: {
                                show: true,
                            },
                        }]
                    }
                }}
            />
        </>
    );
};
export default withStyles(useStyles)(MultiLines);
