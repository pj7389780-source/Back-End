import { useEffect, useState } from "react";
import { axiosInstance } from "./config/axiosInstance";
import NotesPage from "./components/Note";

const App = () => {
  const deleteNote = async (id) => {
    try {
      const res = await axiosInstance.delete(`/delete/${id}`);
      console.log(res);
      getAllData();
    } catch (error) {
      console.log("Error while deleting the data", error);
    }
  };
  const [isUpdateID, setIsUpdateID] = useState(null)

  const updateData = async(note)=>{
    setFormData({
      title:note.title,
      description:note.description,
    })
    setIsUpdateID(note._id);
    
  }
  const getAllData = async () => {
     try {
       const res = await axiosInstance("/allNotes");
       setAllData(res.data.data);
     } catch (error) {
       console.log("Error in getting data", error);
     }
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [allData, setAllData] = useState(null);

  const handleform = async (e) => {
    e.preventDefault();
     if (isUpdateID) {
       try {
          await axiosInstance.put(`/update/${isUpdateID}`,formData );
         getAllData()
         setIsUpdateID(null)
       } catch (error) {
         console.log("Error in Updating data", error);
       }
     }else{
      try {
        const res = await axiosInstance.post("/create", formData);
        console.log(res);
        getAllData();
      } catch (error) {
        console.log("Error while posting data", error);
      }
     }

    setFormData({
      title: "",
      description: "",
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-[#fafaf9] text-[#20201e]">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
        {/* Navigation */}
        <nav className="flex items-center justify-between border-b border-stone-200 pb-6">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#24251f] text-sm font-semibold text-white">
              n.
            </span>
            <span className="text-base font-semibold tracking-tight">
              notefolio
            </span>
          </a>

          <span className="text-xs font-medium tracking-wide text-stone-500 sm:text-sm">
            YOUR PERSONAL SPACE
          </span>
        </nav>

        {/* Hero */}
        <section className="grid gap-8 py-12 sm:py-16 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
              A little space for your thoughts
            </p>

            <h1 className="max-w-2xl text-4xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-6xl">
              Thoughts worth
              <br />
              <span className="font-serif italic text-stone-500">keeping.</span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-stone-500 sm:text-base">
              A quieter place to collect ideas, remember things, and make sense
              of what's on your mind.
            </p>
          </div>

          <div className="hidden border-l border-stone-200 pl-6 pb-1 md:block">
            <p className="text-xs uppercase tracking-widest text-stone-400">
              Workspace
            </p>
            <p className="mt-2 text-sm font-medium">Personal notes</p>
            <p className="mt-1 text-xs text-stone-500">
              Made for your everyday thoughts
            </p>
          </div>
        </section>

        {/* Create Note */}
        <section className="mb-16">
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.025)]">
            <div className="flex items-center justify-between border-b border-stone-100 px-5 py-5 sm:px-8">
              <div>
                <h2 className="text-base font-semibold tracking-tight">
                  Write something new
                </h2>
                <p className="mt-1 text-xs text-stone-500 sm:text-sm">
                  Start with a title. Add the details.
                </p>
              </div>

              <span className="text-xs text-stone-400">01 / CREATE</span>
            </div>

            <form onSubmit={handleform} className="space-y-6 p-5 sm:p-8">
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-xs font-semibold text-stone-600"
                >
                  TITLE
                </label>

                <input
                  id="title"
                  onChange={handleChange}
                  required
                  type="text"
                  name="title"
                  value={formData.title}
                  placeholder="Give this note a name"
                  className="w-full rounded-lg border border-stone-200 bg-[#fcfcfb] px-4 py-3.5 text-sm transition placeholder:text-stone-400 focus:border-stone-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-stone-900/[0.03]"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-xs font-semibold text-stone-600"
                >
                  DESCRIPTION
                </label>

                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  required
                  value={formData.description}
                  minLength={20}
                  rows="4"
                  placeholder="Let your thoughts take shape..."
                  className="w-full resize-y rounded-lg border border-stone-200 bg-[#fcfcfb] px-4 py-3.5 text-sm leading-7 transition placeholder:text-stone-400 focus:border-stone-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-stone-900/[0.03]"
                />
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-stone-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-stone-400">
                  Keep it simple. Keep it yours.
                </p>

                {isUpdateID ? (
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#24251f] px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-700 active:scale-[0.98]"
                  >
                    Update note
                    <span aria-hidden="true">↗</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#24251f] px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-700 active:scale-[0.98]"
                  >
                    Create note
                    <span aria-hidden="true">↗</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>

        {/* Notes Collection */}
        <section>
          <div className="mb-7 flex flex-col gap-3 border-b border-stone-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                The collection
              </p>
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                Your notes<span className="text-stone-400">.</span>
              </h2>
            </div>

            <p className="text-sm text-stone-500">Ideas, saved in one place.</p>
          </div>

          <NotesPage
            notes={allData}
            deleteNote={deleteNote}
            updateData={updateData}
          />
        </section>

        {/* Footer */}
        <footer className="mt-20 flex flex-col gap-3 border-t border-stone-200 py-6 text-xs text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-medium tracking-tight text-stone-600">
            notefolio.
          </span>

          <span>A little less noise. A little more clarity.</span>
        </footer>
      </div>
    </main>
  );
};

export default App;
