import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function whatsappLink(message: string, phone = "923468011903") {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
