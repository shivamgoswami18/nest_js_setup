import { SIGN_IN } from "./ApiRoutes";
import { nonAuthData } from "./ApiService";

export const signInApi = async (formData: object) => {
  const response = await nonAuthData.post(SIGN_IN, formData);
  return response.data;
};
