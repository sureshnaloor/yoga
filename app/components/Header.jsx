import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import YogaIconComp from "./Yogaiconcomp";
import InstructionsIcon from "./instructionsicon";
import VideosIcon from "./Videosicon";
import AudioPlayer from "./AudioPlayer";

export default function Header() {
  return (
    <header className="bg-primary dark:bg-gray-300 text-white dark:text-zinc-800 p-2 md:p-4 flex justify-between items-center">
      <h1 className="hidden md:block text-xs md:text-sm lg:text-lg font-semibold italic">
        Welcome to Our Yoga Platform
      </h1>
      <nav className="flex w-full md:w-auto justify-around md:justify-end items-center md:gap-4">
        <Link href="/yogaroom" className="relative group">
          <div className="flex items-center">
            <div className="w-4 md:w-6 lg:w-8">
              <YogaIconComp />
            </div>
            <span className="hidden md:inline ml-2 md:text-xs lg:text-sm">Yoga Room</span>
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-max opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-700 text-white p-1 rounded md:hidden">
              Yoga Room
            </span>
          </div>
        </Link>
        <Link href="/documents/yoga.pdf" className="relative group">
          <div className="flex items-center">
            <div className="w-4 md:w-6 lg:w-8">
              <InstructionsIcon />
            </div>
            <span className="hidden md:inline ml-2 md:text-xs lg:text-sm">Instructions</span>
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-max opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-700 text-white p-1 rounded md:hidden">
              Instructions
            </span>
          </div>
        </Link>
        <Link href="/youtube" className="relative group">
          <div className="flex items-center">
            <div className="w-4 md:w-6 lg:w-8">
              <VideosIcon />
            </div>
            <span className="hidden md:inline ml-2 md:text-xs lg:text-sm">Videos</span>
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-max opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-700 text-white p-1 rounded md:hidden">
              Videos
            </span>
          </div>
        </Link>
        <AudioPlayer />
        <div className="w-4 md:w-6 lg:w-8">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
} 