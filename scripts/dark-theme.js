$("#dark-theme-button").click(function() {
    $("#main-doc").addClass('dark-theme');
    $("#navbar").addClass('dark-theme');
  });
  $("#light-theme-button").click(function() {
    $("#main-doc").removeClass('dark-theme');
    $("#navbar").removeClass('dark-theme');
  });