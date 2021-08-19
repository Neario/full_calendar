(function() {
    class CalendarFull {

        static async init () {
            this.addEventListeners();
            console.log('hello');
        }

        static addEventListeners () {
            var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
              initialView: 'dayGridDA'
            });
            calendar.render();
        }

    }

    CalendarFull.init();
})();