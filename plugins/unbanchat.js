let handler = async (m, { isOwner, text, isAdmin }) => {
let who
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
who = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
} else {
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
}
try {
if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = false
else global.db.data.users[who].banned = false
m.reply(`*[βππππβ] π΄πππ΄ π²π·π°π π΅ππ΄ π³π΄ππ±π°π½π΄π°π³πΎ π²πΎπ½ π΄ππΈππΎ*`)
} catch (e) {
throw `*[βππππβ] π΄πππ΄ π²π·π°π π½πΎ π΄πππ° ππ΄πΆπΈππππ°π³πΎ π΄π½ π»π° π±π°ππ΄ π³π΄ π³π°ππΎπ*`
}}
handler.help = ['unban']
handler.tags = ['owner', 'group']
handler.command = /^unban(chat)?$/i
module.exports = handler
