
import { Guitar, Headphones, Music, Piano, Mic, Users } from "lucide-react";

export { Guitar, Headphones, Music, Piano, Mic, Users };

// MusicNotes component for floating animation
export const MusicNotes = () => {
  const notes = [
    { id: 1, top: '10%', left: '10%', delay: 0, rotate: 0 },
    { id: 2, top: '15%', left: '80%', delay: 1, rotate: 15 },
    { id: 3, top: '60%', left: '15%', delay: 2, rotate: -15 },
    { id: 4, top: '70%', left: '75%', delay: 3, rotate: 20 },
    { id: 5, top: '35%', left: '30%', delay: 1.5, rotate: -10 },
    { id: 6, top: '25%', left: '65%', delay: 2.5, rotate: 5 },
    { id: 7, top: '80%', left: '40%', delay: 3.5, rotate: -5 },
  ];

  return (
    <>
      {notes.map((note) => (
        <div
          key={note.id}
          className="absolute note-animation opacity-20"
          style={{
            top: note.top,
            left: note.left,
            '--delay': note.delay,
            transform: `rotate(${note.rotate}deg)`,
          } as React.CSSProperties}
        >
          <Music className="h-8 w-8 text-music-primary" />
        </div>
      ))}
    </>
  );
};

export const WaveAnimation = () => {
  return (
    <div className="inline-block animate-wave origin-bottom-right">👋</div>
  );
};
