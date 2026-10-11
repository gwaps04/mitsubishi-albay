// FILE: src/components/AspectImage.tsx
'use client';

import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface AspectImageProps {
  src: string;
  alt: string;
  aspectClass?: string; // e.g. "aspect-[16/10]", "aspect-[4/3]", "aspect-square", "aspect-[16/9]"
  objectFit?: 'cover' | 'contain';
  objectPosition?: string; // e.g. "object-center", "object-top"
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export default function AspectImage({
  src,
  alt,
  aspectClass = 'aspect-[16/10]',
  objectFit = 'cover',
  objectPosition = 'object-center',
  className = '',
  imgClassName = '',
  priority = false,
}: AspectImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden bg-neutral-900 ${className}`}
    >
      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-neutral-900 text-neutral-400 text-center">
          <ImageOff className="w-8 h-8 text-neutral-600 mb-2" />
          <p className="text-xs font-semibold text-neutral-300 line-clamp-1">{alt}</p>
          <span className="text-[10px] text-neutral-500 mt-1 uppercase tracking-wider">
            Image Placeholder
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full ${
            objectFit === 'cover' ? 'object-cover' : 'object-contain'
          } ${objectPosition} transition-all duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-90'
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
