import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type EmbedProps = {
  src: string;
  title: string;
  provider: 'Google Maps' | 'YouTube' | 'Vimeo';
  action: string;
  className: string;
  allow?: string;
};

export default function ClickToLoadEmbed({ src, title, provider, action, className, allow }: EmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const Icon = provider === 'Google Maps' ? MapPin : Play;
  return (
    <div className={cn('relative w-full min-w-0 min-h-64 overflow-hidden rounded-2xl border border-stone-200 bg-stone-50', className)}>
      {loaded ? <iframe src={src} title={title} allow={allow} allowFullScreen referrerPolicy="strict-origin-when-cross-origin" className="absolute inset-0 h-full w-full border-0" /> :
        <div className="flex h-full flex-col items-center justify-center gap-3 p-4 text-center sm:gap-4 sm:p-6">
          <p className="max-w-md text-sm leading-relaxed text-stone-600">Load this {provider === 'Google Maps' ? 'map' : 'video'} to connect to {provider}. The provider may use cookies and receive information about your visit.</p>
          <Button type="button" variant="cta" className="min-h-11 rounded-lg" onClick={() => setLoaded(true)}><Icon aria-hidden="true" />{action}</Button>
          <Link to="/privacy#third-parties" className="text-xs text-teal-800 underline underline-offset-4">Read Privacy & Cookies</Link>
        </div>}
    </div>
  );
}
