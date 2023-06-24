// @ts-nocheck
import * as eruda from "eruda";
import * as erudaCode from "eruda-code";
import * as erudaDom from "eruda-dom";

(eruda as any).init();
(eruda as any).add(erudaCode);
(eruda as any).add(erudaDom);

export default eruda;
