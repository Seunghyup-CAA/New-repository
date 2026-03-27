import { useState } from "react";

const coverKo = "/cover.png";
const coverEn = "/cover_en.png";
const authorImg = "/Soon Hong 1.png";

const placeholderCover = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1200" viewBox="0 0 800 1200">
  <rect width="100%" height="100%" fill="#d1d5db"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Georgia, serif" font-size="36" fill="#475569">Book Cover</text>
</svg>` )}`;

const placeholderAuthor = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
  <rect width="100%" height="100%" fill="#e5e7eb"/>
  <circle cx="300" cy="220" r="90" fill="#cbd5e1"/>
  <rect x="180" y="340" width="240" height="140" rx="70" fill="#cbd5e1"/>
  <text x="50%" y="540" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="28" fill="#475569">Author Photo</text>
</svg>` )}`;

type Content = {
  badge: string;
  title: string;
  subtitle: string;
  hero: string;
  eventLabel: string;
  eventTitle: string;
  eventDate: string;
  eventDesc: string;
  eventBtn: [string, string];
  about: string;
  aboutShort: string;
  aboutLong: string[];
  more: string;
  buy: string;
  contact: string;
  toc: string;
  tocItems: string[];
  author: string;
  authorBody: string;
  authorLong: string[];
  moreAuthor: string;
  footerTitle: string;
  footerDesc: string;
};

const KO: Content = {
  badge: "홍순완 자전에세이",
  title: "신비스러운 나의 강들",
  subtitle: "남강에서 허드슨강까지",
  hero: "삶과 기억, 고통과 감사가 하나의 흐름으로 이어지는 자전에세이",
  eventLabel: "📢 출판기념회 안내",
  eventTitle: "『신비스러운 나의 강들』 출판기념회",
  eventDate: "",
  eventDesc:
    "소중한 분들을 모시고 출판기념회를 개최 할 예정 입니다. 함께 자리해 주셔서 이 의미 있는 시간을 나누어 주시기 바랍니다.",
  eventBtn: ["이메일로", "문의하기"],
  about: "책 소개",
  aboutShort:
    "병상에서 시작된 기록이 한 인간의 전 생애를 돌아보게 하는 자전에세이입니다. 고향과 이민의 삶, 가족과 신앙, 기억과 죽음, 슬픔과 감사가 하나의 흐름 안에서 만납니다.",
  aboutLong: [
    "『신비스러운 나의 강들』은 폐암 진단을 받은 여든 살 한인 이민자가 맨해튼 재활원에서 쓴 회고록이다. 가족과 친구에게 보내는 편지, 신앙과 죽음에 대한 묵상, 병동에서 만난 비범한 사람들의 초상, 그리고 고향 진주와 미국 생활을 잇는 에세이—네 부분에 걸쳐, 홍순완은 두 강이 빚어낸 한 생애의 궤적을 그린다. 고도(古都) 진주를 품고 흐르는 남강과, 병실 창 너머로 보이는 허드슨강.",
    "투병 기록으로 시작된 이 글은 훨씬 더 큰 이야기가 된다. 아흔셋의 맹인 바이올리니스트, 줄리아드 출신의 세계적 무용수, 복도에서 찬송가를 부르는 할렘 출신 보조원—병동에서의 만남 하나하나가 인간이란 무엇인가에 대한 성찰로 열린다. 항암치료 후 새벽 두 시에 아내에게 쓴 편지들은 실용적이면서 동시에 가슴을 뭉클하게 한다. 남강변 하프마라톤, 가족 묘소 순례, 그리고 자신이 묻힐 곳에 대한 최종 결심은, 정직하게 들여다본 삶의 무게를 이 책에 부여한다.",
    "이 모든 것을 관통하는 하나의 빛나는 통찰이 있다: 고통을 감사로 받아들이면 그것이 강이 되고, 그 강이 빛이 된다는 것. 남강과 허드슨, 어머니와 아버지, 슬픔과 희망이 이 책 안에서 함께 흐르다가, 마침내 두 강이 아니라 하나의 강이 된다.",
  ],
  more: "자세히 보기",
  buy: "Amazon 구매",
  contact: "문의하기",
  toc: "목차",
  tocItems: [
    "작가의 말",
    "프롤로그",
    "1부. 허드슨강은 흐르는데",
    "2부. 내 생의 유별난 체험",
    "3부. 이윽고 보내는 편지",
    "4부. 진주, 그리고 맨해튼",
    "애필로그",
  ],
  author: "작가 소개",
  authorBody:
    "1945년 경남 진주 출생. 1977년 미국으로 이민하여 국제무역 사업을 전개했습니다. 마라톤 러너이자 월남전 참전용사, 천주교 신자로 살아왔으며 고향과 미국에서의 시간, 인간과 삶에 대한 성찰이 이 책의 바탕을 이룹니다.",
  authorLong: [
    "홍순완은 1945년 경남 진주에서 태어났다. 1977년 미국으로 이민하여 시카고에서 국제무역 사업을 일으켰다.",
    "마라톤 25회 완주의 평생 러너이자, 월남전 참전용사이며, 독실한 천주교 신자로 현재 뉴저지에 거주하고 있다.",
    "시카고 한인 문인회 및 남강 문인회 회원이며 Swanvive LLC 대표이사로 활동 중이다. 『신비스러운 나의 강들』은 첫 번째 책 『남강에서 맨해튼까지』에 이은 두 번째 저서이다.",
  ],
  moreAuthor: "자세히 보기",
  footerTitle: "구매 및 문의",
  footerDesc: "아래 버튼을 통해 Amazon 구매 페이지로 이동하거나 이메일로 문의할 수 있습니다.",
};

