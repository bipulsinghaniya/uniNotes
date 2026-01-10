export default function NoteCard({ note }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">

      <h3 className="font-bold text-lg">{note.title}</h3>
      <p className="text-sm text-gray-600 mt-1">
        {note.course} | Year {note.year} | Sem {note.semester}
      </p>


      <p className="mt-1">
        <span className="font-semibold">{note.subject}</span> – {note.chapter}
      </p>

      <a
        href={note.driveLink}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-3 text-blue-600 underline"
      >
        View Notes
      </a>
    </div>
  );
}
