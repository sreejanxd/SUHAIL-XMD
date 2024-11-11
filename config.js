const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_07_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICA2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICA2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICA0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NixcbiAgICAgICAgNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVBL0N5bVJ4aGZzRXdUMW5oWGpJTk9MQ0Nua0pEV1I0d0xPUWdyZnpsbms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlYzUy1MdGdLUm1HQ1RYeGk1WUc4cXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjliZmQ4OTgtYjMwMi00YmEwLThjMDUtNDA0MTBiOWFhODQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMzQsXG4gICAgICAyMDAsXG4gICAgICAxMjAsXG4gICAgICA4NSxcbiAgICAgIDE1LFxuICAgICAgMjI2LFxuICAgICAgMTY4LFxuICAgICAgMzYsXG4gICAgICAxNzMsXG4gICAgICA5OSxcbiAgICAgIDE2MSxcbiAgICAgIDI1LFxuICAgICAgMTUxLFxuICAgICAgMzIsXG4gICAgICAxNjUsXG4gICAgICAzMyxcbiAgICAgIDExMyxcbiAgICAgIDIyOCxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjUsXG4gICAgICAxMjMsXG4gICAgICA0NSxcbiAgICAgIDE4NSxcbiAgICAgIDIzNixcbiAgICAgIDE4MyxcbiAgICAgIDk3LFxuICAgICAgMTcxLFxuICAgICAgMTM2LFxuICAgICAgMjIzLFxuICAgICAgNDIsXG4gICAgICAxMDcsXG4gICAgICA2MSxcbiAgICAgIDU2LFxuICAgICAgMTg2LFxuICAgICAgMjAsXG4gICAgICA0NixcbiAgICAgIDIwOSxcbiAgICAgIDE5NixcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lISG91RUVFUEdoeHJrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid0VzWmhod0x0ckhJM0Z4Nkg1VDZIMUZHVUZVRE5BK1p2R3BTZE8wYS9XQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIOExXRWFHNGpNeTlBb1FDK2gyS2tYSjVkbkxkYlAxRjJ5WDM1WDZxMlAyS3Q0U1JjUkJ2VmRTZVZkcERQQnRlVmwxOEpndnMxNnl1UWpkcHZNU1ZEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiSUVSV2ZLWnBiNzk3d01MYkdxL2txRytJSXkxdzBGcEZIbHl4L3NjTEFKeXZjTHVrNFpXVm9UK3JVT2Y4Mk9BRlo2ZEhCdXVvQjl2aG1PRU9URUVEdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODI0MDc0NTU3MTozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI1NzYwOTg3NzQ2NDg4OjM2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4MjQwNzQ1NTcxOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMzAxNjIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTTlPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNOU8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhaG9zSlpzY040bDhuaE5GVFNtMnIwWDM2bU9DYnl3WWdtZFFRRnAwamFFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNzc3MzE3MTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTI2MDc2MDY2M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || " ─꯭⃜⃜͢͢🌸꯭͟🇸𝖗𝖊𝖊𝖏𝖆𝖓།꯭͓⎯꯭ͯ𓆗",
  ownername:process.env.OWNER_NAME|| " ─꯭⃜⃜͢͢🌸꯭͟🇸𝖗𝖊𝖊𝖏𝖆𝖓།꯭͓⎯꯭ͯ𓆗 ─꯭⃜⃜͢͢🌸꯭͟🇸𝖗𝖊𝖊𝖏𝖆𝖓།꯭͓⎯꯭ͯ𓆗",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
