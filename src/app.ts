import * as _ from 'lodash';

// Union type & strictNullChecks
let checkingUndefined: string | null | undefined;

checkingUndefined = '';
checkingUndefined = null;
checkingUndefined = undefined;

// Type Assertions
const value: any = 5;
let fixedString: string = (<number>value).toFixed(2);
fixedString = (value as number).toFixed(2);

// noImplicitAny
function DisplayLog(point: number): void {
  let logger: (value: string) => void;

  if (_.isEmpty(point)) {
    logger = logError;
  } else {
    logger = logMessage;
  }
  logger('information');
}
const logMessage = (msg: string) => console.log(`Announcement: ${msg}`);
const logError = (err: string) => console.error(`Error: ${err}!`);

// Interface
interface DamageLogger {
  (reason: string): void;
}
let logDamage: DamageLogger;
logDamage = (damage: string) => console.log(`Damage reported: ${damage}`);

interface LibraryResource {
  catalogNumber: number;
}
interface Book {
  title: string;
}
interface Encycloperia extends LibraryResource, Book {
  volume: number;
}
const refBook: Encycloperia = {
  catalogNumber: 1234,
  title: "The life of book",
  volume: 1,
};

// Function Overloads
function getTitle(author: string): string[];
function getTitle(available: boolean): string[];
function getTitle(bookProperty: any): string[] {
  if (typeof bookProperty === 'string') {
    return ['string'];
  } else if (typeof bookProperty === 'boolean') {
    return ['boolean'];
  }

  return [];
}
console.log(getTitle(false));
console.log(getTitle('remy'));

// Tuple type
let myTuple: [string, number] = ['truck', 25];