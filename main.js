import './src/assets/css/style.css';

//import './src/assets/js/pages/CalendarFull';
import '@fortawesome/fontawesome-free/js/all'
import {ComponentCalendar} from './src/assets/js/pages/ComponentCalendar';
import './src/assets/js/pages/fakeData';

customElements.define('full-calendar', ComponentCalendar);