const os = require('os');
const cluster = require('cluster');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

// if (cluster.isMaster) {
//     for (let i = 0; i < os.cpus().length - 2; i++) {
//         cluster.fork()
//     }
//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Воркер с pid = ${worker.process.pid} умер`)
//         if(code ===) {
//             cluster.fork()
//         } else {
//             console.log('Воркер умер...')
//         }
//     })
// } else {
//     console.log(`Воркер с pid= ${process.pid} запущен`)
//
//     setInterval(() => {
//         console.log(`Воркер с pid= ${process.pid} еще работает`)
//     }, 5000)
// }




