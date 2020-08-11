import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// styles
import { withStyles } from '@material-ui/core/styles';
import useStyles from "./style";

function BigTitle(props) {
    const { classes } = props;
    return (
        <>
            <Container maxWidth={false} className={classes.container}>
                <Grid container spacing={3}>
                    <Grid className={classes.containerTittle}>
                        <Typography component="h1" variant="h2" align="left" className={classes.tittle}>
                            {props.title}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
export default withStyles(useStyles)(BigTitle);
