import { schema } from 'normalizr';

export const asteroidSchema = new schema.Entity('asteroids', {}, { idAttribute: 'neo_reference_id' });

export const asteroidListSchema = new schema.Array(asteroidSchema);
