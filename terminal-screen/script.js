document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input')
    const outputDiv = document.getElementById('output')

    setColor('#0a0')

    inputField.addEventListener('blur', () => {
        setColor('#0a0')
        document.getElementsByClassName('terminal')[0].style.opacity = '.6'
    })

    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = inputField.value.trim()
            inputField.value = ''
            appendOutput(`user@webappsec:~$ ${command}`);
            handleCommand(command)
        }
    });

    function appendOutput(text) {
        const line = document.createElement('div')
        line.textContent = text
        outputDiv.appendChild(line)
        outputDiv.scrollTop = outputDiv.scrollHeight
    }

    function handleCommand(command) {
        switch (command.toLowerCase()) {
            case 'help':
                appendOutput('Comandos disponíveis: help, about, clear')
                break
            case 'about':
                appendOutput('Este é um terminal simulado para explorar conceitos de Web AppSec.')
                break
            case 'clear':
                outputDiv.innerHTML = ''
                break
            default:
                appendOutput(`Comando não reconhecido: ${command}`)
        }
    }
    appendOutput('user@webappsec:~$ ls')
    handleCommand('ls')
});

function terminalClicked() {
    const input = document.getElementById('input')
    input.focus()
    setColor('#0a0')
    document.getElementsByClassName('terminal')[0].style.opacity = '1'
}

function setColor(color) {
    const input = document.getElementById('input')
    document.body.style.color = color
    document.getElementsByClassName('terminal')[0].style.border = `1px solid ${color}`
    input.style.color = color
    input.style.borderRight = color
}