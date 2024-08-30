let bagitem = [];

onload()

function onload() {
    let bagitemstr = localStorage.getItem('bagitem');
    bagitem = bagitemstr ? JSON.parse(bagitemstr) : [] ; 
    displayitemonhomepage()
    displaybagiscon()
} 



function addtocard(itemid) {
    bagitem.push(itemid);
    localStorage.setItem('bagitem',JSON.stringify(bagitem))
    console.log(bagitem);
    displaybagiscon()
}
function displaybagiscon() {
    const bagitemcount = document.querySelector(".bagitem-count")
    if(bagitem.length > 0) {
        bagitemcount.style.visibility = 'visible';
        bagitemcount.innerHTML = bagitem.length
    } else {
        bagitemcount.style.visibility = 'hidden';
    }

}

function displayitemonhomepage() {
    const itemscontainer = document.querySelector(".items-container")
    if(itemscontainer === null) {
        return
    }
    let newhtml = "";
    items.forEach(item => {
        newhtml += `<div class="item-container">
    <img class= "item-image" src="${item.image}" alt="item image">
    <div class="rating">
        ${item.rating.stars}✨ | ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
     <div class="item-name">${item.item_name}</div>
     <div class="price">
        <span class="current-price">${item.current_price}$</span>
        <span class="original-price">${item.original_price}$</span>
        <span class="discount">(${item.discount_percentage}%)</span>
     </div>
     <button class="add-to-bag"  onclick="addtocard(${item.id})" >Add to Bag </button>
    </div>`
    });
    
    itemscontainer.innerHTML = newhtml
}

