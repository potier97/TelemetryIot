import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Gráfico
import { Line } from "react-chartjs-2";

// styles
import { withStyles } from '@material-ui/core/styles';
import useStyles from "./style";

function getHotTempData() {
    return [
        //00:00:00 UTC del 1 de enero de 1970.
        //0=enero and 11=diciembre.
        //año_num  mes_num  dia_num  hor_num  min_num  seg_num  mils_num
        { x: new Date(2020, 0, 1, 14, 1, 19, 0), y: Math.random() * 0.5 + 35 },
        { x: new Date(2020, 0, 1, 14, 1, 20, 0), y: Math.random() * 0.5 + 35 },
        { x: new Date(2020, 0, 1, 14, 1, 21, 0), y: Math.random() * 0.5 + 35 },
        { x: new Date(2020, 0, 1, 14, 1, 22, 0), y: Math.random() * 0.5 + 35 },
        { x: new Date(2020, 0, 1, 14, 1, 23, 0), y: Math.random() * 0.5 + 35 },
        { x: new Date(2020, 0, 1, 14, 1, 24, 0), y: Math.random() * 0.5 + 35 },
        { x: new Date(2020, 0, 1, 14, 1, 25, 0), y: Math.random() * 0.5 + 35 },
        { x: new Date(2020, 0, 1, 14, 1, 26, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 27, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 28, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 29, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 30, 0), y: Math.random() * 0.5 + 23.5 },
    ];
}

function getColdTempData() {
    return [
        { x: new Date(2020, 0, 1, 14, 1, 19, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 20, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 21, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 22, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 23, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 24, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 25, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 26, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 27, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 28, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 29, 0), y: Math.random() * 0.5 + 23.5 },
        { x: new Date(2020, 0, 1, 14, 1, 30, 0), y: Math.random() * 0.5 + 23.5 }
    ];
}

function getColdTempDataDos() {
    return [
        { x: new Date(2020, 0, 1, 14, 1, 19, 0), y: Math.random() * 0.5 + 31.12 },
        { x: new Date(2020, 0, 1, 14, 1, 20, 0), y: Math.random() * 0.5 + 31.12 },
        { x: new Date(2020, 0, 1, 14, 1, 21, 0), y: Math.random() * 0.5 + 31.12 },
        { x: new Date(2020, 0, 1, 14, 1, 22, 0), y: Math.random() * 0.5 + 31.12 },
        { x: new Date(2020, 0, 1, 14, 1, 23, 0), y: Math.random() * 0.5 + 31.12 },
        { x: new Date(2020, 0, 1, 14, 1, 24, 0), y: Math.random() * 0.5 + 31.12 },
        { x: new Date(2020, 0, 1, 14, 1, 25, 0), y: Math.random() * 0.5 + 31.12 },
        { x: new Date(2020, 0, 1, 14, 1, 26, 0), y: Math.random() * 0.5 + 31.12 },
        { x: new Date(2020, 0, 1, 14, 1, 27, 0), y: Math.random() * 0.5 + 31.12 },
        { x: new Date(2020, 0, 1, 14, 1, 28, 0), y: Math.random() * 0.5 + 31.12 },
        { x: new Date(2020, 0, 1, 14, 1, 29, 0), y: Math.random() * 0.5 + 31.12 },
        { x: new Date(2020, 0, 1, 14, 1, 30, 0), y: Math.random() * 0.5 + 31.12 }
    ];
}

function getColdTempDataTres() {
    return [
        { x: new Date(2020, 0, 1, 14, 1, 19, 0), y: Math.random() * 0.5 + 18.65 },
        { x: new Date(2020, 0, 1, 14, 1, 20, 0), y: Math.random() * 0.5 + 18.65 },
        { x: new Date(2020, 0, 1, 14, 1, 21, 0), y: Math.random() * 0.5 + 18.65 },
        { x: new Date(2020, 0, 1, 14, 1, 22, 0), y: Math.random() * 0.5 + 18.65 },
        { x: new Date(2020, 0, 1, 14, 1, 23, 0), y: Math.random() * 0.5 + 18.65 },
        { x: new Date(2020, 0, 1, 14, 1, 24, 0), y: Math.random() * 0.5 + 18.65 },
        { x: new Date(2020, 0, 1, 14, 1, 25, 0), y: Math.random() * 0.5 + 18.65 },
        { x: new Date(2020, 0, 1, 14, 1, 26, 0), y: Math.random() * 0.5 + 18.65 },
        { x: new Date(2020, 0, 1, 14, 1, 27, 0), y: Math.random() * 0.5 + 18.65 },
        { x: new Date(2020, 0, 1, 14, 1, 28, 0), y: Math.random() * 0.5 + 18.65 },
        { x: new Date(2020, 0, 1, 14, 1, 29, 0), y: Math.random() * 0.5 + 18.65 },
        { x: new Date(2020, 0, 1, 14, 1, 30, 0), y: Math.random() * 0.5 + 18.65 }
    ];
}

