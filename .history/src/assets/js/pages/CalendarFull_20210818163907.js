import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

(function() {
    class CalendarFull {

        static async init () {
            this.events = [{
                "title": "full calendar"
                ''
            }]
            this.addEventListeners();
            console.log('hello');
        }

        static addEventListeners () {
            var calendarEl = document.getElementById('calendar');
            let calendar = new Calendar(calendarEl, {
                plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
                locale: 'fr',
                initialView: 'dayGridMonth',
                headerToolbar: {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,listWeek'
                }
              });
            calendar.render();
        }

    }

    CalendarFull.init();
})();