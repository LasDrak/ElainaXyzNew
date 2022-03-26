
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Dana
╠➥ *6281244653014*
╠➥ Chat Owner:
║- wa.me/6285823467060
╠═〘 Elaina 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viaumobile']
handler.tags = ['info']
handler.command = /^viaumobile$/i

module.exports = handler
