import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';
// styles
import { withStyles } from '@material-ui/core/styles';
import useStyles from "./style";

function BigTitle(props) {
    const { classes, action, showAction, actionClose, disabledAction } = props;

    return (
        <>
            <Container maxWidth={false} className={classes.container}>
                <Grid container  >
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        item
                        xs={8}
                        sm={6}    >
                        <Typography component="h1" variant="h4" align="left" noWrap className={classes.tittle}>
                            {props.title}
                        </Typography>
                    </Grid>
                    {showAction && <Grid container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                        item
                        xs={4}
                        sm={6}  >
                        <IconButton
                            aria-label="expand row"
                            className={classes.iconCancel}
                            disabled={disabledAction}
                            onClick={actionClose}>
                            <CloseIcon />
                        </IconButton>
                        <IconButton
                            aria-label="expand row"
                            className={classes.icon}
                            onClick={action}>
                            <FilterListIcon />
                        </IconButton>
                    </Grid>}
                </Grid>
            </Container>
        </>
    );
};
export default withStyles(useStyles)(BigTitle);
