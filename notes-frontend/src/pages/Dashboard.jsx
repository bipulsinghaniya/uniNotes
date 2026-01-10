



// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import NoteCard from "../components/NoteCard";

// export default function Dashboard() {
//   const [notes, setNotes] = useState([]);

//   const [course, setCourse] = useState("");
//   const [year, setYear] = useState("");
//   const [semester, setSemester] = useState("");
//   const [subject, setSubject] = useState("");
//   const [chapter, setChapter] = useState("");

//   useEffect(() => {
//     api.get("/notes/all").then(res => setNotes(res.data));
//   }, []);

//   // Unique helpers
//   const unique = (arr, key) =>
//     [...new Set(arr.map(item => item[key]))];

//   const filteredBase = notes.filter(note =>
//     (!course || note.course === course) &&
//     (!year || note.year === Number(year)) &&
//     (!semester || note.semester === Number(semester))
//   );

//   const subjects = unique(filteredBase, "subject");
//   const chapters = unique(
//     filteredBase.filter(n => n.subject === subject),
//     "chapter"
//   );

//   const finalNotes = filteredBase.filter(note =>
//     (!subject || note.subject === subject) &&
//     (!chapter || note.chapter === chapter)
//   );

//   const resetAll = () => {
//     setCourse("");
//     setYear("");
//     setSemester("");
//     setSubject("");
//     setChapter("");
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Notes</h1>

//       {(course || year || semester || subject || chapter) && (
//         <button
//           onClick={resetAll}
//           className="mb-4 text-blue-600 underline"
//         >
//           ← Change Selection
//         </button>
//       )}

//       {/* COURSE */}
//       {!course && (
//         <div className="grid grid-cols-2 gap-6 max-w-xl">
//           {["CSE", "Agriculture"].map(c => (
//             <button
//               key={c}
//               onClick={() => setCourse(c)}
//               className="border p-6 rounded text-xl hover:bg-gray-100"
//             >
//               {c}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* YEAR */}
//       {course && !year && (
//         <div className="grid grid-cols-2 gap-6 max-w-xl">
//           {[1, 2, 3, 4].map(y => (
//             <button
//               key={y}
//               onClick={() => setYear(y)}
//               className="border p-6 rounded text-lg hover:bg-gray-100"
//             >
//               {y} Year
//             </button>
//           ))}
//         </div>
//       )}

//       {/* SEMESTER */}
//       {course && year && !semester && (
//         <div className="grid grid-cols-2 gap-6 max-w-xl">
//           {[1, 2].map(sem => (
//             <button
//               key={sem}
//               onClick={() => setSemester(sem)}
//               className="border p-6 rounded text-lg hover:bg-gray-100"
//             >
//               Semester {sem}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* SUBJECT */}
//       {course && year && semester && !subject && (
//         <div className="grid grid-cols-3 gap-4">
//           {subjects.map(sub => (
//             <button
//               key={sub}
//               onClick={() => setSubject(sub)}
//               className="border p-4 rounded hover:bg-gray-100"
//             >
//               {sub}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* CHAPTER */}
//      {/* CHAPTER */}
// {subject && !chapter && (
//   <div className="grid grid-cols-3 gap-4">
//     {chapters.map((ch, index) => (
//       <button
//         key={ch}
//         onClick={() => setChapter(ch)}
//         className="border p-4 rounded hover:bg-gray-100 text-left"
//       >
//         <h3 className="font-semibold">
//           Chapter {ch}
//         </h3>

//         <p className="text-sm text-gray-600 mt-1">
//           {
//             notes.find(
//               n =>
//                 n.subject === subject &&
//                 n.chapter === ch &&
//                 n.semester === Number(semester)
//             )?.title
//           }
//         </p>
//       </button>
//     ))}
//   </div>
// )}


//       {/* NOTES */}
//       {course && year && semester && subject && chapter && (
//         <div className="grid grid-cols-3 gap-4">
//           {finalNotes.map(note => (
//             <NoteCard key={note._id} note={note} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import api from "../api/axios";

// export default function Dashboard() {
//   const [notes, setNotes] = useState([]);

//   const [step, setStep] = useState("course");
//   const [selection, setSelection] = useState({
//     course: null,
//     year: null,
//     semester: null,
//     subject: null,
//   });

//   useEffect(() => {
//     api.get("/notes/all").then(res => setNotes(res.data));
//   }, []);

