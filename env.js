import pinyin from './pinyin';

export default {
    title: '魔法工具集',
    domain:
        process.env.NODE_ENV === 'development'
            ? 'localhost:3000'
            : 'tool.wimill.com',
    description: '小工具集合',
    url:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://tool.wimill.com',
    apiUrl:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3001'
            : 'https://media.wimill.com',
    pinyin: pinyin,
    development: process.env.NODE_ENV === 'development',
    axios:
        process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:3001'
            : 'https://media.wimill.com'
};
