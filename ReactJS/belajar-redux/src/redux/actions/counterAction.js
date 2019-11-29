import { TAMBAH, KURANG } from "../type";

export const TambahAction = () => {
  return {
    type: TAMBAH
  };
};

export const KurangAction = () => {
  return {
    type: KURANG
  };
};

export const ResetAction = () => {
  return {
    type: "RESET"
  };
};
