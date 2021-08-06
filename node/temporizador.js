const schedule = require('node-schedule')

// de 5 em 5 minutos (sem / executa no segundo 5) - a qualquer minuto - as 12 horas - qualquer dia - qualquer mês - terça feira
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 5', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelamento Tarefa 1!')
}, 20000)

// setImmediate = setTimout mas com valor zerado
// setInterval = uso direto pelo js

const regra = new schedule.RecurrenceRule() // dispara tarefas durante a semana
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
