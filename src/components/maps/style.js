const useStyles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#ffffff',
    color: 'white',
    fontFamily: 'Century-Gothic',
  },
  container: {
    direction: "column",
    justify: "center",
    alignItems: "stretch",
    //backgroundColor: 'red',
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
  },
});
export default useStyles;