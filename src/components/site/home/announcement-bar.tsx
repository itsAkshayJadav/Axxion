import { announcementItems } from "@/content/home";

export function AnnouncementBar() {
  const items = [...announcementItems, ...announcementItems];

  return (
    <div className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(7,13,24,0.86)] backdrop-blur-xl">
      <div className="overflow-hidden">
        <div className="announcement-track flex min-w-max items-center gap-10 px-5 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-slate-300 sm:gap-14 sm:px-6 lg:px-8">
          {items.map((item, index) => (
            <span className="flex items-center gap-10" key={`${item}-${index}`}>
              <span>{item}</span>
              <span className="h-1 w-1 rounded-full bg-cyan-300/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}