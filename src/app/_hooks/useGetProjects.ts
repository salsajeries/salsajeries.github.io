import { useState, useEffect } from "react";
import { db, storage } from "@/lib/firebase";
import { Project } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

export default function useGetProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);

        // Fetch project data from Firestore
        const projectDocs = await getDocs(collection(db, "projects"));
        const projectData = projectDocs.docs.map((doc) => doc.data());

        // Fetch image URLs from Firebase Storage
        const projectsWithImages = await Promise.all(
          projectData.map(async (project: any) => {
            const imageUrls = project.images
              ? await Promise.all(
                  project.images.map(async (imagePath: string) => {
                    const imageRef = ref(storage, imagePath);
                    const imageUrl = await getDownloadURL(imageRef);
                    return imageUrl;
                  })
                )
              : [];
            return { ...project, images: imageUrls }; // Fits the Project interface
          })
        );

        // Sort projects by ID, largest to smallest
        setProjects(projectsWithImages.sort((a: Project, b: Project) => b.id - a.id));
      } catch (error) {
        setError("Error fetching projects");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
