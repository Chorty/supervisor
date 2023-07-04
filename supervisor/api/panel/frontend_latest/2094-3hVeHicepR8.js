export const id=2094;export const ids=[2094];export const modules={72094:(e,t,s)=>{s.r(t);var i=s(17463),a=s(34541),o=s(47838),r=s(68144),n=s(79932),d=s(47181),l=s(83849),c=s(15493),h=s(96151),u=(s(5666),s(34154)),p=s(41682),v=s(63864);function g(e){return document.cookie=`ingress_session=${e};path=/api/hassio_ingress/;SameSite=Strict${"https:"===location.protocol?";Secure":""}`,e}const _=async e=>{if((0,v.I)(e.config.version,2021,2,4)){return g((await e.callWS({type:"supervisor/api",endpoint:"/ingress/session",method:"post"})).session)}return g((await e.callApi("POST","hassio/ingress/session")).data.session)};var f=s(26765);s(15291),s(15803);(0,i.Z)([(0,n.Mo)("hassio-ingress-view")],(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"ingressPanel",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_addon",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",key:"_sessionKeepAlive",value:void 0},{kind:"field",key:"_fetchDataTimeout",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,o.Z)(s.prototype),"disconnectedCallback",this).call(this),this._sessionKeepAlive&&(clearInterval(this._sessionKeepAlive),this._sessionKeepAlive=void 0),this._fetchDataTimeout&&(clearInterval(this._fetchDataTimeout),this._fetchDataTimeout=void 0)}},{kind:"method",key:"render",value:function(){if(!this._addon)return r.dy`<hass-loading-screen></hass-loading-screen>`;const e=r.dy`<iframe title="${this._addon.name}" src="${this._addon.ingress_url}" @load="${this._checkLoaded}"> </iframe>`;return this.ingressPanel?r.dy`${this.narrow||"always_hidden"===this.hass.dockedSidebar?r.dy`<div class="header"> <ha-icon-button .label="${this.hass.localize("ui.sidebar.sidebar_toggle")}" .path="${"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}" @click="${this._toggleMenu}"></ha-icon-button> <div class="main-title">${this._addon.name}</div> </div> ${e}`:e}`:r.dy`<hass-subpage .hass="${this.hass}" .header="${this._addon.name}" .narrow="${this.narrow}"> ${e} </hass-subpage>`}},{kind:"method",key:"firstUpdated",value:async function(){if(""===this.route.path){const e=(0,c.io)("addon");let t;if(e){try{t=await(0,u.AD)(this.hass,e)}catch(t){return await(0,f.Ys)(this,{text:(0,p.js)(t),title:e}),await(0,h.y)(),void(0,l.c)("/hassio/store",{replace:!0})}t.version?t.ingress?(0,l.c)(`/hassio/ingress/${t.slug}`,{replace:!0}):(await(0,f.Ys)(this,{text:this.supervisor.localize("my.error_addon_no_ingress"),title:t.name}),await(0,h.y)(),(0,l.c)(`/hassio/addon/${t.slug}/info`,{replace:!0})):(await(0,f.Ys)(this,{text:this.supervisor.localize("my.error_addon_not_installed"),title:t.name}),await(0,h.y)(),(0,l.c)(`/hassio/addon/${t.slug}/info`,{replace:!0}))}}}},{kind:"method",key:"updated",value:function(e){if((0,a.Z)((0,o.Z)(s.prototype),"updated",this).call(this,e),!e.has("route"))return;const t=this.route.path.substring(1),i=e.get("route"),r=i?i.path.substring(1):void 0;t&&t!==r&&this._fetchData(t)}},{kind:"method",key:"_fetchData",value:async function(e){const t=_(this.hass);let s,i;try{s=await(0,u.AD)(this.hass,e)}catch(e){return await(0,f.Ys)(this,{text:this.supervisor.localize("ingress.error_addon_info"),title:"Supervisor"}),await(0,h.y)(),void(0,l.c)("/hassio/store",{replace:!0})}if(!s.version)return await(0,f.Ys)(this,{text:this.supervisor.localize("ingress.error_addon_not_installed"),title:s.name}),await(0,h.y)(),void(0,l.c)(`/hassio/addon/${s.slug}/info`,{replace:!0});if(!s.ingress_url)return await(0,f.Ys)(this,{text:this.supervisor.localize("ingress.error_addon_not_supported"),title:s.name}),await(0,h.y)(),void history.back();if(!s.state||!["startup","started"].includes(s.state)){if(!await(0,f.g7)(this,{text:this.supervisor.localize("ingress.error_addon_not_running"),title:s.name,confirmText:this.supervisor.localize("ingress.start_addon"),dismissText:this.supervisor.localize("common.no")}))return await(0,h.y)(),void(0,l.c)(`/hassio/addon/${s.slug}/info`,{replace:!0});try{return await(0,u.kP)(this.hass,e),(0,d.B)(this,"supervisor-collection-refresh",{collection:"addon"}),void this._fetchData(e)}catch(e){return await(0,f.Ys)(this,{text:this.supervisor.localize("ingress.error_starting_addon"),title:s.name}),await(0,h.y)(),void(0,l.c)(`/hassio/addon/${s.slug}/logs`,{replace:!0})}}if("startup"!==s.state){if("started"===s.state){this._fetchDataTimeout&&(clearInterval(this._fetchDataTimeout),this._fetchDataTimeout=void 0);try{i=await t}catch(e){return this._sessionKeepAlive&&clearInterval(this._sessionKeepAlive),await(0,f.Ys)(this,{text:this.supervisor.localize("ingress.error_creating_session"),title:s.name}),await(0,h.y)(),void history.back()}this._sessionKeepAlive&&clearInterval(this._sessionKeepAlive),this._sessionKeepAlive=window.setInterval((async()=>{try{await(async(e,t)=>{(0,v.I)(e.config.version,2021,2,4)?await e.callWS({type:"supervisor/api",endpoint:"/ingress/validate_session",method:"post",data:{session:t}}):await e.callApi("POST","hassio/ingress/validate_session",{session:t})})(this.hass,i)}catch(e){i=await _(this.hass)}}),6e4),this._addon=s}}else this._fetchDataTimeout=window.setTimeout((()=>{this._fetchData(e)}),500)}},{kind:"method",key:"_checkLoaded",value:function(e){this._addon&&"502: Bad Gateway"===e.target.contentDocument.body.textContent&&(0,f.g7)(this,{text:this.supervisor.localize("ingress.error_addon_not_ready"),title:this._addon.name,confirmText:this.supervisor.localize("ingress.retry"),dismissText:this.supervisor.localize("common.no"),confirm:async()=>{const e=this._addon;this._addon=void 0,await Promise.all([this.updateComplete,new Promise((e=>{setTimeout(e,500)}))]),this._addon=e}})}},{kind:"method",key:"_toggleMenu",value:function(){(0,d.B)(this,"hass-toggle-menu")}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`iframe{display:block;width:100%;height:100%;border:0}.header+iframe{height:calc(100% - 40px)}.header{display:flex;align-items:center;font-size:16px;height:40px;padding:0 16px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box;--mdc-icon-size:20px}.main-title{margin:0 0 0 24px;line-height:20px;flex-grow:1}ha-icon-button{pointer-events:auto}hass-subpage{--app-header-background-color:var(--sidebar-background-color);--app-header-text-color:var(--sidebar-text-color);--app-header-border-bottom:1px solid var(--divider-color)}`}}]}}),r.oi)},15493:(e,t,s)=>{s.d(t,{Q2:()=>i,io:()=>a,ou:()=>o});const i=()=>{const e={},t=new URLSearchParams(location.search);for(const[s,i]of t.entries())e[s]=i;return e},a=e=>new URLSearchParams(window.location.search).get(e),o=e=>{const t=new URLSearchParams;return Object.entries(e).forEach((([e,s])=>{t.append(e,s)})),t.toString()}}};
//# sourceMappingURL=2094-3hVeHicepR8.js.map