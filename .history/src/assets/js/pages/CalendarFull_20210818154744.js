import {FullCalendar} from 'fullcalendar';
import 'fullcalendar.'

(function() {
    class CalendarFull {

        static async init () {
            this.addEventListeners();
            console.log('hello');
        }

        static addEventListeners () {
            let calendarEl = document.getElementById('calendar');
            let calendar = new FullCalendar.CalendarFull(calendarEl, {
                initialView: 'dayGridMonth'
            });
            calendar.render();
        }

    }

    CalendarFull.init();
})();