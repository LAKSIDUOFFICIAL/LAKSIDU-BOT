const { cmd, commands } = require('../command'),
  os = require('os'),
  { runtime } = require('../functions'),
  {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    getBinaryNodeChildren,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
    downloadContentFromMessage,
  } = require('@whiskeysockets/baileys')
cmd(
  {
    pattern: 'adhi',
    desc: 'Bot online test',
    react: '\uD83C\uDF38',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x3a427d,
    _0x3fa749,
    _0x4d2cad,
    {
      from: _0x2bace6,
      quoted: _0x3531ad,
      body: _0x20d1d3,
      isCmd: _0x455bdf,
      command: _0x1a0a7d,
      args: _0x178d35,
      q: _0x33d532,
      isGroup: _0x40b706,
      sender: _0x333def,
      senderNumber: _0x23c4f1,
      botNumber2: _0x29f426,
      botNumber: _0x150ad9,
      pushname: _0x1d9cd9,
      isMe: _0x47ab72,
      isOwner: _0x5c4946,
      groupMetadata: _0x3a2a93,
      groupName: _0x46b3ce,
      participants: _0x1751f2,
      groupAdmins: _0x5cc56d,
      isBotAdmins: _0x50460c,
      isAdmins: _0x3b92c2,
      reply: _0x5257de,
    }
  ) => {
    try {
      let _0x1c9e50 = []
      {
        let _0x366619 =
            '⚜️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 : ®𝐌𝐑 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 💛' +
            runtime(process.uptime()) +
            '\n\u274D*ʀᴀᴍ ᴜꜱᴇ :* ' +
            (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
            'MB / ' +
            Math.round(require('os').totalmem / 1024 / 1024) +
            'MB\n\u274D*ᴘʟᴀᴛꜰᴏʀᴍ :* ' +
            os.hostname() +
            '> ⚜️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 : ®𝐌𝐑 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 💛',
          _0x11ebdd = '> ⚜️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 : ®𝐌𝐑 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 💛'
        const _0x1d516d = await prepareWAMessageMedia(
          {
            image: {
              url: 'https://raw.githubusercontent.com/LAKSIDUOFFICIAL/LAKSIDU-BOT/refs/heads/main/11710605262lgscistmwx8gsbk1kt9nfw3mpgtmnbdmhgrieqjf8ajo87lzm7qegawurrnbg9cmbgt6x6aecwxl6jb5gue61jg5vfowbm51ad3y.jpg',
            },
          },
          { upload: _0x3a427d.waUploadToServer }
        )
        _0x1c9e50.push({
          body: proto.Message.InteractiveMessage.Body.fromObject({
            text: _0x366619,
          }),
          footer: proto.Message.InteractiveMessage.Footer.fromObject({
            text: _0x11ebdd,
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: 'Hi ' + _0x1d9cd9,
            subtitle: 'LAKSIDU',
            hasMediaAttachment: true,
            ..._0x1d516d,
          }),
          nativeFlowMessage:
            proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
              buttons: [
                {
                  name: 'cta_url',
                  buttonParamsJson:
                    '{"display_text":"📗𝐌𝐄𝐍𝐔📗","url":"https://github.com/laksidunimsara1/QUEEN-HASHI-MD","merchant_url":"https://www.google.com"}',
                },
                {
                  name: 'cta_url',
                  buttonParamsJson:
                    '{"display_text":"🔝𝐒𝐘𝐒𝐓𝐄𝐌🔝","url":"https://github.com/laksidunimsara1/QUEEN-HASHI-MD","merchant_url":"https://www.google.com"}',
                },
                {
                  name: 'cta_url',
                  buttonParamsJson:
                    '{"display_text":"⚡𝗣𝗜𝗡𝗚⚡","url":"https://github.com/laksidunimsara1/QUEEN-HASHI-MD","merchant_url":"https://www.google.com"}',
                },
                {
                  name: 'cta_url',
                  buttonParamsJson:
                    '{"display_text":"👨‍💻𝗢𝗪𝗡𝗘𝗥👨‍💻","url":"https://wa.me/+94771470396?text=HI","merchant_url":"https://www.google.com"}',
                },
              ],
            }),
        })
      }
      let _0x8d88ab = '> ⚜️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 : ®𝐌𝐑 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 💛'
      const _0x1d44d2 = generateWAMessageFromContent(
          _0x2bace6,
          {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2,
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject(
                  {
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: '\n *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*\n\n *1*  \u2503    *ᴍᴇɴᴜ*\n        ',
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                      text: _0x8d88ab,
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                      hasMediaAttachment: false,
                    }),
                    carouselMessage:
                      proto.Message.InteractiveMessage.CarouselMessage.fromObject(
                        { cards: _0x1c9e50 }
                      ),
                    contextInfo: {
                      mentionedJid: ['94771470396@s.whatsapp.net'],
                      forwardingScore: 999,
                      isForwarded: true,
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'HASHI',
                        serverMessageId: 143,
                      },
                    },
                  }
                ),
              },
            },
          },
          { quoted: _0x3fa749 }
        ),
        _0x13d426 = await _0x3a427d.relayMessage(_0x2bace6, _0x1d44d2.message, {
          messageId: _0x1d44d2.key.id,
        })
      console.log('Button Send Sucsses')
      const _0xd58589 = _0x1d44d2.key.id
      _0x3a427d.ev.on('messages.upsert', async (_0x410810) => {
        const _0x697bb9 = _0x410810.messages[0]
        if (!_0x697bb9.message) {
          return
        }
        const _0x5e0e8c =
            _0x697bb9.message.conversation ||
            _0x697bb9.message.extendedTextMessage?.text,
          _0x12804c = _0x697bb9.key.remoteJid,
          _0x16941c = _0x697bb9.key.participant || _0x697bb9.key.remoteJid,
          _0x1fdd06 =
            _0x697bb9.message.extendedTextMessage &&
            _0x697bb9.message.extendedTextMessage.contextInfo.stanzaId ===
              _0xd58589
        if (_0x1fdd06) {
          if (_0x5e0e8c === '1') {
            await _0x3a427d.sendMessage(
              _0x12804c,
              {
                image: {
                  url: 'https://i.imgur.com/hHChIWd.jpeg',
                },
                caption:"®𝐌𝐑 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 💛",
                contextInfo: {
                  mentionedJid: ['94771470396@s.whatsapp.net'],
                  groupMentions: [],
                  forwardingScore: 1,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '',
                    newsletterName: '®𝐌𝐑 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 💛',
                    serverMessageId: 999,
                  },
                  externalAdReply: {
                    title: 'HASHI MD',
                    body: '®𝐌𝐑 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 💛',
                    mediaType: 1,
                    sourceUrl: 'https://github.com/laksidunimsara1',
                    thumbnailUrl:
                      'https://raw.githubusercontent.com/LAKSIDUOFFICIAL/LAKSIDU-BOT/refs/heads/main/11710605262lgscistmwx8gsbk1kt9nfw3mpgtmnbdmhgrieqjf8ajo87lzm7qegawurrnbg9cmbgt6x6aecwxl6jb5gue61jg5vfowbm51ad3y.jpg',
                    renderLargerThumbnail: false,
                    showAdAttribution: true,
                  },
                },
              },
              { quoted: _0x697bb9 }
            )
          }
        }
      })
    } catch (_0xe83058) {
      console.log(_0xe83058)
      _0x5257de('' + _0xe83058)
    }
  }
)
