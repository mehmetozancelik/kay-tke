const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const NARCOSEMBED = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  Mikelson Ayarlamalı Kayıt   **")
.setThumbnail("https://cdn.discordapp.com/attachments/863385491490340905/864471402718429224/standard.gif")
.setDescription(`
**» Bağlantılar** 
**[MikelsonDiscord](https://discord.gg/AamHHfU8tw)** **•** **[Davet Linkim](https://discord.com/api/oauth2/authorize?client_id=864460685709410335&permissions=8&scope=bot)** **•** ****
Bu komut hakkında detaylı __yardım için__: **!yardım**`)

.addField('**• Komutlar**')
.addField('> m!erkek-rol ','**-> Erkek Rol belirlesiniz**')
.addField('> m!alınacak-rol ','** → Kayıt Olduktan sonra alınacak rol**')
.addField('> m!erkek ',' **→ Erkek Kullanıcıyı Kayıt Edersiniz**')
.addField('> m!kayıt-erkek-rol','  **→ Erkeğe verilecek 2.rolü belirlersiniz**')
.addField('> m!kayıt-isim-düzen ',' **→ Kayıtsız İsim Belierlersiniz**')
.addField('> m!kayıt-isimzorun ',' **→ Kayıt isim yaş zorunu eklersiniz**')
.addField('> m!kadın-rol ',' **→ Kadın Role Belirlersiniz**')
.addField('> m!kadın ',' **→ Kız Kullanıcıyı kayıt edersiniz**')
.addField('> m!yetkili-rol ',' → Kayıt Yetkilisi belirlersiniz')
.addField('> m!kayıt-log ',' **→ Kullanıcıyı Kayıt Ettikten sonra Log kanalına mesaj atar**')
.addField('> m!otoisim-kapat ',' **→Oto isim kapatırısnız**')
.addField('> m!otoisim ',' **→ Oto İsim Ayarlarsınız**')
.addField('> m!oto-rol ',' **→ Oto Rol ayarlarsınız**')
.addField('> m!sayaç-aç/kapat ',' **→ Sayaç Kurarsınız**')
.addField('> m!kes ',' **→ Ses olan kişinin bağlantısını kesersiniz**')
.addField('> m!profil ',' **→ Kaç kişi kayıt ettipinizi gösterir**')
return message.channel.send(NARCOSEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!eğlence'
};