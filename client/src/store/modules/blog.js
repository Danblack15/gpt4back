import api from '@/helpers/api'
import Cookies from 'js-cookie';

export const Blog = {
    state: () => ({
        blogList: [],
        blogItem: null,
        usersBlog: null
    }),

    getters: {
        getBlogList(state) {
            return state.blogList;
        },

        getBlogData(state) {
            return state.blogItem;
        },

        getUsersBlog(state) {
            return state.usersBlog;
        }
    },

    mutations: {
        setBlogList(state, data) {
            state.blogList = data;
        },

        setBlogItem(state, newBlogData) {
            state.blogItem = newBlogData;
        },

        setUsersBlog(state, data) {
            state.usersBlog = data;
        }
    },

    actions: {
        async fetchBlogList({ commit }, limit) {
            try {
                commit('setLoading', true, { root: true });
                const res = limit ? 
                    await api.get(`blog-item/?limit=${limit}`) : 
                    await api.get('blog-item');

                if (res.data.status !== 'ok') {
                    commit('setLoading', false, { root: true });
                    commit('setHint', res.data.msg, { root: true });
                    return;
                }

                commit('setBlogList', res.data.blogList);
                commit('setLoading', false, { root: true });
            } catch (error) {
                commit('setLoading', false, { root: true });
                console.log(error);
            }
        },

        async fetchBlogItem({ commit }, blogId) {
            try {
                commit('setBlogItem', null);
                commit('setLoading', true, { root: true });
                const res = await api.get(`blog-item/${ blogId }`);

                if (res.data.status !== 'ok') {
                    commit('setLoading', false, { root: true });
                    commit('setHint', res.data.msg, { root: true });
                    return;
                }

                commit('setBlogItem', res.data.blogItem);
                commit('setLoading', false, { root: true });
            } catch (error) {
                commit('setLoading', false, { root: true });
                console.log(error);
            }
        },

        async newBlogItem({ commit, dispatch  }, blogData) {
            try {
                commit('setLoading', true, { root: true });
                const res = await api.post('blog-item/newBlog', blogData);

                if (res.data.status !== 'ok') {
                    commit('setLoading', false, { root: true });
                    commit('setHint', res.data.msg, { root: true });
                    return;
                }
                
                commit('setLoading', false, { root: true });
                dispatch('fetchUsersBlog');
                commit('setHint', 'Стать отправлена!', { root: true });
            } catch (error) {
                commit('setLoading', false, { root: true });
                console.log(error);
            }
        },

        async fetchUsersBlog({ commit }) {
            try {
                let userId = JSON.parse(Cookies.get('account'))._id;

                commit('setLoading', true, { root: true });
                const res = await api.get(`blog-item/usersBlog/${ userId }`);

                if (res.data.status !== 'ok') {
                    commit('setLoading', false, { root: true });
                    commit('setHint', res.data.msg, { root: true });
                    return;
                }

                commit('setUsersBlog', res.data.blogList);
                commit('setLoading', false, { root: true });
            } catch (error) {
                commit('setLoading', false, { root: true });
                console.log(error);
            }
        },
    },

    namespaced: true,
}