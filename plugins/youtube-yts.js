import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw `Where is the text?\nExample; *${usedPrefix + command}* arcade`
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Videoπ§', usedPrefix + 'ytmp4 ' + v.url , '\nβ *Duration:* ' + v.durationH + '\nβ²οΈ *Uploaded:* ' + v.publishedTime + '\nποΈ *Views:* ' + v.view + '\nπ *Url:* ' + v.url],
          ['Audio π§', usedPrefix + 'ytmp3 ' + v.url + ' yes', '\nβ *Duration:* ' + v.durationH + '\nβ²οΈ *Uploaded:* ' + v.publishedTime + '\nποΈ *Views:* ' + v.view + '\nπ *Url:* ' + v.url]
        ]])
	})
	return conn.sendList(m.chat, '*βββγ Youtube Search γβββ*', `Silahkan pilih type di bawah...\n*Teks yang anda minta:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `YouTube Search π`, listSections, m)
}
handler.help = ['ytsearch <query>']
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i


export default handler
