const ProfileSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-8 flex-wrap bg-gray-900 rounded-lg shadow-md animate-pulse">

      {/* Profile Info Skeleton */}
      <div className="flex flex-col items-center text-center max-w-xs w-full">
        <div className="rounded-full bg-gray-700 w-24 h-24 md:w-40 md:h-40 mb-4"></div>
        <div className="h-6 bg-gray-700 rounded w-32 md:w-48 mb-3"></div>
        <div className="h-4 bg-gray-700 rounded w-48 md:w-64 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-40 md:w-56 mb-4"></div>

        {/* Button skeletons */}
        <div className="flex gap-3 md:w-full w-[80%] justify-center my-1">
          <div className="h-10 bg-gray-700 rounded-md w-24 md:w-32"></div>
          <div className="h-10 bg-gray-700 rounded-md w-24 md:w-32"></div>
        </div>
      </div>

      {/* Follower Info Skeleton */}
      <div className="flex gap-8 md:gap-[5em] md:mr-[5em] justify-center items-center text-center">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="h-6 bg-gray-700 rounded w-20 md:w-28 mb-2"></div>
            <div className="h-5 bg-gray-600 rounded w-10 md:w-14"></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProfileSkeleton;
