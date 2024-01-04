import { ChatMessageType } from "../store/store";

export async function fetchResults(
  messages: Omit<ChatMessageType, "id">[],
  modal: string,
  signal: AbortSignal,
  onData: (data: any) => void,
  onCompletion: () => void
) {
  try {
    // Simulate a delay to mimic API request time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Instead of making an API request, generate a random string
    const randomString = generateRandomString(200);
    onData(randomString);

    // Simulate completion after generating the random string
    onCompletion();
  } catch (error) {
    if (error instanceof DOMException || error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export async function fetchModals() {
  try {
    // Simulate a delay to mimic API request time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For simplicity, return a static list of modals
    const modals = ["modal1", "modal2", "modal3"];
    return modals;
  } catch (error) {
    if (error instanceof DOMException || error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

function generateRandomString(length: number): string {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}
