import Image from "next/image";

export default function Home() {
  const profile = {
    name: "최정훈 (Choi Jung-hoon)",
    birth: "1992년 3월 10일",
    group: "잔나비 (Jannabi)",
    position: "리더, 보컬, 작사, 작곡",
    agency: "페포니뮤직",
    education: "경희대학교 경영학 (휴학)",
    description: "독보적인 음색과 서정적인 가사로 사랑받는 그룹 사운드 '잔나비'의 리더이자 보컬입니다. 거의 모든 곡의 작사와 작곡을 맡고 있으며, 2014년 데뷔 이후 '주저하는 연인들을 위해', '뜨거운 여름밤은 가고 남은 건 볼품없지만' 등 수많은 히트곡을 탄생시켰습니다.",
    awards: [
      "2023년 KBS 연예대상 쇼·버라이어티 부문 남자 우수상",
      "한국대중음악상 다수 수상 (잔나비)"
    ],
    mbti: "ENFP",
    height: "176.7cm"
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <main className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-zinc-900">
        {/* Header/Cover Area */}
        <div className="h-32 bg-gradient-to-r from-amber-200 to-yellow-500 dark:from-amber-900 dark:to-yellow-700" />
        
        <div className="px-8 pb-12">
          {/* Profile Image Placeholder */}
          <div className="-mt-16 flex justify-center sm:justify-start">
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl border-4 border-white bg-zinc-200 dark:border-zinc-900">
              <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-zinc-400">
                CJH
              </div>
            </div>
          </div>

          {/* Name and Basic Info */}
          <div className="mt-6 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
              {profile.name}
            </h1>
            <p className="mt-1 text-lg font-medium text-amber-600 dark:text-amber-400">
              {profile.group} • {profile.position}
            </p>
          </div>

          {/* Description */}
          <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-800">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              About
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              {profile.description}
            </p>
          </div>

          {/* Details Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Birth
              </h3>
              <p className="mt-1 text-zinc-900 dark:text-zinc-100">{profile.birth}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Agency
              </h3>
              <p className="mt-1 text-zinc-900 dark:text-zinc-100">{profile.agency}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Education
              </h3>
              <p className="mt-1 text-zinc-900 dark:text-zinc-100">{profile.education}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                MBTI / Physical
              </h3>
              <p className="mt-1 text-zinc-900 dark:text-zinc-100">{profile.mbti} • {profile.height}</p>
            </div>
          </div>

          {/* Awards */}
          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Key Awards
            </h2>
            <ul className="mt-3 space-y-2">
              {profile.awards.map((award, index) => (
                <li key={index} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  {award}
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Action Links */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/jannabijh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@JANNABI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              YouTube
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
