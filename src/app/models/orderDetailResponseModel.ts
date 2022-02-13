import { orderDetail } from "./orderDetail";

export interface orderDetailResponseModel{
  data:orderDetail[],
  success:boolean,
  message:string
}
