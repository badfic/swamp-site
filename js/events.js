import './common';
import $ from 'jquery';
import './format-google-calendar';

$(function () {
    var calendarApiKey = "AIzaSyAJGYBDJIv7s7Q--SD3WkHlmtangadG4OM";
    formatGoogleCalendar.init({
        calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/umotr059c8u9lurcbucsdcjcu8@group.calendar.google.com/events?key=' + calendarApiKey,
        past: false,
        upcoming: true,
        sameDayTimes: true,
        dayNames: true,
        pastTopN: -1,
        upcomingTopN: 5,
        itemsTagName: 'div',
        upcomingSelector: '#events-upcoming',
        pastSelector: '#events-past',
        recurringEvents: true,
        upcomingHeading: '<a href="https://calendar.google.com/calendar/embed?src=umotr059c8u9lurcbucsdcjcu8%40group.calendar.google.com&ctz=America%2FLos_Angeles">View the full Swamp Calendar here</a>',
        pastHeading: '<h2>Past events</h2>',
        format: ['*summary*', '*date*', '*description*', '*location*',],
        timeMin: '2016-06-03T10:00:00-07:00',
        timeMax: '2021-06-03T10:00:00-07:00'
    });
});