/**
 *  domain:'localhost',
    path:'/read',
    httpOnly:true,
    maxAge:3600,
    expires:new Date(new Date().getTime()+3600*1000),
    Secure:true
 */
exports.serialize = function(name,val,opt){
    opt = opt ||{};
    var pairs = [name+'='+val];
    if(opt.maxAge){
        pairs.push('Max-Age='+opt.maxAge);
    }
    if(opt.domain);
    if(opt.path);
    if(opt.expires);
    if(opt.httpOnly);
    if(opt.secure);
    return pairs.join('; ');
}