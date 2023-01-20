import { twilio } from '../twilio';

const accountSid = "ACf25d4feac6b0fd768188a7f2d54f5583";
const authToken = "3562338dc6f76a2f6a83f6a4eddddec4";
const client = twilio(accountSid, authToken);

const button = document.getElementById("panicBtn");

button.addEventListener("click", function () {
    client.messages
    .create({
        body: 'URGENT! THIS USER NEEDS HELP!',
        from : '+447893943882',
        // twilio trial number above
        to: '+447908632941'
    }).then(message => console.log(message.sid));
});
