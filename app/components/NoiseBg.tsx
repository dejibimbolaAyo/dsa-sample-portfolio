import { useEffect, useState } from "react";

interface NoiseBgProps {
  hex: string;
  className?: string;
}

export default function NoiseBg({ hex, className = "" }: NoiseBgProps) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch(
      `https://php-noise.com/noise.php?hex=${hex.replace("#", "")}&json&base64`
    )
      .then((res) => res.json())
      .then((data) => {
        if (mounted) setSrc(data.base64);
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
