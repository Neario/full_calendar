const events = [
{
    title: "Repas",
    start: "2021-08-18 12:00:00",
    end: "2021-08-18 13:00:00",
    allDay: false,
    color: 'blue',
},
{
    title: "repos",
    start: "2021-08-18 12:30:00",
    end: "2021-08-18 13:00:00",
},
{
    title: "etude",
    start: "2021-08-18 09:00:00",
},
{
    title: "encore",
    start: "2021-08-18 15:30:00",
    allDay: false
},
{
    title: "et toujours",
    start: "2021-08-18 16:30:00",
    allDay: false
}];

const calendar = document.body.querySelector('full-calendar')
calendar.setAttribute('events',JSON.stringify(events))
