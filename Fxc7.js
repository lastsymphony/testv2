const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const kagApi = require('@kagchi/kag-api')

const fs = require("fs")
const axios = require('axios')
const request = require('request')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const google = require('google-it')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const cd = 4.32e+7
const lolis = require('lolis.life')
const loli = new lolis()

const { BarBarApi, ZeksApi, TechApi, TobzApi, ItsApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const publik = JSON.parse(fs.readFileSync('./database/json/public.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'))
const adminNumber = JSON.parse(fs.readFileSync('./database/json/admin.json'))
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'))
let {
instagram, yt, groupLink
} = setting

const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { color, bgcolor } = require('./lib/color')
const { help, bahasa, donasi, limitend, limitcount, bottt } = require('./Fxc7/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:SYMPHONY\n'
            + 'ORG:Owner SYMPHONY;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6289670394574:+62 896-7039-4574\n'
            + 'END:VCARD'


//function

conn.on('message-new', async (m) => {
  const messageContent = m.message
  const text = m.message.conversation
  let id = m.key.remoteJid
  const isGroup = id.endsWith('@g.us')
  const totalchat = await conn.chats.all()
  const sender = isGroup ? m.participant : m.key.remoteJid
  const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const desk = isGroup ? groupMetadata.desc : ''
  const groupId = isGroup ? groupMetadata.jid : ''
  const groupMembers = isGroup ? groupMetadata.participants : ''
  const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
  let imageMessage = m.message.imageMessage;
  console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);

/*]===> AUTO RESPON LANN ID <===[*/
 if (text == 'assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketikan !menu a...' ,MessageType.text);
}
 if (text == 'salam'){
conn.sendMessage(id, 'Waalaikumsalam, Ketikan !menu a......' ,MessageType.text);
}
 if (text == 'asalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketikan !menu a......' ,MessageType.text);
}
 if (text == 'Assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketikan !menu a......' ,MessageType.text);
}
 if (text == 'Deni'){
conn.sendMessage(id, 'Ownerku tuh' ,MessageType.text);
}

//JANGAN NUMPANG NAMA DOANG:)
  if (text.includes('!menu')) {
    var nomor = m.participant
    const options = {
      text: `*Hallo @${nomor.split("@s.whatsapp.net")[0]} I'm ${BotName}*
╔══════════════════
╠═══✪〘 INFO 〙✪═════
║❖ Owner : Deniambrose
║❖ Link : wa.me/6285747852482
║❖ Name : DA BOT
║❖ grup : https://bit.ly/3tajoNK
╚══════════════════
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔══✪〘 MENU 〙✪═════
║❖ !owner
║❖ !info
║❖ !donasi
║❖ !bantuan
╚══════════════════

╔═══✪〘 TOOLS 〙✪═══
║❖ !sticker
║❖ !nulis
║❖ !stalkig
║❖ !ssweb
║❖ quotes
║❖ bikinquote
╚══════════════════

╔═══✪〘 GABUT 〙✪═══
║❖ !pantun
║❖ !receh
║❖ !cekbapak
║❖ !gombal
║❖ !seberapagay
║❖ !prankchat
║❖ !alay
║❖ !tebakgambar
║❖ !family100
║❖ !truth
║❖ !dare
║❖ !apakah
║❖ !bolehkah
║❖ !kapan
╚══════════════════

╔═══✪〘 GROUP 〙✪═══
║❖ !tagme
║❖ !setname
║❖ !setdesc
║❖ !opengrup
║❖ !closegrup
║❖ !linkgrup
║❖ !rules
║❖ !notif
╚═════════════════

╔══✪〘 RAMALAN 〙✪══
║❖ !artinama
║❖ !artijodoh
║❖ !artimimpi
║❖ !zodiak
╚══════════════════

╔══✪〘 RANDOM 〙✪═══
║❖ !gacha cowok
║❖ !gacha cewek
║❖ !randomanime
║❖ !nekonime
║❖ !meme
║❖ !loli
║❖ !cersex
║❖ !wibu
║❖ !wphd
╚══════════════════

╔═══✪〘 NGEDIT 〙✪═══
║❖ !pornhub
║❖ !hartatahta
║❖ !retrologo
║❖ !pubglogo
║❖ !snowrite
║❖ !watertext
║❖ !silktext
║❖ !firetext
║❖ !metaltext
║❖ !lovetext
║❖ !apitext
╚══════════════════

╔══✪〘 EDUKASI 〙✪═══
║❖ !brainly
║❖ !quran
║❖ !ngaji
║❖ !wiki
║❖ !covid
║❖ !faktaunik
║❖ kbbi
╚══════════════════

╔═══✪〘 OTHER 〙✪═══
║❖ !jadwalsholat
║❖ !jadwaltv
║❖ !lirik
║❖ !chord
║❖ !map
╚══════════════════

╔═✪〘 DOWNLOAD 〙✪══
║❖ !ytmp3
║❖ !yutubdl
║❖ !twitdl
║❖ !tiktod
║❖ !ig
║❖ !fb
╚══════════════════`,
      contextInfo: { mentionedJid: [nomor] }
    }
    conn.sendMessage(id, options, MessageType.text, { quoted: m })
  }
//CREATOR
    if (text.includes('!owner')) {
    conn.sendMessage(id, { displayname: "Jeff", vcard: vcard }, MessageType.contact, { quoted: m })
    conn.sendMessage(id, `tuh a ownerku💛`, MessageType.text, { quoted: m })
  }
