import React from "react";
import type { Video } from "../types";
import { formatDuration } from "../utils";
import { Link } from "react-router-dom";

export default function VideoCard({
  video,
  liked,
  onToggleLike,
}: {
  video: Video;
  liked: boolean;
  onToggleLike: (id: string) => void;
}) {
  return (
    <article className="bg-white rounded shadow-sm overflow-hidden focus-within:ring-2">
      <Link to={`/video/${video.id}`} className="block">
      <div className="relative h-40">
         <img src={video.thumbnail} alt={`${video.title}`}  className="w-full h-full object-cover" />
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            {formatDuration(video.duration)}
        </div>
      </div>
      </Link>

      <div className="p-3 flex justify-between items-start gap-2">
        <div>
             <h3 className="text-sm font-semibold">
                <Link to={`/video/${video.id}`}>{video.title}</Link>
             </h3>
             <p className="text-xs text-gray-500 mt-1">{video.genre}</p>
        </div>

        <button
        aria-pressed={liked}
        aria-label={liked ? `Unlike ${video.title}`: `Like${video.title}`}
        onClick={() => onToggleLike(video.id)}
        className="text-sm px-2 py-1 rounded focus:outline-none"
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>
    </article>
  )
}
