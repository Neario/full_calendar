import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export class CompponentCalendar extends HTMLElement {
    static get observedAttributes () {
        return [];
    }

    constructor () {
        super();
        this.root = this.attachShadow({ mode: "open" });
        this.calendar = null;
    }

    async connectedCallback () {
        this.container = document.createElement('div')
        this.root.appendChild(this.container);
        this.calendar = new Calendar(this.container, this.options)
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
    ];
    calendar.render();
}

    async attributeChangedCallback (name, oldValue, newValue) {
        
    }

    get options() {
        return {
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
            locale: 'fr',
            firstDay: 1,
            initialView: 'dayGridMonth',
            eventBackgroundColor: 'blue',
            dayMaxEvents: true,
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
            editable: true,
            selectable: true,
            select: function (start, end, jsEvent, view) {
                let abc = prompt('Entrer le titre');
                let newEvent = new Object();
                newEvent.title = abc;
                newEvent.allDay = false;
                newEvent.start = start.start
                console.log(start.start);
                if ( newEvent.title !== null) {
                    if (newEvent.title.length >= 1) {
                        calendar.addEvent({
                            title: newEvent.title,
                            start : newEvent.start,
                            allDay: newEvent.allDay
                        })                        
                    } 
                }
            }
        }
    }
}