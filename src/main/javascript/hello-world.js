const start = new Date()

setTimeout(function(){
  console.log(`World elapsed : ${new Date() - start}`)
}, 2000)

setTimeout(function(){
  console.log(`Guilda elapsed : ${new Date() - start}`)
}, 2000)

console.log("Hello")
console.log('LIBUV Threads: ', process.env.UV_THREADPOOL_SIZE)