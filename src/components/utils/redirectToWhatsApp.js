export default function redirectToWhatsApp(data) {
  const encodedMessage = encodeURIComponent(data.message);
  const url = `https://api.whatsapp.com/send?text=${encodedMessage}&phone=${data.number}`;
  window.location.href = url;
}
