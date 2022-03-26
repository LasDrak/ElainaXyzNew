let handler = async (m, { usedPrefix, command }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let time1 = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
let time2 = require('moment-timezone').tz('Asia/Makassar').format('HH:mm:ss')
let time3 = require('moment-timezone').tz('Asia/Jayapura').format('HH:mm:ss')
let runnya = `
*───「 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 𝘽𝙤𝙩 」───*

👾Runtime : ${uptime}

*───「 𝙄𝙣𝙙𝙤𝙣𝙚𝙨𝙞𝙖 𝙏𝙞𝙢𝙚 」───*

Wib = ${time1}
Wita = ${time2}
Wit = ${time3}
`
conn.sendButton(m.chat, runnya, watermark, 'Menu', '.menu', m) 
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
