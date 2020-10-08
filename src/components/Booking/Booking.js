import React, { useContext, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import fakeData from '../data.json';
import './Booking.css';
import {Container,Row,Col} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  inputDatePicker:{
    width:'46%',
    marginLeft:'6px',
    backgroundColor:'whitesmoke'
  },
  dateInput:{
    marginLeft:'20px'
  }
}));

const Booking = () => {
    const classes = useStyles();
    // ---handle useParams and fakeData-----------------------
    const {numId} = useParams()
    const {state2} = useContext(UserContext);
    const [booking,setBooking] = state2;
    const checkId = fakeData.find( data => data.id == numId);
    const {title,detail} = checkId;
    setBooking(checkId)
    // handle booking-----------------------------------------
    const history = useHistory()
    const { register, handleSubmit, watch, errors } = useForm();
    const handleBooking = () => {
        history.push('/room')  
    }

    //  datePicker---------------------------------------------
    const [selectedDate, setSelectedDate] = useState(new Date('2020-09-21T21:11:54'));
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const [selectedAndDate, setSelectedAndDate] = useState(new Date('2020-09-21T21:11:54'));
    const handleDateAnd = (date) => {
      setSelectedAndDate(date);
    };

    return (
        <section style={{height:' 700px'}}>
           <div className="overlay">  
         <Container>
            <Row>
            <Col className='detail'><div><h1 className='destination'>{title}</h1> <br/> <small style={{fontSize:'119%'}}>{detail}</small></div></Col>
                    <Col className="booking_container">
                    <form onSubmit={handleSubmit(handleBooking)}>
                      <br/>
                      <h6 className="fromText">Origan</h6>
                     <input className="bookingInput" name="text"  ref={register({ required: true })} placeholder="Dhaka" />
                     {errors.text && <span className="error">Origan is required</span>}
                     <h6 className="fromText">destination</h6>
                     <input className="bookingInput"  name="name" ref={register({ required: true })} placeholder="SUNDARBAN" />
                     {errors.name && <span className="error">destination is required</span>}
                     
                  <Row>
                  <Col className="fromText">From</Col>
                    <Col className="fromText">To</Col>
                  </Row>
                    <MuiPickersUtilsProvider className={classes.datePicker} utils={DateFnsUtils}>
                        <Grid >
                          <KeyboardDatePicker className={classes.inputDatePicker} 
                            disableToolbar
                            variant="inline"
                            format="MM/dd"
                            margin="normal"
                            label="Start"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                              
                            }}
                          />
                          <KeyboardDatePicker className={classes.dateInput} className={classes.inputDatePicker}
                            margin="normal"
                            id="date-picker-dialog"
                            label="And"
                            format="MM/dd"
                            value={selectedAndDate}
                            onChange={handleDateAnd}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                        </Grid>
                      </MuiPickersUtilsProvider>
                    <input className="submitFrom" type="submit" value="Booking"/>
                    </form>
                </Col>
            </Row>
            </Container> 
         </div> 
         </section> 
    );
};

export default Booking;

