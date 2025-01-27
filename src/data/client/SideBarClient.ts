export const LinksListSiderBar = [
    {
        name: "Dashboard",
        url:"/dashboard"
    },
    
    {
        name: "Tickets",
        url: "/tickets",
        subLinks: [
            {
                name: "Creado",
                url:"/tickets"
            },
            {
                name: "Crear",
                url:"/tickets/create"
            }
        ]
    }
]