//   // Utility: unique values
//   const unique = (arr) => [...new Set(arr)];

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Notes</h1>

//       {step !== "course" && (
//         <button
//           onClick={() => {
//             setStep("course");
//             setSelection({
//               course: null,
//               year: null,
//               semester: null,
//               subject: null,
//             });
//           }}
//           className="text-blue-600 underline mb-6"
//         >
//           ← Change Selection
//         </button>
//       )}

//       {/* ================= COURSE ================= */}
//       {step === "course" && (
//         <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">
//           {["CSE", "Agriculture"].map(course => (
//             <button
//               key={course}
//               onClick={() => {
//                 setSelection({ course });
//                 setStep("year");
//               }}
//               className="border-2 rounded-lg py-8 text-xl font-semibold hover:bg-blue-50"
//             >
//               {course}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* ================= YEAR ================= */}
//       {step === "year" && (
//         <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
//           {[1, 2, 3, 4].map(year => (
//             <button
//               key={year}
//               onClick={() => {
//                 setSelection(prev => ({ ...prev, year }));
//                 setStep("semester");
//               }}
//               className="border-2 rounded-lg py-6 text-lg font-semibold"
//             >
//               {year} Year
//             </button>
//           ))}
//         </div>
//       )}

//       {/* ================= SEMESTER ================= */}
//       {step === "semester" && (
//         <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">
//           {[1, 2].map(sem => (
//             <button
//               key={sem}
//               onClick={() => {
//                 setSelection(prev => ({ ...prev, semester: sem }));
//                 setStep("subject");
//               }}
//               className="border-2 rounded-lg py-6"
//             >
//               Semester {sem}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* ================= SUBJECT ================= */}
//       {step === "subject" && (
//         <div className="grid grid-cols-3 gap-4 mt-10">
//           {unique(
//             notes
//               .filter(n =>
//                 n.course === selection.course &&
//                 n.year === selection.year &&
//                 n.semester === selection.semester
//               )
//               .map(n => n.subject)
//           ).map(subject => (
//             <button
//               key={subject}
//               onClick={() => {
//                 setSelection(prev => ({ ...prev, subject }));
//                 setStep("chapter");
//               }}
//               className="border rounded-lg p-4 hover:bg-gray-50"
//             >
//               {subject}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* ================= CHAPTER ================= */}
//       {step === "chapter" && (
//         <div className="grid grid-cols-3 gap-4 mt-10">
//           {notes
//             .filter(n =>
//               n.course === selection.course &&
//               n.year === selection.year &&
//               n.semester === selection.semester &&
//               n.subject === selection.subject
//             )
//             .map(note => (
//               <a
//                 key={note._id}
//                 href={note.driveLink.replace("/view", "/preview")}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="border rounded-lg p-4 hover:bg-gray-50"
//               >
//                 <h3 className="font-bold">{note.chapter}</h3>
//                 <p className="text-sm text-gray-500">{note.title}</p>
//                 <p className="text-xs text-gray-400 mt-1">
//                   {note.course} | Year {note.year} | Sem {note.semester}
//                 </p>
//               </a>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// }















// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import NoteCard from "../components/NoteCard";

// export default function Dashboard() {
//   const [notes, setNotes] = useState([]);

//   const [course, setCourse] = useState(null);
//   const [year, setYear] = useState(null);
//   const [semester, setSemester] = useState(null);
//   const [subject, setSubject] = useState(null);
//   const [chapter, setChapter] = useState(null);

//   useEffect(() => {
//     api.get("/notes/all").then(res => setNotes(res.data));
//   }, []);

//   const resetBelow = (level) => {
//     if (level === "course") {
//       setYear(null); setSemester(null); setSubject(null); setChapter(null);
//     }
//     if (level === "year") {
//       setSemester(null); setSubject(null); setChapter(null);
//     }
//     if (level === "semester") {
//       setSubject(null); setChapter(null);
//     }
//     if (level === "subject") {
//       setChapter(null);
//     }
//   };

//   // helpers
//   const unique = (arr) => [...new Set(arr)];

//   const filteredNotes = notes.filter(n =>
//     (!course || n.course === course) &&
//     (!year || n.year === year) &&
//     (!semester || n.semester === semester) &&
//     (!subject || n.subject === subject) &&
//     (!chapter || n.chapter === chapter)
//   );

//   return (
//     <div className="p-8">

