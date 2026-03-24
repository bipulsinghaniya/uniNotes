import { useEffect, useState, useContext } from "react";
import api from "../api/axios";
import NoteCard from "../components/NoteCard";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  const [notes, setNotes] = useState([]);

  const [course, setCourse] = useState(null);
  const [year, setYear] = useState(null);
  const [semester, setSemester] = useState(null);
  const [subject, setSubject] = useState(null);
  const [chapter, setChapter] = useState(null);

  useEffect(() => {
    api.get("/notes/all").then(res => setNotes(res.data));
  }, []);

  const resetBelow = (level) => {
    if (level === "course") {
      setYear(null); setSemester(null); setSubject(null); setChapter(null);
    }
    if (level === "year") {
      setSemester(null); setSubject(null); setChapter(null);
    }
    if (level === "semester") {
      setSubject(null); setChapter(null);
    }
    if (level === "subject") {
      setChapter(null);
    }
  };

  const unique = (arr) => [...new Set(arr)];

  const filteredNotes = notes.filter(n =>
    (!course || n.course === course) &&
    (!year || n.year === year) &&
    (!semester || n.semester === semester) &&
    (!subject || n.subject === subject) &&
    (!chapter || n.chapter === chapter)
  );

  return (
    <div className="min-h-screen bg-mesh px-4 py-10 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ── Hero Greeting ──────────────────────────── */}
        <div className="mb-14 text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">
              Hello{user?.name ? `, ${user.name}` : ""}
            </span>{" "}
            <span className="animate-wave text-4xl sm:text-5xl">👋</span>
          </h1>
          <p className="text-gray-500 text-lg mt-3 font-medium">
            Welcome to the Notes Portal — pick your course to get started
          </p>
        </div>

        {/* ── Course + Year (Home Page) ──────────────── */}
        {!course && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            <CourseCard
              title="Computer Science & Engineering"
              emoji="💻"
              color="blue"
              onSelect={(y) => { setCourse("CSE"); setYear(y); }}
            />
            <CourseCard
              title="Agriculture"
              emoji="🌾"
              color="green"
              onSelect={(y) => { setCourse("Agriculture"); setYear(y); }}
            />
          </div>
        )}

        {/* ── Semester ───────────────────────────────── */}
        {course && year && !semester && (
          <Section>
            <Back onClick={() => { setCourse(null); resetBelow("course"); }} />
            <BoxGrid
              title="Select Semester"
              items={unique(
                notes
                  .filter(n => n.course === course && n.year === year)
                  .map(n => n.semester)
              )}
              onSelect={setSemester}
              color={course === "CSE" ? "blue" : "green"}
            />
          </Section>
        )}

        {/* ── Subject ────────────────────────────────── */}
        {semester && !subject && (
          <Section>
            <Back onClick={() => { setSemester(null); resetBelow("year"); }} />
            <BoxGrid
              title="Select Subject"
              items={unique(filteredNotes.map(n => n.subject))}
              onSelect={setSubject}
              color={course === "CSE" ? "blue" : "green"}
            />
          </Section>
        )}

        {/* ── Chapter ────────────────────────────────── */}
        {subject && !chapter && (
          <Section>
            <Back onClick={() => { setSubject(null); resetBelow("semester"); }} />
            <BoxGrid
              title="Select Chapter"
              items={unique(filteredNotes.map(n => `${n.chapter}: ${n.title}`))}
              onSelect={(val) => setChapter(val.split(":")[0])}
              color={course === "CSE" ? "blue" : "green"}
            />
          </Section>
        )}

        {/* ── Notes ──────────────────────────────────── */}
        {chapter && (
          <Section>
            <Back onClick={() => setChapter(null)} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {filteredNotes.map(note => (
                <NoteCard key={note._id} note={note} />
              ))}
            </div>
          </Section>
        )}

      </div>
    </div>
  );
}

/* ════════════════════ LOCAL COMPONENTS ════════════════════ */

function Section({ children }) {
  return (
    <div className="glass-strong rounded-3xl shadow-xl p-8 sm:p-10 animate-fade-in-up">
      {children}
    </div>
  );
}

function CourseCard({ title, emoji, color, onSelect }) {
  const palette = {
    blue: {
      badge: "from-indigo-500 to-blue-600",
      badgeShadow: "shadow-indigo-200",
      btn: "border-indigo-200 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white",
      glow: "glow-blue",
      ring: "hover:ring-indigo-100",
    },
    green: {
      badge: "from-emerald-500 to-teal-600",
      badgeShadow: "shadow-emerald-200",
      btn: "border-emerald-200 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white",
      glow: "glow-green",
      ring: "hover:ring-emerald-100",
    },
  };

  const p = palette[color];

  return (
    <div className={`glass-strong rounded-3xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ${p.glow} animate-fade-in-up`}>
      {/* Badge */}
      <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${p.badge} text-white px-6 py-3 rounded-2xl font-bold text-base shadow-lg ${p.badgeShadow} mb-8`}>
        <span className="text-2xl">{emoji}</span>
        {title}
      </div>

      {/* Year Grid */}
      <div className="grid grid-cols-2 gap-4 stagger-children">
        {[1, 2, 3, 4].map((y) => (
          <button
            key={y}
            onClick={() => onSelect(y)}
            className={`
              relative overflow-hidden
              bg-white text-gray-800
              border-2 ${p.btn}
              px-6 py-4 rounded-2xl font-semibold
              transition-all duration-200
              hover:scale-[1.04] hover:shadow-md
              hover:ring-4 ${p.ring}
              cursor-pointer
              focus:outline-none
              animate-fade-in-up
            `}
          >
            <span className="text-lg">{y}</span>
            <span className="text-sm ml-1 opacity-70">Year</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function BoxGrid({ title, items, onSelect, color }) {
  const palette = {
    blue: "border-indigo-200 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white hover:ring-4 hover:ring-indigo-100",
    green: "border-emerald-200 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white hover:ring-4 hover:ring-emerald-100",
  };

  const btnClass = palette[color] || palette.blue;

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 tracking-tight">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
        {items.map(item => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className={`
              bg-white text-gray-800
              border-2 ${btnClass}
              px-6 py-4 rounded-2xl font-semibold
              transition-all duration-200
              hover:scale-[1.04] hover:shadow-md
              cursor-pointer
              focus:outline-none
              animate-fade-in-up
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

function Back({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold mb-6 px-4 py-2 rounded-xl hover:bg-indigo-50 transition-all duration-200 cursor-pointer focus:outline-none group"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Change Selection
    </button>
  );
}
