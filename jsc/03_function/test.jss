f() : a + 2,
f() : (a + 2, b + 1, c:1),
f(a, 1),
f(a #number, b #number) : a + b,
f(a #number, b #number, cb(c# number):#number) : (a + b),
f(a, c(): (a + b))