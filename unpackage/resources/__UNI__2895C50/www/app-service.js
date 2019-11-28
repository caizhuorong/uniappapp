var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([3,'__l'])
Z([3,'allMovie data-v-29e32ef6 vue-ref'])
Z([3,'refreshComponentChannel'])
Z([1,3])
Z([[7],[3,'refresh']])
Z([1,50])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'moreMovieListObject'])
Z([[7],[3,'moreMovieArray']])
Z(z[9])
Z(z[1])
Z([3,'data-v-29e32ef6'])
Z([[7],[3,'moreMovieListObject']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,',']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'findList data-v-7426c0d6'])
Z([[2,'=='],[[6],[[7],[3,'findMovieObject']],[3,'view_type']],[1,1]])
Z([3,'right data-v-7426c0d6'])
Z([[2,'!'],[[7],[3,'isCollect']]])
Z([[7],[3,'isCollect']])
Z([[2,'=='],[[6],[[7],[3,'findMovieObject']],[3,'view_type']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'moveMovieList data-v-00d97aa0'])
Z([[2,'=='],[[6],[[7],[3,'moreMovieListObject']],[3,'view_type']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'moreMovieListObject']],[3,'view_type']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'collect data-v-6dbbbe8c'])
Z([[2,'<='],[[6],[[7],[3,'collectRecordArray']],[3,'length']],[1,0]])
Z([3,'y'])
Z([3,'x'])
Z([[7],[3,'collectRecordArray']])
Z(z[2])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-6dbbbe8c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^cancelCollects']],[[4],[[5],[[4],[[5],[1,'cancelCollects']]]]]]]]])
Z([[2,'+'],[1,'1-'],[[7],[3,'y']]])
Z([[7],[3,'x']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'extension data-v-5122edf3'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-5122edf3 vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^result']],[[4],[[5],[[4],[[5],[1,'qrR']]]]]]]]])
Z([3,'qrcode'])
Z([3,'1'])
Z([1,true])
Z([3,'300'])
Z([3,'upx'])
Z([[6],[[7],[3,'extensionObject']],[3,'invitation_content']])
Z(z[6])
Z([3,'index'])
Z([3,'inviteListObject'])
Z([[6],[[7],[3,'extensionObject']],[3,'task_list']])
Z(z[12])
Z([3,'inviteList data-v-5122edf3'])
Z([[2,'=='],[[6],[[7],[3,'inviteListObject']],[3,'is_finish']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'inviteListObject']],[3,'is_finish']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'feedbackQuick'])
Z([[7],[3,'FeedbackQuickWordArray']])
Z(z[0])
Z([3,'__e'])
Z([3,'__l'])
Z([3,'data-v-aa0d2ede'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^FeedbackQuickWordChooseAll']],[[4],[[5],[[4],[[5],[1,'FeedbackQuickWordChooseAll']]]]]]]]])
Z([[7],[3,'feedbackQuick']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'home data-v-443a7828'])
Z([3,'home'])
Z([[2,'>'],[[6],[[7],[3,'bannerArray']],[3,'length']],[1,0]])
Z([3,'y'])
Z([3,'x'])
Z([[7],[3,'movieDisplayArray']])
Z(z[3])
Z([3,'ys'])
Z([3,'xs'])
Z([[6],[[7],[3,'x']],[3,'list']])
Z(z[7])
Z([[4],[[5],[[5],[1,'data-v-443a7828']],[[2,'?:'],[[2,'!='],[[2,'%'],[[7],[3,'ys']],[1,5]],[1,0]],[1,'content1'],[1,'content2']]]])
Z([[2,'!='],[[2,'%'],[[7],[3,'ys']],[1,5]],[1,0]])
Z([[2,'&&'],[[2,'=='],[[2,'%'],[[7],[3,'ys']],[1,5]],[1,0]],[[2,'!='],[[7],[3,'ys']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'y'])
Z([3,'x'])
Z([[7],[3,'moreMovieArray']])
Z(z[1])
Z([3,'__l'])
Z([[7],[3,'x']])
Z([[2,'+'],[1,'1-'],[[7],[3,'y']]])
Z([[2,'&&'],[[7],[3,'allLoaded']],[[2,'>='],[[6],[[7],[3,'moreMovieArray']],[3,'length']],[1,20]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'movieDetails data-v-527dbe1c'])
Z([[2,'!='],[[6],[[7],[3,'movieInfo']],[3,'img']],[1,undefined]])
Z([3,'__e'])
Z([3,'data-v-527dbe1c'])
Z([1,true])
Z([[4],[[5],[[4],[[5],[[5],[1,'timeupdate']],[[4],[[5],[[4],[[5],[[5],[1,'timeupdates']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'myVideo'])
Z([3,'fill'])
Z([[6],[[7],[3,'movieInfo']],[3,'img']])
Z([[6],[[7],[3,'movieInfo']],[3,'media_url']])
Z([[2,'!'],[[7],[3,'isVip']]])
Z([[2,'&&'],[[7],[3,'isPlayEnd']],[[2,'!'],[[7],[3,'isVip']]]])
Z(z[11])
Z(z[11])
Z([[7],[3,'advTop']])
Z(z[14])
Z([3,'top data-v-527dbe1c'])
Z([3,'left data-v-527dbe1c'])
Z(z[2])
Z([3,'praise data-v-527dbe1c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'doPraiseOrCai']],[[4],[[5],[1,1]]]]]]]]]]])
Z([[2,'=='],[[7],[3,'isPraiseOrCai']],[1,1]])
Z([[2,'||'],[[2,'=='],[[7],[3,'isPraiseOrCai']],[1,2]],[[2,'=='],[[7],[3,'isPraiseOrCai']],[1,0]]])
Z(z[2])
Z([3,'cai data-v-527dbe1c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'doPraiseOrCai']],[[4],[[5],[1,0]]]]]]]]]]])
Z([[2,'=='],[[7],[3,'isPraiseOrCai']],[1,0]])
Z([[2,'||'],[[2,'=='],[[7],[3,'isPraiseOrCai']],[1,2]],[[2,'=='],[[7],[3,'isPraiseOrCai']],[1,1]]])
Z([3,'right data-v-527dbe1c'])
Z([[2,'!'],[[7],[3,'isCollect']]])
Z([[7],[3,'isCollect']])
Z([[2,'>'],[[6],[[7],[3,'advBottom']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'search data-v-08114ef4'])
Z([[2,'!'],[[7],[3,'isHaveSearchResult']]])
Z([[7],[3,'isHaveSearchRecord']])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-c1b63f5a'])
Z([3,'userNR data-v-c1b63f5a'])
Z([[2,'=='],[[6],[[7],[3,'userInfoObject']],[3,'is_vip']],[1,1]])
Z([3,'userTT data-v-c1b63f5a'])
Z([[2,'=='],[[6],[[7],[3,'userInfoObject']],[3,'is_vip']],[1,0]])
Z(z[2])
Z([[2,'>'],[[6],[[7],[3,'selfAdv']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'findMovieObject'])
Z([[7],[3,'findMovieArray']])
Z(z[0])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-62f41fb5'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^showShare']],[[4],[[5],[[4],[[5],[1,'showShare']]]]]]]]])
Z([[7],[3,'findMovieObject']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/allMovie.wxml','./components/collectList.wxml','./components/feedbackQuickWords.wxml','./components/findList.wxml','./components/moreMovieList.wxml','./components/tki-qrcode/tki-qrcode.wxml','./pages/aboutUs/aboutUs.wxml','./pages/agreement/agreement.wxml','./pages/channel/channel.wxml','./pages/collect/collect.wxml','./pages/extension/extension.wxml','./pages/feedback/feedback.wxml','./pages/first/first.wxml','./pages/index/index.wxml','./pages/kefu/kefu.wxml','./pages/moreMovie/moreMovie.wxml','./pages/movieDetails/movieDetails.wxml','./pages/playRecord/playRecord.wxml','./pages/privacy/privacy.wxml','./pages/rulers/rulers.wxml','./pages/search/search.wxml','./pages/selfCenter/selfCenter.wxml','./pages/service/service.wxml','./pages/shortMovie/shortMovie.wxml','./pages/vipCenter/vipCenter.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'mt-loadmore',['autoFill',0,'bind:__l',1,'class',1,'data-ref',2,'distanceIndex',3,'topMethod',4,'topDistance',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_mz(z,'more-movie-list',['bind:__l',13,'class',1,'moreMovieListObject',2,'vueId',3],[],cF,fE,gg)
_(hG,cI)
return hG
}
xC.wxXCkey=4
_2z(z,11,oD,e,s,gg,xC,'moreMovieListObject','index','index')
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var tM=_n('view')
_rz(z,tM,'class',0,e,s,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,1,e,s,gg)){eN.wxVkey=1
var oP=_n('view')
_rz(z,oP,'class',2,e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,3,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(oP,oR)
if(_oz(z,4,e,s,gg)){oR.wxVkey=1
}
xQ.wxXCkey=1
oR.wxXCkey=1
_(eN,oP)
}
var bO=_v()
_(tM,bO)
if(_oz(z,5,e,s,gg)){bO.wxVkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
_(r,tM)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cT=_n('view')
_rz(z,cT,'class',0,e,s,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,1,e,s,gg)){hU.wxVkey=1
}
var oV=_v()
_(cT,oV)
if(_oz(z,2,e,s,gg)){oV.wxVkey=1
}
hU.wxXCkey=1
oV.wxXCkey=1
_(r,cT)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var e2=_n('view')
_rz(z,e2,'class',0,e,s,gg)
var b3=_v()
_(e2,b3)
if(_oz(z,1,e,s,gg)){b3.wxVkey=1
}
else{b3.wxVkey=2
var o4=_v()
_(b3,o4)
var x5=function(f7,o6,c8,gg){
var o0=_mz(z,'collect-list',['bind:__l',6,'bind:cancelCollects',1,'class',2,'data-event-opts',3,'vueId',4,'x',5],[],f7,o6,gg)
_(c8,o0)
return c8
}
o4.wxXCkey=4
_2z(z,4,x5,e,s,gg,o4,'x','y','y')
}
b3.wxXCkey=1
b3.wxXCkey=3
_(r,e2)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oBB=_n('view')
_rz(z,oBB,'class',0,e,s,gg)
var lCB=_mz(z,'tki-qrcode',['bind:__l',1,'bind:result',1,'class',2,'data-event-opts',3,'data-ref',4,'lv',5,'onval',6,'size',7,'unit',8,'val',9,'vueId',10],[],e,s,gg)
_(oBB,lCB)
var aDB=_v()
_(oBB,aDB)
var tEB=function(bGB,eFB,oHB,gg){
var oJB=_n('view')
_rz(z,oJB,'class',16,bGB,eFB,gg)
var fKB=_v()
_(oJB,fKB)
if(_oz(z,17,bGB,eFB,gg)){fKB.wxVkey=1
}
var cLB=_v()
_(oJB,cLB)
if(_oz(z,18,bGB,eFB,gg)){cLB.wxVkey=1
}
fKB.wxXCkey=1
cLB.wxXCkey=1
_(oHB,oJB)
return oHB
}
aDB.wxXCkey=2
_2z(z,14,tEB,e,s,gg,aDB,'inviteListObject','index','index')
_(r,oBB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oNB=_v()
_(r,oNB)
var cOB=function(lQB,oPB,aRB,gg){
var eTB=_mz(z,'feedback-quick-words',['bind:FeedbackQuickWordChooseAll',4,'bind:__l',1,'class',2,'data-event-opts',3,'feedbackQuickWordsValue',4,'vueId',5],[],lQB,oPB,gg)
_(aRB,eTB)
return aRB
}
oNB.wxXCkey=4
_2z(z,2,cOB,e,s,gg,oNB,'feedbackQuick','index','index')
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var xWB=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var oXB=_v()
_(xWB,oXB)
if(_oz(z,2,e,s,gg)){oXB.wxVkey=1
}
var fYB=_v()
_(xWB,fYB)
var cZB=function(o2B,h1B,c3B,gg){
var l5B=_v()
_(c3B,l5B)
var a6B=function(e8B,t7B,b9B,gg){
var xAC=_n('view')
_rz(z,xAC,'class',11,e8B,t7B,gg)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,12,e8B,t7B,gg)){oBC.wxVkey=1
}
var fCC=_v()
_(xAC,fCC)
if(_oz(z,13,e8B,t7B,gg)){fCC.wxVkey=1
}
oBC.wxXCkey=1
fCC.wxXCkey=1
_(b9B,xAC)
return b9B
}
l5B.wxXCkey=2
_2z(z,9,a6B,o2B,h1B,gg,l5B,'xs','ys','ys')
return c3B
}
fYB.wxXCkey=2
_2z(z,5,cZB,e,s,gg,fYB,'x','y','y')
oXB.wxXCkey=1
_(r,xWB)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var oFC=_n('view')
_rz(z,oFC,'class',0,e,s,gg)
var oHC=_v()
_(oFC,oHC)
var lIC=function(tKC,aJC,eLC,gg){
var oNC=_mz(z,'more-movie-list',['bind:__l',5,'moreMovieListObject',1,'vueId',2],[],tKC,aJC,gg)
_(eLC,oNC)
return eLC
}
oHC.wxXCkey=4
_2z(z,3,lIC,e,s,gg,oHC,'x','y','y')
var cGC=_v()
_(oFC,cGC)
if(_oz(z,8,e,s,gg)){cGC.wxVkey=1
}
cGC.wxXCkey=1
_(r,oFC)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oPC=_n('view')
_rz(z,oPC,'class',0,e,s,gg)
var fQC=_v()
_(oPC,fQC)
if(_oz(z,1,e,s,gg)){fQC.wxVkey=1
var hSC=_mz(z,'video',['bindtimeupdate',2,'class',1,'controls',2,'data-event-opts',3,'id',4,'objectFit',5,'poster',6,'src',7],[],e,s,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,10,e,s,gg)){oTC.wxVkey=1
}
var cUC=_v()
_(hSC,cUC)
if(_oz(z,11,e,s,gg)){cUC.wxVkey=1
}
var oVC=_v()
_(hSC,oVC)
if(_oz(z,12,e,s,gg)){oVC.wxVkey=1
}
var lWC=_v()
_(hSC,lWC)
if(_oz(z,13,e,s,gg)){lWC.wxVkey=1
}
var aXC=_v()
_(hSC,aXC)
if(_oz(z,14,e,s,gg)){aXC.wxVkey=1
}
var tYC=_v()
_(hSC,tYC)
if(_oz(z,15,e,s,gg)){tYC.wxVkey=1
}
oTC.wxXCkey=1
cUC.wxXCkey=1
oVC.wxXCkey=1
lWC.wxXCkey=1
aXC.wxXCkey=1
tYC.wxXCkey=1
_(fQC,hSC)
}
var eZC=_n('view')
_rz(z,eZC,'class',16,e,s,gg)
var b1C=_n('view')
_rz(z,b1C,'class',17,e,s,gg)
var o2C=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2],[],e,s,gg)
var x3C=_v()
_(o2C,x3C)
if(_oz(z,21,e,s,gg)){x3C.wxVkey=1
}
var o4C=_v()
_(o2C,o4C)
if(_oz(z,22,e,s,gg)){o4C.wxVkey=1
}
x3C.wxXCkey=1
o4C.wxXCkey=1
_(b1C,o2C)
var f5C=_mz(z,'view',['bindtap',23,'class',1,'data-event-opts',2],[],e,s,gg)
var c6C=_v()
_(f5C,c6C)
if(_oz(z,26,e,s,gg)){c6C.wxVkey=1
}
var h7C=_v()
_(f5C,h7C)
if(_oz(z,27,e,s,gg)){h7C.wxVkey=1
}
c6C.wxXCkey=1
h7C.wxXCkey=1
_(b1C,f5C)
_(eZC,b1C)
var o8C=_n('view')
_rz(z,o8C,'class',28,e,s,gg)
var c9C=_v()
_(o8C,c9C)
if(_oz(z,29,e,s,gg)){c9C.wxVkey=1
}
var o0C=_v()
_(o8C,o0C)
if(_oz(z,30,e,s,gg)){o0C.wxVkey=1
}
c9C.wxXCkey=1
o0C.wxXCkey=1
_(eZC,o8C)
_(oPC,eZC)
var cRC=_v()
_(oPC,cRC)
if(_oz(z,31,e,s,gg)){cRC.wxVkey=1
}
fQC.wxXCkey=1
cRC.wxXCkey=1
_(r,oPC)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var bED=_n('view')
_rz(z,bED,'class',0,e,s,gg)
var oFD=_v()
_(bED,oFD)
if(_oz(z,1,e,s,gg)){oFD.wxVkey=1
var xGD=_v()
_(oFD,xGD)
if(_oz(z,2,e,s,gg)){xGD.wxVkey=1
}
xGD.wxXCkey=1
}
else{oFD.wxVkey=2
}
oFD.wxXCkey=1
_(r,bED)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var fID=_n('view')
_rz(z,fID,'class',0,e,s,gg)
var hKD=_n('view')
_rz(z,hKD,'class',1,e,s,gg)
var oLD=_v()
_(hKD,oLD)
if(_oz(z,2,e,s,gg)){oLD.wxVkey=1
}
var cMD=_n('view')
_rz(z,cMD,'class',3,e,s,gg)
var oND=_v()
_(cMD,oND)
if(_oz(z,4,e,s,gg)){oND.wxVkey=1
}
var lOD=_v()
_(cMD,lOD)
if(_oz(z,5,e,s,gg)){lOD.wxVkey=1
}
oND.wxXCkey=1
lOD.wxXCkey=1
_(hKD,cMD)
oLD.wxXCkey=1
_(fID,hKD)
var cJD=_v()
_(fID,cJD)
if(_oz(z,6,e,s,gg)){cJD.wxVkey=1
}
cJD.wxXCkey=1
_(r,fID)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var eRD=_v()
_(r,eRD)
var bSD=function(xUD,oTD,oVD,gg){
var cXD=_mz(z,'find-list',['bind:__l',4,'bind:showShare',1,'class',2,'data-event-opts',3,'findMovieObject',4,'vueId',5],[],xUD,oTD,gg)
_(oVD,cXD)
return oVD
}
eRD.wxXCkey=4
_2z(z,2,bSD,e,s,gg,eRD,'findMovieObject','index','index')
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/first/first","pages/index/index","pages/channel/channel","pages/vipCenter/vipCenter","pages/shortMovie/shortMovie","pages/selfCenter/selfCenter","pages/search/search","pages/playRecord/playRecord","pages/collect/collect","pages/movieDetails/movieDetails","pages/moreMovie/moreMovie","pages/kefu/kefu","pages/aboutUs/aboutUs","pages/agreement/agreement","pages/privacy/privacy","pages/service/service","pages/extension/extension","pages/rulers/rulers","pages/feedback/feedback"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"夜猫先生","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#F8F8F8","animationType":"fade-in"},"tabBar":{"color":"#666666","selectedColor":"#df5a51","borderStyle":"black","backgroundColor":"#ffffff","height":"60px","list":[{"pagePath":"pages/index/index","iconPath":"static/icon1s.png","selectedIconPath":"static/icon1.png","text":"首页"},{"pagePath":"pages/channel/channel","iconPath":"static/icon2s.png","selectedIconPath":"static/icon2.png","text":"频道"},{"pagePath":"pages/vipCenter/vipCenter","iconPath":"static/icon3s.png","selectedIconPath":"static/icon3.png","text":"充值"},{"pagePath":"pages/shortMovie/shortMovie","iconPath":"static/2.png","selectedIconPath":"static/37.png","text":"发现"},{"pagePath":"pages/selfCenter/selfCenter","iconPath":"static/icon5s.png","selectedIconPath":"static/icon5.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"yemaos","compilerVersion":"2.3.7","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/allMovie.json']={"usingComponents":{"more-movie-list":"/components/moreMovieList"},"component":true};
__wxAppCode__['components/allMovie.wxml']=$gwx('./components/allMovie.wxml');

__wxAppCode__['components/collectList.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/collectList.wxml']=$gwx('./components/collectList.wxml');

__wxAppCode__['components/feedbackQuickWords.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/feedbackQuickWords.wxml']=$gwx('./components/feedbackQuickWords.wxml');

__wxAppCode__['components/findList.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/findList.wxml']=$gwx('./components/findList.wxml');

__wxAppCode__['components/moreMovieList.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/moreMovieList.wxml']=$gwx('./components/moreMovieList.wxml');

__wxAppCode__['components/tki-qrcode/tki-qrcode.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/tki-qrcode/tki-qrcode.wxml']=$gwx('./components/tki-qrcode/tki-qrcode.wxml');

__wxAppCode__['pages/aboutUs/aboutUs.json']={"navigationBarTitleText":"关于我们","usingComponents":{}};
__wxAppCode__['pages/aboutUs/aboutUs.wxml']=$gwx('./pages/aboutUs/aboutUs.wxml');

__wxAppCode__['pages/agreement/agreement.json']={"navigationBarTitleText":"用户协议","usingComponents":{}};
__wxAppCode__['pages/agreement/agreement.wxml']=$gwx('./pages/agreement/agreement.wxml');

__wxAppCode__['pages/channel/channel.json']={"navigationStyle":"custom","onReachBottomDistance":50,"enablePullDownRefresh":true,"usingComponents":{"all-movie":"/components/allMovie"}};
__wxAppCode__['pages/channel/channel.wxml']=$gwx('./pages/channel/channel.wxml');

__wxAppCode__['pages/collect/collect.json']={"onReachBottomDistance":50,"navigationBarTitleText":"我的收藏","usingComponents":{"collect-list":"/components/collectList"}};
__wxAppCode__['pages/collect/collect.wxml']=$gwx('./pages/collect/collect.wxml');

__wxAppCode__['pages/extension/extension.json']={"navigationStyle":"custom","titleNView":{"titleText":"推广","buttons":[{"text":"奖励规则","fontSize":"30upx","width":"100px"}]},"usingComponents":{"tki-qrcode":"/components/tki-qrcode/tki-qrcode"}};
__wxAppCode__['pages/extension/extension.wxml']=$gwx('./pages/extension/extension.wxml');

__wxAppCode__['pages/feedback/feedback.json']={"navigationBarTitleText":"意见反馈","usingComponents":{"feedback-quick-words":"/components/feedbackQuickWords"}};
__wxAppCode__['pages/feedback/feedback.wxml']=$gwx('./pages/feedback/feedback.wxml');

__wxAppCode__['pages/first/first.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/first/first.wxml']=$gwx('./pages/first/first.wxml');

__wxAppCode__['pages/index/index.json']={"navigationStyle":"custom","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/kefu/kefu.json']={"navigationBarTitleText":"客服","usingComponents":{}};
__wxAppCode__['pages/kefu/kefu.wxml']=$gwx('./pages/kefu/kefu.wxml');

__wxAppCode__['pages/moreMovie/moreMovie.json']={"navigationBarTitleText":"","onReachBottomDistance":50,"enablePullDownRefresh":true,"usingComponents":{"more-movie-list":"/components/moreMovieList"}};
__wxAppCode__['pages/moreMovie/moreMovie.wxml']=$gwx('./pages/moreMovie/moreMovie.wxml');

__wxAppCode__['pages/movieDetails/movieDetails.json']={"navigationBarTitleText":"播放详情","usingComponents":{}};
__wxAppCode__['pages/movieDetails/movieDetails.wxml']=$gwx('./pages/movieDetails/movieDetails.wxml');

__wxAppCode__['pages/playRecord/playRecord.json']={"onReachBottomDistance":50,"navigationBarTitleText":"观看记录","usingComponents":{}};
__wxAppCode__['pages/playRecord/playRecord.wxml']=$gwx('./pages/playRecord/playRecord.wxml');

__wxAppCode__['pages/privacy/privacy.json']={"navigationBarTitleText":"隐私政策","usingComponents":{}};
__wxAppCode__['pages/privacy/privacy.wxml']=$gwx('./pages/privacy/privacy.wxml');

__wxAppCode__['pages/rulers/rulers.json']={"navigationBarTitleText":"奖励规则","usingComponents":{}};
__wxAppCode__['pages/rulers/rulers.wxml']=$gwx('./pages/rulers/rulers.wxml');

__wxAppCode__['pages/search/search.json']={"navigationStyle":"custom","onReachBottomDistance":50,"usingComponents":{}};
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/selfCenter/selfCenter.json']={"navigationBarTitleText":"个人中心","colorType":"grey","usingComponents":{}};
__wxAppCode__['pages/selfCenter/selfCenter.wxml']=$gwx('./pages/selfCenter/selfCenter.wxml');

__wxAppCode__['pages/service/service.json']={"navigationBarTitleText":"服务条款","usingComponents":{}};
__wxAppCode__['pages/service/service.wxml']=$gwx('./pages/service/service.wxml');

__wxAppCode__['pages/shortMovie/shortMovie.json']={"navigationBarTitleText":"发现","onReachBottomDistance":50,"enablePullDownRefresh":true,"usingComponents":{"find-list":"/components/findList"}};
__wxAppCode__['pages/shortMovie/shortMovie.wxml']=$gwx('./pages/shortMovie/shortMovie.wxml');

__wxAppCode__['pages/vipCenter/vipCenter.json']={"navigationBarTitleText":"会员充值","usingComponents":{}};
__wxAppCode__['pages/vipCenter/vipCenter.wxml']=$gwx('./pages/vipCenter/vipCenter.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"1e55":function(e,n,t){"use strict";t.r(n);var r=t("70d1");for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);t("c0e0");var u,o,i=t("2877"),c=Object(i["a"])(r["default"],u,o,!1,null,null,null);n["default"]=c.exports},"49af":function(e,n,t){},"70d1":function(e,n,t){"use strict";t.r(n);var r=t("a649"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,function(){return r[e]})}(u);n["default"]=a.a},a649:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a")),a=u(t("040e"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,n,t,r,a,u,o){try{var i=e[u](o),c=i.value}catch(f){return void t(f)}i.done?n(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var n=this,t=arguments;return new Promise(function(r,a){var u=e.apply(n,t);function i(e){o(u,r,a,i,c,"next",e)}function c(e){o(u,r,a,i,c,"throw",e)}i(void 0)})}}var c={onLaunch:function(){e.getStorageSync("userInfo")?this.getUserInfo():this.initUserInfo()},methods:{getUserInfo:function(){var n=i(r.default.mark(function n(){var t;return r.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=player&a=player_info",{channel:a.default.config.channel,uid:a.default.judgeParams().uid},!0);case 2:t=n.sent,e.getStorageSync("userInfo")&&(e.removeStorageSync("userInfo"),e.setStorageSync("userInfo",t.data));case 4:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),initUserInfo:function(){var n=i(r.default.mark(function n(){var t;return r.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=player&a=do_init",{channel:a.default.config.channel,version:1,machine_code:a.default.config.machine_code,invitation_uid:"",maker:"",mobile_model:"",system_version:""},!0);case 2:t=n.sent,e.setStorageSync("userInfo",t.data);case 4:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}()}};n.default=c}).call(this,t("6e42")["default"])},c0e0:function(e,n,t){"use strict";var r=t("49af"),a=t.n(r);a.a},e66c:function(e,n,t){"use strict";(function(e){t("bee6"),t("921b");var n=a(t("66fd")),r=a(t("1e55"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){o(e,n,t[n])})}return e}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default.config.productionTip=!1,r.default.mpType="app";var i=new n.default(u({},r.default));e(i).$mount()}).call(this,t("6e42")["createApp"])}},[["e66c","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var o, r, a = t[0], s = t[1], u = t[2], l = 0, p = []; l < a.length; l++) {
      r = a[l], i[r] && p.push(i[r][0]), i[r] = 0;
    }

    for (o in s) {
      Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
    }

    f && f(t);

    while (p.length) {
      p.shift()();
    }

    return c.push.apply(c, u || []), n();
  }

  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], o = !0, r = 1; r < n.length; r++) {
        var a = n[r];
        0 !== i[a] && (o = !1);
      }

      o && (c.splice(t--, 1), e = s(s.s = n[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      c = [];

  function a(e) {
    return s.p + "" + e + ".js";
  }

  function s(t) {
    if (o[t]) return o[t].exports;
    var n = o[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports;
  }

  s.e = function (e) {
    var t = [],
        n = {
      "components/allMovie": 1,
      "components/findList": 1,
      "components/collectList": 1,
      "components/moreMovieList": 1,
      "components/tki-qrcode/tki-qrcode": 1,
      "components/feedbackQuickWords": 1
    };
    r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise(function (t, n) {
      for (var o = ({
        "components/allMovie": "components/allMovie",
        "components/findList": "components/findList",
        "components/collectList": "components/collectList",
        "components/moreMovieList": "components/moreMovieList",
        "components/tki-qrcode/tki-qrcode": "components/tki-qrcode/tki-qrcode",
        "components/feedbackQuickWords": "components/feedbackQuickWords"
      }[e] || e) + ".wxss", i = s.p + o, c = document.getElementsByTagName("link"), a = 0; a < c.length; a++) {
        var u = c[a],
            l = u.getAttribute("data-href") || u.getAttribute("href");
        if ("stylesheet" === u.rel && (l === o || l === i)) return t();
      }

      var p = document.getElementsByTagName("style");

      for (a = 0; a < p.length; a++) {
        u = p[a], l = u.getAttribute("data-href");
        if (l === o || l === i) return t();
      }

      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function (t) {
        var o = t && t.target && t.target.src || i,
            c = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        c.request = o, delete r[e], f.parentNode.removeChild(f), n(c);
      }, f.href = i;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(f);
    }).then(function () {
      r[e] = 0;
    }));
    var o = i[e];
    if (0 !== o) if (o) t.push(o[2]);else {
      var c = new Promise(function (t, n) {
        o = i[e] = [t, n];
      });
      t.push(o[2] = c);
      var u,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = a(e), u = function u(t) {
        l.onerror = l.onload = null, clearTimeout(p);
        var n = i[e];

        if (0 !== n) {
          if (n) {
            var o = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src,
                c = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            c.type = o, c.request = r, n[1](c);
          }

          i[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        u({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = u, document.head.appendChild(l);
    }
    return Promise.all(t);
  }, s.m = e, s.c = o, s.d = function (e, t, n) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, s.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (s.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      s.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "/", s.oe = function (e) {
    throw console.error(e), e;
  };
  var u = global["webpackJsonp"] = global["webpackJsonp"] || [],
      l = u.push.bind(u);
  u.push = t, u = u.slice();

  for (var p = 0; p < u.length; p++) {
    t(u[p]);
  }

  var f = l;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"040e":function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("2469")),i=n("b149");function a(t){return t&&t.__esModule?t:{default:t}}n("3080");var s={config:{channel:1,key:"9252a9a523123028423c4b38d8eba5e7",appid:1013,machine_code:(new Date).getTime(),host:"/requuest_url",sharekey:"1db39bd40e24e"},jointUrl:function(t){for(var e=Object.keys(t).sort(),n="",r=0;r<e.length;r++)n+=e[r]+"="+t[e[r]]+"&";return n=n.replace(/&{1}$/,""),n},getSign:function(t){return(0,o.default)(this.jointUrl(t)+this.config.key).toLowerCase()},judgeOs:function(){var e=t.getSystemInfoSync();return e.platform},judgeBrower:function(){var t=navigator.userAgent;return{isAndroid:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,isIOS:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),isSafari:t.indexOf("Safari")>-1,isQQ:t.match(/QQ\/[0-9]/i),isWx:t.match(/MicroMessenger\/[0-9]/i)}},judgeParams:function(){var e=null,n=null,r=null,o=this.judgeOs();return"android"==o?e=1:"ios"==o&&(e=2),t.getStorageSync("userInfo")?(n=parseInt(t.getStorageSync("userInfo").uid),r=t.getStorageSync("userInfo").nick_name):(n=0,r=""),{system:e,uid:n,userName:r}},arrayDelete:function(t){for(var e=t.length-1;e>=0;e--)for(var n=e-1;n>=0;n--)t[e]===t[n]&&(t.splice(n,1),n++);return t},uploadImgToBaseSixFour:function(t){return new Promise(function(e,n){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){e(r)},r.onerror=n})},deepClone:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){var e=t.constructor===Array?[]:{};for(var n in t)t.hasOwnProperty(n)&&(t[n]&&"object"===typeof t[n]?(e[n]=t[n].constructor===Array?[]:{},e[n]=deepClone(t[n])):e[n]=t[n]);return e}),goTop:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,e=setInterval(function(){t-=t/1,window.scrollTo(0,t),t<=1&&clearInterval(e)},10)},getNetworkType:function(){var t=navigator.userAgent,e=t.match(/NetType\/\w+/)?t.match(/NetType\/\w+/)[0]:"NetType/other";switch(e=e.toLowerCase().replace("nettype/",""),e){case"wifi":"wifi";break;case"4g":"4g";break;case"3g":"3g";break;case"3gnet":"3g";break;case"2g":"2g";break;default:"other"}alert(e)},exchangeSecond:function(t){var e,n,r,o="";return e=parseInt(t/3600),n=parseInt(t%3600/60),r=t%3600%60,e+="",n+="",r+="",e=1==e.length?"0"+e:e,n=1==n.length?"0"+n:n,r=1==r.length?"0"+r:r,e>0&&(o=o+e+":"),(n>0||e>0&&0==n)&&(o=o+n+":"),o+=r,o},downloadFile:function(t,e){var n=document.createElement("a"),r=this.base64ToBlob(e),o=document.createEvent("HTMLEvents");o.initEvent("click",!0,!0),n.download=t,n.href=URL.createObjectURL(r),n.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))},base64ToBlob:function(t){for(var e=t.split(";base64,"),n=e[0].split(":")[1],r=window.atob(e[1]),o=r.length,i=new Uint8Array(o),a=0;a<o;++a)i[a]=r.charCodeAt(a);return new Blob([i],{type:n})},playmove:function(e,n){e?t.navigateTo({url:"../movieDetails/movieDetails?movieId=".concat(e)}):void 0!=n&&plus.runtime.openURL(n,function(t){console.log(r(t," at utils\\public.js:194"))})},getInfoByAxios:function(e,n,o,a){if(t.showLoading({title:"加载中...",icon:"none",mask:!0}),a&&(o.sign=s.getSign(o)),console.log(r(o," at utils\\public.js:208")),"get"===e)return new Promise(function(e,a){t.request({url:n,method:"GET",data:o,success:function(n){if(t.hideLoading(),void 0!=n.data&&null!=n.data&&"string"==typeof n.data){var r=n.data.split("").reverse().join("");e(JSON.parse(i.Base64.decode(r)))}else e(n.data)},fail:function(e){console.log(r(e," at utils\\public.js:225")),a(e),t.hideLoading(),setTimeout(function(){t.showToast({message:"请求失败",position:"center",duration:2e3})},1e3)}})});if("post"===e){console.log(r(o," at utils\\public.js:239"));var u=new URLSearchParams;for(var c in o)u.append(c,o[c]);return new Promise(function(e,o){console.log(r(u,1," at utils\\public.js:245")),t.request({url:n,method:"POST",data:u,success:function(n){if(console.log(r(n," at utils\\public.js:251")),t.hideLoading(),"string"==typeof n.data){var o=n.data.split("").reverse().join("");e(JSON.parse(i.Base64.decode(o)))}else e(n.data)},fail:function(e){o(e),t.hideLoading(),setTimeout(function(){t.showToast({message:"请求失败",position:"center",duration:2e3})},1e3)}})})}}},u=s;e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var a=o.pop();i=o.join("---COMMA---"),0===a.indexOf(" at ")?i+=a:i+="---COMMA---"+a}else i=o[0];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},2469:function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function(){var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"===typeof module&&module.exports,AMD=__webpack_require__("3c35"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var n=OUTPUT_TYPES[e];t[n]=createOutputMethod(n)}return t},nodeWrap=function nodeWrap(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"===typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw ERROR;e=!0}var r,o,i=0,a=t.length,s=this.blocks,u=this.buffer8;while(i<a){if(this.hashed&&(this.hashed=!1,s[0]=s[16],s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),e)if(ARRAY_BUFFER)for(o=this.start;i<a&&o<64;++i)u[o++]=t[i];else for(o=this.start;i<a&&o<64;++i)s[o>>2]|=t[i]<<SHIFT[3&o++];else if(ARRAY_BUFFER)for(o=this.start;i<a&&o<64;++i)r=t.charCodeAt(i),r<128?u[o++]=r:r<2048?(u[o++]=192|r>>6,u[o++]=128|63&r):r<55296||r>=57344?(u[o++]=224|r>>12,u[o++]=128|r>>6&63,u[o++]=128|63&r):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++i)),u[o++]=240|r>>18,u[o++]=128|r>>12&63,u[o++]=128|r>>6&63,u[o++]=128|63&r);else for(o=this.start;i<a&&o<64;++i)r=t.charCodeAt(i),r<128?s[o>>2]|=r<<SHIFT[3&o++]:r<2048?(s[o>>2]|=(192|r>>6)<<SHIFT[3&o++],s[o>>2]|=(128|63&r)<<SHIFT[3&o++]):r<55296||r>=57344?(s[o>>2]|=(224|r>>12)<<SHIFT[3&o++],s[o>>2]|=(128|r>>6&63)<<SHIFT[3&o++],s[o>>2]|=(128|63&r)<<SHIFT[3&o++]):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++i)),s[o>>2]|=(240|r>>18)<<SHIFT[3&o++],s[o>>2]|=(128|r>>12&63)<<SHIFT[3&o++],s[o>>2]|=(128|r>>6&63)<<SHIFT[3&o++],s[o>>2]|=(128|63&r)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,n,r,o,i,a=this.blocks;this.first?(t=a[0]-680876937,t=(t<<7|t>>>25)-271733879<<0,r=(-1732584194^2004318071&t)+a[1]-117830708,r=(r<<12|r>>>20)+t<<0,n=(-271733879^r&(-271733879^t))+a[2]-1126478375,n=(n<<17|n>>>15)+r<<0,e=(t^n&(r^t))+a[3]-1316259209,e=(e<<22|e>>>10)+n<<0):(t=this.h0,e=this.h1,n=this.h2,r=this.h3,t+=(r^e&(n^r))+a[0]-680876936,t=(t<<7|t>>>25)+e<<0,r+=(n^t&(e^n))+a[1]-389564586,r=(r<<12|r>>>20)+t<<0,n+=(e^r&(t^e))+a[2]+606105819,n=(n<<17|n>>>15)+r<<0,e+=(t^n&(r^t))+a[3]-1044525330,e=(e<<22|e>>>10)+n<<0),t+=(r^e&(n^r))+a[4]-176418897,t=(t<<7|t>>>25)+e<<0,r+=(n^t&(e^n))+a[5]+1200080426,r=(r<<12|r>>>20)+t<<0,n+=(e^r&(t^e))+a[6]-1473231341,n=(n<<17|n>>>15)+r<<0,e+=(t^n&(r^t))+a[7]-45705983,e=(e<<22|e>>>10)+n<<0,t+=(r^e&(n^r))+a[8]+1770035416,t=(t<<7|t>>>25)+e<<0,r+=(n^t&(e^n))+a[9]-1958414417,r=(r<<12|r>>>20)+t<<0,n+=(e^r&(t^e))+a[10]-42063,n=(n<<17|n>>>15)+r<<0,e+=(t^n&(r^t))+a[11]-1990404162,e=(e<<22|e>>>10)+n<<0,t+=(r^e&(n^r))+a[12]+1804603682,t=(t<<7|t>>>25)+e<<0,r+=(n^t&(e^n))+a[13]-40341101,r=(r<<12|r>>>20)+t<<0,n+=(e^r&(t^e))+a[14]-1502002290,n=(n<<17|n>>>15)+r<<0,e+=(t^n&(r^t))+a[15]+1236535329,e=(e<<22|e>>>10)+n<<0,t+=(n^r&(e^n))+a[1]-165796510,t=(t<<5|t>>>27)+e<<0,r+=(e^n&(t^e))+a[6]-1069501632,r=(r<<9|r>>>23)+t<<0,n+=(t^e&(r^t))+a[11]+643717713,n=(n<<14|n>>>18)+r<<0,e+=(r^t&(n^r))+a[0]-373897302,e=(e<<20|e>>>12)+n<<0,t+=(n^r&(e^n))+a[5]-701558691,t=(t<<5|t>>>27)+e<<0,r+=(e^n&(t^e))+a[10]+38016083,r=(r<<9|r>>>23)+t<<0,n+=(t^e&(r^t))+a[15]-660478335,n=(n<<14|n>>>18)+r<<0,e+=(r^t&(n^r))+a[4]-405537848,e=(e<<20|e>>>12)+n<<0,t+=(n^r&(e^n))+a[9]+568446438,t=(t<<5|t>>>27)+e<<0,r+=(e^n&(t^e))+a[14]-1019803690,r=(r<<9|r>>>23)+t<<0,n+=(t^e&(r^t))+a[3]-187363961,n=(n<<14|n>>>18)+r<<0,e+=(r^t&(n^r))+a[8]+1163531501,e=(e<<20|e>>>12)+n<<0,t+=(n^r&(e^n))+a[13]-1444681467,t=(t<<5|t>>>27)+e<<0,r+=(e^n&(t^e))+a[2]-51403784,r=(r<<9|r>>>23)+t<<0,n+=(t^e&(r^t))+a[7]+1735328473,n=(n<<14|n>>>18)+r<<0,e+=(r^t&(n^r))+a[12]-1926607734,e=(e<<20|e>>>12)+n<<0,o=e^n,t+=(o^r)+a[5]-378558,t=(t<<4|t>>>28)+e<<0,r+=(o^t)+a[8]-2022574463,r=(r<<11|r>>>21)+t<<0,i=r^t,n+=(i^e)+a[11]+1839030562,n=(n<<16|n>>>16)+r<<0,e+=(i^n)+a[14]-35309556,e=(e<<23|e>>>9)+n<<0,o=e^n,t+=(o^r)+a[1]-1530992060,t=(t<<4|t>>>28)+e<<0,r+=(o^t)+a[4]+1272893353,r=(r<<11|r>>>21)+t<<0,i=r^t,n+=(i^e)+a[7]-155497632,n=(n<<16|n>>>16)+r<<0,e+=(i^n)+a[10]-1094730640,e=(e<<23|e>>>9)+n<<0,o=e^n,t+=(o^r)+a[13]+681279174,t=(t<<4|t>>>28)+e<<0,r+=(o^t)+a[0]-358537222,r=(r<<11|r>>>21)+t<<0,i=r^t,n+=(i^e)+a[3]-722521979,n=(n<<16|n>>>16)+r<<0,e+=(i^n)+a[6]+76029189,e=(e<<23|e>>>9)+n<<0,o=e^n,t+=(o^r)+a[9]-640364487,t=(t<<4|t>>>28)+e<<0,r+=(o^t)+a[12]-421815835,r=(r<<11|r>>>21)+t<<0,i=r^t,n+=(i^e)+a[15]+530742520,n=(n<<16|n>>>16)+r<<0,e+=(i^n)+a[2]-995338651,e=(e<<23|e>>>9)+n<<0,t+=(n^(e|~r))+a[0]-198630844,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~n))+a[7]+1126891415,r=(r<<10|r>>>22)+t<<0,n+=(t^(r|~e))+a[14]-1416354905,n=(n<<15|n>>>17)+r<<0,e+=(r^(n|~t))+a[5]-57434055,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~r))+a[12]+1700485571,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~n))+a[3]-1894986606,r=(r<<10|r>>>22)+t<<0,n+=(t^(r|~e))+a[10]-1051523,n=(n<<15|n>>>17)+r<<0,e+=(r^(n|~t))+a[1]-2054922799,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~r))+a[8]+1873313359,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~n))+a[15]-30611744,r=(r<<10|r>>>22)+t<<0,n+=(t^(r|~e))+a[6]-1560198380,n=(n<<15|n>>>17)+r<<0,e+=(r^(n|~t))+a[13]+1309151649,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~r))+a[4]-145523070,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~n))+a[11]-1120210379,r=(r<<10|r>>>22)+t<<0,n+=(t^(r|~e))+a[2]+718787259,n=(n<<15|n>>>17)+r<<0,e+=(r^(n|~t))+a[9]-343485551,e=(e<<21|e>>>11)+n<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=n-1732584194<<0,this.h3=r+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,n,r="",o=this.array(),i=0;i<15;)t=o[i++],e=o[i++],n=o[i++],r+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|n>>>6)]+BASE64_ENCODE_CHAR[63&n];return t=o[i],r+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"==",r};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"2b19":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__2895C50"};e.default=r},3080:function(t,e,n){"use strict";(function(t){(function(t){var e=t.URLSearchParams&&t.URLSearchParams.prototype.get?t.URLSearchParams:null,n=e&&"a=1"===new e({a:1}).toString(),r=e&&"+"===new e("s=%2B").get("s"),o="__URLSearchParams__",i=!e||function(){var t=new e;return t.append("s"," &"),"s=+%26"===t.toString()}(),a=l.prototype,s=!(!t.Symbol||!t.Symbol.iterator);if(!(e&&n&&r&&i)){a.append=function(t,e){g(this[o],t,e)},a["delete"]=function(t){delete this[o][t]},a.get=function(t){var e=this[o];return t in e?e[t][0]:null},a.getAll=function(t){var e=this[o];return t in e?e[t].slice(0):[]},a.has=function(t){return t in this[o]},a.set=function(t,e){this[o][t]=[""+e]},a.toString=function(){var t,e,n,r,i=this[o],a=[];for(e in i)for(n=p(e),t=0,r=i[e];t<r.length;t++)a.push(n+"="+p(r[t]));return a.join("&")};var u=!r,c=!u&&e&&!n&&t.Proxy;Object.defineProperty(t,"URLSearchParams",{value:c?new Proxy(e,{construct:function(t,e){return new t(new l(e[0]).toString())}}):l});var f=t.URLSearchParams.prototype;f.polyfill=!0,f.forEach=f.forEach||function(t,e){var n=v(this.toString());Object.getOwnPropertyNames(n).forEach(function(r){n[r].forEach(function(n){t.call(e,n,r,this)},this)},this)},f.sort=f.sort||function(){var t,e,n,r=v(this.toString()),o=[];for(t in r)o.push(t);for(o.sort(),e=0;e<o.length;e++)this["delete"](o[e]);for(e=0;e<o.length;e++){var i=o[e],a=r[i];for(n=0;n<a.length;n++)this.append(i,a[n])}},f.keys=f.keys||function(){var t=[];return this.forEach(function(e,n){t.push(n)}),d(t)},f.values=f.values||function(){var t=[];return this.forEach(function(e){t.push(e)}),d(t)},f.entries=f.entries||function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),d(t)},s&&(f[t.Symbol.iterator]=f[t.Symbol.iterator]||f.entries)}function l(t){t=t||"",(t instanceof URLSearchParams||t instanceof l)&&(t=t.toString()),this[o]=v(t)}function p(t){var e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'\(\)~]|%20|%00/g,function(t){return e[t]})}function h(t){return t.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/gi,function(t){return decodeURIComponent(t)})}function d(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return s&&(n[t.Symbol.iterator]=function(){return n}),n}function v(t){var e={};if("object"===typeof t)if(y(t))for(var n=0;n<t.length;n++){var r=t[n];if(!y(r)||2!==r.length)throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");g(e,r[0],r[1])}else for(var o in t)t.hasOwnProperty(o)&&g(e,o,t[o]);else{0===t.indexOf("?")&&(t=t.slice(1));for(var i=t.split("&"),a=0;a<i.length;a++){var s=i[a],u=s.indexOf("=");-1<u?g(e,h(s.slice(0,u)),h(s.slice(u+1))):s&&g(e,h(s),"")}}return e}function g(t,e,n){var r="string"===typeof n?n:null!==n&&void 0!==n&&"function"===typeof n.toString?n.toString():JSON.stringify(n);e in t?t[e].push(r):t[e]=[r]}function y(t){return!!t&&"[object Array]"===Object.prototype.toString.call(t)}})("undefined"!==typeof t?t:"undefined"!==typeof window?window:void 0)}).call(this,n("c8ba"))},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function _(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var A=/-(\w)/g,S=w(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),E=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),O=/\B([A-Z])/g,k=w(function(t){return t.replace(O,"-$1").toLowerCase()});function C(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var $=Function.prototype.bind?x:C;function T(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function R(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&R(e,t[n]);return e}function j(t,e,n){}var D=function(t,e,n){return!1},B=function(t){return t};function N(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return N(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return N(t[n],e[n])})}catch(c){return!1}}function I(t,e){for(var n=0;n<t.length;n++)if(N(t[n],e))return n;return-1}function L(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var M=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:j,parsePlatformTagName:B,mustUseProp:D,async:!0,_lifecycleHooks:H},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function V(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function q(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var X=new RegExp("[^"+F.source+".$_\\d]");function W(t){if(!X.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var z,J="__proto__"in{},G="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=K&&WXEnvironment.platform.toLowerCase(),Q=G&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Y),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(G)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(eo){}var ot=function(){return void 0===z&&(z=!G&&!K&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),z},it=G&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=j,ft=0,lt=function(){this.id=ft++,this.subs=[]};function pt(t){lt.SharedObject.targetStack.push(t),lt.SharedObject.target=t}function ht(){lt.SharedObject.targetStack.pop(),lt.SharedObject.target=lt.SharedObject.targetStack[lt.SharedObject.targetStack.length-1]}lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){_(this.subs,t)},lt.prototype.depend=function(){lt.SharedObject.target&&lt.SharedObject.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},lt.SharedObject.target=null,lt.SharedObject.targetStack=[];var dt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var gt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function _t(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=mt[t];q(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var At=Object.getOwnPropertyNames(bt),St=!0;function Et(t){St=t}var Ot=function(t){this.value=t,this.dep=new lt,this.vmCount=0,q(t,"__ob__",this),Array.isArray(t)?(J?t.push!==t.__proto__.push?Ct(t,bt,At):kt(t,bt):Ct(t,bt,At),this.observeArray(t)):this.walk(t)};function kt(t,e){t.__proto__=e}function Ct(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];q(t,i,e[i])}}function xt(t,e){var n;if(u(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof Ot?n=t.__ob__:St&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ot(t)),e&&n&&n.vmCount++,n}function $t(t,e,n,r,o){var i=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&xt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.SharedObject.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Pt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&xt(e),i.notify())}})}}function Tt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?($t(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Rt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Pt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Pt(e)}Ot.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)$t(t,e[n])},Ot.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)xt(t[e])};var jt=U.optionMergeStrategies;function Dt(t,e){if(!e)return t;for(var n,r,o,i=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&f(r)&&f(o)&&Dt(r,o):Tt(t,n,o));return t}function Bt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?Dt(r,o):o}:e?t?function(){return Dt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Nt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?It(n):n}function It(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Lt(t,e,n,r){var o=Object.create(t||null);return e?R(o,e):o}jt.data=function(t,e,n){return n?Bt(t,e,n):e&&"function"!==typeof e?t:Bt(t,e)},H.forEach(function(t){jt[t]=Nt}),M.forEach(function(t){jt[t+"s"]=Lt}),jt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in R(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},jt.props=jt.methods=jt.inject=jt.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return R(o,t),e&&R(o,e),o},jt.provide=Bt;var Mt=function(t,e){return void 0===e?t:e};function Ht(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=S(o),a[i]={type:null})}else if(f(n))for(var s in n)o=n[s],i=S(s),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function Ut(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?R({from:i},a):{from:a}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Vt(t,e,n){if("function"===typeof e&&(e=e.options),Ht(e,n),Ut(e,n),Ft(e),!e._base&&(e.extends&&(t=Vt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Vt(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)b(t,i)||s(i);function s(r){var o=jt[r]||Mt;a[r]=o(t[r],e[r],n,r)}return a}function qt(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=S(n);if(b(o,i))return o[i];var a=E(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Xt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=Gt(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===k(t)){var u=Gt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Wt(r,o,t);var c=St;Et(!0),xt(a),Et(c)}return a}function Wt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==zt(e.type)?r.call(t):r}}function zt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Jt(t,e){return zt(t)===zt(e)}function Gt(t,e){if(!Array.isArray(e))return Jt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Jt(e[n],t))return n;return-1}function Kt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(eo){Qt(eo,r,"errorCaptured hook")}}}Qt(t,e,n)}finally{ht()}}function Yt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(t){return Kt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(eo){Kt(eo,r,o)}return i}function Qt(t,e,n){if(U.errorHandler)try{return U.errorHandler.call(null,t,e,n)}catch(eo){eo!==t&&Zt(eo,null,"config.errorHandler")}Zt(t,e,n)}function Zt(t,e,n){if(!G&&!K||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(j)}}else if(Z||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,ae=new MutationObserver(re),se=document.createTextNode(String(ie));ae.observe(se,{characterData:!0}),te=function(){ie=(ie+1)%2,se.data=String(ie)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(eo){Kt(eo,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function fe(t){le(t,ce),ce.clear()}function le(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)le(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)le(t[r[n]],e)}}}var pe=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Yt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Yt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,o,a,s){var u,c,f,l;for(u in t)c=t[u],f=e[u],l=pe(u),r(c)||(r(f)?(r(c.fns)&&(c=t[u]=he(c,s)),i(l.once)&&(c=t[u]=a(l.name,c,l.capture)),n(l.name,c,l.capture,l.passive,l.params)):c!==f&&(f.fns=c,t[u]=f));for(u in e)r(t[u])&&(l=pe(u),o(l.name,e[u],l.capture))}function ve(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in i){var f=k(c);ge(a,u,c,f,!0)||ge(a,s,c,f,!1)}return a}}function ge(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function _e(t){return s(t)?[yt(t)]:Array.isArray(t)?be(t):void 0}function me(t){return o(t)&&o(t.text)&&a(t.isComment)}function be(t,e){var n,a,u,c,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=f.length-1,c=f[u],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),me(a[0])&&me(c)&&(f[u]=yt(c.text+a[0].text),a.shift()),f.push.apply(f,a)):s(a)?me(c)?f[u]=yt(c.text+a):""!==a&&f.push(yt(a)):me(a)&&me(c)?f[u]=yt(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function we(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Ae(t){var e=Se(t.$options.inject,t);e&&(Et(!1),Object.keys(e).forEach(function(n){$t(t,n,e[n])}),Et(!0))}function Se(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function Ee(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(Oe)&&delete n[c];return n}function Oe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=Ce(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=xe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),q(o,"$stable",a),q(o,"$key",s),q(o,"$hasNormal",i),o}function Ce(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:_e(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function xe(t,e){return function(){return t[e]}}function $e(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length)),f=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function Te(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=R(R({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Re(t){return qt(this.$options,"filters",t,!0)||B}function Pe(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function je(t,e,n,r,o){var i=U.keyCodes[e]||n;return o&&r&&!U.keyCodes[e]?Pe(o,r):i?Pe(i,t):r?k(r)!==e:void 0}function De(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=P(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||U.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=S(a),c=k(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Be(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ie(r,"__static__"+t,!1),r)}function Ne(t,e,n){return Ie(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ie(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Le(t[r],e+"_"+r,n);else Le(t,e,n)}function Le(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Me(t,e){if(e)if(f(e)){var n=t.on=t.on?R({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function He(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?He(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Ue(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function Ve(t){t._o=Ne,t._n=v,t._s=d,t._l=$e,t._t=Te,t._q=N,t._i=I,t._m=Be,t._f=Re,t._k=je,t._b=De,t._v=yt,t._e=gt,t._u=He,t._g=Me,t._d=Ue,t._p=Fe}function qe(t,e,r,o,a){var s,u=this,c=a.options;b(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var f=i(c._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Se(c.inject,o),this.slots=function(){return u.$slots||ke(t.scopedSlots,u.$slots=Ee(r,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=ke(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=rn(s,t,e,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,l)}}function Xe(t,e,r,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var f in c)u[f]=Xt(f,c,e||n);else o(r.attrs)&&ze(u,r.attrs),o(r.props)&&ze(u,r.props);var l=new qe(r,u,a,i,t),p=s.render.call(null,l._c,l);if(p instanceof dt)return We(p,r,l.parent,s,l);if(Array.isArray(p)){for(var h=_e(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=We(h[v],r,l.parent,s,l);return d}}function We(t,e,n,r,o){var i=_t(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function ze(t,e){for(var n in e)t[S(n)]=e[n]}Ve(qe.prototype);var Je={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Je.prepatch(n,n)}else{var r=t.componentInstance=Ye(t,Sn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Cn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Rn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Vn(n):$n(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Tn(e,!0):e.$destroy())}},Ge=Object.keys(Je);function Ke(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=dn(f,c),void 0===t))return hn(f,e,n,a,s);e=e||{},pr(t),o(e.model)&&tn(t.options,e);var l=ve(e,t,s);if(i(t.options.functional))return Xe(t,l,e,n,a);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Qe(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:a},f);return v}}}function Ye(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<Ge.length;n++){var r=Ge[n],o=e[r],i=Je[r];o===i||o&&o._merged||(e[r]=o?Ze(i,o):i)}}function Ze(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var en=1,nn=2;function rn(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=nn),on(t,e,n,r,o)}function on(t,e,n,r,i){if(o(n)&&o(n.__ob__))return gt();if(o(n)&&o(n.is)&&(e=n.is),!e)return gt();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===nn?r=_e(r):i===en&&(r=ye(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||U.getTagNamespace(e),a=U.isReservedTag(e)?new dt(U.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=qt(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Ke(u,n,t,r,e)):a=Ke(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&an(a,s),o(n)&&sn(n),a):gt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];o(u.tag)&&(r(u.ns)||i(n)&&"svg"!==u.tag)&&an(u,e,n)}}function sn(t){u(t.style)&&fe(t.style),u(t.class)&&fe(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Ee(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return rn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return rn(t,e,n,r,o,!0)};var i=r&&r.data;$t(t,"$attrs",i&&i.attrs||n,null,!0),$t(t,"$listeners",e._parentListeners||n,null,!0)}var cn,fn=null;function ln(t){Ve(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=ke(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{fn=e,t=r.call(e._renderProxy,e.$createElement)}catch(eo){Kt(eo,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=gt()),t.parent=o,t}}function pn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function hn(t,e,n,r,o){var i=gt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function dn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=fn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,f=null;n.$on("hook:destroyed",function(){return _(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},p=L(function(n){t.resolved=pn(n,e),s?a.length=0:l(!0)}),d=L(function(e){o(t.errorComp)&&(t.error=!0,l(!0))}),v=t(p,d);return u(v)&&(h(v)?r(t.resolved)&&v.then(p,d):h(v.component)&&(v.component.then(p,d),o(v.error)&&(t.errorComp=pn(v.error,e)),o(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function _n(t,e){cn.$on(t,e)}function mn(t,e){cn.$off(t,e)}function bn(t,e){var n=cn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function wn(t,e,n){cn=t,de(e,n||{},_n,mn,bn,t),cn=void 0}function An(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?T(n):n;for(var r=T(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Yt(n[i],e,r,e,o)}return e}}var Sn=null;function En(t){var e=Sn;return Sn=t,function(){Sn=e}}function On(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=En(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Rn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Rn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Cn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Et(!1);for(var f=t._props,l=t.$options._propKeys||[],p=0;p<l.length;p++){var h=l[p],d=t.$options.props;f[h]=Xt(h,d,e,t)}Et(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,wn(t,r,v),c&&(t.$slots=Ee(i,o.context),t.$forceUpdate())}function xn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function $n(t,e){if(e){if(t._directInactive=!1,xn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)$n(t.$children[n]);Rn(t,"activated")}}function Tn(t,e){if((!e||(t._directInactive=!0,!xn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Tn(t.$children[n]);Rn(t,"deactivated")}}function Rn(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Yt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Pn=[],jn=[],Dn={},Bn=!1,Nn=!1,In=0;function Ln(){In=Pn.length=jn.length=0,Dn={},Bn=Nn=!1}var Mn=Date.now;if(G&&!Z){var Hn=window.performance;Hn&&"function"===typeof Hn.now&&Mn()>document.createEvent("Event").timeStamp&&(Mn=function(){return Hn.now()})}function Un(){var t,e;for(Mn(),Nn=!0,Pn.sort(function(t,e){return t.id-e.id}),In=0;In<Pn.length;In++)t=Pn[In],t.before&&t.before(),e=t.id,Dn[e]=null,t.run();var n=jn.slice(),r=Pn.slice();Ln(),qn(n),Fn(r),it&&U.devtools&&it.emit("flush")}function Fn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Rn(r,"updated")}}function Vn(t){t._inactive=!1,jn.push(t)}function qn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,$n(t[e],!0)}function Xn(t){var e=t.id;if(null==Dn[e]){if(Dn[e]=!0,Nn){var n=Pn.length-1;while(n>In&&Pn[n].id>t.id)n--;Pn.splice(n+1,0,t)}else Pn.push(t);Bn||(Bn=!0,ue(Un))}}var Wn=0,zn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Wn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=j)),this.value=this.lazy?void 0:this.get()};zn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(eo){if(!this.user)throw eo;Kt(eo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),ht(),this.cleanupDeps()}return t},zn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},zn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},zn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Xn(this)},zn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(eo){Kt(eo,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},zn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},zn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},zn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Jn={enumerable:!0,configurable:!0,get:j,set:j};function Gn(t,e,n){Jn.get=function(){return this[e][n]},Jn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Jn)}function Kn(t){t._watchers=[];var e=t.$options;e.props&&Yn(t,e.props),e.methods&&ir(t,e.methods),e.data?Qn(t):xt(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Yn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||Et(!1);var a=function(i){o.push(i);var a=Xt(i,e,n,t);$t(r,i,a),i in t||Gn(t,"_props",i)};for(var s in e)a(s);Et(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?Zn(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||V(i)||Gn(t,"_data",i)}xt(e,!0)}function Zn(t,e){pt();try{return t.call(e,e)}catch(eo){return Kt(eo,e,"data()"),{}}finally{ht()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new zn(t,a||j,j,tr)),o in t||nr(t,o,i)}}function nr(t,e,n){var r=!ot();"function"===typeof n?(Jn.get=r?rr(e):or(n),Jn.set=j):(Jn.get=n.get?r&&!1!==n.cache?rr(e):or(n.get):j,Jn.set=n.set||j),Object.defineProperty(t,e,Jn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.SharedObject.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ir(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?j:$(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)sr(t,n,r[o]);else sr(t,n,r)}}function sr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Tt,t.prototype.$delete=Rt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return sr(r,t,e,n);n=n||{},n.user=!0;var o=new zn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Kt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var cr=0;function fr(t){t.prototype._init=function(t){var e=this;e._uid=cr++,e._isVue=!0,t&&t._isComponent?lr(e,t):e.$options=Vt(pr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,On(e),yn(e),un(e),Rn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Ae(e),Kn(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&Rn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function lr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pr(t){var e=t.options;if(t.super){var n=pr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=hr(t);o&&R(t.extendOptions,o),e=t.options=Vt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=T(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function gr(t){t.mixin=function(t){return this.options=Vt(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Vt(n.options,t),a["super"]=n,a.options.props&&_r(a),a.options.computed&&mr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=R({},a.options),o[r]=a,a}}function _r(t){var e=t.options.props;for(var n in e)Gn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function br(t){M.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function wr(t){return t&&(t.Ctor.options.name||t.tag)}function Ar(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Sr(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=wr(a.componentOptions);s&&!e(s)&&Er(n,i,r,o)}}}function Er(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,_(n,e)}fr(dr),ur(dr),An(dr),kn(dr),ln(dr);var Or=[String,RegExp,Array],kr={name:"keep-alive",abstract:!0,props:{include:Or,exclude:Or,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Er(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Sr(t,function(t){return Ar(e,t)})}),this.$watch("exclude",function(e){Sr(t,function(t){return!Ar(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var r=wr(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!Ar(i,r))||a&&r&&Ar(a,r))return e;var s=this,u=s.cache,c=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[f]?(e.componentInstance=u[f].componentInstance,_(c,f),c.push(f)):(u[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&Er(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Cr={KeepAlive:kr};function xr(t){var e={get:function(){return U}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:R,mergeOptions:Vt,defineReactive:$t},t.set=Tt,t.delete=Rt,t.nextTick=ue,t.observable=function(t){return xt(t),t},t.options=Object.create(null),M.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,R(t.options.components,Cr),vr(t),gr(t),yr(t),br(t)}xr(dr),Object.defineProperty(dr.prototype,"$isServer",{get:ot}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:qe}),dr.version="2.6.10";var $r="[object Array]",Tr="[object Object]";function Rr(t,e){var n={};return Pr(t,e),jr(t,e,"",n),n}function Pr(t,e){if(t!==e){var n=Br(t),r=Br(e);if(n==Tr&&r==Tr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Pr(i,e[o])}}else n==$r&&r==$r&&t.length>=e.length&&e.forEach(function(e,n){Pr(t[n],e)})}}function jr(t,e,n,r){if(t!==e){var o=Br(t),i=Br(e);if(o==Tr)if(i!=Tr||Object.keys(t).length<Object.keys(e).length)Dr(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Br(i),u=Br(a);if(s!=$r&&s!=Tr)i!=e[o]&&Dr(r,(""==n?"":n+".")+o,i);else if(s==$r)u!=$r?Dr(r,(""==n?"":n+".")+o,i):i.length<a.length?Dr(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){jr(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Tr)if(u!=Tr||Object.keys(i).length<Object.keys(a).length)Dr(r,(""==n?"":n+".")+o,i);else for(var c in i)jr(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==$r?i!=$r?Dr(r,n,t):t.length<e.length?Dr(r,n,t):t.forEach(function(t,o){jr(t,e[o],n+"["+o+"]",r)}):Dr(r,n,t)}}function Dr(t,e,n){t[e]=n}function Br(t){return Object.prototype.toString.call(t)}function Nr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Ir(t){return Pn.find(function(e){return t._watcher===e})}function Lr(t,e){if(!t.__next_tick_pending&&!Ir(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(eo){Kt(eo,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Mr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Hr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Mr(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Rr(o,i);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Nr(n)})):Nr(this)}};function Ur(){}function Fr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Ur),t.$options.render||(t.$options.render=Ur),"mp-toutiao"!==t.mpHost&&Rn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new zn(t,r,j,{before:function(){t._isMounted&&!t._isDestroyed&&Rn(t,"beforeUpdate")}},!0),n=!1,t}function Vr(t,e){return o(t)||o(e)?qr(t,Xr(e)):""}function qr(t,e){return t?e?t+" "+e:t:e||""}function Xr(t){return Array.isArray(t)?Wr(t):u(t)?zr(t):"string"===typeof t?t:""}function Wr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Xr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function zr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Jr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Gr(t){return Array.isArray(t)?P(t):"string"===typeof t?Jr(t):t}var Kr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Yr(t[r],n.slice(1).join("."))}function Qr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:T(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Lr(this,t)},Kr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=we,t.prototype.__init_injections=Ae,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Yt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yr(e||this,t)},t.prototype.__get_class=function(t,e){return Vr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Gr(t),r=e?R(e,n):n;return Object.keys(r).map(function(t){return k(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(u(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var Zr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function to(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Zr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Zr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Zr}dr.prototype.__patch__=Hr,dr.prototype.$mount=function(t,e){return Fr(this,t,e)},to(dr),Qr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Ee,e.createPage=Se,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return h(t)||p(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function _(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var A=/-(\w)/g,S=w(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),E=["invoke","success","fail","complete","returnValue"],O={},k={};function C(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?x(n):n}function x(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function $(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function T(t,e){Object.keys(e).forEach(function(n){-1!==E.indexOf(n)&&g(e[n])&&(t[n]=C(t[n],e[n]))})}function R(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==E.indexOf(n)&&g(e[n])&&$(t[n],e[n])})}function P(t,e){"string"===typeof t&&_(e)?T(k[t]||(k[t]={}),e):_(t)&&T(O,t)}function j(t,e){"string"===typeof t?_(e)?R(k[t],e):delete k[t]:_(t)&&R(O,t)}function D(t){return function(e){return t(e)||e}}function B(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function N(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(D(o));else{var i=o(e);if(B(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){N(t[n],e).then(function(t){return g(r)&&r(t)||t})}}}),e}function L(t,e){var n=[];Array.isArray(O.returnValue)&&n.push.apply(n,f(O.returnValue));var r=k[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function M(t){var e=Object.create(null);Object.keys(O).forEach(function(t){"returnValue"!==t&&(e[t]=O[t].slice())});var n=k[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function H(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=M(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=N(a.invoke,n);return s.then(function(t){return e.apply(void 0,[I(a,t)].concat(o))})}return e.apply(void 0,[I(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var U={returnValue:function(t){return B(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,V=/^create|Manager$/,q=/^on/;function X(t){return V.test(t)}function W(t){return F.test(t)}function z(t){return q.test(t)}function J(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function G(t){return!(X(t)||W(t)||z(t))}function K(t,e){return G(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return g(n.success)||g(n.fail)||g(n.complete)?L(t,H.apply(void 0,[t,e,n].concat(o))):L(t,J(new Promise(function(r,i){H.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Y=1e-4,Q=750,Z=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Z="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Q*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Y),0===n?1!==et&&Z?.5:1:t<0?-n:n}var ot={promiseInterceptor:U},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:P,removeInterceptor:j}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(pt(t,r,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(_(e)){var i=!0===o?e:{};for(var a in g(n)&&(n=n(e,i)||{}),e)if(m(n,a)){var s=n[a];g(s)&&(s=s(e[a],e,i)),s?y(s)?i[s]=e[a]:_(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?i[a]=ft(t,e[a],r):o||(i[a]=e[a]);return i}return g(e)&&(e=ft(t,e,r)),e}function pt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(at.returnValue)&&(e=at.returnValue(t,e)),lt(t,e,n,{},r)}function ht(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var o=n;g(n)&&(o=n(e)),e=lt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return W(t)?pt(t,a,o.returnValue,X(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(o),g(r)&&r(o)}}vt.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function _t(t,e,n){return t[e].apply(t,n)}function mt(){return _t(yt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return _t(yt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return _t(yt(),"$once",Array.prototype.slice.call(arguments))}function At(){return _t(yt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:mt,$off:bt,$once:wt,$emit:At});function Et(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Ot(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;Et("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function kt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Ot(e),e}var Ct=Object.freeze({getSubNVueById:kt,requireNativePlugin:Et}),xt=Page,$t=Component,Tt=/:/g,Rt=w(function(t){return S(t.replace(Tt,"-"))});function Pt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[Rt(n)].concat(o))}}}function jt(t,e){var n=e[t];e[t]=n?function(){Pt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Pt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return jt("onLoad",t),xt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return jt("created",t),$t(t)};var Dt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Bt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Nt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Nt(t,e)}):void 0}function It(t,e,n){e.forEach(function(e){Nt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Lt(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Mt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ht(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Ut(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return _(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function Vt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function qt(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),_(r)&&r.props&&a.push(e({properties:Wt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){_(t)&&t.props&&a.push(e({properties:Wt(t.props,!0)}))}),a}function Xt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Wt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Vt(t)}}):_(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(_(r)){var o=r["default"];g(o)&&(o=o()),r.type=Xt(e,r.type),n[e]={type:-1!==Ft.indexOf(r.type)?r.type:null,value:o,observer:Vt(e)}}else{var i=Xt(e,r);n[e]={type:-1!==Ft.indexOf(i)?i:null,observer:Vt(e)}}}),n}function zt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),_(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Jt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):_(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Gt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Jt(t,e)}),r}function Kt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Yt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Gt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Kt(t)):"string"===typeof t&&m(s,t)?u.push(s[t]):u.push(t)}),u}var Qt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=zt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Zt;r=s?r.slice(1):r;var u=r.charAt(0)===Qt;r=u?r.slice(1):r,a&&te(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var a=o[r];if(!g(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}i.push(a.apply(o,Yt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Bt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=t.$options.globalData||{},It(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function le(t){return re(t,{mocks:oe,initRefs:ce})}var pe=["onUniNViewMessage"];function he(t){var e=le(t);return It(e,pe),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=Lt(r.default,t),s=i(a,2),u=s[0],c=s[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:Ut(c,r.default.prototype),behaviors:qt(c,ae),properties:Wt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ht(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Mt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){f.methods[t]=function(e){return this.$vm[t](e)}}),n?f:[f,u]}function ge(t){return ve(t,{isPage:se,initRelation:ue})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var _e=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ye(t);return It(n.methods,_e,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ue})}_e.push.apply(_e,Dt);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ae(t){var e=be(t);return It(e.methods,we),e}function Se(t){return Component(Ae(t))}function Ee(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Oe={};Object.keys(it).forEach(function(t){Oe[t]=it[t]}),Object.keys(St).forEach(function(t){Oe[t]=St[t]}),Object.keys(Ct).forEach(function(t){Oe[t]=K(t,Ct[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Oe[t]=K(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Oe,t.UniEmitter=St),wx.createApp=de,wx.createPage=Se,wx.createComponent=Ee;var ke=Oe,Ce=ke;e.default=Ce}).call(this,n("c8ba"))},8159:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/first/first":{navigationStyle:"custom"},"pages/index/index":{navigationStyle:"custom",enablePullDownRefresh:!0},"pages/channel/channel":{navigationStyle:"custom",onReachBottomDistance:50,enablePullDownRefresh:!0},"pages/vipCenter/vipCenter":{navigationBarTitleText:"会员充值"},"pages/shortMovie/shortMovie":{navigationBarTitleText:"发现",onReachBottomDistance:50,enablePullDownRefresh:!0},"pages/selfCenter/selfCenter":{navigationBarTitleText:"个人中心",colorType:"grey"},"pages/search/search":{navigationStyle:"custom",onReachBottomDistance:50},"pages/playRecord/playRecord":{onReachBottomDistance:50,navigationBarTitleText:"观看记录"},"pages/collect/collect":{onReachBottomDistance:50,navigationBarTitleText:"我的收藏"},"pages/movieDetails/movieDetails":{navigationBarTitleText:"播放详情"},"pages/moreMovie/moreMovie":{navigationBarTitleText:"",onReachBottomDistance:50,enablePullDownRefresh:!0},"pages/kefu/kefu":{navigationBarTitleText:"客服"},"pages/aboutUs/aboutUs":{navigationBarTitleText:"关于我们"},"pages/agreement/agreement":{navigationBarTitleText:"用户协议"},"pages/privacy/privacy":{navigationBarTitleText:"隐私政策"},"pages/service/service":{navigationBarTitleText:"服务条款"},"pages/extension/extension":{navigationStyle:"custom",titleNView:{titleText:"推广",buttons:[{text:"奖励规则",fontSize:"30upx",width:"100px"}]}},"pages/rulers/rulers":{navigationBarTitleText:"奖励规则"},"pages/feedback/feedback":{navigationBarTitleText:"意见反馈"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"夜猫先生",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#F8F8F8",animationType:"fade-in"}};e.default=r},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},"8a9c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={};(function(){function e(t){var e,n,r;return t<128?[t]:t<2048?(e=192+(t>>6),n=128+(63&t),[e,n]):(e=224+(t>>12),n=128+(t>>6&63),r=128+(63&t),[e,n,r])}function r(t){for(var n=[],r=0;r<t.length;r++)for(var o=t.charCodeAt(r),i=e(o),a=0;a<i.length;a++)n.push(i[a]);return n}function o(t,e){this.typeNumber=-1,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=r(t),this.make()}o.prototype={constructor:o,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(this.modules[t+n][e+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},createQrcode:function(){for(var t=0,e=0,n=null,r=0;r<8;r++){this.makeImpl(r);var o=s.getLostPoint(this);(0==r||t>o)&&(t=o,e=r,n=this.modules)}this.modules=n,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var r=t[e],o=t[n];if(null==this.modules[r][o])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[r+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r,this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},setupTypeInfo:function(t,e){for(var n=i[this.errorCorrectLevel]<<3|e,r=s.getBCHTypeInfo(n),o=0;o<15;o++){var a=!t&&1==(r>>o&1);o<6?this.modules[o][8]=a:o<8?this.modules[o+1][8]=a:this.modules[this.moduleCount-15+o][8]=a;a=!t&&1==(r>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=a:o<9?this.modules[8][15-o-1+1]=a:this.modules[8][15-o-1]=a}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new p,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var n=0,r=this.utf8bytes.length;n<r;n++)t.put(this.utf8bytes[n],8);t.length+4<=8*this.totalDataCount&&t.put(0,4);while(t.length%8!=0)t.putBit(!1);while(1){if(t.length>=8*this.totalDataCount)break;if(t.put(o.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(o.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,n=0,r=0,o=this.rsBlock.length/3,i=new Array,a=0;a<o;a++)for(var u=this.rsBlock[3*a+0],c=this.rsBlock[3*a+1],l=this.rsBlock[3*a+2],p=0;p<u;p++)i.push([l,c]);for(var h=new Array(i.length),d=new Array(i.length),v=0;v<i.length;v++){var g=i[v][0],y=i[v][1]-g;n=Math.max(n,g),r=Math.max(r,y),h[v]=new Array(g);for(a=0;a<h[v].length;a++)h[v][a]=255&t.buffer[a+e];e+=g;var _=s.getErrorCorrectPolynomial(y),m=new f(h[v],_.getLength()-1),b=m.mod(_);d[v]=new Array(_.getLength()-1);for(a=0;a<d[v].length;a++){var w=a+b.getLength()-d[v].length;d[v][a]=w>=0?b.get(w):0}}var A=new Array(this.totalDataCount),S=0;for(a=0;a<n;a++)for(v=0;v<i.length;v++)a<h[v].length&&(A[S++]=h[v][a]);for(a=0;a<r;a++)for(v=0;v<i.length;v++)a<d[v].length&&(A[S++]=d[v][a]);return A},mapData:function(t,e){for(var n=-1,r=this.moduleCount-1,o=7,i=0,a=this.moduleCount-1;a>0;a-=2){6==a&&a--;while(1){for(var u=0;u<2;u++)if(null==this.modules[r][a-u]){var c=!1;i<t.length&&(c=1==(t[i]>>>o&1));var f=s.getMask(e,r,a-u);f&&(c=!c),this.modules[r][a-u]=c,o--,-1==o&&(i++,o=7)}if(r+=n,r<0||this.moduleCount<=r){r-=n,n=-n;break}}}}},o.PAD0=236,o.PAD1=17;for(var i=[1,0,3,2],a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return s.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case a.PATTERN000:return(e+n)%2==0;case a.PATTERN001:return e%2==0;case a.PATTERN010:return n%3==0;case a.PATTERN011:return(e+n)%3==0;case a.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case a.PATTERN101:return e*n%2+e*n%3==0;case a.PATTERN110:return(e*n%2+e*n%3)%2==0;case a.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new f([1],0),n=0;n<t;n++)e=e.multiply(new f([1,u.gexp(n)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,r=0,o=0;o<e;o++)for(var i=0,a=t.modules[o][0],s=0;s<e;s++){var u=t.modules[o][s];if(s<e-6&&u&&!t.modules[o][s+1]&&t.modules[o][s+2]&&t.modules[o][s+3]&&t.modules[o][s+4]&&!t.modules[o][s+5]&&t.modules[o][s+6]&&(s<e-10?t.modules[o][s+7]&&t.modules[o][s+8]&&t.modules[o][s+9]&&t.modules[o][s+10]&&(n+=40):s>3&&t.modules[o][s-1]&&t.modules[o][s-2]&&t.modules[o][s-3]&&t.modules[o][s-4]&&(n+=40)),o<e-1&&s<e-1){var c=0;u&&c++,t.modules[o+1][s]&&c++,t.modules[o][s+1]&&c++,t.modules[o+1][s+1]&&c++,0!=c&&4!=c||(n+=3)}a^u?i++:(a=u,i>=5&&(n+=3+i-5),i=1),u&&r++}for(s=0;s<e;s++)for(i=0,a=t.modules[0][s],o=0;o<e;o++){u=t.modules[o][s];o<e-6&&u&&!t.modules[o+1][s]&&t.modules[o+2][s]&&t.modules[o+3][s]&&t.modules[o+4][s]&&!t.modules[o+5][s]&&t.modules[o+6][s]&&(o<e-10?t.modules[o+7][s]&&t.modules[o+8][s]&&t.modules[o+9][s]&&t.modules[o+10][s]&&(n+=40):o>3&&t.modules[o-1][s]&&t.modules[o-2][s]&&t.modules[o-3][s]&&t.modules[o-4][s]&&(n+=40)),a^u?i++:(a=u,i>=5&&(n+=3+i-5),i=1)}var f=Math.abs(100*r/e/e-50)/5;return n+=10*f,n}},u={glog:function(t){if(t<1)throw new Error("glog("+t+")");return u.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return u.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},c=0;c<8;c++)u.EXP_TABLE[c]=1<<c;for(c=8;c<256;c++)u.EXP_TABLE[c]=u.EXP_TABLE[c-4]^u.EXP_TABLE[c-5]^u.EXP_TABLE[c-6]^u.EXP_TABLE[c-8];for(c=0;c<255;c++)u.LOG_TABLE[u.EXP_TABLE[c]]=c;function f(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var n=0;while(n<t.length&&0==t[n])n++;this.num=new Array(t.length-n+e);for(var r=0;r<t.length-n;r++)this.num[r]=t[r+n]}f.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<t.getLength();r++)e[n+r]^=u.gexp(u.glog(this.get(n))+u.glog(t.get(r)));return new f(e,0)},mod:function(t){var e=this.getLength(),n=t.getLength();if(e-n<0)return this;for(var r=new Array(e),o=0;o<e;o++)r[o]=this.get(o);while(r.length>=n){var i=u.glog(r[0])-u.glog(t.get(0));for(o=0;o<t.getLength();o++)r[o]^=u.gexp(u.glog(t.get(o))+i);while(0==r[0])r.shift()}return new f(r,0)}};var l=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function p(){this.buffer=new Array,this.length=0}o.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=l[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var n=e.length/3,r=0,o=0;o<n;o++){var i=e[3*o+0],a=e[3*o+2];r+=a*i}var s=t>9?2:1;if(this.utf8bytes.length+s<r||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=r;break}}},p.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var n=0;n<e;n++)this.putBit(t>>>e-n-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var h=[];n=function(e){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:e.canvasId,context:e.context,usingComponents:e.usingComponents,showLoading:e.showLoading,loadingText:e.loadingText},"string"===typeof e&&(e={text:e}),e)for(var n in e)this.options[n]=e[n];for(var r=null,i=(n=0,h.length);n<i;n++)if(h[n].text==this.options.text&&h[n].text.correctLevel==this.options.correctLevel){r=h[n].obj;break}n==i&&(r=new o(this.options.text,this.options.correctLevel),h.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:r}));var a=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground},s=function(e){e.showLoading&&t.showLoading({title:e.loadingText,mask:!0});for(var n=t.createCanvasContext(e.canvasId,e.context),o=r.getModuleCount(),i=e.size,s=e.imageSize,c=(i/o).toPrecision(4),f=(i/o).toPrecision(4),l=0;l<o;l++)for(var p=0;p<o;p++){var h=Math.ceil((p+1)*c)-Math.floor(p*c),d=Math.ceil((l+1)*c)-Math.floor(l*c),v=a({row:l,col:p,count:o,options:e});n.setFillStyle(r.modules[l][p]?v:e.background),n.fillRect(Math.round(p*c),Math.round(l*f),h,d)}if(e.image){var g=function(t,n,r,o,i,a,s,u,c){t.setLineWidth(s),t.setFillStyle(e.background),t.setStrokeStyle(e.background),t.beginPath(),t.moveTo(n+a,r),t.arcTo(n+o,r,n+o,r+a,a),t.arcTo(n+o,r+i,n+o-a,r+i,a),t.arcTo(n,r+i,n,r+i-a,a),t.arcTo(n,r,n+a,r,a),t.closePath(),u&&t.fill(),c&&t.stroke()},y=Number(((i-s)/2).toFixed(2)),_=Number(((i-s)/2).toFixed(2));g(n,y,_,s,s,2,6,!0,!0),n.drawImage(e.image,y,_,s,s)}setTimeout(function(){n.draw(!0,function(){setTimeout(function(){t.canvasToTempFilePath({width:e.width,height:e.height,destWidth:e.width,destHeight:e.height,canvasId:e.canvasId,quality:Number(1),success:function(t){e.cbResult&&(u(t.tempFilePath)?u(t.apFilePath)?e.cbResult(t.tempFilePath):e.cbResult(t.apFilePath):e.cbResult(t.tempFilePath))},fail:function(t){e.cbResult&&e.cbResult(t)},complete:function(){t.hideLoading()}},e.context)},e.text.length+100)})},e.usingComponents?0:150)};s(this.options);var u=function(t){var e=typeof t,n=!1;return"number"==e&&""==String(t)?n=!0:"undefined"==e?n=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(n=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(n=!0):"function"==e&&(n=!1),n}},n.prototype.clear=function(e){var n=t.createCanvasContext(this.options.canvasId,this.options.context);n.clearRect(0,0,this.options.size,this.options.size),n.draw(!1,function(){e&&e()})}})();var r=n;e.default=r}).call(this,n("6e42")["default"])},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var l=e.version,p="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,g=10,y="__DC_STAT_UUID",_="__DC_UUID_VALUE";function m(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=_}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,_)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},A=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},E=function(){var e="";return"wx"!==S()&&"qq"!==S()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},O=function(){return"n"===S()?plus.runtime.version:""},k=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},C=function(e){var n=S(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},x="First__Visit__Time",$="Last__Visit__Time",T=function(){var e=t.getStorageSync(x),n=0;return e?n=e:(n=A(),t.setStorageSync(x,n),t.removeStorageSync($)),n},R=function(){var e=t.getStorageSync($),n=0;return n=e||"",t.setStorageSync($,A()),n},P="__page__residence__time",j=0,D=0,B=function(){return j=A(),"n"===S()&&t.setStorageSync(P,A()),j},N=function(){return D=A(),"n"===S()&&(j=t.getStorageSync(P)),D-j},I="Total__Visit__Count",L=function(){var e=t.getStorageSync(I),n=1;return e&&(n=e,n++),t.setStorageSync(I,n),n},M=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},H=0,U=0,F=function(){var t=(new Date).getTime();return H=t,U=0,t},V=function(){var t=(new Date).getTime();return U=t,t},q=function(t){var e=0;if(0!==H&&(e=U-H),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},X=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===S()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},W=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===S()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},z=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},J=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},G=n("8159").default,K=n("2b19").default||n("2b19"),Y=t.getSystemInfoSync(),Q=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:S(),mpn:E(),ak:K.appid,usv:l,v:O(),ch:k(),cn:"",pn:"",ct:"",t:A(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return f(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){V();var t=q("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,V();var n=q();F();var r=W(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=W(this),e=X();if(this._navigationBarTitle.config=G&&G.pages[e]&&G.pages[e].titleNView&&G.pages[e].titleNView.titleText||G&&G.pages[e]&&G.pages[e].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=t);V(),this._lastPageRoute=t;var n=q("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){V();var t=q("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=A(),this.statData.sc=C(t.scene),this.statData.fvts=T(),this.statData.lvts=R(),this.statData.tvc=L(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:A(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;K.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=A(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===S()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",a),!(N()<g)||n){var s=this._reportingRequestData;"n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")),B();var u=[],c=[],f=[],p=function(t){var e=s[t];e.forEach(function(e){var n=w(e);0===t?u.push(n):3===t?f.push(n):c.push(n)})};for(var h in s)p(h);u.push.apply(u,c.concat(f));var d={usv:l,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(M(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){J(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function n(){var e;return u(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),f(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),f(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,B(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,z(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,z(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(n)}}]),n}(Q),tt=Z.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c="object"===typeof t,f=e.regeneratorRuntime;if(f)c&&(t.exports=f);else{f=e.regeneratorRuntime=c?t.exports:{},f.wrap=b;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,_=y&&y(y(P([])));_&&_!==r&&o.call(_,a)&&(g=_);var m=E.prototype=A.prototype=Object.create(g);S.prototype=m.constructor=E,E.constructor=S,E[u]=S.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},O(k.prototype),k.prototype[s]=function(){return this},f.AsyncIterator=k,f.async=function(t,e,n,r){var o=new k(b(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(m),m[u]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=P,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var o=e&&e.prototype instanceof A?e:A,i=Object.create(o.prototype),a=new R(r||[]);return i._invoke=C(t,n,a),i}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function A(){}function S(){}function E(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(n,r,i,a){var s=w(t[n],t,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(s.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function C(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return j()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=w(t,e,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}function x(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,x(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=w(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},b149:function(module,exports,__webpack_require__){"use strict";(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(t,e){module.exports=e(t)})("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:void 0,function(global){global=global||{};var _Base64=global.Base64,version="2.5.1",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(err){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(t){for(var e={},n=0,r=t.length;n<r;n++)e[t.charAt(n)]=n;return e}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(t){if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?fromCharCode(192|e>>>6)+fromCharCode(128|63&e):fromCharCode(224|e>>>12&15)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e)}e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return fromCharCode(240|e>>>18&7)+fromCharCode(128|e>>>12&63)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(t){return t.replace(re_utob,cb_utob)},cb_encode=function(t){var e=[0,2,1][t.length%3],n=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0),r=[b64chars.charAt(n>>>18),b64chars.charAt(n>>>12&63),e>=2?"=":b64chars.charAt(n>>>6&63),e>=1?"=":b64chars.charAt(63&n)];return r.join("")},btoa=global.btoa?function(t){return global.btoa(t)}:function(t){return t.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(t){return(t.constructor===buffer.constructor?t:buffer.from(t)).toString("base64")}:function(t){return(t.constructor===buffer.constructor?t:new buffer(t)).toString("base64")}:function(t){return btoa(utob(t))},encode=function(t,e){return e?_encode(String(t)).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):_encode(String(t))},encodeURI=function(t){return encode(t,!0)},re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),cb_btou=function(t){switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),n=e-65536;return fromCharCode(55296+(n>>>10))+fromCharCode(56320+(1023&n));case 3:return fromCharCode((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return fromCharCode((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},btou=function(t){return t.replace(re_btou,cb_btou)},cb_decode=function(t){var e=t.length,n=e%4,r=(e>0?b64tab[t.charAt(0)]<<18:0)|(e>1?b64tab[t.charAt(1)]<<12:0)|(e>2?b64tab[t.charAt(2)]<<6:0)|(e>3?b64tab[t.charAt(3)]:0),o=[fromCharCode(r>>>16),fromCharCode(r>>>8&255),fromCharCode(255&r)];return o.length-=[0,0,2,1][n],o.join("")},_atob=global.atob?function(t){return global.atob(t)}:function(t){return t.replace(/\S{1,4}/g,cb_decode)},atob=function(t){return _atob(String(t).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(t){return(t.constructor===buffer.constructor?t:buffer.from(t,"base64")).toString()}:function(t){return(t.constructor===buffer.constructor?t:new buffer(t,"base64")).toString()}:function(t){return btou(_atob(t))},decode=function(t){return _decode(String(t).replace(/[-_]/g,function(t){return"-"==t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var t=global.Base64;return global.Base64=_Base64,t};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"===typeof Object.defineProperty){var noEnum=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)})),Object.defineProperty(String.prototype,"toBase64",noEnum(function(t){return encode(this,t)})),Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,!0)}))}}return global["Meteor"]&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}})}).call(this,__webpack_require__("c8ba"))},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},bee6:function(t,e,n){},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return r.exec(t).slice(1)};function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,r="/"===a.charAt(0))}return e=n(i(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===a(t,-1);return t=n(i(t.split("/"),function(t){return!!t}),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),a=Math.min(o.length,i.length),s=a,u=0;u<a;u++)if(o[u]!==i[u]){s=u;break}var c=[];for(u=s;u<o.length;u++)c.push("..");return c=c.concat(i.slice(s)),c.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return o(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/allMovie';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/allMovie.js';

define('components/allMovie.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/allMovie"], {
  "23d5": function d5(e, t, n) {},
  5182: function _(e, t, n) {
    "use strict";

    n.r(t);
    var a = n("839b"),
        i = n.n(a);

    for (var r in a) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(r);
    }

    t["default"] = i.a;
  },
  "839b": function b(e, t, n) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a = r(n("a34a")),
          i = r(n("040e"));

      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function o(e, t, n, a, i, r, o) {
        try {
          var u = e[r](o),
              s = u.value;
        } catch (c) {
          return void n(c);
        }

        u.done ? t(s) : Promise.resolve(s).then(a, i);
      }

      function u(e) {
        return function () {
          var t = this,
              n = arguments;
          return new Promise(function (a, i) {
            var r = e.apply(t, n);

            function u(e) {
              o(r, a, i, u, s, "next", e);
            }

            function s(e) {
              o(r, a, i, u, s, "throw", e);
            }

            u(void 0);
          });
        };
      }

      var s = function s() {
        return n.e("components/moreMovieList").then(n.bind(null, "946f"));
      },
          c = {
        name: "allMovie",
        components: {
          moreMovieList: s
        },
        props: ["movieTypeObject"],
        data: function data() {
          return {
            moreMovieArray: [],
            currentPage: 1,
            topStatus: "",
            loading: !1,
            allLoaded: !1
          };
        },
        onLoad: function onLoad() {
          this.getMoreMovieInfo(this.movieTypeObject.tid, this.currentPage);
        },
        methods: {
          getMoreMovieInfo: function () {
            var t = u(a.default.mark(function t(n, r) {
              var o;
              return a.default.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      return e.showLoading({
                        title: "加载中...",
                        icon: "none"
                      }), t.next = 3, i.default.getInfoByAxios("get", "https://api.vutq7.cnl/index.php?g=api&m=video&a=video_type_list", {
                        channel: i.default.config.channel,
                        tid: parseInt(n),
                        uid: i.default.judgeParams().uid,
                        page: r
                      }, !0);

                    case 3:
                      o = t.sent, Indicator.close(), this.moreMovieArray = o.data.list;

                    case 6:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function n(e, n) {
              return t.apply(this, arguments);
            }

            return n;
          }(),
          loadMore: function () {
            var e = u(a.default.mark(function e() {
              var t, n;
              return a.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return this.loading = !0, this.allLoaded = !1, this.currentPage++, e.next = 5, i.default.getInfoByAxios("get", "https://api.vutq7.cnl/index.php?g=api&m=video&a=video_type_list", {
                        channel: i.default.config.channel,
                        tid: parseInt(this.movieTypeObject.tid),
                        uid: i.default.judgeParams().uid,
                        page: this.currentPage
                      }, !0);

                    case 5:
                      if (t = e.sent, t.data.list.length > 0) for (n = 0; n < t.data.list.length; n++) {
                        this.moreMovieArray.push(t.data.list[n]), this.loading = !1;
                      } else this.loading = !0, this.allLoaded = !0;

                    case 7:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function t() {
              return e.apply(this, arguments);
            }

            return t;
          }(),
          refresh: function () {
            var e = u(a.default.mark(function e() {
              var t,
                  n = this;
              return a.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return this.currentPage = 1, e.next = 3, i.default.getInfoByAxios("get", "https://api.vutq7.cnl/index.php?g=api&m=video&a=video_type_list", {
                        channel: i.default.config.channel,
                        tid: parseInt(this.movieTypeObject.tid),
                        uid: i.default.judgeParams().uid,
                        page: this.currentPage
                      }, !0);

                    case 3:
                      t = e.sent, setTimeout(function () {
                        n.moreMovieArray = t.data.list, n.$refs.refreshComponentChannel.onTopLoaded(), n.loading = !1, n.allLoaded = !1;
                      }, 600);

                    case 5:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function t() {
              return e.apply(this, arguments);
            }

            return t;
          }()
        }
      };

      t.default = c;
    }).call(this, n("6e42")["default"]);
  },
  "8b59": function b59(e, t, n) {
    "use strict";

    n.r(t);
    var a = n("8e06"),
        i = n("5182");

    for (var r in i) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(r);
    }

    n("a4a4");
    var o = n("2877"),
        u = Object(o["a"])(i["default"], a["a"], a["b"], !1, null, "29e32ef6", null);
    t["default"] = u.exports;
  },
  "8e06": function e06(e, t, n) {
    "use strict";

    var a = function a() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        i = [];

    n.d(t, "a", function () {
      return a;
    }), n.d(t, "b", function () {
      return i;
    });
  },
  a4a4: function a4a4(e, t, n) {
    "use strict";

    var a = n("23d5"),
        i = n.n(a);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/allMovie-create-component', {
  'components/allMovie-create-component': function componentsAllMovieCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8b59"));
  }
}, [['components/allMovie-create-component']]]);
});
require('components/allMovie.js');
__wxRoute = 'components/collectList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/collectList.js';

define('components/collectList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/collectList"], {
  "133f": function f(t, e, n) {
    "use strict";

    var c = function c() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return c;
    }), n.d(e, "b", function () {
      return u;
    });
  },
  "18d7": function d7(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var c = u(n("040e"));

    function u(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var l = {
      name: "collectList",
      props: ["x"],
      data: function data() {
        return {
          isAllowCancelCollect: !0,
          isCollect: !0
        };
      },
      methods: {
        playMovie: function playMovie(t) {
          c.default.playmove(t);
        },
        cancelCollects: function cancelCollects(t) {
          this.$emit("cancelCollects", t);
        }
      }
    };
    e.default = l;
  },
  3789: function _(t, e, n) {},
  "3c8c": function c8c(t, e, n) {
    "use strict";

    n.r(e);
    var c = n("133f"),
        u = n("eee1");

    for (var l in u) {
      "default" !== l && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(l);
    }

    n("acf0");
    var o = n("2877"),
        a = Object(o["a"])(u["default"], c["a"], c["b"], !1, null, "de7bbf64", null);
    e["default"] = a.exports;
  },
  acf0: function acf0(t, e, n) {
    "use strict";

    var c = n("3789"),
        u = n.n(c);
    u.a;
  },
  eee1: function eee1(t, e, n) {
    "use strict";

    n.r(e);
    var c = n("18d7"),
        u = n.n(c);

    for (var l in c) {
      "default" !== l && function (t) {
        n.d(e, t, function () {
          return c[t];
        });
      }(l);
    }

    e["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/collectList-create-component', {
  'components/collectList-create-component': function componentsCollectListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3c8c"));
  }
}, [['components/collectList-create-component']]]);
});
require('components/collectList.js');
__wxRoute = 'components/feedbackQuickWords';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/feedbackQuickWords.js';

define('components/feedbackQuickWords.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/feedbackQuickWords"], {
  "0091": function _(e, t, o) {
    "use strict";

    o.r(t);
    var i = o("dc64"),
        n = o("87e5");

    for (var s in n) {
      "default" !== s && function (e) {
        o.d(t, e, function () {
          return n[e];
        });
      }(s);
    }

    o("c65f");
    var c = o("2877"),
        u = Object(c["a"])(n["default"], i["a"], i["b"], !1, null, "7b32e69a", null);
    t["default"] = u.exports;
  },
  "1b8d": function b8d(e, t, o) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var i = {
      name: "feedbackQuickWords",
      props: ["feedbackQuickWordsValue"],
      data: function data() {
        return {
          isChoose: !1
        };
      },
      onLoad: function onLoad() {
        this.isChoose = !1;
      },
      methods: {
        changeQuickWords: function changeQuickWords() {
          this.isChoose ? (this.isChoose = !1, this.$emit("FeedbackQuickWordChooseAll", this.feedbackQuickWordsValue, this.isChoose)) : (this.isChoose = !0, this.$emit("FeedbackQuickWordChooseAll", this.feedbackQuickWordsValue, this.isChoose));
        }
      }
    };
    t.default = i;
  },
  "87e5": function e5(e, t, o) {
    "use strict";

    o.r(t);
    var i = o("1b8d"),
        n = o.n(i);

    for (var s in i) {
      "default" !== s && function (e) {
        o.d(t, e, function () {
          return i[e];
        });
      }(s);
    }

    t["default"] = n.a;
  },
  a2cd: function a2cd(e, t, o) {},
  c65f: function c65f(e, t, o) {
    "use strict";

    var i = o("a2cd"),
        n = o.n(i);
    n.a;
  },
  dc64: function dc64(e, t, o) {
    "use strict";

    var i = function i() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        n = [];

    o.d(t, "a", function () {
      return i;
    }), o.d(t, "b", function () {
      return n;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/feedbackQuickWords-create-component', {
  'components/feedbackQuickWords-create-component': function componentsFeedbackQuickWordsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0091"));
  }
}, [['components/feedbackQuickWords-create-component']]]);
});
require('components/feedbackQuickWords.js');
__wxRoute = 'components/findList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/findList.js';

define('components/findList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/findList"], {
  1618: function _(t, e, n) {
    "use strict";

    var i = n("e154"),
        o = n.n(i);
    o.a;
  },
  2863: function _(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("d588"),
        o = n("4abc");

    for (var l in o) {
      "default" !== l && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(l);
    }

    n("1618");
    var c = n("2877"),
        a = Object(c["a"])(o["default"], i["a"], i["b"], !1, null, "7426c0d6", null);
    e["default"] = a.exports;
  },
  "4abc": function abc(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("e5f1"),
        o = n.n(i);

    for (var l in i) {
      "default" !== l && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(l);
    }

    e["default"] = o.a;
  },
  d588: function d588(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return o;
    });
  },
  e154: function e154(t, e, n) {},
  e5f1: function e5f1(t, e, n) {
    "use strict";

    (function (t, i) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = c(n("a34a")),
          l = c(n("040e"));

      function c(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function a(t, e, n, i, o, l, c) {
        try {
          var a = t[l](c),
              u = a.value;
        } catch (s) {
          return void n(s);
        }

        a.done ? e(u) : Promise.resolve(u).then(i, o);
      }

      function u(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (i, o) {
            var l = t.apply(e, n);

            function c(t) {
              a(l, i, o, c, u, "next", t);
            }

            function u(t) {
              a(l, i, o, c, u, "throw", t);
            }

            c(void 0);
          });
        };
      }

      var s = {
        name: "findList",
        props: ["findMovieObject"],
        data: function data() {
          return {
            isAllowCollect: !0,
            isAllowCancelCollect: !0,
            isCollect: !1
          };
        },
        created: function created() {},
        mounted: function mounted() {
          0 == this.findMovieObject.is_collect ? this.isCollect = !1 : 1 == this.findMovieObject.is_collect && (this.isCollect = !0);
        },
        activated: function activated() {},
        methods: {
          playMovie: function playMovie(t) {
            l.default.playmove(t);
          },
          doShare: function doShare() {
            t.navigateTo({
              url: "../extension/extension"
            });
          },
          doCollect: function () {
            var e = u(o.default.mark(function e() {
              var n;
              return o.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (!this.isAllowCollect) {
                        e.next = 6;
                        break;
                      }

                      return this.isAllowCollect = !1, e.next = 4, l.default.getInfoByAxios("get", "https://api.vutq7.cn/index.php?g=api&m=collection&a=collection", {
                        uid: l.default.judgeParams().uid,
                        vid: parseInt(this.movieId)
                      }, !0);

                    case 4:
                      n = e.sent, "success" == n.msg && (this.isAllowCollect = !0, this.isCollect = !0, t.showToast({
                        title: "收藏成功",
                        icon: "none"
                      }));

                    case 6:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n() {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          cancelCollect: function () {
            var e = u(o.default.mark(function e() {
              var n;
              return o.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (!this.isAllowCancelCollect) {
                        e.next = 6;
                        break;
                      }

                      return this.isAllowCancelCollect = !1, e.next = 4, l.default.getInfoByAxios("get", "https://api.vutq7.cn/index.php?g=api&m=collection&a=cancelCollection", {
                        vid: parseInt(this.movieId),
                        uid: l.default.judgeParams().uid
                      }, !0);

                    case 4:
                      n = e.sent, "操作成功" == n.msg && (this.isAllowCancelCollect = !0, this.isCollect = !1, t.showToast({
                        title: "取消成功",
                        icon: "none"
                      }));

                    case 6:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n() {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          goAdv: function goAdv(t) {
            t && plus.runtime.openURL(t, function (t) {
              console.log(i(t, " at components\\findList.vue:111"));
            });
          }
        }
      };
      e.default = s;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/findList-create-component', {
  'components/findList-create-component': function componentsFindListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2863"));
  }
}, [['components/findList-create-component']]]);
});
require('components/findList.js');
__wxRoute = 'components/moreMovieList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/moreMovieList.js';

define('components/moreMovieList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/moreMovieList"], {
  "076b": function b(e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = a(n("040e"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var o = {
      name: "moveMovieList",
      props: ["moreMovieListObject"],
      data: function data() {
        return {};
      },
      methods: {
        playMovie: function playMovie(e) {
          u.default.playmove(e);
        }
      }
    };
    t.default = o;
  },
  "82f0": function f0(e, t, n) {
    "use strict";

    var u = function u() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        a = [];

    n.d(t, "a", function () {
      return u;
    }), n.d(t, "b", function () {
      return a;
    });
  },
  "8e48": function e48(e, t, n) {
    "use strict";

    var u = n("feb4"),
        a = n.n(u);
    a.a;
  },
  "946f": function f(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("82f0"),
        a = n("ad70");

    for (var o in a) {
      "default" !== o && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(o);
    }

    n("8e48");
    var r = n("2877"),
        f = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, "00d97aa0", null);
    t["default"] = f.exports;
  },
  ad70: function ad70(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("076b"),
        a = n.n(u);

    for (var o in u) {
      "default" !== o && function (e) {
        n.d(t, e, function () {
          return u[e];
        });
      }(o);
    }

    t["default"] = a.a;
  },
  feb4: function feb4(e, t, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/moreMovieList-create-component', {
  'components/moreMovieList-create-component': function componentsMoreMovieListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("946f"));
  }
}, [['components/moreMovieList-create-component']]]);
});
require('components/moreMovieList.js');
__wxRoute = 'components/tki-qrcode/tki-qrcode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/tki-qrcode/tki-qrcode.js';

define('components/tki-qrcode/tki-qrcode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/tki-qrcode/tki-qrcode"], {
  "05d5": function d5(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i,
          o = u(n("8a9c"));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var a = {
        name: "tki-qrcode",
        props: {
          cid: {
            type: String,
            default: "tki-qrcode-canvas"
          },
          size: {
            type: Number,
            default: 200
          },
          unit: {
            type: String,
            default: "upx"
          },
          show: {
            type: Boolean,
            default: !0
          },
          val: {
            type: String,
            default: ""
          },
          background: {
            type: String,
            default: "#ffffff"
          },
          foreground: {
            type: String,
            default: "#000000"
          },
          pdground: {
            type: String,
            default: "#000000"
          },
          icon: {
            type: String,
            default: ""
          },
          iconSize: {
            type: Number,
            default: 40
          },
          lv: {
            type: Number,
            default: 3
          },
          onval: {
            type: Boolean,
            default: !1
          },
          loadMake: {
            type: Boolean,
            default: !1
          },
          usingComponents: {
            type: Boolean,
            default: !0
          },
          showLoading: {
            type: Boolean,
            default: !0
          },
          loadingText: {
            type: String,
            default: "二维码生成中"
          }
        },
        data: function data() {
          return {
            result: ""
          };
        },
        methods: {
          _makeCode: function _makeCode() {
            var e = this;
            this._empty(this.val) ? t.showToast({
              title: "二维码内容不能为空",
              icon: "none",
              duration: 2e3
            }) : i = new o.default({
              context: e,
              canvasId: e.cid,
              usingComponents: e.usingComponents,
              showLoading: e.showLoading,
              loadingText: e.loadingText,
              text: e.val,
              size: e.cpSize,
              background: e.background,
              foreground: e.foreground,
              pdground: e.pdground,
              correctLevel: e.lv,
              image: e.icon,
              imageSize: e.iconSize,
              cbResult: function cbResult(t) {
                e._result(t);
              }
            });
          },
          _clearCode: function _clearCode() {
            this._result(""), i.clear();
          },
          _saveCode: function _saveCode() {
            var e = this;
            "" != this.result && t.saveImageToPhotosAlbum({
              filePath: e.result,
              success: function success() {
                t.showToast({
                  title: "二维码保存成功",
                  icon: "success",
                  duration: 2e3
                });
              }
            });
          },
          _result: function _result(t) {
            this.result = t, this.$emit("result", t);
          },
          _empty: function _empty(t) {
            var e = typeof t,
                n = !1;
            return "number" == e && "" == String(t) ? n = !0 : "undefined" == e ? n = !0 : "object" == e ? "{}" != JSON.stringify(t) && "[]" != JSON.stringify(t) && null != t || (n = !0) : "string" == e ? "" != t && "undefined" != t && "null" != t && "{}" != t && "[]" != t || (n = !0) : "function" == e && (n = !1), n;
          }
        },
        watch: {
          size: function size(t, e) {
            var n = this;
            t == e || this._empty(t) || (this.cSize = t, this._empty(this.val) || setTimeout(function () {
              n._makeCode();
            }, 100));
          },
          val: function val(t, e) {
            var n = this;
            this.onval && (t == e || this._empty(t) || setTimeout(function () {
              n._makeCode();
            }, 0));
          }
        },
        computed: {
          cpSize: function cpSize() {
            return "upx" == this.unit ? t.upx2px(this.size) : this.size;
          }
        },
        mounted: function mounted() {
          var t = this;
          this.loadMake && (this._empty(this.val) || setTimeout(function () {
            t._makeCode();
          }, 0));
        }
      };
      e.default = a;
    }).call(this, n("6e42")["default"]);
  },
  1439: function _(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("05d5"),
        o = n.n(i);

    for (var u in i) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(u);
    }

    e["default"] = o.a;
  },
  "46b5": function b5(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return o;
    });
  },
  8470: function _(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("46b5"),
        o = n("1439");

    for (var u in o) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(u);
    }

    n("f23b");
    var a = n("2877"),
        r = Object(a["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  d86e: function d86e(t, e, n) {},
  f23b: function f23b(t, e, n) {
    "use strict";

    var i = n("d86e"),
        o = n.n(i);
    o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/tki-qrcode/tki-qrcode-create-component', {
  'components/tki-qrcode/tki-qrcode-create-component': function componentsTkiQrcodeTkiQrcodeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8470"));
  }
}, [['components/tki-qrcode/tki-qrcode-create-component']]]);
});
require('components/tki-qrcode/tki-qrcode.js');