//DONASI
  if (text.includes('!donasi')) {
    conn.sendMessage(id, `Bantu donasi agar bot bisa terus berjalan.

 اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ
_“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]_

╔════════════════════
║ *DONASI UNTUK ${BotName}*
╠════════════════════
║╭──❉ *DONASI BOS* ❉─────
║│➸ *OVO*: _${ovo}_
║│➸ *DANA*: _${dana}_
║│➸ *PULSA*: _${pulsa}_
║│➸ *GOPAY*: _${gopay}_
║╰──────────────────
╠════════════════════
║         *${BotName}*
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║         *${BotName}*
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//INFO
  if (text.includes('!info')) {
    var nomor = m.participant
    const options = {
      text: `*Hallo @${nomor.split("@s.whatsapp.net")[0]} I'm ${BotName}*
         ────────────────
➢ Official group 
  _${wa}_
         ────────────────
╔════════════════════
║───────⟪  *INFO* ⟫───────
╠════════════════════
║➸️ Owner : *${ow}*
║➸️ Prefix:  *「 ! 」*
║➸ Aktif : *${aktif} WIB*
║➸ Group:  *${groupName}*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║FOLLOW MY INSTAGRAM
║ _${instagram}_
╚════════════════════`,
      contextInfo: { mentionedJid: [nomor] }
    }
    conn.sendMessage(id, options, MessageType.text, { quoted: m })
  }
// PANDUAN
  if (text.includes('!bantuan')) {
    var nomor = m.participant
    const options = {
      text: `══════✪〘 *${BotName}* 〙✪══════
❝ TUORIAL DABOT ❞

Hallo

▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄

Tutorial menggunakan DABOT :
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖  !sticker
➸ Masukan gambar ukuran kotak dengan caption !sticker
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖  !nulis
➸ Untuk membuat tulisan | contoh : !nulis Deniambrose dahyunbot
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !stalkig
➸ Untul stalking ig menggunakan username | contoh : !stalkig deniambrose_
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !ssweb
➸ Mengambil gambar web | contoh : !ssweb https://github.com/deniambrosee/dahyunbot7
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !quotes
➸ Random quotes
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !bikinquote
➸ Untuk membuat quotes gambar | contoh : !bikinquote jika anda merasa tidak berguna ingatlah "memang & Deni
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !artinama
➸ primbon nama kalian | contoh : !artinama Deniambrose
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !artijodoh
➸ primbon jodoh | contoh : !artijodoh Dahyun & Deni
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !artimimpi
➸ primbon mimpi | contoh : !artimimpi ular
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !zodiak
➸ primbon zodiak | contoh : !zodiak scorpio
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !brainly
➸ mencari jawaban dari brainly | contoh : !brainly arti javascript
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !quran
➸ Random ayat ayat alqur'an
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !ngaji
➸ melihat ayat alquran | contoh : !ngaji 1 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !wiki
➸ Mencari informasi menurut wikipedia | contoh : !wiki mobil
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !covid
➸ Informasi corona virus di indonesia
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !faktaunik
➸ Kumpulan fakta unik
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !Kbbi
➸ mencari informasi menurut kbbi | contoh : !kbbi semangka
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !pornhub
➸ Jika undefined berarti harus pake 2 text | contoh : !pornhub Deni & Ambrose
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !hartatahta
➸ membuat gambar hartatahta | contoh : !hartatahta dahyun
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ !prankchat
➸ membuat teks prank
Contoh : !prankchat aku suka kamu& tapi boong
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

❝ DABOT ❞`,
      contextInfo: { mentionedJid: [nomor] }
    }
    conn.sendMessage(id, options, MessageType.text, { quoted: m })
  }
// IKLAN
  if (text.includes('!iklan')) {
    var nomor = m.participant
    const options = {
      text: `══════✪〘 *${BotName}* 〙✪══════
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ DAFTAR SEWA & BUAT BOT :
❖ SEWA : 15K/GRUP (BULAN)
❖ BUAT : 30K (BISA JADI OWNER)
❖ PEMBAYARAN :
❖ DANA, PULSA
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ KEUNTUNGAN SEWA BOT :
❖ 1. BISA MEMASUKAN BOT KE GRUP
❖ KEUNTUNGAN BUAT BOT :
❖ 1. BISA MENJADI OWNER BOT SENDIRI
❖ 2. BISA MENGGANTI NAMA BOT SENDIRI
❖ 3. BISA MEMBAWA BOT KE GROUP
❖ 4. BISA MENYEWAKAN BOT KEMBALI
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❖ JIKA MINAT IKLAN DIATAS
❖ HARAP HUBUNGI NOMOR DIBAWAH :
❖ Wa.me/6285747852482
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`,
      contextInfo: { mentionedJid: [nomor] }
    }
    conn.sendMessage(id, options, MessageType.text, { quoted: m })
  }
//SIMPLE MENU
  else if (text == '!tools') {
    conn.sendMessage(id, `
╔════════════════════
║──────⟪  *SIMPLE MENU* ⟫───────
╠════════════════════
║➸ *!sticker*
║➸ *!nulis*
║➸ *!stalkig*
║➸ *!ssweb*
║➸ *!quotes*
║➸ *!bikinquote*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
/*SIMI
  if (text.includes("!simi")) {
    const teks = text.replace(/!simi /, "")
    axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${teks}`).then((res) => {
      let hasil = `*${res.data.result}*`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }*/
//STICKER
  if (text.includes('!Stiker')) {
    conn.sendMessage(id, 'Kirim gambar dengan caption !stiker', MessageType.text, { quoted: m });
  }
  if (messageType == 'imageMessage') {
    let caption = imageMessage.caption.toLocaleLowerCase()
    const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
    if (caption == '!stiker') {
      const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

      const
        {
          exec
        } = require("child_process");
      exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) => {
        let stik = fs.readFileSync('temp/' + jam + '.webp')
        conn.sendMessage(id, stik, MessageType.sticker, { quoted: m })
      });
    }
  if (text.includes('!Sticker')) {
    conn.sendMessage(id, 'Kirim gambar dengan caption !sticker', MessageType.text, { quoted: m });
  }
    if (caption == '!sticker') {
      const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file
      const
        {
          exec
        } = require("child_process");
      exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) => {
        let stik = fs.readFileSync('temp/' + jam + '.webp')
        conn.sendMessage(id, stik, MessageType.sticker, { quoted: m })
      });
    }
  }
//BIKIN QUOTES
  if (text.includes('!bikinquote')) {
    const gh = text.split("!bikinquote ")[1];
    const kata = gh.split("&")[0];
    const author = gh.split("&")[1];
    axios.get(`https://terhambar.com/aw/qts/?kata=${kata}&author=${author}&tipe=rain`)
      .then((res) => {
        imageToBase64(res.data.result)
          .then(
            (ress) => {
              conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { quoted: m })
            })
      })
  }
