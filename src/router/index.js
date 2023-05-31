import React from 'react'

import Horizontal from '../layouts/dashboard/horizontal'
import Boxed from '../layouts/dashboard/boxed'
import DualHorizontal from '../layouts/dashboard/dual-horizontal'
import DualCompact from '../layouts/dashboard/dual-compact'
import BoxedFancy from "../layouts/dashboard/boxed-fancy"
import { DefaultRouter } from './default-router'

// pro
import { BlogRouter } from '../views/modules/blog/router/blog-router';
import { AppointmentRouter } from '../views/modules/appointment/router/appointment-router';
import { SimpleRouter } from './simple-router';
import { SimpleAuthRouter } from '../views/modules/auth/router/simple-router';
import { SocialRouter } from '../views/modules/social/router/social-router';
import { EcommerceRouter } from '../views/modules/e-commerce/router/e-commerce-router';
import { MailRouter } from '../views/modules/mail/router/mail-router';
import { FilemanagerRouter } from '../views/modules/file-manager/router/file-manager-router';
import {Plugingrouter} from '../views/modules/plugins/router/plugins-router'
import Chat from '../views/modules/chat/layouts/chat'

export const IndexRouters = [
    // {
    //     path: 'horizontal',
    //     element: <Horizontal />
    // },
    // {
    //     path: 'dual-horizontal',
    //     element: <DualHorizontal />
    // },
    // {
    //     path: 'dual-compact',
    //     element: <DualCompact />
    // },
    // {
    //     path: 'boxed',
    //     element: <Boxed />
    // },
    // {
    //     path: 'boxedFancy',
    //     element: <BoxedFancy />
    // },
    // {
    //     path: 'chat/chat',
    //     element: <Chat />
    // },
    ...DefaultRouter,
    // ...EcommerceRouter,
    // ...BlogRouter,
    // ...SocialRouter,
    // ...AppointmentRouter,
    // ...FilemanagerRouter,
    // ...MailRouter,
    // ...SimpleRouter,
    // ...SimpleAuthRouter,
    // ...Plugingrouter
]