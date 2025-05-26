import api from "../lib/api-helper";

export const getModelOutput = async (modelId: string, inputData: string) => {
  const res = await api.post(`/models/${modelId}`, inputData);
  return res.data;
};