function getColdTempDataCuatro() {
    return [
        { x: new Date(2020, 0, 1, 14, 1, 19, 0), y: Math.random() * 0.5 + 28.55 },
        { x: new Date(2020, 0, 1, 14, 1, 20, 0), y: Math.random() * 0.5 + 28.55 },
        { x: new Date(2020, 0, 1, 14, 1, 21, 0), y: Math.random() * 0.5 + 28.55 },
        { x: new Date(2020, 0, 1, 14, 1, 22, 0), y: Math.random() * 0.5 + 28.55 },
        { x: new Date(2020, 0, 1, 14, 1, 23, 0), y: Math.random() * 0.5 + 28.55 },
        { x: new Date(2020, 0, 1, 14, 1, 24, 0), y: Math.random() * 0.5 + 28.55 },
        { x: new Date(2020, 0, 1, 14, 1, 25, 0), y: Math.random() * 0.5 + 28.55 },
        { x: new Date(2020, 0, 1, 14, 1, 26, 0), y: Math.random() * 0.5 + 28.55 },
        { x: new Date(2020, 0, 1, 14, 1, 27, 0), y: Math.random() * 0.5 + 28.55 },
        { x: new Date(2020, 0, 1, 14, 1, 28, 0), y: Math.random() * 0.5 + 28.55 },
        { x: new Date(2020, 0, 1, 14, 1, 29, 0), y: Math.random() * 0.5 + 28.55 },
        { x: new Date(2020, 0, 1, 14, 1, 30, 0), y: Math.random() * 0.5 + 28.55 }
    ];
}

function DateLines(props) {
    
    // eslint-disable-next-line 
    const {  yOneLabel, stepLabel, dataOne, dataTwo, dataThree, dataFour, dataFive } = props;

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <>
            <Line

                data={{
                    labels: [],
                    datasets: [{
                        fill: true,
                        data: getHotTempData(),
                        label: 'Nodo 1 ',
                        borderColor: '#673ab7',
                        backgroundColor: '#673ab733',
                        borderWidth: 1.25,
                        type: 'line',
                        lineTension: 0.3,
                        pointRadius: 5,
                        pointStyle: 'rectRot'
                    },
                    {
                        fill: true,
                        data: getColdTempDataDos(),
                        label: 'Nodo 2 ',
                        borderColor: '#4bc0c0',
                        backgroundColor: '#4bc0c033',
                        borderWidth: 1.25,
                        type: 'line',
                        lineTension: 0.3,
                        pointRadius: 5,
                        pointStyle: 'circle'
                    },
                    {
                        fill: true,
                        data: getColdTempData(),
                        label: 'Nodo 3 ',
                        borderColor: '#56a2eb',
                        backgroundColor: '#56a2eb33',
                        borderWidth: 1.25,
                        type: 'line',
                        lineTension: 0.3,
                        pointRadius: 5,
                        pointStyle: 'triangle'
                    },
                    {
                        fill: true,
                        data: getColdTempDataTres(),
                        label: 'Nodo 4 ',
                        borderColor: '#ff6384',
                        backgroundColor: '#ff638433',
                        borderWidth: 1.25,
                        type: 'line',
                        lineTension: 0.3,
                        pointRadius: 5,
                        pointStyle: 'rectRounded'
                    },
                    {
                        fill: true,
                        data: getColdTempDataCuatro(),
                        label: 'Nodo 5 ',
                        borderColor: '#ffed56',
                        backgroundColor: '#ffed5633',
                        borderWidth: 1.25,
                        type: 'line',
                        lineTension: 0.3,
                        pointRadius: 5,
                        pointStyle: 'rect'
                    }]
                }}




                options={{
                    scales: {
                        xAxes: [{
                            type: 'time',
                            distrubution: 'series',
                            scaleLabel: {
                                display: true,
                                labelString: 'Tiempo'
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
                                //autoSkip: true,
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
export default withStyles(useStyles)(DateLines);
