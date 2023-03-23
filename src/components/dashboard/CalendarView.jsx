import React from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'


const localizer = momentLocalizer(moment)

//hardcoded placeholder
const events = [
    {
        title: "Client haircut",
        start: new Date(2023, 1, 25, 12, 0),
        end: new Date(2023, 1, 25, 12, 30),
        desc: 'LOL'
    },
    {
        title: "Client haircut",
        start: new Date(2023, 1, 28, 13, 0),
        end: new Date(2023, 1, 28, 13, 30),
    },
    {
        title: "Client haircut",
        start: new Date(2023, 1, 29, 13, 0),
        end: new Date(2023, 1, 29, 13, 30),
    },
];


export default function CalendarView() {
  return (
    <div style={{height:"600px"}}>
    <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end"/>
    </div>
  )
}
