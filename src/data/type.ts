export interface TechStack{
    name: string;
    icon: string;
    tag: string;
    variant: 'primary' | 'secondary';
}


export interface Experience {
    title: string;
    position: string;
    picture_src: string;
    description: string;
    pdf_link: string;
    tags: string[];
    date: string;
}

export interface Project{
    name: string;
    description: string;
    image: string;
    techstack: string[];
    date: string;
    github_link: string;
    hosting_link: string;
    image_banner: string;
    video_demo: string;
    image_gallery: string[];
}

export interface Contact{
    icon: string;
    contact_name: string;
    label: string;
    href: string;
    username: string;
}

export interface NavbarLink{
    id: string;
    label: string;
    icon: string;
}

export interface SocialLink{
    icon: string;
    href: string;
    label: string;
}

