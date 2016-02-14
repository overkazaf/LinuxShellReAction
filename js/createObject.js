// 工厂模式
var Factories = {
	createPerson : function (name, age, job) {
		var o = new Object();
		o.name = name;
		o.age = age;
		o.job = job;
		o.sayName = function () {
			console.log(this.name);
		}

		return o;
	}
}

var person = Factories.createPerson ('John', 12, 'Engineer');

console.log(person);
person.sayName();

function Person () {
}
Person.prototype.name = 'John';
Person.prototype.age = 27;
Person.prototype.job = 'Engineer';
Person.prototype.setName = function () {
	console.log(this.name);
}

var p2 = new Person();

console.log(Object.getPrototypeOf(p2) === Person.prototype);

console.log(Object.keys(Person.prototype).length);

var props = Object.getOwnPropertyNames(Person.prototype);
for (var idx in props) {
	console.log(props[idx] + '::' + Person.prototype[props[idx]]);
}