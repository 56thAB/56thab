const aboutUs = document.querySelector("#AboutUs")
const gallery = document.querySelector("#Gallery")
const links = document.querySelector("#links")
const tabLinks = document.querySelectorAll(".tablinks")
const tabResult = document.querySelector(".tabresult")
const h1 = document.querySelector(".heading")
console.log(h1);
// console.log(tabResult);

links.addEventListener('mouseover',  openTab)
gallery.addEventListener('mouseover',  openTab)
aboutUs.addEventListener('mouseover',  openTab)

function outerHTML(node){
    return node.outerHTML || new XMLSerializer().serializeToString(node);
   }

function openTab(tabName){
    console.log(tabName.target);
    let currentTab = document.querySelector(`.${tabName.target.id.toLowerCase()}`)
    tabResult.innerHTML= `${outerHTML(currentTab)}`
    h1.textContent = tabName.target.textContent.toUpperCase()
    console.log(currentTab);
}

fetch('https://census.daybreakgames.com/get/ps2/outfit?alias_lower=56ab&c:show=name,outfit_id&c:join=outfit_member%5Einject_at:members%5Eshow:character_id%27rank%5Eouter:0%5Elist:1(character%5Eshow:name.first%5Einject_at:character%5Eouter:0%5Eon:character_id(characters_online_status%5Einject_at:online_status%5Eshow:online_status%5Eouter:0(world%5Eon:online_status%5Eto:world_id%5Eouter:0%5Eshow:world_id%5Einject_at:ignore_this))')
.then((response) => {return response.json()})
.then((response)=>{console.log(response.outfit_list[0].members.length)})