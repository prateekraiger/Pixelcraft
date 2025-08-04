
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available, but do not hardcode it.
// It's expected to be set in the environment variables.
if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePixelArt = async (userPrompt: string): Promise<string> => {
  if (!userPrompt.trim()) {
    throw new Error("Prompt cannot be empty.");
  }

  // Craft a more detailed prompt to guide the model effectively.
  const detailedPrompt = `A vibrant and detailed pixel art masterpiece of '${userPrompt}'. 16-bit retro style, sharp pixels, limited color palette, no anti-aliasing.`;

  try {
    const response = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002',
      prompt: detailedPrompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/png',
        aspectRatio: '1:1', // Pixel art often suits a square aspect ratio
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      return `data:image/png;base64,${base64ImageBytes}`;
    } else {
      throw new Error("No image was generated. The response may have been blocked.");
    }
  } catch (error) {
    console.error("Error generating image with Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Gemini API Error: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating the image.");
  }
};
