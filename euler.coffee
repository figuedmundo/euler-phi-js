primos = (num) ->
  array = []
  i = 2
  while num > 1
    if num % i is 0
      array.push i unless i in array
      num = num/i
      i = 2
    else
      i++
  array      

f = (x) ->
  1 - 1/x

o = (n) ->
  if n is 1 or 0
    n
  else
    array = primos n
    n *= f(x) for x in array
    Math.round n

hastaN = (n) ->
  array = []
  array.push o(i) for i in [1..n]
  array
  
data = (n) ->
  res = []
  for i in [1..n]
    res.push {
      n: i
      f: o i
    }
  res

graph = (n = 1) ->
  Morris.Line
    element: 'chart'
    data: [data(n)]
    xkey: 'n'
    ykeys: ['f']
    labels: ["f(x)"]
    parseTime: false


$(document).ready ->
  num = null
  g = new graph()
  $("#calcular").click ->
    num = $('#n').val()
    g.setData data num if num > 0
    # $('#res').html("#{o(num)}")