__wxRoute = 'pages/first/first';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/first/first.js';

define('pages/first/first.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/first/first"],{"0500":function(e,n,t){"use strict";t.r(n);var a=t("2e3c"),r=t("ee63");for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);t("d699");var o=t("2877"),u=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"106e6a97",null);n["default"]=u.exports},"2c59":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("a34a")),r=i(t("040e"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n,t,a,r,i,o){try{var u=e[i](o),c=u.value}catch(f){return void t(f)}u.done?n(c):Promise.resolve(c).then(a,r)}function u(e){return function(){var n=this,t=arguments;return new Promise(function(a,r){var i=e.apply(n,t);function u(e){o(i,a,r,u,c,"next",e)}function c(e){o(i,a,r,u,c,"throw",e)}u(void 0)})}}var c=null,f={name:"first",data:function(){return{openPageInfo:{}}},onLoad:function(){this.getOpenAndNoticeInfo()},onUnload:function(){clearInterval(c)},methods:{bacss:function(){clearInterval(c),e.switchTab({url:"../index/index"})},clearPlentyTimeInterval:function(){e.switchTab({url:"../index/index"}),clearInterval(c)},getOpenAndNoticeInfo:function(){var n=u(a.default.mark(function n(){var t,i=this;return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=Player&a=get_notice",{channel:r.default.config.channel});case 2:t=n.sent,t.data.notice&&e.setStorageSync("notice",t.data.notice),t.data.advert_start?(this.openPageInfo=t.data.advert_start,c=setInterval(function(){i.openPageInfo.showtime>0?i.openPageInfo.showtime--:i.clearPlentyTimeInterval()},1e3)):e.switchTab({url:"../index/index"});case 5:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}()}};n.default=f}).call(this,t("6e42")["default"])},"2e3c":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r})},"586e":function(e,n,t){"use strict";(function(e){t("bee6"),t("921b");a(t("66fd"));var n=a(t("0500"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},d699:function(e,n,t){"use strict";var a=t("f968"),r=t.n(a);r.a},ee63:function(e,n,t){"use strict";t.r(n);var a=t("2c59"),r=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,function(){return a[e]})}(i);n["default"]=r.a},f968:function(e,n,t){}},[["586e","common/runtime","common/vendor"]]]);
});
require('pages/first/first.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0874":function(e,n,t){"use strict";t.r(n);var a=t("7a2a"),o=t("bb8b");for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);t("662d");var i=t("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"443a7828",null);n["default"]=u.exports},2284:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a")),o=r(t("040e"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,a,o,r,i){try{var u=e[r](i),c=u.value}catch(l){return void t(l)}u.done?n(c):Promise.resolve(c).then(a,o)}function u(e){return function(){var n=this,t=arguments;return new Promise(function(a,o){var r=e.apply(n,t);function u(e){i(r,a,o,u,c,"next",e)}function c(e){i(r,a,o,u,c,"throw",e)}u(void 0)})}}var c={name:"home",data:function(){return{indicatorDots:!0,autoplay:!0,interval:5e3,duration:500,movieTypesArray:[],bannerArray:[],movieDisplayArray:[],showPopupBottom:!1}},onLoad:function(){this.getHomeInfo()},onPullDownRefresh:function(){this.getHomeInfo()},methods:{findMoreMovie:function(n,t){e.navigateTo({url:"../moreMovie/moreMovie?typeId=".concat(n,"&typeName=").concat(t)})},playMovie:function(e){o.default.playmove(e)},goSearch:function(n){e.navigateTo({url:"../search/search?searchInfo=".concat(n)})},goLookCollect:function(){e.navigateTo({url:"../collect/collect"})},goLookRecord:function(){e.navigateTo({url:"../playRecord/playRecord"})},getHomeInfo:function(){var n=u(a.default.mark(function n(){var t;return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,o.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=video&a=index",{channel:o.default.config.channel,uid:o.default.judgeParams().uid,page:1},!0);case 2:t=n.sent,e.stopPullDownRefresh(),this.bannerArray=t.data.slide_list,this.movieTypesArray=t.data.video_labels,this.movieDisplayArray=t.data.video_types;case 7:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}()}};n.default=c}).call(this,t("6e42")["default"])},"5adc":function(e,n,t){"use strict";(function(e){t("bee6"),t("921b");a(t("66fd"));var n=a(t("0874"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"662d":function(e,n,t){"use strict";var a=t("b821"),o=t.n(a);o.a},"7a2a":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return o})},b821:function(e,n,t){},bb8b:function(e,n,t){"use strict";t.r(n);var a=t("2284"),o=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);n["default"]=o.a}},[["5adc","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/channel/channel';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/channel/channel.js';

define('pages/channel/channel.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/channel/channel"],{"0e9e":function(e,n,t){"use strict";(function(e){t("bee6"),t("921b");a(t("66fd"));var n=a(t("671d"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"52c9":function(e,n,t){"use strict";var a=t("9fa7"),u=t.n(a);u.a},"671d":function(e,n,t){"use strict";t.r(n);var a=t("a2e8"),u=t("effe");for(var r in u)"default"!==r&&function(e){t.d(n,e,function(){return u[e]})}(r);t("52c9");var o=t("2877"),i=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,"1dcbcf60",null);n["default"]=i.exports},"9fa7":function(e,n,t){},a2e8:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return u})},bca5:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a")),u=r(t("040e"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n,t,a,u,r,o){try{var i=e[r](o),c=i.value}catch(f){return void t(f)}i.done?n(c):Promise.resolve(c).then(a,u)}function i(e){return function(){var n=this,t=arguments;return new Promise(function(a,u){var r=e.apply(n,t);function i(e){o(r,a,u,i,c,"next",e)}function c(e){o(r,a,u,i,c,"throw",e)}i(void 0)})}}var c=function(){return t.e("components/allMovie").then(t.bind(null,"8b59"))},f={name:"channel",data:function(){return{navState:null,movieTypesArray:[]}},components:{allMovie:c},onLoad:function(){this.getMovieType()},methods:{getMovieType:function(){var e=i(a.default.mark(function e(){var n;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.default.getInfoByAxios("get","https://api.vutq7.cnl/index.php?g=api&m=video&a=video_types",{channel:u.default.config.channel},!0);case 2:n=e.sent,this.movieTypesArray=n.data,this.navState=n.data[0].tid;case 5:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),changeNav:function(e){this.navState=e}}};n.default=f},effe:function(e,n,t){"use strict";t.r(n);var a=t("bca5"),u=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);n["default"]=u.a}},[["0e9e","common/runtime","common/vendor"]]]);
});
require('pages/channel/channel.js');
__wxRoute = 'pages/vipCenter/vipCenter';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/vipCenter/vipCenter.js';

