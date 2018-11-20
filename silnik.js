var tabPLN=[1, 4.32, 4.87, 3.78, 3.79];
var PLNPLN=tabPLN[0];
var PLNEURO=tabPLN[1];
var PLNGBN=tabPLN[2];
var PLNUSD=tabPLN[3];
var PLNCHF=tabPLN[4];

var calculateBTN=document.querySelector('.calculateBTN');
var convertFrom=document.getElementById('convertFrom');
var convertTo=document.getElementById('convertTo');
var textview=document.getElementById('textview');
var resultation=document.querySelector('#resultation');
function currencyConverter(event){
	event.preventDefault();
	var textviewvalue=textview.value;
	var convertFromValue=convertFrom.value;
	var convertToValue=convertTo.value;
	var result=0;

	if(convertFromValue==='PLN' && convertToValue==='PLN'){
		result=textviewvalue * PLNPLN;
	}
	if(convertFromValue==='PLN' && convertToValue==='EURO'){
		result=textviewvalue * PLNEURO;
	}
	if(convertFromValue==='PLN' && convertToValue==='GBN'){
		result=textviewvalue * PLNGBN;
	}
	if(convertFromValue==='PLN' && convertToValue==='USD'){
		result=textviewvalue * PLNUSD;
	}
	if(convertFromValue==='PLN' && convertToValue==='CHF'){
		result=textviewvalue * PLNCHF;
	}
	resultation.innerHTML=result;

}
calculateBTN.addEventListener('click', currencyConverter);