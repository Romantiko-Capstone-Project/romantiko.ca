import React from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useEffect,useState } from 'react'
import axios from 'axios'

const localizer = momentLocalizer(moment)


//hardcoded placeholder
const events = [
    {
        title: "Patrick",//client name
        start: new Date(2023, 1, 25, 12, 0),
        end: new Date(2023, 1, 25, 12, 30),
        desc: 'Fade cut'//service type
    },
    {
        title: "Mohammad",
        start: new Date(2023, 1, 28, 13, 0),
        end: new Date(2023, 1, 28, 13, 30),
        desc: 'Beard Trim'
    },
    {
        title: "JR",
        start: new Date(2023, 1, 29, 13, 0),
        end: new Date(2023, 1, 29, 13, 30),
        desc: 'Buzz Cut'
    },
];


export default function CalendarView() {
  return (
    <div style={{height:"600px"}}>
    <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end"/>
    </div>
  )
}