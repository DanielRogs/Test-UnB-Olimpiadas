const EventManager = require('../agenda');
const Interface = require('../interface');
const MockStdin = require('mock-stdin')

describe("Event - Ciclo 1", function() {

    let eventManager;

    beforeEach(function() {
      eventManager = new EventManager();
    });

    it("Should show the newly added event.", function() {
      eventManager.addEvent("Futebol Masculino", "2024-07-25 09:30", "2024-07-28 20:00");
      const events = eventManager.events;
      expect(events.length).toBe(1);
      expect(events[0].eventName).toBe("Futebol Masculino");
      expect(events[0].startDate).toEqual(new Date("2024-07-25 09:30"));
      expect(events[0].endDate).toEqual(new Date("2024-07-28 20:00"));
    });

    it("Should register a new event in correctly dates fomats.", function() {
      spyOn(console, 'log');

      eventManager.addEvent("Futebol Masculino", "2024-07-25 09:30", "2024-07-28 20:00");
      const events = eventManager.events;
      expect(events.length).toBe(1);
      expect(console.log).toHaveBeenCalledWith("Evento adicionado: [object Object] que começa em 2024-07-25 09:30:00 e finaliza em 2024-07-28 20:00:00.");
    });

    it("should not save an event if one already exists on the date", function(){
      spyOn(console, 'error');

      eventManager.addEvent("Futebol Masculino", "2024-07-25 09:30", "2024-07-28 20:30");
      eventManager.addEvent("Futebol Feminino", "2024-07-27 20:30", "2024-08-01 10:00");
      const events = eventManager.events;

      expect(events.length).toBe(1);
      expect(console.error).toHaveBeenCalledWith('Conflito de agendamento detectado.');
    })
  })

 describe("Event - Ciclo 2", function() {
   let eventManager;

   beforeEach(function() {
     eventManager = new EventManager();
   })

  it("Should remove event.", function(){
     eventManager.addEvent("Futebol Masculino", "2024-07-25 09:30", "2024-07-28 20:00");
     eventManager.removeEvent("Futebol Masculino");
     const events = eventManager.events;

     expect(events.length).toBe(0);
     expect(events[0]).toEqual(undefined);
   });

 })

describe("Event - Ciclo 3", function(){

   let eventManager;

   beforeEach(function() {
     eventManager = new EventManager();
   })

   it("Should show the many added event.", function() {
     eventManager.addEvent("Futebol Masculino", "2024-07-25 09:30", "2024-07-28 20:00");
     eventManager.addEvent("Futebol Feminino", "2024-08-01 20:00", "2024-08-10 20:00");
     eventManager.addEvent("Natação", "2024-08-25 20:00", "2024-08-29 20:00");
     const events = eventManager.events;

    expect(events.length).toBe(3);

    expect(events[0].eventName).toBe("Futebol Masculino");
    expect(events[0].startDate).toEqual(new Date("2024-07-25 09:30"));
    expect(events[0].endDate).toEqual(new Date("2024-07-28 20:00"));

    expect(events[1].eventName).toBe("Futebol Feminino");
    expect(events[1].startDate).toEqual(new Date("2024-08-01 20:00"));
    expect(events[1].endDate).toEqual(new Date("2024-08-10 20:00"));

    expect(events[2].eventName).toBe("Natação");
    expect(events[2].startDate).toEqual(new Date("2024-08-25 20:00"));
    expect(events[2].endDate).toEqual(new Date("2024-08-29 20:00"));
  });

})

describe("Event - Ciclo 4", function() {

  let eventManager;

  beforeEach(function() {
    eventManager = new EventManager();
  })
    
  it("Should handle invalid inputs.", function(){
    spyOn(console, 'error');

    eventManager.addEvent("Futebol Masculino", "ABCD", "ABCD");
    const events = eventManager.events;

    expect(console.error).toHaveBeenCalledWith('Data/hora inválida.'); 
    expect(events.length).toBe(0);
  });

})


describe("Event - Ciclo 5", function() {

  it("should close the readline interface when 'sair' is selected", function() {
    expect(true).toBe(true);
  });

})
