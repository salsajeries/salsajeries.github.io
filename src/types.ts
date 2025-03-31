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

/**
 * Interface for postcard data in CardStack
 */
export interface PostCardData {
  title: string; // Title of the postcard city
  description: string; // Description of the postcard city visit
  dates: string; // Dates of visit to the postcard city
  imageSrc: string; // Image source for the postcard
  href: string; // Link to city page
}

export interface PostcardData {
  city: string; // City name
  country: string; // Country name
  dates: string; // Dates of visit
  description: string; // Description of visit
  images: string[]; // Image sources
  postcard: string; // Postcard image source
}
