export const AdminLinksListSiderBar = [
    {
        name: "Dashboard",
        url:"/admin"
    },
    {
        name: "Tickets",
        url: "/tickets",
        subLinks: [
            {
                name: "Creados",
                url:"/admin/tickets/self"
            },
            {
                name: "Crear",
                url:"/admin/tickets/create"
            }
        ]
    },
    {
        name:"Admin",
        url:"/admin",
        subLinks: [
            {
                name: "Tickets",
                url:"/admin/tickets"
            },
            {
                name: "Usuarios",
                url:"/admin/tickets/create"
            }
        ]
    }

]