import React from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
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
  & .fc-timegrid-event{
      background: #ff6961
  }
  & td.fc-event-container {
    //  border: 2px solid white !important;
  }
`;

class DoctorCalendar extends React.Component {
    state = {
        weekendsVisible: false,
        DBevents: [],
        currentEvents: [],
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/doctor_schedule/')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    DBevents: Object.keys(json).map(function (key) {
                        return {
                            id: json[key].id,
                            title: "Agendado.",
                            start: json[key].schedule_date + "T" + json[key].schedule_time,
                            end: new Date(Date.parse(json[key].schedule_date + "T" + json[key].schedule_time + "Z") + 30 * 60000).toISOString().replace(".000Z", ""),
                        }
                    })
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleWeekendsToggle = () => {
        this.setState({
            weekendsVisible: !this.state.weekendsVisible
        })
    }

    pushSchedule = async (token, selectInfo) => {
        await fetch("http://localhost:8000/api/doctor_schedule/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token["access"]}`,
            },
            body: JSON.stringify({
                schedule_date: selectInfo.dateStr.split("T")[0],
                schedule_time: selectInfo.dateStr.split("T")[1],
            })
        }).then(response => response.json())
    }

    handleDateSelect = (selectInfo) => {
        let confirm = prompt("Digite 'ok' para agendar um horário com o médico")
        const token = JSON.parse(localStorage.getItem("token"));
        let calendarApi = selectInfo.view.calendar

        if (confirm === 'ok') {
            this.pushSchedule(token, selectInfo);
            setTimeout(() => window.location.reload(false), 1000);
        } else {
            alert("Não foi confirmado.")
            calendarApi.unselect();
        }

    }


    handleEventClick = (clickInfo) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }

    render() {
        return (
            <StyledCalendar>
                <FullCalendar
                    locale={"pt-BR"}
                    ref={this.calendarComponentRef}
                    plugins={[timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'timeGridWeek'
                    }}
                    height='auto'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={this.state.weekendsVisible}
                    // initialEvents={this.state.DBevents} // alternatively, use the `events` setting to fetch from a feed
                    // slotDuration="01:00"
                    slotMinTime="08:00:00"
                    slotMaxTime="19:00:00"
                    allDaySlot={false}
                    eventContent={this.renderEventContent} // custom render function
                    // eventClick={this.handleEventClick}
                    eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                    dateClick={this.handleDateSelect}
                    events={this.state.DBevents}
                /* you can update a remote database when these fire:
                eventAdd={function () { }}
                eventChange={function () { }}
                eventRemove={function () { }}
                */
                />

            </StyledCalendar>
        )
    }
}

export default DoctorCalendar;

