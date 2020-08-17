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


const maxNumber = (x) => {
    let a = Math.max.apply(null, x)
    let b = Math.min.apply(null, x)
    //determinar máximo
    let max = roundNumber(a);
    //determinar mínimo
    let min = roundNumber(b);
    return { max, min }
};





function SimpleLines(props) {
    const { labelData, firstLabel, xLabel, yOneLabel, dataOne, oneColor } = props;


    let detNumber = maxNumber(dataOne)
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
                            backgroundColor: oneColor,  
                            yAxisID: 'left-y-axis',
                            pointRadius: 5,
                            pointStyle: 'circle'
                        },
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
