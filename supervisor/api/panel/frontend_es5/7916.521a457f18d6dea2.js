/*! For license information please see 7916.521a457f18d6dea2.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["7916"],{27323:function(t,i,e){e.d(i,{O:()=>u});e(71695),e(47021);var s=e(9065),o=e(1105),h=e(57243),n=e(50778),r=e(35359),l=e(20552),a=e(91928);let _,d,c=t=>t;const p={fromAttribute(t){return null!==t&&(""===t||t)},toAttribute(t){return"boolean"==typeof t?t?"":null:t}};class u extends o.P{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const t=this.charCounter&&-1!==this.maxLength,i=t&&"internal"===this.charCounter,e=t&&!i,s=!!this.helper||!!this.validationMessage||e,o={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":i};return(0,h.dy)(_||(_=c` <label class="mdc-text-field mdc-text-field--textarea ${0}"> ${0} ${0} ${0} ${0} ${0} </label> ${0} `),(0,r.$)(o),this.renderRipple(),this.outlined?this.renderOutline():this.renderLabel(),this.renderInput(),this.renderCharCounter(i),this.renderLineRipple(),this.renderHelperText(s,e))}renderInput(){const t=this.label?"label":void 0,i=-1===this.minLength?void 0:this.minLength,e=-1===this.maxLength?void 0:this.maxLength,s=this.autocapitalize?this.autocapitalize:void 0;return(0,h.dy)(d||(d=c` <textarea aria-labelledby="${0}" class="mdc-text-field__input" .value="${0}" rows="${0}" cols="${0}" ?disabled="${0}" placeholder="${0}" ?required="${0}" ?readonly="${0}" minlength="${0}" maxlength="${0}" name="${0}" inputmode="${0}" autocapitalize="${0}" @input="${0}" @blur="${0}">
      </textarea>`),(0,l.o)(t),(0,a.a)(this.value),this.rows,this.cols,this.disabled,this.placeholder,this.required,this.readOnly,(0,l.o)(i),(0,l.o)(e),(0,l.o)(""===this.name?void 0:this.name),(0,l.o)(this.inputMode),(0,l.o)(s),this.handleInputChange,this.onInputBlur)}}(0,s.__decorate)([(0,n.IO)("textarea")],u.prototype,"formElement",void 0),(0,s.__decorate)([(0,n.Cb)({type:Number})],u.prototype,"rows",void 0),(0,s.__decorate)([(0,n.Cb)({type:Number})],u.prototype,"cols",void 0),(0,s.__decorate)([(0,n.Cb)({converter:p})],u.prototype,"charCounter",void 0)},88540:function(t,i,e){e.d(i,{W:()=>o});let s;const o=(0,e(57243).iv)(s||(s=(t=>t)`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`))},30843:function(t,i,e){e.d(i,{e:()=>r});e(19423);var s=e(97284);e(52247),e(19083),e(71695),e(92745),e(47021),e(9359),e(70104),e(23669);function o(t){return"horizontal"===t?"row":"column"}class h extends s.IE{constructor(){super(...arguments),this._itemSize={},this._gaps={},this._padding={}}_getDefaultConfig(){return Object.assign({},super._getDefaultConfig(),{itemSize:{width:"300px",height:"300px"},gap:"8px",padding:"match-gap"})}get _gap(){return this._gaps.row}get _idealSize(){return this._itemSize[(0,s.qF)(this.direction)]}get _idealSize1(){return this._itemSize[(0,s.qF)(this.direction)]}get _idealSize2(){return this._itemSize[(0,s.gu)(this.direction)]}get _gap1(){return this._gaps[(t=this.direction,"horizontal"===t?"column":"row")];var t}get _gap2(){return this._gaps[o(this.direction)]}get _padding1(){const t=this._padding,[i,e]="horizontal"===this.direction?["left","right"]:["top","bottom"];return[t[i],t[e]]}get _padding2(){const t=this._padding,[i,e]="horizontal"===this.direction?["top","bottom"]:["left","right"];return[t[i],t[e]]}set itemSize(t){const i=this._itemSize;"string"==typeof t&&(t={width:t,height:t});const e=parseInt(t.width),s=parseInt(t.height);e!==i.width&&(i.width=e,this._triggerReflow()),s!==i.height&&(i.height=s,this._triggerReflow())}set gap(t){this._setGap(t)}_setGap(t){const i=t.split(" ").map((t=>function(t){return"auto"===t?1/0:parseInt(t)}(t))),e=this._gaps;i[0]!==e.row&&(e.row=i[0],this._triggerReflow()),void 0===i[1]?i[0]!==e.column&&(e.column=i[0],this._triggerReflow()):i[1]!==e.column&&(e.column=i[1],this._triggerReflow())}set padding(t){const i=this._padding,e=t.split(" ").map((t=>function(t){return"match-gap"===t?1/0:parseInt(t)}(t)));1===e.length?(i.top=i.right=i.bottom=i.left=e[0],this._triggerReflow()):2===e.length?(i.top=i.bottom=e[0],i.right=i.left=e[1],this._triggerReflow()):3===e.length?(i.top=e[0],i.right=i.left=e[1],i.bottom=e[2],this._triggerReflow()):4===e.length&&(["top","right","bottom","left"].forEach(((t,s)=>i[t]=e[s])),this._triggerReflow())}}class n extends h{constructor(){super(...arguments),this._metrics=null,this.flex=null,this.justify=null}_getDefaultConfig(){return Object.assign({},super._getDefaultConfig(),{flex:!1,justify:"start"})}set gap(t){super._setGap(t)}_updateLayout(){const t=this.justify,[i,e]=this._padding1,[h,n]=this._padding2;["_gap1","_gap2"].forEach((i=>{const e=this[i];if(e===1/0&&!["space-between","space-around","space-evenly"].includes(t))throw new Error("grid layout: gap can only be set to 'auto' when justify is set to 'space-between', 'space-around' or 'space-evenly'");if(e===1/0&&"_gap2"===i)throw new Error(`grid layout: ${o(this.direction)}-gap cannot be set to 'auto' when direction is set to ${this.direction}`)}));const r=this.flex||["start","center","end"].includes(t),l={rolumns:-1,itemSize1:-1,itemSize2:-1,gap1:this._gap1===1/0?-1:this._gap1,gap2:r?this._gap2:0,padding1:{start:i===1/0?this._gap1:i,end:e===1/0?this._gap1:e},padding2:r?{start:h===1/0?this._gap2:h,end:n===1/0?this._gap2:n}:{start:0,end:0},positions:[]},a=this._viewDim2-l.padding2.start-l.padding2.end;if(a<=0)l.rolumns=0;else{const o=r?l.gap2:0;let h,n=0,_=0;if(a>=this._idealSize2&&(n=Math.floor((a-this._idealSize2)/(this._idealSize2+o))+1,_=n*this._idealSize2+(n-1)*o),this.flex){(a-_)/(this._idealSize2+o)>=.5&&(n+=1),l.rolumns=n,l.itemSize2=Math.round((a-o*(n-1))/n);switch(!0===this.flex?"area":this.flex.preserve){case"aspect-ratio":l.itemSize1=Math.round(this._idealSize1/this._idealSize2*l.itemSize2);break;case(0,s.qF)(this.direction):l.itemSize1=Math.round(this._idealSize1);break;default:l.itemSize1=Math.round(this._idealSize1*this._idealSize2/l.itemSize2)}}else l.itemSize1=this._idealSize1,l.itemSize2=this._idealSize2,l.rolumns=n;if(r){const i=l.rolumns*l.itemSize2+(l.rolumns-1)*l.gap2;h=this.flex||"start"===t?l.padding2.start:"end"===t?this._viewDim2-l.padding2.end-i:Math.round(this._viewDim2/2-i/2)}else{const s=a-l.rolumns*l.itemSize2;"space-between"===t?(l.gap2=Math.round(s/(l.rolumns-1)),h=0):"space-around"===t?(l.gap2=Math.round(s/l.rolumns),h=Math.round(l.gap2/2)):(l.gap2=Math.round(s/(l.rolumns+1)),h=l.gap2),this._gap1===1/0&&(l.gap1=l.gap2,i===1/0&&(l.padding1.start=h),e===1/0&&(l.padding1.end=h))}for(let t=0;t<l.rolumns;t++)l.positions.push(h),h+=l.itemSize2+l.gap2}this._metrics=l}}const r=t=>Object.assign({type:l},t);class l extends n{get _delta(){return this._metrics.itemSize1+this._metrics.gap1}_getItemSize(t){return{[this._sizeDim]:this._metrics.itemSize1,[this._secondarySizeDim]:this._metrics.itemSize2}}_getActiveItems(){const t=this._metrics,{rolumns:i}=t;if(0===i)this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;else{const{padding1:e}=t,s=Math.max(0,this._scrollPosition-this._overhang),o=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang),h=Math.max(0,Math.floor((s-e.start)/this._delta)),n=Math.max(0,Math.ceil((o-e.start)/this._delta));this._first=h*i,this._last=Math.min(n*i-1,this.items.length-1),this._physicalMin=e.start+this._delta*h,this._physicalMax=e.start+this._delta*n}}_getItemPosition(t){const{rolumns:i,padding1:e,positions:o,itemSize1:h,itemSize2:n}=this._metrics;return{[this._positionDim]:e.start+Math.floor(t/i)*this._delta,[this._secondaryPositionDim]:o[t%i],[(0,s.qF)(this.direction)]:h,[(0,s.gu)(this.direction)]:n}}_updateScrollSize(){const{rolumns:t,gap1:i,padding1:e,itemSize1:s}=this._metrics;let o=1;if(t>0){const h=Math.ceil(this.items.length/t);o=e.start+h*s+(h-1)*i+e.end}this._scrollSize=o}}},97284:function(t,i,e){e.d(i,{IE:()=>h,gu:()=>o,qF:()=>s});e(71695),e(19423),e(40251),e(47021);function s(t){return"horizontal"===t?"width":"height"}function o(t){return"horizontal"===t?"height":"width"}class h{_getDefaultConfig(){return{direction:"vertical"}}constructor(t,i){this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this.totalScrollSize={width:0,height:0},this.offsetWithinScroller={left:0,top:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._pin=null,this._firstVisible=0,this._lastVisible=0,this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._items=[],this._scrollSize=1,this._overhang=1e3,this._hostSink=t,Promise.resolve().then((()=>this.config=i||this._getDefaultConfig()))}set config(t){Object.assign(this,Object.assign({},this._getDefaultConfig(),t))}get config(){return{direction:this.direction}}get items(){return this._items}set items(t){this._setItems(t)}_setItems(t){t!==this._items&&(this._items=t,this._scheduleReflow())}get direction(){return this._direction}set direction(t){(t="horizontal"===t?t:"vertical")!==this._direction&&(this._direction=t,this._sizeDim="horizontal"===t?"width":"height",this._secondarySizeDim="horizontal"===t?"height":"width",this._positionDim="horizontal"===t?"left":"top",this._secondaryPositionDim="horizontal"===t?"top":"left",this._triggerReflow())}get viewportSize(){return this._viewportSize}set viewportSize(t){const{_viewDim1:i,_viewDim2:e}=this;Object.assign(this._viewportSize,t),e!==this._viewDim2?this._scheduleLayoutUpdate():i!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(t){Object.assign(this._latestCoords,t);const i=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim];Math.abs(i-this._scrollPosition)>=1&&this._checkThresholds()}reflowIfNeeded(t=!1){(t||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}set pin(t){this._pin=t,this._triggerReflow()}get pin(){if(null!==this._pin){const{index:t,block:i}=this._pin;return{index:Math.max(0,Math.min(t,this.items.length-1)),block:i}}return null}_clampScrollPosition(t){return Math.max(-this.offsetWithinScroller[this._positionDim],Math.min(t,this.totalScrollSize[s(this.direction)]-this._viewDim1))}unpin(){null!==this._pin&&(this._sendUnpinnedMessage(),this._pin=null)}_updateLayout(){}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_triggerReflow(){this._scheduleLayoutUpdate(),Promise.resolve().then((()=>this.reflowIfNeeded()))}_reflow(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._sendStateChangedMessage()}_setPositionFromPin(){if(null!==this.pin){const t=this._scrollPosition,{index:i,block:e}=this.pin;this._scrollPosition=this._calculateScrollIntoViewPosition({index:i,block:e||"start"})-this.offsetWithinScroller[this._positionDim],this._scrollError=t-this._scrollPosition}}_calculateScrollIntoViewPosition(t){const{block:i}=t,e=Math.min(this.items.length,Math.max(0,t.index)),s=this._getItemPosition(e)[this._positionDim];let o=s;if("start"!==i){const t=this._getItemSize(e)[this._sizeDim];if("center"===i)o=s-.5*this._viewDim1+.5*t;else{const e=s-this._viewDim1+t;if("end"===i)o=e;else{const t=this._scrollPosition;o=Math.abs(t-s)<Math.abs(t-e)?s:e}}}return o+=this.offsetWithinScroller[this._positionDim],this._clampScrollPosition(o)}getScrollIntoViewCoordinates(t){return{[this._positionDim]:this._calculateScrollIntoViewPosition(t)}}_sendUnpinnedMessage(){this._hostSink({type:"unpinned"})}_sendVisibilityChangedMessage(){this._hostSink({type:"visibilityChanged",firstVisible:this._firstVisible,lastVisible:this._lastVisible})}_sendStateChangedMessage(){const t=new Map;if(-1!==this._first&&-1!==this._last)for(let e=this._first;e<=this._last;e++)t.set(e,this._getItemPosition(e));const i={type:"stateChanged",scrollSize:{[this._sizeDim]:this._scrollSize,[this._secondarySizeDim]:null},range:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible},childPositions:t};this._scrollError&&(i.scrollError={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0},this._scrollError=0),this._hostSink(i)}get _num(){return-1===this._first||-1===this._last?0:this._last-this._first+1}_checkThresholds(){if(0===this._viewDim1&&this._num>0||null!==this._pin)this._scheduleReflow();else{const t=Math.max(0,this._scrollPosition-this._overhang),i=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);this._physicalMin>t||this._physicalMax<i?this._scheduleReflow():this._updateVisibleIndices({emit:!0})}}_updateVisibleIndices(t){if(-1===this._first||-1===this._last)return;let i=this._first;for(;i<this._last&&Math.round(this._getItemPosition(i)[this._positionDim]+this._getItemSize(i)[this._sizeDim])<=Math.round(this._scrollPosition);)i++;let e=this._last;for(;e>this._first&&Math.round(this._getItemPosition(e)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)e--;i===this._firstVisible&&e===this._lastVisible||(this._firstVisible=i,this._lastVisible=e,t&&t.emit&&this._sendVisibilityChangedMessage())}}},31050:function(t,i,e){e.d(i,{C:()=>c});e(71695),e(9359),e(1331),e(40251),e(47021);var s=e(2841),o=e(53232),h=e(1714);e(63721),e(88230),e(52247);class n{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class r{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}}var l=e(45779);const a=t=>!(0,o.pt)(t)&&"function"==typeof t.then,_=1073741823;class d extends h.sR{constructor(){super(...arguments),this._$C_t=_,this._$Cwt=[],this._$Cq=new n(this),this._$CK=new r}render(...t){var i;return null!==(i=t.find((t=>!a(t))))&&void 0!==i?i:s.Jb}update(t,i){const e=this._$Cwt;let o=e.length;this._$Cwt=i;const h=this._$Cq,n=this._$CK;this.isConnected||this.disconnected();for(let s=0;s<i.length&&!(s>this._$C_t);s++){const t=i[s];if(!a(t))return this._$C_t=s,t;s<o&&t===e[s]||(this._$C_t=_,o=0,Promise.resolve(t).then((async i=>{for(;n.get();)await n.get();const e=h.deref();if(void 0!==e){const s=e._$Cwt.indexOf(t);s>-1&&s<e._$C_t&&(e._$C_t=s,e.setValue(i))}})))}return s.Jb}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const c=(0,l.XM)(d)}}]);
//# sourceMappingURL=7916.521a457f18d6dea2.js.map