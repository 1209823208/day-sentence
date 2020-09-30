import { Effect, Reducer } from 'umi';
import mork from './mork';

type ListType = {
  title: string;
  content: string;
};

export interface MyCollectModelState {
  list: Array<ListType>;
}

export interface MyCollectModelType {
  namespace: 'MyCollect';
  state: MyCollectModelState;
  effects: {
    fetchList: Effect;
  };
  reducers: {
    saveList: Reducer<MyCollectModelState>;
  };
}

const MyCollectModel: MyCollectModelType = {
  namespace: 'MyCollect',

  state: {
    list: [],
  },

  effects: {
    *fetchList({ payload, callback }, { put }) {
      const res = mork.listData;
      yield put({
        type: 'saveList',
        res,
        callback,
      });
    },
  },
  reducers: {
    saveList(state, action) {
      if (action.callback) {
        action.callback(action.res);
      }
      return {
        ...state,
        list: action.res,
      };
    },
  },
};

export default MyCollectModel;
