// Our formatduration
export function formatDuration(sec: number) {
    const m = Math.floor(sec / 60).toString().padStart(2,"0");
    const s = Math.floor(sec % 60).toString().padStart(2,"0");
    return `${m}: ${s}`;
}

//Out likes stored in localStorage
const LIKES_KEY = "video_likes";
export function readLikes(): Record<string, boolean>{
    try {
        return JSON.parse(localStorage.getItem(LIKES_KEY) || "{}");
    } catch (error) {
        return {}
    }
}
export function saveLikes(obj: Record<string,boolean>) {
    try {
        localStorage.setItem(LIKES_KEY,JSON.stringify(obj))
    } catch  {
        
    }
}