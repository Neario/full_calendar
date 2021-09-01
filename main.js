import './src/assets/css/style.css';
import "tailwindcss/tailwind.css";


import '@fortawesome/fontawesome-free/js/all';
import {ComponentCalendar} from './src/assets/js/pages/ComponentCalendar';
import './src/assets/js/pages/fakeData';
import './src/assets/js/pages/SelectChoice'

customElements.define('full-calendar', ComponentCalendar);