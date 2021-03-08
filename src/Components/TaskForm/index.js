import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'
import styles from './styles'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class TaskForm extends Component {
    render() {
        const {opent,handleClose, classes} = this.props;
        return (
            <Dialog open={opent} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
            <TextField
        id="filled-secondary"
        label="Filled secondary"
        className={classes.TextField}
      />
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax={4}
        />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
        )
    }
}

export default (withStyles)(styles)(TaskForm)