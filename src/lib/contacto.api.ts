// const API_URL = http://192.168.10.145:3000/contacto
const API_URL = "http://localhost:3000";

export const enviarContacto = async (data: any) => {
  const res = await fetch(`${API_URL}/contacto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};