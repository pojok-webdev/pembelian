UpFirstLetter = obj => {
    FirstLetter = obj.text.charAt(0).toUpperCase()
    RestLetters = obj.text.slice(1)
    return FirstLetter+RestLetters
}

module.exports = {
    UpFirstLetter:UpFirstLetter
}