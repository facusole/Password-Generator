const asciiString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*=+?' 

const passwordGen = () => {
    let password = ''
    let passwordLength = Math.floor((Math.random() * 10) + 10)

    for(let i=0 ; i <= passwordLength ; i++) {
        password += asciiString[Math.floor(Math.random() * 64)]
    }

    const node = document.createElement('li')
    const passwordGenerated = document.createTextNode('Your password is: ' + password)
    node.appendChild(passwordGenerated)
    document.getElementById('password_Text_inactive').appendChild(node)
    document.getElementById('password_Text_inactive').id = 'password_Text_active'
    navigator.clipboard.writeText(password)
}

const clearList = () => {
    document.getElementById('password_Text_active').innerHTML = ''
    document.getElementById('password_Text_active').id = 'password_Text_inactive'
}