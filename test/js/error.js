function toStackOverflow(error) {
    window.location.href= 'http://stackoverflow.com/search?q=[js]+' + error
}

try {
    const res = 1/0
    throw Error('fuck')
} catch(e) {
    toStackOverflow(e)
}