import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Webtoon } from "@/types/webtoon";
import { ArrowBigUpDash, ThumbsUp } from "lucide-react";
import { useState } from "react";

interface ICardProps extends Webtoon {
  onVote?: (id: string, type: "manhwa" | "anime") => Promise<void>;
}

const WebtoonCard = ({
  _id,
  title,
  imageUrl,
  description,
  writer,
  art,
  reads,
  votes,
  onVote,
}: ICardProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <Card className="flex flex-col space-y-4">
      {/* Card Header */}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {/* Card Content */}
      <CardContent className="flex-grow">
        {/* Cover Image */}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover mb-4 rounded-md"
            width={500}
            height={500}
          />
        )}

        {/* Description */}
        <p className="text-sm text-gray-600 mb-2">
          {showFullDescription ? description : description.substring(0, 200)}
          {description.length > 200 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-blue-500 hover:underline"
            >
              {showFullDescription ? "Show less" : "...Show more"}
            </button>
          )}
        </p>

        {/* Meta Info */}
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Writer: {writer}</span>
          <span>Art: {art || "Unknown"}</span>
        </div>
        {/* Reads */}
        <Badge variant="secondary">{reads} reads</Badge>
      </CardContent>
      {/* Card Footer */}
      <CardFooter className="flex justify-between">
        <h3 className="font-semibold">Which type you like?</h3>
        {/* Vote Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex gap-2 items-center"
            onClick={() => onVote && onVote(_id, "manhwa")}
          >
            <ThumbsUp className="w-4 h-4" />
            Manhwa: {votes.manhwa}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex gap-2 items-center"
            onClick={() => onVote && onVote(_id, "anime")}
          >
            <ArrowBigUpDash className="w-5 h-5" />
            Anime: {votes.anime}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WebtoonCard;
