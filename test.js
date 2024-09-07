const { Client, Intents } = require('discord.js');
const { expect } = require('chai');
const bot = require('./bot'); // ไฟล์ bot.js ของคุณ

// สร้าง client สำหรับทดสอบ
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// ฟังก์ชัน helper สำหรับส่งข้อความและรับผลลัพธ์
async function sendMessage(content) {
  const channel = await client.channels.fetch('YOUR_CHANNEL_ID'); // เปลี่ยนเป็น ID ช่องที่คุณต้องการทดสอบ
  const message = await channel.send(content);
  return message;
}

describe('คำสั่งของบอท', () => {
  // ก่อนการทดสอบแต่ละชุด
  beforeEach(async () => {
    await client.login(process.env.DISCORD_TOKEN);
  });

  // หลังการทดสอบแต่ละชุด
  afterEach(async () => {
    await client.destroy();
  });

  it('ควรตอบกลับ "สวัสดีครับ" เมื่อพิมพ์ !hello', async () => {
    const message = await sendMessage('!hello');
    expect(message.content).to.equal('สวัสดีครับ');
  });

  it('ควรตอบกลับ "คำสั่งไม่ถูกต้อง" เมื่อพิมพ์คำสั่งที่ไม่มี', async () => {
    const message = await sendMessage('!command_not_exist');
    expect(message.content).to.equal('คำสั่งไม่ถูกต้อง');
  });

  // เพิ่มเคสทดสอบสำหรับคำสั่งอื่นๆ
  it('ควร ...', async () => {
    // ...
  });
});