//NULIS
if (text.includes('!nulis')){
var teks = text.replace(/!nulis /, '')
  var url = "https://api.vhtear.com/write?text=" +teks+"&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
                    })
    })
}
//STALK IG
if (text.includes("!stalkig")){
  const teks = text.replace(/!stalkig /, "")
  axios.get(`https://api.vhtear.com/igprofile?query=${teks}&apikey=${apivhtear}`).then ((res) =>{
  conn.sendMessage(id, '[⏱️] Wait a.. '+teks, MessageType.text)
  let hasil = `TELAH DITEMUKAN ${teks} \n\n *Username👀* : _${res.data.result.username}_ \n *Nama✍️* : _${res.data.result.full_name}_ \n *Jumlah Follower🤷‍♀️¸* : _${res.data.result.follower}_ \n *Jumlah Following👥¸* : _${res.data.result.follow}_ \n *Jumlah Post💌* : _${res.data.result.post_count}_ \n *Biografi❣️ :* _${res.data.result.biography}`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
//QUOTES
if (text.includes("!quotes")){
const teks = text.replace(/!quotes /, "")
axios.get(`https://api.vhtear.com/quoteid&apikey=${apivhtear}`).then((res) => {
    let hasil = `*_${res.data.result.kata}_*\n\n\n  _By : Deniambrose._`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
//SS WEB
if (text.includes('!ssweb')){
var teks = text.replace(/!ssweb /, '')
    axios.get(`https://api.zeks.xyz/api/ssweb?url=${teks}&apikey=${vinzkey}`)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, {quoted : m} )
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image, {caption : 'Nih a...'} )
        })
    })
}
//MENU GROUP
  else if (text == '!grup') {
    conn.sendMessage(id, `
╔════════════════════
║───────⟪  *GROUP* ⟫──────
╠════════════════════
║➸ *!tagme*
║➸ *!setname*
║➸ *!setdesc*
║➸ *!opengrup*
║➸ *!closegrup*
║➸ *!linkgrup*
║➸ *!rules*
║➸ *!notif*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//TAGME
  if (text.includes('!tagme')) {
    var nomor = m.participant
    const options = {
      text: `@${nomor.split("@s.whatsapp.net")[0]} Haii a...`,
      contextInfo: { mentionedJid: [nomor] }
    }
    conn.sendMessage(id, options, MessageType.text)
  }
//NAMA GRUP
  if (text.includes("!setname")) {
    const teks = text.replace(/!setname /, "")
    let nama = `${teks}`;
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupUpdateSubject(idgrup, nama);
    conn.sendMessage(id, 'Mengganti Nama Group', MessageType.text, { quoted: m });
  }
//DESK GRUP
  if (text.includes("!setdesc")) {
    const teks = text.replace(/!setdesc /, "")
    let desk = `${teks}`;
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupUpdateDescription(idgrup, desk)
    conn.sendMessage(id, 'Mengganti desk grup', MessageType.text, { quoted: m });
  }
//BUKA GRUP
  else if (text == '!opengrup') {
    let hasil = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupSettingChange(hasil, GroupSettingChange.messageSend, false);
    conn.sendMessage(id, MessageType.text);
  }
//TUTUP GRUP
  else if (text == '!closegrup') {
    let hasil = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupSettingChange(hasil, GroupSettingChange.messageSend, true);
    conn.sendMessage(id, MessageType.text);
  }
//LINK GRUP
  if (text.includes("!linkgrup")) {
    const linkgc = await conn.groupInviteCode(id)
    const hasil = `Grup : ${groupName}\n*Link* : https://chat.whatsapp.com/${linkgc}`;
    conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
  }
//NOTIF GRUP
  if (text.includes('!notif')) {
    const value = text.replace(/!notif /, '')
    var nomor = m.participant
    const group = await conn.groupMetadata(id)
    const member = group['participants']
    const ids = []
    member.map(async adm => {
      ids.push(adm.id.replace('c.us', 's.whatsapp.net'))
    })
    const options = {
      text: `Pengumuman dari @${nomor.split("@s.whatsapp.net")[0]}\n*Pesan : ${value}*`,
      contextInfo: { mentionedJid: ids },
      quoted: m
    }
    conn.sendMessage(id, options, MessageType.text)
  }
//RULES GRUP
  if (text.includes("!rules")) {
    let idgrup = `*${groupName}*\n*Rules* : \n${desk}`;
    conn.sendMessage(id, idgrup, MessageType.text, { quoted: m });
  }
//MENU FUN
  else if (text == '!gabut') {
    conn.sendMessage(id, `
╔════════════════════
║───────⟪  *GABUTZ* ⟫───────
╠════════════════════
║➸ *!pantun*
║➸ *!receh*
║➸ *!cekbapak*
║➸ *!gombal*
║➸ *!seberapagay*
║➸ *!prankchat*
║➸ *!alay*
║➸ *!tebakgambar*
║➸ *!family100*
║➸ *!truth*
║➸ *!dare*
║➸ *!apakah*
║➸ *!bolehkah*
║➸ *!kapan*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//PANTUN
  if (messageType === MessageType.text) {
    let is = m.message.conversation.toLocaleLowerCase()

    if (is == '!pantun') {
      fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
        .then(res => res.text())
        .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          let pantun = pjr.replace(/pjrx-line/g, "\n");
          conn.sendMessage(id, pantun, MessageType.text, { quoted: m })
        });
    }
  };
//RECEH
  if (messageType === MessageType.text) {
    let is = m.message.conversation.toLocaleLowerCase()
    if (is == '!receh') {
      fetch('https://raw.githubusercontent.com/mrfzvx12/random-scraper/main/random/receh.txt')
        .then(res => res.text())
        .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          let pantun = pjr.replace(/pjrx-line/g, "\n");
          conn.sendMessage(id, pantun, MessageType.text, { quoted: m })
        });
    }
  };
//CEK BAPAK
if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!cekbapak')
      {

         fetch('https://raw.githubusercontent.com/Ramlan666/cekbapak/main/random.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let cekbapak = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, cekbapak, MessageType.text)
            });
      }

   }
//GOMBAL
  if (messageType === MessageType.text) {
    let is = m.message.conversation.toLocaleLowerCase()
    if (is == '!gombal') {
      fetch('https://raw.githubusercontent.com/mrfzvx12/random-scraper/main/random/gombal.txt')
        .then(res => res.text())
        .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          let pantun = pjr.replace(/pjrx-line/g, "\n");
          conn.sendMessage(id, pantun, MessageType.text, { quoted: m })
        });
    }

  };
/*MOTIVASI
  if (text.includes("!motivasi")) {
    const teks = text.replace(/!motivasi /, "")
    axios.get(`https://kocakz.herokuapp.com/api/random/text/katabijak`).then((res) => {
      let hasil = `${res.data.result}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
/*INFO ANIME
  if (text.includes("!infoanime")) {
    const sons = text.replace(/!infonime /, "")
    axios.get(`https://arugaz.herokuapp.com/api/kuso?q=${sons}`).then((res) => {
      conn.sendMessage(id, 'Bentar tod gue cari dulu ya kan...', MessageType.text, { quoted: m })
      let hasil = `*Judul* : ${res.data.title}\n*Info* : ${res.data.info}\n*Link* : ${res.data.link_dl}\n*Sinopsis* : ${res.data.sinopsis}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
/*PUISI
  if (text.includes("!puisi1")) {
    axios.get(`https://arugaz.herokuapp.com/api/puisi1`).then((res) => {
      conn.sendMessage(id, 'Sabar say...', MessageType.text, { quoted: m })
      let hasil = `${res.data.result}`
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m })
    })
  }

  if (text.includes("!puisi2")) {
    axios.get(`https://arugaz.herokuapp.com/api/puisi2`).then((res) => {
      conn.sendMessage(id, 'Sabar say...', MessageType.text, { quoted: m })
      let hasil = `${res.data.result}`
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m })
    })
  }

  if (text.includes("!puisi3")) {
    axios.get(`https://arugaz.herokuapp.com/api/puisi3`).then((res) => {
      conn.sendMessage(id, 'Sabar say...', MessageType.text, { quoted: m })
      let hasil = `${res.data.result}`
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m })
    })
  }

