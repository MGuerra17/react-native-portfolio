export enum AboutSectionType {
  Presentation = "presentation",
  Experience = "experience",
}

export const ABOUT_SECTIONS = [
  {
    key: "description",
    type: AboutSectionType.Presentation,
    titleKey: "about.sections.presentation",
  },
  {
    key: "experience",
    type: AboutSectionType.Experience,
    titleKey: "about.sections.experience",
  },
] as const;

export type AboutSectionItem = (typeof ABOUT_SECTIONS)[number];
