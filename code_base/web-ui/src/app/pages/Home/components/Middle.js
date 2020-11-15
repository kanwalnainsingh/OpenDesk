import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import {toAbsoluteUrl} from '../../../utils/utils'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid , GridItem } from '@bigcommerce/big-design';
import BusinessIcon from '@material-ui/icons/Business';
const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    textAlign: 'center',
    boxShadow: 'none',
  },
  mediaContainter: {
    verticalAlign:'top',
    textAlign:'center',
    maxWidth: '100%',
  },
  media: {
      margin:'auto',
      width: '50%',
    alignContent: 'center'
  },
});

export default function Middle() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <div className={classes.mediaContainter}>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Opendesk"
          src={toAbsoluteUrl("/media/home/branding-red.png")}
          title="Opendesk"
        />
        </div>
    
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Office desk booking for work-from-home Employees
          </Typography>
          <Typography>
          <Button size="medium" color="inherit" style={{fontWeight: 'bold'}} >
          More
        </Button>
          </Typography>
          <Typography style={{color:"#f66c74"}}>
          <ExpandMoreIcon/>
          </Typography>

          <Grid gridColumns="repeat(2, 1fr)">
          <GridItem>
          </GridItem>
          <GridItem>
          </GridItem>

        </Grid>

        </CardContent>
      <CardActions>      
      </CardActions>
    </Card>
  );
}