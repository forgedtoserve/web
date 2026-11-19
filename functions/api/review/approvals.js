// Preview review approval endpoint. Fail closed until implementation is deployed.
export async function onRequestGet() { return new Response(JSON.stringify({error:'Approval tracking is not enabled yet'}), {status:503,headers:{'content-type':'application/json','cache-control':'no-store'}}); }
export async function onRequestPost() { return onRequestGet(); }