define('pages/vipCenter/vipCenter.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vipCenter/vipCenter"],{"190e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"6bbc":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a")),o=r(n("040e"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,i,a,o,r){try{var u=t[o](r),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(i,a)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var o=t.apply(e,n);function r(t){u(o,i,a,r,s,"next",t)}function s(t){u(o,i,a,r,s,"throw",t)}r(void 0)})}}var c={name:"vipCenter",data:function(){return{userInfoObject:{},vipTypeArray:[],vipInfoObject:{},payType:2,vipType:1,totalMoneyShow:null,totalMoneySubmit:null,tipShow:!1}},onLoad:function(){this.getVipInfo()},methods:{choose:function(t){var e=this.vipTypeArray;e.map(function(t,e){t.active=!1}),e[t].active=!0,this.vipTypeArra=e,this.tipShow=!0,this.totalMoneyShow=e[t].money,this.totalMoneySubmit=e[t].money},close:function(){this.tipShow=!1},getVipInfo:function(){var t=s(a.default.mark(function t(){var e;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=pay&a=payConf",{uid:o.default.judgeParams().uid},!0);case 2:e=t.sent,this.vipInfoObject=e.data,e.data.option.map(function(t,e){t.active=2==e}),this.vipTypeArray=e.data.option,this.vipTypeArray.length>3?("0"==this.vipTypeArray[2].rebate?this.totalMoneyShow=this.vipTypeArray[2].money:this.totalMoneyShow=parseInt(this.vipTypeArray[2].money)*parseFloat("0."+this.vipTypeArray[2].rebate),this.totalMoneySubmit=this.vipTypeArray[2].money):(this.totalMoneyShow=null,this.totalMoneySubmit=null);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goPay:function(){var e=s(a.default.mark(function e(n){var r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.default.getInfoByAxios("post","https://api.vutq7.cn/index.php?g=api&m=pay&a=payStart",{cid:o.default.config.channel,pay_type:n,uid:o.default.judgeParams().uid,money:parseInt(this.totalMoneySubmit)},!0);case 2:r=e.sent,console.log(t(r," at pages\\vipCenter\\vipCenter.vue:131")),"success"==r.msg?plus.runtime.openURL(r.data.token,function(e){console.log(t(e," at pages\\vipCenter\\vipCenter.vue:134"))}):"非法请求-没有该VIP档位"==r.msg?i.showToast({title:"非法请求-没有该VIP档位",icon:"none"}):i.showToast({title:r.msg,icon:"none"});case 5:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}()},filters:{dealTime:function(t){if(220896e4==t)return"无限制";var e=new Date(1e3*t),n=e.getFullYear(),i=String(e.getMonth()+1).length>1?e.getMonth()+1:"0"+(e.getMonth()+1),a=String(e.getDate()).length>1?e.getDate():"0"+e.getDate(),o=String(e.getHours()).length>1?e.getHours():"0"+e.getHours(),r=String(e.getMinutes()).length>1?e.getMinutes():"0"+e.getMinutes(),u=String(e.getSeconds()).length>1?e.getSeconds():"0"+e.getSeconds(),s=n+"-"+i+"-"+a+" "+o+":"+r+":"+u;return s}}};e.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},"7de2":function(t,e,n){"use strict";(function(t){n("bee6"),n("921b");i(n("66fd"));var e=i(n("edfe"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bcf4:function(t,e,n){},e7de:function(t,e,n){"use strict";n.r(e);var i=n("6bbc"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},edfe:function(t,e,n){"use strict";n.r(e);var i=n("190e"),a=n("e7de");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("f860");var r=n("2877"),u=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},f860:function(t,e,n){"use strict";var i=n("bcf4"),a=n.n(i);a.a}},[["7de2","common/runtime","common/vendor"]]]);
});
require('pages/vipCenter/vipCenter.js');
__wxRoute = 'pages/shortMovie/shortMovie';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shortMovie/shortMovie.js';

