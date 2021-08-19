var fullcalendar = require ('fullcalendar');

(function() {
    class CalendarFull {

        static async init () {
            this.addEventListeners();
            console.log('hello');
        }

        static addEventListeners () {
            var calendarEl = document.getElementById('calendar');
            var calendar = new fullcalendar.Calendar(calendarEl, {
              initialView: 'dayGridMonth'
            });
            calendar.render();
        }

    }

    CalendarFull.init();
})();