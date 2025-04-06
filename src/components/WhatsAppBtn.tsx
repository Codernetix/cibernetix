import whatsAppLogo from "../assets/whatsapp-logo.png";

const WhatsAppBtn = () => {
  const whatsappNumber = "573226180987"; // Número en formato internacional
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      <img
        src={whatsAppLogo}
        alt="WhatsApp"
        style={{
          width: "35px",
          height: "35px",
        }}
      />
    </a>
  );
};

export default WhatsAppBtn;
