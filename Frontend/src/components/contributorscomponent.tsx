import React, { useEffect, useMemo, useState } from 'react';

export interface Contributor {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  credentials?: string;
}

interface ContributorsComponentProps {
  id?: number;
}

const API_ORIGIN = 'https://moonshineconsultingbackend.onrender.com';
const CONTRIBUTORS_API_URL = `${API_ORIGIN}/api/contributors`;
const DEFAULT_CONTRIBUTOR_IMAGE_URL = `${API_ORIGIN}/images/logo.PNG`;

let cachedContributors: Contributor[] | null = null;
let inFlightContributorsRequest: Promise<Contributor[] | null> | null = null;

const normalizeContributorImageUrl = (imagePath: string): string => {
  const normalizedImagePath = (imagePath || '')
    .replace(/^\.\//, '/')
    .replace(/^images\//i, '/images/')
    .replace(/^Images\//, '/images/');

  if (!normalizedImagePath) {
    return DEFAULT_CONTRIBUTOR_IMAGE_URL;
  }

  if (/^https?:\/\//i.test(normalizedImagePath)) {
    return normalizedImagePath;
  }

  if (normalizedImagePath.startsWith('/images/')) {
    return `${API_ORIGIN}${normalizedImagePath}`;
  }

  if (normalizedImagePath.startsWith('/')) {
    return `${API_ORIGIN}${normalizedImagePath}`;
  }

  return `${API_ORIGIN}/images/${normalizedImagePath}`;
};

const normalizeContributor = (contributor: Partial<Contributor>): Contributor => ({
  id: Number(contributor.id) || 0,
  name: contributor.name || '',
  title: contributor.title || '',
  image: normalizeContributorImageUrl(contributor.image || ''),
  bio: contributor.bio || '',
  credentials: contributor.credentials,
});

const fetchContributorsFromApi = async (): Promise<Contributor[] | null> => {
  if (cachedContributors) {
    return cachedContributors;
  }

  if (inFlightContributorsRequest) {
    return inFlightContributorsRequest;
  }

  inFlightContributorsRequest = (async () => {
    try {
      const response = await fetch(CONTRIBUTORS_API_URL);
      if (!response.ok) {
        return null;
      }

      const payload = (await response.json()) as Partial<Contributor>[];
      if (!Array.isArray(payload)) {
        return null;
      }

      const normalizedContributors = payload.map(normalizeContributor);
      cachedContributors = normalizedContributors;
      return normalizedContributors;
    } catch {
      return null;
    } finally {
      inFlightContributorsRequest = null;
    }
  })();

  return inFlightContributorsRequest;
};

const ContributorsComponent = ({ id }: ContributorsComponentProps) => {
  const [liveContributors, setLiveContributors] = useState<Contributor[] | null>(cachedContributors);

  useEffect(() => {
    let isMounted = true;

    const loadContributors = async () => {
      const contributors = await fetchContributorsFromApi();
      if (!isMounted || !contributors) {
        return;
      }

      setLiveContributors(contributors);
    };

    loadContributors();

    return () => {
      isMounted = false;
    };
  }, []);

  const baseContributors = useMemo(() => {
    return liveContributors ?? [];
  }, [liveContributors]);

  let contributors: Contributor[] = [];

  if (id !== undefined) {
    const contributor = baseContributors.find((contrib) => contrib.id === id);
    if (contributor) contributors = [contributor];
  } else {
    contributors = baseContributors;
  }

  if (contributors.length === 0) {
    return <div>No contributors found.</div>;
  }

  return (
    <div style={{ width: "100%" }}>
      {contributors.map((contributor) => (
        <div key={contributor.id} style={{ 
          width: "100%", 
          margin: "0",  
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between",
          height: "100%",
          minHeight: "280px",
          padding: "0"
        }}>
          <div style={{ flex: "0 0 auto" }}>
            <h4 style={{ 
              fontSize: "27px", 
              fontWeight: "bold", 
              marginBottom: "10px", 
              lineHeight: "1.3",
              color: "#08023a",
              fontFamily: "Open Sans, Arial, sans-serif"
            }}>
              {contributor.name}
            </h4>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
              <img
                src={contributor.image}
                alt={contributor.name}
                width={120}
                height={120}
                style={{ 
                  objectFit: "cover", 
                  borderRadius: "50%",
                  border: "3px solid #08023a"
                }}
              />
            </div>
            <p style={{ 
              fontSize: "21px", 
              fontWeight: "600", 
              color: "#08023a", 
              marginBottom: "8px",
              textAlign: "center",
              fontFamily: "Georgia, serif"
            }}>
              {contributor.title}
            </p>
            {contributor.credentials && (
              <p style={{ 
                fontSize: "21px", 
                color: "#666", 
                marginBottom: "12px",
                textAlign: "center",
                fontStyle: "italic",
                fontFamily: "Georgia, serif"
              }}>
                {contributor.credentials}
              </p>
            )}
          </div>
          <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <p style={{ 
              fontSize: "21px", 
              lineHeight: "1.5", 
              marginBottom: "15px",
              textAlign: "justify",
              fontFamily: "Georgia, serif"
            }}>
              {contributor.bio}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContributorsComponent;
