/**
 * Copyright (c) Ajay Sreedhar. All rights reserved.
 *
 * Licensed under the MIT License.
 * Please see LICENSE file located in the project root for more information.
 */

'use strict';

const {shell: electronShell} = require('electron');

const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Settings',
                click: (menuItem, browserWindow) => {
                    browserWindow.webContents.send('workbench:AsyncEventPush', 'Open-Settings-View');
                }
            },
            {type: 'separator'},
            {role: 'quit'}
        ]
    },
    {
        label: 'Edit',
        submenu: [{role: 'undo'}, {role: 'redo'}, {type: 'separator'}, {role: 'cut'}, {role: 'copy'}, {role: 'paste'}]
    },
    {
        label: 'Window',
        submenu: [{role: 'togglefullscreen'}]
    },
    {
        label: 'Help',
        submenu: [
            {
                label: 'GitHub Repository',
                click: () => {
                    electronShell.openExternal('https://github.com/ajaysreedhar/KongDash').catch(() => {});
                }
            },
            {
                label: 'Report Issues',
                click: () => {
                    electronShell.openExternal('https://github.com/ajaysreedhar/KongDash/issues').catch(() => {});
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'About KongDash',
                click: () => {
                    electronShell.openExternal('https://ajaysreedhar.github.io/KongDash/').catch(() => {});
                }
            }
        ]
    }
];

module.exports = {menuTemplate};
