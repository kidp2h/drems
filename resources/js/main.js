document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#datetimepicker1", {
    wrap: true,
    dateFormat: "Y/m/d",
    locale: "ja",
    allowInput: true,
    monthSelectorType: "static",
  });
});
