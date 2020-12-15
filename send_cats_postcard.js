// this tells Lob which environment to use: ex. TEST or LIVE
// this is coming from your .env file
const LOB_API_KEY = process.env.LOB_API_KEY;
// https://docs.lob.com/ and look at the Node section
// this is how you include Lob and send thing to Lob
const Lob = require('lob')(LOB_API_KEY);

// read my file, please
// OLD const fs = require('fs');
import { createReadStream } from 'fs'; // ES6 or ES2015: how to write your code, neatly

console.log(`INSIDE PREP POSTCARD`);

// TO ADDRESS
const FRIENDS_ADDRESS = {
    name: 'Lara Lobster',
    address_line1: '210 King St',
    address_line2: '',
    address_city: 'San Francisco',
    address_state: 'CA',
    address_zip: '94107'
}

// FROM ADDRESS
const MY_ADDRESS = {
    name: 'Lena Lobster',
    address_line1: '210 King St',
    address_line2: '',
    address_city: 'San Francisco',
    address_state: 'CA',
    address_zip: '94107'
}

// MERGE VARIABLES
// These variables help you make things personal
const recipient = 'Lara';
const message = "You're the best. Thanks for making my 2020 better!";
const closing = 'Hugs,';
const sender = "Lena";

Lob.postcards.create({
    description: 'Lob Love Letters Cats Postcard',
    to: FRIENDS_ADDRESS,
    from: MY_ADDRESS,
    front: createReadStream('./assets/CatsPostcardFront.html'),
    back: createReadStream('./assets/CatsPostcardBack.html'),
    merge_variables: {
        recipient, // recipient: recipient 
        message, 
        closing,
        sender
    }
}, function (err, res) {
    console.log(`SENDING POSTCARD`);
    console.log(err, res);
});
