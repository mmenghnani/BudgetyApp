/*
I am defining 1 controller, 
			 1 budgetController(Data) 
			 	--all data & datatypes(income,expense, constructors) are defined under this
			 	--compute id here
			 	-- compute budget here
			 
			 1 UI Controller(for UI)
				 --responsible for retrieving data
				 --responsible for posting data back in the UI



*/




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


	  //Create new Id based on income or expense
	  return {
	  	addItem : function(type,des,val){
	  		var newItem;

	  		 //Create new Id
			  if(data.allItems[type].length > 0){
			  	ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			  } else {
			  	ID = 0;
			  }

	  		if(type === 'inc'){
	  			newItem = new Income(ID,des,val);
	  		}
	  		else if(type === 'exp'){ 
	  			newItem = new Expense(ID,des,val);	
	  			console.log('expense' + ID);
	  			}
	  		//Push into datastructure
	  		data.allItems[type].push(newItem);

	  		//return the new element 	
	  		return newItem;
	  		},
	  	testing : function (){
	  		console.log(data.allItems);
	  	}
	  };

})();


//Module 1
var UIController = (function() {
	//Some Code

	var DOMstrings = {
		inputType:'.add__type',
		inputDescription : '.add__description',
		inputValue : '.add__value',
		inputButton : '.add__btn',
		incomeContainer : '.income__list',
		expenseContainer : '.expenses__list'
	}

	return {
		getInput : function(){
			return {
			type : document.querySelector(DOMstrings.inputType).value, //will be either inc or exp;
			description : document.querySelector(DOMstrings.inputDescription).value,
			value : document.querySelector(DOMstrings.inputValue).value,

			};
		},
		addListItem : function(obj,type){
					var html, newHtml, element;
				//create html string with placeholder text
				if(type === 'inc'){
					element = DOMstrings.incomeContainer;
					html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
				}

				else if(type === 'exp'){
					element = DOMstrings.expenseContainer;
					html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

				}

				//replace placeholder with real data

				newHtml = html.replace('%id%',obj.ID);
				newHtml = newHtml.replace('%description%',obj.description);
				newHtml = newHtml.replace('%value%',obj.value);

				//insert html into the DOM

				document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);


		
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
				ctrlAddItem();}
			});
		}  

	var DOM = UICtrl.getDOMstrings();

	var ctrlAddItem = function(){
		//get input data
		var input = UICtrl.getInput();

		//add item to the budget controller
		var newItem = budgetCtrl.addItem(input.type,input.description,input.value);

		//display it on the ui
		UICtrl.addListItem(newItem,input.type);
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