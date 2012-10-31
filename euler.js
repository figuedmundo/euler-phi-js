// Generated by CoffeeScript 1.3.3
(function() {
  var data, f, graph, hastaN, o, primos,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  primos = function(num) {
    var array, i;
    array = [];
    i = 2;
    while (num > 1) {
      if (num % i === 0) {
        if (__indexOf.call(array, i) < 0) {
          array.push(i);
        }
        num = num / i;
        i = 2;
      } else {
        i++;
      }
    }
    return array;
  };

  f = function(x) {
    return 1 - 1 / x;
  };

  o = function(n) {
    var array, x, _i, _len;
    if (n === 1 || 0) {
      return n;
    } else {
      array = primos(n);
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        x = array[_i];
        n *= f(x);
      }
      return Math.round(n);
    }
  };

  hastaN = function(n) {
    var array, i, _i;
    array = [];
    for (i = _i = 1; 1 <= n ? _i <= n : _i >= n; i = 1 <= n ? ++_i : --_i) {
      array.push(o(i));
    }
    return array;
  };

  data = function(n) {
    var i, res, _i;
    res = [];
    for (i = _i = 1; 1 <= n ? _i <= n : _i >= n; i = 1 <= n ? ++_i : --_i) {
      res.push({
        n: i,
        f: o(i)
      });
    }
    return res;
  };

  graph = function(n) {
    if (n == null) {
      n = 1;
    }
    return Morris.Line({
      element: 'chart',
      data: [data(n)],
      xkey: 'n',
      ykeys: ['f'],
      labels: ["f(x)"],
      parseTime: false
    });
  };

  $(document).ready(function() {
    var g, num;
    num = null;
    g = new graph();
    return $("#calcular").click(function() {
      num = $('#n').val();
      if (num > 0) {
        return g.setData(data(num));
      }
    });
  });

}).call(this);
