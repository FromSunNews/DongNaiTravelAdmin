import React from 'react'

// pulgin layout
import PluginsLayout from '../layouts/plugins'

// pages
import Apexcharts from '../pages/apexcharts'
import Treeview from '../pages/treeview';
import Buttonhover from '../pages/button-hover';
import Choisejs from '../pages/choise-js';
import Flatpickrr from '../pages/flatpickr';
import Fslightbox from '../pages/fslightbox';
import Galleryhover from '../pages/gallery-hover';
import Imagecopper from '../pages/image-copper';
import Loader from '../pages/loader';
import Select2 from '../pages/select2';
import Sweetalert from '../pages/sweet-alert';
import Quilleditor from '../pages/quill-editor';
import Uppyplugin from '../pages/uppy';

export const Plugingrouter = [

    {
        path: "/",
        element: <PluginsLayout />,
        children: [
            {
                path: 'plugins/apexcharts',
                element: <Apexcharts />
            },
            {
                path: 'plugins/treeview',
                element: <Treeview />
            },
            {
                path: 'plugins/button-hover',
                element: <Buttonhover />
            },
            {
                path: 'plugins/choise-js',
                element: <Choisejs />
            },
            {
                path: 'plugins/flatpickr',
                element: <Flatpickrr />
            },
            {
                path: 'plugins/fslightbox',
                element: <Fslightbox />
            },
            {
                path: 'plugins/gallery-hover',
                element: <Galleryhover />
            },
            {
                path: 'plugins/image-copper',
                element: <Imagecopper />
            },
            {
                path: 'plugins/loader',
                element: <Loader />
            },
            {
                path: 'plugins/select2',
                element: <Select2 />
            },
            {
                path: 'plugins/sweet-alert',
                element: <Sweetalert />
            },
            {
                path: 'plugins/quill-editor',
                element: <Quilleditor />
            },
            {
                path: 'plugins/uppy',
                element: <Uppyplugin />
            },
        ]
    }
]