//CERPEN
  if (text.includes("!cerpen")) {
    axios.get(`https://arugaz.herokuapp.com/api/cerpen`).then((res) => {
      conn.sendMessage(id, '[ WAIT ] Searching cerpen⏳ silahkan tunggu', MessageType.text, { quoted: m })
      let hasil = `${res.data.result}`
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m })
    })
  }*/
//SEBERAPAGAY
  if (text.includes("!seberapagay")) {
    const teks = text.replace(/!seberapagay /, "")
    axios.get(`https://arugaz.herokuapp.com/api/howgay`).then((res) => {
      let hasil = `*Gay Detected*\n*Persentase* : ${res.data.persen}%\n${res.data.desc}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//CHAT KOSONG
  if (text.includes('!prankchat')) {
    const gh = text.split("!prankchat ")[1];
    const nama = gh.split("&")[0];
    const tgl = gh.split("&")[1];
    let hasil = `${nama}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${tgl}`;
    conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
  }
//FONT ALAY
  if (text.includes("!alay")) {
    const alay = text.split("!alay")[1]
    axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then((res) => {
      let hasil = `${res.data.text}`
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m })
    })
  }
//TEBAK GAMBAR
  if (text.includes("!tebakgambar")) {
    axios.get(`https://api.vhtear.com/tebakgambar&apikey=${apivhtear}`).then((res) => {
      imageToBase64(res.data.result.soalImg)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image, { quoted: m })
          })
    })
  }

