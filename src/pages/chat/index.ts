import * as Handlebars from 'handlebars';
import page from 'bundle-text:./chat.hbs';
import './chat.scss';

const pageTemplate = Handlebars.compile(page)({
    activeCompanionDisplayName: 'Иван',
    avatar: {
        src: '/static/no-image.jpg',
        customClass: 'avatar--small'
    },
    submit: {
        text: 'Отправить'
    },
    fields: [
        {
            type: "text",
            name: "message",
            value: "Сообщение",
            customClass: "form__form-field--horizontal", 
            inputCustomClass: "form__form-field-input--horizontal"
        }
    ],
    customClass: "form--horizontal",
    messages: [
        {
            time: '11:05',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Андрей',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Вы: стикер',
            isSelected: true
        },
        {
            time: '15:05',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Илья',
            src: '/static/no-image.jpg',
            customClass: 'avatar--small',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Приветики',
            isSelected: false
        },
        {
            time: '16:11',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Вадим',
            src: '/static/no-image.jpg',
            customClass: 'avatar--small',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Вы: Я вижу будущее! Тут будет очень-очень много текста',
            isSelected: false
        },
        {
            time: 'Ср',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Стасян',
            src: '/static/no-image.jpg',
            customClass: 'avatar--small',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Вы: стикер',
            isSelected: false
        },
        {
            time: '11:05',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Андрей',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Вы: стикер',
            isSelected: false
        },
        {
            time: '15:05',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Илья',
            src: '/static/no-image.jpg',
            customClass: 'avatar--small',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Приветики',
            isSelected: false
        },
        {
            time: '16:11',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Вадим',
            src: '/static/no-image.jpg',
            customClass: 'avatar--small',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Вы: Я вижу будущее! Тут будет очень-очень много текста',
            isSelected: false
        },
        {
            time: 'Ср',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Стасян',
            src: '/static/no-image.jpg',
            customClass: 'avatar--small',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Вы: стикер',
            isSelected: false
        },
        {
            time: '11:05',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Андрей',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Вы: стикер',
            isSelected: false
        },
        {
            time: '15:05',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Илья',
            src: '/static/no-image.jpg',
            customClass: 'avatar--small',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Приветики',
            isSelected: false
        },
        {
            time: '16:11',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Вадим',
            src: '/static/no-image.jpg',
            customClass: 'avatar--small',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Вы: Я вижу будущее! Тут будет очень-очень много текста',
            isSelected: false
        },
        {
            time: 'Ср',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Стасян',
            src: '/static/no-image.jpg',
            customClass: 'avatar--small',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Вы: стикер',
            isSelected: false
        },
        {
            time: '11:05',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Андрей',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Вы: стикер',
            isSelected: false
        },
        {
            time: '15:05',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Илья',
            src: '/static/no-image.jpg',
            customClass: 'avatar--small',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Приветики',
            isSelected: false
        },
        {
            time: '16:11',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Вадим',
            src: '/static/no-image.jpg',
            customClass: 'avatar--small',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Вы: Я вижу будущее! Тут будет очень-очень много текста',
            isSelected: false
        },
        {
            time: 'Ср',
            avatar: {
                src: '/static/no-image.jpg',
                customClass: 'avatar--small',
            },
            companionDisplayName: 'Стасян',
            src: '/static/no-image.jpg',
            customClass: 'avatar--small',
            unreadCount: Math.round(Math.random() * 100),
            lastMessage: 'Вы: стикер',
            isSelected: false
        },
    ],
});


export default pageTemplate;