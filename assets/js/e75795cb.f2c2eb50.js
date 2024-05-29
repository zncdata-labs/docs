"use strict";(self.webpackChunkzncdata_stack=self.webpackChunkzncdata_stack||[]).push([[992],{6665:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(5893),r=n(1151);const o={},l="OPM",i={id:"reference/opm",title:"OPM",description:"OPM \u662f\u4e00\u4e2a\u6784\u5efa operator-registry \u7d22\u5f15\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u7528\u6765\u7ba1\u7406 operator \u7684\u7248\u672c\u548c\u53d1\u5e03\u3002",source:"@site/docs/reference/opm.md",sourceDirName:"reference",slug:"/reference/opm",permalink:"/docs/reference/opm",draft:!1,unlisted:!1,editUrl:"https://github.com/zncdatadev/docs/docs/reference/opm.md",tags:[],version:"current",lastUpdatedBy:"whg517",lastUpdatedAt:1716975252,formattedLastUpdatedAt:"2024\u5e745\u670829\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"operator-sdk",permalink:"/docs/reference/operator-sdk"},next:{title:"FAQ",permalink:"/docs/faq"}},s={},c=[{value:"\u57fa\u672c\u547d\u4ee4",id:"\u57fa\u672c\u547d\u4ee4",level:2},{value:"\u521b\u5efa catalog",id:"\u521b\u5efa-catalog",level:3},{value:"opm \u670d\u52a1",id:"opm-\u670d\u52a1",level:3},{value:"opm alpha \u547d\u4ee4",id:"opm-alpha-\u547d\u4ee4",level:2},{value:"\u4f7f\u7528\u6a21\u677f\u751f\u6210 catalog",id:"\u4f7f\u7528\u6a21\u677f\u751f\u6210-catalog",level:3},{value:"\u9a8c\u8bc1 catalog",id:"\u9a8c\u8bc1-catalog",level:3}];function d(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"opm",children:"OPM"}),"\n",(0,t.jsx)(a.p,{children:"OPM \u662f\u4e00\u4e2a\u6784\u5efa operator-registry \u7d22\u5f15\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u7528\u6765\u7ba1\u7406 operator \u7684\u7248\u672c\u548c\u53d1\u5e03\u3002"}),"\n",(0,t.jsx)(a.h2,{id:"\u57fa\u672c\u547d\u4ee4",children:"\u57fa\u672c\u547d\u4ee4"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-text",children:'CLI to interact with operator-registry and build indexes of operator content\n\nUsage:\n  opm [flags]\n  opm [command]\n\nAvailable Commands:\n  completion  Generate the autocompletion script for the specified shell\n  generate    Generate various artifacts for declarative config indexes\n  help        Help about any command\n  index       generate operator index container images\n  init        Generate an olm.package declarative config blob\n  migrate     Migrate a sqlite-based index image or database file to a file-based catalog\n  registry    interact with operator-registry database\n  render      Generate a stream of file-based catalog objects from catalogs and bundles\n  serve       serve declarative configs\n  validate    Validate the declarative index config\n  version     Print the opm version\n\nFlags:\n  -h, --help              help for opm\n      --skip-tls-verify   skip TLS certificate verification for container image registries while pulling bundles\n      --use-http          use plain HTTP for container image registries while pulling bundles\n\nUse "opm [command] --help" for more information about a command.\n'})}),"\n",(0,t.jsx)(a.h3,{id:"\u521b\u5efa-catalog",children:"\u521b\u5efa catalog"}),"\n",(0,t.jsx)(a.p,{children:"\u521b\u5efa\u4e00\u4e2a catalog \u76ee\u5f55\uff0c\u548c\u5bf9\u5e94\u7684\u7684 Dockfile \uff1a"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"mkdir catalog\nopm generate dockerfile catalog\n"})}),"\n",(0,t.jsx)(a.h3,{id:"opm-\u670d\u52a1",children:"opm \u670d\u52a1"}),"\n",(0,t.jsx)(a.p,{children:"\u4f7f\u7528 opm \u547d\u4ee4\u53ef\u4ee5\u542f\u52a8\u4e00\u4e2a operator-registry \u670d\u52a1\uff1a"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"opm serve catalog --catalog /tmp/catalog\n"})}),"\n",(0,t.jsx)(a.p,{children:"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u90fd\u662f\u901a\u8fc7\u751f\u6210\u7684 catalog Dockerfile \u542f\u52a8\uff0c\u5728\u672c\u5730\u4e0d\u9700\u8981\u5355\u72ec\u542f\u52a8\u670d\u52a1\u3002"}),"\n",(0,t.jsx)(a.h2,{id:"opm-alpha-\u547d\u4ee4",children:"opm alpha \u547d\u4ee4"}),"\n",(0,t.jsx)(a.p,{children:"opm alpha \u547d\u4ee4\u662f\u4e00\u4e2a alpha \u9636\u6bb5\u7684\u5b50\u547d\u3002\u53ef\u7528\u6765\u7ba1\u7406 operator bundle \u7684\u5143\u6570\u636e\u3002"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-text",children:'Run an alpha subcommand\n\nUsage:\n  opm alpha [flags]\n  opm alpha [command]\n\nAvailable Commands:\n  bundle          Operator bundle commands\n  list            List contents of an index\n  render-graph    Generate mermaid-formatted view of upgrade graph of operators in an index\n  render-template Render a catalog template type\n\nFlags:\n  -h, --help   help for alpha\n\nGlobal Flags:\n      --skip-tls-verify   skip TLS certificate verification for container image registries while pulling bundles\n      --use-http          use plain HTTP for container image registries while pulling bundles\n\nUse "opm alpha [command] --help" for more information about a command.\n'})}),"\n",(0,t.jsx)(a.h3,{id:"\u4f7f\u7528\u6a21\u677f\u751f\u6210-catalog",children:"\u4f7f\u7528\u6a21\u677f\u751f\u6210 catalog"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cat << EOF >> example-operator-template.yaml\nSchema: olm.semver\nGenerateMajorChannels: true\nGenerateMinorChannels: false\nStable:\n  Bundles:\n  - Image: repository-uri/example-operator:v0.8.9\n  - Image: repository-uri/example-operator:v0.9.0\nEOF\n\n"})}),"\n",(0,t.jsx)(a.p,{children:"\u751f\u6210 catalog"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"opm alpha render-template semver -o yaml < example-operator-template.yaml > catalog/catalog.yaml\n"})}),"\n",(0,t.jsx)(a.h3,{id:"\u9a8c\u8bc1-catalog",children:"\u9a8c\u8bc1 catalog"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"opm validate catalog\n\necho $?\n"})}),"\n",(0,t.jsx)(a.p,{children:"\u8f93\u51fa 0 \u8868\u793a\u9a8c\u8bc1\u901a\u8fc7\u3002"})]})}function p(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>l});var t=n(7294);const r={},o=t.createContext(r);function l(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);