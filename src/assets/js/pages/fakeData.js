const events = [
{
    title: "Rendez-vous",
    start: "2021-09-01 12:00:00",
    end: "2021-09-01 13:00:00",
    color: 'blue',
},
{
    title: "repos",
    start: "2021-09-04 12:30:00",
    end: "2021-09-04 13:00:00",
},
{
    title: "etude",
    start: "2021-08-18 09:00:00",
},
{
    title: "encore",
    start: "2021-09-01 15:30:00",
},
{
    title: "AllDay",
    start: "2021-09-14 16:30:00",
    end: "2021-09-16 15:30:00",
    allDay: true
}];

const calendar = document.body.querySelector('full-calendar')
calendar.setAttribute('events',JSON.stringify(events))
