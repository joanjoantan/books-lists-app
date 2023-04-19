import { CircularProgress, Grid } from '@mui/material';

const Loading = () => {
  return (
    <Grid container justifyContent="center">
      <CircularProgress size="10rem" />
    </Grid>
  );
};

export default Loading;
