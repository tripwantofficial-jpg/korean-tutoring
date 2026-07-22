// 주차별 비밀번호 (base64 인코딩) — 소스 검색으로 바로 안 보이게
// 강한 보안 아님 · 학생이 순서대로 진행하도록 하는 심리적 게이팅
//
// 비밀번호 바꾸는 법:
//   Chrome 콘솔에 btoa('바꿀비번') 넣어 결과값 붙여넣기
//   예: btoa('batchim')  → 'YmF0Y2hpbQ=='
//
// Week 1 은 항상 열려있음 (학생이 시작할 수 있어야 함).
window.WEEK_PASSWORDS_ENC = {
  2: 'YmF0Y2hpbQ==',        // = "batchim"
  3: 'eWVvbmV1bQ==',        // = "yeoneum"
  4: 'Z3JhZHVhdGlvbg==',    // = "graduation"
};

// 검증 함수 · 입력된 문자열과 저장된 인코딩 비교
window.checkWeekPassword = function(week, input) {
  const stored = window.WEEK_PASSWORDS_ENC?.[week];
  if (!stored || !input) return false;
  try { return btoa(String(input).trim()) === stored; }
  catch { return false; }
};
