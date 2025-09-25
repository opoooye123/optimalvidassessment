import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Video } from "../types";

export default function VideoDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [videos, setVideos] = React.useState<Video[] | null>(null);

  React.useEffect(() => {
    fetch("/videos.json").then((r) => r.json()).then(setVideos);
  }, []);

  if (!videos) return <div className="p-4">Loading…</div>;
  const video = videos.find((v) => v.id === id);
  if (!video) return <div className="p-4">Video not found. <button onClick={() => navigate(-1)}>Back</button></div>;

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <button onClick={() => navigate(-1)} className="mb-4 px-3 py-1 rounded bg-gray-100">← Back</button>
      <h1 className="text-2xl font-semibold">{video.title}</h1>
      <div className="mt-4 bg-black rounded overflow-hidden">
        <video controls src={video.src} poster={video.thumbnail} className="w-full h-64 sm:h-96" />
      </div>
      <p className="mt-3 text-gray-600">{video.description}</p>
    </main>
  );
}
