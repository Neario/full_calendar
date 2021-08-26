import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
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
                "start": "2021-08-18 12:00:00",
                "end": "2021-08-18 13:00:00",
                "backgroundColor": "#839c49"
            }]
            this.addEventListeners();
            console.log('hello');
        }

        static addEventListeners() {
            var calendarEl = document.getElementById('calendar');
            let calendar = new Calendar(calendarEl, {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
                locale: 'fr',
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,listWeek'
                },
                buttonText: {
                    today: 'Aujourd\'hui',
                    list: 'Liste',
                    week: 'Semaine',
                    month: 'Mois'
                },
                events: this.events,
                nowIndicator: true,
                editable: true,
                eventDrop: 
            });
            calendar.render();
        }

    }

    CalendarFull.init();
})();