import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import styles from './style'
import TaskItem from '../TaskItem';
class TaskList extends Component {
    render() {
        const {classes , s , filterTask } = this.props
        return (
            <Grid item md={4} xs={12}>
                                 <Box mt = {2} mb={2}>
                                 <div className={classes.status}>{s.name}</div>
                                 </Box>
    
                                 <div className={classes.wrapperList}>
                                {
                                    filterTask.map(task => {
                                        return <TaskItem task={task} s={s} key={task.id}/>
                                    })
                                }
                             </div>
                             </Grid>
        )
    }
}

export default (withStyles)(styles)(TaskList)
