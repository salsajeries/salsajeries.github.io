import { getDownloadURL, ref, listAll } from "firebase/storage";
import { storage } from "./firebase";

// Function to fetch all images from Firebase Storage
export const getTravelImages = async () => {
  const imagesRef = ref(storage, "postcards/"); // Reference to the 'travel' folder
  const result = await listAll(imagesRef); // Get all items in the folder
  const urls = await Promise.all(result.items.map((item) => getDownloadURL(item)));
  return urls;
};
