import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

(function () {
    class CalendarFull {

        static async init() {
            this.events = [{
                "title": "full calendar",
                "start": "2021-08-18 09:00:00",
                "end": "2021-08-18 17:00:00"
            },
            {
                "title": "repos",
                "start": "2021-08-18 09:00:00",
                "end": "2021-08-18 17:00:00"
            }]
            this.addEventListeners();
            console.log('hello');
        }

        static addEventListeners() {
            var calendarEl = document.getElementById('calendar');
            let calendar = new Calendar(calendarEl, {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
                locale: 'fr',
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,listWeek'
                },
                events: this.events
            });
            calendar.render();
        }

    }

    CalendarFull.init();
})();