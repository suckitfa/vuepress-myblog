function sleep() {

}

const sleep = time => new Promise(resolve => setTimeout(resolve, time))