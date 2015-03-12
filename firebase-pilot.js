(function() {
  'use strict';

  var logOnBtn = document.createElement('section');
  logOnBtn.id = 'gh_logon';
  logOnBtn.className = 'ion-social-github';

  var ref = new Firebase('https://elkorn-workshops.firebaseio.com/react/presentation/slide');
  var isConductor = window.location.search === '?conduct';

  function logOn() {
    ref.authWithOAuthPopup('github', function(error, authData) {
      if (error) {
        console.log('Logon Failed!', error);
      } else {
        console.log('Authenticated successfully');
        logOnBtn.remove();
      }
    });
  }

  if (isConductor) {
    var originalReplace = window.history.replaceState;
    ref.set('#1');
    window.history.replaceState = function() {
      ref.set(arguments[2]);
      originalReplace.apply(window.history, arguments);
    };

    if (ref.getAuth() === null) {
      document.body.appendChild(logOnBtn);
      logOnBtn.addEventListener('click', logOn);
    }
  } else {
    ref.on('value', function(snapshot) {
      var position = parseInt(snapshot.val().replace('#', ''), 10) - 1;
      var prevSlide = document.querySelector('.slide:not(.hidden)');
      var prevPosition = currentPosition();
      document.getElementById('slide-1').classList.remove('hidden');
      if (prevPosition !== 1) {
        prevSlide.classList.add('hidden');
      }

      navigate(position);
    });
  }
}());
