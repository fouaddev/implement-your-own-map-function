// Creates and adds a new method to the Array prototype to be available for use on arrays.
Array.prototype.myMap = (function() {
	let newArray = [];
	return function(callback) {
    	for(let i = 0; i < this.length; i++) {
			newArray.push(callback(this[i]));
        }
		return newArray;
	}
})();

// A simple example on how to use it to uppercase all string elements of an array
let words = ['this', 'is', 'awesome'];

let wordsUppercased = words.myMap(function(e) {
	return e.toUpperCase();
});

wordsUppercased;

// Output >>> ["THIS", "IS", "AWESOME"]
