function requestReservation(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "kevdonovan88@gmail.com",
        Password : "password",
        To : 'kevdonovan88@gmail.com',
        From : "lessavyfavbistro.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert('request sent')
    );
}
document.querySelector('.resForm').addEventListener('submit', requestReservation());