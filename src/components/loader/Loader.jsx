"use client";
function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="w-16 h-16 border-4 rounded-full border-t-black animate-spin"></div>
    </div>
  );
}

export default Loader;
