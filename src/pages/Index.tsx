const RACCOON = 'https://cdn.poehali.dev/projects/ccce36d2-15fb-48fb-b4fb-c42c690f9838/bucket/f3ed4a36-fe64-492c-9b07-27fb6b52e6c4.jpg';
const QR = 'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://tuapsenoty.ru&color=3a1f08&bgcolor=fffbf0&margin=10';

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-[#1a2b30] flex items-center justify-center p-4 sm:p-8 font-body">
      <div className="relative w-full max-w-[440px] aspect-[9/16] rounded-[2.5rem] overflow-hidden"
        style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}>

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
        <div className="absolute top-8 right-8 opacity-35 select-none pointer-events-none">
          <svg width="56" height="28" viewBox="0 0 56 28" fill="none">
            <path d="M0 14 Q8 3 16 14 Q24 3 32 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <path d="M30 21 Q37 12 44 21 Q51 12 58 21" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5"/>
          </svg>
        </div>

        {/* Волны */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none">
          <svg viewBox="0 0 440 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M-10 60 Q35 48 75 60 Q115 72 155 60 Q195 48 235 60 Q275 72 315 60 Q355 48 395 60 Q425 68 450 60 L450 80 L-10 80 Z"
              fill="rgba(255,255,255,0.08)" />
            <path d="M-10 70 Q45 62 85 70 Q125 78 165 70 Q205 62 245 70 Q285 78 325 70 Q365 62 405 70 Q430 75 450 70 L450 80 L-10 80 Z"
              fill="rgba(255,255,255,0.06)" />
          </svg>
        </div>

        <div className="relative h-full flex flex-col items-center text-center px-5 pt-5 pb-4">

          {/* ВЕРХ */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl leading-none">🦝</span>
            <h1 className="font-display font-bold leading-none"
              style={{ fontSize: 'clamp(2.6rem, 11vw, 3.2rem)', color: '#C67A3E', textShadow: '0 3px 20px rgba(0,0,0,0.45)' }}>
              Туапсеноты
            </h1>
          </div>
          <p className="mt-0.5 font-body text-white tracking-widest uppercase"
            style={{ fontSize: '9.5px', letterSpacing: '0.16em' }}>
            Бронзовые еноты-хранители города
          </p>

          {/* Счётчик */}
          <div className="mt-1.5 flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" style={{ boxShadow: '0 0 5px #34d399' }} />
            <span className="font-body text-white" style={{ fontSize: '11.5px' }}>
              Енотыча нашли <span className="font-bold text-amber-200">1 787</span> человек
            </span>
          </div>

          {/* Фото */}
          <div className="relative mt-1 w-44 sm:w-52 flex-shrink-0">
            <div className="absolute -inset-6 bg-amber-200/20 blur-3xl rounded-full" />
            <img src={RACCOON} alt="Туапсеноты"
              className="relative w-full h-auto object-contain"
              style={{ filter: 'drop-shadow(0 10px 28px rgba(0,0,0,0.45))' }}
            />
          </div>

          {/* Тексты */}
          <div className="mt-1 w-full space-y-1">
            <div className="rounded-xl py-2 px-4"
              style={{ background: 'rgba(10,30,40,0.52)', backdropFilter: 'blur(8px)' }}>
              <p className="font-display italic text-white font-semibold leading-tight"
                style={{ fontSize: 'clamp(1rem, 4.5vw, 1.2rem)', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                Маленькие бронзовые чудеса,<br/>которые делают Туапсе теплее
              </p>
            </div>
            <p className="font-body text-white" style={{ fontSize: '11.5px', lineHeight: 1.5 }}>
              Найди, потрогай и загадай желание.<br/>Каждый хранит свою легенду удачи.
            </p>
            <p className="font-body font-semibold" style={{ color: '#f5d08a', fontSize: '12px' }}>
              ✨ Первый уже на набережной — Енотыч-рыбак ждёт тебя
            </p>
          </div>

          {/* QR планшет */}
          <div className="mt-auto w-full space-y-1.5">
            <div className="rounded-2xl" style={{
              background: 'linear-gradient(160deg, #fffdf5 0%, #fff0c0 100%)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.4), 0 0 0 3px #C67A3E',
              overflow: 'hidden',
            }}>
              <div className="flex items-center justify-center gap-2 py-1.5 px-4"
                style={{ background: 'linear-gradient(90deg, #b8621e 0%, #C67A3E 100%)' }}>
                <span style={{ fontSize: '14px' }}>📷</span>
                <p className="font-body font-bold text-white" style={{ fontSize: '13.5px' }}>
                  Наведи камеру на код
                </p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2">
                <img src={QR} alt="QR код" className="rounded-lg block shrink-0"
                  style={{ width: '88px', height: '88px', boxShadow: '0 3px 12px rgba(0,0,0,0.15)' }} />
                <div className="text-left flex-1 min-w-0">
                  <p className="font-body font-bold text-[#3a1f08]" style={{ fontSize: '12.5px', lineHeight: 1.4 }}>
                    Карта, легенды и квест — всё на сайте
                  </p>
                  <p className="font-body text-[#8a6040] mt-1" style={{ fontSize: '10px', lineHeight: 1.5 }}>
                    Телефон сам всё поймёт — просто открой камеру и наведи
                  </p>
                </div>
              </div>
              <div className="border-t px-4 py-1.5 flex items-center justify-center gap-1.5"
                style={{ borderColor: 'rgba(198,122,62,0.25)', background: 'rgba(255,240,200,0.5)' }}>
                <span style={{ fontSize: '13px' }}>🌐</span>
                <a href="https://tuapsenoty.ru"
                  className="font-body font-bold underline underline-offset-2"
                  style={{ color: '#1d6fbe', fontSize: '16px' }}>
                  tuapsenoty.ru
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <span style={{ fontSize: '11px' }}>❤️</span>
              <span className="font-body text-white/90" style={{ fontSize: '11px' }}>
                <span className="text-amber-200 font-bold">1 747</span> желаний загадано
              </span>
              <span className="text-white/50">•</span>
              <span className="font-body text-white/80" style={{ fontSize: '11px' }}>#туапсеноты</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
