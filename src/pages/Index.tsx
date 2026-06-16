import Icon from '@/components/ui/icon';

const RACCOON = 'https://cdn.poehali.dev/projects/ccce36d2-15fb-48fb-b4fb-c42c690f9838/files/4c69ae56-b41c-44b8-9ae0-2a1ccaeace68.jpg';
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
        {/* Текстура свечения */}
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[140%] h-[60%] bg-white/10 blur-3xl rounded-full" />

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

          {/* Изображение енота */}
          <div className="mt-6 relative">
            <div className="absolute inset-0 rounded-full bg-amber-200/30 blur-2xl scale-110" />
            <img
              src={RACCOON}
              alt="Бронзовый енот Туапсеноты"
              className="relative w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-full border-4 border-white/60 shadow-xl"
            />
          </div>

          {/* Призывы */}
          <div className="mt-6 space-y-2.5">
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
              <img
                src={QR}
                alt="QR-код tuapsenoty.ru"
                className="w-20 h-20 rounded-lg bg-[#fdf6ec] p-1 shadow-md shrink-0"
              />
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
