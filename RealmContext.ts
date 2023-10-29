import { createRealmContext } from '@realm/react';

import { List } from './src/models/list.model';

export const realmContext = createRealmContext({
  schema: [List],
});
