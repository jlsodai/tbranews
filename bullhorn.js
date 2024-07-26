var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.onload = function() {
    console.log('jQuery loaded');
};
document.head.appendChild(script);

function clickXPath(xpath) {
    const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element) {
        element.click();
    }
}

// // initiate new add form
document.querySelector('#fastadd > ul > li:nth-child(3) a').click();

const data = [{
	"selector" : "firstName",
	"value" : "Kofi",
	"type" : "text"
},
{
	"selector" : "middleName",
	"value" : "Amina",
	"type" : "text"
},
{
	"selector" : "lastName",
	"value" : "Wayo",
	"type" : "text"
},
{
	"selector" : "nickName",
	"value" : "Alidu",
	"type" : "text"
}];

// inputs
data.forEach(item => {
	if (item.type === "text") {
		document.querySelector(`#${item.selector}`).value = item.value;
	}
});












// Done TBrA Programmes?
// Open
document.querySelector('#novo-select-2 > div').click();
// Yes
clickXPath('//*[@id="novo-option-3"]/span');
// No
clickXPath('//*[@id="novo-option-4"]/span');








// TBrA Opportunities Interested In
document.querySelector('#novo-body > novo-root > content-app > fast-add-app > main > fast-add-form > section > section > candidate-form > section > section:nth-child(2) > main > div > novo-dynamic-form > div > form > novo-fieldset:nth-child(1) > div > div:nth-child(9) > novo-control > div > div > div > div.novo-control-inner-input-container.novo-control-empty > div > div > novo-chips > div.novo-chip-container > div > novo-picker > input').click();

[{
	"selector" : "firstName",
	"value" : "Kofi",
},
{
	"selector" : "middleName",
	"value" : "Amina",
},
{
	"selector" : "lastName",
	"value" : "Wayo",
},
{
	"selector" : "nickName",
	"value" : "Alidu",
}]