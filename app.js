//Module2
var budgetController = (function() {
	  
})();


//Module 1
var UIController = (function() {
	//Some Code

})();


var controller = (function(budgetCtrl,UICtrl) {

	document.querySelector('.add__btn').addEventListener('click',function(){
		console.log("abc");
	})

})(budgetController,UIController);