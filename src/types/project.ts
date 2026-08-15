export interface Project {
  /** Display number, e.g. "01" */
  id: string;
  /** Project name */
  name: string;
  /** Short category label, e.g. "Computer Vision" */
  category: string;
  /** 1-3 sentence description */
  description: string;
  /** List of technologies used */
  technologies: string[];
  /** GitHub repository URL */
  github: string;
  /** Live demo URL, or null if there isn't one */
  demo: string | null;
  /** Image filename inside public/images/projects/ */
  image: string;
  /** Alt text describing the image for accessibility */
  imageAlt: string;
}