const EN: Content = {
  badge: "Autobiographical Memoir",
  title: "My Mystical Rivers",
  subtitle: "From the Nam River to the Hudson",
  hero: "A deeply reflective memoir where life, memory, suffering, and gratitude flow together as one continuous journey.",
  eventLabel: "📢 Book Launch Event",
  eventTitle: "My Mystical Rivers Book Launch",
  eventDate: "",
  eventDesc:
    "We are planning to hold a special book launch event and warmly invite you to join us. We would be honored to share this meaningful occasion with you.",
  eventBtn: ["Contact by", "Email"],
  about: "About the Book",
  aboutShort:
    "This memoir, begun during a time of illness, reflects on an entire lifetime of experiences, memories, and meaning. It brings together homeland and immigration, family and faith, memory and mortality in one continuous flow.",
  aboutLong: [
    "My Mystical Riverss is a memoir written from a Manhattan rehabilitation center by an eighty-year-old Korean immigrant facing lung cancer. Across four parts—letters to family and friends, meditations on faith and mortality, portraits of the extraordinary people he meets in the ward, and essays that weave together his hometown of Jinju, South Korea, and his adopted life in America—Hong Soon-wan traces the arc of a life shaped by two rivers: the Nam, which cradles the ancient city of Jinju, and the Hudson, which flows past his hospital window.",
    "What begins as a record of illness becomes something far larger. A ninety-three-year-old blind violinist, a world-class dancer from Juilliard, a Harlem-born aide who sings hymns in the hallway—each encounter in the ward opens into a reflection on what it means to be human. The author's letters to his wife, written at two in the morning after chemotherapy, are at once practical and devastatingly tender. His return to Jinju for a half-marathon along the Nam River, his pilgrimage to family graves, and his final decision about where he wishes to be buried give the book the weight of a life honestly examined.",
    "Running through it all is a single, luminous insight: that suffering, if received with gratitude, becomes a river—and that river becomes light. The Nam and the Hudson, mother and father, sorrow and hope, flow together in these pages until they are no longer two rivers but one.",
  ],
  more: "Learn More",
  buy: "Buy on Amazon",
  contact: "Contact",
  toc: "Contents",
  tocItems: [
    "Prologue: A Record for the Years Remaining",
    "Part I. The Hudson Flows On",
    "Part II. The Extraordinary Encounters of My Life",
    "Part III. Letters Sent at Long Last",
    "Part IV. Jinju, and Manhattan",
    "Epilogue: Our Family",
    "Proofreader's Note: A Note from the Proofreader",
  ],
  author: "About the Author",
  authorBody:
    "Born in Jinju, Korea, in 1945, Soon Wan Hong immigrated to the United States in 1977 and built a career in international trade. A marathon runner, Vietnam War veteran, and Catholic believer, he has carried a lifelong reflection on homeland, America, faith, and the meaning of human life.",
  authorLong: [
    "Hong Soon-wan was born in 1945 in Jinju, South Korea. He emigrated to the United States in 1977 and built a career in international trade in Chicago.",
    "A marathon runner with twenty-five races behind him, a Vietnam War veteran, and a devoted Catholic, he lives in New Jersey.",
    "He is a member of the Chicago Korean Literary Society and the Namgang Literary Society, and the founder of Swanvive LLC. My Mystical Riverss is his second book, following Namgang to Manhattan.",
  ],
  moreAuthor: "Learn More",
  footerTitle: "Purchase & Contact",
  footerDesc: "Use the buttons below to visit the Amazon page or get in touch by email.",
};

