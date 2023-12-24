import { createRealmContext } from '@realm/react';

import { Lists } from './src/models/lists.model';

export const realmContext = createRealmContext({
  schema: [Lists],
});
