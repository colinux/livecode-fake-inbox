"use strict"; // Do not remove

function hasNewMessage() {
  // return true with a probability of 20%.
  return Math.random() < 0.2;
}

function sample(array) {
  // return a sample element in an array
  return array[Math.floor(Math.random() * array.length)];
}

function newMessage() {
  // return a new random message with a sender and a subject
  var senders = ["Paul Eric", "Georges Abitbol", "Casimir"];
  var subjects = ["comment ça va?", "Tu me dois 5€", "On fait quoi ce WE ?"];

  return {
    sender: sample(senders),
    subject: sample(subjects)
  };
}

// append a message in the inbox DOM
function appendMessageToDom(message) {
  var newDivMessage =
    "<div class='row message unread'>"
      + "<div class='col-xs-3'>"
        + message["sender"]
      + "</div>"
      + "<div class='col-xs-9'>"
        + message["subject"]
      + "</div>"
    + "</div>";

  $('#inbox').prepend(newDivMessage);
}

// called every second: if we have a new message,
// add it in the box, update the unread count and title
function refresh() {
  if (hasNewMessage()) {
    var message = newMessage();
    appendMessageToDom(message);

    var count = $('.unread').length;
    $('#count').text('(' + count + ')');

    $('title').text('Inbox (' + count + ')');
  };
}

$(document).ready(function () {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});






// Do not mind this below. Used for `rake` only.
try {
  if (module) {
    module.exports = {
      hasNewMessage: hasNewMessage,
      newMessage: newMessage
    };
  }
} catch(ReferenceError) {
  // In-browser
}
