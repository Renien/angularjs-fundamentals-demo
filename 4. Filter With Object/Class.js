/**
 * Created by Malinda on 6/17/14.
 */

function Person(name, phone){
    this.name = name;
    this.phone = phone;
}

Person.prototype.showName = function(){
    angular.alert("name is" + this.name);
}

var p = new Person("Malinda","0771122113");
p.showName();