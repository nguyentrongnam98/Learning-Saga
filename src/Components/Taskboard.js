import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'
import styles from '../styles/styles'
import Grid from '@material-ui/core/Grid';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import {toast} from 'react-toastify'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as taskActions from '../actions/task'
// import AddCircleIcon from '@material-ui/icons/AddCircle';
const status = [
    {
        value:0,
        name:'READY'
    },
    {
        value:1,
        name:'IN PROGRESS'
    },
    {
        value:2,
        name:'COMPLETE'
    }
]
const listTask = [
    {
        id:1,
        title:'Read book',
        description:'Read material ui book',
        status:0
    },
    {
        id:2,
        title:'Play football',
        description:'With my friend',
        status:2
    },
    {
        id:3,
        title:'Go to school',
        description:'With my friend',
        status:1
    }
]
class Taskboard extends Component {
    constructor(props){
        super(props)
        this.state = {
          open:true
        }
    }
    renderBoard(){
        const {listTask} = this.props
        const xhtml = (
            <Grid container spacing={2}>
               {status.map((s ,index)=> {
                   const filterTask = listTask.filter(task => task.status === s.value)
                   return <TaskList key={index} s={s} filterTask={filterTask} index={index}></TaskList>
               })}
            </Grid>
        )
        return xhtml;
    }
    handleClose = () => {
        this.setState({
            open:false
        })
    }
    renderForm(){
        let xhtml = null
        xhtml = (
           <TaskForm opent={this.state.open} handleClose={this.handleClose}/>
        )
        return xhtml;
    }
    openForm = () => {
        this.setState({
            open:true
        })
    }
    componentDidMount(){
        const {taskAction} = this.props;
        const {fetchListTaskRequest} = taskAction
        fetchListTaskRequest()
    }
    showToast=()=>{
    //    toast.success('Thanh cong')
    }
    render() {
        const {classes} = this.props
        return (
            <div className={classes.taskboard}>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.openForm}>
                 Them cong viec
            </Button>
            <Box ml={1}>
               <Button variant="contained" color="primary" onClick={this.showToast}>
                   Hien thi thong bao
               </Button>
            </Box>
            {this.renderBoard()}
            {this.renderForm()}
            </div>
        )
    }
}
const mapStateToProps = state => {
   return {
       listTask:state.taskReducer.listTask
   }
}
const mapDispatchToProps = dispatch => {
  return {
      taskAction:bindActionCreators(taskActions,dispatch)
  }
}
export default withStyles(styles)
(
    connect(mapStateToProps
        ,mapDispatchToProps
        )(Taskboard)
)        