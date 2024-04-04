export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "myapp",
	description: "First project",
	navItems: [
		{
			label: "Yonggyu",
			href: "/",
		},
        {
            label : "Redux_Todo",
            href: "/todos"
        },
        {
            label : "DB_Todo",
            href: "/DB_todos"
        }
    
    ]
    }
