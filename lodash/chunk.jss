// 参数说明：
// array (Array): 需要处理的数组
// [size=1] (number): 每个数组区块的长度
// 返回值
// (Array): 返回一个包含拆分区块的新数组（注：相当于一个二维数组）。
// 实现
// function check(array, size) {
//   // 如果需要划分的尺寸 size < 1，则直接返回空数组
//   if (size < 1) return []
//   const result = [] // 定义空数组，用于存放子数组
//   // 使用循环，每次将数组按照 size 切割成一个个子数组
//   for (let i = 0; i < array.length; i += size) {
//     // 使用 slice 函数截取一个子数组，并将其添加到结果数组中
//     result.push(array.slice(i, i + size))
//   }
//   return result
// }

check(array #Array, size #number): (
  result: [],
  if size < 1 ? result = [],
  i: 0,
  while i < array.length ? (
    result.push(array.slice(i, i + size)),
    i += size
  ),
  for i: 0, i < array.length, i += size ? (
    result.push(array.slice(i, i + size))
  ),
  result
),

真难造

// test
console.log(check([1, 2, 3, 4], 0)), // []
console.log(check([1, 2, 3, 4], 2)), // [[1, 2], [3, 4]]
console.log(check([1, 2, 3, 4], 3)) // [[1, 2, 3], [4]]
