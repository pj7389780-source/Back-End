function NotesPage({ notes, deleteNote, updateData }) {
  return (
    <div>
      {notes?.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note, index) => (
            <article
              key={note._id}
              className="group flex min-w-0 flex-col rounded-xl border border-stone-200 bg-white p-5 transition duration-200 hover:border-stone-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-6"
            >
              {/* Card Header */}
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-100 text-xs font-semibold text-stone-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full border border-stone-200 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-stone-500">
                  Note
                </span>
              </div>

              {/* Note Content */}
              <div className="flex-1">
                <h3 className="mb-3 break-words text-lg font-semibold leading-snug tracking-tight text-stone-900">
                  {note.title}
                </h3>

                <p className="mb-6 whitespace-pre-wrap break-words text-sm leading-7 text-stone-500">
                  {note.description}
                </p>
              </div>

              {/* Document ID */}
              <div className="mb-5 border-t border-stone-100 pt-4">
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-400">
                  Document ID
                </p>

                <p
                  title={note._id}
                  className="truncate font-mono text-[11px] text-stone-500"
                >
                  {note._id}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={
                    ()=>{
                      updateData(note)
                      window.scrollTo({ top: 400, behavior: "smooth" });
                    }
                  }
                  type="button"
                  className="flex-1 rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-xs font-semibold text-stone-700 transition hover:bg-stone-50 active:scale-[0.98]"
                >
                  Update
                </button>

                <button
                  type="button"
                  onClick={() => deleteNote(note._id)}
                  className="flex-1 rounded-lg border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs font-semibold text-stone-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 active:scale-[0.98]"
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-stone-300 bg-white/50 px-6 py-16 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-stone-200 bg-white text-xl text-stone-400">
            +
          </div>

          <h3 className="text-base font-semibold text-stone-800">
            Nothing here yet
          </h3>

          <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-stone-500">
            Your notes will appear here. Create your first note to get started.
          </p>
        </div>
      )}
    </div>
  );
}

export default NotesPage;