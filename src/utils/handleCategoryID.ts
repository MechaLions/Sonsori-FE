// Category를 선택하는 발음 교정, 쉐도잉에 사용할 카테고리 아이디 관리

export const setPronunciationId = (id: string) => {
  localStorage.setItem("PronunciationId", id);
};

export const getPronunciationId = () => {
  try {
    const PronunciationId = localStorage.getItem("PronunciationId");

    return PronunciationId ? PronunciationId : null;
  } catch (error) {
    return null;
  }
};

export const clearPronunciationId = () => {
  localStorage.removeItem("PronunciationId");
};

export const setShadowingId = (id: string) => {
  localStorage.setItem("ShadowingId", id);
};

export const getShadowingId = () => {
  try {
    const ShadowingId = localStorage.getItem("ShadowingId");

    return ShadowingId ? ShadowingId : null;
  } catch (error) {
    return null;
  }
};

export const clearShadowingId = () => {
  localStorage.removeItem("ShadowingId");
};
