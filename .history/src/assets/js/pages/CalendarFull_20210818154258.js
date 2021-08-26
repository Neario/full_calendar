import {FullCalendar} from 'fullcalendar';

(function() {
    class CalendarFull {

        static async init () {
            this.addEventListeners();
            console.log('hello');
        }

        static addEventListeners () {
            let calendar = document.getElementById('calendar');
        }

    }

    CalendarFull.init();
})();