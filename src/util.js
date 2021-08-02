import { utcToZonedTime } from 'date-fns-tz';
import { isSameDay } from 'date-fns';
import isEmpty from 'ramda/src/isEmpty';
import complement from 'ramda/src/complement';
import cond from 'ramda/src/cond';
import isNil from 'ramda/src/isNil';
import anyPass from 'ramda/src/anyPass';
import identity from 'ramda/src/identity';
import pathOr from 'ramda/src/pathOr';
import T from 'ramda/src/T';

export const sentenceMapper = ({
    _id, date, text, updatedAt, createdAt, userId,
}) => ({
    id: _id,
    updatedAt: utcToZonedTime(updatedAt),
    createdAt: utcToZonedTime(createdAt),
    date: utcToZonedTime(date),
    text,
    userId,
});

export const maybe = (fn) => cond([
    [anyPass(isNil, isEmpty, Number.isNaN), identity],
    [T, fn],
]);
export const sentenceCreatedSameDay = (sentence) => isSameDay(new Date(), sentence.createdAt);

export const hasLength = complement(isEmpty);

// API
export const parseSentenceResponse = pathOr([], ['data', 'sentences']);
