import React from 'react'

//FileManager layout
import Dashboard from '../pages/dashboard'

// pages
import FilemanagerLayout from '../layouts/file-manager'
import DocumentFolder from '../pages/document-folder'
import Imagefolder from '../pages/image-folder'
import Videofolder from '../pages/video-folder'
import Allfile from '../pages/all-file'
import Trash from '../pages/trash'

export const FilemanagerRouter = [
    {
        path: 'file-manager',
        element: <FilemanagerLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'image-folder',
                element: <Imagefolder />
            },
            {
                path: 'video-folder',
                element: <Videofolder />
            },
            {
                path: 'document-folder',
                element: <DocumentFolder />
            },
            {
                path: 'all-file',
                element: <Allfile />
            },
            {
                path: 'trash',
                element: <Trash />
            }
        ]
    }
]