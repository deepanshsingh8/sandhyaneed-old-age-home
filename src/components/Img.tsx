import type { ImgHTMLAttributes } from "react";
import { images } from "@/lib/images.generated";

type ImgProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  /** Rendered width of the image at each breakpoint, used to pick a srcset candidate. */
  sizes?: string;
  /** Mark the page's main above-the-fold image (LCP) so it loads eagerly at high priority. */
  priority?: boolean;
};

// Adds intrinsic width/height (prevents layout shift) and a srcset of the
// smaller copies written by `npm run images`.
export default function Img({ src, sizes = "100vw", priority = false, ...props }: ImgProps) {
  const meta = images[src];
  const srcSet = meta?.variants.length
    ? [...meta.variants.map(w => `${src.replace(/\.webp$/, `-${w}w.webp`)} ${w}w`), `${src} ${meta.width}w`].join(", ")
    : undefined;
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      width={meta?.width}
      height={meta?.height}
      loading={priority ? "eager" : "lazy"}
      // React 18 only passes the lowercase attribute through to the DOM.
      {...(priority ? { fetchpriority: "high" } : {})}
      decoding={priority ? undefined : "async"}
      {...props}
    />
  );
}
