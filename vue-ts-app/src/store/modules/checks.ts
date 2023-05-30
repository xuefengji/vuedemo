import type { MutationTree, ActionTree, GetterTree} from "vuex";
import type { State } from '../index'
import http from "@/utils/axios";

interface ApplyList {
    [index: string] : unknown
}

export interface ChecksState {
    applyList: ApplyList[]
}

const state: ChecksState = {
    applyList: []
}
const mutations: MutationTree<ChecksState> = {
    updateApplyList (state, payload) {
        state.applyList = payload
    }
}
const actions: ActionTree<ChecksState, State> = {
    getApplyList (content, payload) {
        return http.get('/checks/apply', payload)
    }
}
const getters: GetterTree<ChecksState, State> = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}