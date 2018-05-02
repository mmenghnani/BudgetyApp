//Module2
var budgetController = (function() {
	  var Expense = function(id,description,value){ //Function Constructor
	  	this.id = id;
	  	this.description = description;
	  	this.value = value;
	  };

	  var Income = function(id,description,value){
	  	this.id = id;
	  	this.description = description;
	  	this.value = value;
	  };

	  var data = {
	  	allItems : {
	  		exp : [],
	  		inc : []
	  	},
	  	totals : {
	  		exp : 0,
	  		inc : 0
	  	}
	  }

})();


//Module 1
var UIController = (function() {
	//Some Code

	var DOMstrings = {
		inputType:'.add__type',
		inputDescription : '.add__description',
		inputValue : '.add__value',
		inputButton : '.add__btn'
	}

	return {
		getInput : function(){

			return {
			type : document.querySelector(DOMstrings.inputType).value, //will be either inc or exp;
			desc : document.querySelector(DOMstrings.inputDescription).value,
			value : document.querySelector(DOMstrings.inputValue).value,

			};
		},

		getDOMstrings : function() {
			return DOMstrings; 
		}
	}

})();


var controller = (function(budgetCtrl,UICtrl) {

	var setupEventListeners = function(){
		document.querySelector(DOM.inputButton).addEventListener('click',ctrlAddItem); //ctrlAddItem is a callback function

		document.addEventListener('keypress',function(event){
			if(event.keyCode === 13){
				ctrlAddItem();
				console.log('mohit');
				}
			});
	}  
	

	var DOM = UICtrl.getDOMstrings();

	var ctrlAddItem = function(){
		//get input data
		var input = UICtrl.getInput();
		console.log(input);
		//add item to the budget controller
		//display it on the ui
		//calculate the budget
		//display the budget
	};

	return {
		init: function(){
			console.log("App has started");
			setupEventListeners();
		}
	}
})(budgetController,UIController);

controller.init();