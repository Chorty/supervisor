(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["3544"],{53471:function(e,t,i){"use strict";var o=i(73577),a=(i(63721),i(71695),i(61893),i(9359),i(56475),i(70104),i(47021),i(57243)),s=i(50778),r=i(27486),n=i(17803),l=i(83523),d=i(1416),c=(i(54977),i(55194),i(19134),i(47706),i(41298));var u=i(84915);let h,p,v,g,m=e=>e;(0,o.Z)([(0,s.Mo)("hassio-addon-repository")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"repo",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"addons",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"filter",value:void 0},{kind:"field",key:"_getAddons",value(){return(0,r.Z)(((e,t)=>t?function(e,t){const i={keys:["name","description","slug"],isCaseSensitive:!1,minMatchCharLength:Math.min(t.length,2),threshold:.2,ignoreDiacritics:!0};return new c.Z(e,i).search(t).map((e=>e.item))}(e,t):e.sort(((e,t)=>(0,d.fe)(e.name,t.name,this.hass.locale.language)))))}},{kind:"method",key:"render",value:function(){var e;const t=this.repo;let i=this.addons;null!==(e=this.hass.userData)&&void 0!==e&&e.showAdvanced||(i=i.filter((e=>!e.advanced&&"stable"===e.stage)));const o=this._getAddons(i,this.filter);return this.filter&&o.length<1?(0,a.dy)(h||(h=m` <div class="content"> <p class="description"> ${0} </p> </div> `),this.supervisor.localize("store.no_results_found",{repository:t.name})):(0,a.dy)(p||(p=m` <div class="content"> <h1>${0}</h1> <div class="card-group"> ${0} </div> </div> `),t.name,o.map((e=>(0,a.dy)(v||(v=m` <ha-card outlined .addon="${0}" class="${0}" @click="${0}"> <div class="card-content"> <hassio-card-content .hass="${0}" .title="${0}" .description="${0}" .available="${0}" .icon="${0}" .iconTitle="${0}" .iconClass="${0}" .iconImage="${0}" .showTopbar="${0}" .topbarClass="${0}"></hassio-card-content> </div> </ha-card> `),e,e.available?"":"not_available",this._addonTapped,this.hass,e.name,e.description,e.available,e.installed&&e.update_available?"M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,7L7,12H10V16H14V12H17L12,7Z":"M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z",e.installed?e.update_available?this.supervisor.localize("common.new_version_available"):this.supervisor.localize("addon.state.installed"):e.available?this.supervisor.localize("addon.state.not_installed"):this.supervisor.localize("addon.state.not_available"),e.installed?e.update_available?"update":"installed":e.available?"":"not_available",(0,n.I)(this.hass.config.version,0,105)&&e.icon?`/api/hassio/addons/${e.slug}/icon`:void 0,e.installed||!e.available,e.installed?e.update_available?"update":"installed":e.available?"":"unavailable"))))}},{kind:"method",key:"_addonTapped",value:function(e){(0,l.c)(`/hassio/addon/${e.currentTarget.addon.slug}?store=true`)}},{kind:"get",static:!0,key:"styles",value:function(){return[u.l,(0,a.iv)(g||(g=m`ha-card{cursor:pointer;overflow:hidden}.not_available{opacity:.6}a.repo{color:var(--primary-text-color)}`))]}}]}}),a.oi)},30099:function(e,t,i){"use strict";i.a(e,(async function(e,o){try{i.r(t),i.d(t,{HassioAddonStore:()=>H});var a=i(73577),s=i(72621),r=(i(71695),i(61893),i(9359),i(56475),i(70104),i(40251),i(47021),i(87319),i(57243)),n=i(50778),l=i(27486),d=i(17803),c=i(36522),u=i(83523),h=i(58776),p=(i(34273),i(23043),i(71489),i(66899)),v=i(56785),g=i(76131),m=i(75375),f=(i(87979),i(7290)),y=i(80469),k=(i(53471),e([m,y]));[m,y]=k.then?(await k)():k;let _,b,x,w,$,A,C,L=e=>e;const R="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",z=(e,t)=>"local"===e.slug?-1:"local"===t.slug?1:"core"===e.slug?-1:"core"===t.slug?1:e.name.toUpperCase()<t.name.toUpperCase()?-1:1;let H=(0,a.Z)([(0,n.Mo)("hassio-addon-store")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_filter",value:void 0},{kind:"method",key:"refreshData",value:async function(){try{await(0,p.a_)(this.hass)}catch(e){(0,g.Ys)(this,{text:(0,v.js)(e)})}finally{this._loadData()}}},{kind:"method",key:"render",value:function(){var e,t;let i=[];return this.supervisor.store.repositories&&(i=this.addonRepositories(this.supervisor.store.repositories,this.supervisor.store.addons,this._filter)),(0,r.dy)(_||(_=L` <hass-subpage .hass="${0}" .narrow="${0}" .route="${0}" .header="${0}"> <ha-button-menu slot="toolbar-icon" @action="${0}"> <ha-icon-button .label="${0}" .path="${0}" slot="trigger"></ha-icon-button> <mwc-list-item> ${0} </mwc-list-item> <mwc-list-item> ${0} </mwc-list-item> ${0} </ha-button-menu> ${0} ${0} </hass-subpage> `),this.hass,this.narrow,this.route,this.supervisor.localize("panel.store"),this._handleAction,this.supervisor.localize("common.menu"),R,this.supervisor.localize("store.check_updates"),this.supervisor.localize("store.repositories"),null!==(e=this.hass.userData)&&void 0!==e&&e.showAdvanced&&(0,d.I)(this.hass.config.version,0,117)?(0,r.dy)(b||(b=L`<mwc-list-item> ${0} </mwc-list-item>`),this.supervisor.localize("store.registries")):"",0===i.length?(0,r.dy)(x||(x=L`<hass-loading-screen no-toolbar></hass-loading-screen>`)):(0,r.dy)(w||(w=L` <div class="search"> <search-input .hass="${0}" .filter="${0}" @value-changed="${0}"></search-input> </div> ${0} `),this.hass,this._filter,this._filterChanged,i),null!==(t=this.hass.userData)&&void 0!==t&&t.showAdvanced?"":(0,r.dy)($||($=L` <div class="advanced"> <a href="/profile" target="_top"> ${0} </a> </div> `),this.supervisor.localize("store.missing_addons")))}},{kind:"method",key:"firstUpdated",value:function(e){(0,s.Z)(i,"firstUpdated",this,3)([e]);const t=(0,h.io)("repository_url");(0,u.c)("/hassio/store",{replace:!0}),t&&this._manageRepositories(t),this.addEventListener("hass-api-called",(e=>this._apiCalled(e))),this._loadData()}},{kind:"field",key:"addonRepositories",value(){return(0,l.Z)(((e,t,i)=>e.sort(z).map((e=>{const o=t.filter((t=>t.repository===e.slug));return 0!==o.length?(0,r.dy)(A||(A=L` <hassio-addon-repository .hass="${0}" .repo="${0}" .addons="${0}" .filter="${0}" .supervisor="${0}"></hassio-addon-repository> `),this.hass,e,o,i,this.supervisor):r.Ld}))))}},{kind:"method",key:"_handleAction",value:function(e){switch(e.detail.index){case 0:this.refreshData();break;case 1:this._manageRepositoriesClicked();break;case 2:this._manageRegistries()}}},{kind:"method",key:"_apiCalled",value:function(e){e.detail.success&&this._loadData()}},{kind:"method",key:"_manageRepositoriesClicked",value:function(){this._manageRepositories()}},{kind:"method",key:"_manageRepositories",value:function(e){(0,y.n)(this,{supervisor:this.supervisor,url:e})}},{kind:"method",key:"_manageRegistries",value:function(){(0,f.W)(this,{supervisor:this.supervisor})}},{kind:"method",key:"_loadData",value:function(){(0,c.B)(this,"supervisor-collection-refresh",{collection:"addon"}),(0,c.B)(this,"supervisor-collection-refresh",{collection:"supervisor"})}},{kind:"method",key:"_filterChanged",value:function(e){this._filter=e.detail.value}},{kind:"field",static:!0,key:"styles",value(){return(0,r.iv)(C||(C=L`hassio-addon-repository{margin-top:24px}.search{position:sticky;top:0;z-index:2}search-input{display:block;--mdc-text-field-fill-color:var(--sidebar-background-color);--mdc-text-field-idle-line-color:var(--divider-color)}.advanced{padding:12px;display:flex;flex-wrap:wrap;color:var(--primary-text-color)}.advanced a{margin-left:.5em;margin-inline-start:.5em;margin-inline-end:initial;color:var(--primary-color)}`))}}]}}),r.oi);o()}catch(_){o(_)}}))},76286:function(e,t,i){"use strict";var o=i(73577),a=(i(71695),i(9359),i(70104),i(40251),i(47021),i(31622),i(57243)),s=i(50778),r=i(73729),n=(i(29073),i(23043),i(30509),i(56785)),l=i(17803);var d=i(76131),c=i(28008);let u,h,p,v,g,m,f=e=>e;const y=[{name:"registry",required:!0,selector:{text:{}}},{name:"username",required:!0,selector:{text:{}}},{name:"password",required:!0,selector:{text:{type:"password"}}}];(0,o.Z)([(0,s.Mo)("dialog-hassio-registries")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_registries",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_input",value(){return{}}},{kind:"field",decorators:[(0,s.SB)()],key:"_opened",value(){return!1}},{kind:"field",decorators:[(0,s.SB)()],key:"_addingRegistry",value(){return!1}},{kind:"method",key:"render",value:function(){var e;return(0,a.dy)(u||(u=f` <ha-dialog .open="${0}" @closed="${0}" scrimClickAction escapeKeyAction hideActions .heading="${0}"> ${0} </ha-dialog> `),this._opened,this.closeDialog,(0,r.i)(this.hass,this._addingRegistry?this.supervisor.localize("dialog.registries.title_add"):this.supervisor.localize("dialog.registries.title_manage")),this._addingRegistry?(0,a.dy)(h||(h=f` <ha-form .data="${0}" .schema="${0}" @value-changed="${0}" .computeLabel="${0}" dialogInitialFocus></ha-form> <div class="action"> <mwc-button ?disabled="${0}" @click="${0}"> ${0} </mwc-button> </div> `),this._input,y,this._valueChanged,this._computeLabel,Boolean(!this._input.registry||!this._input.username||!this._input.password),this._addNewRegistry,this.supervisor.localize("dialog.registries.add_registry")):(0,a.dy)(p||(p=f`${0} <div class="action"> <mwc-button @click="${0}" dialogInitialFocus> ${0} </mwc-button> </div> `),null!==(e=this._registries)&&void 0!==e&&e.length?this._registries.map((e=>(0,a.dy)(v||(v=f` <ha-settings-row class="registry"> <span slot="heading"> ${0} </span> <span slot="description"> ${0}: ${0} </span> <ha-icon-button .entry="${0}" .label="${0}" .path="${0}" @click="${0}"></ha-icon-button> </ha-settings-row> `),e.registry,this.supervisor.localize("dialog.registries.username"),e.username,e,this.supervisor.localize("dialog.registries.remove"),"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",this._removeRegistry))):(0,a.dy)(g||(g=f` <ha-alert> ${0} </ha-alert> `),this.supervisor.localize("dialog.registries.no_registries")),this._addRegistry,this.supervisor.localize("dialog.registries.add_new_registry")))}},{kind:"field",key:"_computeLabel",value(){return e=>this.supervisor.localize(`dialog.registries.${e.name}`)}},{kind:"method",key:"_valueChanged",value:function(e){this._input=e.detail.value}},{kind:"method",key:"showDialog",value:async function(e){this._opened=!0,this._input={},this.supervisor=e.supervisor,await this._loadRegistries(),await this.updateComplete}},{kind:"method",key:"closeDialog",value:function(){this._addingRegistry=!1,this._opened=!1,this._input={}}},{kind:"method",key:"focus",value:function(){this.updateComplete.then((()=>{var e;return null===(e=this.shadowRoot)||void 0===e||null===(e=e.querySelector("[dialogInitialFocus]"))||void 0===e?void 0:e.focus()}))}},{kind:"method",key:"_loadRegistries",value:async function(){const e=await(async e=>(0,l.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:"/docker/registries",method:"get"}):(0,n.rY)(await e.callApi("GET","hassio/docker/registries")))(this.hass);this._registries=Object.keys(e.registries).map((t=>({registry:t,username:e.registries[t].username})))}},{kind:"method",key:"_addRegistry",value:function(){this._addingRegistry=!0}},{kind:"method",key:"_addNewRegistry",value:async function(){const e={};e[this._input.registry]={username:this._input.username,password:this._input.password};try{await(async(e,t)=>{(0,l.I)(e.config.version,2021,2,4)?await e.callWS({type:"supervisor/api",endpoint:"/docker/registries",method:"post",data:t}):await e.callApi("POST","hassio/docker/registries",t)})(this.hass,e),await this._loadRegistries(),this._addingRegistry=!1,this._input={}}catch(t){(0,d.Ys)(this,{title:this.supervisor.localize("dialog.registries.failed_to_add"),text:(0,n.js)(t)})}}},{kind:"method",key:"_removeRegistry",value:async function(e){const t=e.currentTarget.entry;try{await(async(e,t)=>{(0,l.I)(e.config.version,2021,2,4)?await e.callWS({type:"supervisor/api",endpoint:`/docker/registries/${t}`,method:"delete"}):await e.callApi("DELETE",`hassio/docker/registries/${t}`)})(this.hass,t.registry),await this._loadRegistries()}catch(i){(0,d.Ys)(this,{title:this.supervisor.localize("dialog.registries.failed_to_remove"),text:(0,n.js)(i)})}}},{kind:"get",static:!0,key:"styles",value:function(){return[c.Qx,c.yu,(0,a.iv)(m||(m=f`.registry{border:1px solid var(--divider-color);border-radius:4px;margin-top:4px}.action{margin-top:24px;width:100%;display:flex;justify-content:flex-end}ha-icon-button{color:var(--error-color);margin-right:-10px;margin-inline-end:-10px;margin-inline-start:initial}`))]}}]}}),a.oi)},7290:function(e,t,i){"use strict";i.d(t,{W:()=>a});i(71695),i(40251),i(47021);var o=i(36522);i(76286);const a=(e,t)=>{(0,o.B)(e,"show-dialog",{dialogTag:"dialog-hassio-registries",dialogImport:()=>Promise.resolve().then(i.bind(i,76286)),dialogParams:t})}},54466:function(e,t,i){"use strict";i.a(e,(async function(e,o){try{i.r(t);var a=i(73577),s=(i(19083),i(71695),i(61893),i(9359),i(56475),i(70104),i(52924),i(40251),i(61006),i(47021),i(31622),i(57243)),r=i(50778),n=i(27486),l=i(36522),d=i(1416),c=(i(99426),i(56032)),u=i(17170),h=i(73729),p=(i(23043),i(56785)),v=i(69888),g=i(28008),m=(i(83166),i(19993),i(74633),e([c,u]));[c,u]=m.then?(await m)():m;let f,y,k,_,b,x,w=e=>e;const $="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",A="M2 5.27L3.28 4L5 5.72L5.28 6L6.28 7L18 18.72L20 20.72L18.73 22L17.27 20.54C16.93 20.83 16.5 21 16 21H8C6.9 21 6 20.1 6 19V9.27L2 5.27M19 4V6H7.82L5.82 4H8.5L9.5 3H14.5L15.5 4H19M18 7V16.18L8.82 7H18Z";(0,a.Z)([(0,r.Mo)("dialog-hassio-repositories")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.IO)("#repository_input",!0)],key:"_optionInput",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_repositories",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_opened",value(){return!1}},{kind:"field",decorators:[(0,r.SB)()],key:"_processing",value(){return!1}},{kind:"field",decorators:[(0,r.SB)()],key:"_error",value:void 0},{kind:"method",key:"showDialog",value:async function(e){this._dialogParams=e,this._opened=!0,await this._loadData(),await this.updateComplete}},{kind:"method",key:"closeDialog",value:function(){this._dialogParams=void 0,this._opened=!1,this._error=""}},{kind:"field",key:"_filteredRepositories",value(){return(0,n.Z)((e=>e.filter((e=>"core"!==e.slug&&"local"!==e.slug&&"a0d7b954"!==e.slug&&"5c53de3b"!==e.slug&&"d5369777"!==e.slug)).sort(((e,t)=>(0,d.fe)(e.name,t.name,this.hass.locale.language)))))}},{kind:"field",key:"_filteredUsedRepositories",value(){return(0,n.Z)(((e,t)=>e.filter((e=>t.some((t=>t.repository===e.slug)))).map((e=>e.slug))))}},{kind:"method",key:"render",value:function(){var e,t;if(null===(e=this._dialogParams)||void 0===e||!e.supervisor||void 0===this._repositories)return s.Ld;const i=this._filteredRepositories(this._repositories),o=this._filteredUsedRepositories(i,this._dialogParams.supervisor.addon.addons);return(0,s.dy)(f||(f=w` <ha-dialog .open="${0}" @closed="${0}" scrimClickAction escapeKeyAction .heading="${0}"> ${0} <div class="form"> <ha-md-list> ${0} </ha-md-list> <div class="layout horizontal bottom"> <ha-textfield class="flex-auto" id="repository_input" .value="${0}" .label="${0}" @keydown="${0}" dialogInitialFocus></ha-textfield> <mwc-button @click="${0}"> ${0} </mwc-button> </div> </div> <mwc-button slot="primaryAction" @click="${0}"> ${0} </mwc-button> </ha-dialog> `),this._opened,this.closeDialog,(0,h.i)(this.hass,this._dialogParams.supervisor.localize("dialog.repositories.title")),this._error?(0,s.dy)(y||(y=w`<ha-alert alert-type="error">${0}</ha-alert>`),this._error):"",i.length?i.map((e=>(0,s.dy)(k||(k=w` <ha-md-list-item class="option"> ${0} <div slot="supporting-text"> <div>${0}</div> <div>${0}</div> </div> <ha-tooltip class="delete" slot="end" .content="${0}"> <div> <ha-icon-button .disabled="${0}" .slug="${0}" .path="${0}" @click="${0}"> </ha-icon-button> </div> </ha-tooltip> </ha-md-list-item> `),e.name,e.maintainer,e.url,this._dialogParams.supervisor.localize(o.includes(e.slug)?"dialog.repositories.used":"dialog.repositories.remove"),o.includes(e.slug),e.slug,o.includes(e.slug)?A:$,this._removeRepository))):(0,s.dy)(_||(_=w`<ha-md-list-item>${0}</ha-md-list-item>`),this._dialogParams.supervisor.localize("dialog.repositories.no_repositories")),this._dialogParams.url||"",this._dialogParams.supervisor.localize("dialog.repositories.add"),this._handleKeyAdd,this._addRepository,this._processing?(0,s.dy)(b||(b=w`<ha-spinner size="small"></ha-spinner>`)):this._dialogParams.supervisor.localize("dialog.repositories.add"),this.closeDialog,null===(t=this._dialogParams)||void 0===t?void 0:t.supervisor.localize("common.close"))}},{kind:"get",static:!0,key:"styles",value:function(){return[g.Qx,g.yu,(0,s.iv)(x||(x=w`ha-dialog.button-left{--justify-action-buttons:flex-start}paper-icon-item{cursor:pointer}.form{color:var(--primary-text-color)}.option{border:1px solid var(--divider-color);border-radius:4px;margin-top:4px}mwc-button{margin-left:8px;margin-inline-start:8px;margin-inline-end:initial}ha-spinner{display:block;margin:32px;text-align:center}div.delete ha-icon-button{color:var(--error-color)}ha-md-list-item{position:relative;--md-item-overflow:visible}`))]}},{kind:"method",key:"focus",value:function(){this.updateComplete.then((()=>{var e;return null===(e=this.shadowRoot)||void 0===e||null===(e=e.querySelector("[dialogInitialFocus]"))||void 0===e?void 0:e.focus()}))}},{kind:"method",key:"_handleKeyAdd",value:function(e){e.stopPropagation(),"Enter"===e.key&&this._addRepository()}},{kind:"method",key:"_loadData",value:async function(){try{this._repositories=await(0,v.iV)(this.hass),(0,l.B)(this,"supervisor-collection-refresh",{collection:"addon"})}catch(e){this._error=(0,p.js)(e)}}},{kind:"method",key:"_addRepository",value:async function(){const e=this._optionInput;if(e&&e.value){this._processing=!0;try{await(0,v.FV)(this.hass,e.value),await this._loadData(),e.value=""}catch(t){this._error=(0,p.js)(t)}this._processing=!1}}},{kind:"method",key:"_removeRepository",value:async function(e){const t=e.currentTarget.slug;try{await(0,v.Cw)(this.hass,t),await this._loadData()}catch(i){this._error=(0,p.js)(i)}}}]}}),s.oi);o()}catch(f){o(f)}}))},80469:function(e,t,i){"use strict";i.a(e,(async function(e,o){try{i.d(t,{n:()=>n});i(71695),i(40251),i(47021);var a=i(36522),s=i(54466),r=e([s]);s=(r.then?(await r)():r)[0];const n=(e,t)=>{(0,a.B)(e,"show-dialog",{dialogTag:"dialog-hassio-repositories",dialogImport:()=>Promise.resolve().then(i.bind(i,54466)),dialogParams:t})};o()}catch(n){o(n)}}))},58776:function(e,t,i){"use strict";i.d(t,{Q2:()=>a,io:()=>s,ou:()=>r});i(71695),i(9359),i(31526),i(19134),i(11740),i(47706),i(47021),i(71513),i(75656),i(50100),i(18084);var o=i(14463);const a=()=>{const e={},t=new URLSearchParams(o.E.location.search);for(const[i,o]of t.entries())e[i]=o;return e},s=e=>new URLSearchParams(o.E.location.search).get(e),r=e=>{const t=new URLSearchParams;return Object.entries(e).forEach((([e,i])=>{t.append(e,i)})),t.toString()}},22381:function(e,t,i){"use strict";i.d(t,{D:()=>o});i(71695),i(47021);const o=(e,t,i=!1)=>{let o;const a=(...a)=>{const s=i&&!o;clearTimeout(o),o=window.setTimeout((()=>{o=void 0,e(...a)}),t),s&&e(...a)};return a.cancel=()=>{clearTimeout(o)},a}},34273:function(e,t,i){"use strict";var o=i(73577),a=i(72621),s=(i(71695),i(9359),i(31526),i(47021),i(22997),i(57243)),r=i(50778),n=i(14463),l=i(8338);let d,c,u=e=>e;(0,o.Z)([(0,r.Mo)("ha-button-menu")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:l.gA,value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"corner",value(){return"BOTTOM_START"}},{kind:"field",decorators:[(0,r.Cb)({attribute:"menu-corner"})],key:"menuCorner",value(){return"START"}},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"x",value(){return null}},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"y",value(){return null}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"multi",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"activatable",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"fixed",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"no-anchor"})],key:"noAnchor",value(){return!1}},{kind:"field",decorators:[(0,r.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.items}},{kind:"get",key:"selected",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.selected}},{kind:"method",key:"focus",value:function(){var e,t;null!==(e=this._menu)&&void 0!==e&&e.open?this._menu.focusItemAtIndex(0):null===(t=this._triggerButton)||void 0===t||t.focus()}},{kind:"method",key:"render",value:function(){return(0,s.dy)(d||(d=u` <div @click="${0}"> <slot name="trigger" @slotchange="${0}"></slot> </div> <mwc-menu .corner="${0}" .menuCorner="${0}" .fixed="${0}" .multi="${0}" .activatable="${0}" .y="${0}" .x="${0}"> <slot></slot> </mwc-menu> `),this._handleClick,this._setTriggerAria,this.corner,this.menuCorner,this.fixed,this.multi,this.activatable,this.y,this.x)}},{kind:"method",key:"firstUpdated",value:function(e){(0,a.Z)(i,"firstUpdated",this,3)([e]),"rtl"===n.E.document.dir&&this.updateComplete.then((()=>{this.querySelectorAll("mwc-list-item").forEach((e=>{const t=document.createElement("style");t.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",e.shadowRoot.appendChild(t)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this.noAnchor?null:this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"field",static:!0,key:"styles",value(){return(0,s.iv)(c||(c=u`:host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}`))}}]}}),s.oi)},73729:function(e,t,i){"use strict";i.d(t,{i:()=>g});var o=i(73577),a=i(72621),s=(i(22152),i(71695),i(47021),i(74966)),r=i(51408),n=i(57243),l=i(50778),d=i(8338);i(23043);let c,u,h,p=e=>e;const v=["button","ha-list-item"],g=(e,t)=>{var i;return(0,n.dy)(c||(c=p` <div class="header_title"> <ha-icon-button .label="${0}" .path="${0}" dialogAction="close" class="header_button"></ha-icon-button> <span>${0}</span> </div> `),null!==(i=null==e?void 0:e.localize("ui.common.close"))&&void 0!==i?i:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",t)};(0,o.Z)([(0,l.Mo)("ha-dialog")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:d.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return(0,n.dy)(u||(u=p`<slot name="heading"> ${0} </slot>`),(0,a.Z)(i,"renderHeading",this,3)([]))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,a.Z)(i,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,v].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(i,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value(){return[r.W,(0,n.iv)(h||(h=p`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`))]}}]}}),s.M)},74633:function(e,t,i){"use strict";var o=i(73577),a=i(72621),s=(i(71695),i(47021),i(78755)),r=i(57243),n=i(50778);let l,d=e=>e;(0,o.Z)([(0,n.Mo)("ha-md-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",static:!0,key:"styles",value(){return[...(0,a.Z)(i,"styles",this),(0,r.iv)(l||(l=d`:host{--ha-icon-display:block;--md-sys-color-primary:var(--primary-text-color);--md-sys-color-secondary:var(--secondary-text-color);--md-sys-color-surface:var(--card-background-color);--md-sys-color-on-surface:var(--primary-text-color);--md-sys-color-on-surface-variant:var(--secondary-text-color)}md-item{overflow:var(--md-item-overflow,hidden);align-items:var(--md-item-align-items,center)}`))]}}]}}),s.g)},19993:function(e,t,i){"use strict";var o=i(73577),a=i(72621),s=(i(71695),i(47021),i(623)),r=i(57243),n=i(50778);let l,d=e=>e;(0,o.Z)([(0,n.Mo)("ha-md-list")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",static:!0,key:"styles",value(){return[...(0,a.Z)(i,"styles",this),(0,r.iv)(l||(l=d`:host{--md-sys-color-surface:var(--card-background-color)}`))]}}]}}),s.j)},30509:function(e,t,i){"use strict";var o=i(73577),a=(i(71695),i(47021),i(57243)),s=i(50778);let r,n,l=e=>e;(0,o.Z)([(0,s.Mo)("ha-settings-row")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"slim",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"three-line"})],key:"threeLine",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"wrap-heading",reflect:!0})],key:"wrapHeading",value(){return!1}},{kind:"method",key:"render",value:function(){return(0,a.dy)(r||(r=l` <div class="prefix-wrap"> <slot name="prefix"></slot> <div class="body" ?two-line="${0}" ?three-line="${0}"> <slot name="heading"></slot> <div class="secondary"><slot name="description"></slot></div> </div> </div> <div class="content"><slot></slot></div> `),!this.threeLine,this.threeLine)}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(n||(n=l`:host{display:flex;padding:0 16px;align-content:normal;align-self:auto;align-items:center}.body{padding-top:8px;padding-bottom:8px;padding-left:0;padding-inline-start:0;padding-right:16px;padding-inline-end:16px;overflow:hidden;display:var(--layout-vertical_-_display,flex);flex-direction:var(--layout-vertical_-_flex-direction,column);justify-content:var(--layout-center-justified_-_justify-content,center);flex:var(--layout-flex_-_flex,1);flex-basis:var(--layout-flex_-_flex-basis,0.000000001px)}.body[three-line]{min-height:var(--paper-item-body-three-line-min-height,88px)}:host(:not([wrap-heading])) body>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body>.secondary{display:block;padding-top:4px;font-family:var(
        --mdc-typography-body2-font-family,
        var(--mdc-typography-font-family, Roboto, sans-serif)
      );-webkit-font-smoothing:antialiased;font-size:var(--mdc-typography-body2-font-size, .875rem);font-weight:var(--mdc-typography-body2-font-weight,400);line-height:normal;color:var(--secondary-text-color)}.body[two-line]{min-height:calc(var(--paper-item-body-two-line-min-height,72px) - 16px);flex:1}.content{display:contents}:host(:not([narrow])) .content{display:var(--settings-row-content-display,flex);justify-content:flex-end;flex:1;padding:16px 0}.content ::slotted(*){width:var(--settings-row-content-width)}:host([narrow]){align-items:normal;flex-direction:column;border-top:1px solid var(--divider-color);padding-bottom:8px}::slotted(ha-switch){padding:16px 0}.secondary{white-space:normal}.prefix-wrap{display:var(--settings-row-prefix-display)}:host([narrow]) .prefix-wrap{display:flex;align-items:center}:host([slim]),:host([slim]) .content,:host([slim]) ::slotted(ha-switch){padding:0}:host([slim]) .body{min-height:0}`))}}]}}),a.oi)},56032:function(e,t,i){"use strict";i.a(e,(async function(e,t){try{var o=i(73577),a=(i(71695),i(47021),i(80519)),s=i(1261),r=i(57243),n=i(50778),l=i(85605),d=e([a]);a=(d.then?(await d)():d)[0];let c,u=e=>e;(0,l.jx)("tooltip.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:150,easing:"ease"}}),(0,l.jx)("tooltip.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:400,easing:"ease"}});(0,o.Z)([(0,n.Mo)("ha-tooltip")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value(){return[s.Z,(0,r.iv)(c||(c=u`:host{--sl-tooltip-background-color:var(--secondary-background-color);--sl-tooltip-color:var(--primary-text-color);--sl-tooltip-font-family:Roboto,sans-serif;--sl-tooltip-font-size:12px;--sl-tooltip-font-weight:normal;--sl-tooltip-line-height:1;--sl-tooltip-padding:8px;--sl-tooltip-border-radius:var(--ha-tooltip-border-radius, 4px);--sl-tooltip-arrow-size:var(--ha-tooltip-arrow-size, 8px);--sl-z-index-tooltip:var(--ha-tooltip-z-index, 1000)}`))]}}]}}),a.Z);t()}catch(c){t(c)}}))},22152:function(){Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(e,t){return void 0!==t&&(t=!!t),this.hasAttribute(e)?!!t||(this.removeAttribute(e),!1):!1!==t&&(this.setAttribute(e,""),!0)})},31948:function(e,t,i){"use strict";i.a(e,(async function(e,t){try{i(71695),i(40251),i(47021);"function"!=typeof window.ResizeObserver&&(window.ResizeObserver=(await i.e("3378").then(i.bind(i,88198))).default),t()}catch(o){t(o)}}),1)},30338:function(e,t,i){"use strict";var o=i(97934),a=i(71998),s=i(4576),r=i(36760);e.exports=function(e,t){t&&"string"==typeof e||a(e);var i=r(e);return s(a(void 0!==i?o(i,e):e))}},96526:function(e,t,i){"use strict";var o=i(1569),a=i(29660),s=i(72878),r=i(72616),n=i(36888).trim,l=i(91430),d=s("".charAt),c=o.parseFloat,u=o.Symbol,h=u&&u.iterator,p=1/c(l+"-0")!=-1/0||h&&!a((function(){c(Object(h))}));e.exports=p?function(e){var t=n(r(e)),i=c(t);return 0===i&&"-"===d(t,0)?-0:i}:c},21414:function(e,t,i){"use strict";var o=i(40810),a=i(57877),s=i(63983),r=i(12360),n=i(13053),l=i(47645);o({target:"Array",proto:!0},{flatMap:function(e){var t,i=r(this),o=n(i);return s(e),(t=l(i,0)).length=a(t,i,i,o,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},32126:function(e,t,i){"use strict";i(35709)("flatMap")},25677:function(e,t,i){"use strict";var o=i(40810),a=i(97934),s=i(63983),r=i(71998),n=i(4576),l=i(30338),d=i(79995),c=i(14181),u=i(92288),h=d((function(){for(var e,t,i=this.iterator,o=this.mapper;;){if(t=this.inner)try{if(!(e=r(a(t.next,t.iterator))).done)return e.value;this.inner=null}catch(s){c(i,"throw",s)}if(e=r(a(this.next,i)),this.done=!!e.done)return;try{this.inner=l(o(e.value,this.counter++),!1)}catch(s){c(i,"throw",s)}}}));o({target:"Iterator",proto:!0,real:!0,forced:u},{flatMap:function(e){return r(this),s(e),new h(n(this),{mapper:e,inner:null})}})},95078:function(e,t,i){"use strict";var o=i(40810),a=i(96526);o({global:!0,forced:parseFloat!==a},{parseFloat:a})}}]);
//# sourceMappingURL=3544.e4614d8b8131018e.js.map