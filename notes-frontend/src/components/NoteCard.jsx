// export default function NoteCard({ note }) {
//   return (
//     <div className="glass-strong rounded-2xl p-5 border-l-4 border-indigo-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-fade-in-up group">
//       <h3 className="font-bold text-lg text-gray-900 group-hover:text-indigo-700 transition-colors">
//         {note.title}
//       </h3>

//       <p className="text-sm text-gray-500 mt-1.5 flex items-center gap-2">
//         <span className="inline-block w-2 h-2 rounded-full bg-indigo-400"></span>
//         {note.course} &middot; Year {note.year} &middot; Sem {note.semester}
//       </p>

//       <p className="mt-2 text-gray-700">
//         <span className="font-semibold">{note.subject}</span>
//         <span className="text-gray-400 mx-1">—</span>
//         {note.chapter}
//       </p>

//       <a
//         href={note.driveLink}
//         target="_blank"
//         rel="noreferrer"
//         className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//         </svg>
//         View Notes
//       </a>
//     </div>
//   );
// }




export default function NoteCard({ note }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

        .note-card {
          font-family: 'Nunito', sans-serif;
          background: #ffffff;
          border-radius: 20px;
          padding: 22px 22px 18px 22px;
          border-left: 4.5px solid #4f8ef7;
          box-shadow: 0 4px 24px rgba(99,102,241,0.09), 0 1px 4px rgba(0,0,0,0.04);
          transition: transform 0.22s cubic-bezier(.34,1.56,.64,1), box-shadow 0.22s ease;
          position: relative;
          overflow: hidden;
        }

        .note-card::before {
          content: '';
          position: absolute;
          top: -30px;
          right: -30px;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(79,142,247,0.08), rgba(108,99,255,0.06));
          pointer-events: none;
        }

        .note-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 36px rgba(79,142,247,0.18), 0 2px 8px rgba(0,0,0,0.06);
        }

        .note-card-title {
          font-size: 1.08rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0 0 8px 0;
          transition: color 0.18s;
          line-height: 1.3;
        }

        .note-card:hover .note-card-title {
          color: #4f8ef7;
        }

        .note-card-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #94a3b8;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .note-card-meta-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f8ef7, #6c63ff);
          flex-shrink: 0;
        }

        .note-card-meta-sep {
          color: #cbd5e1;
          font-weight: 400;
          margin: 0 1px;
        }

        .note-card-subject {
          font-size: 0.92rem;
          color: #475569;
          margin: 0 0 16px 0;
          line-height: 1.4;
        }

        .note-card-subject strong {
          color: #1e293b;
          font-weight: 800;
        }

        .note-card-subject-sep {
          color: #cbd5e1;
          margin: 0 4px;
        }

        .note-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 20px;
          border-radius: 12px;
          background: linear-gradient(135deg, #4f8ef7 0%, #6c63ff 100%);
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 800;
          font-family: 'Nunito', sans-serif;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(79,142,247,0.32);
          letter-spacing: 0.02em;
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .note-card-btn:hover {
          box-shadow: 0 8px 24px rgba(79,142,247,0.44);
          transform: scale(1.04);
          color: #fff;
          text-decoration: none;
        }

        .note-card-btn svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
        }
      `}</style>

      <div className="note-card">
        <h3 className="note-card-title">{note.title}</h3>

        <p className="note-card-meta">
          <span className="note-card-meta-dot"></span>
          {note.course}
          <span className="note-card-meta-sep">·</span>
          Year {note.year}
          <span className="note-card-meta-sep">·</span>
          Sem {note.semester}
        </p>

        <p className="note-card-subject">
          <strong>{note.subject}</strong>
          <span className="note-card-subject-sep">—</span>
          {note.chapter}
        </p>

        <a
          href={note.driveLink}
          target="_blank"
          rel="noreferrer"
          className="note-card-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          View Notes
        </a>
      </div>
    </>
  );
}