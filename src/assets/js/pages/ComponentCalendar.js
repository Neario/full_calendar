import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { format, eachHourOfInterval} from 'date-fns';
import {fr} from "date-fns/locale";


export class ComponentCalendar extends HTMLElement {
    static get observedAttributes() {
        return ['events'];
    }

    constructor() {
        super();
        this.calendar = "test";
        this.events = null;
    }

    async connectedCallback() {
        this.container = document.createElement('div');
        this.container.setAttribute("id", "calendar");
        this.appendChild(this.container);
        this.calendar = new Calendar(this.container, this.options);
        this.calendar.render();
    }

    async attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'events' && newValue !== null) {
            this.events = JSON.parse(newValue);
        }
    }

    get options() {
        return {
            displayEventTime : true,
            themeSystem: 'bootstrap', // thème pour les icons.
            initialView: 'dayGridMonth', // Vue par défaut de l'agenda.
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
            locale: 'fr', // Changer la langue.
            firstDay: 1, // Premier jour de la semaine à Lundi.
            headerToolbar: {
                left: 'prev next today title',
                center: 'custom1',
                right: 'dayGridMonth,timeGridWeek,listWeek'
            },
            customButtons: {
                custom1: {
                    text: 'Créer',
                    click: () => {
                        console.log("clic sur le button");
                    }
                },
            },
            buttonText: {
                today: 'Aujourd\'hui',
                list: 'Liste',
                week: 'Semaine',
                month: 'Mois'
            },
            editable: false, // Permet le drag and drops , resize les events allday.
            events: this.events, // Récupèrent la liste des évents.
            eventDisplay: 'block', // Tous les events ce placent en format block.
            eventColor: 'green', // Couleur par défaut des évènements.
            selectAllow: function(selectInfo) {
      
                if(eachHourOfInterval({start :selectInfo.start, end: selectInfo.end}).length === 2) {
                    console.log('bonne heure');
                    return true;
                }
                else{
                    console.log('mauvaise heure');
                    return false;
                }
              },
            views: {
                dayGridMonth: {
                    aspectRatio: 1.85, // Ratio agenda hauteur / witdh.
                    dayMaxEvents: true,// permet de garder la hauteur des grilles , et d'ajouter un bouton pour afficher plus d'évènement
                    displayEventEnd: true,
                    dayHeaderFormat: {weekday: 'long'},
                    //selectable: true, // Permet de cliquer sur le calendrier ...
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

                },
                timeGridWeek:{
                    contentHeight: 800,
                    firstDay: 1,
                    titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' },
                    allDaySlot: false,
                    slotMinTime:"08:00:00",
                    slotMaxTime:"21:00:00",

                    dayHeaderContent: function(date, text) {
                        const dayLong = format(date.date,'iiii', {locale: fr})
                        const month = format(date.date,'dd MMM', {locale: fr})
                        return {html : `${dayLong} <br> ${month}`} ;
                    },
                    slotDuration: '01:00:00',
                    dayMaxEvents: true,
                    aspectRatio: 2,
                    expandRows: true,
                    selectable: true,
                    selectOverlap: false,
                    select: function(info) {
                        //console.log(info);
                        this.addEvent({title : "test", start: info.start, end: info.end});
                        this.unselect();
                        if(eachHourOfInterval({start :info.start, end: info.end}).length === 2) {
                            console.log('bonne heure');
                        }
                        else{
                            console.log('mauvaise heure');
                        }
                    },
                    selectAllow: function(selectInfo) {
      
                        if(eachHourOfInterval({start :selectInfo.start, end: selectInfo.end}).length === 2) {
                            console.log('bonne heure');
                            return true;
                        }
                        else{
                            console.log('mauvaise heure');
                            return false;
                        }
                      },
                }
            }
        }
    }
}