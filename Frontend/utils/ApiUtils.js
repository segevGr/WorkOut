import { ApiError } from "./ApiError";

export async function handleApiResponse(response) {
  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.message || "Unknown error";
    const statusCode = response.status;
    throw new ApiError(errorMessage, statusCode);
  }
  return response.json();
}
