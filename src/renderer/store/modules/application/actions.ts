import { ActionContext, ActionTree } from 'vuex'
import { ApplicationMutations, ApplicationMutationTypes } from './mutations'
import { ApplicationState } from './state'
import { RootState } from '@/store'

export enum ApplicationActionTypes {
  CHANGE_NAVIGATOR = 'APPLICATION_CHANGE_NAVIGATOR',
  SET_NAVIGATOR = 'APPLICATION_SET_NAVIGATOR',
  CHANGE_SUB_NAVIGATOR = 'APPLICATION_CHANGE_SUB_NAVIGATOR',
  SET_SUB_NAVIGATOR = 'APPLICATION_SET_SUB_NAVIGATOR',
  CHANGE_USER_NAVIGATOR = 'APPLICATION_CHANGE_USER_NAVIGATOR',
  SET_USER_NAVIGATOR = 'APPLICATION_SET_USER_NAVIGATOR',
}

export type AugmentedActionContext = {
  commit<K extends keyof ApplicationMutations>(
    key: K,
    payload?: Parameters<ApplicationMutations[K]>[1]
  ): ReturnType<ApplicationMutations[K]>
} & Omit<ActionContext<ApplicationState, RootState>, 'commit'>

export interface ApplicationActions {
  [ApplicationActionTypes.CHANGE_NAVIGATOR](
    { commit }: AugmentedActionContext,
  ): void
  [ApplicationActionTypes.SET_NAVIGATOR](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void
  [ApplicationActionTypes.CHANGE_SUB_NAVIGATOR](
    { commit }: AugmentedActionContext,
  ): void
  [ApplicationActionTypes.SET_SUB_NAVIGATOR](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void
  [ApplicationActionTypes.CHANGE_USER_NAVIGATOR](
    { commit }: AugmentedActionContext,
  ): void
  [ApplicationActionTypes.SET_USER_NAVIGATOR](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void
}

export const applicationActions: ActionTree<ApplicationState, RootState> & ApplicationActions = {
  [ApplicationActionTypes.CHANGE_NAVIGATOR] ({ commit }) {
    commit(ApplicationMutationTypes.CHANGE_NAVIGATOR)
  },
  [ApplicationActionTypes.SET_NAVIGATOR] ({ commit }, payload) {
    commit(ApplicationMutationTypes.SET_NAVIGATOR, payload)
  },
  [ApplicationActionTypes.CHANGE_SUB_NAVIGATOR] ({ commit }) {
    commit(ApplicationMutationTypes.CHANGE_SUB_NAVIGATOR)
  },
  [ApplicationActionTypes.SET_SUB_NAVIGATOR] ({ commit }, payload) {
    commit(ApplicationMutationTypes.SET_NAVIGATOR, payload)
  },
  [ApplicationActionTypes.CHANGE_USER_NAVIGATOR] ({ commit }) {
    commit(ApplicationMutationTypes.CHANGE_USER_NAVIGATOR)
  },
  [ApplicationActionTypes.SET_USER_NAVIGATOR] ({ commit }, payload) {
    commit(ApplicationMutationTypes.SET_USER_NAVIGATOR, payload)
  },
}
