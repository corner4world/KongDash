'use strict';

const babelConfig = {
    options: {
        comments: false,
        sourceMap: false,
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false,
                    exclude: [
                        '@babel/plugin-proposal-async-generator-functions',
                        '@babel/plugin-transform-block-scoping',
                        'babel-plugin-transform-async-to-generator',
                        'babel-plugin-transform-regenerator'
                    ]
                }
            ],
            [
                'minify',
                {
                    keepFnName: false,
                    builtIns: false
                }
            ]
        ],
        targets: {
            chrome: 98,
            esmodules: true
        }
    },
    platform: {
        files: [
            {
                expand: true,
                cwd: 'src/platform',
                src: ['**/*.js'],
                dest: 'dist/platform'
            }
        ]
    },
    workbench: {
        files: [
            {
                expand: true,
                cwd: 'src/workbench',
                src: ['**/*.js'],
                dest: 'dist/workbench',
                ignore: ['static/*.js']
            }
        ]
    }
};

const copyConfig = {
    static: {
        files: [
            {
                expand: true,
                cwd: 'src/workbench/static',
                src: ['css/*.css', 'fonts/*.woff2', 'fonts/*.ttf', 'images/*.png', 'views/*.html', '*.js'],
                dest: 'dist/workbench/static'
            },

            {
                expand: true,
                cwd: 'src/workbench',
                src: ['*.html'],
                dest: 'dist/workbench'
            }
        ]
    }
};

const releaseConfig = {
    appId: 'com.kongdash',
    productName: 'KongDash',
    copyright: 'Copyright (c) 2022 Ajay Sreedhar',
    asar: true,
    compression: 'normal',
    removePackageScripts: true,
    nodeGypRebuild: false,
    buildDependenciesFromSource: false,
    extraMetadata: {
        main: 'platform/main.js'
    },
    files: [
        {
            from: 'dist/platform',
            to: 'platform'
        },
        {
            from: 'dist/workbench',
            to: 'workbench'
        },
        'package.json'
    ],
    directories: {
        output: 'release/linux'
    },
    extraResources: [
        {
            from: 'resources/themes',
            to: 'themes'
        }
    ],
    linux: {
        target: ['dir']
    }
};

module.exports = {babelConfig, copyConfig, releaseConfig};
