import http from "@/utils/http";

const prefix = ""

//查询优惠规则
export function demoApi (param: any) {
  return http.request({
    url: prefix + "/demo",
    method: "post",
    data: param,
  });
}
