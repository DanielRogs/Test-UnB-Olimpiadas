const { format } = require('date-fns');
const readline = require('readline');

class EventManager {
    constructor() {
        this.events = [];
    }

    addEvent(name, dateTime) {
        const eventDate = new Date(dateTime);
        if (isNaN(eventDate)) {
            console.error('Data/hora inválida.');
            return;
        }
        
        const event = { name, dateTime: eventDate };
        this.events.push(event);
        console.log(`Evento adicionado: ${name} na data/hora ${format(eventDate, 'yyyy-MM-dd HH:mm:ss')}`);
    }

    listEvents() {
        if (this.events.length === 0) {
            console.log('Nenhum evento agendado.');
            return;
        }

        console.log('Eventos Agendados:');
        this.events.forEach((event, index) => {
            console.log(`${index + 1}. Evento: ${event.name} - Data/Hora: ${format(event.dateTime, 'yyyy-MM-dd HH:mm:ss')}`);
        });
    }
}

module.exports = EventManager;

// EXECUÇÃO PRINCIPAL:

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a ação (adicionar, remover, mostrar, sair): ', (acao) => {
  console.log(`Você digitou: ${answer}`);
  
  rl.close();
});

// // Exemplo de uso
// const manager = new EventManager();
// manager.addEvent('Reunião com a equipe', '2024-07-25T15:00:00');
// manager.addEvent('Entrega de projeto', '2024-07-25T17:00:00');
// manager.addEvent('Chamada com cliente', '2024-07-25T15:30:00');

// // Listar todos os eventos
// manager.listEvents();