//       {/* COURSE + YEAR STRUCTURE (FIRST PAGE) */}
//       {!course && (
//         <div className="grid grid-cols-2 gap-16 text-center">
//           {["CSE", "Agriculture"].map(c => (
//             <div key={c}>
//               <button
//                 onClick={() => setCourse(c)}
//                 className="border-2 px-10 py-3 font-semibold mx-auto block mb-8"
//               >
//                 {c}
//               </button>

//               <div className="grid grid-cols-2 gap-6">
//                 {[1, 2, 3, 4].map(y => (
//                   <button
//                     key={y}
//                     onClick={() => {
//                       setCourse(c);
//                       setYear(y);
//                     }}
//                     className="border px-6 py-2 hover:bg-gray-100"
//                   >
//                     {y === 1 && "1st Year"}
//                     {y === 2 && "2nd Year"}
//                     {y === 3 && "3rd Year"}
//                     {y === 4 && "4th Year"}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* SEMESTER */}
//       {course && year && !semester && (
//         <>
//           <Back onClick={() => { setCourse(null); resetBelow("course"); }} />
//           <BoxGrid
//             title="Select Semester"
//             items={unique(
//               notes.filter(n => n.course === course && n.year === year)
//                    .map(n => n.semester)
//             )}
//             onSelect={setSemester}
//           />
//         </>
//       )}

//       {/* SUBJECT */}
//       {semester && !subject && (
//         <>
//           <Back onClick={() => { setSemester(null); resetBelow("year"); }} />
//           <BoxGrid
//             title="Select Subject"
//             items={unique(
//               filteredNotes.map(n => n.subject)
//             )}
//             onSelect={setSubject}
//           />
//         </>
//       )}

//       {/* CHAPTER */}
//       {subject && !chapter && (
//         <>
//           <Back onClick={() => { setSubject(null); resetBelow("semester"); }} />
//           <BoxGrid
//             title="Select Chapter"
//             items={unique(
//               filteredNotes.map(n => `${n.chapter}: ${n.title}`)
//             )}
//             onSelect={(val) => setChapter(val.split(":")[0])}
//           />
//         </>
//       )}

//       {/* NOTES */}
//       {chapter && (
//         <>
//           <Back onClick={() => setChapter(null)} />
//           <div className="grid grid-cols-3 gap-6">
//             {filteredNotes.map(note => (
//               <NoteCard key={note._id} note={note} />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// /* ---------- REUSABLE COMPONENTS ---------- */

// function BoxGrid({ title, items, onSelect }) {
//   return (
//     <>
//       <h2 className="text-xl font-semibold mb-4">{title}</h2>
//       <div className="grid grid-cols-4 gap-6">
//         {items.map(item => (
//           <button
//             key={item}
//             onClick={() => onSelect(item)}
//             className="border px-6 py-3 hover:bg-gray-100"
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }

// function Back({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="text-blue-600 underline mb-4 block"
//     >
//       ← Change Selection
//     </button>
//   );
// }






// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import NoteCard from "../components/NoteCard";

// export default function Dashboard() {
//   const [notes, setNotes] = useState([]);

//   const [course, setCourse] = useState(null);
//   const [year, setYear] = useState(null);
//   const [semester, setSemester] = useState(null);
//   const [subject, setSubject] = useState(null);
//   const [chapter, setChapter] = useState(null);

//   useEffect(() => {
//     api.get("/notes/all").then(res => setNotes(res.data));
//   }, []);

//   const resetBelow = (level) => {
//     if (level === "course") {
//       setYear(null); setSemester(null); setSubject(null); setChapter(null);
//     }
//     if (level === "year") {
//       setSemester(null); setSubject(null); setChapter(null);
//     }
//     if (level === "semester") {
//       setSubject(null); setChapter(null);
//     }
//     if (level === "subject") {
//       setChapter(null);
//     }
//   };

//   const unique = (arr) => [...new Set(arr)];

//   const filteredNotes = notes.filter(n =>
//     (!course || n.course === course) &&
//     (!year || n.year === year) &&
//     (!semester || n.semester === semester) &&
//     (!subject || n.subject === subject) &&
//     (!chapter || n.chapter === chapter)
//   );

//   return (
//     <div className="p-8">

//       {/* FIRST PAGE : COURSE (STATIC) + YEAR (CLICKABLE) */}
//       {!course && (
//         <div className="grid grid-cols-2 gap-20 text-center">

