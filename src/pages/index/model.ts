import { Effect, Reducer, Subscription } from 'umi';

export interface IndexModelState {
  isLove: boolean;
}

export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    updateLove: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  namespace: 'index',

  state: {
    isLove: false,
  },

  effects: {
    *updateLove({ payload }, { put }) {
      yield put({
        type: 'save',
        payload,
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default IndexModel;
