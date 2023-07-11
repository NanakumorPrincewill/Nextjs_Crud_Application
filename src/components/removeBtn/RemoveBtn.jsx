"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeProfile = async () => {
    const confirmed = confirm("Are you sure you want to delete this profile?");

    if (confirmed) {
      const res = await fetch(`/api/profiles?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
        toast.success("Profile Deleted successfully");
      }
    }
  };

  return (
    <button
      onClick={removeProfile}
      className="px-5 py-2 mx-1 bg-red-400 rounded-lg"
    >
      Delete
    </button>
  );
}
