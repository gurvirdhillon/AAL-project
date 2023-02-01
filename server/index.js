import twilio from 'twilio';

const accountSid = "ACf25d4feac6b0fd768188a7f2d54f5583";
const authToken = "3562338dc6f76a2f6a83f6a4eddddec4";
export const client = twilio(accountSid, authToken);

if(client){
    console.log('Twilio message has been sent');
}

client.messages
    .create({
        body: 'Testing',
        from : '+447893943882',
        to: '+447908632941'
}).then(message => console.log(message.sid));
