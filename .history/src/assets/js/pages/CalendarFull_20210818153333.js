(function() {
    class CalendarFull {

        static async init () {
            this.addEventListeners();
            console.log('hello');
        }

        static addEventListeners () {
            let calendarEl = document.querySelector('#calendar');
            let calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth'
            });
            calendar.render();
        }

    }

    CalendarFull.init();
})();