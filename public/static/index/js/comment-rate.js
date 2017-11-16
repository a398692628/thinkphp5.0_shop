(function(){
    var $ = function(id){
        return document.getElementById(id);
    };
    var o = {
        goodRate: $("goodRate"),
        goodNum: goodRate.getAttribute("data-num"),
        goodPart: goodRate.getAttribute("data-total")/2,
        goodl: $("goodRotateLeft"),
        goodr: $("goodRotateRight"),
        middleRate: $("middleRate"),
        middleNum: middleRate.getAttribute("data-num"),
        middlePart: middleRate.getAttribute("data-total")/2,
        middlel: $("middleRotateLeft"),
        middler: $("middleRotateRight"),
        badRate: $("badRate"),
        badNum: badRate.getAttribute("data-num"),
        badPart: badRate.getAttribute("data-total")/2,
        badl: $("badRotateLeft"),
        badr: $("badRotateRight")
    };
    var f = {
        css: function(o,key){
            return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key];
        },
        zero: function(n, top){
            n = parseInt(n, 10), top = top || "00";
            if(n > 0){
                if(n <= 9){
                    n = "0" + n;
                }
                return String(n);
            }else{
                return top.toString();
            }
        },
        angle: function(v, total){
            var scale = v / total, offsetx = 0, offsety = 0, an;
            var angle = scale * 360; //褰撳墠瑙掑害鍊�
            //IE鐭╅樀瑙掑害鍊艰绠�
            var m11 = Math.cos(Math.PI*2 / 360 * angle)
            var m21 = Math.sin(Math.PI*2 / 360 * angle);
            if(angle > 90){
                an = angle - 90;
            }else{
                an = angle;
            }
            offsety = offsetx = (78 - 78 * Math.sqrt(2) * Math.cos(Math.PI / 180 * Math.abs(an - 45))) / 2 ;
            return {
                trans: "rotate("+angle+"deg)",
                ie: "progid:DXImageTransform.Microsoft.Matrix(M11="+m11+",M12=-"+m21+",M21="+m21+",M22="+m11+",SizingMethod='auto expand',FilterType='nearest neighbor')",
                offset: {
                    x: offsetx,
                    y: offsety
                }
            };
        },
        cartoon: function(l, r, v, part){
            var total = part * 2, angleV, anglePart;
            if(v){
                if(v <= part){
                    angleV = f.angle(v, total);
                    l.style.display = "block";
                    l.style.filter = angleV.ie;
                    l.style.mozTransform = l.style.webkitTransform = l.style.msTransform = l.style.transform = angleV.trans;
                    r.style.display = "none";
                    //ie 鏃嬭浆闈炲眳涓棆杞殑淇
                    if(document.all){
                        l.style.left = angleV.offset.x + "px";
                        l.style.top = angleV.offset.y + "px";
                    }
                }else{
                    v = Math.abs(v - part);
                    angleV = f.angle(v, total);
                    anglePart = f.angle(part, total);
                    l.style.display = "block";
                    l.style.filter = anglePart.ie;
                    l.style.mozTransform = l.style.webkitTransform = l.style.msTransform = l.style.transform = anglePart.trans;
                    r.style.display = "block";
                    r.style.filter = angleV.ie;
                    r.style.mozTransform = r.style.webkitTransform = r.style.msTransform = r.style.transform = angleV.trans;
                    if(document.all){
                        r.style.left = angleV.offset.x + "px";
                        r.style.top = angleV.offset.x + "px";
                    }
                }
            }
        },
        ui: function(){
            f.cartoon(o.goodl, o.goodr, o.goodNum, o.goodPart);
            f.cartoon(o.middlel, o.middler, o.middleNum, o.middlePart);
            f.cartoon(o.badl, o.badr, o.badNum, o.badPart);
        }
    };
    f.ui();
})();