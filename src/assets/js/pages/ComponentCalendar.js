import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export class ComponentCalendar extends HTMLElement {
    static get observedAttributes () {
        return ['events'];
    }

    constructor () {
        super();
        this.calendar = "test";
        this.events = null;
    }

    async connectedCallback () {
        this.container = document.createElement('div');
        this.container.setAttribute("id", "calendar");
        this.appendChild(this.container);
        this.calendar = new Calendar(this.container, this.options);
        this.calendar.render();
}

    async attributeChangedCallback (name, oldValue, newValue) {
        if (name === 'events' && newValue !== null) {
            this.events = JSON.parse(newValue);
        }
    }

    get options() {
        return {
            themeSystem: 'bootstrap', // thème pour les icons.
            initialView: 'dayGridMonth', // Vue par défaut de l'agenda.
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
            locale: 'fr', // Changer la langue.
            firstDay: 1, // Premier jour de la semaine à Lundi.
            aspectRatio: 1.85, // Ratio agenda hauteur / witdh.
            eventColor: 'green', // Couleur par défaut des évènements.
            dayMaxEvents: true,
            headerToolbar: {
                left: 'prev next today title',
                center: 'custom1',
                right: 'dayGridMonth,timeGridWeek,listWeek'
            },
            buttonText: {
                today: 'Aujourd\'hui',
                list: 'Liste',
                week: 'Semaine',
                month: 'Mois'
            },
            customButtons: {
                custom1: {
                    text: 'Créer',
                    click: () => {
                        console.log("clic sur le button");
                    }
                },
            },
            displayEventEnd: true,
            eventDisplay: 'block',
            events: this.events,
            editable: true,
            selectable: true,
            select: function (start, end, jsEvent, view) {
                let abc = prompt('Entrer le titre');
                let newEvent = new Object();
                newEvent.id = 4;
                newEvent.title = abc;
                newEvent.allDay = true;
                newEvent.start = start.start
                if (newEvent.title.length >= 1) {
                    this.addEvent(newEvent);
                }                
            }
        }
    }
}