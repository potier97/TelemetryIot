import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Gráfico
import { Line } from "react-chartjs-2";

// styles
import { withStyles } from '@material-ui/core/styles';
import useStyles from "./style";



function Lines(props) {
    const { labelData, yOneLabel, dataOne, dataTwo, dataThree, dataFour, dataFive } = props;


    //let detNumber = maxNumber(dataOne)
    //console.log(detNumber)

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.down('xs'));
    //console.log(isDesktop)

    return (
        <>
            <Line
                data={{
                    labels: labelData,
                    datasets: [
                        {
                            label: 'Nodo 1 ',
                            data: dataOne,
                            fill: true, //relleno 
                            lineTension: 0.3,
                            borderWidth: 0,
                            borderColor: '#673ab7',
                            backgroundColor: '#673ab733',
                            //yAxisID: 'y-axis-1',
                            pointRadius: 5,
                            pointStyle: 'rectRot'
                        },
                        {
                            label: 'Nodo 2 ',
                            data: dataTwo,
                            fill: true, //relleno 
                            lineTension: 0.3,
                            borderWidth: 0,
                            borderColor: '#56a2eb',
                            backgroundColor: '#56a2eb33',
                            pointRadius: 5,
                            pointStyle: 'circle'
                        },
                        {
                            label: 'Nodo 3 ',
                            data: dataThree,
                            fill: true, //relleno 
                            lineTension: 0.3,
                            borderWidth: 0,
                            borderColor: '#4bc0c0',
                            backgroundColor: '#4bc0c033',
                            pointRadius: 5,
                            pointStyle: 'triangle'
                        },
                        {
                            label: 'Nodo 4 ',
                            data: dataFour,
                            fill: true, //relleno 
                            lineTension: 0.3,
                            borderWidth: 0,
                            borderColor: '#ff6384',
                            backgroundColor: '#ff638433',
                            pointRadius: 5,
                            pointStyle: 'rectRounded'
                        },
                        {
                            label: 'Nodo 5 ',
                            data: dataFive,
                            fill: true, //relleno 
                            lineTension: 0.3,
                            borderWidth: 0,
                            borderColor: '#ffed56',
                            backgroundColor: '#ffed5633',
                            pointRadius: 5,
                            pointStyle: 'rect'
                        },
                    ],

                }} 

                
                options={{
                    scales: {
                        xAxes: [{
                            //type: 'time',
                            //distribution: 'series',
                            // time: {
                            //     unit: 'day',
                            // }, 

                            scaleLabel: {
                                display: true,
                                labelString: 'Tiempo',

                            },
                            ticks: {
                                callback: function (dataLabel, index) {
                                    return index % 2 === 0 ? dataLabel : '';
                                },
                                autoSkip: false,
                                maxRotation: 40,
                                minRotation: 40
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
                                //beginAtZero: true,
                                //suggestedMin: detNumber.min - 10,
                                //suggestedMax: detNumber.max + 10
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
export default withStyles(useStyles)(Lines);
