(function(scope) {var $ButtonStates = new TextLayer({"name":".ButtonStates","shadows":[],"backgroundColor":null,"width":99,"x":1089,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":17,"css":{"fontSize":"12px","WebkitTextFillColor":"rgb(153, 153, 153)","whiteSpace":"pre","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Medium\", \"SFProText-Medium\", \"SFUIText-Medium\", \".SFUIText-Medium\", sans-serif"}}],"text":"default \/ pressed"}],"alignment":"right"},"height":14,"constraintValues":null,"blending":"normal","autoSize":true,"y":162});var __layer_0__ = new TextLayer({"name":".CheckboxStates","shadows":[],"backgroundColor":null,"width":88,"x":1107,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":16,"css":{"fontSize":"12px","WebkitTextFillColor":"rgb(153, 153, 153)","whiteSpace":"pre","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Medium\", \"SFProText-Medium\", \"SFUIText-Medium\", \".SFUIText-Medium\", sans-serif"}}],"text":"default \/ active"}],"alignment":"left"},"height":14,"constraintValues":null,"blending":"normal","autoSize":true,"y":47});var __layer_1__ = new TextLayer({"name":".ToggleStates","shadows":[],"backgroundColor":null,"width":88,"x":1090,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":16,"css":{"fontSize":"12px","WebkitTextFillColor":"rgb(153, 153, 153)","whiteSpace":"pre","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Medium\", \"SFProText-Medium\", \"SFUIText-Medium\", \".SFUIText-Medium\", sans-serif"}}],"text":"default \/ active"}],"alignment":"left"},"height":14,"constraintValues":null,"blending":"normal","autoSize":true,"y":-68});var buttonContainer = new Layer({"name":"buttonContainer","shadows":[],"backgroundColor":null,"width":350,"x":934,"height":81,"constraintValues":null,"blending":"normal","clip":false,"borderStyle":"solid","y":199});var button_pressed = new Layer({"parent":buttonContainer,"name":"button--pressed","shadows":[{"spread":0,"x":0,"type":"box","y":1,"blur":1,"color":"rgba(173, 173, 173, 0.2)"}],"borderWidth":1,"backgroundColor":"hsl(231, 60%, 32%)","width":160,"x":181,"borderColor":"rgb(243, 244, 247)","height":50,"constraintValues":{"left":null,"height":50,"centerAnchorX":0.7457142857142857,"width":160,"right":9,"centerAnchorY":0.308641975308642},"blending":"normal","borderRadius":25,"clip":false,"borderStyle":"solid"});var label_1 = new TextLayer({"parent":button_pressed,"name":"label","shadows":[],"backgroundColor":null,"width":148,"x":6,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":13,"css":{"fontSize":"16px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Semibold\", \"SFProText-Semibold\", \"SFUIText-Semibold\", \".SFUIText-Semibold\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"{buttonLabel}"}],"alignment":"center"},"height":19,"constraintValues":{"left":null,"height":19,"centerAnchorX":0.5,"width":148,"top":null,"centerAnchorY":0.51},"blending":"normal","autoSize":false,"y":16});var button_default = new Layer({"parent":buttonContainer,"name":"button--default","shadows":[{"spread":0,"x":0,"type":"box","y":2,"blur":10,"color":"rgba(173, 173, 173, 0.45)"}],"borderWidth":1,"backgroundColor":"rgb(68, 85, 187)","width":160,"x":6,"borderColor":"rgb(245, 245, 245)","height":50,"constraintValues":{"left":6,"height":50,"centerAnchorX":0.2457142857142857,"width":160,"centerAnchorY":0.308641975308642},"blending":"normal","borderRadius":25,"clip":false,"borderStyle":"solid"});var label = new TextLayer({"parent":button_default,"name":"label","shadows":[],"backgroundColor":null,"width":148,"x":6,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":13,"css":{"fontSize":"16px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Semibold\", \"SFProText-Semibold\", \"SFUIText-Semibold\", \".SFUIText-Semibold\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"{buttonLabel}"}],"alignment":"center"},"height":19,"constraintValues":{"left":null,"height":19,"centerAnchorX":0.5,"width":148,"top":null,"centerAnchorY":0.51},"blending":"normal","autoSize":false,"y":16});var checkboxContainer = new Layer({"name":"checkboxContainer","shadows":[],"backgroundColor":null,"width":141,"x":1038,"height":30,"constraintValues":null,"blending":"normal","clip":false,"borderStyle":"solid","y":78});var checkbox_default = new Layer({"parent":checkboxContainer,"name":"checkbox--default","shadows":[{"spread":0,"x":0,"type":"box","y":1,"blur":3,"color":"rgba(173, 173, 173, 0.25)"}],"borderWidth":1,"backgroundColor":"rgb(243, 244, 247)","width":30,"x":14,"borderColor":"rgb(252, 252, 252)","height":30,"constraintValues":{"left":14,"height":30,"centerAnchorX":0.2056737588652482,"width":30,"bottom":0,"centerAnchorY":0.5},"blending":"normal","borderRadius":2,"clip":false,"borderStyle":"solid"});var __layer_2__ = new Layer({"parent":checkbox_default,"name":"bgColor","shadows":[],"borderWidth":1,"backgroundColor":"rgb(243, 244, 247)","width":30,"borderColor":"rgb(245, 245, 245)","height":30,"constraintValues":{"height":30,"centerAnchorX":0.5,"width":30,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","borderRadius":3,"clip":false,"borderStyle":"solid"});var __layer_3__ = new SVGLayer({"parent":checkbox_default,"shadows":[],"backgroundColor":null,"width":0,"x":15,"html":"<?xml version=\"1.0\" standalone=\"no\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-check\"><polyline points=\"20 6 9 17 4 12\"><\/polyline><\/svg>","htmlIntrinsicSize":{"height":24,"width":24},"color":"rgb(255, 255, 255)","rotation":-30,"height":0,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":0,"centerAnchorX":0.5,"width":0,"top":null,"centerAnchorY":0.5},"blending":"normal","y":15});var checkbox_active = new Layer({"parent":checkboxContainer,"name":"checkbox--active","shadows":[{"spread":0,"x":0,"type":"box","y":2,"blur":10,"color":"rgba(173, 173, 173, 0.45)"}],"borderWidth":1,"backgroundColor":"#55CCFF","width":30,"x":96,"borderColor":"rgb(245, 245, 245)","height":30,"constraintValues":{"left":null,"height":30,"centerAnchorX":0.7872340425531915,"width":30,"bottom":0,"right":15,"centerAnchorY":0.5},"blending":"normal","borderRadius":3,"clip":false,"borderStyle":"solid"});var __layer_4__ = new Layer({"parent":checkbox_active,"name":"bgColor","shadows":[],"backgroundColor":"rgb(243, 244, 247)","width":0,"x":15,"height":0,"constraintValues":{"left":null,"height":0,"centerAnchorX":0.5084745762711864,"width":0,"top":null,"centerAnchorY":0.5},"blending":"normal","borderRadius":3,"opacity":0,"clip":false,"borderStyle":"solid","y":15});var __layer_5__ = new SVGLayer({"parent":checkbox_active,"shadows":[],"backgroundColor":null,"width":24,"x":3,"html":"<?xml version=\"1.0\" standalone=\"no\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-check\"><polyline points=\"20 6 9 17 4 12\"><\/polyline><\/svg>","htmlIntrinsicSize":{"height":24,"width":24},"color":"rgb(255, 255, 255)","height":24,"constraintValues":{"left":3,"aspectRatioLocked":true,"height":24,"centerAnchorX":0.5,"width":24,"right":3,"top":3,"centerAnchorY":0.5},"blending":"normal","y":3});var togglesContainer = new Layer({"name":"togglesContainer","shadows":[],"backgroundColor":null,"width":141,"x":1038,"height":30,"constraintValues":null,"blending":"normal","clip":false,"borderStyle":"solid","y":-37});var toggle_default = new Layer({"parent":togglesContainer,"name":"toggle--default","shadows":[{"spread":0,"x":0,"type":"box","y":1,"blur":3,"color":"rgba(173, 173, 173, 0.25)"}],"borderWidth":1,"backgroundColor":"rgb(243, 244, 247)","width":59,"borderColor":"rgb(252, 252, 252)","height":30,"constraintValues":{"height":30,"centerAnchorX":0.2092198581560284,"width":59,"bottom":0,"centerAnchorY":0.5},"blending":"normal","borderRadius":20,"clip":false,"borderStyle":"solid"});var __layer_6__ = new Layer({"parent":toggle_default,"name":"bgColor","shadows":[],"borderWidth":1,"backgroundColor":"rgb(243, 244, 247)","width":59,"borderColor":"rgb(245, 245, 245)","height":30,"constraintValues":{"height":30,"centerAnchorX":0.5,"width":59,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","borderRadius":20,"clip":false,"borderStyle":"solid"});var __layer_7__ = new Layer({"parent":toggle_default,"name":"knob","shadows":[{"spread":0,"x":0,"type":"box","y":1,"blur":5,"color":"rgba(0, 0, 0, 0.15)"}],"backgroundColor":"rgb(255, 255, 255)","width":26,"x":2,"height":26,"constraintValues":{"left":2,"aspectRatioLocked":true,"height":26,"centerAnchorX":0.2542372881355932,"width":26,"bottom":2,"top":2,"centerAnchorY":0.5},"blending":"normal","borderRadius":13,"clip":false,"borderStyle":"solid","y":2});var toggle_active = new Layer({"parent":togglesContainer,"name":"toggle--active","shadows":[{"spread":0,"x":0,"type":"box","y":2,"blur":10,"color":"rgba(173, 173, 173, 0.45)"}],"borderWidth":1,"backgroundColor":"#FF7744","width":59,"x":82,"borderColor":"rgb(245, 245, 245)","height":30,"constraintValues":{"left":null,"height":30,"centerAnchorX":0.7907801418439716,"width":59,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","borderRadius":20,"clip":false,"borderStyle":"solid"});var __layer_8__ = new Layer({"parent":toggle_active,"name":"bgColor","shadows":[],"backgroundColor":"rgb(243, 244, 247)","width":0,"x":30,"height":0,"constraintValues":{"left":null,"height":0,"centerAnchorX":0.5084745762711864,"width":0,"top":null,"centerAnchorY":0.5},"blending":"normal","borderRadius":20,"clip":false,"borderStyle":"solid","y":15});var __layer_9__ = new Layer({"parent":toggle_active,"name":"knob","shadows":[{"spread":0,"x":0,"type":"box","y":1,"blur":5,"color":"rgba(0, 0, 0, 0.15)"}],"backgroundColor":"rgb(255, 255, 255)","width":26,"x":31,"height":26,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":26,"centerAnchorX":0.7457627118644068,"width":26,"bottom":2,"right":2,"top":2,"centerAnchorY":0.5},"blending":"normal","borderRadius":13,"clip":false,"borderStyle":"solid","y":2});checkboxContainer.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|checkboxContainer","targetName":"checkboxContainer","vekterClass":"FrameNode"};__layer_9__.__framerInstanceInfo = {"hash":"#vekter|__layer_9__","vekterClass":"FrameNode","framerClass":"Layer"};__layer_7__.__framerInstanceInfo = {"hash":"#vekter|__layer_7__","vekterClass":"FrameNode","framerClass":"Layer"};$ButtonStates.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|$ButtonStates","targetName":"$ButtonStates","vekterClass":"TextNode","text":"default \/ pressed"};__layer_2__.__framerInstanceInfo = {"hash":"#vekter|__layer_2__","vekterClass":"FrameNode","framerClass":"Layer"};togglesContainer.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|togglesContainer","targetName":"togglesContainer","vekterClass":"FrameNode"};__layer_8__.__framerInstanceInfo = {"hash":"#vekter|__layer_8__","vekterClass":"FrameNode","framerClass":"Layer"};__layer_0__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_0__","vekterClass":"TextNode","text":"default \/ active"};buttonContainer.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|buttonContainer","targetName":"buttonContainer","vekterClass":"FrameNode"};label_1.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|label_1","targetName":"label_1","vekterClass":"TextNode","text":"{buttonLabel}"};label.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|label","targetName":"label","vekterClass":"TextNode","text":"{buttonLabel}"};button_default.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|button_default","targetName":"button_default","vekterClass":"FrameNode"};toggle_default.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|toggle_default","targetName":"toggle_default","vekterClass":"FrameNode"};button_pressed.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|button_pressed","targetName":"button_pressed","vekterClass":"FrameNode"};__layer_1__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_1__","vekterClass":"TextNode","text":"default \/ active"};checkbox_active.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|checkbox_active","targetName":"checkbox_active","vekterClass":"FrameNode"};__layer_4__.__framerInstanceInfo = {"hash":"#vekter|__layer_4__","vekterClass":"FrameNode","framerClass":"Layer"};__layer_6__.__framerInstanceInfo = {"hash":"#vekter|__layer_6__","vekterClass":"FrameNode","framerClass":"Layer"};toggle_active.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|toggle_active","targetName":"toggle_active","vekterClass":"FrameNode"};__layer_3__.__framerInstanceInfo = {"originalFilename":"check","framerClass":"SVGLayer","hash":"#vekter|__layer_3__","vekterClass":"SVGNode"};checkbox_default.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|checkbox_default","targetName":"checkbox_default","vekterClass":"FrameNode"};__layer_5__.__framerInstanceInfo = {"originalFilename":"check","framerClass":"SVGLayer","hash":"#vekter|__layer_5__","vekterClass":"SVGNode"};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {$ButtonStates, buttonContainer, button_pressed, label_1, button_default, label, checkboxContainer, checkbox_default, checkbox_active, togglesContainer, toggle_default, toggle_active});scope["__vekterVariables"] = ["$ButtonStates", "buttonContainer", "button_pressed", "label_1", "button_default", "label", "checkboxContainer", "checkbox_default", "checkbox_active", "togglesContainer", "toggle_default", "toggle_active"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);