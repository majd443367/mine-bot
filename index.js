const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Majzoob.aternos.me',
    port: 44336,
    username: 'Bot_' + Math.floor(Math.random() * 1000),
    version: '1.21.1'
  })

  bot.once('spawn', () => {
    console.log('دخل السيرفر!')

    // ينط كل 30 ثانية
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 30000)
  })

  // إذا طلع يرجع يدخل
  bot.on('end', () => {
    console.log('انفصل، عم يرجع يدخل...')
    setTimeout(createBot, 5000)
  })

  bot.on('kicked', (reason) => {
    console.log('انطرد:', reason)
  })

  bot.on('error', (err) => {
    console.log('خطأ:', err)
  })
}

createBot()
