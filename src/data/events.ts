import { Piano, Music, Sparkles } from "lucide-react";

import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";
import photo7 from "@/assets/gallery/photo-7.jpg";
import photo8 from "@/assets/gallery/photo-8.jpg";
import photo9 from "@/assets/gallery/photo-9.jpg";

export const archivePhotos = [
  { id: 0, src: photo1, alt: "Участницы танцуют с поднятыми руками" },
  { id: 1, src: photo2, alt: "Девушки поют хором" },
  { id: 2, src: photo3, alt: "Участницы смеются и аплодируют" },
  { id: 3, src: photo4, alt: "Ведущая за пианино" },
  { id: 4, src: photo5, alt: "Участницы поют с поднятыми руками" },
  { id: 5, src: photo6, alt: "Подруги обнимаются и поют" },
  { id: 6, src: photo7, alt: "Девушка поёт в микрофон" },
  { id: 7, src: photo8, alt: "Зал поёт вместе" },
  { id: 8, src: photo9, alt: "Подруги улыбаются на вечеринке" },
];

/* Grid cell spans for a balanced 3-col masonry look */
export const gridSpans = [
  "md:row-span-2", // tall
  "md:row-span-1", // short
  "md:row-span-1", // short
  "md:row-span-1", // short
  "md:row-span-2", // tall
  "md:row-span-1", // short
  "md:row-span-1", // short
  "md:row-span-1", // short
  "md:row-span-1", // short
];

export const featureCards = [
  {
    icon: Piano,
    title: "Живая музыка",
    text: "Чуткое пианино, звонкая гитара и драйвовый баян",
  },
  {
    icon: Music,
    title: "Любимые песни",
    text: "Главные хиты советской эстрады и кинофильмов",
  },
  {
    icon: Sparkles,
    title: "Закуски и игристое",
    text: "Вкусные детали для атмосферы праздника",
  },
];