//FAMILY 100
  if (text.includes("!family100")) {
    axios.get(`https://api.vhtear.com/family100&apikey=${apivhtear}`).then((res) => {
      let hasil = `*Pertinyiinnyi* : ${res.data.result.soal}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//TRUTH OR DARE
  if (messageType === MessageType.text) {
    let is = m.message.conversation.toLocaleLowerCase()
    if (is == '!truth') {
      fetch('https://raw.githubusercontent.com/mrfzvx12/random-scraper/main/random/truth.txt')
        .then(res => res.text())
        .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          let pantun = pjr.replace(/pjrx-line/g, "\n");
          conn.sendMessage(id, pantun, MessageType.text, { quoted: m })
        });
    }
  };

  if (messageType === MessageType.text) {
    let is = m.message.conversation.toLocaleLowerCase()
    if (is == '!dare') {
      fetch('https://raw.githubusercontent.com/mrfzvx12/random-scraper/main/random/dare.txt')
        .then(res => res.text())
        .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          let pantun = pjr.replace(/pjrx-line/g, "\n");
          conn.sendMessage(id, pantun, MessageType.text, { quoted: m })
        });
    }
  };
//KERANG AJAIB
  if (text.includes('!apakah')) {
    const teks = text.replace(/!/, '')
    const truth = [
      'Iya',
      'Tidak',
      'Bisa Jadi',
      'Coba tanyakan lagi',
      'Mungkin',
      '🤐']
    const ttrth = truth[Math.floor(Math.random() * truth.length)]
    conn.sendMessage(id, 'Pertanyaan : *' + teks + '*\n\nJawaban : ' + ttrth, MessageType.text, { quoted: m })
  }

  if (text.includes('!bolehkah')) {
    const teks = text.replace(/!/, '')
    const truth = [
      'Boleh',
      'Tidak boleh',
      'Sangat di anjurkan',
      'Coba tanyakan lagi',
      'Tidak',
      'Mungkin',
      'Jangan',
      '🤐']
    const ttrth = truth[Math.floor(Math.random() * truth.length)]
    conn.sendMessage(id, 'Pertanyaan : *' + teks + '*\n\nJawaban : ' + ttrth, MessageType.text, { quoted: m })
  }


  if (text.includes('!kapan')) {
    const teks = text.replace(/!/, '')
    const truth = [
      '1 Hari lagi',
      '2 hari lagi',
      '3 hari lagi',
      '4 hari lagi',
      '5 hari lagi',
      '6 hari lagi',
      '1 minggu lagi',
      '2 minggu lagi',
      '3 minggu lagi',
      '1 bulan lagi',
      '2 bulan lagi',
      '3 hari lagi',
      '4 bulan lagi',
      '5 bulan lagi',
      '6 hari lagi',
      '7 bulan lagi',
      '8 bulan lagi',
      '9 hari lagi',
      '10 bulan lagi',
      '11 bulan lagi',
      '1 tahun lagi',
      '2 tahun lagi',
      '3 tahun lagi',
      '4 tahun lagi',
      'Tidak akan',
      'Yakin bakal terjadi ?',
      'Aku meragukan nya',
      'Lusa',
      'Akhir bulan depan',
      'Awal bulan depan',
      'Tahun depan',
      'Bulan depan',
      'Sebentar lagi',
      '🤐']
    const ttrth = truth[Math.floor(Math.random() * truth.length)]
    conn.sendMessage(id, 'Pertanyaan : *' + teks + '*\n\nJawaban : ' + ttrth, MessageType.text, { quoted: m })
  }
//MENU DOWNLOAD
  else if (text == '!download') {

    conn.sendMessage(id, `
╔════════════════════
║─────⟪  *DOWNLOAD* ⟫─────
╠════════════════════
║➸️ *!ytmp3*
║➸️ *!yutubdl*
║➸️ *!twitdl*
║➸️ *!tiktod*
║➸️ *!ig*
║➸️ *!fb*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//YT MP3
  if (text.includes('!ytmp3')) {
    const teks = text.replace(/!ytmp3 /, "")
    axios.get(`https://api.zeks.xyz/api/ytmp3?url=${teks}&apikey=${vinzkey}`).then((res) => {
      imageToBase64(res.data.result.thumbnail)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
            let hasil = `*Judul* : ${res.data.result.title}\n*Ukuran* : ${res.data.result.size}\n*Format* : MP3\n*Link* : ${res.data.result.url_audio}`;
            conn.sendMessage(id, buf, MessageType.image, { caption: hasil, quoted: m });
          })
    })
  }
//YT MP4
  if (text.includes('!yutubdl')) {
    const teks = text.replace(/!yutubdl /, "")
    axios.get(`https://api.vhtear.com/ytdl?link=${teks}&apikey=${apivhtear}`).then((res) => {
      imageToBase64(res.data.result.imgUrl)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, '[⏱️] Wait a..n', MessageType.text, { quoted: m })
            let hasil = `*Judul* : ${res.data.result.title}\n*Ukuran* : ${res.data.result.size}\n*Format* : MP4\n*Link* : ${res.data.result.UrlVideo}`;
            conn.sendMessage(id, buf, MessageType.image, { caption: hasil, quoted: m });
          })
    })
  }
//TWITER DOWNLOAD
  if (text.includes('!twitdl')) {
    const teks = text.replace(/!twitdl /, "")
    axios.get(`https://mhankbarbar.tech/api/twit?url=${teks}&apiKey=${apibarbar}`).then((res) => {
      conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
      let hasil = `Klik link dan download hasilnya!\n*Link* : ${res.data.result}\n*Judul* : ${res.data.title}\n${res.data.quote}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });

    })
  }
//IG DOWNLOAD
  if (text.includes('!ig')) {
    const teks = text.replace(/!ig /, "")
    axios.get(`https://mhankbarbar.tech/api/ig?url=${teks}&apiKey=${apibarbar}`).then((res) => {
      conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
      let hasil = `Klik link dan download hasilnya!\n*Link* : ${res.data.result}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }


//TIKTOK DOWNLOAD
  if (text.includes('!tiktod')) {
    const teks = text.replace(/!tiktod /, "")
    axios.get(`https://mhankbarbar.tech/api/tiktok?url=${teks}&apiKey=${apibarbar}`).then((res) => {
      conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
      let hasil = `Klik link dan download hasilnya!\n*Link* : ${res.data.result}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }

//FB DOWNLOAD
if (text.includes("!fb")){
const teks = text.replace(/!fb /, "")
axios.get(`https://api.vhtear.com/fbdl?link=${teks}&apikey=${apivhtear}`).then((res) => {
    let hasil = `BERHASIL DI *DOWNLOAD!* SILAHKAN UNDUH MELALUI LINK BERIKUT\n\nLink: ${res.data.result.VideoUrl}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
/*JOOX DOWNLOAD
  if (text.includes('!joox')) {
    const teks = text.replace(/!joox /, "")
    axios.get(`https://tobz-api.herokuapp.com/api/joox?q=${teks}&apikey=${tobzkey}`).then((res) => {
      imageToBase64(res.data.result.thumb)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            var lagu = `{url: ${res.data.result.mp3} ,}`;
            conn.sendMessage(id, '[ WAIT ] Mendownload...⏳ silahkan tunggu', MessageType.text, { quoted: m })
            let hasil = `Nihh tod!\n*Judul* : ${res.data.result.album} - ${res.data.result.judul}\n*Link* : ${res.data.result.mp3}`;
            conn.sendMessage(id, buf, MessageType.image, { quoted: m, caption: hasil })
            conn.sendMessage(id, lagu, MessageType.audio, { mimetype: 'audio/mp4', filename: `${data.result.judul}.mp3`, quoted: m })
          })
    })
  }*/
//MENU PRIMBON
  else if (text == '!primbon') {
    conn.sendMessage(id, `
╔════════════════════
║─────⟪  *PRIMBON* ⟫──────
╠════════════════════
║➸️ *!artinama* 
║➸️ *!artijodoh* 
║➸️ *!artimimpi*
║➸️ *!zodiak*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════ `, MessageType.text, { quoted: m });
  }
