import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/db/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col justify-center">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              alt={image.name}
              style={{ objectFit: "contain" }}
              width={480}
              height={480}
            />
            <div>{image.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-wrap gap-4">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          <h1>Please Sign in above</h1>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="h-full w-full">
          <h1>Gallery</h1>
          <Images />
        </div>
      </SignedIn>
    </main>
  );
}