//           {/* CSE SECTION */}
//           <div>
//             <div className="border px-10 py-3 font-semibold mx-auto mb-8 w-fit bg-gray-50">
//               CSE
//             </div>

//             <div className="grid grid-cols-2 gap-6">
//               {[1, 2, 3, 4].map(y => (
//                 <button
//                   key={y}
//                   onClick={() => {
//                     setCourse("CSE");
//                     setYear(y);
//                   }}
//                   className="border px-6 py-2 hover:bg-gray-100"
//                 >
//                   {y === 1 && "1st Year"}
//                   {y === 2 && "2nd Year"}
//                   {y === 3 && "3rd Year"}
//                   {y === 4 && "4th Year"}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* AGRICULTURE SECTION */}
//           <div>
//             <div className="border px-10 py-3 font-semibold mx-auto mb-8 w-fit bg-gray-50">
//               Agriculture
//             </div>

//             <div className="grid grid-cols-2 gap-6">
//               {[1, 2, 3, 4].map(y => (
//                 <button
//                   key={y}
//                   onClick={() => {
//                     setCourse("Agriculture");
//                     setYear(y);
//                   }}
//                   className="border px-6 py-2 hover:bg-gray-100"
//                 >
//                   {y === 1 && "1st Year"}
//                   {y === 2 && "2nd Year"}
//                   {y === 3 && "3rd Year"}
//                   {y === 4 && "4th Year"}
//                 </button>
//               ))}
//             </div>
//           </div>

//         </div>
//       )}

//       {/* SEMESTER */}
//       {course && year && !semester && (
//         <>
//           <Back onClick={() => { setCourse(null); resetBelow("course"); }} />
//           <BoxGrid
//             title="Select Semester"
//             items={unique(
//               notes
//                 .filter(n => n.course === course && n.year === year)
//                 .map(n => n.semester)
//             )}
//             onSelect={setSemester}
//           />
//         </>
//       )}

//       {/* SUBJECT */}
//       {semester && !subject && (
//         <>
//           <Back onClick={() => { setSemester(null); resetBelow("year"); }} />
//           <BoxGrid
//             title="Select Subject"
//             items={unique(filteredNotes.map(n => n.subject))}
//             onSelect={setSubject}
//           />
//         </>
//       )}

//       {/* CHAPTER */}
//       {subject && !chapter && (
//         <>
//           <Back onClick={() => { setSubject(null); resetBelow("semester"); }} />
//           <BoxGrid
//             title="Select Chapter"
//             items={unique(filteredNotes.map(n => `${n.chapter}: ${n.title}`))}
//             onSelect={(val) => setChapter(val.split(":")[0])}
//           />
//         </>
//       )}

//       {/* NOTES */}
//       {chapter && (
//         <>
//           <Back onClick={() => setChapter(null)} />
//           <div className="grid grid-cols-3 gap-6">
//             {filteredNotes.map(note => (
//               <NoteCard key={note._id} note={note} />
//             ))}
//           </div>
//         </>
//       )}

//     </div>
//   );
// }

// /* ---------- REUSABLE COMPONENTS ---------- */

// function BoxGrid({ title, items, onSelect }) {
//   return (
//     <>
//       <h2 className="text-xl font-semibold mb-4">{title}</h2>
//       <div className="grid grid-cols-4 gap-6">
//         {items.map(item => (
//           <button
//             key={item}
//             onClick={() => onSelect(item)}
//             className="border px-6 py-3 hover:bg-gray-100"
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }

// function Back({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="text-blue-600 underline mb-4 block"
//     >
//       ← Change Selection
//     </button>
//   );
// }





// import { useEffect, useState, useContext } from "react";
// import api from "../api/axios";
// import NoteCard from "../components/NoteCard";
// import { AuthContext } from "../context/AuthContext";

// export default function Dashboard() {
//   const { user } = useContext(AuthContext);

//   const [notes, setNotes] = useState([]);

//   const [course, setCourse] = useState(null);
//   const [year, setYear] = useState(null);
//   const [semester, setSemester] = useState(null);
//   const [subject, setSubject] = useState(null);
//   const [chapter, setChapter] = useState(null);

//   useEffect(() => {
//     api.get("/notes/all").then(res => setNotes(res.data));
//   }, []);