define('pages/shortMovie/shortMovie.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shortMovie/shortMovie"],{"02cb":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return i})},2990:function(n,t,e){"use strict";var a=e("9ca5"),i=e.n(a);i.a},6161:function(n,t,e){"use strict";(function(n){e("bee6"),e("921b");a(e("66fd"));var t=a(e("af3f"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"9ca5":function(n,t,e){},a7f1:function(n,t,e){"use strict";e.r(t);var a=e("d870"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=i.a},af3f:function(n,t,e){"use strict";e.r(t);var a=e("02cb"),i=e("a7f1");for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);e("2990");var u=e("2877"),r=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"62f41fb5",null);t["default"]=r.exports},d870:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(e("a34a")),i=o(e("040e"));function o(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,a,i,o,u){try{var r=n[o](u),d=r.value}catch(f){return void e(f)}r.done?t(d):Promise.resolve(d).then(a,i)}function r(n){return function(){var t=this,e=arguments;return new Promise(function(a,i){var o=n.apply(t,e);function r(n){u(o,a,i,r,d,"next",n)}function d(n){u(o,a,i,r,d,"throw",n)}r(void 0)})}}var d=function(){return e.e("components/findList").then(e.bind(null,"2863"))},f={name:"find",components:{findList:d},data:function(){return{findMovieArray:[],topStatus:"",loading:!1,allLoaded:!1,isShowShare:!1}},onLoad:function(){this.getFindInfo()},onPullDownRefresh:function(){this.getFindInfo()},onReachBottom:function(){this.loadMore()},methods:{getFindInfo:function(){var t=r(a.default.mark(function t(){var e;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n.showLoading({title:"加载中..."}),t.next=3,i.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=video&a=find_video",{channel:i.default.config.channel,uid:i.default.judgeParams().uid},!0);case 3:e=t.sent,n.hideLoading(),n.stopPullDownRefresh(),this.findMovieArray=e.data;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadMore:function(){var t=r(a.default.mark(function t(){var e,o;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,this.allLoaded=!1,n.showLoading({title:"加载中..."}),t.next=5,i.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=video&a=find_video",{channel:i.default.config.channel,uid:i.default.judgeParams().uid},!0);case 5:if(e=t.sent,n.hideLoading(),e.data.length>0)for(o=0;o<e.data.length;o++)this.findMovieArray.push(e.data[o]),this.loading=!1;else this.loading=!0,this.allLoaded=!0;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),refresh:function(){var n=r(a.default.mark(function n(){var t,e=this;return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=video&a=find_video",{channel:i.default.config.channel,uid:i.default.judgeParams().uid},!0);case 2:t=n.sent,setTimeout(function(){e.findMovieArray=t.data,e.loading=!1,e.allLoaded=!1},600);case 4:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),doShare:function(t){n.navigateTo({url:"../extension/extension"})}}};t.default=f}).call(this,e("6e42")["default"])}},[["6161","common/runtime","common/vendor"]]]);
});
require('pages/shortMovie/shortMovie.js');
__wxRoute = 'pages/selfCenter/selfCenter';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/selfCenter/selfCenter.js';

