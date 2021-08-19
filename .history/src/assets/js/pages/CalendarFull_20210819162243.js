import { Calendar, render } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

(function () {
    class CalendarFull {

        static async init() {
            this.events = [{
                title: "full calendar",
                start: "2021-08-18 09:00:00",
                allDay: true
            },
            {
                "title": "repos",
                "start": "2021-08-18 12:30:00",
                "end": "2021-08-18 13:00:00",
            }]
            this.addEventListeners();
            console.log('hello');
        }

        static addEventListeners() {
            var calendarEl = document.getElementById('calendar');
            let calendar = new Calendar(calendarEl, {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
                locale: 'fr',
                aspectRatio: 3,
                height: '100%',
                eventColor:'green',
                eventDisplay: 'auto',
                eventBackgroundColor: 'red', 
                displayEventEnd: true,
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
                selectable: true,
                dayHeaderClassNames: "test",
                eventDrop: (infos) => {
                    console.log(infos);
                },
                eventDrop: (infos) => {
                    console.log(infos.event.start);
                },
                select: function(info) {
                    console.log('selected ' + info.resource);
                  }
            });
            calendar.render();
        }

    }

    CalendarFull.init();
})();