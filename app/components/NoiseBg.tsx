import { useEffect, useState } from "react";

// In-memory cache for noise images by hex
const noiseCache: Record<string, string> = {};

interface NoiseBgProps {
  hex: string;
  className?: string;
}

export default function NoiseBg({ hex, className = "" }: NoiseBgProps) {
  const [src, setSrc] = useState<string | null>(noiseCache[hex] ?? null);

  useEffect(() => {
    let mounted = true;
    if (noiseCache[hex]) {
      setSrc(noiseCache[hex]);
      return;
    }
    fetch(
      `https://php-noise.com/noise.php?hex=${hex.replace("#", "")}&json&base64`
    )
      .then((res) => res.json())
      .then((data) => {
        if (mounted) {
          noiseCache[hex] = data.base64;
          setSrc(data.base64);
        }
      });
    return () => {
      mounted = false;
    };
  }, [hex]);

  if (!src) return null;
  return (
    <img
      src={src}
      alt="Noise background"
      className={className}
      loading="lazy"
      draggable={false}
    />
  );
}
