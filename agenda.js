const { format } = require('date-fns');

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

    removeEvent(nome){
            const index = this.events.findIndex(evento => evento.eventName === nome);
            
            if (index !== -1) {
              this.events.splice(index, 1);
              console.log(`Evento "${nome}" removido com sucesso.`);
            } else {
              console.log(`Evento "${nome}" não encontrado.`);
            }
    }
}

module.exports = EventManager;