define('pages/selfCenter/selfCenter.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/selfCenter/selfCenter"],{"04ed":function(e,t,n){"use strict";var o=n("6686"),u=n.n(o);u.a},3453:function(e,t,n){"use strict";(function(e){n("bee6"),n("921b");o(n("66fd"));var t=o(n("6fab"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"40ea":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n("a34a")),r=a(n("040e"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,o,u,r,a){try{var i=e[r](a),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(o,u)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(o,u){var r=e.apply(t,n);function a(e){i(r,o,u,a,c,"next",e)}function c(e){i(r,o,u,a,c,"throw",e)}a(void 0)})}}var s={name:"selfCenter",data:function(){return{userInfoObject:{},selfAdv:[]}},onShow:function(){this.getUserInfoBySelfCenter()},methods:{goAdv:function(t){t&&plus.runtime.openURL(t,function(t){console.log(e(t," at pages\\selfCenter\\selfCenter.vue:110"))})},aboutUs:function(){o.navigateTo({url:"../aboutUs/aboutUs"})},kefu:function(){o.navigateTo({url:"../kefu/kefu"})},collects:function(){o.navigateTo({url:"../collect/collect"})},bbgx:function(){o.showToast({title:"当前已是最新版本",icon:"none"})},playRecords:function(){o.navigateTo({url:"../playRecord/playRecord"})},govipCenter:function(){o.switchTab({url:"../vipCenter/vipCenter"})},goextension:function(){o.navigateTo({url:"../extension/extension"})},getUserInfoBySelfCenter:function(){var e=c(u.default.mark(function e(){var t;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=player&a=player_info",{channel:r.default.config.channel,uid:r.default.judgeParams().uid},!0);case 2:t=e.sent,t.data.vip_end=this.dealTime(t.data.vip_end),this.userInfoObject=t.data,this.selfAdv=t.data.advert_mycentre,o.getStorageSync("userInfo")&&(o.removeStorageSync("userInfo"),o.setStorageSync("userInfo",t.data));case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),goGroup:function(t){plus.runtime.openURL(t,function(t){console.log(e(t," at pages\\selfCenter\\selfCenter.vue:171"))})},bindMobile:function(){this.userInfoObject.mobile&&o.showModal({title:"提示",content:'您已经绑定了手机号"+this.userInfoObject.mobile+"，是否换绑?',success:function(e){e.confirm&&o.navigateTo({url:"../bindMobile/bindMobile"})}})},dealTime:function(e){if(220896e4==e)return"无限制";var t=new Date(1e3*e),n=t.getFullYear(),o=String(t.getMonth()+1).length>1?t.getMonth()+1:"0"+(t.getMonth()+1),u=String(t.getDate()).length>1?t.getDate():"0"+t.getDate(),r=String(t.getHours()).length>1?t.getHours():"0"+t.getHours(),a=String(t.getMinutes()).length>1?t.getMinutes():"0"+t.getMinutes(),i=String(t.getSeconds()).length>1?t.getSeconds():"0"+t.getSeconds(),c=n+"-"+o+"-"+u+" "+r+":"+a+":"+i;return c}}};t.default=s}).call(this,n("0de9")["default"],n("6e42")["default"])},"44d3":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=(e._self._c,parseInt(e.selfAdv[0].showtime+"000"));e.$mp.data=Object.assign({},{$root:{m0:n}})},u=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return u})},6686:function(e,t,n){},"6fab":function(e,t,n){"use strict";n.r(t);var o=n("44d3"),u=n("9453");for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);n("04ed");var a=n("2877"),i=Object(a["a"])(u["default"],o["a"],o["b"],!1,null,"c1b63f5a",null);t["default"]=i.exports},9453:function(e,t,n){"use strict";n.r(t);var o=n("40ea"),u=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=u.a}},[["3453","common/runtime","common/vendor"]]]);
});
require('pages/selfCenter/selfCenter.js');
__wxRoute = 'pages/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search/search.js';

