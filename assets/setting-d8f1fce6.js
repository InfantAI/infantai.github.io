import{W as e,$ as u}from"./index-c831df68.js";function o(){return e.get({url:u.AdPage.Get})}function d(t,a,r=""){const s={id:t,img:a,language:r};return e.post({url:u.AdPage.Update,data:s})}function i(t){return e.post({url:u.AdPage.Add,data:{img:t}})}function p(t){return e.post({url:u.Notice.Send,data:t})}function c(t){return e.post({url:u.Notice.List,data:t})}function g(){return e.post({url:u.PushData.Get})}function f(t){return e.post({url:u.PushData.Update,data:t})}export{i as a,c as b,f as c,g as d,o as g,p as s,d as u};
