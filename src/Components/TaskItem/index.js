import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'
import styles from './styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import CardActions from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon'
class TaskItem extends Component {
    render() {
        const {task, classes,s} = this.props;
        return (
            <Card key={task.id} className={classes.card}>
            <CardContent>
                 <Grid container justify="space-between">
                      <Grid item md={8} component="h1">
                          <Typography>
                              {task.title}
                          </Typography>
                      </Grid>
                      <Grid item md={4}>
                          {
                              s.name
                          }
                      </Grid>
                 </Grid>
                 <p>{task.description}</p>
            </CardContent>
            <CardActions className={classes.cardaction}>
                <Fab color="primary" aria-label="Edit" className={classes.fab} size="small">
                     <Icon fontSize="small">
                          add_circle
                     </Icon>
                </Fab>
                <Fab color="primary" aria-label="Edit" className={classes.fab} size="small">
                     <Icon fontSize="small">
                        Xoa
                     </Icon>
                </Fab>
            </CardActions>
        </Card>
        )
    }
}

export default withStyles(styles)(TaskItem);