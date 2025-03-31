import { useState, useEffect } from "react";
import { db, storage } from "@/lib/firebase";
import { PostcardData } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

export default function useGetPostcardImages() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostcards = async () => {
      try {
        setLoading(true);

        // Fetch postcard data from Firestore
        const postcardDocs = await getDocs(collection(db, "travel"));
        const postcardData = postcardDocs.docs.map((doc) => doc.data());

        // Fetch postcard image URL from Firebase Storage
        let postcardImages = await Promise.all(
          postcardData.map(async (postcard: any) => {
            const imageRef = ref(storage, postcard.postcard);
            const imageUrl = await getDownloadURL(imageRef);
            return { postcard: imageUrl, id: postcard.id };
          })
        );
        // Sort postcards by ID, smallest to largest
        postcardImages = postcardImages.sort((a: any, b: any) => a.id - b.id);
        setImages(postcardImages.map(postcard => postcard.postcard))  // Return only image
      } catch (error) {
        setError("Error fetching postcards");
      } finally {
        setLoading(false);
      }
    }

    fetchPostcards();
  }, []);

  return { images, loading, error };
};