export default function MyMysticalRiverWebsite() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const [koSrc, setKoSrc] = useState(coverKo);
  const [enSrc, setEnSrc] = useState(coverEn);
  const [authorSrc, setAuthorSrc] = useState(authorImg);

  const isKo = lang === "ko";
  const t = isKo ? KO : EN;

  const amazonLink = isKo
    ? "https://www.amazon.com/dp/B0GTHL9C3D?ref=ppx_yo2ov_dt_b_fed_asin_title"
    : "https://www.amazon.com/dp/B0GR1Q2B2Z";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="fixed right-4 top-4 z-50 flex gap-2">
        <button
          onClick={() => setLang("ko")}
          className={`rounded px-3 py-1 ${isKo ? "bg-black text-white" : "border bg-white"}`}
        >
          KOR
        </button>
        <button
          onClick={() => setLang("en")}
          className={`rounded px-3 py-1 ${!isKo ? "bg-black text-white" : "border bg-white"}`}
        >
          ENG
        </button>
      </div>

      <section className="bg-teal-800 px-6 py-10 text-white md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex rounded-full border border-white/30 px-3 py-1 text-xs">{t.badge}</div>
          {isKo && (
            <div
              className="mt-4 text-lg tracking-[0.12em] text-[#e7d9a8]"
              style={{ fontVariant: "small-caps", textTransform: "lowercase" }}
            >
              my mystical rivers
            </div>
          )}
          <h1 className="mt-2 text-3xl font-bold md:text-5xl">{t.title}</h1>
          <p className={`mt-3 text-xl md:text-2xl ${!isKo ? "italic opacity-90" : ""}`}>{t.subtitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 md:text-lg">{t.hero}</p>
          {!isKo && <div className="mt-3 text-sm tracking-[0.08em] text-white/80">by Soon Wan Hong</div>}
        </div>
      </section>

      <section className="px-6 py-6 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 rounded-2xl border border-[#e7d9a8] bg-[#fff8e6] p-5 md:flex-row md:items-center">
          <div>
            <div className="text-sm font-semibold tracking-wide text-[#b89f5b]">{t.eventLabel}</div>
            <div className="mt-1 text-xl font-bold">{t.eventTitle}</div>
            {t.eventDate && <div className="mt-2 text-slate-700">{t.eventDate}</div>}
            <div className="mt-1 leading-7 text-slate-600">{t.eventDesc}</div>
          </div>
          <a
            href="mailto:seunghyuplee@hotmail.com"
            className="inline-flex min-h-[78px] min-w-[92px] flex-col items-center justify-center rounded-xl border border-[#e7d9a8] bg-white px-3 py-2 text-center text-[12px] font-semibold leading-5 text-[#0f4c5c] shadow-sm"
          >
            <span>{t.eventBtn[0]}</span>
            <span>{t.eventBtn[1]}</span>
          </a>
        </div>
      </section>

      <section className="px-6 py-4 md:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 rounded-[28px] bg-white p-6 shadow md:grid-cols-[280px_minmax(0,1fr)] md:p-8">
          <div className="text-center">
            <img
              src={isKo ? koSrc : enSrc}
              onError={() => (isKo ? setKoSrc(placeholderCover) : setEnSrc(placeholderCover))}
              className="mx-auto w-full max-w-[250px] rounded-2xl shadow-[0_35px_40px_-15px_rgba(0,0,0,0.35)]"
              alt={isKo ? "한글판 표지" : "영문판 표지"}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{t.about}</h2>
            <p className="mt-4 leading-9 text-[15px] md:text-[16px] text-slate-700">{t.aboutShort}</p>
            <details className="mt-4">
              <summary className="inline-block cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                {t.more}
              </summary>
              <div className="mt-4 space-y-6 leading-9 text-[15px] md:text-[16px] text-slate-700">
                {t.aboutLong.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </details>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={amazonLink} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-black px-5 py-3 text-center font-bold text-white">
                {t.buy}
              </a>
              <a href="mailto:seunghyuplee@hotmail.com" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center font-bold text-slate-900">
                {t.contact}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow">
          <h2 className="text-3xl font-bold">{t.toc}</h2>
          <div className="mt-5 space-y-3">
            {t.tocItems.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 px-4 py-3 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-4 pb-10 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow">
          <h2 className="text-3xl font-bold">{t.author}</h2>
          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start">
            <div className="text-center md:text-left">
              <img
                src={authorSrc}
                onError={() => setAuthorSrc(placeholderAuthor)}
                className="mx-auto w-[160px] rounded-xl shadow md:mx-0"
                alt="작가 사진"
              />
            </div>
            <div>
              <p className="leading-9 text-[15px] md:text-[16px] text-slate-700">{t.authorBody}</p>
              <details className="mt-4">
                <summary className="inline-block cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                  {t.moreAuthor}
                </summary>
                <div className="mt-4 space-y-6 leading-9 text-[15px] md:text-[16px] text-slate-700">
                  {t.authorLong.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-4 pb-12 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-white p-6 text-center shadow md:p-8">
          <h2 className="text-3xl font-bold">{t.footerTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">{t.footerDesc}</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-black px-5 py-3 text-center font-bold text-white"
            >
              {t.buy}
            </a>
            <a
              href="mailto:seunghyuplee@hotmail.com"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center font-bold text-slate-900"
            >
              {t.contact}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