define('pages/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"4d59":function(e,t,a){},"5dea":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a("a34a")),n=c(a("040e"));function c(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a,r,n,c,o){try{var s=e[c](o),i=s.value}catch(u){return void a(u)}s.done?t(i):Promise.resolve(i).then(r,n)}function s(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var c=e.apply(t,a);function s(e){o(c,r,n,s,i,"next",e)}function i(e){o(c,r,n,s,i,"throw",e)}s(void 0)})}}var i={name:"",data:function(){return{hotSearchArray:[],searchInfo:null,searchRecordArray:[],currentPage:1,searchResultArray:[],isHaveSearchRecord:!1,isHaveSearchResult:!0,loading:!1,allLoaded:!1}},onLoad:function(t){this.getHotSearch(),"undefined"!=t.searchInfo?(this.searchInfo=t.searchInfo,this.doSearch(t.searchInfo)):(this.searchInfo=null,this.isHaveSearchResult=!1),e.getStorageSync("searchRecord")&&(this.searchRecordArray=[],this.isHaveSearchRecord=!0,this.searchRecordArray=e.getStorageSync("searchRecord"),this.searchRecordArray.reverse())},onReachBottom:function(){this.loadMore()},methods:{playMovie:function(e){n.default.playmove(e)},goCorrect:function(){e.navigateTo({url:"../collect/collect"})},goLookRecord:function(){e.navigateTo({url:"../playRecord/playRecord"})},back:function(){e.navigateBack({delta:1})},getHotSearch:function(){var e=s(r.default.mark(function e(){var t;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=video&a=hot_search",{channel:n.default.config.channel,uid:n.default.judgeParams().uid},!0);case 2:t=e.sent,this.hotSearchArray=t.data.labels_top;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),doSearch:function(){var t=s(r.default.mark(function t(a){var c,o,s;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.currentPage=1,a=a.trim(),this.searchInfo=a,e.getStorageSync("searchRecord")?(c=e.getStorageSync("searchRecord"),c.push(a),c=n.default.arrayDelete(c),e.setStorageSync("searchRecord",c)):(o=[],o.push(a),e.setStorageSync("searchRecord",o)),this.searchRecordArray=[],this.isHaveSearchRecord=!0,this.searchRecordArray=e.getStorageSync("searchRecord"),this.searchRecordArray.reverse(),t.next=10,n.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=video&a=do_search",{channel:n.default.config.channel,search:this.searchInfo,uid:n.default.judgeParams().uid,page:this.currentPage},!0);case 10:s=t.sent,s.data.length<=0?(e.showToast({title:"暂时找不到影片",icon:"none",position:"center"}),this.isHaveSearchResult=!1):(this.searchResultArray=s.data,this.isHaveSearchResult=!0);case 12:case"end":return t.stop()}},t,this)}));function a(e){return t.apply(this,arguments)}return a}(),closeSearchRecord:function(){this.isHaveSearchRecord=!1,e.removeStorageSync("searchRecord")},judgeSearchInfoLength:function(e){Boolean(this.searchInfo)&&-1===this.searchInfo.indexOf(" ")&&13===e.keyCode&&(this.doSearch(this.searchInfo),e.preventDefault())},loadMore:function(){var e=s(r.default.mark(function e(){var t,a;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.allLoaded=!1,this.currentPage++,e.next=4,n.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=video&a=do_search",{channel:n.default.config.channel,search:this.searchInfo,uid:n.default.judgeParams().uid,page:this.currentPage},!0);case 4:if(t=e.sent,t.data.length>0)for(a=0;a<t.data.length;a++)this.searchResultArray.push(t.data[a]);else this.allLoaded=!0;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}};t.default=i}).call(this,a("6e42")["default"])},6310:function(e,t,a){"use strict";a.r(t);var r=a("ec16"),n=a("cde2");for(var c in n)"default"!==c&&function(e){a.d(t,e,function(){return n[e]})}(c);a("d5d4");var o=a("2877"),s=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,"08114ef4",null);t["default"]=s.exports},cde2:function(e,t,a){"use strict";a.r(t);var r=a("5dea"),n=a.n(r);for(var c in r)"default"!==c&&function(e){a.d(t,e,function(){return r[e]})}(c);t["default"]=n.a},d5d4:function(e,t,a){"use strict";var r=a("4d59"),n=a.n(r);n.a},ec16:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n})},f52a:function(e,t,a){"use strict";(function(e){a("bee6"),a("921b");r(a("66fd"));var t=r(a("6310"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])}},[["f52a","common/runtime","common/vendor"]]]);
});
require('pages/search/search.js');
__wxRoute = 'pages/playRecord/playRecord';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/playRecord/playRecord.js';

