import React, {useEffect,useMemo,useState} from "react"
import type { Video } from "../types"
import VideoCard from "../components/VideoCard"
import { readLikes,saveLikes } from "../utils"


export default function Browse() {
    const [videos,setVideos] = useState<Video[]>([]);
    const [query,setQuery] = useState("");
    const [likes,setLikes] = useState<Record<string,boolean>>(readLikes());
    const [limit,setLimit] = useState(8);



    useEffect(() => {
    fetch("/videos.json")
    .then(r => r.json())
    .then(data => setVideos(data))
    .catch(() => setVideos([]));
},[])

useEffect(() => saveLikes(likes), [likes]);

const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if(!q) return videos;
    return videos.filter(v => v.title.toLowerCase().includes(q) || v.genre.toLowerCase().includes(q))
},[videos,query]);

return(
    <main className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <input
          placeholder="Search title or genre..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded border px-3 py-2 w-full max-w-md"
          aria-label="Search videos by title or genre"
        />
        <div className="ml-4 text-sm text-gray-500">{filtered.length} results</div>
      </div>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {filtered.slice(0, limit).map((v) => (
          <VideoCard key={v.id} video={v} liked={!!likes[v.id]} onToggleLike={(id) => setLikes((p) => ({ ...p, [id]: !p[id] }))} />
        ))}
      </div>

      {filtered.length > limit && (
        <div className="mt-6 flex justify-center">
          <button onClick={() => setLimit((s) => s + 8)} className="px-4 py-2 rounded bg-indigo-600 text-white">
            Load more
          </button>
        </div>
      )}
    </main>
)



}

