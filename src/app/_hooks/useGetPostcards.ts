import { useState, useEffect } from "react";
import { db, storage } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

export default function useGetPostcards() {
  const [postcards, setPostcards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostcards = async () => {
      try {
        setLoading(true);

        // Fetch locations from Firestore
        const locationsDocs = await getDocs(collection(db, "travel"));
        const locationsData = locationsDocs.docs.map((doc) => doc.data());

        // Fetch postcard image URL from Firebase Storage
        const postcardImages = await Promise.all(
          locationsData.map(async (location: any) => {
            const postcardRef = ref(storage, location.postcard);
            const postcardUrl = await getDownloadURL(postcardRef);

            // Wait for image to load
            await new Promise((resolve) => {
              const img = new Image();
              img.src = postcardUrl;
              img.onload = resolve;
            });

            return postcardUrl;
          })
        );
        setPostcards(postcardImages);
      } catch (error) {
        setError("Error fetching postcards");
      } finally {
        setLoading(false);
      }
    };

    fetchPostcards();
  }, []);

  return { postcards, loading, error };
}
