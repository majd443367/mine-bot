const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'ipMajzoob.aternos.me',
    port: 44336,
    username: 'Bot123'
  })

  bot.on('spawn', () => {
    console.log('Bot joined!')

    // ينط كل 10 ثواني
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 10000)
  })

  bot.on('chat', (username, message) => {
    if (message === 'hi') {
      bot.chat('hello!')
    }
  })

  bot.on('end', () => {
    console.log('Reconnecting...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', err => console.log(err))
}

createBot()
