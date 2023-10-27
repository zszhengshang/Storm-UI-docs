import{V as d}from"./chunks/vmp_components.11213204.js";import{C as r,o as y,b as F,h as b,c as v,H as e,w as n,a as s,F as u,t as f,x as L,l as D,k as l,Q as k}from"./chunks/framework.fbc8a78a.js";const g={__name:"tree.md.DemoBlockIbc094d0d",setup(i){const t=o=>{console.log(o)},c=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],p={children:"children",label:"label",value:"label"};return(o,a)=>{const E=r("s-tree");return y(),F(E,{data:c,props:p,onNodeClick:t})}}},w={__name:"tree.md.DemoBlockIa72cee94",setup(i){const t=(o,a)=>{console.log(o,a)},c=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],p={children:"children",label:"label",value:"label"};return(o,a)=>{const E=r("s-tree");return y(),F(E,{data:c,props:p,"show-checkbox":"",onCheckChange:t})}}},x={__name:"tree.md.DemoBlockI70396351",setup(i){const t=[{id:1,label:"region"}],c=(p,o)=>{let a=1;if(p.level>0)return o([]);setTimeout(()=>{const E=[{label:"leaf",id:++a,isLeaf:!0},{id:++a,label:"zone"}];o(E)},500)};return(p,o)=>{const a=r("s-tree");return y(),F(a,{data:t,load:c,lazy:"","show-checkbox":""})}}},_={__name:"tree.md.DemoBlockIb67c230a",setup(i){const t=[{id:1,label:"Level one 1",children:[{id:3,label:"Level two 2-1",children:[{id:4,label:"Level three 3-1-1"},{id:5,label:"Level three 3-1-2",disabled:!0}]},{id:2,label:"Level two 2-2",disabled:!0,children:[{id:6,label:"Level three 3-2-1"},{id:7,label:"Level three 3-2-2",disabled:!0}]}]}];return(c,p)=>{const o=r("s-tree");return y(),F(o,{data:t,"show-checkbox":""})}}},m={__name:"tree.md.DemoBlockIfa3d545b",setup(i){const t=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(c,p)=>{const o=r("s-tree");return y(),F(o,{data:t,"show-checkbox":"","default-expanded-keys":[2,3],"default-checked-keys":[5]})}}},N={__name:"tree.md.DemoBlockI92f0eafd",setup(i){const t=b(),c=()=>{const A=t.value.getCheckedNodes();console.log(A)},p=()=>{const A=t.value.getCheckedKeys();console.log(A)},o=()=>{t.value.setCheckedKeys([1,3])},a=()=>{t.value.setChecked(1,!1),t.value.setChecked(3,!1),t.value.setChecked(2,!0)},E=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(A,B)=>{const h=r("s-tree"),C=r("s-button");return y(),v(u,null,[e(h,{ref_key:"treeRef",ref:t,data:E,"show-checkbox":""},null,512),e(C,{onClick:c},{default:n(()=>[s("get by node")]),_:1}),e(C,{onClick:p},{default:n(()=>[s("get by key")]),_:1}),e(C,{onClick:o},{default:n(()=>[s("set by keys")]),_:1}),e(C,{onClick:a},{default:n(()=>[s("set by key")]),_:1})],64)}}},T={__name:"tree.md.DemoBlockI0c67fef5",setup(i){const t=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(c,p)=>{const o=r("s-tree");return y(),F(o,{data:t,"show-checkbox":"","default-expanded-keys":[1,2,3,4]},{default:n(a=>[s(" 自定义的节点 + "+f(a.label),1)]),_:1})}}},P={__name:"tree.md.DemoBlockIb048b72c",setup(i){const t=b(),c=b("");L(c,a=>{t.value.filter(a)});const p=(a,E)=>a?E.label.includes(a):!0,o=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(a,E)=>{const A=r("s-input"),B=r("s-tree");return y(),v(u,null,[e(A,{modelValue:c.value,"onUpdate:modelValue":E[0]||(E[0]=h=>c.value=h),placeholder:"Filter keyword"},null,8,["modelValue"]),e(B,{ref_key:"treeRef",ref:t,data:o,"show-checkbox":"","filter-method":p},null,512)],64)}}},R=l("h1",{id:"tree-树形控件",tabindex:"-1"},[s("Tree 树形控件 "),l("a",{class:"header-anchor",href:"#tree-树形控件","aria-label":'Permalink to "Tree 树形控件"'},"​")],-1),K=l("p",null,"用清晰的层级结构展示信息，可展开或折叠。",-1),q=l("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),I=l("p",null,"基础的树形结构展示",-1),V=l("div",{class:"language-vue vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"vue"),l("pre",{class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	<"),l("span",{style:{color:"#85E89D"}},"s-tree"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":props"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"defaultProps"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@node-click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleNodeClick"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"s-tree"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"handleNodeClick"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"(data)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"data"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 1-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 2-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 2-2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 3"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 3-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 3-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 3-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 3-2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"defaultProps"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	children: "),l("span",{style:{color:"#9ECBFF"}},'"children"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	label: "),l("span",{style:{color:"#9ECBFF"}},'"label"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	value: "),l("span",{style:{color:"#9ECBFF"}},'"label"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	<"),l("span",{style:{color:"#22863A"}},"s-tree"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":data"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"data"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":props"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"defaultProps"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@node-click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"handleNodeClick"'),l("span",{style:{color:"#24292E"}},"></"),l("span",{style:{color:"#22863A"}},"s-tree"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"handleNodeClick"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#E36209"}},"data"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	console."),l("span",{style:{color:"#6F42C1"}},"log"),l("span",{style:{color:"#24292E"}},"(data)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"data"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 1-1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 1-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 2"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 2-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-2"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 2-2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 3"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 3-1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 3-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 3-2"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 3-2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"]")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"defaultProps"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	children: "),l("span",{style:{color:"#032F62"}},'"children"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	label: "),l("span",{style:{color:"#032F62"}},'"label"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	value: "),l("span",{style:{color:"#032F62"}},'"label"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")])])])],-1),z=l("h2",{id:"可选择",tabindex:"-1"},[s("可选择 "),l("a",{class:"header-anchor",href:"#可选择","aria-label":'Permalink to "可选择"'},"​")],-1),S=l("p",null,"适用于需要选择层级时使用。",-1),$=l("div",{class:"language-vue vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"vue"),l("pre",{class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	<"),l("span",{style:{color:"#85E89D"}},"s-tree"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":props"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"defaultProps"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"show-checkbox"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@check-change"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleCheckChange"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"s-tree"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"handleCheckChange"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"checked"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"(data, checked)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"data"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 1-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 2-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 2-2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 3"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 3-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 3-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 3-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 3-2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"defaultProps"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	children: "),l("span",{style:{color:"#9ECBFF"}},'"children"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	label: "),l("span",{style:{color:"#9ECBFF"}},'"label"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	value: "),l("span",{style:{color:"#9ECBFF"}},'"label"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	<"),l("span",{style:{color:"#22863A"}},"s-tree"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":data"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"data"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":props"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"defaultProps"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"show-checkbox"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@check-change"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"handleCheckChange"'),l("span",{style:{color:"#24292E"}},"></"),l("span",{style:{color:"#22863A"}},"s-tree"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"handleCheckChange"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," ("),l("span",{style:{color:"#E36209"}},"data"),l("span",{style:{color:"#24292E"}},", "),l("span",{style:{color:"#E36209"}},"checked"),l("span",{style:{color:"#24292E"}},") "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	console."),l("span",{style:{color:"#6F42C1"}},"log"),l("span",{style:{color:"#24292E"}},"(data, checked)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"data"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 1-1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 1-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 2"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 2-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-2"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 2-2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 3"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 3-1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 3-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 3-2"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 3-2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"]")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"defaultProps"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	children: "),l("span",{style:{color:"#032F62"}},'"children"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	label: "),l("span",{style:{color:"#032F62"}},'"label"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	value: "),l("span",{style:{color:"#032F62"}},'"label"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")])])])],-1),O=l("h2",{id:"懒加载自定义叶子节点",tabindex:"-1"},[s("懒加载自定义叶子节点 "),l("a",{class:"header-anchor",href:"#懒加载自定义叶子节点","aria-label":'Permalink to "懒加载自定义叶子节点"'},"​")],-1),H=l("p",null,"由于在点击节点时才进行该层数据的获取，默认情况下 Tree 无法预知某个节点是否为叶子节点， 所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。 同时，你也可以提前告知 Tree 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。",-1),j=l("div",{class:"language-vue vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"vue"),l("pre",{class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	<"),l("span",{style:{color:"#85E89D"}},"s-tree"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":load"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"loadNode"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"lazy"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"show-checkbox"),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"data"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"region"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"loadNode"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"node"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"resolve"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	"),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," id "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"1")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	"),l("span",{style:{color:"#F97583"}},"if"),l("span",{style:{color:"#E1E4E8"}}," (node.level "),l("span",{style:{color:"#F97583"}},">"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"0"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"return"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"resolve"),l("span",{style:{color:"#E1E4E8"}},"([])")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	"),l("span",{style:{color:"#B392F0"}},"setTimeout"),l("span",{style:{color:"#E1E4E8"}},"(() "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		"),l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"data"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"leaf"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#F97583"}},"++"),l("span",{style:{color:"#E1E4E8"}},"id,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				isLeaf: "),l("span",{style:{color:"#79B8FF"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#F97583"}},"++"),l("span",{style:{color:"#E1E4E8"}},"id,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"zone"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		"),l("span",{style:{color:"#B392F0"}},"resolve"),l("span",{style:{color:"#E1E4E8"}},"(data)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	}, "),l("span",{style:{color:"#79B8FF"}},"500"),l("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	<"),l("span",{style:{color:"#22863A"}},"s-tree"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":data"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"data"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":load"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"loadNode"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"lazy"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"show-checkbox"),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"data"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"1"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"region"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"]")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"loadNode"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," ("),l("span",{style:{color:"#E36209"}},"node"),l("span",{style:{color:"#24292E"}},", "),l("span",{style:{color:"#E36209"}},"resolve"),l("span",{style:{color:"#24292E"}},") "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	"),l("span",{style:{color:"#D73A49"}},"let"),l("span",{style:{color:"#24292E"}}," id "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"1")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	"),l("span",{style:{color:"#D73A49"}},"if"),l("span",{style:{color:"#24292E"}}," (node.level "),l("span",{style:{color:"#D73A49"}},">"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"0"),l("span",{style:{color:"#24292E"}},") "),l("span",{style:{color:"#D73A49"}},"return"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"resolve"),l("span",{style:{color:"#24292E"}},"([])")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	"),l("span",{style:{color:"#6F42C1"}},"setTimeout"),l("span",{style:{color:"#24292E"}},"(() "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		"),l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"data"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"leaf"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#D73A49"}},"++"),l("span",{style:{color:"#24292E"}},"id,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				isLeaf: "),l("span",{style:{color:"#005CC5"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#D73A49"}},"++"),l("span",{style:{color:"#24292E"}},"id,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"zone"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		"),l("span",{style:{color:"#6F42C1"}},"resolve"),l("span",{style:{color:"#24292E"}},"(data)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	}, "),l("span",{style:{color:"#005CC5"}},"500"),l("span",{style:{color:"#24292E"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")])])])],-1),J=l("h2",{id:"禁用复选框",tabindex:"-1"},[s("禁用复选框 "),l("a",{class:"header-anchor",href:"#禁用复选框","aria-label":'Permalink to "禁用复选框"'},"​")],-1),M=l("p",null,"节点的复选框可以设置为禁用。",-1),Q=l("div",{class:"language-vue vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"vue"),l("pre",{class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	<"),l("span",{style:{color:"#85E89D"}},"s-tree"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"show-checkbox"),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"data"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"3"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						id: "),l("span",{style:{color:"#79B8FF"}},"4"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 3-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						id: "),l("span",{style:{color:"#79B8FF"}},"5"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 3-1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						disabled: "),l("span",{style:{color:"#79B8FF"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"2"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				disabled: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						id: "),l("span",{style:{color:"#79B8FF"}},"6"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 3-2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						id: "),l("span",{style:{color:"#79B8FF"}},"7"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 3-2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						disabled: "),l("span",{style:{color:"#79B8FF"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	<"),l("span",{style:{color:"#22863A"}},"s-tree"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":data"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"data"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"show-checkbox"),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"data"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"1"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"3"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						id: "),l("span",{style:{color:"#005CC5"}},"4"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 3-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						id: "),l("span",{style:{color:"#005CC5"}},"5"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 3-1-2"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						disabled: "),l("span",{style:{color:"#005CC5"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"2"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-2"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				disabled: "),l("span",{style:{color:"#005CC5"}},"true"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						id: "),l("span",{style:{color:"#005CC5"}},"6"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 3-2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						id: "),l("span",{style:{color:"#005CC5"}},"7"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 3-2-2"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						disabled: "),l("span",{style:{color:"#005CC5"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")])])])],-1),U=l("h2",{id:"默认展开以及默认选中",tabindex:"-1"},[s("默认展开以及默认选中 "),l("a",{class:"header-anchor",href:"#默认展开以及默认选中","aria-label":'Permalink to "默认展开以及默认选中"'},"​")],-1),G=l("p",null,"树节点可以在初始化阶段被设置为展开和选中。",-1),W=l("p",null,"分别通过 default-expanded-keys 和 default-checked-keys 设置默认展开和默认选中的节点。",-1),X=l("div",{class:"language-vue vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"vue"),l("pre",{class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	<"),l("span",{style:{color:"#85E89D"}},"s-tree"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"show-checkbox"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":default-expanded-keys"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"[2, 3]"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":default-checked-keys"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"[5]"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"data"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"4"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						id: "),l("span",{style:{color:"#79B8FF"}},"9"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 1-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						id: "),l("span",{style:{color:"#79B8FF"}},"10"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 1-1-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"2"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"5"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"6"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"3"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 3"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"7"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 3-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"8"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 3-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	<"),l("span",{style:{color:"#22863A"}},"s-tree"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":data"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"data"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"show-checkbox"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":default-expanded-keys"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"[2, 3]"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":default-checked-keys"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"[5]"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"data"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"1"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"4"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 1-1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						id: "),l("span",{style:{color:"#005CC5"}},"9"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 1-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						id: "),l("span",{style:{color:"#005CC5"}},"10"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 1-1-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"2"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 2"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"5"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"6"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"3"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 3"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"7"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 3-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"8"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 3-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")])])])],-1),Y=l("h2",{id:"树节点的选择",tabindex:"-1"},[s("树节点的选择 "),l("a",{class:"header-anchor",href:"#树节点的选择","aria-label":'Permalink to "树节点的选择"'},"​")],-1),Z=l("p",null,"本例展示如何获取和设置选中节点。 获取和设置各有两种方式：通过 node 或通过 key。",-1),ll=l("div",{class:"language-vue vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"vue"),l("pre",{class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	<"),l("span",{style:{color:"#85E89D"}},"s-tree"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"treeRef"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"show-checkbox"),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	<"),l("span",{style:{color:"#85E89D"}},"s-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"getCheckedNodes"'),l("span",{style:{color:"#E1E4E8"}},">get by node</"),l("span",{style:{color:"#85E89D"}},"s-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	<"),l("span",{style:{color:"#85E89D"}},"s-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"getCheckedKeys"'),l("span",{style:{color:"#E1E4E8"}},">get by key</"),l("span",{style:{color:"#85E89D"}},"s-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	<"),l("span",{style:{color:"#85E89D"}},"s-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"setCheckedKeys"'),l("span",{style:{color:"#E1E4E8"}},">set by keys</"),l("span",{style:{color:"#85E89D"}},"s-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	<"),l("span",{style:{color:"#85E89D"}},"s-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"setChecked"'),l("span",{style:{color:"#E1E4E8"}},">set by key</"),l("span",{style:{color:"#85E89D"}},"s-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"import"),l("span",{style:{color:"#E1E4E8"}}," { ref } "),l("span",{style:{color:"#F97583"}},"from"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#9ECBFF"}},'"vue"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"treeRef"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"getCheckedNodes"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," () "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	"),l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"nodes"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," treeRef.value."),l("span",{style:{color:"#B392F0"}},"getCheckedNodes"),l("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"(nodes)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"getCheckedKeys"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," () "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	"),l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"keys"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," treeRef.value."),l("span",{style:{color:"#B392F0"}},"getCheckedKeys"),l("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"(keys)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setCheckedKeys"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," () "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	treeRef.value."),l("span",{style:{color:"#B392F0"}},"setCheckedKeys"),l("span",{style:{color:"#E1E4E8"}},"(["),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#79B8FF"}},"3"),l("span",{style:{color:"#E1E4E8"}},"])")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setChecked"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," () "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	treeRef.value."),l("span",{style:{color:"#B392F0"}},"setChecked"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	treeRef.value."),l("span",{style:{color:"#B392F0"}},"setChecked"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"3"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	treeRef.value."),l("span",{style:{color:"#B392F0"}},"setChecked"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"2"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"data"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"4"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						id: "),l("span",{style:{color:"#79B8FF"}},"9"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 1-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						id: "),l("span",{style:{color:"#79B8FF"}},"10"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 1-1-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"2"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"5"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"6"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"3"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 3"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"7"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 3-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"8"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 3-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	<"),l("span",{style:{color:"#22863A"}},"s-tree"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"treeRef"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":data"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"data"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"show-checkbox"),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	<"),l("span",{style:{color:"#22863A"}},"s-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"getCheckedNodes"'),l("span",{style:{color:"#24292E"}},">get by node</"),l("span",{style:{color:"#22863A"}},"s-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	<"),l("span",{style:{color:"#22863A"}},"s-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"getCheckedKeys"'),l("span",{style:{color:"#24292E"}},">get by key</"),l("span",{style:{color:"#22863A"}},"s-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	<"),l("span",{style:{color:"#22863A"}},"s-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"setCheckedKeys"'),l("span",{style:{color:"#24292E"}},">set by keys</"),l("span",{style:{color:"#22863A"}},"s-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	<"),l("span",{style:{color:"#22863A"}},"s-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"setChecked"'),l("span",{style:{color:"#24292E"}},">set by key</"),l("span",{style:{color:"#22863A"}},"s-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"import"),l("span",{style:{color:"#24292E"}}," { ref } "),l("span",{style:{color:"#D73A49"}},"from"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},'"vue"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"treeRef"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"getCheckedNodes"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," () "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	"),l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"nodes"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," treeRef.value."),l("span",{style:{color:"#6F42C1"}},"getCheckedNodes"),l("span",{style:{color:"#24292E"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	console."),l("span",{style:{color:"#6F42C1"}},"log"),l("span",{style:{color:"#24292E"}},"(nodes)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"getCheckedKeys"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," () "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	"),l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"keys"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," treeRef.value."),l("span",{style:{color:"#6F42C1"}},"getCheckedKeys"),l("span",{style:{color:"#24292E"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	console."),l("span",{style:{color:"#6F42C1"}},"log"),l("span",{style:{color:"#24292E"}},"(keys)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setCheckedKeys"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," () "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	treeRef.value."),l("span",{style:{color:"#6F42C1"}},"setCheckedKeys"),l("span",{style:{color:"#24292E"}},"(["),l("span",{style:{color:"#005CC5"}},"1"),l("span",{style:{color:"#24292E"}},", "),l("span",{style:{color:"#005CC5"}},"3"),l("span",{style:{color:"#24292E"}},"])")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setChecked"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," () "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	treeRef.value."),l("span",{style:{color:"#6F42C1"}},"setChecked"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#005CC5"}},"1"),l("span",{style:{color:"#24292E"}},", "),l("span",{style:{color:"#005CC5"}},"false"),l("span",{style:{color:"#24292E"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	treeRef.value."),l("span",{style:{color:"#6F42C1"}},"setChecked"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#005CC5"}},"3"),l("span",{style:{color:"#24292E"}},", "),l("span",{style:{color:"#005CC5"}},"false"),l("span",{style:{color:"#24292E"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	treeRef.value."),l("span",{style:{color:"#6F42C1"}},"setChecked"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#005CC5"}},"2"),l("span",{style:{color:"#24292E"}},", "),l("span",{style:{color:"#005CC5"}},"true"),l("span",{style:{color:"#24292E"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"data"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"1"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"4"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 1-1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						id: "),l("span",{style:{color:"#005CC5"}},"9"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 1-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						id: "),l("span",{style:{color:"#005CC5"}},"10"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 1-1-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"2"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 2"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"5"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"6"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"3"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 3"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"7"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 3-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"8"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 3-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")])])])],-1),sl=l("h2",{id:"自定义节点内容",tabindex:"-1"},[s("自定义节点内容 "),l("a",{class:"header-anchor",href:"#自定义节点内容","aria-label":'Permalink to "自定义节点内容"'},"​")],-1),tl=l("p",null,"节点的内容支持自定义，可以在节点区添加按钮或图标等内容",-1),el=l("div",{class:"language-vue vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"vue"),l("pre",{class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	<"),l("span",{style:{color:"#85E89D"}},"s-tree"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"show-checkbox"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":default-expanded-keys"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"[1, 2, 3, 4]"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"default"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},"node"),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},"> 自定义的节点 + {{ node.label }} </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	</"),l("span",{style:{color:"#85E89D"}},"s-tree"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"data"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"4"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						id: "),l("span",{style:{color:"#79B8FF"}},"9"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 1-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						id: "),l("span",{style:{color:"#79B8FF"}},"10"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 1-1-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"2"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"5"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"6"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"3"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 3"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"7"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 3-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"8"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 3-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	<"),l("span",{style:{color:"#22863A"}},"s-tree"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":data"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"data"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"show-checkbox"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":default-expanded-keys"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"[1, 2, 3, 4]"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}}," #"),l("span",{style:{color:"#6F42C1"}},"default"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"'),l("span",{style:{color:"#24292E"}},"node"),l("span",{style:{color:"#032F62"}},'"'),l("span",{style:{color:"#24292E"}},"> 自定义的节点 + {{ node.label }} </"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	</"),l("span",{style:{color:"#22863A"}},"s-tree"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"data"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"1"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"4"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 1-1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						id: "),l("span",{style:{color:"#005CC5"}},"9"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 1-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						id: "),l("span",{style:{color:"#005CC5"}},"10"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 1-1-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"2"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 2"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"5"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"6"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"3"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 3"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"7"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 3-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"8"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 3-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")])])])],-1),nl=l("h2",{id:"树节点过滤",tabindex:"-1"},[s("树节点过滤 "),l("a",{class:"header-anchor",href:"#树节点过滤","aria-label":'Permalink to "树节点过滤"'},"​")],-1),ol=l("p",null,"树节点是可以被过滤的",-1),al=l("p",null,[s("调用 Tree 实例对象的 "),l("code",null,"filter"),s(" 方法来过滤树节点。 方法的参数就是过滤关键字。 需要注意的是，此时需要设置 "),l("code",null,"filter-node-method"),s(" 属性，其值为过滤函数。")],-1),cl=l("div",{class:"language-vue vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"vue"),l("pre",{class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	<"),l("span",{style:{color:"#85E89D"}},"s-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"filterText"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Filter keyword"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	<"),l("span",{style:{color:"#85E89D"}},"s-tree"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"treeRef"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"show-checkbox"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":filter-method"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"filterNode"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"import"),l("span",{style:{color:"#E1E4E8"}}," { ref, watch } "),l("span",{style:{color:"#F97583"}},"from"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#9ECBFF"}},'"vue"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"treeRef"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"filterText"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},'""'),l("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"watch"),l("span",{style:{color:"#E1E4E8"}},"(filterText, "),l("span",{style:{color:"#FFAB70"}},"val"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	treeRef.value."),l("span",{style:{color:"#B392F0"}},"filter"),l("span",{style:{color:"#E1E4E8"}},"(val)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"})")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"filterNode"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"value"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	"),l("span",{style:{color:"#F97583"}},"if"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#F97583"}},"!"),l("span",{style:{color:"#E1E4E8"}},"value) "),l("span",{style:{color:"#F97583"}},"return"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	"),l("span",{style:{color:"#F97583"}},"return"),l("span",{style:{color:"#E1E4E8"}}," data.label."),l("span",{style:{color:"#B392F0"}},"includes"),l("span",{style:{color:"#E1E4E8"}},"(value)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"data"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"4"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						id: "),l("span",{style:{color:"#79B8FF"}},"9"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 1-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						id: "),l("span",{style:{color:"#79B8FF"}},"10"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"						label: "),l("span",{style:{color:"#9ECBFF"}},'"Level three 1-1-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"2"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"5"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"6"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 2-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		id: "),l("span",{style:{color:"#79B8FF"}},"3"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		label: "),l("span",{style:{color:"#9ECBFF"}},'"Level one 3"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"7"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 3-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				id: "),l("span",{style:{color:"#79B8FF"}},"8"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"				label: "),l("span",{style:{color:"#9ECBFF"}},'"Level two 3-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	<"),l("span",{style:{color:"#22863A"}},"s-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"filterText"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"placeholder"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Filter keyword"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	<"),l("span",{style:{color:"#22863A"}},"s-tree"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"treeRef"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":data"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"data"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"show-checkbox"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":filter-method"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"filterNode"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"import"),l("span",{style:{color:"#24292E"}}," { ref, watch } "),l("span",{style:{color:"#D73A49"}},"from"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},'"vue"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"treeRef"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"filterText"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},'""'),l("span",{style:{color:"#24292E"}},")")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"watch"),l("span",{style:{color:"#24292E"}},"(filterText, "),l("span",{style:{color:"#E36209"}},"val"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	treeRef.value."),l("span",{style:{color:"#6F42C1"}},"filter"),l("span",{style:{color:"#24292E"}},"(val)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"})")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"filterNode"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," ("),l("span",{style:{color:"#E36209"}},"value"),l("span",{style:{color:"#24292E"}},", "),l("span",{style:{color:"#E36209"}},"data"),l("span",{style:{color:"#24292E"}},") "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	"),l("span",{style:{color:"#D73A49"}},"if"),l("span",{style:{color:"#24292E"}}," ("),l("span",{style:{color:"#D73A49"}},"!"),l("span",{style:{color:"#24292E"}},"value) "),l("span",{style:{color:"#D73A49"}},"return"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	"),l("span",{style:{color:"#D73A49"}},"return"),l("span",{style:{color:"#24292E"}}," data.label."),l("span",{style:{color:"#6F42C1"}},"includes"),l("span",{style:{color:"#24292E"}},"(value)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"data"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"1"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"4"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 1-1"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						id: "),l("span",{style:{color:"#005CC5"}},"9"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 1-1-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						id: "),l("span",{style:{color:"#005CC5"}},"10"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"						label: "),l("span",{style:{color:"#032F62"}},'"Level three 1-1-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"					}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"2"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 2"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"5"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"6"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 2-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		id: "),l("span",{style:{color:"#005CC5"}},"3"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		label: "),l("span",{style:{color:"#032F62"}},'"Level one 3"'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"7"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 3-1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				id: "),l("span",{style:{color:"#005CC5"}},"8"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"				label: "),l("span",{style:{color:"#032F62"}},'"Level two 3-2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"			}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"		]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")])])])],-1),pl=k("",11),il=JSON.parse('{"title":"Tree 树形控件","description":"","frontmatter":{},"headers":[],"relativePath":"component/tree.md","filePath":"component/tree.md"}'),El={name:"component/tree.md"},dl=Object.assign(El,{setup(i){return(t,c)=>(y(),v("div",null,[R,K,q,I,e(D(d),{lang:"vue",meta:"preview",code:"%3Ctemplate%3E%0D%0A%09%3Cs-tree%20%3Adata%3D%22data%22%20%3Aprops%3D%22defaultProps%22%20%40node-click%3D%22handleNodeClick%22%3E%3C%2Fs-tree%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%3E%0D%0Aconst%20handleNodeClick%20%3D%20data%20%3D%3E%20%7B%0D%0A%09console.log(data)%0D%0A%7D%0D%0Aconst%20data%20%3D%20%5B%0D%0A%09%7B%0D%0A%09%09label%3A%20%22Level%20one%201%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09label%3A%20%22Level%20two%201-1%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%201-1-1%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%2C%0D%0A%09%7B%0D%0A%09%09label%3A%20%22Level%20one%202%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-1%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%202-1-1%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-2%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%202-2-1%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%2C%0D%0A%09%7B%0D%0A%09%09label%3A%20%22Level%20one%203%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09label%3A%20%22Level%20two%203-1%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%203-1-1%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09label%3A%20%22Level%20two%203-2%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%203-2-1%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%0D%0A%5D%0D%0A%0D%0Aconst%20defaultProps%20%3D%20%7B%0D%0A%09children%3A%20%22children%22%2C%0D%0A%09label%3A%20%22label%22%2C%0D%0A%09value%3A%20%22label%22%0D%0A%7D%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:n(()=>[V]),default:n(()=>[e(g)]),_:1}),z,S,e(D(d),{lang:"vue",meta:"preview",code:"%3Ctemplate%3E%0D%0A%09%3Cs-tree%20%3Adata%3D%22data%22%20%3Aprops%3D%22defaultProps%22%20show-checkbox%20%40check-change%3D%22handleCheckChange%22%3E%3C%2Fs-tree%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%3E%0D%0Aconst%20handleCheckChange%20%3D%20(data%2C%20checked)%20%3D%3E%20%7B%0D%0A%09console.log(data%2C%20checked)%0D%0A%7D%0D%0Aconst%20data%20%3D%20%5B%0D%0A%09%7B%0D%0A%09%09label%3A%20%22Level%20one%201%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09label%3A%20%22Level%20two%201-1%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%201-1-1%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%2C%0D%0A%09%7B%0D%0A%09%09label%3A%20%22Level%20one%202%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-1%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%202-1-1%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-2%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%202-2-1%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%2C%0D%0A%09%7B%0D%0A%09%09label%3A%20%22Level%20one%203%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09label%3A%20%22Level%20two%203-1%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%203-1-1%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09label%3A%20%22Level%20two%203-2%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%203-2-1%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%0D%0A%5D%0D%0A%0D%0Aconst%20defaultProps%20%3D%20%7B%0D%0A%09children%3A%20%22children%22%2C%0D%0A%09label%3A%20%22label%22%2C%0D%0A%09value%3A%20%22label%22%0D%0A%7D%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:n(()=>[$]),default:n(()=>[e(w)]),_:1}),O,H,e(D(d),{lang:"vue",meta:"preview",code:"%3Ctemplate%3E%0D%0A%09%3Cs-tree%20%3Adata%3D%22data%22%20%3Aload%3D%22loadNode%22%20lazy%20show-checkbox%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%3E%0D%0Aconst%20data%20%3D%20%5B%0D%0A%09%7B%0D%0A%09%09id%3A%201%2C%0D%0A%09%09label%3A%20%22region%22%0D%0A%09%7D%0D%0A%5D%0D%0A%0D%0Aconst%20loadNode%20%3D%20(node%2C%20resolve)%20%3D%3E%20%7B%0D%0A%09let%20id%20%3D%201%0D%0A%09if%20(node.level%20%3E%200)%20return%20resolve(%5B%5D)%0D%0A%0D%0A%09setTimeout(()%20%3D%3E%20%7B%0D%0A%09%09const%20data%20%3D%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09label%3A%20%22leaf%22%2C%0D%0A%09%09%09%09id%3A%20%2B%2Bid%2C%0D%0A%09%09%09%09isLeaf%3A%20true%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%20%2B%2Bid%2C%0D%0A%09%09%09%09label%3A%20%22zone%22%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%0D%0A%09%09resolve(data)%0D%0A%09%7D%2C%20500)%0D%0A%7D%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:n(()=>[j]),default:n(()=>[e(x)]),_:1}),J,M,e(D(d),{lang:"vue",meta:"preview",code:"%3Ctemplate%3E%0D%0A%09%3Cs-tree%20%3Adata%3D%22data%22%20show-checkbox%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%3E%0D%0Aconst%20data%20%3D%20%5B%0D%0A%09%7B%0D%0A%09%09id%3A%201%2C%0D%0A%09%09label%3A%20%22Level%20one%201%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%203%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-1%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09id%3A%204%2C%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%203-1-1%22%0D%0A%09%09%09%09%09%7D%2C%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09id%3A%205%2C%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%203-1-2%22%2C%0D%0A%09%09%09%09%09%09disabled%3A%20true%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%202%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-2%22%2C%0D%0A%09%09%09%09disabled%3A%20true%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09id%3A%206%2C%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%203-2-1%22%0D%0A%09%09%09%09%09%7D%2C%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09id%3A%207%2C%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%203-2-2%22%2C%0D%0A%09%09%09%09%09%09disabled%3A%20true%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%0D%0A%5D%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:n(()=>[Q]),default:n(()=>[e(_)]),_:1}),U,G,W,e(D(d),{lang:"vue",meta:"preview",code:"%3Ctemplate%3E%0D%0A%09%3Cs-tree%20%3Adata%3D%22data%22%20show-checkbox%20%3Adefault-expanded-keys%3D%22%5B2%2C%203%5D%22%20%3Adefault-checked-keys%3D%22%5B5%5D%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%3E%0D%0Aconst%20data%20%3D%20%5B%0D%0A%09%7B%0D%0A%09%09id%3A%201%2C%0D%0A%09%09label%3A%20%22Level%20one%201%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%204%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%201-1%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09id%3A%209%2C%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%201-1-1%22%0D%0A%09%09%09%09%09%7D%2C%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09id%3A%2010%2C%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%201-1-2%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%2C%0D%0A%09%7B%0D%0A%09%09id%3A%202%2C%0D%0A%09%09label%3A%20%22Level%20one%202%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%205%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-1%22%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%206%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-2%22%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%2C%0D%0A%09%7B%0D%0A%09%09id%3A%203%2C%0D%0A%09%09label%3A%20%22Level%20one%203%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%207%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%203-1%22%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%208%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%203-2%22%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%0D%0A%5D%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:n(()=>[X]),default:n(()=>[e(m)]),_:1}),Y,Z,e(D(d),{lang:"vue",meta:"preview",code:"%3Ctemplate%3E%0D%0A%09%3Cs-tree%20ref%3D%22treeRef%22%20%3Adata%3D%22data%22%20show-checkbox%20%2F%3E%0D%0A%09%3Cs-button%20%40click%3D%22getCheckedNodes%22%3Eget%20by%20node%3C%2Fs-button%3E%0D%0A%09%3Cs-button%20%40click%3D%22getCheckedKeys%22%3Eget%20by%20key%3C%2Fs-button%3E%0D%0A%09%3Cs-button%20%40click%3D%22setCheckedKeys%22%3Eset%20by%20keys%3C%2Fs-button%3E%0D%0A%09%3Cs-button%20%40click%3D%22setChecked%22%3Eset%20by%20key%3C%2Fs-button%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%0D%0Aconst%20treeRef%20%3D%20ref()%0D%0Aconst%20getCheckedNodes%20%3D%20()%20%3D%3E%20%7B%0D%0A%09const%20nodes%20%3D%20treeRef.value.getCheckedNodes()%0D%0A%09console.log(nodes)%0D%0A%7D%0D%0Aconst%20getCheckedKeys%20%3D%20()%20%3D%3E%20%7B%0D%0A%09const%20keys%20%3D%20treeRef.value.getCheckedKeys()%0D%0A%09console.log(keys)%0D%0A%7D%0D%0Aconst%20setCheckedKeys%20%3D%20()%20%3D%3E%20%7B%0D%0A%09treeRef.value.setCheckedKeys(%5B1%2C%203%5D)%0D%0A%7D%0D%0Aconst%20setChecked%20%3D%20()%20%3D%3E%20%7B%0D%0A%09treeRef.value.setChecked(1%2C%20false)%0D%0A%09treeRef.value.setChecked(3%2C%20false)%0D%0A%09treeRef.value.setChecked(2%2C%20true)%0D%0A%7D%0D%0Aconst%20data%20%3D%20%5B%0D%0A%09%7B%0D%0A%09%09id%3A%201%2C%0D%0A%09%09label%3A%20%22Level%20one%201%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%204%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%201-1%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09id%3A%209%2C%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%201-1-1%22%0D%0A%09%09%09%09%09%7D%2C%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09id%3A%2010%2C%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%201-1-2%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%2C%0D%0A%09%7B%0D%0A%09%09id%3A%202%2C%0D%0A%09%09label%3A%20%22Level%20one%202%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%205%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-1%22%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%206%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-2%22%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%2C%0D%0A%09%7B%0D%0A%09%09id%3A%203%2C%0D%0A%09%09label%3A%20%22Level%20one%203%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%207%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%203-1%22%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%208%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%203-2%22%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%0D%0A%5D%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:n(()=>[ll]),default:n(()=>[e(N)]),_:1}),sl,tl,e(D(d),{lang:"vue",meta:"preview",code:"%3Ctemplate%3E%0D%0A%09%3Cs-tree%20%3Adata%3D%22data%22%20show-checkbox%20%3Adefault-expanded-keys%3D%22%5B1%2C%202%2C%203%2C%204%5D%22%3E%0D%0A%09%09%3Ctemplate%20%23default%3D%22node%22%3E%20%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E8%8A%82%E7%82%B9%20%2B%20%7B%7B%20node.label%20%7D%7D%20%3C%2Ftemplate%3E%0D%0A%09%3C%2Fs-tree%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%3E%0D%0Aconst%20data%20%3D%20%5B%0D%0A%09%7B%0D%0A%09%09id%3A%201%2C%0D%0A%09%09label%3A%20%22Level%20one%201%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%204%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%201-1%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09id%3A%209%2C%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%201-1-1%22%0D%0A%09%09%09%09%09%7D%2C%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09id%3A%2010%2C%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%201-1-2%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%2C%0D%0A%09%7B%0D%0A%09%09id%3A%202%2C%0D%0A%09%09label%3A%20%22Level%20one%202%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%205%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-1%22%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%206%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-2%22%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%2C%0D%0A%09%7B%0D%0A%09%09id%3A%203%2C%0D%0A%09%09label%3A%20%22Level%20one%203%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%207%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%203-1%22%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%208%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%203-2%22%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%0D%0A%5D%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:n(()=>[el]),default:n(()=>[e(T)]),_:1}),nl,ol,al,e(D(d),{lang:"vue",meta:"preview",code:"%3Ctemplate%3E%0D%0A%09%3Cs-input%20v-model%3D%22filterText%22%20placeholder%3D%22Filter%20keyword%22%20%2F%3E%0D%0A%09%3Cs-tree%20ref%3D%22treeRef%22%20%3Adata%3D%22data%22%20show-checkbox%20%3Afilter-method%3D%22filterNode%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%3E%0D%0Aimport%20%7B%20ref%2C%20watch%20%7D%20from%20%22vue%22%0D%0Aconst%20treeRef%20%3D%20ref()%0D%0Aconst%20filterText%20%3D%20ref(%22%22)%0D%0A%0D%0Awatch(filterText%2C%20val%20%3D%3E%20%7B%0D%0A%09treeRef.value.filter(val)%0D%0A%7D)%0D%0A%0D%0Aconst%20filterNode%20%3D%20(value%2C%20data)%20%3D%3E%20%7B%0D%0A%09if%20(!value)%20return%20true%0D%0A%09return%20data.label.includes(value)%0D%0A%7D%0D%0A%0D%0Aconst%20data%20%3D%20%5B%0D%0A%09%7B%0D%0A%09%09id%3A%201%2C%0D%0A%09%09label%3A%20%22Level%20one%201%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%204%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%201-1%22%2C%0D%0A%09%09%09%09children%3A%20%5B%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09id%3A%209%2C%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%201-1-1%22%0D%0A%09%09%09%09%09%7D%2C%0D%0A%09%09%09%09%09%7B%0D%0A%09%09%09%09%09%09id%3A%2010%2C%0D%0A%09%09%09%09%09%09label%3A%20%22Level%20three%201-1-2%22%0D%0A%09%09%09%09%09%7D%0D%0A%09%09%09%09%5D%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%2C%0D%0A%09%7B%0D%0A%09%09id%3A%202%2C%0D%0A%09%09label%3A%20%22Level%20one%202%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%205%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-1%22%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%206%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%202-2%22%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%2C%0D%0A%09%7B%0D%0A%09%09id%3A%203%2C%0D%0A%09%09label%3A%20%22Level%20one%203%22%2C%0D%0A%09%09children%3A%20%5B%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%207%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%203-1%22%0D%0A%09%09%09%7D%2C%0D%0A%09%09%09%7B%0D%0A%09%09%09%09id%3A%208%2C%0D%0A%09%09%09%09label%3A%20%22Level%20two%203-2%22%0D%0A%09%09%09%7D%0D%0A%09%09%5D%0D%0A%09%7D%0D%0A%5D%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:n(()=>[cl]),default:n(()=>[e(P)]),_:1}),pl]))}});export{il as __pageData,dl as default};
