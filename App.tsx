// Use this file in your React project (replace App.tsx or page component)

import { useState } from "react";

const coverKo = "/cover.png";
const coverEn = "/cover_en.png";
const authorImg = "/Soon Hong 1.png";

export default function MyMysticalRiverWebsite() {
  const [lang, setLang] = useState("ko");
  const isKo = lang === "ko";

  return (
    <div>
      <h1>{isKo ? "신비스러운 나의 강들" : "My Mystical River"}</h1>
      <img src={isKo ? coverKo : coverEn} width="200"/>
      <img src={authorImg} width="120"/>
    </div>
  );
}
