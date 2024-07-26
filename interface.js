const readline = require('readline');
const EventManager = require('./agenda');

class Interface {
    constructor() {
        this.eventManager = new EventManager();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.start();
    }

    start() {
        this.rl.question('Digite a ação (adicionar, remover, mostrar, sair): ', (acao) => {
            switch (acao.toLowerCase()) {
                case 'adicionar':
                    this.addEvent();
                    break;
                case 'remover':
                    this.removeEvent();
                    break;
                case 'mostrar':
                    this.eventManager.listEvents();
                    this.start();  // Repetir o prompt após listar eventos
                    break;
                case 'sair':
                    this.rl.close();  // Fecha a interface e encerra o programa
                    break;
                default:
                    console.log('Ação inválida. Tente novamente.');
                    this.start();  // Repetir o prompt se a ação for inválida
                    break;
            }
        });
    }

    addEvent() {
        this.rl.question('Digite o nome do evento: ', (eventName) => {
            this.rl.question('Digite a hora de início (YYYY-MM-DD HH:MM): ', (startDate) => {
                this.rl.question('Digite a hora de término (YYYY-MM-DD HH:MM): ', (endDate) => {
                    this.eventManager.addEvent(eventName, startDate, endDate);
                    this.start();  // Repetir o prompt após adicionar um evento
                });
            });
        });
    }

    removeEvent() {
        this.rl.question('Digite o nome do evento para remover: ', (eventName) => {
            this.eventManager.removeEvent(eventName);
            this.start();  // Repetir o prompt após remover um evento
        });
    }
}

module.exports = Interface;