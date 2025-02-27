import React, { useState, useEffect } from "react";

const CallAPI: React.FC = () => {
  // State to store API data
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch API data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show loading state
  if (loading) return <p>Loading...</p>;

  // Show error state
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px", marginTop: "10px" }}>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default CallAPI;
