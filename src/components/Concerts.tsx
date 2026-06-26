import concertsVideo from "@/assets/concerts-video.mp4";
import photo1 from "@/assets/concert-photo-1.jpg";
import photo2 from "@/assets/concert-photo-2.jpg";
import photo3 from "@/assets/concert-photo-3.jpg";
import photo4 from "@/assets/concert-photo-4.jpg";

const PHOTOS = [photo1, photo2, photo3, photo4];

export const Concerts = () => {
  return (
    <section id="concerts" className="py-16 max-[480px]:py-10 px-4 bg-warm-bg">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl max-[480px]:text-2xl font-bold mb-6 max-[480px]:mb-4 text-foreground text-center">
          Отчётные концерты
        </h2>

        <p className="text-lg md:text-xl max-[480px]:text-base text-foreground/80 leading-relaxed text-center mb-10 max-[480px]:mb-7 max-w-2xl mx-auto">
          Каждые 2–3 месяца мы выходим на настоящую сцену.
          <br className="hidden md:block" />{" "}
          Профессиональные площадки Москвы, живой свет, зал — и вы в центре всего этого. Можно пригласить мужа, подруг, родителей. Пусть видят, какая вы яркая и смелая!
          <br />
          <br />
          После концерта — <strong>хораоке</strong>: поём все вместе под живую музыку, уже без деления на сцену и зал.
        </p>

        {/* Видео + фото */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {/* Вертикальное видео */}
          <div className="rounded-2xl overflow-hidden shadow-warm flex-shrink-0 md:w-80 w-full max-w-xs mx-auto md:mx-0">
            <video
              src={concertsVideo}
              controls
              className="w-full h-full object-cover aspect-[9/16]"
              preload="metadata"
            />
          </div>

          {/* 2×2 сетка портретных фото */}
          <div className="grid grid-cols-2 gap-3 flex-1">
            {PHOTOS.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src={src}
                  alt={`Концерт фото ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
