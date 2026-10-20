// Executar somente no contexto do Figma Plugin API (use_figma), não no navegador ou no site.
const STATE={"fileKey":"gSo2f1TKL4c7w4trJgQxE2","url":"https://www.figma.com/design/gSo2f1TKL4c7w4trJgQxE2","foundations":{"collectionId":"VariableCollectionId:5:2","modeId":"5:0","variables":{"surface-page":"VariableID:5:4","surface-card":"VariableID:5:6","surface-soft":"VariableID:5:8","text-primary":"VariableID:5:10","text-secondary":"VariableID:5:12","action-primary":"VariableID:5:14","text-on-action":"VariableID:5:16","border":"VariableID:5:18","focus":"VariableID:5:20","inverse":"VariableID:5:22","inverse-text":"VariableID:5:24","inverse-accent":"VariableID:5:26","gap8":"VariableID:5:27","gap16":"VariableID:5:28","gap24":"VariableID:5:29","gap32":"VariableID:5:30","gap48":"VariableID:5:31","gap64":"VariableID:5:32","radius6":"VariableID:5:33","radius8":"VariableID:5:34"},"variableIds":["VariableID:5:3","VariableID:5:4","VariableID:5:5","VariableID:5:6","VariableID:5:7","VariableID:5:8","VariableID:5:9","VariableID:5:10","VariableID:5:11","VariableID:5:12","VariableID:5:13","VariableID:5:14","VariableID:5:15","VariableID:5:16","VariableID:5:17","VariableID:5:18","VariableID:5:19","VariableID:5:20","VariableID:5:21","VariableID:5:22","VariableID:5:23","VariableID:5:24","VariableID:5:25","VariableID:5:26","VariableID:5:27","VariableID:5:28","VariableID:5:29","VariableID:5:30","VariableID:5:31","VariableID:5:32","VariableID:5:33","VariableID:5:34"],"styles":{"titulo":"S:ccfe48d84d1c66db292bc2161cd67c1546a277fb,","titulo-mobile":"S:c1e707e7619ca87934eab929e12232df5cb953ce,","secao":"S:1fc5d3949c8f214b54e0a62eaabe62bed5388035,","secao-mobile":"S:10e274696ace3a3d2fae519f10a18eef5ce0597c,","card":"S:28f7af04c83b38e91f157917d8a09e696e014ff6,","corpo":"S:782f6ec26733cea7a53f424a853f1b8b8ab5e308,","botao":"S:20919874030cf5a9a887567d742effa3cd7c5eba,","nota":"S:59ed50584c819347ce83d126a4030fdaa3bd08d0,","rotulo":"S:321aaa4a1b31185b91ed4c80e42e9593bb53189d,"},"pageId":"0:1","fontAdaptation":"Fonte original do navegador: system-ui/Segoe UI. Segoe UI e Arial indisponíveis no MCP; Inter foi usada pela captura e é mantida nas duas opções de comparação. Não é uma reprodução tipográfica exata.","createdNodeIds":[],"createdVariableIds":["VariableID:5:3","VariableID:5:4","VariableID:5:5","VariableID:5:6","VariableID:5:7","VariableID:5:8","VariableID:5:9","VariableID:5:10","VariableID:5:11","VariableID:5:12","VariableID:5:13","VariableID:5:14","VariableID:5:15","VariableID:5:16","VariableID:5:17","VariableID:5:18","VariableID:5:19","VariableID:5:20","VariableID:5:21","VariableID:5:22","VariableID:5:23","VariableID:5:24","VariableID:5:25","VariableID:5:26","VariableID:5:27","VariableID:5:28","VariableID:5:29","VariableID:5:30","VariableID:5:31","VariableID:5:32","VariableID:5:33","VariableID:5:34"],"createdStyleIds":["S:ccfe48d84d1c66db292bc2161cd67c1546a277fb,","S:c1e707e7619ca87934eab929e12232df5cb953ce,","S:1fc5d3949c8f214b54e0a62eaabe62bed5388035,","S:10e274696ace3a3d2fae519f10a18eef5ce0597c,","S:28f7af04c83b38e91f157917d8a09e696e014ff6,","S:782f6ec26733cea7a53f424a853f1b8b8ab5e308,","S:20919874030cf5a9a887567d742effa3cd7c5eba,","S:59ed50584c819347ce83d126a4030fdaa3bd08d0,","S:321aaa4a1b31185b91ed4c80e42e9593bb53189d,"]},"wrappers":{"createdNodeIds":["6:2","6:3","6:4","6:5","6:6","6:7","6:8","6:9"],"mutatedNodeIds":["0:1"],"frames":{"atualHomeDesktop":"6:2","novoHomeDesktop":"6:3","atualHomeMobile":"6:4","novoHomeMobile":"6:5","atualAprovadosDesktop":"6:6","novoAprovadosDesktop":"6:7","atualAprovadosMobile":"6:8","novoAprovadosMobile":"6:9"},"bounds":[{"name":"Atual / Início / Computador","width":1440,"height":960},{"name":"Caminhos primeiro / Início / Computador","width":1440,"height":960},{"name":"Atual / Início / Celular","width":390,"height":844},{"name":"Caminhos primeiro / Início / Celular","width":390,"height":844},{"name":"Atual / Aprovados / Computador","width":1440,"height":960},{"name":"Caminhos primeiro / Aprovados / Computador","width":1440,"height":960},{"name":"Atual / Aprovados / Celular","width":390,"height":844},{"name":"Caminhos primeiro / Aprovados / Celular","width":390,"height":844}]},"capture":{"rootId":"2:2","imageHash":"157c285bf0eca8b3363b9cd2033737092999accd"},"scope":"Oito telas editáveis e navegação; referência atual e alternativa caminhos primeiro; sem alterar o site."};

