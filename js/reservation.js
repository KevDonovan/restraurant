const guestName = document.querySelector('#name').value;
const phone = document.querySelector('#phone').value;
const email = document.querySelector('#email').value;
const time = document.querySelector('#time').value;
const date = document.querySelector('#date').value;

function requestReservation(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "kevdonovan88@gmail.com",
        Password : "password",
        To : 'kevdonovan88@gmail.com',
        From : "lessavyfavbistro.com",
        Subject : "Reservation Request",
        Body : `Name: ${guestName}
                Phone: ${phone}
                email: ${email}
                date: ${date}
                time: ${time}`
    }).then(
      message => alert(message)
    );
}
document.querySelector('.resForm').addEventListener('submit', (e) => {
  requestReservation();
  e.preventDefault();
})