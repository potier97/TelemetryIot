import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './style';
import Routes from './routes';


function Dashboard() {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    )
}; export default Dashboard;