//ARTI NAMA
  if (text.includes("!artinama")) {
    const teks = text.replace(/!artinama /, "")
    axios.get(`https://api.vhtear.com/artinama?nama=${teks}&apikey=${apivhtear}`).then((res) => {
      let hasil = `${res.data.result.hasil}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//ARTI JODOH
if (text.includes('!artijodoh')){
  const request = require('request');
    var gh = text.split("!artijodoh ")[1];
    var namalu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    axios.get('https://api.vhtear.com/primbonjodoh?nama='+ namalu +'&pasangan='+ pasangan +'&apikey='+apivhtear)
          .then((res) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text)
            let hasil = `${res.data.result.hasil}`;
            conn.sendMessage(id, hasil, MessageType.text)
        })
}
//ARTI MIMPI
  if (text.includes("!artimimpi")) {
    const teks = text.replace(/!artimimpi /, "")
    axios.get(`https://api.vhtear.com/artimimpi?query=${teks}&apikey=${apivhtear}`).then((res) => {
      let hasil = `${res.data.result.hasil}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//ZODIAK
if (text.includes("!zodiak")){
const teks = text.replace(/!zodiak /, "")
axios.get(`https://api.vhtear.com/zodiak?query=${teks}&apikey=${apivhtear}`).then((res) => {
	conn.sendMessage(id, '[❕] ZODIAK '+ teks + ' DITEMUKAN!', MessageType.text)
    let hasil = `ZODIAK: *${res.data.result.zodiak}*\n\nRAMALAN : *${res.data.result.ramalan}*\n\nLUCKY NUMBER : ${res.data.result.nomorKeberuntungan}\n\nMOTIVASI: ${res.data.result.motivasi}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
//MENU RANDOM
  else if (text == '!random') {
    conn.sendMessage(id, `
╔════════════════════
║──────⟪  *RANDOM* ⟫──────
╠════════════════════
║➸ *!gacha cowok*
║➸ *!gacha cewek*
║➸ *!randomanime*
║➸ *!nekonime*
║➸ *!meme*
║➸ *!loli*
║➸ *!cersex*
║➸ *!wibu*
║➸ *!wphd*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//GACHA CEWEK
  if (text.includes("!gacha cewek")) {
    var items = ["ullzang girl", "cewe cantik", "cewe hijab", "remaja cantik", "cewek jepang"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;

    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek = b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
          .then(
            (response) => {
              conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(id, buf, MessageType.image, { caption: `nih a!`, quoted: m })

            }
          )
          .catch(
            (error) => {
              console.log(error); // Logs an error if there was one
            }
          )

      });
  }

//GACHA COWOK
  if (text.includes("!gacha cowok")) {
    var items = ["cowo ganteng", "cogan", "cowok indonesia ganteng", "cowo keren"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;

    axios.get(url)
      .then((result) => {
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok = z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok)
          .then(
            (response) => {
              conn.sendMessage(id, '[⏱️] Wait beb..', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image, { caption: `nih beb..., gantengan ownerku sih ini`, quoted: m })
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          )

      });
  }
//RANDOM ANIME
  if (text.includes("!randomanime")) {
    var items = ["anime tumblr", "anime loli", "anime aesthetic", "anime hd"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek = n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
          .then(
            (response) => {
              conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image, { caption: `nih a...`, quoted: m })
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          )

      });
  }
//RANDOM LOLI
  if (text.includes("!loli")) {
    var items = ["anime loli"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek = n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
          .then(
            (response) => {
              conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image, { caption: `nih a...`, quoted: m })
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          )
      });
  }

//RANDOM NEKONIME
  if (text.includes("!nekonime")) {
    var items = ["anime neko"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek = n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
          .then(
            (response) => {
              conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image, { caption: `nih a...`, quoted: m })
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          )
      });
  }
//RANDOM WALPAPER
  if (text.includes("!wphd")) {
    var items = ["wallpaper aesthetic", "wallpaper tumblr"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek = n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
          .then(
            (response) => {
              conn.sendMessage(id, '[⏱️] Wait a.., ku carikan wallpaper random...', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image, { quoted: m })
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          )
      });
  }
//RANDOM MEME
  if (text.includes("!meme")) {
    var items = ["meme indonesia", "meme indo", "foto lucu", "meme spongebob"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek = n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
          .then(
            (response) => {
              conn.sendMessage(id, '[⏱️] Wait a...', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image, { quoted: m })
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          )
      });
  }
/* RANDOM HENTAI
if (text.includes('!randomhentong')){
  var teks = text.replace(/!randomhentong /, '')
    axios.get('https://api.vhtear.com/randomhentai?apikey=RAMLANGANS')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] Bacol Hentai Sedang Dikirimkan.. ', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}*/
