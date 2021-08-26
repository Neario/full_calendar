(function() {
    class Calendar {

        static async init () {
            this.addEventListeners();
        }

        static addEventListeners () {
            let calendarEl = document.querySelector('#calendar');
            let calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth'
            });
            calendar.render'
        }

    }

    Calendar.init();
})();