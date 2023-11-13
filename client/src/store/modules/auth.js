import api from '@/helpers/api'
import router from '@/router';
import Cookies from 'js-cookie';

export const Auth = {
    state: () => ({
        account: Cookies.get('account') ? Cookies.get('account') : {},
        token: Cookies.get('token') ? Cookies.get('token') : {}
    }),

    getters: {
        getAccount(state) {
            return JSON.parse(state.account);
        },

        getToken(state) {
            return state.token;
        },
    },

    mutations: {
        setAccount(state, data) {
            state.account = data;
        },

        setToken(state, data) {
            state.token = data;
        },
    },

    actions: {
        async register({ commit }, data) {
            try {
                commit('setLoading', true, { root: true });
                const res = await api.post('auth/register', data);

                if (res.data.status !== 'ok') {
                    commit('setLoading', false, { root: true });
                    commit('setHint', res.data.msg, { root: true });
                    return;
                }

                Cookies.set('account', JSON.stringify(res.data.user));
                Cookies.set('token', res.data.token);

                commit('setLoading', false, { root: true });

                router.go('/explore');
            } catch (error) {
                commit('setLoading', false, { root: true });
                console.log(error);
            }
        },

        async login({ commit }, data) {
            try {
                commit('setLoading', true, { root: true });
                const res = await api.post('auth/login', data);

                if (res.data.status !== 'ok') {
                    commit('setLoading', false, { root: true });
                    commit('setHint', res.data.msg, { root: true });
                    return;
                }

                Cookies.set('account', JSON.stringify(res.data.user));
                Cookies.set('token', res.data.token);

                commit('setLoading', false, { root: true });
                router.go('/explore');
            } catch (error) {
                commit('setLoading', false, { root: true });
                console.log(error);
            }
        },

        async logout({ commit }, data) {
            Cookies.remove('account');
            Cookies.remove('token');

            router.go('/');
        },
    },

    namespaced: true,
}