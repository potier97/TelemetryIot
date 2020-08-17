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


const maxNumber = (x, y) => {
    let a = Math.max.apply(null, x)
    let b = Math.min.apply(null, x)
    let c = Math.max.apply(null, y)
    let d = Math.min.apply(null, y)
    //console.log(a, b, c, d)
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





function MultiLines(props) {
    const { labelData, firstLabel, secondLabel, xLabel, yOneLabel, yTwoLabel, dataOne, dataTwo, oneColor, twoColor } = props;


    let detNumber = maxNumber(dataOne, dataTwo)
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
                            label: firstLabel,
                            data: dataOne,
                            fill: true, //relleno 
                            lineTension: 0.3,
                            borderWidth: 0,
                            borderColor: oneColor,
                            backgroundColor: oneColor,               //"rgba(75,192,192,0.4)",
                            yAxisID: 'left-y-axis',
                            pointRadius: 5,
                            pointStyle: 'circle'
                        },
                        {
                            label: secondLabel,
                            data: dataTwo,
                            fill: true,
                            lineTension: 0.3,
                            borderWidth: 0,
                            borderColor: twoColor,
                            backgroundColor: twoColor,
                            yAxisID: 'right-y-axis',
                            pointRadius: 5,
                            pointStyle: 'rectRot'
                        }
                    ],

                }} 

                options={{ 
                    elements: {
                    },
                    scales: {
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: xLabel
                            },
                            ticks: {
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
                                suggestedMin: detNumber.min - 10,
                                suggestedMax: detNumber.max + 10
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
