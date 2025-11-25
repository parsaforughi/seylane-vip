export function useTelegram() {
  const tg = window.Telegram?.WebApp;
  const isInTelegram = !!tg;

  return {
    tg,
    isInTelegram,
    user: tg?.initDataUnsafe?.user,
  };
}
