import { getMyImage } from "~/server/db/queries";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <FullPageImageView id={+photoId} />;
}
