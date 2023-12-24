import { BSON, Object, ObjectSchema } from 'realm';

export class Lists extends Object<Lists> {
  _id!: BSON.ObjectId;
  name!: string;
  owner_id!: string;
  is_favorite!: boolean;
  is_archive!: boolean;

  static schema: ObjectSchema = {
    name: 'Lists',
    primaryKey: '_id',
    properties: {
      _id: { type: 'objectId', default: () => new BSON.ObjectId() },
      name: 'string',
      owner_id: 'string',
      is_favorite: {
        type: 'bool',
        default: false,
      },
      is_archive: {
        type: 'bool',
        default: false,
      },
    },
  };
}
