import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const VideoPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#1a2b30] flex items-center justify-center p-4 sm:p-8 font-body">
      <div className="relative w-full max-w-[440px] rounded-[2.5rem] overflow-hidden"
        style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}>
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(170deg, #2a6b78 0%, #3d8a8f 18%, #7a8a6a 44%, #c97a3a 70%, #d9803f 100%)',
        }} />
        <div className="relative flex flex-col items-center px-5 pt-5 pb-6 gap-4">
          <div className="w-full flex items-center justify-start">
            <Link to="/"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)' }}>
              <Icon name="ChevronLeft" size={16} color="white" />
              <span className="font-body text-white" style={{ fontSize: '12px' }}>Назад</span>
            </Link>
          </div>

          <h1 className="font-display font-bold text-center"
            style={{ fontSize: 'clamp(1.6rem, 7vw, 2.1rem)', color: '#fff3d6', textShadow: '0 3px 20px rgba(0,0,0,0.45)' }}>
            Семейные ценности
          </h1>

          <video
            src="/semya.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-2xl bg-black"
            style={{ aspectRatio: '9 / 16', boxShadow: '0 8px 30px rgba(0,0,0,0.4), 0 0 0 3px #C67A3E' }}
          />

          <a href="/semya.mp4" download="semya.mp4"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-body font-semibold"
            style={{ background: '#fff3d6', color: '#3a1f08', fontSize: '14px' }}>
            <Icon name="Download" size={16} />
            Скачать видео
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
