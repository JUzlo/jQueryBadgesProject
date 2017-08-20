$(function () {

  $.ajax({
    url: 'https://www.codeschool.com/users/ssyys.json',
    dataType: 'jsonp',
    success: function (response) {
      response.courses.completed.forEach(function (entry) {
        var completedCourse = $('<div class="course"></div>');
        completedCourse.append($('<h3>' + entry.title + '</h3>'));
        completedCourse.append($('<img src="' + entry.badge + '"/>'));
        completedCourse.append($('<a class="btn & btn-primary" href="' + entry.url + '" target="_blank">See Course</a>'));
        $('#badges').append(completedCourse);

      })
    }
  });
});