const page=await figma.getNodeByIdAsync('0:1');await figma.setCurrentPageAsync(page);
await Promise.all(['Regular','Medium','Semi Bold','Bold'].map(style=>figma.loadFontAsync({family:'Inter',style})));
const variables={}; await Promise.all(Object.entries(STATE.foundations.variables).map(async([k,id])=>{variables[k]=await figma.variables.getVariableByIdAsync(id);}));
const styles=STATE.foundations.styles; const frames={};for(const[k,id]of Object.entries(STATE.wrappers.frames))frames[k]=await figma.getNodeByIdAsync(id);
const created=[];const links=[];const screens={};const components={};const props={};
const record=n=>{created.push(n.id);return n;};
function paint(key){return figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r:1,g:1,b:1}},'color',variables[key]);}
function fill(n,key){n.fills=key?[paint(key)]:[];}
function spacing(n,field,value){n[field]=value;const v=variables['gap'+value]||variables['radius'+value];if(v)n.setBoundVariable(field,v);}
function auto(parent,name,w,direction='VERTICAL',pad=0,gap=16,bg=null){
 const n=record(figma.createAutoLayout(direction));n.name=name;n.resize(w,10);n.layoutSizingHorizontal='FIXED';n.layoutSizingVertical='HUG';fill(n,bg);
 for(const f of ['paddingLeft','paddingRight','paddingTop','paddingBottom'])spacing(n,f,pad);spacing(n,'itemSpacing',gap);
 if(parent)parent.appendChild(n);return n;
}
function text(parent,value,w,style='corpo',color='text-primary',name=null){
 const t=record(figma.createText());t.name=name||value.slice(0,42);t.textStyleId=styles[style];t.fills=[paint(color)];t.characters=value;t.textAutoResize='HEIGHT';t.resize(w,Math.max(t.height,1));
 parent.appendChild(t);if(parent.layoutMode&&parent.layoutMode!=='NONE')t.layoutSizingHorizontal='FILL';return t;
}
function component(name,w,direction='VERTICAL',pad=0,gap=16,bg=null){
 const c=record(figma.createComponent());c.name=name;c.layoutMode=direction;c.resize(w,10);c.primaryAxisSizingMode='AUTO';c.counterAxisSizingMode='FIXED';fill(c,bg);
 for(const f of ['paddingLeft','paddingRight','paddingTop','paddingBottom'])spacing(c,f,pad);spacing(c,'itemSpacing',gap);return c;
}
function property(c,t,label){const key=c.addComponentProperty(label,'TEXT',t.characters);t.componentPropertyReferences={characters:key};return key;}
function inst(parent,c,w,values={}){
 const n=record(c.createInstance());parent.appendChild(n);if(Object.keys(values).length)n.setProperties(values);n.resize(w,n.height);n.layoutSizingVertical='HUG';return n;
}
function link(n,target,kind='NAVIGATE'){links.push({node:n,target,kind});return n;}
function button(parent,label,target,primary=true,w=260,kind='NAVIGATE'){
 const c=primary?components.primary:components.ghost;const key=primary?props.primary:props.ghost;return link(inst(parent,c,w,{[key]:label}),target,kind);
}
function section(content,name,w,mobile,bg=null,pad=64){const s=auto(content,name,w,'VERTICAL',0,24,bg);s.paddingLeft=s.paddingRight=mobile?20:140;s.paddingTop=s.paddingBottom=mobile?40:pad;return s;}
function heading(s,kicker,title,w,mobile){text(s,kicker,w,'rotulo','text-secondary');return text(s,title,w,mobile?'secao-mobile':'secao');}
function border(n){n.strokes=[paint('border')];n.strokeWeight=1;spacing(n,'cornerRadius',8);}
const library=auto(page,'Peças reutilizáveis / Salinha',1504,'VERTICAL',32,24,'surface-card');library.x=6100;library.y=300;
text(library,'Peças que podemos mudar uma vez e repetir nas telas',1440,'card');
for(const primary of [true,false]){
 const c=component(primary?'Salinha / Botão principal':'Salinha / Link',260,'HORIZONTAL',16,8,primary?'action-primary':null);
 c.counterAxisAlignItems='CENTER';c.primaryAxisAlignItems='CENTER';spacing(c,'cornerRadius',6);library.appendChild(c);
 const t=text(c,'Conhecer as aulas  ↗',228,'botao',primary?'text-on-action':'text-primary');const k=property(c,t,'Texto');
 c.description='Ação de navegação do site; texto editável. Não representa envio de formulário.';
 if(primary){components.primary=c;props.primary=k;}else{components.ghost=c;props.ghost=k;}
}
const path=component('Salinha / Caminho de estudo',350,'VERTICAL',24,8,'surface-card');border(path);library.appendChild(path);
props.path={tag:property(path,text(path,'FORTALECER A BASE',302,'rotulo','text-secondary'),'Rótulo'),title:property(path,text(path,'Reforço escolar',302,'card'),'Título'),body:property(path,text(path,'Para quem quer retomar conteúdos, esclarecer dúvidas e fortalecer a base em matemática.',302,'corpo','text-secondary'),'Descrição'),action:property(path,text(path,'Conversar sobre reforço  →',302,'botao'),'Ação')};path.description='Um objetivo de estudo; conteúdo da versão existente. A ação leva ao contato.';components.path=path;
const approval=component('Salinha / Registro de aprovação',350,'VERTICAL',0,8,null);library.appendChild(approval);
props.approval={name:property(approval,text(approval,'Lucas Martins',350,'card'),'Nome'),course:property(approval,text(approval,'Ciência da Computação',350,'corpo','action-primary'),'Curso'),university:property(approval,text(approval,'UNIFEI Itabira',350,'nota','text-secondary'),'Instituição')};
const source=text(approval,'Ver publicação da aprovação  ↗',350,'nota','text-secondary','link:fonte');approval.description='Registro publicado pela marca. Não é garantia de aprovação. Fonte vinculada em cada instância.';components.approval=approval;
for(const mobile of [false,true]){
 const w=mobile?390:1440;const c=component(mobile?'Salinha / Cabeçalho celular':'Salinha / Cabeçalho computador',w,'VERTICAL',0,0,'surface-page');library.appendChild(c);
 c.paddingLeft=c.paddingRight=mobile?20:140;c.paddingTop=c.paddingBottom=24;
 const row=auto(c,'Navegação',w-(mobile?40:280),'HORIZONTAL',0,16);row.primaryAxisAlignItems='SPACE_BETWEEN';row.counterAxisAlignItems='CENTER';
 const brand=text(row,'×  salinha da XL',mobile?220:300,'card','text-primary','link:inicio');brand.layoutSizingHorizontal='FIXED';
 if(mobile){const menu=text(row,'Menu',70,'botao','text-primary','link:menu');menu.layoutSizingHorizontal='FIXED';components.headerMobile=c;}
 else{const nav=auto(row,'Links',620,'HORIZONTAL',0,24);for(const [name,label,wid]of [['aulas','As aulas',82],['sobre','Sobre mim',100],['aprovados','Aprovados',100],['contato','Vamos conversar ↗',190]]){const t=text(nav,label,wid,'botao','text-primary','link:'+name);t.layoutSizingHorizontal='FIXED';}components.headerDesktop=c;}
 c.description='Cabeçalho compartilhado. O logo volta ao início; links recebem os destinos do fluxo.';
}
function paths(parent,width,mobile,contact,stack=false){
 const row=auto(parent,'Escolha seu caminho',width,(mobile||stack)?'VERTICAL':'HORIZONTAL',0,16);const cardW=(mobile||stack)?width:(width-16)/2;
 const data=[['FORTALECER A BASE','Reforço escolar','Para quem quer retomar conteúdos, esclarecer dúvidas e fortalecer a base em matemática.','Conversar sobre reforço  →'],['OLHAR PARA O PRÓXIMO DESAFIO','Vestibulares e ENEM','Para quem está construindo sua preparação e quer encarar os desafios da matemática nas provas.','Conversar sobre preparação  →']];
 data.forEach((d,i)=>{const v={};['tag','title','body','action'].forEach((key,j)=>v[props.path[key]]=d[j]);const card=inst(row,components.path,cardW,v);if(i)fill(card,'surface-soft');link(card,contact,'SCROLL_TO');});return row;
}
function math(parent,width){
 const art=record(figma.createFrame());parent.appendChild(art);art.name='Composição matemática / vetores editáveis';art.resize(width,465);fill(art,'surface-soft');art.cornerRadius=8;art.clipsContent=true;
 let grid='';for(let x=0;x<=520;x+=31)grid+='<path d="M'+x+' 0V465" stroke="#EBD1DE"/>';for(let y=0;y<=465;y+=31)grid+='<path d="M0 '+y+'H520" stroke="#EBD1DE"/>';
 const svg='<svg width="520" height="465" viewBox="0 0 520 465" fill="none" xmlns="http://www.w3.org/2000/svg">'+grid+'<circle cx="260" cy="210" r="118" fill="#B51B64"/><ellipse cx="260" cy="210" rx="155" ry="84" transform="rotate(37 260 210)" stroke="#65515F"/><g transform="translate(20 92)"><path d="M40 260H450M90 300V35" stroke="#65515F"/><path d="M45 265C115 270 128 220 190 220S266 240 302 166 337 112 410 55" stroke="#241921" stroke-width="4" stroke-linecap="round"/><path d="m386 58 24-3-5 24" stroke="#241921" stroke-width="4" stroke-linecap="round"/></g></svg>';
 const vector=record(figma.createNodeFromSvg(svg));art.appendChild(vector);vector.resize(width,465);
 const caption=text(art,'MUITOS CAMINHOS. UM PRÓXIMO PASSO.',width-48,'rotulo','text-secondary');caption.x=24;caption.y=24;
 const fx=text(art,'f(x)',180,'titulo','text-on-action');fx.x=width/2-90;fx.y=142;fx.fontSize=88;
 const bottom=text(art,'um passo\nde cada vez.',width-48,'card');bottom.x=24;bottom.y=365;return art;
}
const records=[
{name:'Lucas Martins',course:'Ciência da Computação',university:'UNIFEI Itabira',url:'https://www.instagram.com/salinhadaxl/p/DUJP8TbEdDo/',context:'Um novo capítulo na Ciência da Computação, registrado e celebrado em uma publicação da Salinha da XL.'},
{name:'Isadora Fontes',course:'Psicologia',university:'UFES',url:'https://www.instagram.com/salinhadaxl/p/DUJPdwOkds2/',quote:'“mto obg por todo o apoio Gisele❤️”',quoteUrl:'https://www.instagram.com/p/DUJPdwOkds2/c/17985603941930777/',author:'@isa.alvarenga'},
{name:'Isabella Vitória',course:'Engenharia Ambiental',university:'UNIFEI Itabira',url:'https://www.instagram.com/salinhadaxl/p/DT3GpcNDd6v/',quote:'“Obrigada, Gisele! Seu apoio foi essencial nesse processo ❤️”',quoteUrl:'https://www.instagram.com/p/DT3GpcNDd6v/c/18100338259879590/',author:'@isabellavrsantos'}
];
function result(parent,r,w,boxed=false,showQuote=true){
 const card=auto(parent,'História / '+r.name,w,'VERTICAL',boxed?24:0,16,boxed?'surface-card':null);if(boxed)border(card);
 const values={};for(const k of ['name','course','university'])values[props.approval[k]]=r[k];const i=inst(card,components.approval,w-(boxed?48:0),values);
 const src=i.findAllWithCriteria({types:['TEXT']}).find(n=>n.name==='link:fonte');if(src)link(src,r.url,'URL');
 if(showQuote){if(r.quote){text(card,'COMENTÁRIO NA PUBLICAÇÃO',w-(boxed?48:0),'rotulo','text-secondary');text(card,r.quote,w-(boxed?48:0),'corpo');link(text(card,r.author+' · fonte original ↗',w-(boxed?48:0),'nota','text-secondary'),r.quoteUrl,'URL');}else text(card,r.context,w-(boxed?48:0),'corpo','text-secondary');}return card;
}
function about(content,w,mobile){
 const s=section(content,'Sobre mim',w,mobile,'surface-soft');const inner=w-(mobile?40:280);const row=auto(s,'Professora e apresentação',inner,mobile?'VERTICAL':'HORIZONTAL',0,mobile?32:64);
 const photoW=mobile?inner:450;const photoCol=auto(row,'Publicação de apresentação',photoW,'VERTICAL',0,8);const img=record(figma.createRectangle());photoCol.appendChild(img);img.name='Publicação integral de Gisele / 14 abr. 2025';img.resize(photoW,photoW*1.25);img.fills=[{type:'IMAGE',imageHash:STATE.capture.imageHash,scaleMode:'FIT'}];img.cornerRadius=6;
 text(photoCol,'Publicação de apresentação · 14 abr. 2025',photoW,'nota','text-secondary');link(text(photoCol,'Fonte: @salinhadaxl ↗',photoW,'nota','text-secondary'),'https://www.instagram.com/salinhadaxl/p/DIbvuDRRTZU/','URL');
 const copy=auto(row,'Sobre a professora',mobile?inner:inner-photoW-64,'VERTICAL',0,24);const cw=copy.width;
 heading(copy,'02 / SOBRE MIM','Prazer,\nGisele Mara.',cw,mobile);text(copy,'Matemática também é sobre pessoas.',cw,'corpo');text(copy,'Gisele Mara é professora de matemática. Em sua apresentação pública, conta sobre sua trajetória em escolas públicas e privadas e sobre a alegria de acompanhar cada avanço dos alunos.',cw,'corpo','text-secondary');text(copy,'Seu trabalho reúne dedicação ao ensino e interesse em tornar a matemática mais compreensível.',cw,'corpo','text-secondary');link(text(copy,'Ler a apresentação original  ↗',cw,'botao'),'https://www.instagram.com/salinhadaxl/p/DIbvuDRRTZU/','URL');text(copy,'Resumo editorial baseado na publicação da professora. Imagem integral do post original, usada nesta demonstração.',cw,'nota','text-secondary');return s;
}
function footer(content,w,mobile,home,approved){
 const s=section(content,'Rodapé',w,mobile,null,32);link(text(s,'salinha da XL',w-(mobile?40:280),'card'),home);text(s,'Protótipo com referências fornecidas e observadas.\nConteúdo sujeito ao briefing e à aprovação. · 2026',s.width-(mobile?40:280),'nota','text-secondary');button(s,'Aprovados →',approved,false,220);return s;
}
for(const [key,root]of Object.entries(frames)){
 if(root.children.length)throw Error('Tela já tem conteúdo: '+key);
 const mobile=key.includes('Mobile'),alt=key.startsWith('novo'),isApproval=key.includes('Aprovados'),w=mobile?390:1440,cw=w-(mobile?40:280);
 const homeKey=(alt?'novo':'atual')+'Home'+(mobile?'Mobile':'Desktop');const approvedKey=(alt?'novo':'atual')+'Aprovados'+(mobile?'Mobile':'Desktop');
 const content=auto(root,'Conteúdo rolável',w,'VERTICAL',0,0,'surface-page');
 const strip=auto(content,'Aviso de protótipo',w,'VERTICAL',mobile?12:8,0,'surface-soft');const st=text(strip,'PROTÓTIPO · CONTEÚDO ILUSTRATIVO · PENDENTE DE BRIEFING',w-(mobile?24:16),'rotulo');st.textAlignHorizontal='CENTER';
 const header=inst(content,mobile?components.headerMobile:components.headerDesktop,w);const s={root:root.id,content:content.id,header:header.id,home:frames[homeKey].id,approved:frames[approvedKey].id,mobile,alt,isApproval,links:[]};screens[key]=s;
 if(!alt){const bar=section(content,'Comparação visual do site atual',w,mobile,'surface-card',12);bar.paddingTop=bar.paddingBottom=12;text(bar,'Uma marca. Duas possibilidades.   ◉ Claro   ○ Escuro',cw,'nota','text-secondary');}
 if(!isApproval){
  const hero=section(content,'Primeira tela',w,mobile,null,72);const row=auto(hero,'Mensagem e caminhos',cw,mobile?'VERTICAL':'HORIZONTAL',0,mobile?32:48);const left=auto(row,'Mensagem principal',mobile?cw:alt?560:592,'VERTICAL',0,24);
  text(left,'MATEMÁTICA PARA DIFERENTES OBJETIVOS',left.width,'rotulo','text-secondary');text(left,'Qual é o seu próximo passo na matemática?',left.width,mobile?'titulo-mobile':'titulo');text(left,'Reforço para fortalecer a base.\nPreparação para encarar novos desafios.',left.width,'corpo','text-secondary');
  if(alt){const pathColumn=auto(row,'Objetivos na chegada',mobile?cw:552,'VERTICAL',0,16);s.paths=paths(pathColumn,pathColumn.width,mobile,'contact:'+key,true).id;button(left,'Ver aprovados →',frames[approvedKey].id,false,220);}
  else{const actions=auto(left,'Próximos passos',left.width,mobile?'VERTICAL':'HORIZONTAL',0,8);button(actions,'Conhecer as aulas ↗','paths:'+key,true,mobile?cw:245,'SCROLL_TO');button(actions,'Ver aprovados →',frames[approvedKey].id,false,mobile?cw:235);math(row,mobile?cw:520);}
  text(left,'Apresentação ilustrativa; formatos e ofertas sujeitos ao briefing.',left.width,'nota','text-secondary');
  if(!alt){const classes=section(content,'As aulas',w,mobile,null,96);s.paths=classes.id;heading(classes,'01 / AS AULAS','Objetivos diferentes.\nMatemática em comum.',cw,mobile);text(classes,'Cada momento de estudo traz uma necessidade. Qual conversa com o seu?',cw,'corpo','text-secondary');paths(classes,cw,mobile,'contact:'+key);}
  s.about=about(content,w,mobile).id;
  const stories=section(content,'Histórias de aprovados',w,mobile,alt?'surface-page':'inverse',80);
  if(alt){heading(stories,'03 / APROVADOS','Cada caminho tem uma história.',cw,mobile);const list=auto(stories,'Registros publicados',cw,mobile?'VERTICAL':'HORIZONTAL',0,24);for(const r of records)result(list,r,mobile?cw:(cw-48)/3,true,false);button(stories,'Conhecer essas histórias ↗',frames[approvedKey].id,true,Math.min(cw,300));}
  else{text(stories,'03 / APROVADOS',cw,'rotulo','inverse-accent');text(stories,'Cada caminho tem uma história.',cw,mobile?'secao-mobile':'secao','inverse-text');text(stories,'Ciência da Computação, Psicologia, Engenharia Ambiental. Conheça alguns dos caminhos celebrados pela Salinha da XL.',cw,'corpo','inverse-text');const b=button(stories,'Conhecer essas histórias ↗',frames[approvedKey].id,true,Math.min(cw,300));fill(b,'surface-card');b.findAllWithCriteria({types:['TEXT']}).forEach(t=>t.fills=[paint('text-primary')]);}
  text(stories,'Registros públicos da marca. Resultados individuais não são garantia de desempenho futuro.',cw,'nota',alt?'text-secondary':'inverse-text');
  const contact=section(content,'Contato',w,mobile,null,80);s.contact=contact.id;heading(contact,'04 / O PRÓXIMO PASSO','A conversa pode começar com uma dúvida.',cw,mobile);text(contact,'Conheça as publicações da Salinha da XL e encontre o perfil da professora no Instagram.',cw,'corpo','text-secondary');button(contact,'Ir para @salinhadaxl ↗','https://www.instagram.com/salinhadaxl/',true,Math.min(cw,300),'URL');text(contact,'Modalidades, horários e disponibilidade a confirmar. Este protótipo não realiza matrículas ou agendamentos.',cw,'nota','text-secondary');
 }else{
  const intro=section(content,'Introdução dos aprovados',w,mobile,null,64);button(intro,'← Voltar para o início',frames[homeKey].id,false,Math.min(cw,270));heading(intro,'APROVADOS / HISTÓRIAS COMPARTILHADAS','Novos caminhos.\nHistórias reais.',cw,mobile);text(intro,'Por trás de cada curso, existe uma pessoa e um novo capítulo. Conheça registros de aprovação celebrados pela Salinha da XL.',cw,'corpo','text-secondary');text(intro,'Informações divulgadas pela marca no Instagram. Não representam garantia de aprovação ou desempenho futuro.',cw,'nota','text-secondary');
  const results=section(content,'Registros de aprovação',w,mobile,null,40);heading(results,'PUBLICAÇÕES ORIGINAIS','Uma conquista, muitos significados.',cw,mobile);
  const list=auto(results,'Lista de histórias',cw,alt&&!mobile?'HORIZONTAL':'VERTICAL',0,24);
  for(const r of records)result(list,r,alt&&!mobile?(cw-48)/3:cw,alt,true);
  text(results,'Nomes, cursos e comentários foram consultados em publicações públicas da marca. Os comentários preservam o texto original e não foram obtidos por entrevista. O uso comercial dos registros depende de validação com a cliente.',cw,'nota','text-secondary');
  const questions=section(content,'Perguntas sugeridas',w,mobile,'surface-soft');heading(questions,'ROTEIRO SUGERIDO','Perguntas para novas histórias.',cw,mobile);text(questions,'As perguntas abaixo são sugestões de coleta; não são depoimentos nem respostas atribuídas a pessoas.',cw,'corpo','text-secondary');for(const q of ['1. Como era sua relação com a matemática antes das aulas?','2. Que mudança você percebeu durante a preparação?','3. Como foi receber a notícia da aprovação?'])text(questions,q,cw,'corpo');
  const close=section(content,'Próximo passo',w,mobile);heading(close,'E QUAL É O SEU PRÓXIMO PASSO?','Toda história começa com uma possibilidade.',cw,mobile);button(close,'Explorar as possibilidades ↗',frames[homeKey].id,true,Math.min(cw,320));s.contact=close.id;
 }
 footer(content,w,mobile,frames[homeKey].id,frames[approvedKey].id);
}
const menuFrames={};
for(const [key,s] of Object.entries(screens).filter(([k,s])=>s.mobile)){
 const menu=auto(page,'Menu / '+frames[key].name,350,'VERTICAL',24,16,'surface-card');menu.x=7800;menu.y=300+Object.keys(menuFrames).length*430;menuFrames[key]=menu.id;border(menu);
 link(text(menu,'Fechar ×',302,'botao'),null,'CLOSE');
 for(const [name,label]of [['aulas','As aulas'],['sobre','Sobre mim'],['aprovados','Aprovados'],['contato','Vamos conversar']]){
  const n=text(menu,label,302,'corpo'); if(name==='aprovados')link(n,s.approved);
  else if(s.isApproval)link(n,s.home);
  else{links.push({node:n,kind:'CLOSE_SCROLL',target:name==='aulas'?s.paths:name==='sobre'?s.about:s.contact});}
 }
 const hi=await figma.getNodeByIdAsync(s.header);for(const n of hi.findAllWithCriteria({types:['TEXT']})){if(n.name==='link:menu')link(n,menu.id,'OVERLAY');if(n.name==='link:inicio')link(n,s.home);}
}
for(const[key,s]of Object.entries(screens).filter(([k,s])=>!s.mobile)){
 const h=await figma.getNodeByIdAsync(s.header);for(const n of h.findAllWithCriteria({types:['TEXT']})){
 const type=n.name.replace('link:','');if(type==='inicio')link(n,s.home);
 if(type==='aprovados')link(n,s.approved);
 if(['aulas','sobre','contato'].includes(type))link(n,s.isApproval?s.home:type==='aulas'?s.paths:type==='sobre'?s.about:s.contact,s.isApproval?'NAVIGATE':'SCROLL_TO');
 }
}
let count=0;const reactionFailures=[];
for(const l of links){
 let target=l.target;if(typeof target==='string'&&target.startsWith('contact:'))target=screens[target.slice(8)].contact;
 if(typeof target==='string'&&target.startsWith('paths:'))target=screens[target.slice(6)].paths;
 let actions;
 if(l.kind==='URL')actions=[{type:'URL',url:target,openInNewTab:true}];
 else if(l.kind==='CLOSE')actions=[{type:'CLOSE'}];
 else if(l.kind==='CLOSE_SCROLL')actions=[{type:'CLOSE'},{type:'NODE',destinationId:target,navigation:'SCROLL_TO',transition:null}];
 else { let top=l.node;while(top.parent&&top.parent.type!=='PAGE')top=top.parent; const self=l.kind==='NAVIGATE'&&top.id===target; actions=[{type:'NODE',destinationId:self?top.children[0].id:target,navigation:self?'SCROLL_TO':l.kind,transition:null}]; }
 try { await l.node.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions}]);count++; } catch(error) { let p=l.node;while(p.parent&&p.parent.type!=='PAGE')p=p.parent; reactionFailures.push({sourceId:l.node.id,sourceName:l.node.name,rootId:p.id,kind:l.kind,target,actions,message:String(error)}); }
}
page.flowStartingPoints=[
 {nodeId:frames.atualHomeDesktop.id,name:'A — Atual / Computador'},
 {nodeId:frames.novoHomeDesktop.id,name:'B — Caminhos primeiro / Computador'},
 {nodeId:frames.atualHomeMobile.id,name:'A — Atual / Celular'},
 {nodeId:frames.novoHomeMobile.id,name:'B — Caminhos primeiro / Celular'}
];
const guide=auto(page,'Comece aqui / Como comparar',3000,'VERTICAL',32,16,'surface-card');guide.x=1640;guide.y=-60;
text(guide,'Salinha da XL — duas organizações para comparar',2936,'secao');
text(guide,'A: organização atual. B: caminhos de estudo na chegada. Abra Apresentar para navegar; role para conhecer Gisele e as histórias. As quatro entradas de fluxo separam computador e celular.',2936,'corpo','text-secondary');
text(guide,'Mesma paleta nas duas opções. Segoe UI não está disponível nesta integração: Inter aproxima a tipografia. A reprodução é editável e não promete correspondência de cada pixel. Nenhum teste com pessoas foi realizado.',2936,'nota','text-secondary');
const allCreated=new Set(created);for(const node of [library,guide,...Object.values(frames),...Object.values(menuFrames).map(id=>page.findOne(n=>n.id===id)).filter(Boolean)])if('findAll' in node)for(const d of node.findAll(()=>true))allCreated.add(d.id);
const results=Object.entries(screens).map(([key,s])=>{const frame=frames[key];const content=frame.children[0];const descendants=frame.findAll(()=>true);const counts={};for(const n of descendants)counts[n.type]=(counts[n.type]||0)+1;return{key,id:frame.id,width:frame.width,height:frame.height,contentHeight:content.height,counts,imageNodes:descendants.filter(n=>Array.isArray(n.fills)&&n.fills.some(f=>f.type==='IMAGE')).map(n=>({id:n.id,name:n.name,width:n.width,height:n.height}))};});
return {createdNodeIds:[...allCreated],mutatedNodeIds:[page.id,...Object.values(frames).map(f=>f.id)],components:Object.fromEntries(Object.entries(components).map(([k,n])=>[k,n.id])),componentPropertyKeys:props,libraryId:library.id,guideId:guide.id,menuFrames,screens,validation:results,interactionCount:count,reactionFailures,flows:page.flowStartingPoints};
