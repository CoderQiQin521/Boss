import { Toast } from "vant";

export const toast = ({ msg }) => {
  return new Promise((resolve, reject) => {
    Toast.success(msg);
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
