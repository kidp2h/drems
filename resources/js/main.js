document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#datetimepicker1", {
    wrap: true,
    dateFormat: "Y/m/d",
    locale: "ja",
    monthSelectorType: "static",
  });
  flatpickr("#timepicker1", {
    locale: "ja",
    noCalendar: true,
    enableTime: true,
    dateFormat: "h:i",
  });
});
