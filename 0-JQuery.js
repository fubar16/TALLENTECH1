
// jQuery     # <- (used for id within HTML)
$('#flashMessage').hide().slideDown(1000).delay(3000).slideUp();

//document.querySelector('.profile-header').style.display = 'none';

// get value from form input field
$('button').click(function() {
    // Write code here
    let newName = $('#name-input').val();
    $('.profile-name').text(newName);
  });
  