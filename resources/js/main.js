document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#datetimepicker1", {
    wrap: true,
    dateFormat: "Y/m/d",
    locale: "ja",
    monthSelectorType: "static",
  });
  flatpickr("#datetimepicker2", {
    wrap: true,
    dateFormat: "Y/m/d",
    locale: "ja",
    monthSelectorType: "static",
  });
  flatpickr("#timepicker1", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
  });
  flatpickr("#timepicker2", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
  });
});
