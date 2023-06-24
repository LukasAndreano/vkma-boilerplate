import * as eruda from "eruda";
const erudaCode = require("eruda-code");
const erudaDom = require("eruda-dom");

(eruda as any).init();
(eruda as any).add(erudaCode);
(eruda as any).add(erudaDom);

export default eruda;
