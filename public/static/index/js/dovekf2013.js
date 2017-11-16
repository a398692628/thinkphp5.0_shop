eval(function (B, D, A, G, E, F) {
    function C(A) {
        return A < 62 ? String.fromCharCode(A += A < 26 ? 65 : A < 52 ? 71 : -4) : A < 63 ? "_" : A < 64 ? "$" : C(A >> 6) + C(A & 63);
    }
    while (A > 0) {
        E[C(G--)] = D[--A];
    }
    return B.replace(/[\w\$]+/g, function (A) {
        return E[A] == F[A] ? A : E[A];
    });
}("(_(){b B=_(U,V){z Bs B.Y.DU(U,V)},D=q,A=[],U;B.Y=B.Dd={DU:_(U,V){W(!U)z g;g[R]=4 U===\"BA\"?B.D5(U,V):U;W(4 U===\"_\")z B().BO(U);z g},BO:_(V){B.Ep();W(B.CW)V.l($,B);k W(A)A.CJ(V);z g},Dl:_(U){b V=Bs Dn(\"(\\\\D2|^)\"+U+\"(\\\\D2|V)\");z g[R].Cd.match(V)?j:q},BS:_(V){W(!g.Dl(V))g[R].Cd+=\" \"+V;z g},BX:_(U){b V=g[R];W(!U)V.Cd=\"\";k W(g.Dl(U))V.Cd=V.Cd.CY(U,\" \");z g},e:_(U,A){b V=g[R];W(4 U===\"BA\"){W(A===BZ)z V.Em?V.Em[U]:$.defaultView.getComputedStyle(V,q)[U];k V.u[U]=A}k Bm(b B BN U)V.u[B]=U[B];z g},DC:_(U){b V=g[R];W(V.E$)V.E$(\"beforeEnd\",U);k{b B=V.Dv.createRange(),A;W(V.FS){B.setStartAfter(V.FS);A=B.createContextualFragment(U);V.Ci(A)}k V.Cw=U}z g},FH:_(){b V=g[R];B.BV(V.Bq(\"*\"),_(U,V){V=h});V.ED.Ds(V);V=h;1.EL&&EL()},o:_(U,A){b V=g[R];W(V.CA)V.CA(U,A,q);k{V[\"D9\"+U+A]=A;V[U+A]=_(){V[\"D9\"+U+A](1.event)};V.CS(\"BF\"+U,V[U+A])}z g},EW:_(V,U){g.o(V,_(V){b A=V.target||V.srcElement;U.l(A,V);z g})},B8:_(U,A){b V=g[R];W(V.DQ)V.DQ(U,A,q);k{V.E2(\"BF\"+U,V[U+A]);V[U+A]=h}z g},EE:_(){b V=g[R],F=V.getBoundingClientRect(),D=V.Dv,U=D.BE,C=D.Bc,A=C.Ej||U.Ej||R,B=C.Ew||U.Ew||R,G=F.d+(C2.pageYOffset||C.Ch)-A,E=F.i+(C2.pageXOffset||C.CZ)-B;z{i:E,d:G}}};B.Y.DU.Dd=B.Y;B.D5=_(U,V){V=V||$;W(/^#(\\D0+)V/.Dc(U))z V.En(Dn.DE);W(/^\\D0+V/.Dc(U))z V.Bq(U)[R]};B.BV=_(B,D){b V,E=R,A=B.BD,C=A===BZ;W(C){Bm(V BN B)W(D.l(B[V],V,B[V])===q)CR}k Bm(b U=B[R];E<A&&D.l(U,E,U)!==q;U=B[++E]);};B.CW=q;B.BO=_(){W(!B.CW){W(!$.BE)z Bu(B.BO,Es);B.CW=j;W(A){b V,U=R;while((V=A[U++]))V.l($,B);A=h}}};B.Ep=_(){W(D)z;D=j;W($.CG===\"DX\")z B.BO();W($.CA){$.CA(\"FO\",U,q);1.CA(\"Cx\",B.BO,q)}k W($.CS){$.CS(\"CH\",U);1.CS(\"Dm\",B.BO);b V=q;BP{V=1.frameElement==h}BQ(A){}W($.Bc.Et&&V)C()}};W($.CA)U=_(){$.DQ(\"FO\",U,q);B.BO()};k W($.CS)U=_(){W($.CG===\"DX\"){$.E2(\"CH\",U);B.BO()}};_ C(){W(B.CW)z;BP{$.Bc.Et(\"i\")}BQ(V){Bu(C,S);z}B.BO()}B.E9=_(V){z V&&V.nodeType===S};B.EM=_(V){z Object.Dd.toString.l(V)===\"[object Array]\"};B.B$=_(){b V=$;z V.characterSet||V.B$}();B.EN=!-[S,];B.Bk=B.EN&&!1.Dg;B.C$=_(E,D,U){U=U||$;b V=$.Da(\"link\");V.B$=B.B$;V.rel=\"stylesheet\";V.CT=\"DT/e\";V.El=E;U.Bq(\"FP\")[R].Ci(V);b A=U.styleSheets,C=_(){Bm(b U=R;U<A.BD;U++)W(V===(A[U].ownerNode||A[U].owningElement))z D();Bu(Ev.callee,Du)};D&&C()};b V={};B.addHeadStyle=_(U,C){C=C||$;b A=V[C];W(!A){A=V[C]=C.Da(\"u\");A.setAttribute(\"CT\",\"DT/e\");B(\"FP\")[R].Ci(A)}A.E4&&(A.E4.cssText+=U)||A.Ci(C.createTextNode(U))};B.FG=_(U,C,V){V=V||$;b A=V.Da(\"EA\");A.language=\"Ee\";A.B$=B.B$;A.CT=\"DT/Ee\";A.Dm=A.CH=_(){W(!A.CG||\"loaded\"===A.CG||\"DX\"===A.CG){C&&C();A.Dm=A.CH=h;A.ED.Ds(A)}};A.Bj=U;V.BE.Ci(A)};b E=$.Bq(\"EA\");E=E[E.BD-S].Bj.CY(/\\\\/Br,\"/\");B.Dw=E.FF(\"/\")<R?\".\":E.substring(R,E.FF(\"/\"));B.DK=E.Bt(\"?\")[R];B.Cj=E.Bt(\"?\")[S]||\"\";B.CN=_(V){V.EZ?V.EZ():V.cancelBubble=j};B.C0=_(V){V.ES?V.ES():V.returnValue=q};(_(){b U,V,C,A=_(A){U=A?A.$.Bc:$.Bc;V=A?A.$.BE:$.BE;C=U||V};B.BH=_(B){A(B);z{s:Bl.Cm(C.DS,C.scrollWidth),2:Bl.Cm(C.DR,C.scrollHeight),i:Bl.Cm(U.CZ,V.CZ),d:Bl.Cm(U.Ch,V.Ch)}};B.DF=_(V){A(V);z{s:C.DS,2:C.DR}}})();(_(){b V={};B.p=_ U(A,B){b C=!/\\BW/.Dc(A)?V[A]=V[A]||U($.En(A).Cw):Bs Function(\"ER\",\"b B3=[],print=_(){B3.CJ.apply(B3,Ev);};\"+\"with(ER){B3.CJ('\"+A.CY(/[\\DB\\Q\\FU]/Br,\" \").Bt(\"<%\").CO(\"\\Q\").CY(/((^|%>)[^\\Q]*)'/Br,\"DE\\DB\").CY(/\\Q=(.*?)%>/Br,\"',DE,'\").Bt(\"\\Q\").CO(\"');\").Bt(\"%>\").CO(\"B3.CJ('\").Bt(\"\\DB\").CO(\"\\\\'\")+\"');}z B3.CO('');\");z B?C(B):C}})();B.6=_(U,C,H,D,E,B){B=B||300;b A=+Bs FD(),F,V,G=Ed(_(){F=(+Bs FD()-A)/B;W(F>=S){D.l(H);E&&E.l(U);z Ec(G)}V=C+(H-C)*((-Bl.cos(F*Bl.PI)/T)+R.Du);D.l(V)},S)};W(!1.f)1.f=B})();(_(O){O.Y.Cb=_(D,C,A){b V=g[R],U=D===R?S:R,B=V.DH?_(){V.DH.alpha.DN=g*Dh}:_(){V.u.DN=g};O.6(V,U,D,B,C,A);z g};O.Y.Bw=_(C,E,D,A){b V=g[R],U=B5(g.e(C)),E=B5(E),B=_(){BP{V.u[C]=g+\"a\"}BQ(U){}};O.6(V,U,E,B,D,A);z g};O.DY=1.Ex?_(){BP{1.Ex().removeAllRanges()}BQ(V){}}:_(){BP{$.selection.empty()}BQ(V){}};O.Y.y=_(G,U,L){b H,I,D,B,BK,M,E=O.DF(),N=O.BH(),B0=E.s,V=E.2,K=N.i,A=N.d,J=U||g[R].CX,C=L||g[R].CQ;W(G){H=R;D=B0-J;BK=D/T;I=R;B=V-C;b F=V*R.FN-C/T;M=(C<C6*V/Dt)?F:B/T}k{H=K;D=B0+H-J;BK=D/T;I=A;B=V+I-C;F=V*R.FN-C/T+I;M=(C<C6*V/Dt)?F:(B+I)/T}W(BK<R)BK=R;W(M<R)M=R;z{CE:H,CF:I,B_:D,B9:B,FK:BK,FJ:M}};(_(){b U,V=R;O.Y.Bz=_(BK){b E=BK,H=O.Y.Bz.BG,A,C,D,B,K,I=g;Bm(b G BN H)W(E[G]===BZ)E[G]=H[G];b J=E.BF||g,L=_(H){B=j;E.Cv&&E.Cv();b G=I[R].u.3||E.3;V=G>V?G:V;V++;W(E.y)A=I.y(E.t);C=_(){b U=O.BH();z{D4:H.Dq,D3:H.Do,i:B5(I[R].u.i),d:B5(I[R].u.d),3:V,s:I[R].CX,2:I[R].CQ,Eq:U.i,EF:U.d}}();W(C.s*C.2>=E.Ce){D=j;E.Bo.e({\"s\":C.s-T+\"a\",\"2\":C.2-T+\"a\",\"i\":C.i+\"a\",\"d\":C.d+\"a\",\"3\":C.3,\"D$\":\"block\"})}O.DY();U=Ed(O.DY,20);$.BE.Er&&I[R].Er();O($).o(\"Eu\",M).o(\"EB\",F)};J.o(\"mousedown\",L);b M=_(U){W(B===q)z;K=D?E.Bo:I;b F=O.BH(),J=U.Dq,H=U.Do,G=C.i-C.D4+J-C.Eq+F.i,V=C.d-C.D3+H-C.EF+F.d;W(A){W(G>A.B_)G=A.B_;W(G<A.CE)G=A.CE;W(V>A.B9)V=A.B9;W(V<A.CF)V=A.CF}K.e({\"i\":G+\"a\",\"d\":V+\"a\"})},F=_(){B=q;O($).B8(\"Eu\",M).B8(\"EB\",F);$.BE.Dp&&I[R].Dp();Ec(U);W(D){I.Bw(\"i\",E.Bo.e(\"i\"),h,CL).Bw(\"d\",E.Bo.e(\"d\"),_(){E.CK&&E.CK()},CL);E.Bo.e(\"D$\",\"EU\");D=q}k E.CK&&E.CK()};z g};O.Y.Bz.BG={BF:h,Cv:h,CK:h,t:q,y:j,3:S,Bo:h,Ce:EC}})();b V;O(_(){O.Bk&&O(\"BE\").e(\"EI\")!==\"t\"&&O(\"DZ\").e({EY:\"CC(Cc:Cf)\",EI:\"t\"});V={t:O.Bk?_(U){b B=U.u,C=O.BH(),V=$.Bc,A=\"($.Bc)\",D=B5(B.i)-V.CZ,E=B5(B.d)-V.Ch;g.CB(U);B.E7(\"i\",\"DO(\"+A+\".CZ + \"+D+\") + \\\"a\\\"\");B.E7(\"d\",\"DO(\"+A+\".Ch + \"+E+\") + \\\"a\\\"\")}:_(V){V.u.BI=\"t\"},CB:O.Bk?_(V){b U=V.u;U.BI=\"CB\";U.Ea(\"i\");U.Ea(\"d\")}:_(V){V.u.BI=\"CB\"}}});b I=\"\\Q<c X=\\\"Ef\\\"></c>\\Q<c X=\\\"Eg\\\"><c>\\Q\\Q<!--[W DJ C5]><BY Bj=\\\"Cc:Cf\\\"></BY><![De]-->\\Q</c></c>\\Q<c X=\\\"EP\\\"><c X=\\\"EG\\\">\\Q\\Q<!--[W DJ C5]><BY Bj=\\\"Cc:Cf\\\"></BY><![De]-->\\Q</c></c>\",BK=\"<c X=\\\"<%=X%>\\\" r=\\\"aui_dialog_wrap <%=\\\"aui_\\\" + BT%>\\\">  <% b CV = \\\"aui_dialog Df\\\";\\Db (!Cr) CV += \\\" art_no_border\\\";\\Db (!BJ) CV += \\\" art_no_title\\\";  \\Db (!Bz) CV += \\\" art_no_drag\\\";  %>  <c X=\\\"<%=X%>0\\\" r=\\\"<%=CV%>\\\">  <% W (Cr) { %>\\Q<C1 r=\\\"FI\\\">\\Q\\Q<BB>\\Q\\Q  <Z r=\\\"Bi aui_left_top\\\"></Z>\\Q\\Q  <Z r=\\\"Bi aui_top\\\"></Z>\\Q\\Q  <Z r=\\\"Bi aui_right_top\\\"></Z>\\Q\\Q</BB>\\Q\\Q<BB>\\Q\\Q  <Z r=\\\"Bi aui_left\\\"></Z>\\Q\\Q  <Z r=\\\"aui_center\\\">\\Q\\Q\\Q<% } %>\\Q\\Q\\Q<C1 r=\\\"FI aui_content_table\\\">\\Q\\Q\\Q\\Q<% W (BJ) { %>\\Q\\Q\\Q\\Q<BB>\\Q\\Q\\Q\\Q  <Z <% W (BR) { %>FQ=\\\"T\\\"<% } %> r=\\\"aui_td_title\\\">\\Q\\Q\\Q\\Q\\Q <c r=\\\"aui_title_wrap\\\">\\Q\\Q\\Q\\Q\\Q\\Q<c X=\\\"<%=X%>BJ\\\" r=\\\"aui_title\\\">\\Q\\Q\\Q\\Q\\Q  \\Q\\Q<B4 r=\\\"aui_title_icon\\\"></B4><%=BJ%>\\Q\\Q\\Q\\Q\\Q\\Q</c>\\Q\\Q\\Q\\Q\\Q  \\Q<Cp X=\\\"<%=X%>x\\\" r=\\\"aui_close\\\" El=\\\"#\\\"><%=FA%></Cp>\\Q\\Q\\Q\\Q\\Q </c>\\Q\\Q\\Q\\Q  </Z>\\Q\\Q\\Q\\Q</BB>\\Q\\Q\\Q\\Q  <% } %>\\Q\\Q\\Q\\Q<BB>\\Q\\Q\\Q\\Q  <% W (BJ && BR) { %>\\Q\\Q\\Q\\Q  <Z r=\\\"aui_td_icon\\\"><c r=\\\"aui_icon art_<%=BR%>\\\"></c></Z>\\Q\\Q\\Q\\Q  <% } %>\\Q\\Q\\Q\\Q  <Z X=\\\"<%=X%>C3\\\" r=\\\"aui_td_content\\\" u=\\\"s:<%=s%>;2:<%=2%>\\\">\\Q\\Q\\Q\\Q\\Q<c r=\\\"aui_content_wrap\\\">\\Q\\Q\\Q\\Q\\Q\\Q<c X=\\\"<%=X%>8\\\" r=\\\"aui_content\\\">\\Q\\Q\\Q\\Q\\Q\\Q\\Q<% W (8) { %>\\Q\\Q\\Q\\Q\\Q\\Q\\Q\\Q<%=8%>\\Q\\Q\\Q\\Q\\Q\\Q\\Q<% } k { %>\\Q\\Q\\Q\\Q\\Q\\Q\\Q\\Q<c r=\\\"aui_noContent\\\"></c>\\Q\\Q\\Q\\Q\\Q\\Q\\Q<% } %>\\Q\\Q\\Q\\Q\\Q\\Q</c>\\Q\\Q\\Q\\Q\\Q\\Q<c r=\\\"aui_content_mask\\\"></c>\\Q\\Q\\Q\\Q\\Q\\Q<c r=\\\"aui_loading_tip\\\"><%=E_%></c>\\Q\\Q\\Q\\Q\\Q</c>\\Q\\Q\\Q\\Q  </Z>\\Q\\Q\\Q\\Q</BB>\\Q\\Q\\Q\\Q<% W (v || n) { %>\\Q\\Q\\Q\\Q<BB>\\Q\\Q\\Q\\Q  <Z <% W (BR) { %>FQ=\\\"T\\\"<% } %> r=\\\"aui_td_buttons\\\">\\Q\\Q\\Q\\Q\\Q  <c r=\\\"aui_buttons_wrap\\\">\\Q\\Q\\Q\\Q\\Q\\Q<% W (v) { %><B4 r=\\\"aui_yes\\\"><Cq X=\\\"<%=X%>D1\\\"><%=FB%></Cq></B4><% } %>\\Q\\Q\\Q\\Q\\Q\\Q<% W (n) { %><B4 r=\\\"aui_no\\\"><Cq X=\\\"<%=X%>EH\\\"><%=Ek%></Cq></B4><% } %>\\Q\\Q\\Q\\Q\\Q  </c>\\Q\\Q\\Q\\Q\\Q</Z>\\Q\\Q\\Q\\Q</BB>\\Q\\Q\\Q\\Q<% } %>\\Q\\Q\\Q</C1>\\Q\\Q\\Q<% W (Cr) { %>\\Q\\Q  </Z>\\Q\\Q  <Z r=\\\"Bi aui_right\\\"></Z>\\Q\\Q</BB>\\Q\\Q<BB>\\Q\\Q  <Z r=\\\"Bi aui_left_bottom\\\"></Z>\\Q\\Q  <Z r=\\\"Bi aui_bottom\\\"></Z>\\Q\\Q  <Z r=\\\"Bi aui_right_bottom\\\"></Z>\\Q\\Q</BB>\\Q</C1>\\Q<% } %>\\Q<!--[W DJ C5]><BY X=\\\"<%=X%>CU\\\" r=\\\"aui_ie6_select_mask\\\" Bj=\\\"Cc:Cf\\\"></BY><![De]-->  </c></c>\",A=R,M=[],N=[],H={},Bp=O(\"DZ\"),B=(\"DH\"BN $.Bc),B0=[\"DOMMouseScroll\",\"mousewheel\",\"scroll\",\"E5\"],D,C9,C,Bg,Bf,Bh,Cl,K,U,E,Be,B1,L=_(L){L.p&&(L.8=O.p(L.p,L.8));b Dy=O.p(BK,L);O(\"BE\").DC(Dy);b BL=\"#\"+L.X,A={B7:O(BL),0:O(BL+\"0\"),C3:O(BL+\"C3\"),BJ:O(BL+\"BJ\"),8:O(BL+\"8\"),Di:O(BL+\"D1\"),C8:O(BL+\"EH\"),Dk:O(BL+\"x\"),CU:O(BL+\"CU\")},Dz,F,Br,M,C_,Cn,G,I,Co=_(){b U=O.DF(),V=O.BH();Dz=U.s;F=U.2;Br=V.i;M=V.d;C_=A.0[R].CX;Cn=A.0[R].CQ};Co();b BW,CP,B2,E=h,J={BF:_(){N.CJ(P);V.t(A.0[R]);J.3();W(!B1)B1=_(V){b A=V.CD;(A===37||A===39||A===C7)&&Bh.w();W((V.DP&&A===82)||(V.DP&&A===65)||A===D6||A===C7||A===38||A===DM||A===FV){Be(V);Bh.BI().w();BP{V.CD=R}BQ(U){}O.C0(V)}};W(!Cl)Cl=_(V){L.E0?Bh.x&&Bh.x():Be(V)};W(!Be)Be=_(V){O.CN(V);O.C0(V)};W(N.BD===S){O($).o(\"DD\",B1);O.BV(B0,_(U,V){O($).o(V,Be)});Bg.o(\"EO\",Cl);W(\"DG\"BN $){b C=O.BH();Bg.e({s:C.s+\"a\",2:C.2+\"a\"})}b U=O(\"BE\").e(\"backgroundPosition\");U=U&&U.Bt(\" \")[R];U=U!==\"7\"&&U!==\"50%\";U&&O.BH().2>F&&Bp.BS(\"E6\");L.6&&!B?Bg.BS(\"Ct\").Cb(S):Bg.BX(\"Ct\");Bp.BS(\"D7\")}A.0.o(\"E5\",_(V){O.CN(V)});A.0.o(\"DD\",_(V){b U=V.CD;W(U===D6)z;O.CN(V)});Bh=P},B6:_(V){N.splice(N.BD-S,S);b U=_(){W(N.BD===R){Bp.BX(\"D7\");Bp.BX(\"E6\");O.BV(B0,_(U,V){O($).B8(V,Be)});O($).B8(\"DD\",B1);B1=Be=h;N=[]}k Bh=Bf=N[N.BD-S].3();V&&V()};L.6&&N.BD===R&&!B?Bg.Cb(R,U):U()},3:_(){Bg.e(\"3\",U);D.e(\"3\",U)}},P={8:_(V){W(V===BZ)z A.8[R];k{P.Bd.B6().3().w();A.8[R].Cw=V;z P}},E3:_(U,V,D){b B=A.C3,C=_(){B2();D&&D.l(P)};L.s=U;L.2=V;W(L.6)B.Bw(\"s\",U).Bw(\"2\",V,C);k{B.e({\"s\":U+\"a\",\"2\":V+\"a\"});C()}z P},BI:_(B,D,C){C=C||L.t||q;BW&&Co();A.0[R].u.BI=\"CB\";b U=A.0.y(O.Bk?q:C);W(B===BZ||B===\"7\")G=U.FK;k W(B===\"i\")G=U.CE;k W(B===\"right\")G=U.B_;k W(4 B===\"Ck\"){W(L.y){B=B>U.B_?U.B_:B;B=B<U.CE?U.CE:B}G=B}W(D===BZ||D===\"7\")I=U.FJ;k W(D===\"d\")I=U.CF;k W(D===\"bottom\")I=U.B9;k W(4 D===\"Ck\"){W(L.y){D=D>U.B9?U.B9:D;D=D<U.CF?U.CF:D}I=D}L.i=B;L.d=D;W(L.6&&BW)A.0.Bw(\"i\",G).Bw(\"d\",I);k A.0.e({\"i\":G+\"a\",\"d\":I+\"a\"});C&&V.t(A.0[R]);z P},5:_(U){W(!U)z P;W(4 U===\"BA\")U=O(U)[R]||O(\"#\"+U)[R];E&&E[R].Bv&&(E[R].Bv=h);U.Bv=L.X;E=O(U);L.5=U;BW&&Co();b V=(C_-E[R].CX)/T,D=E[R].CQ,B=E.EE(),C=B.i,A=B.d;W(V>C)V=R;W(A+D>M+F-Cn)D=R-Cn;z P.BI(C+Br-V,A+D)},Bd:{BF:_(){A.0.BS(\"EK\");z P},B6:_(){A.0.BX(\"EK\");z P}},3:_(){U++;A.0.e(\"3\",U);N.BD===R&&D.e(\"3\",U);A.B7.e(\"3\",U);C9.e(\"3\",U+S);K&&K.BX(\"Df\");K=A.0;K.BS(\"Df\");Bf=P;z P},w:_(V){W(4 V===\"BA\")V=O(V)[R]||O(\"#\"+V)[R];V=(O.E9(V)&&V)||A.C8[R]||A.Di[R]||A.Dk[R];Bu(_(){BP{V.w()}BQ(U){}},DM);z P},CI:_(V){L.6&&!B?A.0.BS(\"Ct\").Cb(S,V,CL):V&&V();A.B7.e(\"C4\",\"visible\");z P},Ei:_(U){b V=_(){b V=A.0[R].u.DN;W(V)V=h;A.B7.e(\"C4\",\"Eh\");U&&U()};L.6&&!B?A.0.BX(\"Ct\").Cb(R,V,CL):V();z P},x:_(){W(!H[L.X])z h;P.Bb();H&&H[L.X]&&FL(H[L.X]);L.Bn&&A.0.e(\"C4\",\"Eh\");b V=_(){W(E&&E[R])E[R].Bv=h;W(P===Bf)Bf=h;W(K===A.0)K=h;b V=_(){L.9&&L.9.l(P,1);A.B7.FH();O.BV(P,_(V){FL P[V]});P=h};P.Ei(V)};L.Bn?J.B6(V):V();z h},Bb:_(V){CP&&Ca(CP);W(V)CP=Bu(_(){P.9();Ca(CP)},1000*V);z P},v:_(){z 4 L.v!==\"_\"||L.v.l(P,1)!==q?P.x():P},n:_(){z 4 L.n!==\"_\"||L.n.l(P,1)!==q?P.x():P},9:_(V){V&&O.C0(V);b U=L.n;z 4 U!==\"_\"||U.l(P,1)!==q?P.x():P},Cy:A,m:L};W(L.Bn){L.t=j;L.5=h}W(L.5||\"DG\"BN $)L.t=q;P.3();L.Bb&&P.Bb(L.Bb);L.Bn&&J.BF();!L.8&&P.Bd.BF();L.5?P.5(L.5):P.BI(L.i,L.d,L.t);A.0.EW(\"EO\",_(U){b V=g.nodeName.toLowerCase();switch(g){DW A.Di[R]:P.v();CR;DW A.C8[R]:P.n();CR;DW A.Dk[R]:P.9(U);CR;Dj:V===\"Z\"||V===\"c\"&&P.3();B2();CR}});A.8.o(\"D8\",_(V){V.CD===Eo&&O.CN(V);V.DP&&(V.CD===Es)&&P.v()});!L.y&&A.0.e({s:A.0[R].DS+\"a\",2:A.0[R].DR+\"a\"});L.Bz&&A.BJ[R]&&A.0.Bz({BF:A.BJ,t:O.Bk?q:L.t,Bo:C,Ce:L.Ce,3:L.3,y:L.y,Cv:_(){L.t&&V.t(C[R]);W(L.Bn)Bh=P;P.3().w();A.0.BS(\"EV\");Bp.BS(\"EQ\")},CK:_(){O.Bk&&L.t&&V.t(A.0[R]);V.CB(C[R]);A.0.BX(\"EV\");Bp.BX(\"EQ\")}});W(O.Bk){b Cp=A.B7[R].Bq(\"*\");O.BV(Cp,_(B,V){b U=O(V).e(\"ie6png\"),A=O.0.BG.Cu+\"/BT/\"+U;W(U){V.u.EY=\"EU\";V.runtimeStyle.filter=\"progid:DXImageTransform.D_.\"+\"AlphaImageLoader(Bj='\"+A+\"',sizingMethod='crop')\"}U=A=h})}L.CI&&P.CI();B2=_(){A.CU[R]&&A.CU.e({\"s\":A.0[R].CX,\"2\":A.0[R].CQ})};B2();Bu(B2,DM);L.w&&P.w(L.w);L.BU&&L.BU.l(P,1);BW=j;O(1).o(\"unload\",_(){W(!P)z;L.6=q;P.x});z P};O.Y.0=_(J,B,D){b G=J.1||O.0.BG.1;W(4 G===\"BA\"&&G!==\"C2\")G=1[G];W(G&&1!=G&&G.f&&G.f.0){J.1=q;z G.f.0(J,B,D)}b F=J||{},C=O.0.BG;W(4 F===\"BA\")F={8:F,t:j};W(4 F.s===\"Ck\")F.s=F.s+\"a\";W(4 F.2===\"Ck\")F.2=F.2+\"a\";W($.compatMode===\"BackCompat\")z Bx(F.8);F.5=g[R]||F.5;F.v=F.v||B;F.n=F.n||D;W(!E)z M.CJ(F);W(H[F.X])z H[F.X].3().CI().w();W(F.5){b V=F.5;W(4 V===\"BA\")V=O(\"#\"+V)[R];W(V.Bv)z H[V.Bv].5(V).3().CI().w()}A++;F.X=F.X||\"Bv\"+A;Bm(b I BN C)W(F[I]===BZ)F[I]=C[I];U=U||F.3;W(O.EM(F.BT))F.BT=F.BT[R];z H[F.X]=L(F)};O.0=O().0;b G={BJ:\"\\u63d0\\u793a\",p:h,8:h,v:h,n:h,FB:\"\\u786e\\u5b9a\",Ek:\"\\u53d6\\u6d88\",s:\"Cs\",2:\"Cs\",BT:\"Dj\",BR:h,Cr:j,E_:\"Loading..\",FA:\"\\xd7\",t:q,w:j,1:\"C2\",E8:j,6:j,Bn:q,E0:q,i:\"7\",d:\"7\",Bb:h,BU:h,9:h,5:h,Bz:j,y:j,DA:j,Cu:O.Dw,CI:j,3:20001,Ce:EC};O.Y.0.BG=1.DV||G;BP{$.execCommand(\"BackgroundImageCache\",q,j)}BQ(J){}b F={};O.Y.0.FE=_(A,V){b U=_(U){W(F[U])z;O.C$(O.0.BG.Cu+\"/BT/\"+U+\".e\");V!==q&&O.0({BT:U,Bb:C7,y:q,w:q,Bn:q,t:q,CT:q,BR:\"Bx\",i:-9999,v:j,n:j});F[U]=j};W(4 A===\"BA\")U(A);k O.BV(A,_(A,V){U(V)})};b BW=_(){W(!E)z O.C$(O.0.BG.Cu+\"/core/f.0.e\",_(){E=j;BW()});O(\"BE\").DC(I);D=O(\"#Ef\");Bg=O(\"#Eg\");C9=O(\"#EP\");C=O(\"#EG\");b U=_(V){V.CD===Eo&&Bf&&Bf.m.E8&&Bf.9()};O($).o(\"D8\",U);W(!(\"DG\"BN $)){b V,B=O.BH(),A=_(){V&&Ca(V);b U=B;B=O.BH();W(Bl.EJ(U.2-B.2)>R||Bl.EJ(U.s-B.s)===17)z Ca(V);V=Bu(_(){O.BV(H,_(U,V){V.m.5?V.5(V.m.5):(4 V.m.i===\"BA\"||4 V.m.d===\"BA\")&&V.BI(V.m.i,V.m.d)});Ca(V)},CL)};O(1).o(\"resize\",A)}O.0.FE(O.0.BG.BT,O.0.BG.DA);W(M.BD>R){O.BV(M,_(U,V){O.0(V)});M=h}};O(BW);O.Y.0.Cz=_(U,A){BP{U.$}BQ(V){z}W(U.$.Bq(\"FT\").BD!==R)z U.CM.$.Bq(\"FT\").BD===R?O.Y.0.Cz(U.CM,A):q;O(_(){W(U==1)z;W(U.f)A&&A();k{U.DV=O.Y.0.BG;U.DV.DA=q;b V=O.Cj===\"\"?O.DK:O.DK+\"?\"+O.Cj;O.FG(V,A,U.$)}})};O.0.Cz(1.CM);O.Y.0.Eb=H})(f);(_(V,BM){b E1=1.Bx,By=\"artPlus\",Dr=BM?_(U,V){BM(U).DZ(V)}:_(U,V){U.Cw=V},FR=BM?_(A,U,V){BM.ajax({CC:A,success:_(V){U&&U(V)},Cg:V})}:_(B,A,V){b U=1.Dg?Bs Dg():Bs ActiveXObject(\"D_.XMLHTTP\");U.CH=_(){W(U.CG===C6&&U.status===200){A&&A(U.responseText);U.CH=h}};U.FC(\"GET\",B,S);!V&&U.setRequestHeader(\"If-Modified-Since\",\"R\");U.send(h)};V.Y.0.Bx=_(U){z 4 U!==\"BA\"?E1(U):V.0({X:By+\"Alert\",BR:\"Bx\",Bn:j,1:\"d\",8:U,v:j})};V.Y.0.Ez=_(A,U,B){z V.0({X:By+\"Confirm\",BR:\"Ez\",t:j,1:\"d\",8:A,v:_(V){z U.l(g,V)},n:_(V){z B&&B.l(g,V)}})};V.Y.0.Ey=_(A,U,C){C=C||\"\";b B=By+\"promptInput\";z V.0({X:By+\"Prompt\",BR:\"Ey\",t:j,1:\"d\",8:\"\\Q\\Q\\Q<c>\"+A+\"</c>\\Q\\Q\\Q<c>\\Q\\Q\\Q  <input X=\\\"\"+B+\"\\\" ET=\\\"\"+C+\"\\\" CT=\\\"txt\\\" u=\\\"s:20em;padding:3px\\\" />\\Q\\Q\\Q</c>\\Q\\Q\",w:B,v:_(V){z U&&U.l(g,V.f(\"#\"+B)[R].ET,V)},n:j})};V.Y.0.DL=_(U,A){z V.0({X:By+\"DL\",BR:\"DL\",BT:\"Dj\",t:j,1:\"d\",BJ:q,8:U,Bb:A||T})};V.Y.0.FC=_(E,H){b B,C,G,D=H,U=By+\"Open\",A={1:\"d\",8:{CC:E},p:\"<BY r=\\\"\"+U+\"\\\" Bj=\\\"<%=CC%>\\\" frameborder=\\\"R\\\" allowtransparency=\\\"j\\\"></BY>\",BU:_(A){b U=g;C=V(\"BY\",U.Cy.8[R]);G=C[R].contentWindow;U.Bd.BF();B=_(){V.0.Cz(G,_(){G.f.Y.0.x=_(){U.x()};G.f.Y.0.CM=1});U.m.6=q;W(U.m.s===\"Cs\"&&U.m.2===\"Cs\"){BP{b B=V.BH(G);U.E3(B.s,B.2)}BQ(E){}}U.Cy.8.BS(\"art_full\");C.e({\"s\":\"Dh%\",\"2\":\"Dh%\"});U.m.i===\"7\"&&U.m.d===\"7\"&&U.BI(\"7\",\"7\");U.Bd.B6();D.BU&&D.BU.l(U,A)};C.o(\"Cx\",B)},9:_(V){C.B8(\"Cx\",B);C[R].Bj=\"Cc:Cf\";D.9&&D.9.l(g,V)}};W(D.v)A.v=_(V){z D.v.l(g,G,V)};W(D.n)A.n=_(V){z D.n.l(g,G,V)};Bm(b F BN D)W(A[F]===BZ)A[F]=D[F];V.0(A);z G};V.Y.0.x=_(){};V.Y.0.CM=1;V.Y.0.Cx=_(CC,FM,Cg){Cg=Cg||q;b BC=FM||{},p=4 BC===\"BA\"?BC:h,ajaxLoad,m={1:\"d\",8:\"Bd..\",BU:_(EX){b Ba=g;Ba.Bd.BF();FR(CC,_(8){Ba.m.6=q;W(p)8=V.p(p,1.DI&&DI.Dx?DI.Dx(8):DO(\"(\"+8+\")\"));Dr(Ba.Cy.8[R],8);Ba.m.i===\"7\"&&Ba.m.d===\"7\"&&Ba.BI(\"7\",\"7\");Ba.Bd.B6();BC.BU&&BC.BU.l(Ba,EX)},Cg)},9:_(V){BC.9&&BC.9.l(g,V)}};W(BC.p){p=BC.p;BC.p=h}Bm(b P BN BC)W(m[P]===BZ)m[P]=BC[P];b dig=V.0(m)};V.Y.0.get=_(V,U){U=U||1;z U.f.0.Eb[V]};W(V.Cj===\"plus\")1.Bx=V.Y.0.Bx;W(BM&&!BM.0&&!BM.Y.0){BM.extend({0:f.0});BM.Y.0=_(A,V,U){z f(g[R]).0(A,V,U)}}})(f,1.jQuery)", "O|P|i|t|0|1|2|_|$|if|id|fn|td|px|var|div|top|css|art|this|null|left|true|else|call|data|noFn|bind|tmpl|false|class|width|fixed|style|yesFn|focus|close|limit|return|dialog|window|height|zIndex|typeof|follow|effect|center|content|closeFn|function|document|string|tr|opt|length|body|on|defaults|doc|position|title|N|d|jq|in|ready|try|catch|icon|addClass|skin|initFn|each|W|removeClass|iframe|undefined|api|time|documentElement|loading|T|S|R|X|aui_border|src|isIE6|Math|for|lock|temp|U|getElementsByTagName|g|new|split|setTimeout|artDialog|cssFlash|alert|_name|drag|Q|Z|f|p|span|parseInt|off|wrap|unbind|maxY|maxX|charset|addEventListener|absolute|url|keyCode|minX|minY|readyState|onreadystatechange|show|push|upFn|150|parent|stopBubble|join|h|offsetHeight|break|attachEvent|type|ie6_select_mask|_css|isReady|offsetWidth|replace|scrollLeft|clearTimeout|opacityFlash|about|className|showTemp|blank|cache|scrollTop|appendChild|getArgs|number|Y|max|b|c|a|button|border|auto|art_opacity|path|downFn|innerHTML|load|ui|inner|stopDefault|table|self|td_content|visibility|6|4|9|noBtn|V|e|getStyle|loadBg|r|append|keydown|$1|win|ontouchend|filters|JSON|IE|getUrl|tips|40|opacity|eval|ctrlKey|removeEventListener|clientHeight|clientWidth|text|init|artDialogDefaults|case|complete|clsSelect|html|createElement|tif|test|prototype|endif|art_focus|XMLHttpRequest|100|yesBtn|default|closeBtn|hasClass|onload|RegExp|clientY|releaseCapture|clientX|_html|removeChild|7|5|ownerDocument|getPath|parse|j|k|w|yes|s|y|x|selector|116|art_page_lock|keyup|$e|Microsoft|display|script|mouseup|100000|parentNode|offset|docTop|aui_temp|no|backgroundAttachment|abs|art_loading|CollectGarbage|isArray|isIE|click|aui_temp_wrap|art_page_move|obj|preventDefault|value|none|art_move|live|here|backgroundImage|stopPropagation|removeExpression|dialogList|clearInterval|setInterval|javascript|aui_iframe_mask|aui_overlay|hidden|hide|clientTop|noText|href|currentStyle|getElementById|27|bindReady|docLeft|setCapture|13|doScroll|mousemove|arguments|clientLeft|getSelection|prompt|confirm|lockClick|_alert|detachEvent|size|styleSheet|contextmenu|art_page_full|setExpression|esc|isElem|loadingTip|insertAdjacentHTML|closeText|yesText|open|Date|loadSkin|lastIndexOf|getScript|remove|aui_table|centerY|centerX|delete|options|382|DOMContentLoaded|head|colspan|_load|lastChild|frameset|n|8".split("|"), 329, 341, {}, {}));
var DOVEKF = {};
DOVEKF.ticket = null;
DOVEKF.dealerid = null;
DOVEKF.disname = null;
DOVEKF.uname = null;
DOVEKF.utype = 2;
DOVEKF.productCatalogid = 702;
DOVEKF.product = "";
DOVEKF.host = "dove.zol.com.cn";
DOVEKF.port = 443;
DOVEKF.login = false;
DOVEKF.cusname = null;
DOVEKF.firstmessage = true;
DOVEKF.tempmessage = [];
DOVEKF.reverse = [];
DOVEKF.pathinfo="http://icon.zol-img.com.cn/saas/webim/";
//DOVEKF.pathinfo = "http://mytest.zol.com.cn/wi/supainew/im/";
DOVEKF.fromurl = window.location;
DOVEKF.cleared = false;
DOVEKF.inmobile = null;
DOVEKF.inqq = null;
DOVEKF.inmail = null;
DOVEKF.kfinfo = null;
DOVEKF.currwin = "";
DOVEKF.quemsg = "";
DOVEKF.dologin = false;
DOVEKF.emoinit = false;
DOVEKF.ischat = false;
DOVEKF.ie6 = typeof document.body.style.maxHeight === "undefined";
DOVEKF.defaulttitle = document.title;
DOVEKF.getScript = function (url, fnback, simple) {
    var s, c, fn = "jsonp" + (+new Date()), d = document, head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
    if(url.indexOf('callback') == -1) {
        src = url + (simple ? "" : (url.indexOf("?") == "-1" ? ("?jsoncallback=" + fn) : ("&jsoncallback=" + fn)))
    } else {
        src = url + fn;
    }
    (s = d.createElement("script")).setAttribute("type", "text/javascript");
    s.src = src;
    window[fn] = function () {
        fnback && fnback.apply(null, arguments);
        c = 1;
    };
    function done() {
        s.parentNode.removeChild(s);
        c || fnback && fnback();
    }
    s.onload = s.onreadystatechange = function () {
        s.readyState ? s.readyState.toLowerCase() == "loaded" && done() : done();
    };
    head.insertBefore(s, head.firstChild);
};
if (typeof (businessname) != "undefined") {
    DOVEKF.dealerid = businessname;
}
if (typeof (bType) != "undefined") {
    DOVEKF.utype = bType;
}
if (typeof (chatUserId) != "undefined") {
    DOVEKF.uname = chatUserId;
} else {
    DOVEKF.utype = 2;
}
if (typeof (procatid) != "undefined") {
    DOVEKF.productCatalogid = procatid;
}
if (typeof (proname) != "undefined") {
    DOVEKF.product = proname;
}
DOVEKF.cdhost = DOVEKF.host;
DOVEKF.dmesshost = "";
if(/.*zol\.com$/.test(window.location.host)) {
    DOVEKF.cdhost = DOVEKF.dmesshost = "city.zol.com";
} else if(/.*zol\.com\.cn$/.test(window.location.host)) {
    document.domain = "zol.com.cn";
    DOVEKF.dmesshost = "dovei.zol.com.cn";
}
DOVEKF._r = new Date().getTime();
DOVEKF.objj = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\"" + "width=\"1\" height=\"1\" id=\"imCom\" type=\"application-x-oleobject\">" + "<param name=\"movie\" value=\"" + DOVEKF.pathinfo + "imCom.swf?_r="+DOVEKF._r+"\" />" + "<param name=\"quality\" value=\"high\" />" + "<param name=\"wmode\" value=\"transparent\" />" + "<param name=\"bgcolor\" value=\"#ffffff\" />" + "<param name=\"allowScriptAccess\" value=\"always\" />" + "<param name=\"allowNetworking\" value=\"all\" />" + "<param name=\"allowFullScreen\" value=\"true\" />" + "<embed type=\"application/x-shockwave-flash\" src=\"" + DOVEKF.pathinfo + "imCom.swf?_r="+DOVEKF._r+"\"" + "width=\"1\" height=\"1\" play=\"true\"" + "name=\"imCom\" id=\"imCom\" quality=\"high\" wmode=\"transparent\" allowScriptAccess=\"always\" allowNetworking=\"all\">" + "</embed>" + "</object>";
DOVEKF.emoconfig = [["/jy", "\u60ca\u8bb6"], ["/pz", "\u6487\u5634"], ["/se", "\u8272"], ["/fd", "\u53d1\u5446"], ["/dy", "\u5f97\u610f"], ["/ll", "\u6d41\u6cea"], ["/hx", "\u5bb3\u7f9e"], ["/bz", "\u95ed\u5634"], ["/shui", "\u7761"], ["/dk", "\u5927\u54ed"], ["/gg", "\u5c34\u5c2c"], ["/fn", "\u53d1\u6012"], ["/tp", "\u8c03\u76ae"], ["/cy", "\u5472\u7259"], ["/wx", "\u5fae\u7b11"], ["/ng", "\u96be\u8fc7"], ["/kuk", "\u9177"], ["/feid", "\u975e\u5178"], ["/zk", "\u6293\u72c2"], ["/tu", "\u5410"], ["/tx", "\u5077\u7b11"], ["/ka", "\u53ef\u7231"], ["/baiy", "\u767d\u773c"], ["/am", "\u50b2\u6162"], ["/jie", "\u9965\u997f"], ["/kun", "\u56f0"], ["/jk", "\u60ca\u6050"], ["/lh", "\u6d41\u6c57"], ["/hanx", "\u61a8\u7b11"], ["/db", "\u5927\u5175"], ["/fendou", "\u594b\u6597"], ["/zhm", "\u5492\u9a82"], ["/yiw", "\u7591\u95ee"], ["/xu", "\u5618..."], ["/yun", "\u6655"], ["/zhem", "\u6298\u78e8"], ["/shuai", "\u8870"], ["/kl", "\u9ab7\u9ac5"], ["/qiao", "\u6572\u6253"], ["/zj", "\u518d\u89c1"], ["/shan", "\u95ea\u4eba"], ["/fad", "\u53d1\u6296"], ["/aiq", "\u7231\u60c5"], ["/tiao", "\u8df3"], ["/zhao", "\u627e"], ["/mm", "\u7f8e\u7709"], ["/zt", "\u732a\u5934"], ["/maom", "\u732b\u54aa"], ["/xg", "\u5c0f\u72d7"], ["/yb", "\u62e5\u62b1"], ["/qianc", "\u94b1"], ["/dp", "\u706f\u6ce1"], ["/bei", "\u9152\u676f"], ["/dg", "\u86cb\u7cd5"], ["/shd", "\u95ea\u7535"], ["/zhd", "\u70b8\u5f39"], ["/dao", "\u5230"], ["/zq", "\u8db3\u7403"], ["/yy", "\u97f3\u4e50"], ["/bb", "\u4fbf\u4fbf"], ["/kf", "\u5496\u5561"], ["/fan", "\u996d"], ["/yw", "\u836f\u4e38"], ["/mg", "\u73ab\u7470"], ["/dx", "\u51cb\u8c22"], ["/wen", "\u543b"], ["/xin", "\u7231\u5fc3"], ["/xs", "\u5fc3\u788e"], ["/hy", "\u4f1a\u8bae"], ["/lw", "\u793c\u7269"], ["/dh", "\u7535\u8bdd"], ["/sj", "\u65f6\u95f4"], ["/yj", "\u90ae\u4ef6"], ["/ds", "\u7535\u89c6"], ["/ty", "\u592a\u9633"], ["/yl", "\u6708\u4eae"], ["/qiang", "\u5f3a"], ["/ruo", "\u5f31"], ["/ws", "\u63e1\u624b"], ["/shl", "\u80dc\u5229"], ["/dd", "\u591a\u591a"], ["/mn", "\u7f8e\u5973"], ["/hl", "\u6c49\u826f"], ["/maomao", "\u6bdb\u6bdb"], ["/qz", "Q\u4ed4"], ["/fw", "\u98de\u543b"], ["/oh", "\u6004\u706b"], ["/bj", "\u767d\u9152"], ["/qsh", "\u6c7d\u6c34"], ["/xig", "\u897f\u74dc"], ["/xy", "\u4e0b\u96e8"], ["/duoy", "\u591a\u4e91"], ["/xr", "\u96ea\u4eba"], ["/xixing", "\u661f\u661f"], ["/nv", "\u5973"], ["/nan", "\u7537"]];
DOVEKF.emoticons = [];
for (var i = 0; i < DOVEKF.emoconfig.length; i++) {
    DOVEKF.emoticons[i] = "<img src=\"" + DOVEKF.pathinfo + "images/emoticons/" + i + ".gif\" id=\"" + DOVEKF.emoconfig[i][0] + "\" width=\"20px\" height=\"20px\" title=\"" + DOVEKF.emoconfig[i][1] + "\"/>";
}
document.writeln("<link href=\"" + DOVEKF.pathinfo + "css/dovekf2013.css\" rel=\"stylesheet\" type=\"text/css\" />");
document.writeln("<div class=\"doveweb_embox\" id=\"ems\" style=\"display:none;\"></div>");
document.writeln("<span id=\"objDiv\"></span>");
var I18N = {welcome:"\u60a8\u597d\uff0c\u6b22\u8fce\u5149\u4e34\uff0c\u6709\u4ec0\u4e48\u9700\u8981\u5e2e\u52a9\u7684\u5417?", message_tip:"\u6765\u6d88\u606f\u4e86!--", bq_display:"\u8868\u60c5", que_online:"\u5728\u7ebf\u54a8\u8be2", info_tip:"\u6dfb\u52a0\u8054\u7cfb\u4fe1\u606f", name:"\u59d3\u540d\uff1a", mobile:"\u624b\u673a\uff1a", save:"\u4fdd\u5b58", clear:"\u6e05\u9664", cancle:"\u53d6\u6d88", input_tip:"\u5e26*\u53f7\u7684\u5fc5\u586b<br/>" + "\u7535\u8bdd\u683c\u5f0f\uff1a\u533a\u53f7-\u7535\u8bdd\u53f7\u7801-\u5206\u673a", mobile_not_null:"\u624b\u673a\u4e0d\u80fd\u4e3a\u7a7a", mobile_not_correct:"\u624b\u673a\u683c\u5f0f\u4e0d\u6b63\u786e", default_wintitle:"\u5728\u7ebf\u5ba2\u670d", user_submit:"\u7f51\u53cb\u767b\u8bb0", user_edit:"\u7f51\u53cb\u4fee\u6539", mobile_tip:"11\u4f4d\u6570\u5b57", kf_online:"\u5728\u7ebf\u7684\u5ba2\u670d\uff1a", ask_online:"\u5728\u7ebf\u54a8\u8be2", service_name:"\u7f51\u5e97\u5ba2\u670d", win_title:"\u751f\u610f\u5b9d-\u5728\u7ebf\u5ba2\u670d"};
DOVEKF.djnames = {names:[], putnames:function (name) {
    this.names = name;
}, contain:function (name) {
    for (var i = 0; i < this.names.length; i++) {
        if (this.names[i] == name) {
            return true;
        }
    }
    return false;
}, putname:function (name) {
    if (!this.contain(name)) {
        this.names.push(name);
    }
}};
DOVEKF.processDj = function () {
    var cusname = getCookie("cusname");
    if (null == cusname) {
        var uname = getCookie("anony");
        if (null != uname) {
            DOVEKF.cusname = uname;
        } else {
            DOVEKF.cusname = null;
        }
    } else {
        DOVEKF.cusname = cusname;
        var contact = getCookie("djcontact");
        if (contact) {
            var contacts = contact.split("--");
            DOVEKF.inmobile = (contacts[0] == "" ? null : contacts[0]);
        }
        var names = getCookie("djnames");
        if (names) {
            DOVEKF.djnames.putnames(names.split("--"));
        }
    }
};
DOVEKF.processDj();
DOVEKF.getExpire = function (week,day) {
    dt = new Date();
    if (week) {
        var addday = dt.getDay() == 0 ? 0 : 7 - dt.getDay();
        dt.setDate(dt.getDate() + addday);
    } else if(day) {
        dt.setDate(dt.getDate() + day);
    }
    dt.setHours(24);
    dt.setMinutes(0);
    dt.setSeconds(0);
    return dt.getTime() - new Date().getTime();
};
function writedovepicss() {
    var pics = ["images/win_new/dove_logo.jpg", "images/win_new/icon_assessment.gif", "images/win_new/icon_enregister.gif", "images/win_new/icon_face.gif", "images/win_new/top_bg.jpg", "images/win_new/win_btn_close.jpg", "images/win_new/win_btn_send.jpg", "images/win_new/win_tab_more.jpg"];
    for (var i = 0; i < pics.length; i++) {
        var pic = new Image();
        pic.src = DOVEKF.pathinfo + pics[i];
    }
}
function initEmoticon() {
    if (DOVEKF.emoinit) {
        return;
    }
    var emObj = document.getElementById("ems");
    for (var i = 0; i < DOVEKF.emoticons.length; i++) {
        var aObj = document.createElement("span");
        aObj.innerHTML = "<div width=\"20px\" height=\"20px\" title=\"" + DOVEKF.emoconfig[i][1] + "\" id=\"" + DOVEKF.emoconfig[i][0] + "\" style=\"border: 1px solid rgb(255, 255, 255);\"></div>";
        if (i > 0 && i < 16) {
            aObj.className = "lf";
        }
        if (i >= 16 && i != 16 && i != 32 && i != 48 && i != 64 && i != 80) {
            aObj.className = "tl";
        } else {
            if (i == 16 || i == 32 || i == 48 || i == 64 || i == 80) {
                aObj.className = "t";
            }
        }
        emObj.appendChild(aObj);
        /*if ((i + 1) % 16 == 0) {
            emObj.appendChild(document.createElement("br"));
        }*/
    }
    var pics = emObj.getElementsByTagName("div");
    for (var i = 0; i < pics.length; i++) {
        pics[i].onmouseover = function () {
            this.style.border = "#aaccff 1px solid";
        };
        pics[i].onmouseout = function () {
            this.style.border = "#ffffff 1px solid";
        };
    }
    document.getElementById("ems").style.display = "none";
    DOVEKF.emoinit = true;
}
function showEM(e, jid) {
    if (!DOVEKF.emoinit) {
        initEmoticon();
    }
    var winobj = document.getElementById("chatwin");
    var obj = document.getElementById("ems");
    obj.style.display = "none";
    if(DOVEKF.ie6) {
        var otop = DOVEKF.wininfo.offtop+DOVEKF.wininfo.height-200;
        obj.style.setExpression("top","eval((document.documentElement).scrollTop+"+otop+")+'px'")
    } else {
        obj.style.top = (DOVEKF.wininfo.offtop + DOVEKF.wininfo.height-200 + (DOVEKF.ie6?document.documentElement.scrollTop:0)) + "px";
    }
    var wd = parseInt(document.documentElement.clientWidth) - parseInt(winobj.style.left) - 20;
    if (wd > 420) {
        obj.style.left = parseInt(winobj.style.left) + 10 + "px";
    } else {
        obj.style.left = (parseInt(document.documentElement.clientWidth) - 420) + "px";
    }
    obj.style.display = "";
    var pics = obj.getElementsByTagName("div");
    for (var i = 0; i < pics.length; i++) {
        pics[i].onclick = function () {
            addEmoticon(this, jid);
        };
    }
    e.cancelBubble = true;
}
function replaceEmoticon(body) {
    var result = body;
    for (var i = 0; i < DOVEKF.emoticons.length; i++) {
        var emo = DOVEKF.emoticons[i];
        emo = emo.substring(emo.indexOf("\"") + 1);
        var src = emo.substring(0, emo.indexOf("\""));
        emo = emo.substring(emo.indexOf("\"") + 6);
        var id = emo.substring(0, emo.indexOf("\""));
        result = replaceAll(result, id, "<img src=\"" + src + "\" width=\"20px\" height=\"20px\" />");
    }
    return result;
}
function replaceAll(str, str1, str2) {
    var strr = str;
    while (strr.indexOf(str1) != -1) {
        strr = strr.replace(str1, str2);
    }
    return strr;
}
function addEmoticon(img, jid) {
    var src = img.src;
    var obj = document.getElementById(jid + "text");
    var apdstr = "";
    apdstr = ("" != obj.value && obj.value.substr(obj.value.length - 1, 1) != " ") ? " " : "";
    obj.value = obj.value + apdstr + img.id + " ";
    obj.focus();
    if (document.selection) {
        var text = obj.createTextRange();
        text.collapse(false);
        text.select();
    }
}
function imLogin(salename, salepwd) {
    window.document["imCom"].login(DOVEKF.host, DOVEKF.port, salename, salepwd, "saas-web" + new Date().getTime(), "false");
}
function imLoginZol(zolname) {
    window.document["imCom"].loginA(DOVEKF.host, DOVEKF.port, zolname);
}
function imLoginA() {
    var cookiename = getCookie("anony");
    if (cookiename != null && cookiename != false && cookiename != 'false') {
        window.document["imCom"].loginA(DOVEKF.host, DOVEKF.port, cookiename, 'web'+businessname);
    } else {
        window.document["imCom"].loginA(DOVEKF.host, DOVEKF.port, null, 'web'+businessname);
    }
}
function imLoginProcess() {
    if ("1" == DOVEKF.utype) {
        imLoginZol("zolnetfriend_" + DOVEKF.uname);
    } else {
        imLoginA();
    }
}
function logined(type) {
    DOVEKF.login = true;
    DOVEKF.cusname = type;
    setCookie("anony", type, new Date().getTime());
    if (null == DOVEKF.inmobile) {
        getinfo();
    }
    if (DOVEKF.quemsg) {
        sendmore();
    }
    while (DOVEKF.tempmessage.length > 0) {
        DOVEKF.reverse.push(DOVEKF.tempmessage.pop());
    }
    if (DOVEKF.reverse.length > 0) {
        sendoff();
    }
}
function setCookie(cname, cvalue, peri) {
    var exp = new Date();
    exp.setTime(exp.getTime() + peri);
    document.cookie = cname + "=" + escape(cvalue) + ";expires=" + exp.toGMTString() + ";path=/";
}
function getCookie(name) {
    var arr = null;
    var aCookie = document.cookie.split("; ");
    for (var i = 0; i < aCookie.length; i++) {
        var aCrumb = aCookie[i].split("=");
        if (name == aCrumb[0]) {
            arr = unescape(aCrumb[1]);
        }
    }
    return arr;
}
function sendoff() {
    var obj = DOVEKF.reverse.pop();
    window.document["imCom"].sendMessage(obj.uname, obj.msg, I18N.service_name, window.location.href, durl, pid);
    if (DOVEKF.reverse.length > 0) {
        window.setTimeout(sendoff, 150);
    }
}
function cleardclickevent(e) {
    e.cancelBubble = true;
}
function checkdjmobile() {
    if(isMobile(jQuery('#djmobile').val(),true)) {
        jQuery('#dm_right').show();
        jQuery('#dm_error').hide();
    } else {
        jQuery('#dm_right').hide();
        jQuery('#dm_error').show();
    }
}
DOVEKF.wininfo = {
    offtop:0,
    width:275,
    height:199,
    status:0
};
function openWin(uname, name) {
    uname = uname.toLowerCase();
    var topwin = document.getElementById("chatwin");
    if (null == topwin) {
        topwin = document.createElement("div");
        topwin.id = "chatwin";
        topwin.className = "dove-chat-module";
        topwin.style.zIndex = "1002";
        topwin.style.width = "265px";
        topwin.style.height = "189px";
        if(!DOVEKF.ie6) {
            //topwin.style.top = (parseInt(document.documentElement.clientHeight) - 413) / 2 + (DOVEKF.ie6?parseInt(document.documentElement.scrollTop):"") + "px";
            topwin.style.top = (parseInt(document.documentElement.clientHeight) - 199) + (DOVEKF.ie6?parseInt(document.documentElement.scrollTop):"") + "px";
        }
        //topwin.style.left = (parseInt(document.documentElement.clientWidth) - 355)/2 + 298 + "px";
        topwin.style.left = (parseInt(document.documentElement.clientWidth) - 275) + "px";
        //topwin.setAttribute("offtop", parseInt(topwin.style.top) - (DOVEKF.ie6?parseInt(document.documentElement.scrollTop):0));
        //topwin.setAttribute("offtop", (parseInt(document.documentElement.clientHeight) - 413) / 2);
        DOVEKF.wininfo.offtop = parseInt(document.documentElement.clientHeight) - 199;
        topwin.innerHTML = "<div class=\"dove-shop-name\" onmouseup=\"clearDrag(event)\" onmousedown=\"initDrag(event)\" isdragobj=\"true\"><h3>\u5546\u5bb6\uff1a"+DOVEKF.disname+" - "+(DOVEKF.status==1?"\u5728\u7ebf":(DOVEKF.status==2?"\u624b\u673a\u5728\u7ebf":"\u79bb\u7ebf"))+"</h3><i class=\"close\" onclick=\"closeWin()\"></i></div>"
            +"<div id=\"dove_dj\" class=\"dove-tel-number clearfix\" style=\"display:none;left:5px;width:233px;bottom:33px;\">"
            +"<h3>\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7\uff0c\u65b9\u4fbf\u7ecf\u9500\u5546\u4e0e\u60a8\u8054\u7cfb</h3>"
            +"<input id=\"djmobile\" type=\"text\" class=\"dove-text\" onkeyup=\"checkdjmobile();\" value=\"\">"
            +"<input id=\"djsubbtn\" type=\"submit\" class=\"dove-btn\" value=\"\u786e\u5b9a\">"
            +"<i id=\"dm_right\" class=\"dove-right\" style=\"display:none;\"></i>"
            +"<span id=\"dm_error\" class=\"dove-wrong\" style=\"display:none;\">\u8bf7\u8f93\u5165\u6709\u6548\u624b\u673a\u53f7</span>"
            +"</div>"
            +"<div id=\"tab_names_con\" class=\"dove-tab-bar\" style=\"width:265px;display:none;\">"
            +"<div class=\"dove-tab\" style=\"width:265px;\">"
            +"<ul id=\"tab_names_dis\" class=\"clearfix\"></ul>"
            +"</div>"
            +"<a id=\"a_pre\" href=\"javascript:void(0)\" class=\"dove-prev-btn\" onclick=\"dovewinpre();\" style=\"display:none;\">\u4e0a\u4e00\u4e2a</a>"
            +"<span id=\"s_pre\" class=\"dove-prev-btn\" style=\"display:block;\">\u4e0a\u4e00\u4e2a</span>"
            +"<a id=\"a_next\" href=\"javascript:void(0)\" class=\"dove-next-btn\" onclick=\"dovewinnext();\" style=\"display:none;\">\u4e0b\u4e00\u4e2a</a>"
            +"<span id=\"s_next\" class=\"dove-next-btn\" style=\"display:block;\">\u4e0b\u4e00\u4e2a</span>"
            +"</div>";
        document.body.appendChild(topwin);
        if(DOVEKF.ie6) {
            //topwin.style.setExpression("top","eval((document.documentElement).scrollTop+"+(parseInt(document.documentElement.clientHeight) - 199)+")+'px'")
            topwin.style.setExpression("top","eval((document.documentElement).scrollTop+"+DOVEKF.wininfo.offtop+")+'px'")
        }
    }
    var win = document.getElementById("chat_" + uname + "_win");
    if (null == win) {
        childnum = document.getElementById("tab_names_dis").childNodes.length;
        var showheight = 60;
        if(DOVEKF.wininfo.status == 0) {
            if(childnum == 1) {
                var addh = 40;
                DOVEKF.wininfo.offtop = DOVEKF.wininfo.offtop - addh;
                if(DOVEKF.ie6) {
                    topwin.style.setExpression("top","eval((document.documentElement).scrollTop+"+DOVEKF.wininfo.offtop+")+'px'")
                } else {
                    jQuery('#chatwin').css('top',DOVEKF.wininfo.offtop+(DOVEKF.ie6?document.documentElement.scrollTop:0));
                }
                jQuery('#chatwin').css('height',DOVEKF.wininfo.height+addh-10);
                DOVEKF.wininfo.height = DOVEKF.wininfo.height+addh;
            }
        } else {
            showheight = (childnum == 0 ? 180 : 140);
        }
        //var vl = "\u60a8\u53ef\u4ee5\u5728\u6b64\u8f93\u5165\u54a8\u8be2\u5546\u5bb6\u5546\u54c1\u5f53\u524d\u4ef7\u683c\u3001\u914d\u9001\u65b9\u5f0f\u3001\u8d60\u54c1\u7b49";
        var vl = "";
        if (typeof (doveProInfo) != "undefined") {
            vl = "\u4f60\u597d\uff0c\u6211\u60f3\u4e70" + doveProInfo.proName + "\u3002";
        }
        //htmlstr = "<div id=\"" + uname + "show\" chatname=\"" + name + "\" class=\"dovekf_win_history\" style=\"display:block;" + (childnum == 0 ? "height:148px;" : "120px;") + "\">" + "<font color=\"blue\" style=\"font-size:15px;line-height:15px;margin-top:5px;display:block;\">" + I18N.welcome + "</font>" + "</div>" + "<div class=\"dovekf_win_input\" style=\"\"><textarea id=\"" + uname + "text\" onkeyup=\"keyListener('" + uname + "',event)\" class=\"textarea\">" + vl + "</textarea></div>" + "<div class=\"quickbar\">" + "<label><input type=\"checkbox\" class=\"cbox\" id=\"bz_box_" + uname + "\" onclick=\"autoappend('bz_box','" + uname + "');\" style=\"margin-left:0;\">\u6807\u51c6\u914d\u7f6e</label>" + "<label><input type=\"checkbox\" class=\"cbox\" id=\"fp_box_" + uname + "\" onclick=\"autoappend('fp_box','" + uname + "');\">\u5f00\u5177\u53d1\u7968</label>" + "<label><input type=\"checkbox\" class=\"cbox\" id=\"zp_box_" + uname + "\" onclick=\"autoappend('zp_box','" + uname + "');\">\u6b63\u54c1\u884c\u8d27</label>" + "<label><input type=\"checkbox\" class=\"cbox\" id=\"hf_box_" + uname + "\" onclick=\"autoappend('hf_box','" + uname + "');\">\u8d27\u5230\u4ed8\u6b3e</label>" + "</div>" + "<div class=\"dovekf_win_bottom\" style=\"\">" + "<div class=\"bq\" onclick=\"showEM(event,'" + uname + "')\">" + I18N.bq_display + "</div>" + "<div id=\"dove_enregister\" class=\"enregister\"onclick=\"showcinfo('" + uname + "',0);\">" + I18N.user_submit + "</div>" + "<div class=\"assess\" onclick=\"doveloginorpj('" + uname + "');\">" + I18N.assess_tab + "<div id=\"dove_pj_area" + uname + "\" class=\"online_tc\" onclick=\"cleardclickevent(event);\" style=\"display:none;\">" + "<div class=\"online_pj\"><input type=\"radio\" name=\"dove_pj" + uname + "\" class=\"margin_3r\" value=\"1\" checked=\"true\"/>" + I18N.assess_good + "</div>" + "<div class=\"online_pj1\"><input type=\"radio\" name=\"dove_pj" + uname + "\" class=\"margin_3r\" value=\"0\"/>" + I18N.assess_commonly + "</div>" + "<div class=\"online_pj1\"><input type=\"radio\" name=\"dove_pj" + uname + "\" class=\"margin_3r\" value=\"-1\"/>" + I18N.assess_bad + "</div>" + "<div class=\"clear\"></div>" + "<div class=\"online_pjtext\"><textarea id=\"doveassesscontent" + uname + "\" class=\"online_pjtextarea\" ></textarea></div>" + "<div class=\"online_pjanniu\"><input type=\"button\" class=\"online_pjanniu1\" onclick=\"doveAssessProcess('" + uname + "')\"/></div>" + "</div>" + "</div><input type=\"button\" class=\"input\" onclick=\"sendMsg('" + uname + "');\" />" + "</div>";
        htmlstr = "<div id=\""+uname+"show\" chatname=\""+name+"\" class=\"dove-content\" style=\"width:265px;height:60px;margin:0;height:60px;\"></div>"
            +"<div class=\"dove-function\" style=\"padding:5px;\">"
            +"<textarea id=\""+uname+"text\" onkeyup=\"keyListener('"+uname+"',event)\" onfocus=\"doveif('"+uname+"')\" onblur=\"doveib('"+uname+"')\" class=\"dove-textarea\" style=\"width:233px;height:50px;\">"+vl+"</textarea>"
            /*+"<div class=\"dove-filter clearfix\">"
                +"<label><input type=\"checkbox\" id=\"bz_box_"+uname+"\" onclick=\"autoappend('bz_box','"+uname+"');\">\u6807\u51c6\u914d\u7f6e</label>"
                +"<label><input type=\"checkbox\" id=\"fp_box_"+uname+"\" onclick=\"autoappend('fp_box','"+uname+"');\">\u5f00\u5177\u53d1\u7968</label>"
                +"<label><input type=\"checkbox\" id=\"zp_box_"+uname+"\" onclick=\"autoappend('zp_box','"+uname+"');\">\u6b63\u54c1\u884c\u8d27</label>"
                +"<label><input type=\"checkbox\" id=\"hf_box_"+uname+"\" onclick=\"autoappend('hf_box','"+uname+"');\">\u8d27\u5230\u4ed8\u6b3e</label>"
            +"</div>"*/
            +"<div class=\"dove-foot clearfix\">"
            +"<div class=\"dove-face\">"
            +"<a href=\"javascript:void(0)\" class=\"dove-face-btn\" onclick=\"showEM(event,'"+uname+"');return false;\">\u63d2\u5165\u8868\u60c5</a>"
            +"</div>"
            +"<a href=\"javascript:void(0)\" class=\"dove-chang-btn\" onclick=\"showcinfo('"+uname+"',0);return false;\" title=\"\u767b\u8bb0\u624b\u673a\u53f7\">\u4fee\u6539\u624b\u673a\u53f7</a>"
            +"<input onclick=\"sendMsg('"+uname+"');\" type=\"submit\" class=\"dove-btn\" value=\"\u53d1\u9001\">"
            +"</div>"
            +"</div>";
        win = document.createElement("div");
        win.id = "chat_" + uname + "_win";
        win.className = "dove-chat-content";
        win.style.top = (childnum == 0 ? 25 : 65) + "px";
        win.style.display = "block";
        win.setAttribute("uname", uname);
        win.setAttribute("name", name);
        win.innerHTML = htmlstr;
        topwin.appendChild(win);
        createTabObj(uname, name);
        if(uname == name) {
            jQuery.getJSON("http://dove.zol.com.cn/saas/api/getName.action?id="+uname+"&jsoncallback=?",function(data){
                if(typeof(data)!="undefined") {
                    if(data.retcode == 1) {
                        jQuery("#"+uname+"show").attr("chatname",data.name);
                        jQuery("#tab_"+uname).html(data.name + "<i onclick=\"closeWin('"+uname+"',event);return false;\"></i>");
                    }
                }
            });
        }
    }
    win_fored(win);
}
function doveif(uname) {
    if(DOVEKF.wininfo.status == 0) {
        var childnum = document.getElementById("tab_names_dis").childNodes.length;
        //uname = DOVEKF.currwin.getAttribute("uname");
        var addh = childnum>1?80:120;
        DOVEKF.wininfo.offtop = DOVEKF.wininfo.offtop - addh;
        if(DOVEKF.ie6) {
            document.getElementById('chatwin').style.setExpression("top","eval((document.documentElement).scrollTop+"+DOVEKF.wininfo.offtop+")+'px'")
        } else {
            jQuery('#chatwin').css('top',DOVEKF.wininfo.offtop+(DOVEKF.ie6?document.documentElement.scrollTop:0));
        }
        jQuery('#chatwin').css('height',DOVEKF.wininfo.height+addh-10);
        jQuery('#'+uname+'show').css('height',60+addh);
        DOVEKF.wininfo.height = DOVEKF.wininfo.height+addh;
        DOVEKF.wininfo.status = 1;
    }
    //if("\u60a8\u53ef\u4ee5\u5728\u6b64\u8f93\u5165\u54a8\u8be2\u5546\u5bb6\u5546\u54c1\u5f53\u524d\u4ef7\u683c\u3001\u914d\u9001\u65b9\u5f0f\u3001\u8d60\u54c1\u7b49" == jQuery("#" + uname + "text").val()) jQuery("#" + uname + "text").val("");
}
function doveib(uname) {
    //if("" == jQuery("#" + uname + "text").val()) jQuery("#" + uname + "text").val("\u60a8\u53ef\u4ee5\u5728\u6b64\u8f93\u5165\u54a8\u8be2\u5546\u5bb6\u5546\u54c1\u5f53\u524d\u4ef7\u683c\u3001\u914d\u9001\u65b9\u5f0f\u3001\u8d60\u54c1\u7b49");
}
function autoappend(id, name) {
    var hfheck = document.getElementById("" == name ? "hf_box" : ("hf_box_" + name)).checked;
    var kcheck = document.getElementById("" == name ? "fp_box" : ("fp_box_" + name)).checked;
    var zcheck = document.getElementById("" == name ? "zp_box" : ("zp_box_" + name)).checked;
    var bcheck = document.getElementById("" == name ? "bz_box" : ("bz_box_" + name)).checked;
    var textobj = jQuery("#" + name + "text");
    var text = $(textobj).val();
    if("\u60a8\u53ef\u4ee5\u5728\u6b64\u8f93\u5165\u54a8\u8be2\u5546\u5bb6\u5546\u54c1\u5f53\u524d\u4ef7\u683c\u3001\u914d\u9001\u65b9\u5f0f\u3001\u8d60\u54c1\u7b49" == text) {
        text = "";
        jQuery(textobj).val(text);
    }
    if (id == "hf_box") {
        if (hfheck) {
            jQuery(textobj).val(text + "\u8981\u8d27\u5230\u4ed8\u6b3e\u3002");
        } else {
            jQuery(textobj).val(text.replace("\u8981\u8d27\u5230\u4ed8\u6b3e\u3002", ""));
        }
    } else {
        if (id == "fp_box") {
            if (kcheck) {
                jQuery(textobj).val(text + "\u8981\u5f00\u5177\u53d1\u7968\u3002");
            } else {
                jQuery(textobj).val(text.replace("\u8981\u5f00\u5177\u53d1\u7968\u3002", ""));
            }
        } else {
            if (id == "zp_box") {
                if (zcheck) {
                    jQuery(textobj).val(text + "\u8981\u6b63\u54c1\u884c\u8d27\u3002");
                } else {
                    jQuery(textobj).val(text.replace("\u8981\u6b63\u54c1\u884c\u8d27\u3002", ""));
                }
            } else {
                if (id == "bz_box") {
                    if (bcheck) {
                        jQuery(textobj).val(text + "\u8981\u6807\u51c6\u914d\u7f6e\u3002");
                    } else {
                        jQuery(textobj).val(text.replace("\u8981\u6807\u51c6\u914d\u7f6e\u3002", ""));
                    }
                }
            }
        }
    }
}
function show_more_dovetab(e) {
    conobj = document.getElementById("tab_more_con");
    conobj.style.display = "block";
    e.cancelBubble = true;
}
function win_fored(win) {
    if (DOVEKF.currwin && win == DOVEKF.currwin) {
        jQuery("chatwin").show();
        return;
    }
    uname = win.getAttribute("uname");
    name = win.getAttribute("name");
    wintab_process(uname, name);
    if (DOVEKF.currwin && DOVEKF.currwin != win) {
        jQuery(DOVEKF.currwin).hide();
    }
    var len = jQuery("#tab_names_dis").children().size();
    DOVEKF.currwin = win;
    //jQuery(jQuery(win).children()[0]).css('height',len==1?'217':'177');
    if (len >= 1) {
        DOVEKF.currwin.childNodes[0].style.height = (DOVEKF.wininfo.status==0?60:140)+"px";
    } else {
        document.getElementById('chat_' + uname + '_win').childNodes[0].style.height = (DOVEKF.wininfo.status==0?60:180)+"px";
    }
    jQuery('chatwin').show();
    DOVEKF.currwin.style.display = "block";
    document.getElementById(uname + "show").scrollTop = document.getElementById(uname + "show").scrollHeight;
}
function wintab_process(uname, name) {
    var parentobj = document.getElementById("tab_names_dis");
    var tabobj = document.getElementById("tab_" + uname);
    var timer = jQuery(tabobj).attr("timer");
    if(timer) {
        window.clearInterval(timer);
        jQuery(tabobj).attr("timer","");
        jQuery(tabobj).removeClass("tip");
        if(null!=DOVEKF.titletimer){clearInterval(DOVEKF.titletimer);DOVEKF.titletimer=null;document.title=DOVEKF.defaulttitle;}
    }
    jQuery(tabobj).addClass('cur');
    if (DOVEKF.currwin) {
        preuname = DOVEKF.currwin.getAttribute("uname");
        pretabobj = document.getElementById("tab_" + preuname);
        jQuery(pretabobj).removeClass('cur');
    }
    if('none' == jQuery("#tab_names_con").css('display') || jQuery(parentobj).children().size() == 0) {
        return;
    }
    var rw = jQuery(tabobj).position().left + jQuery(tabobj).width();
    var lw = jQuery(tabobj).position().left;
    var tw = jQuery(parentobj).position().left;
    if(rw + tw > 293 || lw + tw < 26) {
        jQuery(parentobj).animate({left:26 - jQuery(tabobj).position().left},100);
    }
    if(jQuery('#tab_names_dis li:first-child').attr('id')==jQuery('#tab_'+uname).attr('id')) {
        jQuery("#a_pre,#s_next").hide();
        jQuery("#s_pre,#a_next").show();
    } else if(jQuery('#tab_names_dis li:last-child').attr('id')==jQuery('#tab_'+uname).attr('id')) {
        jQuery("#a_pre,#s_next").show();
        jQuery("#s_pre,#a_next").hide();
    } else {
        jQuery("#a_pre,#a_next").show();
        jQuery("#s_pre,#s_next").hide();
    }
}
function dovewinpre() {
    var uname = jQuery(DOVEKF.currwin).attr('uname');
    var prename = jQuery('#tab_' + uname).prev().attr('uname');
    win_fored(document.getElementById('chat_' + prename + '_win'));
}
function dovewinnext() {
    var uname = jQuery(DOVEKF.currwin).attr('uname');
    var nextname = jQuery('#tab_' + uname).next().attr('uname');
    win_fored(document.getElementById('chat_' + nextname + '_win'));
}
function createTabObj(uname, name) {
    var parentobj = document.getElementById("tab_names_dis");
    var childnum = parentobj.childNodes.length;
    var tabobj = document.createElement("li");
    tabobj.id = "tab_" + uname;
    tabobj.setAttribute('uname',uname);
    tabobj.innerHTML = name + "<i onclick=\"closeWin('"+uname+"',event);return false;\"></i>";
    //tabobj.title = name;
    tabobj.onmouseover = function() {jQuery(this).css('zIndex','30000').addClass('dhover')};
    tabobj.onmouseout = function() {jQuery(this).css('zIndex','0').removeClass('dhover')};
    tabobj.onclick = function(event) {
        openWin(uname, name);
        return false;
    };
    if (childnum >= 1) {
        jQuery("#tab_names_con").show();
        DOVEKF.currwin.style.top = "65px";
        //DOVEKF.currwin.childNodes[0].style.height = "177px";
        DOVEKF.currwin.childNodes[0].style.height = (DOVEKF.wininfo.status==0?60:140)+"px";
    } else {
        document.getElementById('chat_' + uname + '_win').childNodes[0].style.height = (DOVEKF.wininfo.status==0?60:180)+"px";
    }
    parentobj.appendChild(tabobj);
}
function dhideobj(id) {
    var obj = document.getElementById(id);
    if (obj) {
        obj.style.display = "none";
    }
}
function showcinfo(jid, type) {
    if (null == DOVEKF.cusname && !DOVEKF.login) {
        imLoginProcess();
    } else {
        if (DOVEKF.inmobile != null) {
            document.getElementById("djmobile").value = DOVEKF.inmobile;
        }
    }
    document.getElementById("djsubbtn").onclick = function () {
        if (!checkdjparam()) {
            return;
        }
        submitcinfo();
        if (type == 1 || type == 2) {
            sendMsg(jid);
        }
        dhideobj("dove_dj");
    };
    document.getElementById("dove_dj").style.display = "block";
}
function getinfo() {
    var url = "http://dove.zol.com.cn/saas/api/netfriendInfoApi.action?info.nfName=" + encodeURIComponent(DOVEKF.cusname);
    DOVEKF.getScript(url, showinfovalue, false);
}
function showinfovalue(result) {
    if (result && result.success == 1) {
        if (result.mobile) {
            DOVEKF.inmobile = result.mobile;
        } else {
            DOVEKF.inmobile = null;
        }
    } else {
        if (result && result.success == 0) {
            DOVEKF.inmobile = null;
        }
    }
}
function checkdjparam() {
    var fmobile = jQuery.trim(document.getElementById("djmobile").value);
    if ("" == fmobile) {
        alert("\u8bf7\u8f93\u5165\u624b\u673a\u53f7");
        return false;
    }
    if (!isMobile(fmobile)) {
        return false;
    }
    if ("" != fmobile) {
        DOVEKF.inmobile = fmobile;
    } else {
        DOVEKF.inmobile = null;
    }
    return true;
}
function submitcinfo() {
    if (!DOVEKF.currwin) {
        return;
    }
    if (DOVEKF.currwin.getAttribute("dengji")) {
        return;
    }
    var url = "http://dove.zol.com.cn/saas/api/donetfriendInfoApi.action?info.type=3&info.nfName=" + encodeURIComponent(DOVEKF.cusname) + "&info.csName=" + DOVEKF.currwin.getAttribute("uname");
    var contacts = [];
    if (DOVEKF.inmobile != null) {
        url = url + "&info.mobile=" + DOVEKF.inmobile;
    }
    if (typeof (doveProInfo) != "undefined") {
        url = url + "&info.brandid=" + doveProInfo.manuId;
        url = url + "&info.pcatalogid=" + doveProInfo.subId;
        url = url + "&info.product=" + encodeURI(doveProInfo.proName);
        url = url + "&info.price=" + encodeURI(doveProInfo.proPrice);
    }
    setCookie("cusname", DOVEKF.cusname, new Date().getTime());
    DOVEKF.djnames.putname(DOVEKF.currwin.getAttribute("uname"));
    setCookie("djnames", DOVEKF.djnames.names.join("--"), new Date().getTime());
    contacts.push(DOVEKF.inmobile == null ? "" : DOVEKF.inmobile);
    setCookie("djcontact", contacts.join("--"), new Date().getTime());
    DOVEKF.getScript(url, function () {
    }, false);
    if (DOVEKF.currwin) {
        DOVEKF.currwin.setAttribute("dengji", true);
    }
}
function isMobile(mobile,tip) {
    var mobile = jQuery.trim(mobile);
    if ("" == mobile) {
        if(!tip) {
            alert(I18N.mobile_not_correct);
        }
        return false;
    }
    var regMobile = /^(13|15|18|14|17)[0-9]{9}$/;
    //var reg0 = /^13\d{9}$/;
    //var reg1 = /^15[^4]\d{8}$/;
    //var reg2 = /^18\d{9}$/;
    //if (mobile.length != 11 || !(reg0.test(mobile) || reg1.test(mobile) || reg2.test(mobile))) {
    if (mobile.length != 11 || !regMobile.test(mobile)) {
        if(!tip) {
            alert(I18N.mobile_not_correct);
        }
        return false;
    }
    return true;
}
function isQQ(qq) {
    var qq = jQuery.trim(qq);
    if ("" == qq) {
        return true;
    }
    if (qq.search(/^[1-9]\d{4,10}$/) != -1) {
        return true;
    } else {
        alert("QQ\u683c\u5f0f\u4e0d\u6b63\u786e");
        return false;
    }
}
function isEmail(email) {
    var email = jQuery.trim(email);
    if ("" == email) {
        return true;
    }
    var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (email.length > 100 || (email.lastIndexOf(".") == (email.length - 1)) || !pattern.test(email)) {
        alert(I18N.mail_not_correct);
        return false;
    }
    return true;
}
function saveresponse(result) {
    document.getElementById("objj").style.display = "block";
}
function closeWin(uname,e) {
    if(uname) {
        var tabobj = document.getElementById("tab_" + uname);
        var timer = jQuery(tabobj).attr("timer");
        if(timer) {
            window.clearInterval(timer);
            jQuery(tabobj).attr("timer","");
            jQuery(tabobj).removeClass("tip");
            if(null!=DOVEKF.titletimer){clearInterval(DOVEKF.titletimer);DOVEKF.titletimer=null;document.title=DOVEKF.defaulttitle;}
        }
        var wn = jQuery('#tab_names_dis').children().length;
        if(wn == 1) {
            jQuery("#tab_" + uname).remove();
            jQuery("#chat_" + uname + "_win").remove();
            closeWin();
            if (window.event) {
                window.event.cancelBubble = true;
            } else {
                if (event) {
                    event.stopPropagation();
                }
            }
            return;
        }
        var ctab = jQuery("#tab_" + uname).next();
        if(jQuery("#tab_" + uname).next().size() == 0) {
            ctab = jQuery("#tab_" + uname).prev();
        }
        var win = document.getElementById("chat_" + jQuery(ctab).attr('uname') + "_win");
        jQuery("#tab_" + uname).remove();
        jQuery("#chat_" + uname + "_win").remove();
        win_fored(win);
        if(wn == 2) {
            jQuery("#tab_names_con").hide();
            jQuery(win).css('top','25px');
            if(DOVEKF.wininfo.status == 0) {
                var addh = 40;
                DOVEKF.wininfo.offtop = DOVEKF.wininfo.offtop + addh;
                if(DOVEKF.ie6) {
                    topwin.style.setExpression("top","eval((document.documentElement).scrollTop+"+DOVEKF.wininfo.offtop+")+'px'")
                } else {
                    jQuery('#chatwin').css('top',DOVEKF.wininfo.offtop+(DOVEKF.ie6?document.documentElement.scrollTop:0));
                }
                jQuery('#chatwin').css('height',DOVEKF.wininfo.height-addh-10);
                DOVEKF.wininfo.height = DOVEKF.wininfo.height-addh;
            } else {
                jQuery('#'+jQuery(ctab).attr('uname')+'show').css('height',180);
            }
        }
        if (window.event) {
            window.event.cancelBubble = true;
        } else {
            if (event) {
                event.stopPropagation();
            }
        }
        return;
    }
    var obj = document.getElementById("chatwin");
    if (null != obj) {
        obj.style.display = "none";
    }
    setCookie("wshow" + businessname, "1", DOVEKF.getExpire(false));
    return false;
}
DOVEKF.getdjtype = function (jid) {
    if (DOVEKF.cusname) {
        if (!(DOVEKF.inmobile == null)) {
            submitcinfo();
            return 0;
        } else {
            if (DOVEKF.djnames.contain(jid)) {
                return 0;
            }
            return 1;
        }
    } else {
        return 2;
    }
};
var pid = null, durl = null;
if (typeof (doveProInfo) != "undefined" && doveProInfo.proId) {
    pid = doveProInfo.proId;
    durl = "http://dove.zol.com.cn/saas/pages/api/product_detail.jsp?proid=" + pid;
}
function sendMsg(jid) {
    var type = DOVEKF.getdjtype(jid);
    if (1 == type || 2 == type) {
        showcinfo(jid, type);
        return;
    }
    if (DOVEKF.firstmessage && !DOVEKF.login) {
        imLoginProcess();
        DOVEKF.firstmessage = false;
    }
    var text = document.getElementById(jid + "text");
    var his = document.getElementById(jid + "show");
    var msg = text.value;
    if ("" == msg.replace(/(^\s*)|(\s*$)/g, "")) {
        text.value = "";
        text.focus();
        return;
    }
    if (DOVEKF.login) {
        window.document["imCom"].sendMessage(jid, msg, I18N.service_name, window.location.href, durl, pid);
    } else {
        DOVEKF.tempmessage.push({uname:jid, msg:msg});
    }
    showMessage(jid, "\u6211", msg, "", false);
    setCookie("lastmesto", jid.toLowerCase(), 24 * 60 * 60 * 1000);
    text.value = "";
    text.focus();
}
function getTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = "(" + hours + ":" + (minutes < 10 ? ("0" + minutes) : minutes) + ":" + (seconds < 10 ? ("0" + seconds) : seconds) + ")";
    return time;
}
function showUrl(body){
    if(body) {
        return body.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    } else {
        return "";
    }
}
function showMessage(jid, name, body, time, cchange, imgkeys) {
    DOVEKF.ischat = true;
    body = showUrl(body);
    body = replaceEmoticon(body);
    var lines = body.split("\n");
    body = "";
    for (var i = 0; i < lines.length; i++) {
        body = body + lines[i] + (i == lines.length - 1 ? "" : "<br/>");
    }
    var rd = jid+"_"+new Date().getTime();
    var his = document.getElementById(jid + "show");
    if(imgkeys) {
        for(var i=0;i<imgkeys.length;i++) {
            var imgstr = "<img src=\""+DOVEKF.pathinfo+"img/img_new/loading.gif\"  datasrc=\"http://icon.zol-img.com.cn/saas/"+imgkeys[i]+"\" />";
            body = body.replace(":img:",imgstr);
            window.setTimeout(function(){
                jQuery("#"+rd+" p img").each(function(){
                    jQuery(this).attr('src',jQuery(this).attr('datasrc'));
                    his.scrollTop = his.scrollHeight;
                    jQuery(this).load(function(){his.scrollTop = his.scrollHeight;});
                });
            },2000);
        }
    }
    var showtime = time.length == 0 ? getTime() : time;
    var apdstr = "<div class=\"dove-chat\" id=\""+rd+"\">"
        +"<h3 class=\"dove-peer\"><span>"+name+"</span><em>"+showtime+"</em></h3>"
        +"<p>"+body+"</p>"
        +"</div>";
    his.innerHTML = his.innerHTML + apdstr;
    //his.innerHTML = his.innerHTML + "<span>" + name + ":</span>" + body + "<br/>";
    his.scrollTop = his.scrollHeight;
    setCookie("lastmes", 120000, new Date().getTime());
}
function keyListener(jid, e) {
    var obj = document.getElementById(jid + "text");
    if (e.keyCode == 13 && e.ctrlKey) {
        if (document.selection) {
            var selectText = document.selection.createRange();
            if (selectText) {
                if (selectText.text.length > 0) {
                    selectText.text += "\r\n";
                } else {
                    selectText.text = "\r\n";
                    selectText.select();
                }
            }
        } else {
            obj.value = obj.value + "\n";
            obj.scrollTop = obj.scrollHeight;
        }
    } else {
        if (e.keyCode == 13 && !e.ctrlKey) {
            if (obj.value.indexOf("\r\n") != -1) {
                obj.value = obj.value.substring(0, obj.value.length - 2);
            } else {
                if (obj.value.indexOf("\n") != -1) {
                    obj.value = obj.value.substring(0, obj.value.length - 1);
                }
            }
            sendMsg(jid);
            if (window.event) {
                event.cancelBubble = true;
            } else {
                if (e) {
                    e.stopPropagation();
                }
            }
            return false;
        }
    }
}
function disConnectionHandler(type) {
    //alert('u8fdeu63a5u5931u6548');
    DOVEKF.login = false;
}
function occourError(errorType, errorCode, errorCondition, errorMessage) {
    if (errorCode == "401") {
        //alert('u6570u636eu6709u8befuff0cu8bf7u8054u7cfbu7ba1u7406u5458');
    } else {
        if (errorCode == "503") {
            //alert('u5f53u524dIMu670du52a1u4e0du53efu7528uff0cu8bf7u8054u7cfbu7ba1u7406u5458');
        }
    }
    if (errorCode == "400") {
        //alert('u7528u6237u540du6216u5bc6u7801u9519u8befuff0cu8bf7u8054u7cfbu7ba1u7406u5458');
    }
}
function messageHandler(fromJid, fromName, body, type, time, imgkeys) {
    var projid = fromJid;
    var obj = document.getElementById("chat_" + projid + "_win");
    var winobj = document.getElementById("chatwin");
    body = decodeURI(body);
    if (null == obj) {
        openWin(projid, getdisplayname(projid));
    } else if("none" == obj.style.display){
        var timer = jQuery("#tab_"+projid).attr("timer");
        if(typeof(timer)=="undefined"||!timer) {
            timer = window.setInterval(function(){
                if(jQuery("#tab_"+projid).hasClass('tip')) {
                    jQuery("#tab_"+projid).removeClass('tip');
                } else {
                    jQuery("#tab_"+projid).addClass('tip');
                }
            },500);
            jQuery("#tab_"+projid).attr('timer',timer);
        }
        if(null == DOVEKF.titletimer) {
            document.title = '\u60a8\u6709\u65b0\u6d88\u606f---';
            DOVEKF.titletimer = window.setInterval(function(){
                document.title=document.title.replace(/(.{1})(.*)/,"$2$1")
            },300);
        }
    }
    jQuery(winobj).show();
    //document.title = DOVEKF.isactive;
    if(!DOVEKF.isactive && null == DOVEKF.titletimer) {
        document.title = '\u60a8\u6709\u65b0\u6d88\u606f---';
        DOVEKF.titletimer = window.setInterval(function(){
            document.title=document.title.replace(/(.{1})(.*)/,"$2$1")
        },300);
    }
    if ("undefined" == typeof (time)) {
        time = "";
    }
    obj = document.getElementById("chat_" + projid + "_win");
    var name = obj.getAttribute("name");
    var chatted = obj.getAttribute("chatted");
    if (!chatted) {
        obj.setAttribute("chatted", true);
    }
    showMessage(fromJid, name, body, time, true, imgkeys);
}
function tipfun() {
    var obj = document.getElementById("dealer_select_content");
    obj.innerHTML = obj.innerHTML.substring(1) + obj.innerHTML.substring(0, 1);
}
function imStarted() {
    var imcom = window.document["imCom"];
    imcom.setLoginedHandler("logined");
    imcom.setDisconnectionHandler("disConnectionHandler");
    imcom.setXiffErrorHandler("occourError");
    imcom.addMessageHandler("messageHandler");
    var lastmes = getCookie("lastmes");
    if (null != lastmes && !DOVEKF.login && !DOVEKF.dologin) {
        imLoginProcess();
        DOVEKF.dologin = true;
    }
}
var ie = document.all;
var nn6 = document.getElementById && !document.all;
var isdrag = false;
var y, x;
var oDragObj;
function moveMouse(e) {
    if (!isdrag) {
        return true;
    }
    var width = parseInt(document.documentElement.clientWidth);
    var height = parseInt(document.documentElement.clientHeight) + (DOVEKF.ie6?(document.documentElement.scrollTop + parseInt(document.body.scrollTop)):0);
    var winX = DOVEKF.wininfo.width;
    var winY = DOVEKF.wininfo.height;
    if ("chatwin" != oDragObj.id) {
        winX = 167;
        winY = parseInt(oDragObj.getAttribute("praheight")) + 10;
    }
    if (parseInt(oDragObj.style.top) >= 10 && parseInt(oDragObj.style.left) >= 10 && parseInt(oDragObj.style.top) <= height - winY && parseInt(oDragObj.style.left) <= width - winX) {
        oDragObj.style.top = (nn6 ? nTY + e.clientY - y : nTY + event.clientY - y) + "px";
        oDragObj.style.left = (nn6 ? nTX + e.clientX - x : nTX + event.clientX - x) + "px";
    }
    if (parseInt(oDragObj.style.top) < 10) {
        oDragObj.style.top = "10px";
        //oDragObj.setAttribute("offtop", parseInt(oDragObj.style.top) - (DOVEKF.ie6?parseInt(document.documentElement.scrollTop):0));
        DOVEKF.wininfo.offtop = parseInt(oDragObj.style.top) - (DOVEKF.ie6?parseInt(document.documentElement.scrollTop):0);
    }
    if (parseInt(oDragObj.style.left) < 10) {
        oDragObj.style.left = "10px";
    }
    if (parseInt(oDragObj.style.top) > height - winY && (height - winY) > 10) {
        oDragObj.style.top = (height - winY) + "px";
        //oDragObj.setAttribute("offtop", parseInt(oDragObj.style.top) - (DOVEKF.ie6?parseInt(document.documentElement.scrollTop):0));
        DOVEKF.wininfo.offtop = parseInt(oDragObj.style.top) - (DOVEKF.ie6?parseInt(document.documentElement.scrollTop):0);
    }
    if (parseInt(oDragObj.style.left) > width - winX) {
        oDragObj.style.left = (width - winX) + "px";
    }
    //jQuery("#collectinfo").css("top", (parseInt(oDragObj.style.top) + 50) + "px");
    //jQuery("#collectinfo").css("left", oDragObj.style.left);
    return false;
}
function initDrag(e) {
    var oDragHandle = nn6 ? e.target : event.srcElement;
    var topElement = "HTML";
    while (oDragHandle.tagName != topElement && !oDragHandle.getAttribute("isdragobj")) {
        oDragHandle = nn6 ? oDragHandle.parentNode : oDragHandle.parentElement;
    }
    if (oDragHandle.getAttribute("isdragobj")) {
        isdrag = true;
        oDragObj = oDragHandle.parentNode;
        nTY = parseInt(oDragObj.style.top + 0);
        y = nn6 ? e.clientY : event.clientY;
        nTX = parseInt(oDragObj.style.left + 0);
        x = nn6 ? e.clientX : event.clientX;
        munbindEvent(document, "mousemove", moveMouse);
        return false;
    }
}
function clearDrag() {
    isdrag = false;
    var win = document.getElementById("chatwin");
    if (win) {
        var otop = parseInt(win.style.top) - (DOVEKF.ie6?parseInt(document.documentElement.scrollTop):0);
        //win.setAttribute("offtop", otop);
        DOVEKF.wininfo.offtop = otop;
        if(DOVEKF.ie6) {
            win.style.setExpression("top","eval((document.documentElement).scrollTop+"+otop+")+'px'");
        }
    }
}
function hideshows() {
    var emsobj = document.getElementById("ems");
    var tabmore = document.getElementById("tab_more_con");
    if (null != emsobj) {
        emsobj.style.display = "none";
    }
    if (tabmore && tabmore.style.display != "none") {
        tabmore.style.display = "none";
    }
}
function keeppos() {
    var win = document.getElementById("chatwin");
    var ems = document.getElementById("ems");
    if (win) {
        win.style.top = DOVEKF.wininfo.offtop + document.documentElement.scrollTop + "px";
        if (ems && ems.style.display == "") {
            ems.style.top = (DOVEKF.wininfo.offtop + document.documentElement.scrollTop + DOVEKF.wininfo.height - 12) + "px";
        }
    }
}
function kefuonload() {
    document.getElementById("objDiv").innerHTML = DOVEKF.objj;
    initEmoticon();
}
function doveresizefunc() {
    var reobj = document.getElementById("web_float_dealer");
    if (reobj) {
        reobj.style.left = (parseInt(document.documentElement.clientWidth) - 167) + "px";
    }
}
function munbindEvent(object, ent, fuc) {
    if (document.all) {
        object.attachEvent("on" + ent, fuc);
    } else {
        object.addEventListener(ent, fuc, false);
    }
}
munbindEvent(document, "click", hideshows);
munbindEvent(window, "resize", doveresizefunc);
/*if(DOVEKF.ie6) {
	munbindEvent(window, "scroll", keeppos);
}*/
function closedovefloat() {
    var obj = document.getElementById("web_float_dealer");
    if (obj) {
        document.body.removeChild(obj);
    }
}
function appendZtBtn() {
    var baseobj = $("#servers p.time")[1];
    var helpli = document.createElement("li");
    helpli.style.height = "18px";
    helpli.style.marginTop = "10px";
    helpli.innerHTML = "<span><a target='_blank' href='http://www.zol.com/help/detail/11/43/760.html'>\u5173\u4e8e\u5230\u5e97\u81ea\u63d0?</a></span>";
    baseobj.parentNode.insertBefore(helpli, baseobj.nextSibling);
    var buyLi = document.createElement("li");
    buyLi.style.height = "36px";
    buyLi.style.marginTop = "10px";
    buyLi.innerHTML = "<span><a title='\u70b9\u51fb\u8d2d\u4e70' target='_blank' href='javascript:void(0);' onclick=\"dclicksta();openOrder();return false;\" type=\"1\"><img src='" + DOVEKF.pathinfo + "/img/online_img/dtzt.gif'/><a/></span>";
    baseobj.parentNode.insertBefore(buyLi, baseobj.nextSibling);
}
function dclicksta() {
    jQuery.getScript("http://dove.zol.com.cn/count/dealer_zt_click.count", function () {
    });
}
var orderdialog = null;
function openOrder() {
    if(null != getCookie('zt_'+businessname) && getCookie('zt_'+businessname) >= 2) {
        alert('\u4e00\u5468\u5728\u540c\u4e00\u4e2a\u7f51\u5e97\u53ea\u80fd\u4e0b\u4e24\u4e2a\u5230\u5e97\u8d2d\u4e70\u8ba2\u5355');
        return;
    }
    var night = false;
    var h = new Date().getHours();
    if(h >=22 || h < 8) {
        night = true;
    }

    var str = "<div id=\"ztod_input\" class=\"dzp-select-layer dzp-voucher\" style=\"display:block;\">"
        +"<div class=\"dzp-layer-hd\">\u5230\u5e97\u8d2d\u4e70\u51ed\u8bc1<i id=\"dzp-again-close\" class=\"dzp-close\" onClick=\"closeOrderWin()\"></i></div>"
        +"<div class=\"dzp-layer-content\">"
        +"<ul class=\"dzp-flow-step\" id=\"ztod_flow\">"
        +"<li class=\"dzp-s1\">\u586b\u5199\u624b\u673a\u53f7</li>"
        +"<li class=\"dzp-s2\">\u5356\u5bb6\u786e\u8ba4\u53d1\u9001\u77ed\u4fe1</li>"
        +"</ul>"
        +"<dl>"
        +"<dt>\u8054\u7cfb\u4eba\u59d3\u540d\uff1a</dt>"
        +"<dd><input id=\"ztod_name\" onblur=\"ztodnamecheck()\" class=\"dzp-text\" type=\"text\" name=\"\" value=\"\"><i id=\"ztod_name_right\" class=\"dzp-rightico\" style=\"display:none;\"></i><div id=\"ztod_name_wrong\" class=\"dzp-wrong\" style=\"display:none;\">\u8bf7\u586b\u5199\u59d3\u540d</div></dd>"
        +"</dl>"
        +"<dl class=\"dzp-captcha\">"
        +"<dt>\u9a8c\u8bc1\u7801\uff1a</dt>"
        +"<dd><input id=\"pic_code\" class=\"dzp-text\" type=\"text\" name=\"\"><div class=\"captcha-img\"><img id=\"dmesspic\" style=\"width:60px;height:26px;\" border=\"0\" src=\"http://"+DOVEKF.cdhost+"/saas/images/checkCode.val?r="+Math.random()+"\" onclick=\"dmessrecode();\" title=\"\u70b9\u51fb\u66f4\u6362\u9a8c\u8bc1\u7801\"></div><div id=\"pic_code_wrong\" class=\"dzp-wrong\" style=\"display:none;\">\u9a8c\u8bc1\u7801\u9519\u8bef</div></dd>"
        +"</dl>"
        +"<dl>"
        +"<dt>\u624b\u673a\u53f7\uff1a</dt>"
        +"<dd><input id=\"ztod_mobile\" onkeyup=\"ztodmobilecheck()\" class=\"dzp-text\" style=\"width:190px;\" placeholder=\"\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7\uff0c\u5c06\u6536\u5230\u5546\u5bb6\u62a5\u4ef7\" type=\"text\" name=\"\"><i id=\"ztod_mobile_right\" class=\"dzp-rightico\" style=\"display:none;\"></i><a id=\"ztod_mobile_send\" href=\"#\" onclick=\"applycode();return false;\">\u53d1\u9001\u9a8c\u8bc1\u7801</a><div id=\"ztod_mobile_wrong\" class=\"dzp-wrong\" style=\"display:none;\">\u8bf7\u586b\u5199\u6709\u6548\u7684\u624b\u673a\u53f7</div></dd>"
        +"</dl>"
        +"<dl class=\"dzp-captcha\">"
        +"<dt>\u624b\u673a\u9a8c\u8bc1\u7801\uff1a</dt>"
        +"<dd><input id=\"ztod_code\" class=\"dzp-text\" type=\"text\" name=\"\">"
        //+"<div class=\"captcha-img\" style=\"display:none;\"><img id=\"dmesspic\" style=\"width:60px;height:26px;\" border=\"0\" src=\"http://"+DOVEKF.cdhost+"/saas/images/checkCode.val?r="+Math.random()+"\" onclick=\"dmessrecode();\" title=\"\u70b9\u51fb\u66f4\u6362\u9a8c\u8bc1\u7801\"></div><div id=\"ztod_code_wrong\" class=\"dzp-wrong\" style=\"display:none;\">\u9a8c\u8bc1\u7801\u9519\u8bef</div>"
        +"</dd>"
        +"</dl>"
        +"<dl>"
        +"<dt>\u5176\u4ed6\u8981\u6c42\uff1a<span style=\"display:block;\">\uff08\u53ef\u9009\uff09</span></dt>"
        +"<dd><textarea id=\"ztod_comm\" class=\"dzp-textare\" onblur=\"ztodcommcheck()\"></textarea><div id=\"ztod_comm_wrong\" class=\"dzp-wrong\" style=\"display:none;\">\u8d85\u51fa50\u4e2a\u5b57</div></dd>"
        +"</dl>"
        +(night?"<dl style=\"color:#666;text-align:left;\">\u73b0\u5df2\u6df1\u591c\uff0c\u7ecf\u9500\u5546\u53ef\u80fd\u4f1a\u5728\u660e\u5929\u4e0a\u5348\u56de\u590d\u62a5\u4ef7</dl>":"")
        +"</div>"
        +"<div class=\"dzp-layer-foot\">"
        +"<input type=\"button\" onClick=\"submitZtOrder()\" class=\"dzp-submit-btn\" value=\"\u786e\u5b9a\" name=\"\">"
        +"</div>"
        +"</div>"

        +"<div id=\"ztod_success\" class=\"dzp-select-layer dzp-voucher\" style=\"display:none;\">"
        +"<div class=\"dzp-layer-hd\">\u5230\u5e97\u8d2d\u4e70\u51ed\u8bc1<i id=\"dzp-again-close\" class=\"dzp-close\" onClick=\"closeOrderWin()\"></i></div>"
        +"<div class=\"dzp-layer-content\">"
        +"<ul class=\"dzp-flow-step dzp-flow-step-2\">"
        +"<li class=\"dzp-s1\">\u586b\u5199\u624b\u673a\u53f7</li>"
        +"<li class=\"dzp-s2\">\u5356\u5bb6\u786e\u8ba4\u53d1\u9001\u77ed\u4fe1</li>"
        +"</ul>"
        +"<div class=\"dzp-success\">"
        +"<h3>\u5230\u5e97\u8d2d\u4e70\u8ba2\u5355\u5df2\u63d0\u4ea4\uff0c\u5f85\u5356\u5bb6\u786e\u8ba4\u540e\u4f1a\u5c06\u8d27\u54c1\u60c5\u51b5\u53d1\u9001\u81f3\u60a8\u624b\u673a</h3>"
        //+"<p>\u6e29\u99a8\u63d0\u793a\uff1a\u60a8\u53ef\u4ee5\u51ed\u8be5\u77ed\u4fe1\u5230\u5546\u5bb6\u5b9e\u4f53\u5e97\u94fa\u8fdb\u884c\u4ea4\u6613</p>"
        +"</div>"
        +"<div class=\"dzp-success1\">"
        +"<p>\u6e29\u99a8\u63d0\u793a\uff1a\u7a0d\u540e\u60a8\u4f1a\u6536\u5230\u5546\u5bb6\u786e\u8ba4\u77ed\u4fe1\uff0c\u5982\u6210\u529f\uff0c\u53ef\u51ed\u501f\u5546\u5bb6\u56de\u590d\u77ed\u4fe1\u5230\u5b9e\u4f53\u5e97\u94fa\u8fdb\u884c\u4ea4\u6613</p>"
        +"</div>"
        +"</div>"
        +"</div>";
    var url = "http://dove.zol.com.cn/saas/api/getUserLoc.action?id="+businessname+"&jsoncallback=?";
    jQuery.getJSON(url,function(data){
        if(data && (typeof(data.location) != "undefined")) {
            jQuery('#ztod_flow').after("<dl style=\"color:red;padding:0;text-align:center;\">\u63d0\u793a\uff1a\u672c\u5546\u54c1\u5b9e\u4f53\u5e97\u5730\u5740\u5728&nbsp;<span style=\"font-weight:bold;\">"+data.location+"</span>\uff0c\u8bf7\u786e\u8ba4\u60a8\u53ef\u5230\u5e97\u53d6\u8d27</dl>")
        }
    });
    orderdialog = $.dialog({id:"orderwin", lock:false, title:false, content:str, border:false, fixed:true});
}
var dmessdialog = null;
function openDmessOrder() {
    var str = "<div id=\"dmessinput\" class=\"dzp-select-layer dzp-layer-phone\" style=\"width:427px;display:block;\">"
        +"<div class=\"dzp-layer-hd\">\u53d1\u9001\u7535\u8bdd\u5730\u5740\u5230\u624b\u673a<i class=\"dzp-close\" onclick=\"closeDmessWin();\"></i></div>"
        +"<div class=\"dzp-layer-content\">"
        +"<dl>"
        +"<dt>\u624b\u673a\u53f7\uff1a</dt>"
        +"<dd><input id=\"dmessmobile\" onblur=\"dmessmobilecheck()\" onkeydown=\"return dmesscheck(this);\" maxlength=\"11\" type=\"text\" name=\"\" class=\"dzp-text\"><i id=\"dmessmobileright\" class=\"dzp-rightico\" style=\"display:none;\"></i><div id=\"dmessmobilewrong\" class=\"dzp-wrong\" style=\"display:none;\">\u8bf7\u586b\u5199\u6709\u6548\u7684\u624b\u673a\u53f7</div></dd>"
        +"</dl>"
        +"<dl class=\"dzp-captcha\">"
        +"<dt>\u9a8c\u8bc1\u7801\uff1a</dt>"
        +"<dd><input id=\"dmesscode\" onblur=\"dmesscodecheck()\" onkeydown=\"return dmesscheck(this);\" maxlength=\"4\" type=\"text\" name=\"\" class=\"dzp-text\"><div class=\"captcha-img\"><img id=\"dmesspic\" style=\"width:60px;height:26px;\" border=\"0\" src=\"http://"+DOVEKF.cdhost+"/saas/images/checkCode.val?r="+Math.random()+"\" onclick=\"dmessrecode();\" title=\"\u70b9\u51fb\u66f4\u6362\u9a8c\u8bc1\u7801\"></div><div id=\"dmesscodewrong\" class=\"dzp-wrong\" style=\"display:none;\">\u9a8c\u8bc1\u7801\u9519\u8bef</div></dd>"
        +"</dl>"
        +"</div>"
        +"<div class=\"dzp-layer-foot\">"
        +"<input type=\"button\" name=\"\" value=\"\u53d1\u9001\" class=\"dzp-submit-btn\" onclick=\"submitDmessOrder();\">"
        +"<p style=\"margin:10px 45px 0;\">\u63d0\u793a\uff1a\u5982\u679c\u60a8\u8981\u7ebf\u4e0b\u8d2d\u4e70\u6b64\u9875\u5546\u54c1\uff0c\u8bf7\u70b9\u51fb\u3010\u5230\u5e97\u8d2d\u4e70\u3011\u6309\u94ae\u83b7\u5f97\u8d2d\u4e70\u51ed\u8bc1\uff0c\u4fdd\u969c\u60a8\u7684\u5408\u6cd5\u6743\u76ca\u3002</p>"
        +"</div>"
        +"</div>"
        +"<div id=\"dmesssucc\" class=\"dzp-layer-box dzp-layer-phone\" style=\"position:relative;display:none;\">"
        +"<div class=\"dzp-layer-body\">"
        +"<div class=\"dzp-layer-hd\"><i class=\"dzp-close\" onclick=\"closeDmessWin();\"></i></div>"
        +"<div class=\"dzp-layer-conten\">"
        +"<div class=\"dzp-success\" style=\"padding:10px 0 10px 50px;\">"
        +"<h3>\u53d1\u9001\u6210\u529f</h3>"
        +"</div>"
        +"</div>"
        +"</div>"
        +"</div>"
        +"<div id=\"dmessover\" class=\"dzp-layer-box dzp-layer-phone\" style=\"position:relative;display:none;\">"
        +"<div class=\"dzp-layer-body\">"
        +"<div class=\"dzp-layer-hd\"><i class=\"dzp-close\" onclick=\"closeDmessWin();\"></i></div>"
        +"<div class=\"dzp-layer-content\">"
        +"<div class=\"dzp-failure\">"
        +"<h3>\u540c\u4e00\u4e2a\u624b\u673a\u53f7\u4e00\u5929\u53ea\u80fd\u53d1\u90013\u6b21</h3>"
        +"</div>"
        +"</div>"
        +"</div>"
        +"</div>";
    dmessdialog = $.dialog({id:"dmesswin", lock:false, title:false, content:str, border:false, fixed:true});
    //dmessrecode();
}
function closeOrderWin() {
    if (orderdialog) {
        orderdialog.close();
    }
}
function closeDmessWin() {
    if(dmesstimer) {
        window.clearTimeout(dmesstimer);
        dmesstimer = null;
    }
    if (dmessdialog) {
        dmessdialog.close();
    }
}
var isdmessdoing = false;
var dmesstimer = null;
function submitDmessOrder() {
    if(isdmessdoing == true) {
        return;
    }
    isdmessdoing = true;
    var mobile = $.trim($("#dmessmobile").val());
    var code = $.trim($("#dmesscode").val());
    if (!dmessmobilecheck(mobile) || !dmesscodecheck(code)) {
        isdmessdoing = false;
        return false;
    }
    var url="http://"+DOVEKF.cdhost+"/saas/api/getMerchantInfo.action?mobile="+mobile+"&code="+code+"&id="+businessname
        +"&proId="+doveProInfo.proId+"&proName="+encodeURIComponent(doveProInfo.proName)+"&subId="+doveProInfo.subId+"&manuId="+doveProInfo.manuId+"&jsoncallback=?";
    jQuery.getJSON(url,function(data) {
        if(typeof(data) != "undefined") {
            if(data.result == 'fail') {
                if(data.code == 1) {
                    alert("\u53c2\u6570\u4e0d\u5b8c\u6574");;
                }
                if(data.code == 2) {
                    $("#dmessmobilewrong").show();
                }
                if(data.code == 3) {
                    $("#dmesscodewrong").html("\u9a8c\u8bc1\u7801\u9519\u8bef").show();
                }
                if(data.code == 4) {
                    jQuery('#dmessinput').hide();
                    jQuery('#dmessover').show();
                    dmesstimer = window.setTimeout(closeDmessWin,2000);
                }
                if(data.code == 5) {
                    alert("\u53c2\u6570\u4e0d\u5b8c\u6574");
                }
            } else if(data.result == 'success') {
                jQuery('#dmessinput').hide();
                jQuery('#dmesssucc').show();
                dmesstimer = window.setTimeout(closeDmessWin,2000);
            }
        }
        isdmessdoing = false;
    });
    /*var url="http://"+DOVEKF.dmesshost+"/index.php?c=DealerAPI&a=GetMerchant&id="+businessname+"&code="+code+"&mobile="+mobile+"&callback=";
    DOVEKF.getScript(url,function(data) {
        if(typeof(data) != "undefined") {
            if(data.type == 'error') {
                if(data.code == 1) {
                    $("#dmesscodewrong").html("\u9a8c\u8bc1\u7801\u9519\u8bef").show();
                }
                if(data.code == 2) {
                    jQuery('#dmessinput').hide();
                    jQuery('#dmessover').show();
                    dmesstimer = window.setTimeout(closeDmessWin,2000);
                }
            } else if(data.type == 'success') {
                jQuery('#dmessinput').hide();
                jQuery('#dmesssucc').show();
                dmesstimer = window.setTimeout(closeDmessWin,2000);
            }
        }
        isdmessdoing = false;
    },false);*/
}
function dmessrecode() {
    $('#dmesspic').attr('src',"http://"+DOVEKF.cdhost+"/saas/images/checkCode.val?r="+Math.random());
}
function submitZtOrder() {
    var name = $.trim($("#ztod_name").val());
    var mobile = $.trim($("#ztod_mobile").val());
    var code = $.trim($("#ztod_code").val());
    var comm = $.trim($("#ztod_comm").val());
    if (!ztodnamecheck(name) || !ztodmobilecheck(mobile) || !ztodcodecheck(code) || !ztodcommcheck(comm)) {
        return false;
    }
    var zt_num = getCookie('zt_'+businessname);
    zt_num = null==zt_num?0:zt_num;
    //if(zt_num >= 2) {
    //	alert('\u4e00\u5468\u5728\u540c\u4e00\u4e2a\u7f51\u5e97\u53ea\u80fd\u4e0b\u4e24\u4e2a\u5230\u5e97\u8d2d\u4e70\u8ba2\u5355');
    //	return;
    //}
    //name = showUrl(name);
    //comm = showUrl(comm);
    //var url = "http://mytest.zol.com/saas/bid/addZTOrder.action?jsoncallback=?&sc=_1";
    var url = "http://" + DOVEKF.cdhost + "/saas/bid/addZTOrder.action?jsoncallback=?&sc=_1"
        + "&productName=" + encodeURI(doveProInfo.proName)
        + "&name=" + encodeURI(DOVEKF.ztname)
        + "&dealer=" + businessname
        + "&price=" + doveProInfo.proPrice.replace(/\..*/, "")
        + "&productId=" + doveProInfo.proId
        + "&subId=" + doveProInfo.subId
        + "&manuId=" + doveProInfo.manuId
        + "&buyerName=" + encodeURIComponent(name)
        + "&buyerMobile=" + mobile
        + "&apply_code=" + code
        + "&comment=" + encodeURIComponent(comm);
    if(typeof(goodsName) != "undefined") {
        url = url + "&goodsId=" + goodsId;
        url = url + "&goodsName=" + encodeURIComponent(goodsName);
    }
    $.getJSON(url, function (data) {
        if (typeof (data) != "undefined") {
            if (data.result == "success") {
                $("#ztod_input").hide();
                $("#ztod_success").fadeIn(300);
                setCookie('zt_'+businessname,zt_num+1,DOVEKF.getExpire(false,7))
            } else {
                if('\u624b\u673a\u9a8c\u8bc1\u7801\u6709\u8bef!' == data.msg) {
                    $("#ztod_code_wrong").html("\u9a8c\u8bc1\u7801\u9519\u8bef").show();
                } else {
                    alert(data.msg);
                }
            }
        }
    });
}
function dmessmobilecheck(mobile) {
    if (!mobile) {
        mobile = $.trim($("#dmessmobile").val());
    }
    if (mobile == "" || !isMobile(mobile, true)) {
        $("#dmessmobileright").hide();
        $("#dmessmobilewrong").html("\u8bf7\u586b\u5199\u6709\u6548\u7684\u624b\u673a\u53f7").show();
        return false;
    }
    $("#dmessmobilewrong").hide();
    $("#dmessmobileright").show();
    return true;
}
function dmesscodecheck(code) {
    if (!code) {
        code = $.trim($("#dmesscode").val());
    }
    if (code.length != 4) {
        $("#dmesscodewrong").html(code.length==0?"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801":"\u9a8c\u8bc1\u7801\u9519\u8bef").show();
        return false;
    }
    $("#dmesscodewrong").hide();
    return true;
}
function dmesscheck(obj) {
    var objid = $(obj).attr('id') , maxlen = $(obj).attr('maxlength');
    $('#'+objid+'right,#'+objid+'wrong').hide();
    /*if ($(obj).val().length >= maxlen) {
        return true;
    }*/
    return true;
}
function ztodnamecheck(name) {
    if (!name) {
        name = $.trim($("#ztod_name").val());
    }
    if (name == "") {
        $("#ztod_name_right").hide();
        $("#ztod_name_wrong").html("\u8bf7\u586b\u5199\u59d3\u540d").show();
        return false;
    }
    if (name.length > 50) {
        $("#ztod_name_right").hide();
        $("#ztod_name_wrong").html("\u59d3\u540d\u4e0d\u80fd\u8d85\u8fc750\u4e2a\u5b57").show();
        return false;
    }
    $("#ztod_name_wrong").hide();
    $("#ztod_name_right").show();
    return true;
}
function ztodmobilecheck(mobile) {
    if (!mobile) {
        mobile = $.trim($("#ztod_mobile").val());
    }
    if (mobile == "" || !isMobile(mobile, true)) {
        $("#ztod_mobile_right,#ztod_mobile_send").hide();
        $("#ztod_mobile_wrong").html("\u8bf7\u586b\u5199\u6709\u6548\u7684\u624b\u673a\u53f7").show();
        return false;
    }
    $("#ztod_mobile_wrong").hide();
    $("#ztod_mobile_right,#ztod_mobile_send").show();
    //$("#ztod_mobile_right,#ztod_mobile_send").show();
    return true;
}
function ztodcodecheck(code) {
    if (!code) {
        code = $.trim($("#ztod_code").val());
    }
    if (code.length != 4) {
        $("#ztod_code_wrong").html(code.length==0?"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801":"\u9a8c\u8bc1\u7801\u683c\u5f0f\u9519\u8bef").show();
        return false;
    }
    $("#ztod_code_wrong").hide();
    return true;
}
function ztodcommcheck(comm) {
    if (!comm) {
        comm = $.trim($("#ztod_comm").val());
    }
    if (comm.length > 50) {
        $("#ztod_comm_wrong").html("\u8d85\u51fa50\u4e2a\u5b57").show();
        return false;
    }
    $("#ztod_comm_wrong").hide();
    return true;
}
var iscode = false;
function applycode() {
    if (iscode) {
        return;
    }
    iscode = true;
    var mobile = $.trim($("#ztod_mobile").val());
    var code = $.trim($("#pic_code").val());
    if('' == code) {
        alert('\u8bf7\u586b\u5199\u56fe\u7247\u9a8c\u8bc1\u7801');
        iscode = false;
        return;
    }
    if(code.length!=4) {
        alert('\u56fe\u7247\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e');
        iscode = false;
        return;
    }
    if (!ztodmobilecheck(mobile)) {
        iscode = false;
        return false;
    }
    //$.getJSON("http://mytest.zol.com/saas/bid/getCode.action?mb=" + $.trim(mobile) + "&jsoncallback=?", function (data) {
    $.getJSON("http://" + DOVEKF.cdhost + "/saas/bid/getZtCode.action?mb=" + $.trim(mobile) + "&dealer="+businessname+"&code="+code+"&jsoncallback=?", function (data) {
        if (data && data.result) {
            if (data.result == "FAILED") {
                if(typeof(data.code) != "undefined" && data.code == 1) {
                    alert("\u83b7\u53d6\u9a8c\u8bc1\u7801\u5931\u8d25\uff0c\u4e00\u4e2a\u624b\u673a\u53f7\u5728\u4e00\u4e2a\u7f51\u5e97\u4e00\u5468\u4e4b\u5185\u53ea\u80fd\u4e0b\u4e24\u4e2a\u8ba2\u5355");
                } if(typeof(data.code) != "undefined" && data.code == 2) {
                    alert("\u56fe\u7247\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e");
                } else {
                    alert("1\u5206\u949f\u4e4b\u5185\u53ea\u80fd\u83b7\u53d6\u4e00\u6b21\u9a8c\u8bc1\u7801\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01");
                }
            }
            if (data.result == "SUCCESS") {
                alert("\u9a8c\u8bc1\u7801\u5df2\u901a\u8fc7\u77ed\u4fe1\u53d1\u9001\u81f3\u60a8\u7684\u624b\u673a,\u8bf7\u7a0d\u7b49,1\u5206\u949f\u5185\u672a\u6536\u5230\u8bf7\u91cd\u65b0\u83b7\u53d6");
            }
        } else {
            alert("\u83b7\u53d6\u9a8c\u8bc1\u7801\u51fa\u9519\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01");
        }
        iscode = false;
    });
}
function getdisplayname(name) {
    if (null == DOVEKF.disname) {
        return name;
    }
    for (var i = 0; i < DOVEKF.kfinfo.length; i++) {
        if (DOVEKF.kfinfo[i][0] == name) {
            return DOVEKF.kfinfo[i][1];
        }
    }
    return name;
}
function kfinfocontain(name) {
    for (var i = 0; i < DOVEKF.kfinfo.length; i++) {
        if (DOVEKF.kfinfo[i][0].toLowerCase() == name) {
            return DOVEKF.kfinfo[i];
        }
    }
    return null;
}
DOVEKF.datapro = function (data) {
    if (0 == data.retcode) {
        return;
    }
    if (1 == data.retcode) {
        if (DOVEKF.kfinfo && DOVEKF.kfinfo.length > 1) {
            if (2 == data.mode) {
                var name;
                if ((name = getCookie("lastmesto")) && null != kfinfocontain(name)) {
                    var curinfo = kfinfocontain(name);
                    window.setTimeout("openWin('" + curinfo[0] + "','" + curinfo[1] + "')", 100);
                    return;
                } else {
                    window.setTimeout("openWin('" + DOVEKF.kfinfo[0][0] + "','" + DOVEKF.kfinfo[0][1] + "')", 100);
                    return;
                }
            } else {
                for (i = 0; i < DOVEKF.kfinfo.length; i++) {
                    window.setTimeout("openWin('" + DOVEKF.kfinfo[i][0] + "','" + DOVEKF.kfinfo[i][1] + "')", 100);
                }
            }
        } else {
            if (DOVEKF.kfinfo && DOVEKF.kfinfo.length == 1) {
                window.setTimeout("openWin('" + DOVEKF.kfinfo[0][0] + "','" + DOVEKF.kfinfo[0][1] + "')", 100);
            }
        }
    }
    if (2 == data.retcode) {
        window.setTimeout("openWin('" + DOVEKF.dealerid + "','" + DOVEKF.disname + "')", 100);
    }
};
DOVEKF.ztname = "";
function loadkfcallback(data) {
    DOVEKF.load = true;
    var defaultshow = true;
    if (typeof (data) != "undefined") {
        DOVEKF.loaddata = data;
        if (0 == data.retcode) {
            return;
        }
        /*if (2 == data.retcode && data.offtype == 3) {
            defaultshow = false;
        }*/
        DOVEKF.dealerid = data.admin;
        DOVEKF.ztname = data.admin;
        DOVEKF.disname = data.admindis;
        var code = 3;
        if (1 == data.retcode) {
            DOVEKF.kfinfo = data.info;
            code = 1;
        } else {
            if ("undefined" != typeof (data.offtype)) {
                code = data.offtype;
            }
        }
        initdoveresource();
        //DOVEKF.setOnline(code);
        DOVEKF.status = code;
        if (1 == data.retcode) {
            if (DOVEKF.kfinfo && DOVEKF.kfinfo.length > 1) {
                if (2 == data.mode) {
                    var name;
                    if ((name = getCookie("lastmesto")) && null != kfinfocontain(name)) {
                        DOVEKF.ztname = name;
                    } else {
                        DOVEKF.ztname = DOVEKF.kfinfo[0][0];
                    }
                } else {
                    DOVEKF.ztname = DOVEKF.kfinfo[0][0];
                }
            } else {
                if (DOVEKF.kfinfo && DOVEKF.kfinfo.length == 1) {
                    DOVEKF.ztname = DOVEKF.kfinfo[0][0];
                }
            }
        }
        if (2 == data.retcode) {
            DOVEKF.ztname = DOVEKF.dealerid;
            DOVEKF.kfinfo = [[DOVEKF.dealerid, DOVEKF.disname]];
        }
        // && null == getCookie("wshow" + businessname)
        /*if (defaultshow && typeof (autoAlertDove) != "undefined" && autoAlertDove == 1) {
            DOVEKF.datapro(data);
        }*/
        /*if ("undefined" != typeof (doveProInfo)) {
            appendZtBtn();
        }*/
    }
}
DOVEKF.status = 3;
DOVEKF.setOnline = function (code) {
    if (code != 1 && code != 2 && code != 3 && code != 4) {
        code = 3;
    }
    DOVEKF.status = code;
    var btns = jQuery(".bus_pic");
    jQuery(".bus_pic").removeClass().attr("width", 74).attr("height", 22);
    jQuery(btns).addClass("dovebus" + code);
};
function openDove() {
    var win = document.getElementById("chatwin");
    if (null != win && win.style.display == "none") {
        win.style.display = "block";
    } else {
        if (null != win && win.style.display != "none") {
            win.style.display = "none";
        } else {
            if (null != DOVEKF.loaddata) {
                DOVEKF.datapro(DOVEKF.loaddata);
            }
        }
    }
}
function openChat() {
    var url = "http://dove.zol.com.cn/webkf/chat.action?dealer="+businessname+"&source=" + encodeURIComponent(location.href);
    if (typeof (doveProInfo) != "undefined") {
        url = url + "&proId=" + doveProInfo.proId + "&type=2";
    } else {
        url = url + "&type=1";
    }
    if (typeof (businessType) != "undefined") {
        url = url + "&businesstype=" + businessType;
    }
    window.open(url, businessname, "status=no,toolbar=no,menubar=no,location=no,titlebar=no,resizable=yes,width=1018px,height=613");
}
function initdoveresource() {
    writedovepicss();
    document.getElementById("objDiv").innerHTML = DOVEKF.objj;
}
DOVEKF.load = false;
DOVEKF.loaddata = null;
var dove_set = 0;
function getdovecustom() {
    DOVEKF.getScript("http://" + DOVEKF.host + "/saas/api/pluralCustomerApi.action?zid=" + DOVEKF.dealerid, loadkfcallback, false);
}
DOVEKF.isactive=true;
DOVEKF.titletimer=null;
if(typeof (autoAlertDove) != "undefined" && autoAlertDove == 1) {
    //$($('a.zp-dove')[0]).trigger('click');
}
munbindEvent(window, "load", getdovecustom);
//munbindEvent(window, "beforeunload",function(){if(DOVEKF.login&&DOVEKF.ischat){return "\u60a8\u5c1a\u6709\u4f1a\u8bdd\u7a97\u53e3";}});
//munbindEvent(window, "focus", function(){DOVEKF.isactive=true;if(null!=DOVEKF.titletimer){clearInterval(DOVEKF.titletimer);DOVEKF.titletimer=null;document.title=DOVEKF.defaulttitle;}});
//munbindEvent(window, "blur", function(){DOVEKF.isactive=false;});