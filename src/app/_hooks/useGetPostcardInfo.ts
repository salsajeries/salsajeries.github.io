import { useState, useEffect } from "react";
import { db, storage } from "@/lib/firebase";
import { PostcardData } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

export default function useGetPostcardInfo() {
  const [postcards, setPostcards] = useState<PostcardData[]>([]);
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
        const postcardsWithImage = await Promise.all(
          postcardData.map(async (project: any) => {
            const imageRef = ref(storage, project.postcard);
            const imageUrl = await getDownloadURL(imageRef);
            return { ...project, postcard: imageUrl }; // Fits the PostcardData interface
          })
        );

        // Sort postcards by ID, smallest to largest
        setPostcards(postcardsWithImage.sort((a: PostcardData, b: PostcardData) => a.id - b.id));
      } catch (error) {
        setError("Error fetching postcards");
      } finally {
        setLoading(false);
      }
    }

    fetchPostcards();
  }, []);

  return { postcards, loading, error };
};
