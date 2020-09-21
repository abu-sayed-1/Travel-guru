import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import fakeData from '../data.json';
import './Booking.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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


const useStyles = makeStyles((theme) => ({
  inputDatePicker:{
    width:'46%',
    marginLeft:'6px',
    backgroundColor:'whitesmoke'
  }
}));

 
const Booking = () => {
  const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(new Date('2020-09-21T21:11:54'));
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const [selectedAndDate, setSelectedAndDate] = useState(new Date('2020-09-21T21:11:54'));
    const handleDateAnd = (date) => {
      setSelectedAndDate(date);
    };

    const {numId} = useParams()
    const allNum = fakeData.find( fd => fd.id == numId);
    const {title,detail} = allNum;

    const history = useHistory();
    const handleBooking = (numId) => {
         history.push(`/booking/${numId}`);
        console.log('booking is ok',numId)
    };
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = () => {
        console.log('booking submitted');
    }
    return (
        <section>
           <div className="overlay">  
         <Container className='main_container'>
            <Row>
       
            <Col className='detail'><div><span className='title'>{title}</span> <br/> {detail}</div></Col>
                    <Col className="start_booking">
                    <form className='bookingSub' onSubmit={handleSubmit(onSubmit)}>
                        <br/>
                      <h6 className="fromText">Origan</h6>
                     <input className="bookingSubInput" name="text"  ref={register({ required: true })} placeholder="Dhaka" />
                     {errors.text && <span className="error">first name is required</span>}
                     <h6 className="fromText">destination</h6>
                     <input className="bookingSubInput"  name="name" ref={register({ required: true })} placeholder="Cox's Bazar" />
                     {errors.name && <span className="error">first name is required</span>}
                  <Row>
                  <Col className="fromText">From</Col>
                     <Col className="fromText">To</Col>
                  </Row>
                    <MuiPickersUtilsProvider className={classes.datePicker} utils={DateFnsUtils}>
                        <Grid >
                          <KeyboardDatePicker  className={classes.inputDatePicker} 
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
                          <KeyboardDatePicker className={classes.inputDatePicker}
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
