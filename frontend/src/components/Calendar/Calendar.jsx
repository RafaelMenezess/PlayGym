import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import styled from "styled-components";
import "./Calendar.css";


const StyledCalendar = styled.div`
  margin: 0 10vw;
  & .fc-unthemed {
    box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.8);
    background: #81b4b4;
    font-family: sans-serif;
    h2 {
      font-weight: 200;
    }
    .fc-left {
      margin: 2%;
      // border: 1px solid red;
    }
  }
  & td.fc-event-container {
    //  border: 2px solid white !important;
  }
`;

class Calendar extends React.Component {
    state = {
        weekendsVisible: true,
        currentEvents: []
    }

    handleWeekendsToggle = () => {
        this.setState({
            weekendsVisible: !this.state.weekendsVisible
        })
    }

    handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }

    handleEventClick = (clickInfo) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }

    handleEvents = (events) => {
        this.setState({
            currentEvents: events
        })
    }

    renderEventContent(eventInfo) {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        )
    }

    renderSidebarEvent(event) {
        return (
            <li key={event.id}>
                <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
                <i>{event.title}</i>
            </li>
        )
    }

    render() {
        return (
            <StyledCalendar>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth'
                    }}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={this.state.weekendsVisible}
                    initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                    select={this.handleDateSelect}
                    eventContent={this.renderEventContent} // custom render function
                    eventClick={this.handleEventClick}
                    eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                    eventAdd={this.handleDateSelect}
                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}
                */
                />
            </StyledCalendar>
        )
    }
}
export default Calendar;
