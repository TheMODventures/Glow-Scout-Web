import { Skeleton } from "@/components/ui/skeleton";

export function VisitSpaSkeleton() {
  return (
    <div className="border-b border-darkMahron py-5 mb-20 font-raleway">
      <Skeleton className=" text-darkMahron font-ralewayLight text-5xl mb-6 md:mt-10 w-40 h-10" />
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6">
        <div className="col-span-2">
          <Skeleton className="w-full h-[400px] rounded-xl mb-5" />
          <Skeleton className="w-[150px] h-8 rounded-lg mb-4" />
          <Skeleton className="w-[100px] h-8 rounded-lg mb-4" />
        </div>
        <div className="md:col-span-1 flex md:flex-col gap-4 items-center">
          <Skeleton className="w-[200px] h-[180px] rounded-xl mb-4" />
          <Skeleton className="w-[200px] h-[180px] rounded-xl mb-4" />
        </div>
        <div className="col-span-2">
          <Skeleton className="w-[200px] h-8 mb-4" />
          <Skeleton className="w-full h-[200px] rounded-xl mb-4" />
          <div className="flex items-center mb-4">
            <Skeleton className="h-6 w-6 rounded-full mr-2" />
            <Skeleton className="h-6 w-6 rounded-full mr-2" />
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-6 rounded-full ml-2" />
            <Skeleton className="h-6 w-6 rounded-full ml-2" />
          </div>
          <Skeleton className="w-[150px] h-5 mb-2" />
          <Skeleton className="w-[250px] h-5 mb-2" />
          <Skeleton className="w-[200px] h-5 mb-2" />
          <Skeleton className="w-[200px] h-5 mb-2" />
        </div>
      </div>
    </div>
  );
}
