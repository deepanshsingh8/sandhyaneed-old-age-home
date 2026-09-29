import type { ReactNode } from 'react';

type InfoCardProps = {
  icon: ReactNode;
  iconClassName: string;
  title: string;
  description: string;
  children?: ReactNode;
};

// Use compact icon-and-text rows on phones, and the existing upright cards on larger screens.
export default function InfoCard({ icon, iconClassName, title, description, children }: InfoCardProps) {
  return (
    <article className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-xl group sm:block sm:p-6 md:p-8">
      <div className={`${iconClassName} mb-0 inline-flex shrink-0 rounded-lg p-2.5 transition-transform duration-300 sm:mb-6 sm:rounded-xl sm:p-4 sm:group-hover:scale-110 [&_svg]:h-5 [&_svg]:w-5 sm:[&_svg]:h-8 sm:[&_svg]:w-8`}>
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="mb-2 text-base font-semibold leading-snug text-sandhya-black sm:mb-3 sm:text-xl">{title}</h3>
        <p className="text-[0.9375rem] leading-relaxed text-gray-600 sm:text-base">{description}</p>
        {children && <div className="mt-4 text-sm sm:text-base">{children}</div>}
      </div>
    </article>
  );
}
