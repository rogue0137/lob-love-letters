const LOB_API_KEY = process.env.LOB_API_KEY;
const Lob = require('lob')(LOB_API_KEY);

const fs = require('fs');

console.log(`INSIDE PREP POSTCARD`);

const FRIENDS_ADDRESS = {
    name: 'Lara Lobster',
    address_line1: '210 King St',
    address_line2: '',
    address_city: 'San Francisco',
    address_state: 'CA',
    address_zip: '94107'
}

const MY_ADDRESS = {
    name: 'Lena Lobster',
    address_line1: '210 King St',
    address_line2: '',
    address_city: 'San Francisco',
    address_state: 'CA',
    address_zip: '94107'
}

const recipient = 'Lara';
const message = "You're the best. Thanks for making my 2020 better!";
const closing = 'Hugs,';
const sender = "Lena";

Lob.postcards.create({
    description: 'Lob Love Letters Hey Girl Postcard',
    to: FRIENDS_ADDRESS,
    from: MY_ADDRESS,
    front: fs.createReadStream('./assets/HeyGirlPostcardFront.html'),
    back: fs.createReadStream('./assets/HeyGirlPostcardBack.html'),
    merge_variables: {
        recipient,
        message,
        closing,
        sender
    }
}, function (err, res) {
    console.log(`SENDING POSTCARD`);
    console.log(err, res);
});
