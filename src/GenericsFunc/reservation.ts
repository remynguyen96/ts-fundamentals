import { IMeetingResource } from "./IMeetingResource";
import { ConferenceRoom, conferenceRoomData } from "./conferenceRoom";

class Reservation<T extends IMeetingResource> {
  reservationDate!: Date;
  organizerName!: string;
  resource!: T;

  requestResource(requestedResource: T, requester: string) {
    this.resource = requestedResource;
    this.organizerName = requester;
    console.log(`${requester} requested a reservation ${requestedResource.name}`);
  }
  // can not use generics type for static
  // static requestResourceStatic(requestedResource: T, requester: string) {}
}

let teamMeeting = new Reservation<ConferenceRoom>();
teamMeeting.requestResource(conferenceRoomData[0], 'Gary');