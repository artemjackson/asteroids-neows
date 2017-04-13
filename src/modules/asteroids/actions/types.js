import { createDomainActionTypeCreator } from 'lib';
import { domain } from '../constants';

const createActionType = createDomainActionTypeCreator(domain);

export const FETCH_ASTEROIDS = createActionType('FETCH_ASTEROIDS');
export const FETCH_ASTEROID_BY_ID = createActionType('FETCH_ASTEROID_BY_ID');
export const LOOKUP_ASTEROID_BY_ID = createActionType('LOOKUP_ASTEROID_BY_ID');
