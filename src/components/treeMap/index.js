import React from 'react';
//import { useTheme } from '@material-ui/core/styles';
//import useMediaQuery from '@material-ui/core/useMediaQuery';

//Gráfico
import ChartComponent from 'react-chartjs-2';
import 'chartjs-chart-treemap';



// styles
import { withStyles } from '@material-ui/core/styles';
import useStyles from "./style";



function colorFromValue(value, border) {
    if (typeof value !== 'undefined') {
        var alpha = (0.5 + Math.log(value.v)) / 6; 
        if (border)  alpha += 0.01;
        return 'rgba(114,176,29,'+ alpha +')'
        //return 'rgba(82,170,94,'+ alpha +')'
        //return 'rgba(22,32,44,'+ alpha +')'
        //return 'rgba(0,155,229,'+ alpha +')'
        //return 'rgba(56,134,89,'+ alpha +')'
    }
}


function TreeMap(props) {
    const { data } = props;

    //const theme = useTheme();
    //const isDesktop = useMediaQuery(theme.breakpoints.down('xs'));
    //console.log(isDesktop)

    return (
        <>
            <ChartComponent
                type={'treemap'}

                data={{
                    datasets: [{
                        label: 'Basic treemap',
                        tree: data,
                        key: 'value',
                        groups: ['title'],
                        fontColor: 'Black', 
                        fontFamily: 'Century-Gothic',
                        fontSize: 12,
                        fontStyle: 'normal',
                        spacing: 0.3,
                        borderWidth: 2,
                        borderColor: "rgba(180,180,180, 0.15)",
                        backgroundColor: (ctx) => colorFromValue(ctx.dataset.data[ctx.dataIndex], true),
                        //borderColor: (ctx) => colorFromValue(ctx.dataset.data[ctx.dataIndex], true),
                    }]
                }}

                options={{
                    //maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: "Invernadero"
                    },
                    legend: {
                        display: false
                    },

                    tooltips: {
                        callbacks: {
                            title: function (item, data) {
                                return 'Planta';  //data.datasets[item[0].datasetIndex].key;
                            },
                            label: function (item, data) {
                                var dataset = data.datasets[item.datasetIndex];
                                var dataItem = dataset.data[item.index];
                                var label = dataItem._data.title;
                                //console.log(label)
                                return label + ': ' + dataItem.v + '%';
                            }
                        }
                    }
                }}
            />
        </>
    );
};
export default withStyles(useStyles)(TreeMap);
