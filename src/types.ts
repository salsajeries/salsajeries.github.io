/**
 * Interface for project data in Projects section
 */
export interface Project {
  id: number; // Unique ID of the project, used for sorting
  title: string; // Title of the project
  dates: string; // Dates of the project
  url: string; // URL of the project
  github: string; // GitHub URL of the project
  details: string[]; // Details of the project
  images: string[]; // Image sources for the project
}

export interface PostcardData {
  id: number; // Unique ID of the postcard, used for sorting
  city: string; // City name
  country: string; // Country name
  dates: string; // Dates of visit
  description: string; // Description of visit
  images: string[]; // Image sources
  journalFile: string;  // Journal file source
  postcard: string; // Postcard image source
}
