// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Plantation, Image } = initSchema(schema);

export {
  Plantation,
  Image
};