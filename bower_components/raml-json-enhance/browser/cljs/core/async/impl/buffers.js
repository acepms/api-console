goog.provide("cljs.core.async.impl.buffers"),goog.require("cljs.core"),goog.require("cljs.core.async.impl.protocols"),cljs.core.async.impl.buffers.acopy=function(r,e,c,s,l){for(var f=0;;){if(!(f<l))return null;c[s+f]=r[e+f];f=f+1}},cljs.core.async.impl.buffers.RingBuffer=function(r,e,c,s){this.head=r,this.tail=e,this.length=c,this.arr=s},cljs.core.async.impl.buffers.RingBuffer.prototype.pop=function(){var r=this;if(0===r.length)return null;var e=r.arr[r.tail];return r.arr[r.tail]=null,r.tail=(r.tail+1)%r.arr.length,r.length=r.length-1,e},cljs.core.async.impl.buffers.RingBuffer.prototype.unshift=function(r){var e=this;return e.arr[e.head]=r,e.head=(e.head+1)%e.arr.length,e.length=e.length+1,null},cljs.core.async.impl.buffers.RingBuffer.prototype.unbounded_unshift=function(r){var e=this,c=this;return e.length+1===e.arr.length&&c.resize(),c.unshift(r)},cljs.core.async.impl.buffers.RingBuffer.prototype.resize=function(){var r=this,e=2*r.arr.length,c=new Array(e);return r.tail<r.head?(cljs.core.async.impl.buffers.acopy(r.arr,r.tail,c,0,r.length),r.tail=0,r.head=r.length,r.arr=c):r.tail>r.head?(cljs.core.async.impl.buffers.acopy(r.arr,r.tail,c,0,r.arr.length-r.tail),cljs.core.async.impl.buffers.acopy(r.arr,0,c,r.arr.length-r.tail,r.head),r.tail=0,r.head=r.length,r.arr=c):r.tail===r.head?(r.tail=0,r.head=0,r.arr=c):null},cljs.core.async.impl.buffers.RingBuffer.prototype.cleanup=function(r){for(var e=this,c=this,s=e.length,l=0;;){if(!(l<s))return null;var f=c.pop();(r.cljs$core$IFn$_invoke$arity$1?r.cljs$core$IFn$_invoke$arity$1(f):r.call(null,f))&&c.unshift(f);l=l+1}},cljs.core.async.impl.buffers.RingBuffer.getBasis=function(){return new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.with_meta(cljs.core.cst$sym$head,new cljs.core.PersistentArrayMap(null,1,[cljs.core.cst$kw$mutable,!0],null)),cljs.core.with_meta(cljs.core.cst$sym$tail,new cljs.core.PersistentArrayMap(null,1,[cljs.core.cst$kw$mutable,!0],null)),cljs.core.with_meta(cljs.core.cst$sym$length,new cljs.core.PersistentArrayMap(null,1,[cljs.core.cst$kw$mutable,!0],null)),cljs.core.with_meta(cljs.core.cst$sym$arr,new cljs.core.PersistentArrayMap(null,1,[cljs.core.cst$kw$mutable,!0],null))],null)},cljs.core.async.impl.buffers.RingBuffer.cljs$lang$type=!0,cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorStr="cljs.core.async.impl.buffers/RingBuffer",cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter=function(r,e,c){return cljs.core._write(e,"cljs.core.async.impl.buffers/RingBuffer")},cljs.core.async.impl.buffers.__GT_RingBuffer=function(r,e,c,s){return new cljs.core.async.impl.buffers.RingBuffer(r,e,c,s)},cljs.core.async.impl.buffers.ring_buffer=function(r){if(!(r>0))throw new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't create a ring buffer of size 0"),cljs.core.str("\n"),cljs.core.str("(> n 0)")].join(""));return new cljs.core.async.impl.buffers.RingBuffer(0,0,0,new Array(r))},cljs.core.async.impl.buffers.FixedBuffer=function(r,e){this.buf=r,this.n=e,this.cljs$lang$protocol_mask$partition0$=2,this.cljs$lang$protocol_mask$partition1$=0},cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$=!0,cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1=function(r){var e=this;return e.buf.length===e.n},cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1=function(r){var e=this;return e.buf.pop()},cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2=function(r,e){var c=this,s=this;return c.buf.unbounded_unshift(e),s},cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1=function(r){return null},cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1=function(r){var e=this;return e.buf.length},cljs.core.async.impl.buffers.FixedBuffer.getBasis=function(){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$sym$buf,cljs.core.cst$sym$n],null)},cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type=!0,cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr="cljs.core.async.impl.buffers/FixedBuffer",cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter=function(r,e,c){return cljs.core._write(e,"cljs.core.async.impl.buffers/FixedBuffer")},cljs.core.async.impl.buffers.__GT_FixedBuffer=function(r,e){return new cljs.core.async.impl.buffers.FixedBuffer(r,e)},cljs.core.async.impl.buffers.fixed_buffer=function(r){return new cljs.core.async.impl.buffers.FixedBuffer(cljs.core.async.impl.buffers.ring_buffer(r),r)},cljs.core.async.impl.buffers.DroppingBuffer=function(r,e){this.buf=r,this.n=e,this.cljs$lang$protocol_mask$partition0$=2,this.cljs$lang$protocol_mask$partition1$=0},cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$=!0,cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$=!0,cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1=function(r){return!1},cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1=function(r){var e=this;return e.buf.pop()},cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2=function(r,e){var c=this,s=this;return c.buf.length===c.n||c.buf.unshift(e),s},cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1=function(r){return null},cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1=function(r){var e=this;return e.buf.length},cljs.core.async.impl.buffers.DroppingBuffer.getBasis=function(){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$sym$buf,cljs.core.cst$sym$n],null)},cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type=!0,cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr="cljs.core.async.impl.buffers/DroppingBuffer",cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter=function(r,e,c){return cljs.core._write(e,"cljs.core.async.impl.buffers/DroppingBuffer")},cljs.core.async.impl.buffers.__GT_DroppingBuffer=function(r,e){return new cljs.core.async.impl.buffers.DroppingBuffer(r,e)},cljs.core.async.impl.buffers.dropping_buffer=function(r){return new cljs.core.async.impl.buffers.DroppingBuffer(cljs.core.async.impl.buffers.ring_buffer(r),r)},cljs.core.async.impl.buffers.SlidingBuffer=function(r,e){this.buf=r,this.n=e,this.cljs$lang$protocol_mask$partition0$=2,this.cljs$lang$protocol_mask$partition1$=0},cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$=!0,cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$=!0,cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1=function(r){return!1},cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1=function(r){var e=this;return e.buf.pop()},cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2=function(r,e){var c=this,s=this;return c.buf.length===c.n&&cljs.core.async.impl.protocols.remove_BANG_(s),c.buf.unshift(e),s},cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1=function(r){return null},cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1=function(r){var e=this;return e.buf.length},cljs.core.async.impl.buffers.SlidingBuffer.getBasis=function(){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$sym$buf,cljs.core.cst$sym$n],null)},cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type=!0,cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr="cljs.core.async.impl.buffers/SlidingBuffer",cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter=function(r,e,c){return cljs.core._write(e,"cljs.core.async.impl.buffers/SlidingBuffer")},cljs.core.async.impl.buffers.__GT_SlidingBuffer=function(r,e){return new cljs.core.async.impl.buffers.SlidingBuffer(r,e)},cljs.core.async.impl.buffers.sliding_buffer=function(r){return new cljs.core.async.impl.buffers.SlidingBuffer(cljs.core.async.impl.buffers.ring_buffer(r),r)},void 0!==cljs.core.async.impl.buffers.NO_VAL||(cljs.core.async.impl.buffers.NO_VAL=new Object),cljs.core.async.impl.buffers.undelivered_QMARK_=function(r){return cljs.core.async.impl.buffers.NO_VAL===r},cljs.core.async.impl.buffers.PromiseBuffer=function(r){this.val=r,this.cljs$lang$protocol_mask$partition0$=2,this.cljs$lang$protocol_mask$partition1$=0},cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$=!0,cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$=!0,cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1=function(r){return!1},cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1=function(r){var e=this;return e.val},cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2=function(r,e){var c=this,s=this;return cljs.core.truth_(cljs.core.async.impl.buffers.undelivered_QMARK_(c.val))&&(c.val=e),s},cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1=function(r){var e=this;return cljs.core.truth_(cljs.core.async.impl.buffers.undelivered_QMARK_(e.val))?e.val=null:null},cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$ICounted$_count$arity$1=function(r){var e=this;return cljs.core.truth_(cljs.core.async.impl.buffers.undelivered_QMARK_(e.val))?0:1},cljs.core.async.impl.buffers.PromiseBuffer.getBasis=function(){return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.with_meta(cljs.core.cst$sym$val,new cljs.core.PersistentArrayMap(null,1,[cljs.core.cst$kw$mutable,!0],null))],null)},cljs.core.async.impl.buffers.PromiseBuffer.cljs$lang$type=!0,cljs.core.async.impl.buffers.PromiseBuffer.cljs$lang$ctorStr="cljs.core.async.impl.buffers/PromiseBuffer",cljs.core.async.impl.buffers.PromiseBuffer.cljs$lang$ctorPrWriter=function(r,e,c){return cljs.core._write(e,"cljs.core.async.impl.buffers/PromiseBuffer")},cljs.core.async.impl.buffers.__GT_PromiseBuffer=function(r){return new cljs.core.async.impl.buffers.PromiseBuffer(r)},cljs.core.async.impl.buffers.promise_buffer=function(){return new cljs.core.async.impl.buffers.PromiseBuffer(cljs.core.async.impl.buffers.NO_VAL)};