import Image from "next/image";

import Reveal from "@/components/Reveal";

export const CONTENT_X = "pl-3 pr-2 lg:pl-4 lg:pr-2";
export const IMAGE_GRID = "lg:grid-cols-[1fr_minmax(0,30rem)]";
export const IMAGE_FRAME =
  "relative overflow-hidden border border-white/90 bg-white shadow-[0_20px_48px_rgba(0,0,0,0.45)]";

type SectionImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  delay?: number;
  className?: string;
  placeholderLabel?: string;
  objectFit?: "cover" | "contain";
  frameClassName?: string;
  framed?: boolean;
  fixedAspect?: boolean;
  sizes?: string;
};

export default function SectionImage({
  src,
  alt,
  priority = false,
  delay = 0,
  className = "min-w-0 lg:justify-self-end",
  placeholderLabel = "Upload image in admin",
  objectFit = "cover",
  frameClassName = "",
  framed = true,
  fixedAspect = false,
  sizes = "(max-width: 1024px) 90vw, 30rem",
}: SectionImageProps) {
  const frameClasses = framed
    ? `${IMAGE_FRAME} ${frameClassName}`
    : `relative overflow-hidden ${frameClassName}`;

  const fitClass = objectFit === "contain" ? "object-contain" : "object-cover";
  const imageClass = fixedAspect
    ? `aspect-[16/10] w-full ${fitClass}`
    : `h-auto w-full ${fitClass}`;

  return (
    <Reveal delay={delay} className={className}>
      <div className={frameClasses}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={960}
            height={540}
            priority={priority}
            sizes={sizes}
            className={imageClass}
          />
        ) : (
          <div
            className="flex aspect-[16/10] items-center justify-center bg-white/95 px-4 text-center text-sm text-ink/45"
            aria-hidden={!src}
          >
            {placeholderLabel}
          </div>
        )}
      </div>
    </Reveal>
  );
}
