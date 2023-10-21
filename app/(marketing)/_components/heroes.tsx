import Image from "next/image";

export function Heroes() {
  return (
    <div className="flex max-w-5xl flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/documents.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain dark:hidden"
            alt="Documents"
            priority
          />
          <Image
            src="/documents-dark.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="hidden object-contain dark:block"
            alt="Documents"
            priority
          />
        </div>
        <div className="relative hidden h-[400px] w-[400px] md:block">
          <Image
            src="/reading.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain dark:hidden"
            alt="Reading"
            priority
          />
          <Image
            src="/reading-dark.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="hidden object-contain dark:block"
            alt="Reading"
            priority
          />
        </div>
      </div>
    </div>
  );
}
