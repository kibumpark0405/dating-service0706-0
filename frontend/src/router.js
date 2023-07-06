
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import MemberManagementContextProfileManager from "./components/listers/MemberManagementContextProfileCards"
import MemberManagementContextProfileDetail from "./components/listers/MemberManagementContextProfileDetail"

import MatchingManagementContextMatchRequestManager from "./components/listers/MatchingManagementContextMatchRequestCards"
import MatchingManagementContextMatchRequestDetail from "./components/listers/MatchingManagementContextMatchRequestDetail"

import MatchmakerServiceContextMatchmakerServiceManager from "./components/listers/MatchmakerServiceContextMatchmakerServiceCards"
import MatchmakerServiceContextMatchmakerServiceDetail from "./components/listers/MatchmakerServiceContextMatchmakerServiceDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/memberManagementContexts/profiles',
                name: 'MemberManagementContextProfileManager',
                component: MemberManagementContextProfileManager
            },
            {
                path: '/memberManagementContexts/profiles/:id',
                name: 'MemberManagementContextProfileDetail',
                component: MemberManagementContextProfileDetail
            },

            {
                path: '/matchingManagementContexts/matchRequests',
                name: 'MatchingManagementContextMatchRequestManager',
                component: MatchingManagementContextMatchRequestManager
            },
            {
                path: '/matchingManagementContexts/matchRequests/:id',
                name: 'MatchingManagementContextMatchRequestDetail',
                component: MatchingManagementContextMatchRequestDetail
            },

            {
                path: '/matchmakerServiceContexts/matchmakerServices',
                name: 'MatchmakerServiceContextMatchmakerServiceManager',
                component: MatchmakerServiceContextMatchmakerServiceManager
            },
            {
                path: '/matchmakerServiceContexts/matchmakerServices/:id',
                name: 'MatchmakerServiceContextMatchmakerServiceDetail',
                component: MatchmakerServiceContextMatchmakerServiceDetail
            },



    ]
})
