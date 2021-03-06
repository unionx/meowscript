'use strict';

var Pair = function(car, cdr) {
  this.car = car;
  this.cdr = cdr;
};

Pair.empty = new Pair(undefined, undefined);

Pair.makeList = function() {
  var list = Pair.empty;
  for (var i=arguments.length-1; i >= 0; i--) {
    list = new Pair(arguments[i], list);
  }
  return list;
};

Pair.listEach = function(list, fn) {
  var cdr = list;
  while (cdr !== Pair.empty) {
    fn(cdr.car);
    if (! (cdr instanceof Pair)) {
      throw new TypeError('this pair is not a list');
    }
    cdr = cdr.cdr;
  }
};

Pair.isList = function(list) {
  var cdr = list;
  while (true) {
    if (cdr === Pair.empty) {
      return true;
    }
    if (! (cdr instanceof Pair)) {
      return false;
    }
    cdr = cdr.cdr;
  }
};

Pair.prototype.toString = function() {
  if (this === Pair.empty) {
    return '()';
  }
  if (Pair.isList(this)) {
    var strings = [];
    var cdr = this;
    while (cdr !== Pair.empty && cdr !== undefined) {
      strings.push(cdr.car.toString());
      cdr = cdr.cdr;
    }
    return '(' + strings.join(' ') + ')';
  }
  return '(' + this.car + ' . ' + this.cdr + ')';
};

module.exports = Pair;