define('pages/playRecord/playRecord.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/playRecord/playRecord"],{"4e3e":function(e,t,n){"use strict";(function(e){n("bee6"),n("921b");r(n("66fd"));var t=r(n("6437"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},6437:function(e,t,n){"use strict";n.r(t);var r=n("f77b"),a=n("9a68");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("c9e9");var o=n("2877"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,"56e91e88",null);t["default"]=i.exports},"76a3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),a=u(n("040e"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,r,a,u,o){try{var i=e[u](o),c=i.value}catch(f){return void n(f)}i.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var u=e.apply(t,n);function i(e){o(u,r,a,i,c,"next",e)}function c(e){o(u,r,a,i,c,"throw",e)}i(void 0)})}}var c={name:"playRecord",data:function(){return{playRecordArray:[]}},onLoad:function(){this.getPlayRecordInfo()},methods:{playMovie:function(e){a.default.playmove(e)},getPlayRecordInfo:function(){var e=i(r.default.mark(function e(){var t;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=history&a=history",{uid:a.default.judgeParams().uid},!0);case 2:t=e.sent,this.playRecordArray=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),deletePlayRecord:function(){var e=i(r.default.mark(function e(t){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(n=0;n<this.playRecordArray.length;n++)this.playRecordArray[n].id==t&&this.playRecordArray.splice(n,1);return e.next=3,a.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=history&a=del",{uid:a.default.judgeParams().uid,id:parseInt(t)},!0);case 3:e.sent;case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}};t.default=c},"9a68":function(e,t,n){"use strict";n.r(t);var r=n("76a3"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=a.a},c9e9:function(e,t,n){"use strict";var r=n("cf6e"),a=n.n(r);a.a},cf6e:function(e,t,n){},f77b:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})}},[["4e3e","common/runtime","common/vendor"]]]);
});
require('pages/playRecord/playRecord.js');
__wxRoute = 'pages/collect/collect';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/collect/collect.js';

define('pages/collect/collect.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/collect/collect"],{"07ca":function(t,e,n){"use strict";(function(t,c){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("a34a")),r=a(n("040e"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,c,o,r,a){try{var u=t[r](a),l=u.value}catch(i){return void n(i)}u.done?e(l):Promise.resolve(l).then(c,o)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(c,o){var r=t.apply(e,n);function a(t){u(r,c,o,a,l,"next",t)}function l(t){u(r,c,o,a,l,"throw",t)}a(void 0)})}}var i=function(){return n.e("components/collectList").then(n.bind(null,"3c8c"))},s={name:"collect",components:{collectList:i},data:function(){return{collectRecordArray:[]}},onLoad:function(){this.getCollectInfo()},methods:{cancelCollects:function(){var e=l(o.default.mark(function e(n){var a,u;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=collection&a=cancelCollection",{vid:parseInt(n),uid:r.default.judgeParams().uid},!0);case 2:for(a=e.sent,console.log(t(a," at pages\\collect\\collect.vue:40")),c.showToast({title:"取消成功",icon:"none"}),u=0;u<this.collectRecordArray.length;u++)this.collectRecordArray[u].vid==n&&this.collectRecordArray.splice(u,1);case 6:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),getCollectInfo:function(){var t=l(o.default.mark(function t(e){var n;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=collection&a=myCollection",{uid:r.default.judgeParams().uid},!0);case 2:n=t.sent,this.collectRecordArray=n.data;case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}};e.default=s}).call(this,n("0de9")["default"],n("6e42")["default"])},1256:function(t,e,n){"use strict";n.r(e);var c=n("ccb2"),o=n("bb18");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("3be6");var a=n("2877"),u=Object(a["a"])(o["default"],c["a"],c["b"],!1,null,"6dbbbe8c",null);e["default"]=u.exports},"3be6":function(t,e,n){"use strict";var c=n("ae8f"),o=n.n(c);o.a},ae8f:function(t,e,n){},bb18:function(t,e,n){"use strict";n.r(e);var c=n("07ca"),o=n.n(c);for(var r in c)"default"!==r&&function(t){n.d(e,t,function(){return c[t]})}(r);e["default"]=o.a},c7d7:function(t,e,n){"use strict";(function(t){n("bee6"),n("921b");c(n("66fd"));var e=c(n("1256"));function c(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ccb2:function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return c}),n.d(e,"b",function(){return o})}},[["c7d7","common/runtime","common/vendor"]]]);
});
require('pages/collect/collect.js');
__wxRoute = 'pages/movieDetails/movieDetails';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/movieDetails/movieDetails.js';

