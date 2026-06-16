import Icon from '@/components/ui/icon';

const RACCOON = 'https://cdn.poehali.dev/projects/ccce36d2-15fb-48fb-b4fb-c42c690f9838/bucket/f3ed4a36-fe64-492c-9b07-27fb6b52e6c4.jpg';
const QR = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://tuapsenoty.ru&color=4a2c12&bgcolor=fdf6ec&margin=8';

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-[#1a2b30] flex items-center justify-center p-4 sm:p-8 font-body">
      <div className="relative w-full max-w-[440px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">

        {/* Градиентный фон */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(170deg, #2a6b78 0%, #3d8a8f 20%, #7a8a6a 45%, #c97a3a 72%, #d9803f 100%)',
        }} />

        {/* Текстура */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />

        {/* Чайки */}
        <div className="absolute top-10 right-8 opacity-40 select-none pointer-events-none">
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
            <path d="M0 15 Q8 5 16 15 Q24 5 32 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M30 22 Q38 12 46 22 Q54 12 62 22" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"/>
          </svg>
        </div>
        <div className="absolute top-20 left-5 opacity-25 select-none pointer-events-none">
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
            <path d="M0 8 Q5 2 10 8 Q15 2 20 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        {/* Волна + набережная */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none">
          <svg viewBox="0 0 440 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80 L40 80 L40 70 L60 70 L60 75 L90 75 L90 65 L110 65 L110 70 L150 70 L150 78 L180 78 L180 68 L200 68 L200 72 L240 72 L240 62 L260 62 L260 70 L300 70 L300 75 L340 75 L340 68 L370 68 L370 75 L400 75 L400 80 L440 80 L440 120 L0 120 Z"
              fill="rgba(0,40,60,0.25)" />
            <path d="M-10 95 Q30 82 70 95 Q110 108 150 95 Q190 82 230 95 Q270 108 310 95 Q350 82 390 95 Q420 104 450 95 L450 120 L-10 120 Z"
              fill="rgba(255,255,255,0.10)" />
            <path d="M-10 108 Q40 98 80 108 Q120 118 160 108 Q200 98 240 108 Q280 118 320 108 Q360 98 400 108 Q430 114 450 108 L450 120 L-10 120 Z"
              fill="rgba(255,255,255,0.07)" />
          </svg>
        </div>

        <div className="relative h-full flex flex-col items-center text-center px-6 pt-7 pb-5">

          {/* ── ВЕРХ: заголовок ── */}
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-3xl leading-none">🦝</span>
            <h1 className="font-display font-bold leading-none tracking-wide"
              style={{ fontSize: 'clamp(2.6rem, 11vw, 3.4rem)', color: '#C67A3E', textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}>
              Туапсеноты
            </h1>
          </div>
          <p className="text-[13px] text-white/80 tracking-wider uppercase font-medium">
            Бронзовые еноты-хранители города
          </p>

          {/* ── ЦЕНТР: картинка + тексты ── */}
          <div className="relative mt-3 w-full flex flex-col items-center">
            <div className="relative w-52 sm:w-60">
              <div className="absolute -inset-6 bg-amber-300/15 blur-3xl rounded-full" />
              <img
                src={RACCOON}
                alt="Енотыч"
                className="relative w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Полоса «Найди меня» поверх/под фото */}
            <div className="w-full rounded-xl py-2.5 px-4 mt-1"
              style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <p className="font-display italic text-white font-semibold text-xl leading-tight drop-shadow">
                Найди меня на набережной
              </p>
            </div>

            <p className="flex items-center justify-center gap-1.5 text-[14px] mt-2"
              style={{ color: '#f5d08a' }}>
              <Icon name="Sparkles" size={14} />
              Потри лапку — загадай желание
            </p>
          </div>

          {/* ── НИЗ: QR + ссылка + счётчик ── */}
          <div className="mt-auto w-full space-y-2">

            {/* Стрелка */}
            <p className="text-white font-semibold text-[13px] animate-bounce">
              ⬇&nbsp; Наведи камеру сюда &nbsp;⬇
            </p>

            {/* QR планшет */}
            <div className="relative rounded-2xl px-3 py-3 flex flex-row items-center gap-3"
              style={{ background: 'linear-gradient(135deg, #fff9ec 0%, #ffe9b0 100%)', boxShadow: '0 0 28px rgba(255,200,80,0.55), 0 4px 18px rgba(0,0,0,0.3)' }}>
              <div className="absolute -inset-[2px] rounded-2xl border-2 border-amber-400/90" />

              <div className="relative shrink-0">
                <div className="absolute -inset-2 rounded-xl bg-amber-300/50 blur-md animate-pulse" />
                <img src={QR} alt="QR tuapsenoty.ru" className="relative w-[88px] h-[88px] rounded-md" />
              </div>

              <div className="text-left flex-1 min-w-0">
                <p className="text-[#3a1f08] font-bold text-[14px] leading-snug">
                  Наведи камеру —<br/>я покажу карту
                </p>
                <p className="text-[#7a5030] text-[11px] mt-1.5 leading-relaxed">
                  Телефон сам всё поймёт.<br/>Просто открой камеру и наведи.
                </p>
              </div>
            </div>

            {/* Ссылка */}
            <div className="flex items-center justify-center gap-1.5 bg-white/10 rounded-xl py-2 px-3">
              <Icon name="Globe" size={13} className="text-sky-300 shrink-0" />
              <a href="https://tuapsenoty.ru"
                className="font-bold text-[16px] underline underline-offset-2 tracking-wide"
                style={{ color: '#7dd3fc', textShadow: '0 0 10px rgba(125,211,252,0.4)' }}>
                tuapsenoty.ru
              </a>
            </div>

            {/* Счётчик + хештег */}
            <div className="flex items-center justify-between px-1">
              <span className="text-white/60 text-[11px]">#туапсеноты</span>
              <div className="flex items-center gap-1">
                <Icon name="Heart" size={11} className="text-rose-300" />
                <span className="text-white/80 text-[11px]">
                  <span className="text-amber-200 font-bold">1 747</span> желаний загадано
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
