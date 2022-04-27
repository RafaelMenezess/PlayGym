import React from 'react'
import Calendar from '../../components/Calendar/Calendar';

function Main() {
    return (
        <div className='calendar-container'>
            <div className="container-fluid text-center">
                <div class="row content">
                    <div class="col-sm-10 text-left">
                        <Calendar />
                    </div>
                    <div class="col-sm-2 sidenav">
                        <div class="well">
                            <h3>NOTICIAS</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printening Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div class="well">
                            <h3>AVISOS</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarr.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;
