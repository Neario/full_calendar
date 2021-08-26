

(function() {
    class CalendarFull {

        static async init () {
            this.addEventListeners();
            console.log('hello');
        }

        static addEventListeners () {
            var calendarEl = document.getElementById('calendar');
            var calendar = new F.Calendar(calendarEl, {
              initialView: 'dayGridMonth'
            });
            calendar.render();
        }

    }

    CalendarFull.init();
})();