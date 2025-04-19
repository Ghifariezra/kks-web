// hooks/useSubmitSchedule.js
import axios from "axios";

const instanceSchedule = axios.create({
  baseURL: import.meta.env.VITE_ENDPOINT_API,
});

const useSubmitSchedule = () => {
  const submitSchedule = async (formData) => {
    try {
      const response = await instanceSchedule.post("/schedule", formData);
      return response.data;
    } catch (error) {
      console.error("Gagal kirim data:", error);
      throw error;
    }
  };

  return { submitSchedule };
};

const sendMessage = async (formData) => {
  try {
    const ENDPOINT_WA = import.meta.env.VITE_ENDPOINT_API_WHATSAPP;
    
    const [year, month, day] = formData.date.split("-");
    
    const formattedName = formData.name[0].toUpperCase() + formData.name.slice(1);
    const formattedDate = `${day}-${month}-${year}`;

    const message = `Mau konsultasi dong kak, \n\nNama: *${formattedName}* \nJadwal: *${formattedDate}*.\nPesan: ${formData.message}`;

    const url = `${ENDPOINT_WA}&text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  } catch (error) {
    console.error("Gagal kirim pesan:", error);
    throw error;
  }
};


export default useSubmitSchedule;
export { sendMessage };
