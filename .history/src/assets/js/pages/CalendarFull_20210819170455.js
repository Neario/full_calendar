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
                title: "Repas",
                start: "2021-08-18 13:30:00",
                allDay: false
            },
            {
                "title": "repos",
                "start": "2021-08-18 12:30:00",
                "end": "2021-08-18 13:00:00",
            },
            {
                title: "etude",
                start: "2021-08-18 14:30:00",
                allDay: false
            },
            {
                title: "encore",
                start: "2021-08-18 15:30:00",
                allDay: false
            },
            {
                title: "et toujours",
                start: "2021-08-18 16:30:00",
                allDay: false
            },
        
        ]
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
                eventColor: 'green',
                eventDisplay: 'auto',
                eventBackgroundColor: 'red',
                displayEventEnd: true,
                dayMaxEvents: true,
                eventClick: (infos) => {
                    console.log(infos.event.title);
                    alert('Coordinates: ' + infos.jsEvent.pageX + ',' + infos.jsEvent.pageY);
                    alert('View: ' + infos.view.type);
                    infos.el.style.borderColor = 'purple';
                    infos.el.style.backgroundColor = 'transparent';
                    infos.el.style.textColor = 'black';
                },
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
                select: function (start, end, jsEvent, view) {
                    console.log('click');
                    console.log(start);
                    let abc = prompt('Entrer le titre');
                    let newEvent = new Object();
                    newEvent.title = abc;
                    newEvent.allDay = true;
                    newEvent.start = start
                    calendar.addEvent({
                        title: newEvent.title,
                        start : newEvent.start,
                        
                    })
                }
            });
            calendar.render();
        }

    }

    CalendarFull.init();
})();