export default function ComingSoon() {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1a2a1a",
        overflow: "hidden",
      }}
    >
      <img
        src="/coming-soon.png"
        alt="همسفر سیلانه سبز - به زودی در کنار شما خواهیم بود"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
