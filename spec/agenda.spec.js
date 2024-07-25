const EventManager = require('../agenda');

describe("Event", function() {

    let eventManager;

    beforeEach(function() {
      eventManager = new EventManager();
  });

    it("should have name, startHour and endHour", function() { 
      
      expect(event.name).toBe(null);
      expect(event.startHour).toBe(null);
      expect(event.endHour).toBe(null);
    })

    it("should add an event with a valid date", function() {
      eventManager.addEvent("Futebol Masculino", "2024-07-25 09:30");
      const events = eventManager.events;
      expect(events.length).toBe(1);
      expect(events[0].name).toBe("Futebol Masculino");
      expect(events[0].dateTime).toEqual(new Date("2024-07-25 09:30"));
  });

    it("should not allow registrate an existent Event", function(){
      const event = Event();
      const eventCreated = event.addEvent("Futebol Masculino", "2024-07-25 09:30", "2024-07-25 09:30");
      const existingEvent = event.getElementByHour("2024-07-25 09:30");

      expect(eventCreated).toEqual(existingEvent);
    })
})
