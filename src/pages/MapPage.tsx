import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import MAP_IMG from '@/assets/tuapse-map.png';

const ENOTYCH_PHOTO = 'https://cdn.poehali.dev/projects/ccce36d2-15fb-48fb-b4fb-c42c690f9838/bucket/724f77ad-c334-4c05-91f4-132241599926.jfif';
const ENIRA_PHOTO = 'https://cdn.poehali.dev/projects/ccce36d2-15fb-48fb-b4fb-c42c690f9838/bucket/8bf60fe1-5987-40db-92cf-fc7e91ecb32f.jfif';

const MapPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#1a2b30] flex items-center justify-center p-4 sm:p-8 font-body">
      <div className="relative w-full max-w-[440px] rounded-[2.5rem] overflow-hidden"
        style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}>

        {/* Фон */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(170deg, #2a6b78 0%, #3d8a8f 18%, #7a8a6a 44%, #c97a3a 70%, #d9803f 100%)',
        }} />
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />

        <div className="relative flex flex-col items-center text-center px-5 pt-5 pb-6">

          {/* Назад */}
          <div className="w-full flex items-center justify-start mb-2">
            <Link to="/"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)' }}>
              <Icon name="ChevronLeft" size={16} color="white" />
              <span className="font-body text-white" style={{ fontSize: '12px' }}>Назад</span>
            </Link>
          </div>

          {/* Заголовок */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl leading-none">🗺️</span>
            <h1 className="font-display font-bold leading-none"
              style={{ fontSize: 'clamp(1.8rem, 8vw, 2.4rem)', color: '#C67A3E', textShadow: '0 3px 20px rgba(0,0,0,0.45)' }}>
              Карта Туапсенотов
            </h1>
          </div>
          <p className="mt-1 font-body text-white tracking-widest uppercase"
            style={{ fontSize: '9.5px', letterSpacing: '0.16em' }}>
            Где искать бронзовых хранителей
          </p>

          {/* Карта */}
          <div className="mt-4 w-full rounded-2xl overflow-hidden relative"
            style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.4), 0 0 0 3px #C67A3E' }}>
            <img src={MAP_IMG} alt="Карта Туапсе с метками" className="w-full h-auto block" />
          </div>

          {/* Карточки мест */}
          <div className="mt-4 w-full space-y-3">
            <div className="rounded-2xl overflow-hidden flex items-center gap-3 p-2.5 text-left"
              style={{ background: 'linear-gradient(160deg, #fffdf5 0%, #fff0c0 100%)', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' }}>
              <img src={ENOTYCH_PHOTO} alt="Енотыч-рыбак" className="rounded-xl object-cover shrink-0"
                style={{ width: '64px', height: '64px', boxShadow: '0 3px 10px rgba(0,0,0,0.2)' }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#e14b4b', boxShadow: '0 0 5px #e14b4b' }} />
                  <p className="font-body font-bold text-[#3a1f08]" style={{ fontSize: '13px' }}>Енотыч-рыбак</p>
                </div>
                <p className="font-body text-[#8a6040] mt-0.5" style={{ fontSize: '10.5px', lineHeight: 1.4 }}>
                  Морской бульвар, у причала №9
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden flex items-center gap-3 p-2.5 text-left"
              style={{ background: 'linear-gradient(160deg, #fffdf5 0%, #fff0c0 100%)', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' }}>
              <img src={ENIRA_PHOTO} alt="Енира с малышом" className="rounded-xl object-cover shrink-0"
                style={{ width: '64px', height: '64px', boxShadow: '0 3px 10px rgba(0,0,0,0.2)' }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#4caf6a', boxShadow: '0 0 5px #4caf6a' }} />
                  <p className="font-body font-bold text-[#3a1f08]" style={{ fontSize: '13px' }}>Енира с малышом</p>
                </div>
                <p className="font-body text-[#8a6040] mt-0.5" style={{ fontSize: '10.5px', lineHeight: 1.4 }}>
                  Городской парк
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 font-body text-white/80" style={{ fontSize: '11px' }}>
            Найди, потрогай и загадай желание ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapPage;