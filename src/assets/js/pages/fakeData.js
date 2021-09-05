const events = [
{
    title: "Rendez-vous",
    start: "2021-09-01 12:00:00",
    end: "2021-09-01 13:00:00",
    color: 'blue',
},
{
    title: "etude",
    start: "2021-08-18 09:00:00",
},
{
    title: "encore",
    start: "2021-09-01 15:00:00",
},
{
    title: "AllDay",
    start: "2021-09-14 16:30:00",
    end: "2021-09-16 15:30:00",
    allDay: true
},
{
    start: '2021-09-14',
    end: '2021-09-16',
    overlap: false,
    display: 'background',
    color: '#dddd'
  }];

const calendar = document.body.querySelector('full-calendar')
calendar.setAttribute('events',JSON.stringify(events))
