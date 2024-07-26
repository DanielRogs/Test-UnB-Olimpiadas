const EventManager = require('../agenda');
const Interface = require('../interface');
const MockStdin = require('mock-stdin');

describe("Event - Ciclo 1", function() {

    let eventManager;
    let interface;

    beforeEach(function() {
      eventManager = new EventManager();
      interface = new Interface();
  });

    it("Should show the newly added event.", function() {
      eventManager.addEvent("Futebol Masculino", "2024-07-25 09:30", "2024-07-28 20:00");
      const events = eventManager.events;
      expect(events.length).toBe(1);
      expect(events[0].eventName).toBe("Futebol Masculino");
      expect(events[0].startDate).toEqual(new Date("2024-07-25 09:30"));
      expect(events[0].endDate).toEqual(new Date("2024-07-28 20:00"));
    });

    it("should add an event with a valid date", function() {
      
      
    });

    it("should not save an event if one already exists on the date", function(){
      spyOn(console, 'error');

      eventManager.addEvent("Futebol Masculino", "2024-07-25 09:30", "2024-07-28 20:30");
      eventManager.addEvent("Futebol Feminino", "2024-07-27 20:30", "2024-08-01 10:00");
      const events = eventManager.events;

      expect(events.length).toBe(1);
      expect(console.error).toHaveBeenCalledWith('Já existe um evento no período.');
    })
})

describe("Event - Ciclo 2", function() {
  let eventManager;
  let interface;

  beforeEach(function() {
    eventManager = new EventManager();
    interface = new Interface();})

  it("Should remove event.", function(){
    eventManager.addEvent("Futebol Masculino", "2024-07-25 09:30", "2024-07-28 20:00");
    eventManager.removeEvent("Futebol Masculino");
    const events = eventManager.events;
    expect(events.length).toBe(0);
    expect(events[0].eventName).toEqual(null);
  });

})

describe("Event - Ciclo 3", function(){

  let eventManager;
  let interface;

  beforeEach(function() {
    eventManager = new EventManager();
    interface = new Interface();})

  it("should see the event", function(){
    events = eventManager.listEvents();
    expect(events.length).toBeGreaterThan(0);
  })

})

describe("Event - Ciclo 4", function() {

 let eventManager;
  let interface;

  beforeEach(function() {
    eventManager = new EventManager();
    interface = new Interface();})

    
it("Should handle invalid inputs.", function(){
  spyOn(console, 'error');

  eventManager.addEvent("Futebol Masculino", "ABCD", "ABCD");
  const events = eventManager.events;

  expect(console.error).toHaveBeenCalledWith('Data/hora inválida.'); 
  expect(events.length).toBe(0);
});

})


describe("Event - Ciclo 5", function() {

  let eventManager;

  beforeEach(function() {
    eventManager = new EventManager();
  });

  it("Should check output", function(){
    const events = eventManager.events;
    expect(events.length).toBe(0);
    expect(events[0].eventName).toEqual(null);
  });

})
