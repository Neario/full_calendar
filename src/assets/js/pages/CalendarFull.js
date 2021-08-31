(function () {
    class CalendarFull {

        static async init() {
            this.addEventListeners();
        }

        static addEventListeners() {
            var calendarEl = document.getElementById('calendar');
            let calendar = new Calendar(calendarEl, {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
                locale: 'fr', // mettre la langue
                firstDay: 1, // commence à Lundi
                aspectRatio: 1,
                initialView: 'dayGridMonth', //permet définir quel vue nous voulons de base
                height: '100%', // changer la hauteur
                eventColor: 'green', // definit une couleur par default , background + border
                eventBackgroundColor: 'red',
                eventDisplay: 'auto', // permet de définir l'affichage des events sur le calendrier
                displayEventEnd: true, //permet d'afficher l'heure de fin sur les évènements qui ne dure pas une journée
                dayMaxEvents: true, // permet de garder la hauteur des grilles , et d'ajouter un bouton pour afficher plus d'évènements
                eventClick: (infos) => { // quand on clic sur un évènements
                    console.log(infos.event.title);
                    alert('Coordinates: ' + infos.jsEvent.pageX + ',' + infos.jsEvent.pageY);
                    alert('View: ' + infos.view.type);
                    infos.el.style.borderColor = 'purple';
                    infos.el.style.backgroundColor = 'transparent';
                    infos.el.style.textColor = 'black';
                },
                /**
                 * Définit l'entête du calendrier aevc les bouton next prev today etc...
                 */
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


                events: this.events, // récupère les évènements en format Json [{}]
                nowIndicator: true, // trace une ligne pour savoir ou nous en sommes dans l'agenda semaine
                editable: true, // permet de drag and drop les évènements
                selectable: true, // permet de cliquer sur les dates
                
                /**
                 * permet de créer un function lorsqu'on relache le drag and drop
                 * @param {*} infos 
                 */
                eventDrop: (infos) => {
                    console.log(infos.event.start);
                    console.log(infos);
                },

                /**
                 * permet de créer une fonction lorsqu'on clique sur une date
                 * @param {*} start 
                 * @param {*} end 
                 * @param {*} jsEvent 
                 * @param {*} view 
                 */
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
            });
            calendar.render();
        }
    }
    CalendarFull.init();
})();