if (text.includes('!cersex')){
  var teks = text.replace(/!cersex /, '')
    axios.get('https://api.vhtear.com/cerita_sex&apikey='+apivhtear)
    .then((res) => {
      imageToBase64(res.data.result.image)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, {quoted : m} )
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image, {caption : res.data.result.cerita } )
        })
    })
}
if (text.includes('!wibu')){
  var teks = text.replace(/!wibu /, '')
    axios.get('https://api.vhtear.com/randomwibu&apikey='+apivhtear)
    .then((res) => {
      imageToBase64(res.data.result.foto)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, {quoted : m} )
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

/*  if (text.includes("!nekohentong")) {
  var teks = text.replace(/!wibu /, '')
  axios.get('https://api.vhtear.com/nekohentai&apikey='+apivhtear)
      .then((result) => {
        var ne = JSON.parse(JSON.stringify(res.data.result.image));
        var ko = ne[Math.floor(Math.random() * ne.length)];
        imageToBase64(ko)
          .then(
            (response) => {
              conn.sendMessage(id, '[❗] WAIT GANS', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image)
           })
       })
}*/
//MENU EDUCATION
  else if (text == '!edukasi') {
    conn.sendMessage(id, `
╔════════════════════
║──────⟪  *EDUKASI* ⟫─────
╠════════════════════
║➸ *!brainly*
║➸ *!quran*
║➸ *!ngaji*
║➸ *!wiki*
║➸ *!covid*
║➸ *!faktaunik*
║➸ *!Kbbi*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//BRAINLY
  if (text.includes('!brainly')) {
    const teks = text.replace(/!brainly /, "")
    axios.get(`https://api.vhtear.com/branly?query=${teks}&apikey=${apivhtear}`).then((res) => {
      let hasil = ` ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ${res.data.result.data}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//RANDOM AL QURAN
  else if (text == '!quran') {
    axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
      const sr = /{(.*?)}/gi;
      const hs = res.data.acak.id.ayat;
      const ket = `${hs}`.replace(sr, '');
      let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//NGAJI SURAH
  if (text.includes("!ngaji")) {
    const teks = text.replace(/!ngaji /, "")
    axios.get(`https://api.vhtear.com/quran?no=${teks}&apikey=${apivhtear}`).then((res) => {
      let hasil = `*Surah* : ${res.data.result.surah}\n${res.data.result.quran}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//WIKIPEDIA
  if (text.includes("!wiki")) {
    const teks = text.replace(/!wiki /, "")
    axios.get(`https://api.zeks.xyz/api/wiki?q=${teks}&apikey=${vinzkey}`).then((res) => {
      conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
      let hasil = `Menurut Wikipedia:\n\n${res.data.result}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//COVID 19
  if (text.includes("!covid")) {
    const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {
    }).json();
    var positif = (body[0]['positif']);
    var sembuh = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    conn.sendMessage(id, `🔰DATA WABAH COVID-19 TERBARU DI INDONESIA\n\n*Positif* = ${positif} \n*Sembuh* = ${sembuh} \n*Meninggal* = ${meninggal}\n*Dirawat* = ${dirawat}\n\n*Stay safe dan selalu gunakan masker saat berpergian*`, MessageType.text, { quoted: m });
  }
//FAKTA UNIK
  if (messageType === MessageType.text) {
    let is = m.message.conversation.toLocaleLowerCase()
    if (is == '!faktaunik') {
      fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
        .then(res => res.text())
        .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          let pantun = pjr.replace(/pjrx-line/g, "\n");
          conn.sendMessage(id, pantun, MessageType.text, { quoted: m })
        });
    }

  };
//KBBI
if (text.includes("!kbbi")){
const teks = text.replace(/!kbbi /, "")
axios.get(`https://api.zeks.xyz/api/kbbi?q=${teks}&apikey=${vinzkey}`).then((res) => {
    let hasil = `Menurut KBBI Arti Dari *${teks}* Adalah :\n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
//OTHER
  else if (text == '!other') {
    conn.sendMessage(id, `
╔════════════════════
║──────⟪  *OTHER* ⟫──────
╠════════════════════
║➸ *!jadwalsholat*
║➸ *!jadwaltv*
║➸ *!lirik*
║➸ *!chord*
║➸ *!map*
╠════════════════════
║──────── *${BotName} ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//JADWAL SHOLAT
  if (text.includes("!jadwalsholat")) {
    const teks = text.replace(/!jadwalsholat /, "")
    axios.get(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${teks}&apiKey=${apibarbar}`).then((res) => {
      conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
      let hasil = `Jadwal sholat di ${teks} hari ini adalah\n\n*Imsak* : ${res.data.Imsyak} WIB\n*Subuh* : ${res.data.Subuh} WIB\n*Dzuhur* : ${res.data.Dzuhur} WIB\n*Ashar* : ${res.data.Ashar} WIB\n*Maghrib* : ${res.data.Maghrib} WIB\n*Isya* : ${res.data.Isya} WIB`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//JADWAL TV
  if (text.includes("!jadwaltv")) {
    const teks = text.replace(/.jadwaltv /, "")
    axios.get(`https://mhankbarbar.tech/api/jdtv?ch=${teks}&apiKey=${apibarbar}`).then((res) => {
      conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
      let hasil = `${res.data.result}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//LIRIK LAGU
  if (text.includes("!lirik")) {
    const teks = text.split("!lirik")[1]
    axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then((res) => {
      conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
      let hasil = `lirik ${teks} \n\n\n ${res.data.result.lirik}`
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m })
    })
  }
//CHORD
  if (text.includes("!chord")) {
    const teks = text.replace(/!chord /, "")
    axios.get(`https://arugaz.herokuapp.com/api/chord?q=${teks}`).then((res) => {
      conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
      let hasil = `*Judul* : ${teks}\n*chord* : ${res.data.result}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//MAP
  if (text.includes('!map')) {
    var teks = text.replace(/!map /, '')
    axios.get('https://mnazria.herokuapp.com/api/maps?search=' + teks)
      .then((res) => {
        imageToBase64(res.data.gambar)
          .then(
            (ress) => {
              conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { quoted: m })
            })
      })
  }
//LOGO MAKER
  else if (text == '!maker') {
    conn.sendMessage(id, `
╔════════════════════
║───────⟪  *MAKER* ⟫──────
╠════════════════════
║➸ *!pornhub*
║➸ *!hartatahta*
║➸ *!retrologo*
║➸ *!pubglogo*
║➸ *!snowrite*
║➸ *!watertext*
║➸ *!silktext*
║➸ *!firetext*
║➸ *!metaltext*
║➸ *!lovetext*
║➸ *!apitext*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//PORNHUB
if (text.includes('!pornhub')){
    const request = require('request');
    var gh = text.split("!pornhub ")[1];
    var t1 = gh.split("&")[0];
    var t2 = gh.split("&")[1];
  var url = "https://api.vhtear.com/pornlogo?text1=" +t1+ "&text2=" +t2+ "&apikey=" +vhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

//HARTA TAHTA
if (text.includes('!hartatahta')){
  var teks = text.replace(/!hartatahta /, '')
  var url = "https://api.vhtear.com/hartatahta?text=" +teks+ "&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, {quoted : m} )
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
//RETRO LOGO
if (text.includes('!retrologo')){
   const request = require('request');
   var gh = text.split("!retrologo ")[1];
    var t1 = gh.split("&")[0];
    var t2 = gh.split("&")[1];
    var t3 = gh.split("&")[2];
    axios.get('https://api.zeks.xyz/api/retro?text1='+t1+'&text2='+t2+'&text3='+t3+'&apikey=apivinz')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, {quoted : m} )
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image, {caption : 'nih a...'} )
        })
    })
}
/*NINJA LOGO
  if (text.includes('!ninjalogo')) {
    var porn = text.split("!ninjalogo ")[1];
    var text1 = porn.split("&")[0];
    var text2 = porn.split("&")[1];
    axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${text1}&text2=${text2}&apikey=${tobzkey}`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, 'Sabar dulu um..!', MessageType.text, { quoted: m })
            conn.sendMessage(id, buf, MessageType.image, { caption: `Amjay bah`, quoted: m });
          })
    })
  }*/
/*JOKER LOGO
  if (text.includes('!jokerlogo')) {
    const teks = text.replace(/!jokerlogo /, "")
    axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${teks}&apikey=${tobzkey}`)
      .then((res) => {
        imageToBase64(res.data.result)
          .then(
            (ress) => {
              conn.sendMessage(id, 'Sedang membuat logo jomker🤡', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { caption: `Nihh tod`, quoted: m })
            })
      })
  }*/
/*GLITCH LOGO
if (text.includes('!glitchtext')){
    const request = require('request');
    var gh = text.split("!glitchtext ")[1];
    var atas = gh.split("&")[0];
    var bawah = gh.split("&")[1];
  var url = "https://api.vhtear.com/glitchtext?text1="+atas+"&text2=" +bawah+"&apikey=" +vhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] Bentar Om Sabar Ajg', MessageType.text, {quoted : m} )
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image, {caption : 'nih ajg'} )
        })
    })
}*/
//PUBG LOGO
  if (text.includes('!pubglogo')) {
    var pubg = text.split("!pubglogo ")[1];
    var text1 = pubg.split("&")[0];
    var text2 = pubg.split("&")[1];
    axios.get(`https://api.zeks.xyz/api/pubglogo?text1=${text1}&text2=${text2}&apikey=${vinzkey}`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
            conn.sendMessage(id, buf, MessageType.image, { caption: `[⏱️] Wait a..`, quoted: m });
          })
    })
  }
