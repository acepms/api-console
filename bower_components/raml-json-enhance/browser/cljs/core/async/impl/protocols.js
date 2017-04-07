goog.provide("cljs.core.async.impl.protocols"),goog.require("cljs.core"),cljs.core.async.impl.protocols.MAX_QUEUE_SIZE=1024,cljs.core.async.impl.protocols.ReadPort=function(){},cljs.core.async.impl.protocols.take_BANG_=function(l,o){if(null!=l&&null!=l.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2)return l.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(l,o);var c=null==l?null:l,r=cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(c)];if(null!=r)return r.cljs$core$IFn$_invoke$arity$2?r.cljs$core$IFn$_invoke$arity$2(l,o):r.call(null,l,o);var $=cljs.core.async.impl.protocols.take_BANG_._;if(null!=$)return $.cljs$core$IFn$_invoke$arity$2?$.cljs$core$IFn$_invoke$arity$2(l,o):$.call(null,l,o);throw cljs.core.missing_protocol("ReadPort.take!",l)},cljs.core.async.impl.protocols.WritePort=function(){},cljs.core.async.impl.protocols.put_BANG_=function(l,o,c){if(null!=l&&null!=l.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3)return l.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(l,o,c);var r=null==l?null:l,$=cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(r)];if(null!=$)return $.cljs$core$IFn$_invoke$arity$3?$.cljs$core$IFn$_invoke$arity$3(l,o,c):$.call(null,l,o,c);var n=cljs.core.async.impl.protocols.put_BANG_._;if(null!=n)return n.cljs$core$IFn$_invoke$arity$3?n.cljs$core$IFn$_invoke$arity$3(l,o,c):n.call(null,l,o,c);throw cljs.core.missing_protocol("WritePort.put!",l)},cljs.core.async.impl.protocols.Channel=function(){},cljs.core.async.impl.protocols.close_BANG_=function(l){if(null!=l&&null!=l.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1)return l.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(l);var o=null==l?null:l,c=cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(o)];if(null!=c)return c.cljs$core$IFn$_invoke$arity$1?c.cljs$core$IFn$_invoke$arity$1(l):c.call(null,l);var r=cljs.core.async.impl.protocols.close_BANG_._;if(null!=r)return r.cljs$core$IFn$_invoke$arity$1?r.cljs$core$IFn$_invoke$arity$1(l):r.call(null,l);throw cljs.core.missing_protocol("Channel.close!",l)},cljs.core.async.impl.protocols.closed_QMARK_=function(l){if(null!=l&&null!=l.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1)return l.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(l);var o=null==l?null:l,c=cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(o)];if(null!=c)return c.cljs$core$IFn$_invoke$arity$1?c.cljs$core$IFn$_invoke$arity$1(l):c.call(null,l);var r=cljs.core.async.impl.protocols.closed_QMARK_._;if(null!=r)return r.cljs$core$IFn$_invoke$arity$1?r.cljs$core$IFn$_invoke$arity$1(l):r.call(null,l);throw cljs.core.missing_protocol("Channel.closed?",l)},cljs.core.async.impl.protocols.Handler=function(){},cljs.core.async.impl.protocols.active_QMARK_=function(l){if(null!=l&&null!=l.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1)return l.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(l);var o=null==l?null:l,c=cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(o)];if(null!=c)return c.cljs$core$IFn$_invoke$arity$1?c.cljs$core$IFn$_invoke$arity$1(l):c.call(null,l);var r=cljs.core.async.impl.protocols.active_QMARK_._;if(null!=r)return r.cljs$core$IFn$_invoke$arity$1?r.cljs$core$IFn$_invoke$arity$1(l):r.call(null,l);throw cljs.core.missing_protocol("Handler.active?",l)},cljs.core.async.impl.protocols.blockable_QMARK_=function(l){if(null!=l&&null!=l.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1)return l.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(l);var o=null==l?null:l,c=cljs.core.async.impl.protocols.blockable_QMARK_[goog.typeOf(o)];if(null!=c)return c.cljs$core$IFn$_invoke$arity$1?c.cljs$core$IFn$_invoke$arity$1(l):c.call(null,l);var r=cljs.core.async.impl.protocols.blockable_QMARK_._;if(null!=r)return r.cljs$core$IFn$_invoke$arity$1?r.cljs$core$IFn$_invoke$arity$1(l):r.call(null,l);throw cljs.core.missing_protocol("Handler.blockable?",l)},cljs.core.async.impl.protocols.commit=function(l){if(null!=l&&null!=l.cljs$core$async$impl$protocols$Handler$commit$arity$1)return l.cljs$core$async$impl$protocols$Handler$commit$arity$1(l);var o=null==l?null:l,c=cljs.core.async.impl.protocols.commit[goog.typeOf(o)];if(null!=c)return c.cljs$core$IFn$_invoke$arity$1?c.cljs$core$IFn$_invoke$arity$1(l):c.call(null,l);var r=cljs.core.async.impl.protocols.commit._;if(null!=r)return r.cljs$core$IFn$_invoke$arity$1?r.cljs$core$IFn$_invoke$arity$1(l):r.call(null,l);throw cljs.core.missing_protocol("Handler.commit",l)},cljs.core.async.impl.protocols.Buffer=function(){},cljs.core.async.impl.protocols.full_QMARK_=function(l){if(null!=l&&null!=l.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1)return l.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(l);var o=null==l?null:l,c=cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(o)];if(null!=c)return c.cljs$core$IFn$_invoke$arity$1?c.cljs$core$IFn$_invoke$arity$1(l):c.call(null,l);var r=cljs.core.async.impl.protocols.full_QMARK_._;if(null!=r)return r.cljs$core$IFn$_invoke$arity$1?r.cljs$core$IFn$_invoke$arity$1(l):r.call(null,l);throw cljs.core.missing_protocol("Buffer.full?",l)},cljs.core.async.impl.protocols.remove_BANG_=function(l){if(null!=l&&null!=l.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1)return l.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(l);var o=null==l?null:l,c=cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(o)];if(null!=c)return c.cljs$core$IFn$_invoke$arity$1?c.cljs$core$IFn$_invoke$arity$1(l):c.call(null,l);var r=cljs.core.async.impl.protocols.remove_BANG_._;if(null!=r)return r.cljs$core$IFn$_invoke$arity$1?r.cljs$core$IFn$_invoke$arity$1(l):r.call(null,l);throw cljs.core.missing_protocol("Buffer.remove!",l)},cljs.core.async.impl.protocols.add_BANG__STAR_=function(l,o){if(null!=l&&null!=l.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2)return l.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(l,o);var c=null==l?null:l,r=cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(c)];if(null!=r)return r.cljs$core$IFn$_invoke$arity$2?r.cljs$core$IFn$_invoke$arity$2(l,o):r.call(null,l,o);var $=cljs.core.async.impl.protocols.add_BANG__STAR_._;if(null!=$)return $.cljs$core$IFn$_invoke$arity$2?$.cljs$core$IFn$_invoke$arity$2(l,o):$.call(null,l,o);throw cljs.core.missing_protocol("Buffer.add!*",l)},cljs.core.async.impl.protocols.close_buf_BANG_=function(l){if(null!=l&&null!=l.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1)return l.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(l);var o=null==l?null:l,c=cljs.core.async.impl.protocols.close_buf_BANG_[goog.typeOf(o)];if(null!=c)return c.cljs$core$IFn$_invoke$arity$1?c.cljs$core$IFn$_invoke$arity$1(l):c.call(null,l);var r=cljs.core.async.impl.protocols.close_buf_BANG_._;if(null!=r)return r.cljs$core$IFn$_invoke$arity$1?r.cljs$core$IFn$_invoke$arity$1(l):r.call(null,l);throw cljs.core.missing_protocol("Buffer.close-buf!",l)},cljs.core.async.impl.protocols.add_BANG_=function(l){for(var o=[],c=arguments.length,r=0;;){if(!(r<c))break;o.push(arguments[r]);r=r+1}switch(o.length){case 1:return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1(arguments[0]);case 2:return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(arguments[0],arguments[1]);default:throw new Error([cljs.core.str("Invalid arity: "),cljs.core.str(o.length)].join(""))}},cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1=function(l){return l},cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2=function(l,o){if(null==o)throw new Error("Assert failed: (not (nil? itm))");return cljs.core.async.impl.protocols.add_BANG__STAR_(l,o)},cljs.core.async.impl.protocols.add_BANG_.cljs$lang$maxFixedArity=2,cljs.core.async.impl.protocols.UnblockingBuffer=function(){};