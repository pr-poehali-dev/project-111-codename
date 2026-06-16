const RACCOON = 'https://cdn.poehali.dev/projects/ccce36d2-15fb-48fb-b4fb-c42c690f9838/bucket/f3ed4a36-fe64-492c-9b07-27fb6b52e6c4.jpg';
const QR = 'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://tuapsenoty.ru&color=3a1f08&bgcolor=fffbf0&margin=10';

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-[#1a2b30] flex items-center justify-center p-4 sm:p-8 font-body">
      <div className="relative w-full max-w-[440px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl">

        {/* Фон */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(170deg, #2a6b78 0%, #3d8a8f 18%, #7a8a6a 44%, #c97a3a 70%, #d9803f 100%)',
        }} />

        {/* Текстура */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />

        {/* Чайки */}
        <div className="absolute top-10 right-8 opacity-35 select-none pointer-events-none">
          <svg width="64" height="32" viewBox="0 0 64 32" fill="none">
            <path d="M0 16 Q9 4 18 16 Q27 4 36 16" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M34 24 Q41 14 48 24 Q55 14 62 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
          </svg>
        </div>
        <div className="absolute top-20 left-6 opacity-20 select-none pointer-events-none">
          <svg width="34" height="17" viewBox="0 0 34 17" fill="none">
            <path d="M0 9 Q6 2 12 9 Q18 2 24 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        {/* Волны внизу */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none">
          <svg viewBox="0 0 440 110" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 75 L40 75 L40 65 L65 65 L65 72 L95 72 L95 60 L115 60 L115 68 L155 68 L155 76 L185 76 L185 64 L205 64 L205 70 L245 70 L245 58 L265 58 L265 68 L305 68 L305 73 L345 73 L345 65 L375 65 L375 73 L410 73 L410 78 L440 78 L440 110 L0 110 Z"
              fill="rgba(0,40,60,0.22)" />
            <path d="M-10 90 Q35 78 75 90 Q115 102 155 90 Q195 78 235 90 Q275 102 315 90 Q355 78 395 90 Q425 98 450 90 L450 110 L-10 110 Z"
              fill="rgba(255,255,255,0.09)" />
            <path d="M-10 102 Q45 94 85 102 Q125 110 165 102 Q205 94 245 102 Q285 110 325 102 Q365 94 405 102 Q430 107 450 102 L450 110 L-10 110 Z"
              fill="rgba(255,255,255,0.06)" />
          </svg>
        </div>

        <div className="relative h-full flex flex-col items-center text-center px-6 pt-7 pb-5">

          {/* ВЕРХ */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl leading-none">🦝</span>
            <h1 className="font-display font-bold leading-none tracking-wide"
              style={{ fontSize: 'clamp(2.8rem, 12vw, 3.6rem)', color: '#C67A3E', textShadow: '0 2px 18px rgba(0,0,0,0.4)' }}>
              Туапсеноты
            </h1>
          </div>
          <p className="mt-1.5 text-white/80 font-medium tracking-widest uppercase"
            style={{ fontSize: '11px', letterSpacing: '0.15em' }}>
            Бронзовые еноты-хранители города
          </p>

          {/* ЦЕНТР — енот */}
          <div className="relative mt-3 w-56 sm:w-64 flex-shrink-0">
            <div className="absolute -inset-8 bg-amber-200/20 blur-3xl rounded-full" />
            <img
              src={RACCOON}
              alt="Енотыч"
              className="relative w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Призывы */}
          <div className="mt-2 w-full">
            <div className="rounded-2xl py-3 px-5"
              style={{ background: 'rgba(10,30,40,0.5)', backdropFilter: 'blur(6px)' }}>
              <p className="font-display italic text-white font-semibold leading-tight"
                style={{ fontSize: 'clamp(1.25rem, 5.5vw, 1.5rem)', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                Найди меня на набережной
              </p>
            </div>
            <p className="mt-2 font-medium" style={{ color: '#f5d08a', fontSize: '15px' }}>
              Потри лапку и загадай желание
            </p>
          </div>

          {/* НИЗ */}
          <div className="mt-auto w-full space-y-2.5">

            {/* QR */}
            <div className="relative rounded-2xl p-3 flex items-center gap-4"
              style={{
                background: 'linear-gradient(135deg, #fffbf0 0%, #ffe8a0 100%)',
                boxShadow: '0 0 32px rgba(255,200,60,0.5), 0 6px 20px rgba(0,0,0,0.3)',
                border: '2.5px solid rgba(210,160,40,0.8)'
              }}>
              <div className="relative shrink-0">
                <div className="absolute -inset-1.5 rounded-xl bg-amber-300/40 blur-md" />
                <img src={QR} alt="QR код" className="relative w-24 h-24 rounded-xl" />
              </div>
              <div className="text-left flex-1">
                <p className="text-[#3a1f08] font-bold leading-snug" style={{ fontSize: '15px' }}>
                  Наведи камеру
                </p>
                <p className="text-[#3a1f08] font-bold leading-snug" style={{ fontSize: '15px' }}>
                  я покажу карту
                </p>
                <p className="text-[#7a5030] mt-1.5 leading-relaxed" style={{ fontSize: '11px' }}>
                  Телефон сам всё поймёт.
                  Просто открой камеру и наведи.
                </p>
              </div>
            </div>

            {/* Ссылка */}
            <div className="rounded-xl py-2.5 px-4 flex items-center justify-center gap-2"
              style={{ background: 'rgba(255,255,255,0.12)' }}>
              <span style={{ fontSize: '18px' }}>🌐</span>
              <span className="font-bold tracking-wide" style={{ color: '#fde68a', fontSize: '17px' }}>
                tuapsenoty.ru
              </span>
            </div>

            {/* Счётчик + хештег */}
            <div className="flex items-center justify-between px-1">
              <span className="text-white/55" style={{ fontSize: '11px' }}>#туапсеноты</span>
              <div className="flex items-center gap-1">
                <span style={{ fontSize: '11px' }}>❤️</span>
                <span className="text-white/75" style={{ fontSize: '11px' }}>
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
