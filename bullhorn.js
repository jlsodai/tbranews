

// // initiate new add form
document.querySelector('#fastadd > ul > li:nth-child(3) a').click();

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
	document.querySelector(`#${item.selector}`).value = item.value;
});
	if (item.type === "text") {
	}












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








var jsonArray = [{
	"key":"9mflo",
	"type":"text",
	"title":"First Name",
	"value":"Martin",
	"custom_key":null,"description":""
},
{
	"key":"cjcbb",
	"type":"text",
	"title":"Last Name",
	"value":"Warioba",
	"custom_key":null,"description":null
},
{
	"key":"66a6p",
	"type":"date",
	"title":"Date of Birth",
	"value":"1978-07-19",
	"custom_key":null,"description":null
},
{
	"key":"e1ns",
	"type":"dropdown",
	"title":"Gender",
	"value":"Male",
	"custom_key":null,"description":null
}]




const jsonResult = jsonArray.reduce((acc, item) => {
    acc[item.title] = item.value;
    return acc;
}, {});

