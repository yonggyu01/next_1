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
            label : "todos",
            href: "/todos"
        },
        {
            label : "skills",
            href: "/skills"
        },
        {
            label : "Projects",
            href: "/projects"
        }
    
    ]
    }
