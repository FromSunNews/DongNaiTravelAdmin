import React from 'react'

//Social layout
import DashboardLayout from '../layouts/social'

// pages
import Dashboard from '../pages/dashboard'
import Newsfeed from '../pages/newsfeed'
import Socialprofile from '../pages/social-profile'
import Friendprofile from '../pages/friend-profile'
import Friendlist from '../pages/friend-list'
import Friendrequset from '../pages/friend-requset'
import Eventlist from '../pages/event-list'
import Eventdetail from '../pages/event-detail'
import Group from '../pages/group'
import Profilebadges from '../pages/profile-badges'
import Groupdetail from '../pages/group-detail'
import Profileimages from '../pages/profile-images'
import Birthday from '../pages/birthday'
import Accountsetting from '../pages/account-setting'
import Profilevideo from '../pages/profile-video'
import Notification from '../pages/notification'

export const SocialRouter = [
  {
    path: 'social',
    element: <DashboardLayout />,
    children: [
      // Social
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'newsfeed',
        element: <Newsfeed />
      },
      {
        path: 'friend-list',
        element: <Friendlist />
      },
      {
        path: 'friend-requset',
        element: <Friendrequset />
      },
      {
        path: 'friend-profile',
        element: <Friendprofile />
      },
      {
        path: 'profile-badges',
        element: <Profilebadges />
      },
      {
        path: 'profile-images',
        element: <Profileimages />
      },
      {
        path: 'profile-video',
        element: <Profilevideo />
      },
      {
        path: 'birthday',
        element: <Birthday />
      },
      {
        path: 'notification',
        element: <Notification />
      },
      {
        path: 'account-setting',
        element: <Accountsetting />
      },
      {
        path: 'event-list',
        element: <Eventlist />
      },
      {
        path: 'event-detail',
        element: <Eventdetail />
      },
      {
        path: 'group',
        element: <Group />
      },
      {
        path: 'group-detail',
        element: <Groupdetail />
      },
      {
        path: 'social-profile',
        element: <Socialprofile />
      },

    ]
  }
]