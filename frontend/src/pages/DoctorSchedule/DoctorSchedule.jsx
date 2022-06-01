import React from 'react'
import DoctorCalendar from '../../components/Calendar/DoctorCalendar';
import "./DoctorSchedule.css";


function DoctorSchedule() {
    return (
        <div className='calendar-container'>
            <div className="container-fluid text-center">
                <div className="row content">
                    <div className="col-sm-10 text-left">
                        <DoctorCalendar />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DoctorSchedule;
