var book = {
    _year : 2004
};
Object.defineProperty(book, 'year', {
    get: function() {
        return this._year;
    },
    set: function(newValue) {
        if (newValue > 2020) {
            this._year = newValue;
        }
    }
});

console.log(book.year);

book.year = 2011;

console.log(book.year);

// Object.defineProperty(book, '_year', {
//     enumerable : false
// });


var discriptor = Object.getOwnPropertyDescriptor(book, '_year');
console.log(discriptor);

console.log(book);