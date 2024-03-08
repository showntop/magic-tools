// const fs = require('fs');
// const path = require('path');
import env from './env';
import keywords from './keywords';

module.exports = {
    env: env,
    target: 'static',
    server: {
        // https:
        //     process.env.NODE_ENV === 'development'
        //         ? {
        //               key: fs.readFileSync(
        //                   path.resolve(__dirname, './ssl/privkey.pem')
        //               ),
        //               cert: fs.readFileSync(
        //                   path.resolve(__dirname, './ssl/server.pem')
        //               )
        //           }
        //         : undefined
    },

    /*
     ** Headers of the page
     */
    head: {
        title: `魔法工具集 - MagicTools工具集合`,
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: '360-site-verification',
                content: "aba65fcc68a4639d33bb5b88a8a680af"
            },
            {
                hid: 'viewport',
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: keywords
            },
            {
                hid: 'description',
                name: 'description',
                itemprop: 'description',
                content: '魔法工具集，一个轻量的工具集合'
            },
            {
                hid: 'author',
                name: 'author',
                content: '译译译'
            },
            {
                name: 'HandheldFriendly',
                content: true
            },
            {
                property: 'og:site_name',
                content: '魔法工具集'
            },
            {
                name: 'mobile-web-app-capable',
                content: 'yes'
            },
            {
                name: 'apple-mobile-web-app-title',
                content: '魔法工具集'
            },
            {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'white'
            },
            {
                name: 'theme-color',
                content: '#ffffff'
            }
        ],
        link: [
            {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: '/icon.svg'
            }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#00adb5',
        height: '4px'
    },

    /*
     ** Global CSS
     */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        'normalize.css',
        '~styles/main.scss',
        'eva-icons/style/eva-icons.css'
    ],

    styleResources: {
        scss: ['styles/variables.scss']
    },

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/element-ui',
        './plugins/request.js',
        {
            src: './plugins/db.js',
            ssr: false
        },
        {
            src: './plugins/modal.js',
            ssr: false
        },
        {
            src: './components/UI/index.js'
        },
        {
            src: './plugins/shortid.js',
            ssr: false
        },
        {
            src: './plugins/clipboard.js',
            ssr: false
        },
        {
            src: './plugins/vue-lazyload.js',
            ssr: false
        },
        {
            src: './plugins/vuejs-noty.js',
            ssr: false
        },
        {
            src: '~/plugins/localStorage.js',
            ssr: false
        },
        {
            src: '~/plugins/SmoothScroll.js',
            ssr: false
        },
        {
            src: '~/plugins/console.style.js',
            ssr: false
        },
        {
            src: '~/plugins/vue-good-table.js'
        },
        {
            src: '~/plugins/baidupush.js',
            ssr: false
        }
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
        [
            '@nuxtjs/google-analytics',
            {
                id: 'G-BB1TDY2FS9'
            }
        ],
        [
            'vue-sweetalert2/nuxt',
            {
                confirmButtonColor: '#249ffd',
                animation: false,
                customClass: {
                    popup: 'sweetalert2'
                }
            }
        ]
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        baseURL: env.axios,
        progress: false
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        transpile: [/^element-ui/],
        postcss: {
            plugins: {
                'postcss-pxtorem': {
                    rootValue: 16,
                    propList: ['*'],
                    selectorBlackList: ['html']
                },
                autoprefixer: {}
            }
        }
    },
    manifest: {
        description: '魔法工具集',
        display: 'standalone',
        name: 'MagicTools 工具集',
        short_name: 'MagicTools',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        scope: '/',
        lang: 'zh-cn'
    },
    router: {
        prefetchLinks: false,
        middleware: ['getCurrentTool', 'baidupush']
    }
};
