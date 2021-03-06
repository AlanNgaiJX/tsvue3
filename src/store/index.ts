import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import layout from "@/store/modules/layout.ts";
import clock from "@/store/modules/clock.ts";

export interface IndexState {
    test: string;
}

export const key: InjectionKey<Store<IndexState>> = Symbol(); //生成该store的标识

export const store = createStore<IndexState>({
    state: {
        test: "",
    },
    mutations: {},
    actions: {},
    modules: {
        layout,
        clock,
    },
});