//   const resetBelow = (level) => {
//     if (level === "course") {
//       setYear(null); setSemester(null); setSubject(null); setChapter(null);
//     }
//     if (level === "year") {
//       setSemester(null); setSubject(null); setChapter(null);
//     }
//     if (level === "semester") {
//       setSubject(null); setChapter(null);
//     }
//     if (level === "subject") {
//       setChapter(null);
//     }
//   };

//   const unique = (arr) => [...new Set(arr)];

//   const filteredNotes = notes.filter(n =>
//     (!course || n.course === course) &&
//     (!year || n.year === year) &&
//     (!semester || n.semester === semester) &&
//     (!subject || n.subject === subject) &&
//     (!chapter || n.chapter === chapter)
//   );

//   return (
//     <div className="p-8">

//       {/* HELLO USER */}
//       <div className="mb-12 text-center">
//         <h1 className="text-3xl font-bold">
//           Hello{user?.name ? `, ${user.name}` : ""} 👋
//         </h1>
//         <p className="text-gray-600 mt-1">
//           Welcome to the Notes Portal
//         </p>
//       </div>

//       {/* FIRST PAGE : COURSE (STATIC) + YEAR */}
//       {!course && (
//         <div className="grid grid-cols-2 gap-24 text-center">

//           {/* CSE */}
//           <div>
//             <div className="border px-10 py-3 font-semibold mx-auto mb-8 w-fit bg-gray-50">
//               CSE
//             </div>

//             <div className="grid grid-cols-2 gap-6">
//               {[1, 2, 3, 4].map(y => (
//                 <button
//                   key={y}
//                   onClick={() => {
//                     setCourse("CSE");
//                     setYear(y);
//                   }}
//                   className="border px-6 py-3 hover:bg-gray-100"
//                 >
//                   {y === 1 && "1st Year"}
//                   {y === 2 && "2nd Year"}
//                   {y === 3 && "3rd Year"}
//                   {y === 4 && "4th Year"}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* AGRICULTURE */}
//           <div>
//             <div className="border px-10 py-3 font-semibold mx-auto mb-8 w-fit bg-gray-50">
//               Agriculture
//             </div>

//             <div className="grid grid-cols-2 gap-6">
//               {[1, 2, 3, 4].map(y => (
//                 <button
//                   key={y}
//                   onClick={() => {
//                     setCourse("Agriculture");
//                     setYear(y);
//                   }}
//                   className="border px-6 py-3 hover:bg-gray-100"
//                 >
//                   {y === 1 && "1st Year"}
//                   {y === 2 && "2nd Year"}
//                   {y === 3 && "3rd Year"}
//                   {y === 4 && "4th Year"}
//                 </button>
//               ))}
//             </div>
//           </div>

//         </div>
//       )}

//       {/* SEMESTER */}
//       {course && year && !semester && (
//         <>
//           <Back onClick={() => { setCourse(null); resetBelow("course"); }} />
//           <BoxGrid
//             title="Select Semester"
//             items={unique(
//               notes
//                 .filter(n => n.course === course && n.year === year)
//                 .map(n => n.semester)
//             )}
//             onSelect={setSemester}
//           />
//         </>
//       )}

//       {/* SUBJECT */}
//       {semester && !subject && (
//         <>
//           <Back onClick={() => { setSemester(null); resetBelow("year"); }} />
//           <BoxGrid
//             title="Select Subject"
//             items={unique(filteredNotes.map(n => n.subject))}
//             onSelect={setSubject}
//           />
//         </>
//       )}

//       {/* CHAPTER */}
//       {subject && !chapter && (
//         <>
//           <Back onClick={() => { setSubject(null); resetBelow("semester"); }} />
//           <BoxGrid
//             title="Select Chapter"
//             items={unique(filteredNotes.map(n => `${n.chapter}: ${n.title}`))}
//             onSelect={(val) => setChapter(val.split(":")[0])}
//           />
//         </>
//       )}

//       {/* NOTES */}
//       {chapter && (
//         <>
//           <Back onClick={() => setChapter(null)} />
//           <div className="grid grid-cols-3 gap-6">
//             {filteredNotes.map(note => (
//               <NoteCard key={note._id} note={note} />
//             ))}
//           </div>
//         </>
//       )}

//     </div>
//   );
// }

// /* ---------- REUSABLE COMPONENTS ---------- */

// function BoxGrid({ title, items, onSelect }) {
//   return (
//     <>
//       <h2 className="text-xl font-semibold mb-4">{title}</h2>
//       <div className="grid grid-cols-4 gap-6">
//         {items.map(item => (
//           <button
//             key={item}
//             onClick={() => onSelect(item)}
//             className="border px-6 py-3 hover:bg-gray-100"
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }

// function Back({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="text-blue-600 underline mb-4 block"
//     >
//       ← Change Selection
//     </button>
//   );
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////





// import { useEffect, useState, useContext } from "react";
// import api from "../api/axios";
// import NoteCard from "../components/NoteCard";
// import { AuthContext } from "../context/AuthContext";

// export default function Dashboard() {
//   const { user } = useContext(AuthContext);

//   const [notes, setNotes] = useState([]);

//   const [course, setCourse] = useState(null);
//   const [year, setYear] = useState(null);
//   const [semester, setSemester] = useState(null);
//   const [subject, setSubject] = useState(null);
//   const [chapter, setChapter] = useState(null);

//   useEffect(() => {
//     api.get("/notes/all").then(res => setNotes(res.data));
//   }, []);

//   const resetBelow = (level) => {
//     if (level === "course") {
//       setYear(null); setSemester(null); setSubject(null); setChapter(null);
//     }
//     if (level === "year") {
//       setSemester(null); setSubject(null); setChapter(null);
//     }
//     if (level === "semester") {
//       setSubject(null); setChapter(null);
//     }
//     if (level === "subject") {
//       setChapter(null);
//     }
//   };

//   const unique = (arr) => [...new Set(arr)];

//   const filteredNotes = notes.filter(n =>
//     (!course || n.course === course) &&
//     (!year || n.year === year) &&
//     (!semester || n.semester === semester) &&
//     (!subject || n.subject === subject) &&
//     (!chapter || n.chapter === chapter)
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
//       <div className="max-w-7xl mx-auto">

//         {/* HELLO USER */}
//         <div className="mb-12 text-center">
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Hello{user?.name ? `, ${user.name}` : ""} 👋
//           </h1>
//           <p className="text-gray-600 text-lg mt-2">
//             Welcome to the Notes Portal
//           </p>
//         </div>

//         {/* COURSE + YEAR */}
//         {!course && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

//             {/* CSE */}
//             <CourseCard
//               title="🖥️ Computer Science & Engineering"
//               color="blue"
//               onSelect={(y) => { setCourse("CSE"); setYear(y); }}
//             />

//             {/* AGRICULTURE */}
//             <CourseCard
//               title="🌾 Agriculture"
//               color="green"
//               onSelect={(y) => { setCourse("Agriculture"); setYear(y); }}
//             />

//           </div>
//         )}

//         {/* SEMESTER */}
//         {course && year && !semester && (
//           <Section>
//             <Back onClick={() => { setCourse(null); resetBelow("course"); }} />
//             <BoxGrid
//               title="Select Semester"
//               items={unique(
//                 notes
//                   .filter(n => n.course === course && n.year === year)
//                   .map(n => n.semester)
//               )}
//               onSelect={setSemester}
//               course={course}
//             />
//           </Section>
//         )}

//         {/* SUBJECT */}
//         {semester && !subject && (
//           <Section>
//             <Back onClick={() => { setSemester(null); resetBelow("year"); }} />
//             <BoxGrid
//               title="Select Subject"
//               items={unique(filteredNotes.map(n => n.subject))}
//               onSelect={setSubject}
//               course={course}
//             />
//           </Section>
//         )}

//         {/* CHAPTER */}
//         {subject && !chapter && (
//           <Section>
//             <Back onClick={() => { setSubject(null); resetBelow("semester"); }} />
//             <BoxGrid
//               title="Select Chapter"
//               items={unique(filteredNotes.map(n => `${n.chapter}: ${n.title}`))}
//               onSelect={(val) => setChapter(val.split(":")[0])}
//               course={course}
//             />
//           </Section>
//         )}

