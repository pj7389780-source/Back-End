import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";

const PostCard = ({ post }) => {
  return (
    <div className="w-full max-w-md bg-[#171717] border border-white/10 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm">
            P
          </div>

          <div>
            <h3 className="text-sm font-medium text-white">Basically Paras</h3>
            <p className="text-xs text-gray-500">Mini Insta</p>
          </div>
        </div>

        <MoreHorizontal size={20} className="text-gray-400 cursor-pointer" />
      </div>

      {/* Image */}
      <div className="w-full bg-black">
        <img
          src={post.Image}
          alt={post.caption}
          className="w-full aspect-square object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-4">
          <Heart size={22} className="text-white cursor-pointer" />
          <MessageCircle size={22} className="text-white cursor-pointer" />
        </div>
      </div>

      {/* Caption */}
      <div className="px-4 pt-3 pb-5">
        <p className="text-sm text-white leading-6">
          <span className="font-semibold mr-2">Basically Paras</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
