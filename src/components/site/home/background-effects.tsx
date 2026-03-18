export function BackgroundEffects() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="grid-fade absolute inset-0 opacity-45" />
      <div className="hero-orb hero-orb-a left-[-8rem] top-[6rem]" />
      <div className="hero-orb hero-orb-b right-[-4rem] top-[16rem]" />
      <div className="wave-field absolute inset-0">
        <svg className="wave-layer wave-layer-slow" preserveAspectRatio="none" viewBox="0 0 1600 1000">
          <path className="wave-stroke wave-stroke-soft" d="M-240 152C-8 98 164 248 372 190S812 58 1058 154s346 118 594 48" />
          <path className="wave-stroke wave-stroke-soft" d="M-220 298c192-64 346 102 552 60s328-176 560-122 340 138 552 86" />
          <path className="wave-stroke wave-stroke-soft" d="M-250 470c220-78 382 72 584 20s350-166 574-126 336 140 564 88" />
          <path className="wave-stroke wave-stroke-soft" d="M-240 660c216-84 394 62 608 4s344-148 556-124 338 112 592 44" />
          <path className="wave-stroke wave-stroke-soft" d="M-260 838c236-72 410 68 620 18s338-160 548-126 338 118 610 54" />
        </svg>

        <svg className="wave-layer wave-layer-reverse" preserveAspectRatio="none" viewBox="0 0 1600 1000">
          <path className="wave-stroke wave-stroke-bright" d="M-180 214c154-88 312 32 506-4s356-176 582-118 338 166 594 78" />
          <path className="wave-stroke wave-stroke-bright" d="M-210 394c196-78 358 50 556 4s348-170 574-128 342 140 604 66" />
          <path className="wave-stroke wave-stroke-bright" d="M-160 584c182-84 332 54 526 8s348-168 582-130 362 148 618 74" />
          <path className="wave-stroke wave-stroke-bright" d="M-190 778c200-76 350 54 552 14s366-180 602-130 346 138 606 70" />
        </svg>

        <svg className="wave-layer wave-layer-fast wave-layer-glow" preserveAspectRatio="none" viewBox="0 0 1600 1000">
          <path className="wave-stroke wave-stroke-glow" d="M-260 108c182-68 348 36 548-2s350-150 572-106 334 128 592 56" />
          <path className="wave-stroke wave-stroke-glow" d="M-240 532c202-68 370 34 578-14s334-138 546-98 338 116 618 38" />
          <path className="wave-stroke wave-stroke-glow" d="M-230 904c194-74 366 42 566-10s332-152 548-112 346 130 626 50" />
        </svg>
      </div>
      <div className="absolute left-1/2 top-[32rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.12),transparent_68%)] blur-[90px]" />
      <div className="absolute bottom-[-12rem] right-[8%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),transparent_70%)] blur-[110px]" />
    </div>
  );
}
