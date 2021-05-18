import { ActionContext, ActionTree } from 'vuex'
import { UserMutations, UserMutationTypes } from './mutations'
import { UserState } from './state'
import { RootState } from '@/store'

export enum UserActionTypes {
  setUser = 'USER_SET_USER',
  UPDATE_USER = 'USER_UPDATE_USER',
}

export type AugmentedActionContext = {
  commit<K extends keyof UserMutations>(
    key: K,
    payload: Parameters<UserMutations[K]>[1]
  ): ReturnType<UserMutations[K]>
} & Omit<ActionContext<UserState, RootState>, 'commit'>

export interface UserActions {
  [UserActionTypes.setUser](
    { commit }: AugmentedActionContext,
    payload: UserState
  ): void
  [UserActionTypes.UPDATE_USER](
    { commit }: AugmentedActionContext,
  ): void
}

export const userActions: ActionTree<UserState, RootState> & UserActions = {
  [UserActionTypes.setUser] ({ commit }, payload) {
    commit(UserMutationTypes.SET_USER, payload)
  },
  async [UserActionTypes.UPDATE_USER] ({ commit, dispatch }) {
    commit(UserMutationTypes.SET_USER, {
      id: 1,
      name: 'Test Admin',
      img: 'https://randomuser.me/api/portraits/men/62.jpg',
      color: '#1231f',
      nickname: 'Penguin King',
      Friends: [],
    })
  },
}
