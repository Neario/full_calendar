import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

(function() {
    class CalendarFull {

        static async init () {
            this.addEventListeners();
            console.log('hello');
        }

        static addEventListeners () {
            var calendarEl = document.getElementById('calendar');
            var calendar = new Calendar(calendarEl, {
              initialView: 'dayGridMonth'
            });
            calendar.render();
        }

    }

    CalendarFull.init();
})();