//         {/* NOTES */}
//         {chapter && (
//           <Section>
//             <Back onClick={() => setChapter(null)} />
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredNotes.map(note => (
//                 <NoteCard key={note._id} note={note} />
//               ))}
//             </div>
//           </Section>
//         )}

//       </div>
//     </div>
//   );
// }

// /* ---------------- COMPONENTS ---------------- */

// function Section({ children }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-8">
//       {children}
//     </div>
//   );
// }

// function CourseCard({ title, color, onSelect }) {
//   const base = color === "blue"
//     ? "from-blue-50 to-blue-100 hover:from-blue-500 hover:to-blue-600 border-blue-200 hover:border-blue-600"
//     : "from-green-50 to-green-100 hover:from-green-500 hover:to-green-600 border-green-200 hover:border-green-600";

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-8">
//       <div className={`inline-block bg-gradient-to-r ${color === "blue" ? "from-blue-500 to-blue-600" : "from-green-500 to-green-600"} text-white px-8 py-3 rounded-xl font-bold mb-8`}>
//         {title}
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         {[1, 2, 3, 4].map(y => (
//           <button
//             key={y}
//             onClick={() => onSelect(y)}
//             className={`bg-gradient-to-br ${base} border-2 px-6 py-4 rounded-xl font-semibold transition-all hover:text-white hover:scale-105`}
//           >
//             {y} Year
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// function BoxGrid({ title, items, onSelect, course }) {
//   const color = course === "CSE"
//     ? "from-blue-50 to-blue-100 hover:from-blue-500 hover:to-blue-600 border-blue-200 hover:border-blue-600"
//     : "from-green-50 to-green-100 hover:from-green-500 hover:to-green-600 border-green-200 hover:border-green-600";

//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">{title}</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {items.map(item => (
//           <button
//             key={item}
//             onClick={() => onSelect(item)}
//             className={`bg-gradient-to-br ${color} border-2 px-6 py-4 rounded-xl font-semibold transition-all hover:text-white hover:scale-105`}
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }

// function Back({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="text-blue-600 underline font-semibold mb-6 block"
//     >
//       ← Change Selection
//     </button>
//   );
// }

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">

        {/* HELLO USER */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-blue-600">
            Hello{user?.name ? `, ${user.name}` : ""} 👋
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Welcome to the Notes Portal
          </p>
        </div>

        {/* COURSE + YEAR */}
        {!course && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <CourseCard
              title="🖥️ Computer Science & Engineering"
              color="blue"
              onSelect={(y) => { setCourse("CSE"); setYear(y); }}
            />

            <CourseCard
              title="🌾 Agriculture"
              color="green"
              onSelect={(y) => { setCourse("Agriculture"); setYear(y); }}
            />

          </div>
        )}

        {/* SEMESTER */}
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
            />
          </Section>
        )}

        {/* SUBJECT */}
        {semester && !subject && (
          <Section>
            <Back onClick={() => { setSemester(null); resetBelow("year"); }} />
            <BoxGrid
              title="Select Subject"
              items={unique(filteredNotes.map(n => n.subject))}
              onSelect={setSubject}
            />
          </Section>
        )}

        {/* CHAPTER */}
        {subject && !chapter && (
          <Section>
            <Back onClick={() => { setSubject(null); resetBelow("semester"); }} />
            <BoxGrid
              title="Select Chapter"
              items={unique(filteredNotes.map(n => `${n.chapter}: ${n.title}`))}
              onSelect={(val) => setChapter(val.split(":")[0])}
            />
          </Section>
        )}

        {/* NOTES */}
        {chapter && (
          <Section>
            <Back onClick={() => setChapter(null)} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

/* ---------------- COMPONENTS ---------------- */

function Section({ children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {children}
    </div>
  );
}

function CourseCard({ title, color, onSelect }) {
  const mainColor = color === "blue" ? "blue" : "green";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className={`inline-flex items-center gap-3 bg-${mainColor}-600 text-white px-8 py-3 rounded-xl font-bold mb-8 select-none`}>
        {title}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map(y => (
          <button
            key={y}
            onClick={() => onSelect(y)}
            className={`
              bg-white
              text-gray-900

              border-2 border-${mainColor}-300
              hover:border-${mainColor}-600

              hover:bg-${mainColor}-600
              hover:text-white

              px-6 py-4 rounded-xl font-semibold
              transition-all duration-200
              hover:scale-105
              focus:outline-none
            `}
          >
            {y} Year
          </button>
        ))}
      </div>
    </div>
  );
}

function BoxGrid({ title, items, onSelect }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(item => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className="
              bg-white
              text-gray-900

              border-2 border-blue-300
              hover:border-blue-600

              hover:bg-blue-600
              hover:text-white

              px-6 py-4 rounded-xl font-semibold
              transition-all duration-200
              hover:scale-105
              focus:outline-none
            "
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
      className="text-blue-600 underline font-semibold mb-6 block"
    >
      ← Change Selection
    </button>
  );
}
