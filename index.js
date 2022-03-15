console.log('Hello node.js in my terminal');

console.log('\n-----------------\n');

const npmDayjs = require('dayjs');
let npmNow = npmDayjs().format();
console.log(npmNow);

// check if a date is valid
let date = npmDayjs( '2022-03-15' );
console.log(date);
console.log(date.isValid());

console.log('\n-----------------\n');

const uuid = require('uuid');
let randomId = uuid.v4(); 
console.log(randomId);

console.log('\n-----------------\n');

const axios = require('axios');

function listLaunchNames( launchData ) {
    for (const launch of launchData) {
        console.log(launch.name);
    }
}

async function getLaunches() {
    const response = await axios.get('https://api.spacexdata.com/v5/launches');

    // console.log(response.data);

    listLaunchNames( response.data );
}

getLaunches();

console.log('\n-----------------\n');

