const { format } = require('date-fns');
const readline = require('readline');

class EventManager {
    constructor() {
        this.events = [];
    }

    addEvent(eventName, startDate, endDate) {
        if (startDate.length === 16) startDate += ':00';
        if (endDate.length === 16) endDate += ':00';

        const Date1 = new Date(startDate);
        const Date2 = new Date(endDate);
        if (isNaN(Date1) || isNaN(Date2)) {
            console.error('Data/hora inválida.');
            return;
        }

        const conflict = this.events.some(event => 
            (Date1 >= event.startDate && Date1 <= event.endDate) || 
            (Date2 >= event.startDate && Date2 <= event.endDate) ||
            (Date1 <= event.startDate && Date2 >= event.endDate)
        );

        if (conflict) {
            console.error('Conflito de agendamento detectado.');
            return;
        }
        
        const event = { eventName, startDate: Date1, endDate: Date2 };
        this.events.push(event);
        console.log(`Evento adicionado: ${event} que começa em ${format(Date1, 'yyyy-MM-dd HH:mm:ss')} e finaliza em ${format(Date2, 'yyyy-MM-dd HH:mm:ss')}.`);
        this.mainResponse;
    }

    listEvents() {
        if (this.events.length === 0) {
            console.log('Nenhum evento agendado.');
            return;
        }

        console.log('Eventos Agendados:');
        this.events.forEach((event, index) => {
            console.log(`${index + 1}. Evento: ${event.eventName} - Data/Hora Início: ${format(event.startDate, 'yyyy-MM-dd HH:mm:ss')} - Data/Hora Final: ${format(event.endDate, 'yyyy-MM-dd HH:mm:ss')}.`);
        });
    }

    removeEvent(){
        


    }
}

module.exports = EventManager;

let events = [];

do{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      rl.question('Digite a ação (adicionar, remover, mostrar, sair): ', (acao) => {
          if(acao === "adicionar"){
            let name;
            let startHour;
            let endHour;
            rl.question('Digite o nome do evento: ', (name));
            rl.question('Digite a hora de início (YYYY-MM-DD HH:MM): ', (startHour));
            rl.question('Digite a hora de término (YYYY-MM-DD HH:MM): ', (endHour));
            events.push(new EventManager.addEvent(name, startHour, endHour));
          }

          else if (acao === "remover"){
            let name;
            rl.question('Digite o nome do evento: ', (name));
            Event.removeEvent()
            
          }

          else if(acao === "mostrar"){
            
          }
          
          else{
            return 0;
          }
      });
}while(acao != 5)



