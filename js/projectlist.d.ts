export type projectLocation = "GitHub" | "Itch.io" | "Website";
interface projectFormat {
    name: string;
    description: string;
    projectLocation: projectLocation;
    link: string;
    img: string;
    technologies: string[];
}
export declare const projectsArray: projectFormat[];
export {};
//# sourceMappingURL=projectlist.d.ts.map