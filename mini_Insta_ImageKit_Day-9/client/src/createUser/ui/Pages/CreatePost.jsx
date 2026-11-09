import { ImagePlus, ArrowUpRight } from "lucide-react";
import useCreatePost from "../../hooks/uploadPost";

const CreatePost = () => {
  const { register, handleCreate, handleSubmit,errors } = useCreatePost();
console.log(errors)
  return (
    <div className="min-h-screen w-full bg-[#111111] text-white flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl grid md:grid-cols-2 border border-white/10 rounded-xl overflow-hidden bg-[#171717]">
        {/* Left Section */}
        <div className="p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
          <div>
            <p className="text-xs tracking-widest text-gray-500 uppercase">
              Mini Insta / 001
            </p>

            <h1 className="text-3xl sm:text-4xl font-light mt-8 leading-tight">
              Capture
              <br />
              the <span className="italic text-gray-500">moment.</span>
            </h1>

            <p className="text-sm text-gray-500 mt-4 leading-6">
              Every moment has a story. Give yours a place to exist.
            </p>
          </div>

          <p className="hidden md:block text-[10px] tracking-widest uppercase text-gray-600 mt-10">
            Your world. Your perspective.
          </p>
        </div>

        {/* Right Section */}
        <div className="p-6 sm:p-8">
          <div className="mb-7">
            <p className="text-xs tracking-widest uppercase text-gray-500">
              New creation
            </p>

            <h2 className="text-2xl font-medium mt-2">Create a post</h2>
          </div>

          <form onSubmit={handleSubmit(handleCreate)} className="space-y-6">
            {/* Caption */}
            <div>
              <label className="text-xs uppercase tracking-wider text-gray-400">
                Caption
              </label>

              <textarea
                {...register("caption", {
                  required: {
                    value: true,
                    message: "Caption is required",
                  },
                })}
                rows={3}
                placeholder="Write something meaningful..."
                className="w-full mt-2 bg-[#111111] border border-white/10 rounded-lg p-3 text-sm outline-none focus:border-white/40 resize-none transition-colors"
              />
              {errors.caption && (
                <h1 className="text-red-800">{errors.caption.message}</h1>
              )}
            </div>

            {/* Image Upload */}
            <div>
              <label className="text-xs uppercase tracking-wider text-gray-400">
                Your image
              </label>

              <label className="mt-2 h-32 border border-dashed border-white/20 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-white/50 hover:bg-white/[0.02] transition-all">
                <ImagePlus size={22} className="text-gray-400" />

                <span className="text-sm text-gray-400">Select an image</span>

                <span className="text-[10px] text-gray-600 uppercase tracking-wider">
                  JPG · PNG · WEBP
                </span>

                <input
                  {...register("Image",{
                    required:{
                      value:true,
                      message:"Image is required"
                    }
                  })}
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
                {errors.Image && (
                  <h1 className="text-red-800">{errors.Image.message}</h1>
                )}
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-between bg-[#e5e5e5] text-black px-4 py-3 rounded-lg text-sm font-medium hover:bg-white transition-colors"
            >
              Publish post
              <ArrowUpRight size={18} />
            </button>
          </form>

          <p className="text-[10px] text-gray-600 tracking-wider mt-7">
            MINI INSTA © 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
