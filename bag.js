
let bagitemObject = [];
onload()

function onload () {
   
    bagitemobject()
    displayBagItem() 
    displaybagsummary()
}

 function displaybagsummary () {
    let bagsummaryelement = document.querySelector(".bag-summary");
    let totalitem = bagitemObject.length;
    let totalmrp = 0;
    let totaldiscount = 0;
    let finalpayment = 0;

    bagitemObject.forEach(bagitem => {
        totalmrp += bagitem.original_price
        totaldiscount += bagitem.original_price - bagitem.current_price
        finalpayment += totalmrp - totaldiscount + 99;
    })
    
    bagsummaryelement.innerHTML= ` <div class="bag-details-container">
                    <div class="price-header">PRICE DETAILS (${totalitem}Items)</div>
                    <div class="price-item">
                        <span class="price-item-tag">Total MRP</span>
                        <span class="price-item-value">Rs ${totalmrp}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-item-tag">Discount on MRP</span>
                        <span class="price-item-value priceDetail-base-discount">-Rs ${totaldiscount}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-item-tag">Convenience Fee</span>
                        <span class="price-item-value">Rs 99</span>
                    </div>
                    <hr>
                    <div class="price-footer">
                        <span class="price-item-tag">Total Amount</span>
                        <span class="price-item-value">Rs ${finalpayment}</span>
                    </div>
                </div>
                <button class="btn-place-order">
                    <div class="css-xjhrni">PLACE ORDER</div>
                </button>`
}

function bagitemobject() {
    // console.log(bagitem)
    bagitemObject = bagitem.map(itemId => {
        // console.log(itemId)
        for (let i = 0; i < items.length; i++) {
            if(itemId == items[i].id) {
                 return items[i]
            }
            
        }
    })
}
// console.log(bagitemObject)
// console.log(bagitem)

 function displayBagItem () {
    const containerElement = document.querySelector(".bag-items-container")
    let innerHTML = "";
    bagitemObject.forEach(element => {
        innerHTML += generteitemHtml(element);
    });
    containerElement.innerHTML = innerHTML;
};

function removefrombag(itemid) {
    bagitem = bagitem.filter(bagid => bagid != itemid)
   localStorage.removeItem(bagitem);
   bagitemobject()
   displayBagItem ()
   displaybagiscon()
   displaybagsummary()
}

 function generteitemHtml(itemed) {
    
   return `<div class="bag-item-container">
    <div class="item-left-part">
        <img class="bag-item-img" src="../${itemed.image}" alt="Bag item">
    </div>
    <div class="item-right-part">
        <div class="company">${itemed.company}</div>
        <div class="item-name">${itemed.item_name}</div>
        <div class="price-container">
            <span class="current-price">${itemed.current_price}</span>
            <span class="original-price">${itemed. original_price}</span>
            <span class="discount-percentage">${itemed.discount_percentage}</span>
        </div>
        <div class="return-period">
            <span class="return-period-days">${itemed.return_period}</span> return available
        </div>
        <div class="delivery-details">
            Delivery by <span class="delivery-details-days">${itemed. delivery_date}</span>
        </div>
    </div>
    <div class="remove-from-cart" onclick = "removefrombag(${itemed.id})">X</div>`
 }