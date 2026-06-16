import Icon from '@/components/ui/icon';

const RACCOON = 'https://cdn.poehali.dev/projects/ccce36d2-15fb-48fb-b4fb-c42c690f9838/bucket/f3ed4a36-fe64-492c-9b07-27fb6b52e6c4.jpg';
const QR = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://tuapsenoty.ru&color=4a2c12&bgcolor=fdf6ec&margin=8';

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-[#1a2b30] flex items-center justify-center p-4 sm:p-8 font-body">
      <div className="relative w-full max-w-[440px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">

        {/* Градиентный фон */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(160deg, #2a6b78 0%, #3d7a82 22%, #9a8a6a 50%, #d9803f 78%, #e08a3c 100%)',
        }} />

        {/* Текстура песка/бумаги */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />

        {/* Чайки вверху справа */}
        <div className="absolute top-8 right-8 opacity-50 select-none pointer-events-none">
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
            <path d="M0 15 Q8 5 16 15 Q24 5 32 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M28 22 Q36 12 44 22 Q52 12 60 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
          </svg>
        </div>
        {/* Чайка слева */}
        <div className="absolute top-16 left-6 opacity-30 select-none pointer-events-none">
          <svg width="36" height="18" viewBox="0 0 36 18" fill="none">
            <path d="M0 9 Q6 2 12 9 Q18 2 24 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        {/* Волна + силуэт набережной внизу */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none">
          <svg viewBox="0 0 440 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
            {/* Силуэт набережной */}
            <path d="M0 80 L40 80 L40 70 L60 70 L60 75 L90 75 L90 65 L110 65 L110 70 L150 70 L150 78 L180 78 L180 68 L200 68 L200 72 L240 72 L240 62 L260 62 L260 70 L300 70 L300 75 L340 75 L340 68 L370 68 L370 75 L400 75 L400 80 L440 80 L440 120 L0 120 Z"
              fill="rgba(0,40,60,0.25)" />
            {/* Первая волна */}
            <path d="M-10 95 Q30 82 70 95 Q110 108 150 95 Q190 82 230 95 Q270 108 310 95 Q350 82 390 95 Q420 104 450 95 L450 120 L-10 120 Z"
              fill="rgba(255,255,255,0.12)" />
            {/* Вторая волна */}
            <path d="M-10 105 Q40 95 80 105 Q120 115 160 105 Q200 95 240 105 Q280 115 320 105 Q360 95 400 105 Q430 112 450 105 L450 120 L-10 120 Z"
              fill="rgba(255,255,255,0.08)" />
          </svg>
        </div>

        <div className="relative h-full flex flex-col items-center text-center px-7 pt-10 pb-8">
          {/* Заголовок */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦝</span>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-wide text-white drop-shadow-md">
              Туапсеноты
            </h1>
          </div>
          <p className="mt-1.5 text-[13px] text-white/85 tracking-wide">
            Бронзовые еноты-хранители города
          </p>

          {/* Изображение */}
          <div className="mt-6 relative w-52 sm:w-64">
            <div className="absolute -inset-4 bg-amber-200/20 blur-2xl rounded-full" />
            <img
              src={RACCOON}
              alt="Бронзовый енот Туапсеноты"
              className="relative w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Призывы */}
          <div className="mt-4 space-y-2.5">
            <p className="font-display italic text-2xl text-white drop-shadow-sm">
              Найди меня на набережной
            </p>
            <p className="flex items-center justify-center gap-2 text-[15px] text-white/90">
              <Icon name="Sparkles" size={16} className="text-amber-100" />
              Потри лапку — загадай желание
            </p>
          </div>

          {/* QR-блок */}
          <div className="mt-auto w-full">
            <p className="text-white font-semibold text-[15px] mb-2 animate-bounce">
              ⬇ Наведи камеру сюда ⬇
            </p>

            <div className="relative rounded-2xl p-4 flex flex-col items-center"
              style={{ background: 'linear-gradient(135deg, #fff8e8 0%, #ffefc2 100%)', boxShadow: '0 0 30px rgba(255,200,80,0.5), 0 4px 20px rgba(0,0,0,0.3)' }}>
              <div className="absolute -inset-[2px] rounded-2xl border-2 border-amber-400/80" />
              <div className="relative">
                <div className="absolute -inset-3 rounded-xl bg-amber-300/40 blur-lg animate-pulse" />
                <img
                  src={QR}
                  alt="QR-код tuapsenoty.ru"
                  className="relative w-32 h-32 rounded-lg"
                />
              </div>
              <p className="mt-3 text-[#4a2c12] font-semibold text-[13px]">
                Телефон сам всё поймёт
              </p>
              <p className="text-[#7a5030] text-[11px] mt-0.5">
                Просто открой камеру и наведи
              </p>
            </div>

            <div className="mt-3 flex items-center justify-center gap-3">
              <span className="text-white/80 font-medium text-sm">#туапсеноты</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-amber-100 font-semibold text-sm tracking-wide">
                tuapsenoty.ru
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
