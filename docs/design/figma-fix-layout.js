// Registro da correção executada no Figma. Usa IDs desta rodada; não executar no site ou em Node.js.

const page=await figma.getNodeByIdAsync('0:1');await figma.setCurrentPageAsync(page);
await Promise.all(['Regular','Medium','Semi Bold','Bold'].map(style=>figma.loadFontAsync({family:'Inter',style})));
const mutated=[];
for(const [id,mobile]of [['9:727',false],['9:735',true]]){
 const c=await figma.getNodeByIdAsync(id);c.paddingTop=c.paddingBottom=mobile?24:31;mutated.push(c.id);
 for(const t of c.findAllWithCriteria({types:['TEXT']})){
 const widths=mobile?{'link:inicio':220,'link:menu':70}:{'link:inicio':300,'link:aulas':82,'link:sobre':100,'link:aprovados':100,'link:contato':190};
 if(widths[t.name]){t.layoutSizingHorizontal='FIXED';t.resize(widths[t.name],t.height);t.textAutoResize='HEIGHT';mutated.push(t.id);}
 }
}
for(const id of ['6:5','10:501']){
 const root=await figma.getNodeByIdAsync(id);const hero=root.children[0].children.find(n=>n.name==='Primeira tela');if(!hero)throw Error('Hero ausente');const row=hero.children[0];const left=row.children[0];
 const tail=left.children.filter(n=>n.type==='INSTANCE'||(n.type==='TEXT'&&n.characters.startsWith('Apresentação ilustrativa')));
 for(const n of tail){hero.appendChild(n);mutated.push(n.id);}
 for(const card of root.findAllWithCriteria({types:['INSTANCE']}).filter(n=>n.name==='Salinha / Caminho de estudo')){
  card.paddingLeft=card.paddingRight=card.paddingTop=card.paddingBottom=20;mutated.push(card.id);
  for(const t of card.findAllWithCriteria({types:['TEXT']}).filter(n=>n.characters.startsWith('Para quem'))){t.fontSize=14;t.lineHeight={unit:'PIXELS',value:22};mutated.push(t.id);}
 }
 mutated.push(root.id,hero.id,left.id);
}
return {mutatedNodeIds:[...new Set(mutated)],headerDesktopHeight:(await figma.getNodeByIdAsync('9:727')).height,headerMobileHeight:(await figma.getNodeByIdAsync('9:735')).height,reason:'Corrigir larguras da navegação e aproximar as duas escolhas no celular; componentes corrigem também as instâncias.'};
