import db from './db.json';
export const prerender = true;
export const load = async (loadEvent) => {
    let combinedArray = [];
    for (let i = 0; i < db.length; i++) {
        const { fetch } = loadEvent;
        var code = db[i].invite
        var response = await fetch(`https://discord.com/api/invites/${code}?with_counts=true`);
        var response = await response.json();
        
        var serverObj = {
            id: response.guild.id,
            title: response.guild.name,
            description: db[i].description,
            icon_id: response.guild.icon,
            banner: db[i].banner,
            type: db[i].type,
            users: response.approximate_member_count,
            invite: code,
        };
        combinedArray.push(serverObj)
        
      }
    
    return {combinedArray};
}
