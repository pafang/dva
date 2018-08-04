import hashHistory from 'react-router-tim-ie8/lib/hashHistory';
import {
  routerMiddleware,
  syncHistoryWithStore,
  routerReducer as routing,
} from 'react-router-redux-ie2';
import createDva from './createDva';

export default createDva({
  mobile: false,
  initialReducer: {
    routing,
  },
  defaultHistory: hashHistory,
  routerMiddleware,

  setupHistory(history) {
    this._history = syncHistoryWithStore(history, this._store);
  },
});
