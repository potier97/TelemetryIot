import React from 'react';
// import { useTheme } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

//Gráfico
import { Doughnut } from "react-chartjs-2";

// styles
import { withStyles } from '@material-ui/core/styles';
import useStyles from "./style";


function SimpleDoughnut(props) {
    const { labelData, firstLabel, dataOne, xLabel } = props;

    //const theme = useTheme();
    //const isDesktop = useMediaQuery(theme.breakpoints.down('sm'));
    //console.log(isDesktop)
    return (
        <>
            <Doughnut
                // height={!isDesktop ? 3 : 25}
                // width={!isDesktop ? 12 : 35}
                height={6}
                width={12}

                data={{
                    labels: labelData,
                    datasets: [
                        {
                            label: firstLabel,
                            data: dataOne,
                            //fill: true, //relleno    
                            backgroundColor: [
                                '#ff9f40',
                                '#36a2eb',
                                '#4bc0c0',
                                '#ff6384',
                                '#ffcd56',
                            ],
                            hoverBackgroundColor: [
                                '#ff9f4088',
                                '#36a2eb88',
                                '#4bc0c088',
                                '#ff638488',
                                '#ffcd5688',
                            ],
                            //weight: 3
                        },
                    ],
                }}

                //height={90}
                options={{
                    //cutoutPercentage: 45,
                    rotation: 1 * Math.PI,
                    circumference: 1 * Math.PI,
                    //cutoutPercentage: 95,
                    title: {
                        display: false,
                        position: "bottom",
                        text: xLabel
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                    },
                    centertext: "123",
                }}
            />
        </>
    );
};
export default withStyles(useStyles)(SimpleDoughnut);
