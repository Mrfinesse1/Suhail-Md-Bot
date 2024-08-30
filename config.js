const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348106149503";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "finesse",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_19_42_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgMTksXG4gICAgICAgIDk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDk4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgxLFxuICAgICAgICA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgODYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NixcbiAgICAgICAgMTI0LFxuICAgICAgICA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICA0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYzLFxuICAgICAgICA4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTg4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMixcbiAgICAgICAgNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU4LFxuICAgICAgICAxLFxuICAgICAgICAyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllFeTFqTVhsK1czaExKY2hZQWJyNHVLeEp0d2pnR0VJa1RTV3VKYm0xZ3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVyVWZKb2MzVExTd0J1WDQ0akU0UndcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGExNWMxZjMtYzI5NC00M2JjLTllYjAtMGVlMDExODNjNDMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAyMDcsXG4gICAgICAxMzgsXG4gICAgICAxNyxcbiAgICAgIDQ4LFxuICAgICAgMTg4LFxuICAgICAgMjE2LFxuICAgICAgMTMyLFxuICAgICAgMjA5LFxuICAgICAgMTA1LFxuICAgICAgMjEsXG4gICAgICAxMjQsXG4gICAgICAxMTEsXG4gICAgICAxNzQsXG4gICAgICAyNDIsXG4gICAgICA3NCxcbiAgICAgIDE4MCxcbiAgICAgIDIwLFxuICAgICAgMTY0LFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDg2LFxuICAgICAgOTEsXG4gICAgICAyNSxcbiAgICAgIDIwMSxcbiAgICAgIDEwMixcbiAgICAgIDEyNyxcbiAgICAgIDQzLFxuICAgICAgMTYyLFxuICAgICAgMzcsXG4gICAgICAxNjAsXG4gICAgICAyNDUsXG4gICAgICAyMTMsXG4gICAgICAxNzcsXG4gICAgICA5MyxcbiAgICAgIDU5LFxuICAgICAgNjQsXG4gICAgICAyNTEsXG4gICAgICAxMTUsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlRFTVJIMkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDYxNDk1MDM6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJmaW5lc3PCo1wiLFxuICAgIFwibGlkXCI6IFwiMTYxMzk2MzQ4MjE1NDQ2OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l6dnY2a0dFSnpCeUxZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidEFZK21RdGtNUkk3UzNPOUE0N3FDQk1pdnRmWFh6aWVuS2tjZk1INXRERT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuQlZJN3J6MmNqU0lDczZ2d05WSFBCNmlQQ2NuZ1VwQUNpUU9uNXhjOUc3cXRKV090R2ZiNUxqZU5HYTM1cmRFUmNyaUpDNVJvZTNKZ1E3cHU5cmdDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzekVveWZqTkx5ZU56YWgyc01zZTFWLzMvSVlMTSs2eUtyZy93c2RvRm9YT09pT1Q1WnlQNWk4eFJCckk0dm5VOEVOTUZhMEJWai9FRXZXcVJIcjdBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA2MTQ5NTAzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1MDQ2OTQ0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "false",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
