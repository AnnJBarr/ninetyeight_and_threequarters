(this.webpackJsonpninetyeight_and_threequarters_percent=this.webpackJsonpninetyeight_and_threequarters_percent||[]).push([[0],{50:function(e,t,a){e.exports=a(96)},55:function(e,t,a){},56:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),d=a(30),r=a.n(d),s=(a(55),a(5)),l=a(6),o=a(8),i=a(7),m=a(9),u=(a(56),a(12)),p=a.n(u),h=a(18),E=a.n(h),b=a(10),f=a(11),k=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"text-white text-center"},c.a.createElement("h1",null,"Task Manager ",c.a.createElement(b.a,{icon:f.b})),c.a.createElement("h5",null,"98 and  \xbe \xa0percent"))}}]),t}(c.a.Component),v=a(25),N=a(49),w=(a(94),function(e){function t(e,a){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e,a))).updateNewItemText=function(e){n.setState({newItemText:e.target.value})},n.handleClick=function(e){e.preventDefault(),n.props.addNewTaskFunc(n.state.newItemText,n.state.selectedDate),n.setState({newItemText:""})},n.handleDateChange=function(e){console.log(e),console.log(p()(e).format("YYYY-MM-DD")),console.log("this is what happens when I selected date "+e),n.setState({selectedDate:p()(e).format("YYYY-MM-DD")})},n.handleInfiniteDateChange=function(e){n.setState({selectedDate:p()(e).format("YYYY-MM-DD")})},n.state={newItemText:"",selectedDate:p()().format("YYYY-MM-DD")},n.onChange=n.onChange.bind(Object(v.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState({selectedDate:p()(e).format("YYYY-MM-DD")})}},{key:"render",value:function(){return c.a.createElement("div",{id:"add-task",className:"row appRow"},c.a.createElement("div",{className:"mx-auto col-12 col-lg-9"},c.a.createElement("div",{className:"card bg-transparent text-white"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Add new task to do ",c.a.createElement(b.a,{icon:f.d})),c.a.createElement("div",{className:"card-text"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text"},"Enter your next task")),c.a.createElement("textarea",{className:"form-control","aria-label":"With textarea",type:"text",id:"newItem",placeholder:"Type an item here (max 160 characters)",value:this.state.newItemText,onChange:this.updateNewItemText})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4"},c.a.createElement("br",null),c.a.createElement("br",null),"Due by (please select)"),c.a.createElement("div",{className:"col-5"},c.a.createElement(N.a,{className:"form-control",theme:{selectionColor:"rgb(128, 0, 128)",textColor:{default:"#333",active:"#FFF"},weekdayColor:"rgb(146, 118, 255)",headerColor:"rgb(128, 0, 128)",floatingNav:{background:"rgba(128, 0, 128, 0.96)",color:"#FFF",chevron:"#FFA726"}},displayOptions:{layout:"portait",showHeader:!0,shouldHeaderAnimate:!1,showWeekdays:!1},width:window.innerWidth<=305?window.innerWidth:305,height:window.innerHeight-450,rowHeight:32,minDate:new Date,onSelect:this.handleInfiniteDateChange}))),c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{className:"btn btn-outline-light",onClick:this.handleClick,disabled:0===this.state.newItemText.length||this.state.newItemText.length>160},"Add task")))))))}}]),t}(c.a.Component)),y=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row appRow d-none d-md-block"},c.a.createElement("div",{className:"mx-auto col-12 col-lg-8"},c.a.createElement("div",{className:"card bg-transparent text-white"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Open Tasks ",c.a.createElement(b.a,{icon:f.g})),c.a.createElement("div",{className:"card-text"},"You have ",this.props.count," tasks to complete")))))}}]),t}(c.a.Component),O=(a(95),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),d=0;d<n;d++)c[d]=arguments[d];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).doneTask=function(){var e=a.state.tasks.slice();e.done=!0,a.setState({tasks:e})},a.handleDoneClick=function(){a.props.doneTaskFunc(a.props.id)},a.handleDelete=function(){a.props.deleteTaskFunc(a.props.id)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row taskRow"},c.a.createElement("div",{className:"col-1"},!0===this.props.done?c.a.createElement("div",{id:"donedot"},c.a.createElement(b.a,{icon:f.c})):c.a.createElement("div",{id:"tododot"},c.a.createElement(b.a,{icon:f.c}))),c.a.createElement("div",{className:"col-6"},!0===this.props.done?c.a.createElement("div",{id:"doneid"},c.a.createElement("h6",null,this.props.text)):c.a.createElement("div",null,c.a.createElement("h6",null,this.props.text))),c.a.createElement("div",{className:"col-3"},!0===this.props.done?c.a.createElement("div",{id:"doneid"},c.a.createElement("h6",null,"Done ",p()(this.props.dateCompleted,"YYYY-MM-DD").fromNow())):c.a.createElement("h6",{className:p()(this.props.dueBy,"YYYY-MM-DD").fromNow().includes("ago")?"overdue":""},"Due ",p()(this.props.dueBy,"YYYY-MM-DD").fromNow())),c.a.createElement("div",{className:"col-1"},!0===this.props.done?c.a.createElement("div",{id:"doneid"}):c.a.createElement("button",{id:"icon-buttons",className:"btn",onClick:this.handleDoneClick,disabled:this.props.done},c.a.createElement(b.a,{icon:f.a}))),c.a.createElement("div",{className:"col-1"},c.a.createElement("button",{id:"icon-buttons",className:"btn",onClick:this.handleDelete},c.a.createElement(b.a,{icon:f.h}))))}}]),t}(c.a.Component)),g=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tasks.sort((function(e,t){return e.dateAdded-t.dateAdded}));return c.a.createElement("div",{id:"todo",className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h5",{className:"card-title"},"Tasks to do ",c.a.createElement(b.a,{icon:f.b}))),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"card-text"},t.map((function(t){return c.a.createElement(O,{doneTaskFunc:e.props.doneTaskFunc,deleteTaskFunc:e.props.deleteTaskFunc,text:t.text,done:t.done,key:t.id,id:t.id,dateAdded:t.dateAdded,dateCompleted:t.dateCompleted,dueBy:t.dueBy})})))))}}]),t}(c.a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tasks.sort((function(e,t){return t.dateCompleted-e.dateCompleted}));return c.a.createElement("div",{id:"done",className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h5",{className:"card-title"},"Completed ",c.a.createElement(b.a,{icon:f.a}))),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"card-text"},t.map((function(t){return c.a.createElement(O,{deleteTaskFunc:e.props.deleteTaskFunc,text:t.text,done:t.done,key:t.id,id:t.id,dateAdded:t.dateAdded,dateCompleted:t.dateCompleted,dueBy:t.dueBy})})))))}}]),t}(c.a.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.tasks.filter((function(e){return!0===e.done})),t=this.props.tasks.filter((function(e){return!1===e.done}));return c.a.createElement("div",{className:"row mx-auto appRow"},c.a.createElement("div",{id:"to-do-tasks",className:" col-12 col-lg-6"},c.a.createElement(g,{tasks:t,deleteTaskFunc:this.props.deleteTaskFunc,doneTaskFunc:this.props.doneTaskFunc})),c.a.createElement("div",{id:"done-tasks",className:" col-12 col-lg-6"},c.a.createElement(j,{tasks:e,deleteTaskFunc:this.props.deleteTaskFunc})))}}]),t}(c.a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row appRow d-none d-md-block"},c.a.createElement("div",{className:"mx-auto col-12 col-lg-9"},c.a.createElement("div",{className:"card bg-transparent text-white font-weight-lighter"},c.a.createElement("div",{className:"card-body"},c.a.createElement("blockquote",{className:"blockquote"},c.a.createElement("div",{className:"mb-0"},c.a.createElement(b.a,{icon:f.e})," And will you succeed? Yes! You will, indeed! (98 and \xbe \xa0percent guaranteed.) ",c.a.createElement(b.a,{icon:f.f})),c.a.createElement("footer",{className:"blockquote-footer text-white"},"Dr. Seuss ",c.a.createElement("cite",{title:"Source Title"},"Oh the places you\u2019ll go")))))))}}]),t}(c.a.Component),D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),d=0;d<n;d++)c[d]=arguments[d];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={tasks:[{text:"Second item added, first item to be completed",id:E()(),done:!0,dateAdded:"2019-10-15",dateCompleted:"2019-10-18",dueBy:"2019-11-10"},{text:"Fifth item added, not yet complete",id:E()(),done:!1,dateAdded:"2019-10-23",dateCompleted:null,dueBy:"2019-11-15"},{text:"Third item added, not completed",id:E()(),done:!1,dateAdded:"2019-10-16",dateCompleted:null,dueBy:"2019-12-10"},{text:"Fourth item added, second item completed",id:E()(),done:!0,dateAdded:"2019-10-21",dateCompleted:"2019-10-25",dueBy:"2019-09-10"},{text:"First item added, third item completed",id:E()(),done:!0,dateAdded:"2019-09-28",dateCompleted:"2019-10-28",dueBy:"2019-12-31"},{text:"Sixth item added, still to be completed",id:E()(),done:!1,dateAdded:"2019-10-29",dateCompleted:null,dueBy:"2019-10-30"}]},a.addNewTask=function(e,t){var n=a.state.tasks.slice(),c={text:e,done:!1,dateAdded:p()().format("YYYY-MM-DD"),dateCompleted:new Date,dueBy:t,id:E()()};n.push(c),a.setState({tasks:n})},a.doneTask=function(e){var t=a.state.tasks.map((function(t){return t.id===e&&(t.done=!0,t.dateCompleted=new Date),t}));a.setState({tasks:t})},a.deleteTask=function(e){var t=a.state.tasks.filter((function(t){return t.id!==e}));a.setState({tasks:t})},a.convertDates=function(e){return e.map((function(e){return e.dateAdded=new Date(e.dateAdded),e.dueBy=new Date(e.dueBy),e.dateCompleted=new Date(e.dateCompleted),e}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.tasks.filter((function(e){return!e.done})),t=this.convertDates(e).filter((function(e){return!1===e.done})).length;return c.a.createElement("div",{className:"container"},c.a.createElement(k,null),c.a.createElement(w,{addNewTaskFunc:this.addNewTask}),c.a.createElement(y,{count:t}),c.a.createElement(x,{tasks:this.state.tasks,doneTaskFunc:this.doneTask,deleteTaskFunc:this.deleteTask}),c.a.createElement(C,null))}}]),t}(n.Component);r.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.cb6fe8c8.chunk.js.map