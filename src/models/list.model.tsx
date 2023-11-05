import Realm, { BSON } from 'realm';

export class List extends Realm.Object<List> {
  _id!: BSON.ObjectId;
  name!: string;
  owner_id!: string;
  is_favorite!: boolean;
  is_archive!: boolean;

  static schema: Realm.ObjectSchema = {
    name: 'List',
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
