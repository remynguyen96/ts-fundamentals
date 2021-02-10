import { IMeetingResource } from './IMeetingResource';
import { conferenceRoomData } from './conferenceRoom';

function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
  return data.splice(amountToShorten, data.length);
}

const stringArray: string[] = ['Visual Basic', 'C++', 'TypeScript'];
const printShortenStringArray = shortenArray<string>(stringArray, 2);
let shrinkArray: <U>(original: Array<U>, units: number) => Array<U>;

shrinkArray = shortenArray;

function getBigRooms<T extends IMeetingResource>(rooms: Array<T>, minSize: number): Array<T> {
  return rooms.filter((room) => {
    return room.capacity > minSize;
  });
}

const getLargeRooms: <T extends IMeetingResource>(rooms: Array<T>, minSize: number) => Array<T> = getBigRooms;
// const largeRooms = getLargeRooms(buildingData, 30);
// const largeRooms = getLargeRooms(partyTentData, 30);
const largeRooms = getLargeRooms(conferenceRoomData, 30);

console.log(largeRooms, 'largeRooms');