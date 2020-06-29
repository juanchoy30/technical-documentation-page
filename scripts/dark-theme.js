// This script makes the dark theme

$("button#dark-theme-button").click(function() {
  $("#main-doc").addClass('dark-theme');
  $("#navbar").addClass('dark-theme');
  $("button#light-theme-button").removeClass('hiddenFromPage');
  $("button#dark-theme-button").addClass('hiddenFromPage');
});

$("button#light-theme-button").click(function() {
  $("#main-doc").removeClass('dark-theme');
  $("#navbar").removeClass('dark-theme');
  $("button#dark-theme-button").removeClass('hiddenFromPage');
  $("button#light-theme-button").addClass('hiddenFromPage');
});