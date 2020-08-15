import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// styles
import { withStyles } from '@material-ui/core/styles';
import useStyles from "./style";


// const StyledTableCell = withStyles((theme) => ({
//     head: {
//         backgroundColor: 'green',
//         color: 'red',
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);


const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f5f5f5',
        },
    },
}))(TableRow);


function createData(name, tMax, tMin, hMax, hMin, lMax, lMin) {
    return { name, tMax, tMin, hMax, hMin, lMax, lMin };
};



function Tables(props) {

    const { classes } = props;
    //name, tMax, tMin, hMax, hMin, lMax, lMin 

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 9.0, 37),
        createData('Eclair', 262, 16.0, 24, 6.0, 16.0, 24),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 24, 4.0),
    ];


    return (
        <>
            <TableContainer className={classes.root}  >
                <Table className={classes.table}  >
                    <TableHead>
                        <TableRow >
                            <TableCell >
                                <Typography component="h1" variant="h6" className={classes.title}>
                                    Alimentos
                                </Typography>
                            </TableCell>
                            <TableCell align="right" >
                                <Typography component="h1" variant="body2" className={classes.title}>
                                    Tem Máx &deg;c
                                </Typography>
                            </TableCell>
                            <TableCell align="right" className={classes.title}>
                                <Typography component="h1" variant="body2" className={classes.title}>
                                    Tem Mín &deg;c
                                </Typography>
                            </TableCell>
                            <TableCell align="right" className={classes.title}>
                                <Typography component="h1" variant="body2" className={classes.title}>
                                    Hum Máx %
                                </Typography>
                            </TableCell>
                            <TableCell align="right" className={classes.title}>
                                <Typography component="h1" variant="body2" className={classes.title}>
                                    Hum Mín %
                                </Typography>
                            </TableCell>
                            <TableCell align="right" className={classes.title}>
                                <Typography component="h1" variant="body2" className={classes.title}>
                                    Luz Máx Lux
                                </Typography>
                            </TableCell>
                            <TableCell align="right" className={classes.title} >
                                <Typography component="h1" variant="body2" className={classes.title}>
                                    Luz Mín Lux
                                </Typography>
                            </TableCell>

                            <TableCell padding={'checkbox'} />
                            <TableCell padding={'checkbox'} />
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {rows.map((row, index) => (
                            <StyledTableRow key={index.toString()}>
                                <TableCell component="th" scope="row" className={classes.text}>{row.name}</TableCell>
                                <TableCell align="right" className={classes.text}>{row.tMax}</TableCell>
                                <TableCell align="right" className={classes.text}>{row.tMin}</TableCell>
                                <TableCell align="right" className={classes.text}>{row.hMax}</TableCell>
                                <TableCell align="right" className={classes.text}>{row.hMin}</TableCell>
                                <TableCell align="right" className={classes.text}>{row.lMax}</TableCell>
                                <TableCell align="right" className={classes.text}>{row.lMin}</TableCell>
                                <TableCell align="center" className={classes.text}>
                                    <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        className={classes.icon}
                                        onClick={() => console.log('csdscs')}>
                                        <DeleteOutlineIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="center" className={classes.text}>
                                    <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        className={classes.icon}
                                        onClick={() => console.log('csdscs')}>
                                        <CreateIcon />
                                    </IconButton>
                                </TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
export default withStyles(useStyles)(Tables);



// classes: PropTypes.object.isRequired,
// numSelected: PropTypes.number.isRequired,
// onRequestSort: PropTypes.func.isRequired,
// onSelectAllClick: PropTypes.func.isRequired,
// order: PropTypes.oneOf(['asc', 'desc']).isRequired,
// orderBy: PropTypes.string.isRequired,
// rowCount: PropTypes.number.isRequired,