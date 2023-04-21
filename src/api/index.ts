import { createRequest } from "@/utils/http";
import { getOrderDetailsReq, getOrderDetailsRes } from "./types/index";

export const getOrderDetails = createRequest<
  getOrderDetailsReq,
  getOrderDetailsRes
>({
  path: "app/order/ds/detail",
});