define('pages/movieDetails/movieDetails.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/movieDetails/movieDetails"],{2539:function(t,e,i){"use strict";var n=i("e9cd"),a=i.n(n);a.a},"3fd7":function(t,e,i){"use strict";i.r(e);var n=i("ced9"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"577e":function(t,e,i){"use strict";i.r(e);var n=i("75a4"),a=i("3fd7");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("2539");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"527dbe1c",null);e["default"]=r.exports},"6d88":function(t,e,i){"use strict";(function(t){i("bee6"),i("921b");n(i("66fd"));var e=n(i("577e"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"75a4":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=(t._self._c,parseInt(t.advBottom[0].showtime+"000"));t.$mp.data=Object.assign({},{$root:{m0:i}})},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},ced9:function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("a34a")),o=s(i("040e"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,i,n,a,o,s){try{var r=t[o](s),l=r.value}catch(u){return void i(u)}r.done?e(l):Promise.resolve(l).then(n,a)}function l(t){return function(){var e=this,i=arguments;return new Promise(function(n,a){var o=t.apply(e,i);function s(t){r(o,n,a,s,l,"next",t)}function l(t){r(o,n,a,s,l,"throw",t)}s(void 0)})}}var u,c={name:"movieDetails",data:function(){return{animationData:{},adv:{},advTop:{},advBottom:[],recommend:[],movieInfo:{name:"",plays:"",release_time:""},currentPraiseMount:0,currentCaiMount:0,isPraiseOrCai:2,player:null,reCountDOM:{},tryLookTime:null,totalTime:null,currentTime:null,currentMovieId:null,topAdvPlentyTimeInterval:null,topAdvPlentyTime:null,isCollect:!1,isAllowCollect:!0,isAllowCancelCollect:!0,isAllowPraiseOrCai:!0,isLookIntro:!0,isOpenPlay:!1,isPause:!1,isPlayEnd:!1,isVip:!1,isFirstPlay:!0,isAllowPlay:!0,isLikeMovie:!1,isHaveTopAdv:!1,isFromExternal:!1,showzd:"",movieId:""}},onLoad:function(e){this.movieId=e.movieId,this.getMovieInfo(e.movieId);var i=t.createAnimation({duration:300,timingFunction:"ease"});this.animation=i},onUnload:function(){null!=this.totalTime&&this.writePlayRecord()},methods:{goextension:function(){t.navigateTo({url:"../extension/extension"})},govipCenter:function(){t.switchTab({url:"../vipCenter/vipCenter"})},goFeedback:function(e,i){t.navigateTo({url:"../feedback/feedback?id=".concat(e,"&name=").concat(i)})},goAdv:function(t){t&&plus.runtime.openURL(t,function(t){console.log(n(t," at pages\\movieDetails\\movieDetails.vue:173"))})},doCollect:function(){var e=l(a.default.mark(function e(){var i;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isAllowCollect){e.next=6;break}return this.isAllowCollect=!1,e.next=4,o.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=collection&a=collection",{uid:o.default.judgeParams().uid,vid:parseInt(this.movieId)},!0);case 4:i=e.sent,"success"==i.msg&&(this.isAllowCollect=!0,this.isCollect=!0,t.showToast({title:"收藏成功",icon:"none"}));case 6:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),cancelCollect:function(){var e=l(a.default.mark(function e(){var i;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isAllowCancelCollect){e.next=6;break}return this.isAllowCancelCollect=!1,e.next=4,o.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=collection&a=cancelCollection",{vid:parseInt(this.movieId),uid:o.default.judgeParams().uid},!0);case 4:i=e.sent,"操作成功"==i.msg&&(this.isAllowCancelCollect=!0,this.isCollect=!1,t.showToast({title:"取消成功",icon:"none"}));case 6:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),doPraiseOrCai:function(){var e=l(a.default.mark(function e(i){var n;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isAllowPraiseOrCai){e.next=7;break}return this.isAllowPraiseOrCai=!1,e.next=4,o.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=likeinfo&a=video_like",{uid:o.default.judgeParams().uid,channel:o.default.config.channel,video_id:parseInt(this.movieId),type:i},!0);case 4:n=e.sent,this.isAllowPraiseOrCai=!0,"操作成功"==n.msg?1==n.data.operate?(this.currentPraiseMount++,this.isPraiseOrCai=1):0==n.data.operate&&(this.currentCaiMount++,this.isPraiseOrCai=0):"用户已经对该视频进行赞踩"==n.msg&&t.showToast({title:"用户已经对该视频进行赞踩",icon:"none"});case 7:case"end":return e.stop()}},e,this)}));function i(t){return e.apply(this,arguments)}return i}(),timeupdates:function(e){if((null==this.totalTime||this.totalTime<0)&&(this.totalTime=e.detail.duration),!this.isVip){var i=Math.floor(e.detail.currentTime);this.currentTime=Math.floor(e.detail.currentTime),i>=parseFloat(this.showzd)&&(this.videoContext=t.createVideoContext("myVideo"),this.videoContext.exitFullScreen(),this.isPlayEnd=!0)}},getMovieInfo:function(){var e=l(a.default.mark(function e(i){var n;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.currentMovieId=i,null!=this.totalTime&&this.writePlayRecord(),e.next=4,o.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=video&a=video_info",{channel:o.default.config.channel,video_id:i,uid:o.default.judgeParams().uid},!0);case 4:n=e.sent,this.totalTime=null,this.isPlayEnd=!1,this.adv=n.data.ad,this.advTop=n.data.advert_onplayer,n.data.advert_onplayer&&(this.topAdvPlentyTime=parseInt(n.data.advert_onplayer.showtime)),this.advBottom=n.data.advert_playerdown,this.recommend=n.data.recommend_list,this.movieInfo=n.data.video_info,this.showzd=n.data.showzd,u=0!=t.getStorageSync("userInfo").is_vip,this.isVip=u,this.openTopAdv(),this.isCollect="0"!=this.movieInfo.is_collect,this.currentPraiseMount=this.movieInfo.likes,this.currentCaiMount=this.movieInfo.dislikes,0==this.movieInfo.is_like?this.isPraiseOrCai=0:1==this.movieInfo.is_like?this.isPraiseOrCai=1:2==this.movieInfo.is_like&&(this.isPraiseOrCai=2);case 21:case"end":return e.stop()}},e,this)}));function i(t){return e.apply(this,arguments)}return i}(),lookIntro:function(){this.isLookIntro=!this.isLookIntro,this.isLookIntro?(this.animation.height("0upx").step(),this.animationData=this.animation.export()):(this.animation.height("300upx").step(),this.animationData=this.animation.export())},goMovieDetailsAll:function(t){this.movieId=t,this.getMovieInfo(t)},doShare:function(){t.navigateTo({url:"../extension/extension"})},writePlayRecord:function(){var t=l(a.default.mark(function t(){return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.totalTime||!this.currentTime){t.next=4;break}return t.next=3,o.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=history&a=record",{uid:o.default.judgeParams().uid,vid:this.currentMovieId,index:1,type:1,progress:this.currentTime,total_time:this.totalTime},!0);case 3:t.sent;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),openTopAdv:function(){var t=this;this.advTop&&(this.isHaveTopAdv=!0,this.topAdvPlentyTimeInterval&&clearInterval(this.topAdvPlentyTimeInterval),this.topAdvPlentyTimeInterval=setInterval(function(){t.topAdvPlentyTime>0?(t.isHaveTopAdv=!0,t.topAdvPlentyTime--):(clearInterval(t.topAdvPlentyTimeInterval),t.isHaveTopAdv=!1)},1e3))}}};e.default=c}).call(this,i("6e42")["default"],i("0de9")["default"])},e9cd:function(t,e,i){}},[["6d88","common/runtime","common/vendor"]]]);
});
require('pages/movieDetails/movieDetails.js');
__wxRoute = 'pages/moreMovie/moreMovie';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/moreMovie/moreMovie.js';

define('pages/moreMovie/moreMovie.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/moreMovie/moreMovie"],{"029f":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},"0318":function(e,t,n){"use strict";n.r(t);var r=n("029f"),a=n("f68e");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("4f9d");var o=n("2877"),u=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=u.exports},"05e8":function(e,t,n){"use strict";(function(e){n("bee6"),n("921b");r(n("66fd"));var t=r(n("0318"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"4f9d":function(e,t,n){"use strict";var r=n("9ef9"),a=n.n(r);a.a},5095:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a")),a=i(n("040e"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,r,a,i,o){try{var u=e[i](o),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function u(e){o(i,r,a,u,s,"next",e)}function s(e){o(i,r,a,u,s,"throw",e)}u(void 0)})}}var s=function(){return n.e("components/moreMovieList").then(n.bind(null,"946f"))},c={name:"moreMovie",components:{moreMovieList:s},data:function(){return{currentPage:1,currentTypeId:null,moreMovieArray:[],allLoaded:!1}},onLoad:function(t){this.currentTypeId=t.typeId,this.getMoreMovieInfo(),e.setNavigationBarTitle({title:t.typeName})},onPullDownRefresh:function(){this.currentPage=1,this.moreMovieArray=[],this.allLoaded=!1,this.getMoreMovieInfo()},onReachBottom:function(){this.loadMore()},methods:{getMoreMovieInfo:function(){var t=u(r.default.mark(function t(){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=video&a=video_type_list",{channel:a.default.config.channel,tid:parseInt(this.currentTypeId),uid:a.default.judgeParams().uid,page:this.currentPage},!0);case 2:n=t.sent,e.stopPullDownRefresh(),this.moreMovieArray=n.data.list;case 5:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),loadMore:function(){var e=u(r.default.mark(function e(){var t,n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.allLoaded=!1,this.currentPage++,e.next=4,a.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=video&a=video_type_list",{channel:a.default.config.channel,tid:parseInt(this.currentTypeId),uid:a.default.judgeParams().uid,page:this.currentPage},!0);case 4:if(t=e.sent,t.data.list.length>0)for(n=0;n<t.data.list.length;n++)this.moreMovieArray.push(t.data.list[n]);else this.allLoaded=!0;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}};t.default=c}).call(this,n("6e42")["default"])},"9ef9":function(e,t,n){},f68e:function(e,t,n){"use strict";n.r(t);var r=n("5095"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=a.a}},[["05e8","common/runtime","common/vendor"]]]);
});
require('pages/moreMovie/moreMovie.js');
__wxRoute = 'pages/kefu/kefu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/kefu/kefu.js';

define('pages/kefu/kefu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kefu/kefu"],{"0870":function(e,t,n){"use strict";(function(e){n("bee6"),n("921b");u(n("66fd"));var t=u(n("d07a"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},af78:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})},be88:function(e,t,n){"use strict";n.r(t);var u=n("eda9"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a},d07a:function(e,t,n){"use strict";n.r(t);var u=n("af78"),a=n("be88");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("da77");var f=n("2877"),o=Object(f["a"])(a["default"],u["a"],u["b"],!1,null,"7106d572",null);t["default"]=o.exports},da77:function(e,t,n){"use strict";var u=n("efbe"),a=n.n(u);a.a},eda9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"kefu",data:function(){return{}},methods:{}};t.default=u},efbe:function(e,t,n){}},[["0870","common/runtime","common/vendor"]]]);
});
require('pages/kefu/kefu.js');
__wxRoute = 'pages/aboutUs/aboutUs';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/aboutUs/aboutUs.js';

define('pages/aboutUs/aboutUs.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/aboutUs/aboutUs"],{"01de":function(e,t,n){},"62f6":function(e,t,n){"use strict";n.r(t);var u=n("7761"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a},"6d5f":function(e,t,n){"use strict";(function(e){n("bee6"),n("921b");u(n("66fd"));var t=u(n("9430"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"6e43":function(e,t,n){"use strict";var u=n("01de"),a=n.n(u);a.a},7761:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"agreement",methods:{agreement:function(){e.navigateTo({url:"../agreement/agreement"})},privacy:function(){e.navigateTo({url:"../privacy/privacy"})},service:function(){e.navigateTo({url:"../service/service"})}}};t.default=n}).call(this,n("6e42")["default"])},9126:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})},9430:function(e,t,n){"use strict";n.r(t);var u=n("9126"),a=n("62f6");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("6e43");var c=n("2877"),i=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,"ce7336c2",null);t["default"]=i.exports}},[["6d5f","common/runtime","common/vendor"]]]);
});
require('pages/aboutUs/aboutUs.js');
__wxRoute = 'pages/agreement/agreement';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/agreement/agreement.js';

define('pages/agreement/agreement.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/agreement/agreement"],{"0b2e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"agreement",data:function(){return{addUrl:"http://orange.185sy.com/user_agreement.html"}}};t.default=a},3070:function(e,t,n){"use strict";(function(e){n("bee6"),n("921b");a(n("66fd"));var t=a(n("cd89"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"4b3a":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},"7a29":function(e,t,n){"use strict";n.r(t);var a=n("0b2e"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=r.a},"7da3":function(e,t,n){},b4f4:function(e,t,n){"use strict";var a=n("7da3"),r=n.n(a);r.a},cd89:function(e,t,n){"use strict";n.r(t);var a=n("4b3a"),r=n("7a29");for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);n("b4f4");var c=n("2877"),o=Object(c["a"])(r["default"],a["a"],a["b"],!1,null,"1a427c2a",null);t["default"]=o.exports}},[["3070","common/runtime","common/vendor"]]]);
});
require('pages/agreement/agreement.js');
__wxRoute = 'pages/privacy/privacy';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/privacy/privacy.js';

define('pages/privacy/privacy.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/privacy/privacy"],{"1b11":function(t,e,n){"use strict";n.r(e);var u=n("65fb"),r=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=r.a},"493b":function(t,e,n){"use strict";(function(t){n("bee6"),n("921b");u(n("66fd"));var e=u(n("ec57"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4f33":function(t,e,n){},"65fb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"privacy",data:function(){return{addUrl:"https://tg.vutq7.com/privacy_policy.html"}}};e.default=u},e98d:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return r})},eb57:function(t,e,n){"use strict";var u=n("4f33"),r=n.n(u);r.a},ec57:function(t,e,n){"use strict";n.r(e);var u=n("e98d"),r=n("1b11");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("eb57");var c=n("2877"),f=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,"0712f97a",null);e["default"]=f.exports}},[["493b","common/runtime","common/vendor"]]]);
});
require('pages/privacy/privacy.js');
__wxRoute = 'pages/service/service';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/service/service.js';

define('pages/service/service.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/service/service"],{"15ad":function(e,t,n){"use strict";n.r(t);var r=n("1dd2"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=a.a},"1dd2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"service",data:function(){return{addUrl:"http://orange.185sy.com/term_service.html?"}}};t.default=r},"32ee":function(e,t,n){"use strict";n.r(t);var r=n("5d3c"),a=n("15ad");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("da04");var c=n("2877"),o=Object(c["a"])(a["default"],r["a"],r["b"],!1,null,"c064f9e4",null);t["default"]=o.exports},"5d3c":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},"985c":function(e,t,n){},a154:function(e,t,n){"use strict";(function(e){n("bee6"),n("921b");r(n("66fd"));var t=r(n("32ee"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},da04:function(e,t,n){"use strict";var r=n("985c"),a=n.n(r);a.a}},[["a154","common/runtime","common/vendor"]]]);
});
require('pages/service/service.js');
__wxRoute = 'pages/extension/extension';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/extension/extension.js';

define('pages/extension/extension.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extension/extension"],{"0b27":function(n,t,e){"use strict";var o=e("2486"),i=e.n(o);i.a},2486:function(n,t,e){},"88b9":function(n,t,e){"use strict";e.r(t);var o=e("ad95"),i=e("c4bb");for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);e("0b27");var r=e("2877"),u=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"5122edf3",null);t["default"]=u.exports},"8fea":function(n,t,e){"use strict";(function(n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e("a34a")),a=r(e("040e"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,o,i,a,r){try{var u=n[a](r),c=u.value}catch(s){return void e(s)}u.done?t(c):Promise.resolve(c).then(o,i)}function c(n){return function(){var t=this,e=arguments;return new Promise(function(o,i){var a=n.apply(t,e);function r(n){u(a,o,i,r,c,"next",n)}function c(n){u(a,o,i,r,c,"throw",n)}r(void 0)})}}var s=function(){return Promise.all([e.e("common/vendor"),e.e("components/tki-qrcode/tki-qrcode")]).then(e.bind(null,"8470"))},f={components:{tkiQrcode:s},name:"extension",data:function(){return{extensionObject:{}}},onLoad:function(){this.getUseInviteInfo()},onNavigationBarButtonTap:function(){n.navigateTo({url:"../rulers/rulers"})},methods:{setClipboardData:function(){n.setClipboardData({data:this.extensionObject.invitation_content})},qrR:function(n){console.log(o(n," at pages\\extension\\extension.vue:70"))},getUseInviteInfo:function(){var n=c(i.default.mark(function n(){var t;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=player&a=invitation_page",{channel:a.default.config.channel,uid:a.default.judgeParams().uid},!0);case 2:t=n.sent,this.extensionObject=t.data;case 4:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),storeCode:function(){this.$refs.qrcode._saveCode()},onCopy:function(){n.showToast({title:"复制成功",icon:"none"})},onError:function(){n.showToast({title:"复制成功",icon:"none"})}},filters:{prizeType:function(n){return"1"==n?"天":"2"==n?"月":void 0}}};t.default=f}).call(this,e("6e42")["default"],e("0de9")["default"])},a973:function(n,t,e){"use strict";(function(n){e("bee6"),e("921b");o(e("66fd"));var t=o(e("88b9"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},ad95:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})},c4bb:function(n,t,e){"use strict";e.r(t);var o=e("8fea"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t["default"]=i.a}},[["a973","common/runtime","common/vendor"]]]);
});
require('pages/extension/extension.js');
__wxRoute = 'pages/rulers/rulers';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/rulers/rulers.js';

define('pages/rulers/rulers.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/rulers/rulers"],{"21df":function(n,t,e){"use strict";(function(n){e("bee6"),e("921b");u(e("66fd"));var t=u(e("4af6"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"2c21":function(n,t,e){"use strict";var u=e("f2fa"),r=e.n(u);r.a},"4af6":function(n,t,e){"use strict";e.r(t);var u=e("f6d5"),r=e("c380");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);e("2c21");var f=e("2877"),c=Object(f["a"])(r["default"],u["a"],u["b"],!1,null,"f6e46532",null);t["default"]=c.exports},"78f6":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"agreement",data:function(){return{addUrl:"http://orange.185sy.com/bonus_rule.html?"}},onLoad:function(){this.addUserId()}};t.default=u},c380:function(n,t,e){"use strict";e.r(t);var u=e("78f6"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},f2fa:function(n,t,e){},f6d5:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})}},[["21df","common/runtime","common/vendor"]]]);
});
require('pages/rulers/rulers.js');
__wxRoute = 'pages/feedback/feedback';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/feedback/feedback.js';

define('pages/feedback/feedback.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feedback/feedback"],{"1e9c":function(e,t,n){"use strict";n.r(t);var a=n("b12f"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},"2a5f":function(e,t,n){},"2abc":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},3017:function(e,t,n){"use strict";(function(e){n("bee6"),n("921b");a(n("66fd"));var t=a(n("37a6"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"37a6":function(e,t,n){"use strict";n.r(t);var a=n("2abc"),o=n("1e9c");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("9147");var u=n("2877"),r=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,"aa0d2ede",null);t["default"]=r.exports},9147:function(e,t,n){"use strict";var a=n("2a5f"),o=n.n(a);o.a},b12f:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("a34a")),o=i(n("040e"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,a,o,i,u){try{var r=e[i](u),c=r.value}catch(s){return void n(s)}r.done?t(c):Promise.resolve(c).then(a,o)}function r(e){return function(){var t=this,n=arguments;return new Promise(function(a,o){var i=e.apply(t,n);function r(e){u(i,a,o,r,c,"next",e)}function c(e){u(i,a,o,r,c,"throw",e)}r(void 0)})}}var c=function(){return n.e("components/feedbackQuickWords").then(n.bind(null,"0091"))},s={name:"feedback",components:{feedbackQuickWords:c},data:function(){return{textAreaValue:"",FeedbackQuickWordArray:[],FeedbackQuickWordChoose:[],id:"",name:"",msg:1}},onLoad:function(e){this.id=e.id,this.name=e.name,this.getFeedbackQuickWordInfo()},methods:{changeInput:function(e){this.textAreaValue=e.target.value},submitFeedback:function(){return e.showToast({title:"接口变动",icon:"none"}),!1},ress:function(){var t=r(a.default.mark(function t(n){var i;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.default.getInfoByAxios("post","https://api.vutq7.cn/index.php?g=api&m=opinion&a=do_opinion",n,!0);case 2:i=t.sent,this.FeedbackQuickWordArray=i.data,"发布成功"==i.data.msg&&(Indicator.close(),Toast({message:"发布成功",position:"bottom",duration:1e3}),this.FeedbackQuickWordChoose=[],setTimeout(function(){e.navigateBack({delta:1})},1500));case 5:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}(),getFeedbackQuickWordInfo:function(){var e=r(a.default.mark(function e(){var t;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.default.getInfoByAxios("get","https://api.vutq7.cn/index.php?g=api&m=opinion&a=quick_word",{channel:o.default.config.channel,uid:o.default.judgeParams().uid},!0);case 2:t=e.sent,this.FeedbackQuickWordArray=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),FeedbackQuickWordChooseAll:function(e,t){if(t)this.FeedbackQuickWordChoose.push(e);else for(var n=0;n<this.FeedbackQuickWordChoose.length;n++)this.FeedbackQuickWordChoose[n]==e&&this.FeedbackQuickWordChoose.splice(n,1)}}};t.default=s}).call(this,n("6e42")["default"])}},[["3017","common/runtime","common/vendor"]]]);
});
require('pages/feedback/feedback.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

