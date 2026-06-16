import Icon from '@/components/ui/icon';

const RACCOON = 'https://cdn.poehali.dev/projects/ccce36d2-15fb-48fb-b4fb-c42c690f9838/bucket/f3ed4a36-fe64-492c-9b07-27fb6b52e6c4.jpg';
const QR = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://tuapsenoty.ru&color=4a2c12&bgcolor=fdf6ec&margin=8';

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-[#1a2b30] flex items-center justify-center p-4 sm:p-8 font-body">
      <div className="relative w-full max-w-[440px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
        {/* Градиентный фон */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, #2a6b78 0%, #3d7a82 22%, #9a8a6a 50%, #d9803f 78%, #e08a3c 100%)',
          }}
        />

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

          {/* Изображение — квадрат с мягкой тенью, без обрезки */}
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
            <div className="flex items-center justify-center gap-4 bg-white/15 backdrop-blur-md rounded-2xl px-4 py-4 border border-white/20">
              <div className="text-right flex-1">
                <p className="text-white font-medium text-[15px] leading-tight">
                  Наведи камеру
                </p>
                <p className="text-amber-100 text-[13px]">и я оживу!</p>
              </div>
              <div className="relative shrink-0">
                {/* Пульсирующее свечение */}
                <div className="absolute -inset-2 rounded-xl bg-amber-300/60 blur-md animate-pulse" />
                <div className="absolute -inset-1 rounded-xl border-2 border-amber-300/80" />
                <img
                  src={QR}
                  alt="QR-код tuapsenoty.ru"
                  className="relative w-20 h-20 rounded-lg bg-[#fdf6ec] p-1 shadow-xl"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center gap-1">
              <p className="text-[13px] text-white/85">
                Перейди на сайт — смотри карту
              </p>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-white font-medium text-sm">#туапсеноты</span>
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <span className="text-amber-100 font-semibold text-sm tracking-wide">
                  tuapsenoty.ru
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