//SNOW LOGO
  if (text.includes('!snowrite')) {
    var snow = text.split("!snowrite ")[1];
    var text1 = snow.split("&")[0];
    var text2 = snow.split("&")[1];
    axios.get(`https://api.zeks.xyz/api/snowwrite?text1=${text1}&text2=${text2}&apikey=${vinzkey}`)
      .then((res) => {
        imageToBase64(res.data.result)
          .then(
            (ress) => {
              conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { caption: `nih a...`, quoted: m })
            })
      })
  }
/*THUNDER LOGO
  if (text.includes('!thundername')) {
    const teks = text.replace(/!thundername /, "")
    axios.get(`https://arugaz.my.id/api/textpro/thundertext?text=${teks}`)
      .then((res) => {
        imageToBase64(`https://arugaz.my.id/api/textpro/thundertext?text=${teks}`)
          .then(
            (ress) => {
              conn.sendMessage(id, 'Bentar um cape :(', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { caption: `Nih say...`, quoted: m })
            })
      })
  }*/
/*BLOOD LOGO
  if (text.includes('!bloodstext')) {
    const teks = text.replace(/!bloodtext /, "")
    axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=blood&text=${teks}&apikey=${tobzkey}`)
      .then((res) => {
        imageToBase64(res.data.result)
          .then(
            (ress) => {
              conn.sendMessage(id, 'Bentar sayang...', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { caption: `Ngemry`, quoted: m })
            })
      })
  }*/
//WATER
if (text.includes('!watertext')){
  var teks = text.replace(/!watertext /, '')
  var url = "https://api.vhtear.com/water_maker?text=" +teks+"&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
//SILK TEXT
if (text.includes('!silktext')){
    var teks = text.replace(/!silktext /, '')
    axios.get(`https://api.zeks.xyz/api/silktext?text=${teks}&apikey=${vinzkey}`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
// FIRE TEXT
if (text.includes('!firetext')){
  var teks = text.replace(/!firetext /, '')
  var url = "https://api.vhtear.com/fire_maker?text=" +teks+"&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
// METAL TEXT
if (text.includes('!metaltext')){
  var teks = text.replace(/!metaltext /, '')
  var url = "https://api.vhtear.com/metal_maker?text=" +teks+"&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
/*SAND WRITE
  if (text.includes('!sandwrite')) {
    const teks = text.replace(/!sandwrite /, "")
    axios.get(`https://arugaz.my.id/api/textpro/sandsummer?text=${teks}`)
      .then((res) => {
        imageToBase64(`https://arugaz.my.id/api/textpro/sandsummer?text=${teks}`)
          .then(
            (ress) => {
              conn.sendMessage(id, 'Sedang menulis di atas pasir...', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { caption: `Nihh ajg`, quoted: m })
            })
      })
  }*/
/*SKY TEXT
  if (text.includes('!skytext')) {
    const teks = text.replace(/!skytext /, "")
    axios.get(`https://arugaz.my.id/api/textpro/cloudsky?text=${teks}`)
      .then((res) => {
        imageToBase64(`https://arugaz.my.id/api/textpro/cloudsky?text=${teks}`)
          .then(
            (ress) => {
              conn.sendMessage(id, 'Bentar dumlu yakan otw terbang...', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { caption: `Amjay bah`, quoted: m })
            })
      })
  }*/
/*BLEKPING
if (text.includes('!blackpink')){
  var teks = text.replace(/!blackpink /, '')
  var url = "https://api.vhtear.com/blackpinkicon?text=" +teks+"&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[😱] Hah Blekping? ', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}*/
//LOVE TEXT
if (text.includes('!lovetext')){
  var teks = text.replace(/!lovetext /, '')
  var url = "https://api.vhtear.com/lovemessagetext?text=" +teks+"&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
// API TEXT
if (text.includes('!apitext')){
    var teks = text.replace(/!apitext /, '')
    axios.get(`https://api.zeks.xyz/api/flametext?text=${teks}=&apikey=${vinzkey}`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[⏱️] Wait a..', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

/*
]=====> Thanks To <=====[
> RAMLAN ID
> DENIAMBROSE
> REVOER ID
> ARIS ID
> VHTEAR
> TOBZ
> MHANKBARBAR
> VINZ
> MRFZVX12
> All creator bot WhatsApp
]=====> Jangan di ubah <=====[
*/

})
