export const Menu = [
    {
        label: 'Dashboard',
        url: '/dashboard',
        icon: 'fas fa-home',
        simpleLink: true
    },
    {
        label: 'Usuários',
        icon: 'fas fa-user',
        simpleLink: false,
        subMenu: [
            {
                label: 'Novo',
                url: '/user/create',
                icon: 'fas fa-home',
            },
            {
                label: 'Lista',
                url: '/user',
                icon: 'fas fa-home',
            }
        ]
    }

]