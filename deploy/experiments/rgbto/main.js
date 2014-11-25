if(!Object.observe){(function(e,t){"use strict";var n=function(e){var n=e.call(e),r=typeof r;return typeof t.alert==="object"?function(i){return n===e.call(i)||!!i&&typeof i.toString==r&&typeof i.valueOf==r&&/^\s*\bfunction\b/.test(""+i)}:function(r){return n===e.call(r)}}(e.prototype.toString);var r=function(t){return typeof Node==="object"?t instanceof Node:t&&typeof t==="object"&&typeof t.nodeType==="number"&&typeof t.nodeName==="string"};var i=function(t){return typeof HTMLElement==="object"?t instanceof HTMLElement:t&&typeof t==="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName==="string"};var s=function(){return!!t.setImmediate}();var o=function(){if(s){return function(t){return setImmediate(t)}}else{return function(t){return setTimeout(t,10)}}}();var u=function(){if(s){return function(t){clearImmediate(t)}}else{return function(t){clearTimeout(t)}}}();var a=function(t){return!isNaN(parseFloat(t))&&isFinite(t)};var f=function(t,n){if(t===n){return t!==0||1/t===1/n}return t!==t&&n!==n};var l=function(t){if(typeof t==="undefined"){return false}return"get"in t||"set"in t};var c=function(t){if(typeof t==="undefined"){return false}return"value"in t||"writable"in t};var h=function(t,r,i){if(typeof t!=="object"){throw new TypeError("Object.observeObject called on non-object")}if(n(r)===false){throw new TypeError("Object.observeObject: Expecting function")}if(Object.isFrozen(r)===true){throw new TypeError("Object.observeObject: Expecting unfrozen function")}if(i!==undefined){if(!Array.isArray(i)){throw new TypeError("Object.observeObject: Expecting acceptList in the form of an array")}}};var p=function g(){var e=[];var g=function(n,r,i){h(n,r,i);if(!i){i=["add","update","delete","reconfigure","setPrototype","preventExtensions"]}Object.getNotifier(n).addListener(r,i);if(e.indexOf(n)===-1){e.push(n)}else{Object.getNotifier(n)._checkPropertyListing()}};g.prototype.deliverChangeRecords=function(t){Object.getNotifier(t).deliverChangeRecords()};e.lastScanned=0;var t=function(t){return function n(){var e=0,r=t.length,i=new Date,s=false;for(e=t.lastScanned;e<r&&!s;e++){if(m.indexOf(t[e])>-1){Object.getNotifier(t[e])._checkPropertyListing();s=new Date-i>100}else{t.splice(e,1);e--;r--}}t.lastScanned=e<r?e:0;o(n)}}(e);o(t);return g}();var d=function(t){var n=[],r=[],i=[],s=false,c=[],h=[];var p=this;Object.defineProperty(p,"_watching",{enumerable:true,get:function(e){return function(){return e}}(t)});var d=function(t,n){var r=typeof t[n],i=Object.getOwnPropertyDescriptor(t,n);if(n==="getNotifier"||l(i)||!i.enumerable){return false}if(t instanceof Array&&a(n)){var s=c.length;c[s]=n;h[s]=t[n];return true}(function(e,n){c[e]=n;h[e]=t[n];Object.defineProperty(t,n,{get:function(){return h[e]},set:function(r){if(!f(h[e],r)){Object.getNotifier(t).queueUpdate(t,n,"update",h[e]);h[e]=r}}})})(c.length,n);return true};p._checkPropertyListing=function(t){var n=p._watching,r=Object.keys(n),i=0,s=r.length;var o=[],u=c.slice(0),f=[];var l,v=!t,m,g,y,b;if(n instanceof Array){b=p._oldLength}for(i=0;i<s;i++){l=r[i];g=n[l];m=typeof g;if((y=c.indexOf(l))===-1){if(d(n,l)&&v){p.queueUpdate(n,l,"add",null,n[l])}}else{if(!(n instanceof Array)||a(l)){if(h[y]!==g){if(v){p.queueUpdate(n,l,"update",h[y],g)}h[y]=g}}u.splice(u.indexOf(l),1)}}if(n instanceof Array&&n.length!==b){if(v){p.queueUpdate(n,"length","update",b,n)}p._oldLength=n.length}if(v){s=u.length;for(i=0;i<s;i++){y=c.indexOf(u[i]);p.queueUpdate(n,u[i],"delete",h[y]);c.splice(y,1);h.splice(y,1)}}};p.addListener=function(t,i){var s=n.indexOf(t);if(s===-1){n.push(t);r.push(i)}else{r[s]=i}};p.removeListener=function(t){var i=n.indexOf(t);if(i>-1){n.splice(i,1);r.splice(i,1)}};p.listeners=function(){return n};p.queueUpdate=function(t,n,r,i){this.queueUpdates([{type:r,object:t,name:n,oldValue:i}])};p.queueUpdates=function(t){var n=this,r=0,a=t.length||0,f;for(r=0;r<a;r++){f=t[r];i.push(f)}if(s){u(s)}s=o(function(){s=false;n.deliverChangeRecords()})};p.deliverChangeRecords=function(){var t=0,s=n.length,o;for(t=0;t<s;t++){if(n[t]){var u;if(r[t]){u=[];for(var a=0,f=i.length;a<f;a++){if(r[t].indexOf(i[a].type)!==-1){u.push(i[a])}}}else{u=i}if(u.length){if(n[t]===console.log){console.log(u)}else{n[t](u)}}}}i=[]};p.notify=function(n){if(typeof n!=="object"||typeof n.type!=="string"){throw new TypeError("Invalid changeRecord with non-string 'type' property")}n.object=t;p.queueUpdates([n])};p._checkPropertyListing(true)};var v=[],m=[];e.getNotifier=function(t){var n=m.indexOf(t),r=n>-1?v[n]:false;if(!r){n=m.length;m[n]=t;r=v[n]=new d(t)}return r};e.observe=function(t,n,r){if(!i(t)){return new p(t,n,r)}};e.unobserve=function(t,n){h(t,n);var r=m.indexOf(t),i=r>-1?v[r]:false;if(!i){return}i.removeListener(n);if(i.listeners().length===0){m.splice(r,1);v.splice(r,1)}}})(Object,this)}

var ntc={init:function(){var e,t,n;for(var r=0;r<ntc.names.length;r++){e="#"+ntc.names[r][0];t=ntc.rgb(e);n=ntc.hsl(e);ntc.names[r].push(t[0],t[1],t[2],n[0],n[1],n[2])}},name:function(e){e=e.toUpperCase();if(e.length<3||e.length>7)return["#000000","Invalid Color: "+e,false];if(e.length%3==0)e="#"+e;if(e.length==4)e="#"+e.substr(1,1)+e.substr(1,1)+e.substr(2,1)+e.substr(2,1)+e.substr(3,1)+e.substr(3,1);var t=ntc.rgb(e);var n=t[0],r=t[1],i=t[2];var s=ntc.hsl(e);var o=s[0],u=s[1],a=s[2];var f=0;ndf2=0;ndf=0;var l=-1,c=-1;for(var h=0;h<ntc.names.length;h++){if(e=="#"+ntc.names[h][0])return["#"+ntc.names[h][0],ntc.names[h][1],true];f=Math.pow(n-ntc.names[h][2],2)+Math.pow(r-ntc.names[h][3],2)+Math.pow(i-ntc.names[h][4],2);ndf2=Math.pow(o-ntc.names[h][5],2)+Math.pow(u-ntc.names[h][6],2)+Math.pow(a-ntc.names[h][7],2);ndf=f+ndf2*2;if(c<0||c>ndf){c=ndf;l=h}}return l<0?["#000000","Invalid Color: "+e,false]:["#"+ntc.names[l][0],ntc.names[l][1],false]},hsl:function(e){var t=[parseInt("0x"+e.substring(1,3))/255,parseInt("0x"+e.substring(3,5))/255,parseInt("0x"+e.substring(5,7))/255];var n,r,i,s,o,u;var a=t[0],f=t[1],l=t[2];n=Math.min(a,Math.min(f,l));r=Math.max(a,Math.max(f,l));i=r-n;u=(n+r)/2;o=0;if(u>0&&u<1)o=i/(u<.5?2*u:2-2*u);s=0;if(i>0){if(r==a&&r!=f)s+=(f-l)/i;if(r==f&&r!=l)s+=2+(l-a)/i;if(r==l&&r!=a)s+=4+(a-f)/i;s/=6}return[parseInt(s*255),parseInt(o*255),parseInt(u*255)]},rgb:function(e){return[parseInt("0x"+e.substring(1,3)),parseInt("0x"+e.substring(3,5)),parseInt("0x"+e.substring(5,7))]},names:[["000000","Black"],["000080","Navy Blue"],["0000C8","Dark Blue"],["0000FF","Blue"],["000741","Stratos"],["001B1C","Swamp"],["002387","Resolution Blue"],["002900","Deep Fir"],["002E20","Burnham"],["002FA7","International Klein Blue"],["003153","Prussian Blue"],["003366","Midnight Blue"],["003399","Smalt"],["003532","Deep Teal"],["003E40","Cyprus"],["004620","Kaitoke Green"],["0047AB","Cobalt"],["004816","Crusoe"],["004950","Sherpa Blue"],["0056A7","Endeavour"],["00581A","Camarone"],["0066CC","Science Blue"],["0066FF","Blue Ribbon"],["00755E","Tropical Rain Forest"],["0076A3","Allports"],["007BA7","Deep Cerulean"],["007EC7","Lochmara"],["007FFF","Azure Radiance"],["008080","Teal"],["0095B6","Bondi Blue"],["009DC4","Pacific Blue"],["00A693","Persian Green"],["00A86B","Jade"],["00CC99","Caribbean Green"],["00CCCC","Robin's Egg Blue"],["00FF00","Green"],["00FF7F","Spring Green"],["00FFFF","Cyan / Aqua"],["010D1A","Blue Charcoal"],["011635","Midnight"],["011D13","Holly"],["012731","Daintree"],["01361C","Cardin Green"],["01371A","County Green"],["013E62","Astronaut Blue"],["013F6A","Regal Blue"],["014B43","Aqua Deep"],["015E85","Orient"],["016162","Blue Stone"],["016D39","Fun Green"],["01796F","Pine Green"],["017987","Blue Lagoon"],["01826B","Deep Sea"],["01A368","Green Haze"],["022D15","English Holly"],["02402C","Sherwood Green"],["02478E","Congress Blue"],["024E46","Evening Sea"],["026395","Bahama Blue"],["02866F","Observatory"],["02A4D3","Cerulean"],["03163C","Tangaroa"],["032B52","Green Vogue"],["036A6E","Mosque"],["041004","Midnight Moss"],["041322","Black Pearl"],["042E4C","Blue Whale"],["044022","Zuccini"],["044259","Teal Blue"],["051040","Deep Cove"],["051657","Gulf Blue"],["055989","Venice Blue"],["056F57","Watercourse"],["062A78","Catalina Blue"],["063537","Tiber"],["069B81","Gossamer"],["06A189","Niagara"],["073A50","Tarawera"],["080110","Jaguar"],["081910","Black Bean"],["082567","Deep Sapphire"],["088370","Elf Green"],["08E8DE","Bright Turquoise"],["092256","Downriver"],["09230F","Palm Green"],["09255D","Madison"],["093624","Bottle Green"],["095859","Deep Sea Green"],["097F4B","Salem"],["0A001C","Black Russian"],["0A480D","Dark Fern"],["0A6906","Japanese Laurel"],["0A6F75","Atoll"],["0B0B0B","Cod Gray"],["0B0F08","Marshland"],["0B1107","Gordons Green"],["0B1304","Black Forest"],["0B6207","San Felix"],["0BDA51","Malachite"],["0C0B1D","Ebony"],["0C0D0F","Woodsmoke"],["0C1911","Racing Green"],["0C7A79","Surfie Green"],["0C8990","Blue Chill"],["0D0332","Black Rock"],["0D1117","Bunker"],["0D1C19","Aztec"],["0D2E1C","Bush"],["0E0E18","Cinder"],["0E2A30","Firefly"],["0F2D9E","Torea Bay"],["10121D","Vulcan"],["101405","Green Waterloo"],["105852","Eden"],["110C6C","Arapawa"],["120A8F","Ultramarine"],["123447","Elephant"],["126B40","Jewel"],["130000","Diesel"],["130A06","Asphalt"],["13264D","Blue Zodiac"],["134F19","Parsley"],["140600","Nero"],["1450AA","Tory Blue"],["151F4C","Bunting"],["1560BD","Denim"],["15736B","Genoa"],["161928","Mirage"],["161D10","Hunter Green"],["162A40","Big Stone"],["163222","Celtic"],["16322C","Timber Green"],["163531","Gable Green"],["171F04","Pine Tree"],["175579","Chathams Blue"],["182D09","Deep Forest Green"],["18587A","Blumine"],["19330E","Palm Leaf"],["193751","Nile Blue"],["1959A8","Fun Blue"],["1A1A68","Lucky Point"],["1AB385","Mountain Meadow"],["1B0245","Tolopea"],["1B1035","Haiti"],["1B127B","Deep Koamaru"],["1B1404","Acadia"],["1B2F11","Seaweed"],["1B3162","Biscay"],["1B659D","Matisse"],["1C1208","Crowshead"],["1C1E13","Rangoon Green"],["1C39BB","Persian Blue"],["1C402E","Everglade"],["1C7C7D","Elm"],["1D6142","Green Pea"],["1E0F04","Creole"],["1E1609","Karaka"],["1E1708","El Paso"],["1E385B","Cello"],["1E433C","Te Papa Green"],["1E90FF","Dodger Blue"],["1E9AB0","Eastern Blue"],["1F120F","Night Rider"],["1FC2C2","Java"],["20208D","Jacksons Purple"],["202E54","Cloud Burst"],["204852","Blue Dianne"],["211A0E","Eternity"],["220878","Deep Blue"],["228B22","Forest Green"],["233418","Mallard"],["240A40","Violet"],["240C02","Kilamanjaro"],["242A1D","Log Cabin"],["242E16","Black Olive"],["24500F","Green House"],["251607","Graphite"],["251706","Cannon Black"],["251F4F","Port Gore"],["25272C","Shark"],["25311C","Green Kelp"],["2596D1","Curious Blue"],["260368","Paua"],["26056A","Paris M"],["261105","Wood Bark"],["261414","Gondola"],["262335","Steel Gray"],["26283B","Ebony Clay"],["273A81","Bay of Many"],["27504B","Plantation"],["278A5B","Eucalyptus"],["281E15","Oil"],["283A77","Astronaut"],["286ACD","Mariner"],["290C5E","Violent Violet"],["292130","Bastille"],["292319","Zeus"],["292937","Charade"],["297B9A","Jelly Bean"],["29AB87","Jungle Green"],["2A0359","Cherry Pie"],["2A140E","Coffee Bean"],["2A2630","Baltic Sea"],["2A380B","Turtle Green"],["2A52BE","Cerulean Blue"],["2B0202","Sepia Black"],["2B194F","Valhalla"],["2B3228","Heavy Metal"],["2C0E8C","Blue Gem"],["2C1632","Revolver"],["2C2133","Bleached Cedar"],["2C8C84","Lochinvar"],["2D2510","Mikado"],["2D383A","Outer Space"],["2D569B","St Tropaz"],["2E0329","Jacaranda"],["2E1905","Jacko Bean"],["2E3222","Rangitoto"],["2E3F62","Rhino"],["2E8B57","Sea Green"],["2EBFD4","Scooter"],["2F270E","Onion"],["2F3CB3","Governor Bay"],["2F519E","Sapphire"],["2F5A57","Spectra"],["2F6168","Casal"],["300529","Melanzane"],["301F1E","Cocoa Brown"],["302A0F","Woodrush"],["304B6A","San Juan"],["30D5C8","Turquoise"],["311C17","Eclipse"],["314459","Pickled Bluewood"],["315BA1","Azure"],["31728D","Calypso"],["317D82","Paradiso"],["32127A","Persian Indigo"],["32293A","Blackcurrant"],["323232","Mine Shaft"],["325D52","Stromboli"],["327C14","Bilbao"],["327DA0","Astral"],["33036B","Christalle"],["33292F","Thunder"],["33CC99","Shamrock"],["341515","Tamarind"],["350036","Mardi Gras"],["350E42","Valentino"],["350E57","Jagger"],["353542","Tuna"],["354E8C","Chambray"],["363050","Martinique"],["363534","Tuatara"],["363C0D","Waiouru"],["36747D","Ming"],["368716","La Palma"],["370202","Chocolate"],["371D09","Clinker"],["37290E","Brown Tumbleweed"],["373021","Birch"],["377475","Oracle"],["380474","Blue Diamond"],["381A51","Grape"],["383533","Dune"],["384555","Oxford Blue"],["384910","Clover"],["394851","Limed Spruce"],["396413","Dell"],["3A0020","Toledo"],["3A2010","Sambuca"],["3A2A6A","Jacarta"],["3A686C","William"],["3A6A47","Killarney"],["3AB09E","Keppel"],["3B000B","Temptress"],["3B0910","Aubergine"],["3B1F1F","Jon"],["3B2820","Treehouse"],["3B7A57","Amazon"],["3B91B4","Boston Blue"],["3C0878","Windsor"],["3C1206","Rebel"],["3C1F76","Meteorite"],["3C2005","Dark Ebony"],["3C3910","Camouflage"],["3C4151","Bright Gray"],["3C4443","Cape Cod"],["3C493A","Lunar Green"],["3D0C02","Bean  "],["3D2B1F","Bistre"],["3D7D52","Goblin"],["3E0480","Kingfisher Daisy"],["3E1C14","Cedar"],["3E2B23","English Walnut"],["3E2C1C","Black Marlin"],["3E3A44","Ship Gray"],["3EABBF","Pelorous"],["3F2109","Bronze"],["3F2500","Cola"],["3F3002","Madras"],["3F307F","Minsk"],["3F4C3A","Cabbage Pont"],["3F583B","Tom Thumb"],["3F5D53","Mineral Green"],["3FC1AA","Puerto Rico"],["3FFF00","Harlequin"],["401801","Brown Pod"],["40291D","Cork"],["403B38","Masala"],["403D19","Thatch Green"],["405169","Fiord"],["40826D","Viridian"],["40A860","Chateau Green"],["410056","Ripe Plum"],["411F10","Paco"],["412010","Deep Oak"],["413C37","Merlin"],["414257","Gun Powder"],["414C7D","East Bay"],["4169E1","Royal Blue"],["41AA78","Ocean Green"],["420303","Burnt Maroon"],["423921","Lisbon Brown"],["427977","Faded Jade"],["431560","Scarlet Gum"],["433120","Iroko"],["433E37","Armadillo"],["434C59","River Bed"],["436A0D","Green Leaf"],["44012D","Barossa"],["441D00","Morocco Brown"],["444954","Mako"],["454936","Kelp"],["456CAC","San Marino"],["45B1E8","Picton Blue"],["460B41","Loulou"],["462425","Crater Brown"],["465945","Gray Asparagus"],["4682B4","Steel Blue"],["480404","Rustic Red"],["480607","Bulgarian Rose"],["480656","Clairvoyant"],["481C1C","Cocoa Bean"],["483131","Woody Brown"],["483C32","Taupe"],["49170C","Van Cleef"],["492615","Brown Derby"],["49371B","Metallic Bronze"],["495400","Verdun Green"],["496679","Blue Bayoux"],["497183","Bismark"],["4A2A04","Bracken"],["4A3004","Deep Bronze"],["4A3C30","Mondo"],["4A4244","Tundora"],["4A444B","Gravel"],["4A4E5A","Trout"],["4B0082","Pigment Indigo"],["4B5D52","Nandor"],["4C3024","Saddle"],["4C4F56","Abbey"],["4D0135","Blackberry"],["4D0A18","Cab Sav"],["4D1E01","Indian Tan"],["4D282D","Cowboy"],["4D282E","Livid Brown"],["4D3833","Rock"],["4D3D14","Punga"],["4D400F","Bronzetone"],["4D5328","Woodland"],["4E0606","Mahogany"],["4E2A5A","Bossanova"],["4E3B41","Matterhorn"],["4E420C","Bronze Olive"],["4E4562","Mulled Wine"],["4E6649","Axolotl"],["4E7F9E","Wedgewood"],["4EABD1","Shakespeare"],["4F1C70","Honey Flower"],["4F2398","Daisy Bush"],["4F69C6","Indigo"],["4F7942","Fern Green"],["4F9D5D","Fruit Salad"],["4FA83D","Apple"],["504351","Mortar"],["507096","Kashmir Blue"],["507672","Cutty Sark"],["50C878","Emerald"],["514649","Emperor"],["516E3D","Chalet Green"],["517C66","Como"],["51808F","Smalt Blue"],["52001F","Castro"],["520C17","Maroon Oak"],["523C94","Gigas"],["533455","Voodoo"],["534491","Victoria"],["53824B","Hippie Green"],["541012","Heath"],["544333","Judge Gray"],["54534D","Fuscous Gray"],["549019","Vida Loca"],["55280C","Cioccolato"],["555B10","Saratoga"],["556D56","Finlandia"],["5590D9","Havelock Blue"],["56B4BE","Fountain Blue"],["578363","Spring Leaves"],["583401","Saddle Brown"],["585562","Scarpa Flow"],["587156","Cactus"],["589AAF","Hippie Blue"],["591D35","Wine Berry"],["592804","Brown Bramble"],["593737","Congo Brown"],["594433","Millbrook"],["5A6E9C","Waikawa Gray"],["5A87A0","Horizon"],["5B3013","Jambalaya"],["5C0120","Bordeaux"],["5C0536","Mulberry Wood"],["5C2E01","Carnaby Tan"],["5C5D75","Comet"],["5D1E0F","Redwood"],["5D4C51","Don Juan"],["5D5C58","Chicago"],["5D5E37","Verdigris"],["5D7747","Dingley"],["5DA19F","Breaker Bay"],["5E483E","Kabul"],["5E5D3B","Hemlock"],["5F3D26","Irish Coffee"],["5F5F6E","Mid Gray"],["5F6672","Shuttle Gray"],["5FA777","Aqua Forest"],["5FB3AC","Tradewind"],["604913","Horses Neck"],["605B73","Smoky"],["606E68","Corduroy"],["6093D1","Danube"],["612718","Espresso"],["614051","Eggplant"],["615D30","Costa Del Sol"],["61845F","Glade Green"],["622F30","Buccaneer"],["623F2D","Quincy"],["624E9A","Butterfly Bush"],["625119","West Coast"],["626649","Finch"],["639A8F","Patina"],["63B76C","Fern"],["6456B7","Blue Violet"],["646077","Dolphin"],["646463","Storm Dust"],["646A54","Siam"],["646E75","Nevada"],["6495ED","Cornflower Blue"],["64CCDB","Viking"],["65000B","Rosewood"],["651A14","Cherrywood"],["652DC1","Purple Heart"],["657220","Fern Frond"],["65745D","Willow Grove"],["65869F","Hoki"],["660045","Pompadour"],["660099","Purple"],["66023C","Tyrian Purple"],["661010","Dark Tan"],["66B58F","Silver Tree"],["66FF00","Bright Green"],["66FF66","Screamin' Green"],["67032D","Black Rose"],["675FA6","Scampi"],["676662","Ironside Gray"],["678975","Viridian Green"],["67A712","Christi"],["683600","Nutmeg Wood Finish"],["685558","Zambezi"],["685E6E","Salt Box"],["692545","Tawny Port"],["692D54","Finn"],["695F62","Scorpion"],["697E9A","Lynch"],["6A442E","Spice"],["6A5D1B","Himalaya"],["6A6051","Soya Bean"],["6B2A14","Hairy Heath"],["6B3FA0","Royal Purple"],["6B4E31","Shingle Fawn"],["6B5755","Dorado"],["6B8BA2","Bermuda Gray"],["6B8E23","Olive Drab"],["6C3082","Eminence"],["6CDAE7","Turquoise Blue"],["6D0101","Lonestar"],["6D5E54","Pine Cone"],["6D6C6C","Dove Gray"],["6D9292","Juniper"],["6D92A1","Gothic"],["6E0902","Red Oxide"],["6E1D14","Moccaccino"],["6E4826","Pickled Bean"],["6E4B26","Dallas"],["6E6D57","Kokoda"],["6E7783","Pale Sky"],["6F440C","Cafe Royale"],["6F6A61","Flint"],["6F8E63","Highland"],["6F9D02","Limeade"],["6FD0C5","Downy"],["701C1C","Persian Plum"],["704214","Sepia"],["704A07","Antique Bronze"],["704F50","Ferra"],["706555","Coffee"],["708090","Slate Gray"],["711A00","Cedar Wood Finish"],["71291D","Metallic Copper"],["714693","Affair"],["714AB2","Studio"],["715D47","Tobacco Brown"],["716338","Yellow Metal"],["716B56","Peat"],["716E10","Olivetone"],["717486","Storm Gray"],["718080","Sirocco"],["71D9E2","Aquamarine Blue"],["72010F","Venetian Red"],["724A2F","Old Copper"],["726D4E","Go Ben"],["727B89","Raven"],["731E8F","Seance"],["734A12","Raw Umber"],["736C9F","Kimberly"],["736D58","Crocodile"],["737829","Crete"],["738678","Xanadu"],["74640D","Spicy Mustard"],["747D63","Limed Ash"],["747D83","Rolling Stone"],["748881","Blue Smoke"],["749378","Laurel"],["74C365","Mantis"],["755A57","Russett"],["7563A8","Deluge"],["76395D","Cosmic"],["7666C6","Blue Marguerite"],["76BD17","Lima"],["76D7EA","Sky Blue"],["770F05","Dark Burgundy"],["771F1F","Crown of Thorns"],["773F1A","Walnut"],["776F61","Pablo"],["778120","Pacifika"],["779E86","Oxley"],["77DD77","Pastel Green"],["780109","Japanese Maple"],["782D19","Mocha"],["782F16","Peanut"],["78866B","Camouflage Green"],["788A25","Wasabi"],["788BBA","Ship Cove"],["78A39C","Sea Nymph"],["795D4C","Roman Coffee"],["796878","Old Lavender"],["796989","Rum"],["796A78","Fedora"],["796D62","Sandstone"],["79DEEC","Spray"],["7A013A","Siren"],["7A58C1","Fuchsia Blue"],["7A7A7A","Boulder"],["7A89B8","Wild Blue Yonder"],["7AC488","De York"],["7B3801","Red Beech"],["7B3F00","Cinnamon"],["7B6608","Yukon Gold"],["7B7874","Tapa"],["7B7C94","Waterloo "],["7B8265","Flax Smoke"],["7B9F80","Amulet"],["7BA05B","Asparagus"],["7C1C05","Kenyan Copper"],["7C7631","Pesto"],["7C778A","Topaz"],["7C7B7A","Concord"],["7C7B82","Jumbo"],["7C881A","Trendy Green"],["7CA1A6","Gumbo"],["7CB0A1","Acapulco"],["7CB7BB","Neptune"],["7D2C14","Pueblo"],["7DA98D","Bay Leaf"],["7DC8F7","Malibu"],["7DD8C6","Bermuda"],["7E3A15","Copper Canyon"],["7F1734","Claret"],["7F3A02","Peru Tan"],["7F626D","Falcon"],["7F7589","Mobster"],["7F76D3","Moody Blue"],["7FFF00","Chartreuse"],["7FFFD4","Aquamarine"],["800000","Maroon"],["800B47","Rose Bud Cherry"],["801818","Falu Red"],["80341F","Red Robin"],["803790","Vivid Violet"],["80461B","Russet"],["807E79","Friar Gray"],["808000","Olive"],["808080","Gray"],["80B3AE","Gulf Stream"],["80B3C4","Glacier"],["80CCEA","Seagull"],["81422C","Nutmeg"],["816E71","Spicy Pink"],["817377","Empress"],["819885","Spanish Green"],["826F65","Sand Dune"],["828685","Gunsmoke"],["828F72","Battleship Gray"],["831923","Merlot"],["837050","Shadow"],["83AA5D","Chelsea Cucumber"],["83D0C6","Monte Carlo"],["843179","Plum"],["84A0A0","Granny Smith"],["8581D9","Chetwode Blue"],["858470","Bandicoot"],["859FAF","Bali Hai"],["85C4CC","Half Baked"],["860111","Red Devil"],["863C3C","Lotus"],["86483C","Ironstone"],["864D1E","Bull Shot"],["86560A","Rusty Nail"],["868974","Bitter"],["86949F","Regent Gray"],["871550","Disco"],["87756E","Americano"],["877C7B","Hurricane"],["878D91","Oslo Gray"],["87AB39","Sushi"],["885342","Spicy Mix"],["886221","Kumera"],["888387","Suva Gray"],["888D65","Avocado"],["893456","Camelot"],["893843","Solid Pink"],["894367","Cannon Pink"],["897D6D","Makara"],["8A3324","Burnt Umber"],["8A73D6","True V"],["8A8360","Clay Creek"],["8A8389","Monsoon"],["8A8F8A","Stack"],["8AB9F1","Jordy Blue"],["8B00FF","Electric Violet"],["8B0723","Monarch"],["8B6B0B","Corn Harvest"],["8B8470","Olive Haze"],["8B847E","Schooner"],["8B8680","Natural Gray"],["8B9C90","Mantle"],["8B9FEE","Portage"],["8BA690","Envy"],["8BA9A5","Cascade"],["8BE6D8","Riptide"],["8C055E","Cardinal Pink"],["8C472F","Mule Fawn"],["8C5738","Potters Clay"],["8C6495","Trendy Pink"],["8D0226","Paprika"],["8D3D38","Sanguine Brown"],["8D3F3F","Tosca"],["8D7662","Cement"],["8D8974","Granite Green"],["8D90A1","Manatee"],["8DA8CC","Polo Blue"],["8E0000","Red Berry"],["8E4D1E","Rope"],["8E6F70","Opium"],["8E775E","Domino"],["8E8190","Mamba"],["8EABC1","Nepal"],["8F021C","Pohutukawa"],["8F3E33","El Salva"],["8F4B0E","Korma"],["8F8176","Squirrel"],["8FD6B4","Vista Blue"],["900020","Burgundy"],["901E1E","Old Brick"],["907874","Hemp"],["907B71","Almond Frost"],["908D39","Sycamore"],["92000A","Sangria"],["924321","Cumin"],["926F5B","Beaver"],["928573","Stonewall"],["928590","Venus"],["9370DB","Medium Purple"],["93CCEA","Cornflower"],["93DFB8","Algae Green"],["944747","Copper Rust"],["948771","Arrowtown"],["950015","Scarlett"],["956387","Strikemaster"],["959396","Mountain Mist"],["960018","Carmine"],["964B00","Brown"],["967059","Leather"],["9678B6","Purple Mountain's Majesty"],["967BB6","Lavender Purple"],["96A8A1","Pewter"],["96BBAB","Summer Green"],["97605D","Au Chico"],["9771B5","Wisteria"],["97CD2D","Atlantis"],["983D61","Vin Rouge"],["9874D3","Lilac Bush"],["98777B","Bazaar"],["98811B","Hacienda"],["988D77","Pale Oyster"],["98FF98","Mint Green"],["990066","Fresh Eggplant"],["991199","Violet Eggplant"],["991613","Tamarillo"],["991B07","Totem Pole"],["996666","Copper Rose"],["9966CC","Amethyst"],["997A8D","Mountbatten Pink"],["9999CC","Blue Bell"],["9A3820","Prairie Sand"],["9A6E61","Toast"],["9A9577","Gurkha"],["9AB973","Olivine"],["9AC2B8","Shadow Green"],["9B4703","Oregon"],["9B9E8F","Lemon Grass"],["9C3336","Stiletto"],["9D5616","Hawaiian Tan"],["9DACB7","Gull Gray"],["9DC209","Pistachio"],["9DE093","Granny Smith Apple"],["9DE5FF","Anakiwa"],["9E5302","Chelsea Gem"],["9E5B40","Sepia Skin"],["9EA587","Sage"],["9EA91F","Citron"],["9EB1CD","Rock Blue"],["9EDEE0","Morning Glory"],["9F381D","Cognac"],["9F821C","Reef Gold"],["9F9F9C","Star Dust"],["9FA0B1","Santas Gray"],["9FD7D3","Sinbad"],["9FDD8C","Feijoa"],["A02712","Tabasco"],["A1750D","Buttered Rum"],["A1ADB5","Hit Gray"],["A1C50A","Citrus"],["A1DAD7","Aqua Island"],["A1E9DE","Water Leaf"],["A2006D","Flirt"],["A23B6C","Rouge"],["A26645","Cape Palliser"],["A2AAB3","Gray Chateau"],["A2AEAB","Edward"],["A3807B","Pharlap"],["A397B4","Amethyst Smoke"],["A3E3ED","Blizzard Blue"],["A4A49D","Delta"],["A4A6D3","Wistful"],["A4AF6E","Green Smoke"],["A50B5E","Jazzberry Jam"],["A59B91","Zorba"],["A5CB0C","Bahia"],["A62F20","Roof Terracotta"],["A65529","Paarl"],["A68B5B","Barley Corn"],["A69279","Donkey Brown"],["A6A29A","Dawn"],["A72525","Mexican Red"],["A7882C","Luxor Gold"],["A85307","Rich Gold"],["A86515","Reno Sand"],["A86B6B","Coral Tree"],["A8989B","Dusty Gray"],["A899E6","Dull Lavender"],["A8A589","Tallow"],["A8AE9C","Bud"],["A8AF8E","Locust"],["A8BD9F","Norway"],["A8E3BD","Chinook"],["A9A491","Gray Olive"],["A9ACB6","Aluminium"],["A9B2C3","Cadet Blue"],["A9B497","Schist"],["A9BDBF","Tower Gray"],["A9BEF2","Perano"],["A9C6C2","Opal"],["AA375A","Night Shadz"],["AA4203","Fire"],["AA8B5B","Muesli"],["AA8D6F","Sandal"],["AAA5A9","Shady Lady"],["AAA9CD","Logan"],["AAABB7","Spun Pearl"],["AAD6E6","Regent St Blue"],["AAF0D1","Magic Mint"],["AB0563","Lipstick"],["AB3472","Royal Heath"],["AB917A","Sandrift"],["ABA0D9","Cold Purple"],["ABA196","Bronco"],["AC8A56","Limed Oak"],["AC91CE","East Side"],["AC9E22","Lemon Ginger"],["ACA494","Napa"],["ACA586","Hillary"],["ACA59F","Cloudy"],["ACACAC","Silver Chalice"],["ACB78E","Swamp Green"],["ACCBB1","Spring Rain"],["ACDD4D","Conifer"],["ACE1AF","Celadon"],["AD781B","Mandalay"],["ADBED1","Casper"],["ADDFAD","Moss Green"],["ADE6C4","Padua"],["ADFF2F","Green Yellow"],["AE4560","Hippie Pink"],["AE6020","Desert"],["AE809E","Bouquet"],["AF4035","Medium Carmine"],["AF4D43","Apple Blossom"],["AF593E","Brown Rust"],["AF8751","Driftwood"],["AF8F2C","Alpine"],["AF9F1C","Lucky"],["AFA09E","Martini"],["AFB1B8","Bombay"],["AFBDD9","Pigeon Post"],["B04C6A","Cadillac"],["B05D54","Matrix"],["B05E81","Tapestry"],["B06608","Mai Tai"],["B09A95","Del Rio"],["B0E0E6","Powder Blue"],["B0E313","Inch Worm"],["B10000","Bright Red"],["B14A0B","Vesuvius"],["B1610B","Pumpkin Skin"],["B16D52","Santa Fe"],["B19461","Teak"],["B1E2C1","Fringy Flower"],["B1F4E7","Ice Cold"],["B20931","Shiraz"],["B2A1EA","Biloba Flower"],["B32D29","Tall Poppy"],["B35213","Fiery Orange"],["B38007","Hot Toddy"],["B3AF95","Taupe Gray"],["B3C110","La Rioja"],["B43332","Well Read"],["B44668","Blush"],["B4CFD3","Jungle Mist"],["B57281","Turkish Rose"],["B57EDC","Lavender"],["B5A27F","Mongoose"],["B5B35C","Olive Green"],["B5D2CE","Jet Stream"],["B5ECDF","Cruise"],["B6316C","Hibiscus"],["B69D98","Thatch"],["B6B095","Heathered Gray"],["B6BAA4","Eagle"],["B6D1EA","Spindle"],["B6D3BF","Gum Leaf"],["B7410E","Rust"],["B78E5C","Muddy Waters"],["B7A214","Sahara"],["B7A458","Husk"],["B7B1B1","Nobel"],["B7C3D0","Heather"],["B7F0BE","Madang"],["B81104","Milano Red"],["B87333","Copper"],["B8B56A","Gimblet"],["B8C1B1","Green Spring"],["B8C25D","Celery"],["B8E0F9","Sail"],["B94E48","Chestnut"],["B95140","Crail"],["B98D28","Marigold"],["B9C46A","Wild Willow"],["B9C8AC","Rainee"],["BA0101","Guardsman Red"],["BA450C","Rock Spray"],["BA6F1E","Bourbon"],["BA7F03","Pirate Gold"],["BAB1A2","Nomad"],["BAC7C9","Submarine"],["BAEEF9","Charlotte"],["BB3385","Medium Red Violet"],["BB8983","Brandy Rose"],["BBD009","Rio Grande"],["BBD7C1","Surf"],["BCC9C2","Powder Ash"],["BD5E2E","Tuscany"],["BD978E","Quicksand"],["BDB1A8","Silk"],["BDB2A1","Malta"],["BDB3C7","Chatelle"],["BDBBD7","Lavender Gray"],["BDBDC6","French Gray"],["BDC8B3","Clay Ash"],["BDC9CE","Loblolly"],["BDEDFD","French Pass"],["BEA6C3","London Hue"],["BEB5B7","Pink Swan"],["BEDE0D","Fuego"],["BF5500","Rose of Sharon"],["BFB8B0","Tide"],["BFBED8","Blue Haze"],["BFC1C2","Silver Sand"],["BFC921","Key Lime Pie"],["BFDBE2","Ziggurat"],["BFFF00","Lime"],["C02B18","Thunderbird"],["C04737","Mojo"],["C08081","Old Rose"],["C0C0C0","Silver"],["C0D3B9","Pale Leaf"],["C0D8B6","Pixie Green"],["C1440E","Tia Maria"],["C154C1","Fuchsia Pink"],["C1A004","Buddha Gold"],["C1B7A4","Bison Hide"],["C1BAB0","Tea"],["C1BECD","Gray Suit"],["C1D7B0","Sprout"],["C1F07C","Sulu"],["C26B03","Indochine"],["C2955D","Twine"],["C2BDB6","Cotton Seed"],["C2CAC4","Pumice"],["C2E8E5","Jagged Ice"],["C32148","Maroon Flush"],["C3B091","Indian Khaki"],["C3BFC1","Pale Slate"],["C3C3BD","Gray Nickel"],["C3CDE6","Periwinkle Gray"],["C3D1D1","Tiara"],["C3DDF9","Tropical Blue"],["C41E3A","Cardinal"],["C45655","Fuzzy Wuzzy Brown"],["C45719","Orange Roughy"],["C4C4BC","Mist Gray"],["C4D0B0","Coriander"],["C4F4EB","Mint Tulip"],["C54B8C","Mulberry"],["C59922","Nugget"],["C5994B","Tussock"],["C5DBCA","Sea Mist"],["C5E17A","Yellow Green"],["C62D42","Brick Red"],["C6726B","Contessa"],["C69191","Oriental Pink"],["C6A84B","Roti"],["C6C3B5","Ash"],["C6C8BD","Kangaroo"],["C6E610","Las Palmas"],["C7031E","Monza"],["C71585","Red Violet"],["C7BCA2","Coral Reef"],["C7C1FF","Melrose"],["C7C4BF","Cloud"],["C7C9D5","Ghost"],["C7CD90","Pine Glade"],["C7DDE5","Botticelli"],["C88A65","Antique Brass"],["C8A2C8","Lilac"],["C8A528","Hokey Pokey"],["C8AABF","Lily"],["C8B568","Laser"],["C8E3D7","Edgewater"],["C96323","Piper"],["C99415","Pizza"],["C9A0DC","Light Wisteria"],["C9B29B","Rodeo Dust"],["C9B35B","Sundance"],["C9B93B","Earls Green"],["C9C0BB","Silver Rust"],["C9D9D2","Conch"],["C9FFA2","Reef"],["C9FFE5","Aero Blue"],["CA3435","Flush Mahogany"],["CABB48","Turmeric"],["CADCD4","Paris White"],["CAE00D","Bitter Lemon"],["CAE6DA","Skeptic"],["CB8FA9","Viola"],["CBCAB6","Foggy Gray"],["CBD3B0","Green Mist"],["CBDBD6","Nebula"],["CC3333","Persian Red"],["CC5500","Burnt Orange"],["CC7722","Ochre"],["CC8899","Puce"],["CCCAA8","Thistle Green"],["CCCCFF","Periwinkle"],["CCFF00","Electric Lime"],["CD5700","Tenn"],["CD5C5C","Chestnut Rose"],["CD8429","Brandy Punch"],["CDF4FF","Onahau"],["CEB98F","Sorrell Brown"],["CEBABA","Cold Turkey"],["CEC291","Yuma"],["CEC7A7","Chino"],["CFA39D","Eunry"],["CFB53B","Old Gold"],["CFDCCF","Tasman"],["CFE5D2","Surf Crest"],["CFF9F3","Humming Bird"],["CFFAF4","Scandal"],["D05F04","Red Stage"],["D06DA1","Hopbush"],["D07D12","Meteor"],["D0BEF8","Perfume"],["D0C0E5","Prelude"],["D0F0C0","Tea Green"],["D18F1B","Geebung"],["D1BEA8","Vanilla"],["D1C6B4","Soft Amber"],["D1D2CA","Celeste"],["D1D2DD","Mischka"],["D1E231","Pear"],["D2691E","Hot Cinnamon"],["D27D46","Raw Sienna"],["D29EAA","Careys Pink"],["D2B48C","Tan"],["D2DA97","Deco"],["D2F6DE","Blue Romance"],["D2F8B0","Gossip"],["D3CBBA","Sisal"],["D3CDC5","Swirl"],["D47494","Charm"],["D4B6AF","Clam Shell"],["D4BF8D","Straw"],["D4C4A8","Akaroa"],["D4CD16","Bird Flower"],["D4D7D9","Iron"],["D4DFE2","Geyser"],["D4E2FC","Hawkes Blue"],["D54600","Grenadier"],["D591A4","Can Can"],["D59A6F","Whiskey"],["D5D195","Winter Hazel"],["D5F6E3","Granny Apple"],["D69188","My Pink"],["D6C562","Tacha"],["D6CEF6","Moon Raker"],["D6D6D1","Quill Gray"],["D6FFDB","Snowy Mint"],["D7837F","New York Pink"],["D7C498","Pavlova"],["D7D0FF","Fog"],["D84437","Valencia"],["D87C63","Japonica"],["D8BFD8","Thistle"],["D8C2D5","Maverick"],["D8FCFA","Foam"],["D94972","Cabaret"],["D99376","Burning Sand"],["D9B99B","Cameo"],["D9D6CF","Timberwolf"],["D9DCC1","Tana"],["D9E4F5","Link Water"],["D9F7FF","Mabel"],["DA3287","Cerise"],["DA5B38","Flame Pea"],["DA6304","Bamboo"],["DA6A41","Red Damask"],["DA70D6","Orchid"],["DA8A67","Copperfield"],["DAA520","Golden Grass"],["DAECD6","Zanah"],["DAF4F0","Iceberg"],["DAFAFF","Oyster Bay"],["DB5079","Cranberry"],["DB9690","Petite Orchid"],["DB995E","Di Serria"],["DBDBDB","Alto"],["DBFFF8","Frosted Mint"],["DC143C","Crimson"],["DC4333","Punch"],["DCB20C","Galliano"],["DCB4BC","Blossom"],["DCD747","Wattle"],["DCD9D2","Westar"],["DCDDCC","Moon Mist"],["DCEDB4","Caper"],["DCF0EA","Swans Down"],["DDD6D5","Swiss Coffee"],["DDF9F1","White Ice"],["DE3163","Cerise Red"],["DE6360","Roman"],["DEA681","Tumbleweed"],["DEBA13","Gold Tips"],["DEC196","Brandy"],["DECBC6","Wafer"],["DED4A4","Sapling"],["DED717","Barberry"],["DEE5C0","Beryl Green"],["DEF5FF","Pattens Blue"],["DF73FF","Heliotrope"],["DFBE6F","Apache"],["DFCD6F","Chenin"],["DFCFDB","Lola"],["DFECDA","Willow Brook"],["DFFF00","Chartreuse Yellow"],["E0B0FF","Mauve"],["E0B646","Anzac"],["E0B974","Harvest Gold"],["E0C095","Calico"],["E0FFFF","Baby Blue"],["E16865","Sunglo"],["E1BC64","Equator"],["E1C0C8","Pink Flare"],["E1E6D6","Periglacial Blue"],["E1EAD4","Kidnapper"],["E1F6E8","Tara"],["E25465","Mandy"],["E2725B","Terracotta"],["E28913","Golden Bell"],["E292C0","Shocking"],["E29418","Dixie"],["E29CD2","Light Orchid"],["E2D8ED","Snuff"],["E2EBED","Mystic"],["E2F3EC","Apple Green"],["E30B5C","Razzmatazz"],["E32636","Alizarin Crimson"],["E34234","Cinnabar"],["E3BEBE","Cavern Pink"],["E3F5E1","Peppermint"],["E3F988","Mindaro"],["E47698","Deep Blush"],["E49B0F","Gamboge"],["E4C2D5","Melanie"],["E4CFDE","Twilight"],["E4D1C0","Bone"],["E4D422","Sunflower"],["E4D5B7","Grain Brown"],["E4D69B","Zombie"],["E4F6E7","Frostee"],["E4FFD1","Snow Flurry"],["E52B50","Amaranth"],["E5841B","Zest"],["E5CCC9","Dust Storm"],["E5D7BD","Stark White"],["E5D8AF","Hampton"],["E5E0E1","Bon Jour"],["E5E5E5","Mercury"],["E5F9F6","Polar"],["E64E03","Trinidad"],["E6BE8A","Gold Sand"],["E6BEA5","Cashmere"],["E6D7B9","Double Spanish White"],["E6E4D4","Satin Linen"],["E6F2EA","Harp"],["E6F8F3","Off Green"],["E6FFE9","Hint of Green"],["E6FFFF","Tranquil"],["E77200","Mango Tango"],["E7730A","Christine"],["E79F8C","Tonys Pink"],["E79FC4","Kobi"],["E7BCB4","Rose Fog"],["E7BF05","Corn"],["E7CD8C","Putty"],["E7ECE6","Gray Nurse"],["E7F8FF","Lily White"],["E7FEFF","Bubbles"],["E89928","Fire Bush"],["E8B9B3","Shilo"],["E8E0D5","Pearl Bush"],["E8EBE0","Green White"],["E8F1D4","Chrome White"],["E8F2EB","Gin"],["E8F5F2","Aqua Squeeze"],["E96E00","Clementine"],["E97451","Burnt Sienna"],["E97C07","Tahiti Gold"],["E9CECD","Oyster Pink"],["E9D75A","Confetti"],["E9E3E3","Ebb"],["E9F8ED","Ottoman"],["E9FFFD","Clear Day"],["EA88A8","Carissma"],["EAAE69","Porsche"],["EAB33B","Tulip Tree"],["EAC674","Rob Roy"],["EADAB8","Raffia"],["EAE8D4","White Rock"],["EAF6EE","Panache"],["EAF6FF","Solitude"],["EAF9F5","Aqua Spring"],["EAFFFE","Dew"],["EB9373","Apricot"],["EBC2AF","Zinnwaldite"],["ECA927","Fuel Yellow"],["ECC54E","Ronchi"],["ECC7EE","French Lilac"],["ECCDB9","Just Right"],["ECE090","Wild Rice"],["ECEBBD","Fall Green"],["ECEBCE","Aths Special"],["ECF245","Starship"],["ED0A3F","Red Ribbon"],["ED7A1C","Tango"],["ED9121","Carrot Orange"],["ED989E","Sea Pink"],["EDB381","Tacao"],["EDC9AF","Desert Sand"],["EDCDAB","Pancho"],["EDDCB1","Chamois"],["EDEA99","Primrose"],["EDF5DD","Frost"],["EDF5F5","Aqua Haze"],["EDF6FF","Zumthor"],["EDF9F1","Narvik"],["EDFC84","Honeysuckle"],["EE82EE","Lavender Magenta"],["EEC1BE","Beauty Bush"],["EED794","Chalky"],["EED9C4","Almond"],["EEDC82","Flax"],["EEDEDA","Bizarre"],["EEE3AD","Double Colonial White"],["EEEEE8","Cararra"],["EEEF78","Manz"],["EEF0C8","Tahuna Sands"],["EEF0F3","Athens Gray"],["EEF3C3","Tusk"],["EEF4DE","Loafer"],["EEF6F7","Catskill White"],["EEFDFF","Twilight Blue"],["EEFF9A","Jonquil"],["EEFFE2","Rice Flower"],["EF863F","Jaffa"],["EFEFEF","Gallery"],["EFF2F3","Porcelain"],["F091A9","Mauvelous"],["F0D52D","Golden Dream"],["F0DB7D","Golden Sand"],["F0DC82","Buff"],["F0E2EC","Prim"],["F0E68C","Khaki"],["F0EEFD","Selago"],["F0EEFF","Titan White"],["F0F8FF","Alice Blue"],["F0FCEA","Feta"],["F18200","Gold Drop"],["F19BAB","Wewak"],["F1E788","Sahara Sand"],["F1E9D2","Parchment"],["F1E9FF","Blue Chalk"],["F1EEC1","Mint Julep"],["F1F1F1","Seashell"],["F1F7F2","Saltpan"],["F1FFAD","Tidal"],["F1FFC8","Chiffon"],["F2552A","Flamingo"],["F28500","Tangerine"],["F2C3B2","Mandys Pink"],["F2F2F2","Concrete"],["F2FAFA","Black Squeeze"],["F34723","Pomegranate"],["F3AD16","Buttercup"],["F3D69D","New Orleans"],["F3D9DF","Vanilla Ice"],["F3E7BB","Sidecar"],["F3E9E5","Dawn Pink"],["F3EDCF","Wheatfield"],["F3FB62","Canary"],["F3FBD4","Orinoco"],["F3FFD8","Carla"],["F400A1","Hollywood Cerise"],["F4A460","Sandy brown"],["F4C430","Saffron"],["F4D81C","Ripe Lemon"],["F4EBD3","Janna"],["F4F2EE","Pampas"],["F4F4F4","Wild Sand"],["F4F8FF","Zircon"],["F57584","Froly"],["F5C85C","Cream Can"],["F5C999","Manhattan"],["F5D5A0","Maize"],["F5DEB3","Wheat"],["F5E7A2","Sandwisp"],["F5E7E2","Pot Pourri"],["F5E9D3","Albescent White"],["F5EDEF","Soft Peach"],["F5F3E5","Ecru White"],["F5F5DC","Beige"],["F5FB3D","Golden Fizz"],["F5FFBE","Australian Mint"],["F64A8A","French Rose"],["F653A6","Brilliant Rose"],["F6A4C9","Illusion"],["F6F0E6","Merino"],["F6F7F7","Black Haze"],["F6FFDC","Spring Sun"],["F7468A","Violet Red"],["F77703","Chilean Fire"],["F77FBE","Persian Pink"],["F7B668","Rajah"],["F7C8DA","Azalea"],["F7DBE6","We Peep"],["F7F2E1","Quarter Spanish White"],["F7F5FA","Whisper"],["F7FAF7","Snow Drift"],["F8B853","Casablanca"],["F8C3DF","Chantilly"],["F8D9E9","Cherub"],["F8DB9D","Marzipan"],["F8DD5C","Energy Yellow"],["F8E4BF","Givry"],["F8F0E8","White Linen"],["F8F4FF","Magnolia"],["F8F6F1","Spring Wood"],["F8F7DC","Coconut Cream"],["F8F7FC","White Lilac"],["F8F8F7","Desert Storm"],["F8F99C","Texas"],["F8FACD","Corn Field"],["F8FDD3","Mimosa"],["F95A61","Carnation"],["F9BF58","Saffron Mango"],["F9E0ED","Carousel Pink"],["F9E4BC","Dairy Cream"],["F9E663","Portica"],["F9EAF3","Amour"],["F9F8E4","Rum Swizzle"],["F9FF8B","Dolly"],["F9FFF6","Sugar Cane"],["FA7814","Ecstasy"],["FA9D5A","Tan Hide"],["FAD3A2","Corvette"],["FADFAD","Peach Yellow"],["FAE600","Turbo"],["FAEAB9","Astra"],["FAECCC","Champagne"],["FAF0E6","Linen"],["FAF3F0","Fantasy"],["FAF7D6","Citrine White"],["FAFAFA","Alabaster"],["FAFDE4","Hint of Yellow"],["FAFFA4","Milan"],["FB607F","Brink Pink"],["FB8989","Geraldine"],["FBA0E3","Lavender Rose"],["FBA129","Sea Buckthorn"],["FBAC13","Sun"],["FBAED2","Lavender Pink"],["FBB2A3","Rose Bud"],["FBBEDA","Cupid"],["FBCCE7","Classic Rose"],["FBCEB1","Apricot Peach"],["FBE7B2","Banana Mania"],["FBE870","Marigold Yellow"],["FBE96C","Festival"],["FBEA8C","Sweet Corn"],["FBEC5D","Candy Corn"],["FBF9F9","Hint of Red"],["FBFFBA","Shalimar"],["FC0FC0","Shocking Pink"],["FC80A5","Tickle Me Pink"],["FC9C1D","Tree Poppy"],["FCC01E","Lightning Yellow"],["FCD667","Goldenrod"],["FCD917","Candlelight"],["FCDA98","Cherokee"],["FCF4D0","Double Pearl Lusta"],["FCF4DC","Pearl Lusta"],["FCF8F7","Vista White"],["FCFBF3","Bianca"],["FCFEDA","Moon Glow"],["FCFFE7","China Ivory"],["FCFFF9","Ceramic"],["FD0E35","Torch Red"],["FD5B78","Wild Watermelon"],["FD7B33","Crusta"],["FD7C07","Sorbus"],["FD9FA2","Sweet Pink"],["FDD5B1","Light Apricot"],["FDD7E4","Pig Pink"],["FDE1DC","Cinderella"],["FDE295","Golden Glow"],["FDE910","Lemon"],["FDF5E6","Old Lace"],["FDF6D3","Half Colonial White"],["FDF7AD","Drover"],["FDFEB8","Pale Prim"],["FDFFD5","Cumulus"],["FE28A2","Persian Rose"],["FE4C40","Sunset Orange"],["FE6F5E","Bittersweet"],["FE9D04","California"],["FEA904","Yellow Sea"],["FEBAAD","Melon"],["FED33C","Bright Sun"],["FED85D","Dandelion"],["FEDB8D","Salomie"],["FEE5AC","Cape Honey"],["FEEBF3","Remy"],["FEEFCE","Oasis"],["FEF0EC","Bridesmaid"],["FEF2C7","Beeswax"],["FEF3D8","Bleach White"],["FEF4CC","Pipi"],["FEF4DB","Half Spanish White"],["FEF4F8","Wisp Pink"],["FEF5F1","Provincial Pink"],["FEF7DE","Half Dutch White"],["FEF8E2","Solitaire"],["FEF8FF","White Pointer"],["FEF9E3","Off Yellow"],["FEFCED","Orange White"],["FF0000","Red"],["FF007F","Rose"],["FF00CC","Purple Pizzazz"],["FF00FF","Magenta / Fuchsia"],["FF2400","Scarlet"],["FF3399","Wild Strawberry"],["FF33CC","Razzle Dazzle Rose"],["FF355E","Radical Red"],["FF3F34","Red Orange"],["FF4040","Coral Red"],["FF4D00","Vermilion"],["FF4F00","International Orange"],["FF6037","Outrageous Orange"],["FF6600","Blaze Orange"],["FF66FF","Pink Flamingo"],["FF681F","Orange"],["FF69B4","Hot Pink"],["FF6B53","Persimmon"],["FF6FFF","Blush Pink"],["FF7034","Burning Orange"],["FF7518","Pumpkin"],["FF7D07","Flamenco"],["FF7F00","Flush Orange"],["FF7F50","Coral"],["FF8C69","Salmon"],["FF9000","Pizazz"],["FF910F","West Side"],["FF91A4","Pink Salmon"],["FF9933","Neon Carrot"],["FF9966","Atomic Tangerine"],["FF9980","Vivid Tangerine"],["FF9E2C","Sunshade"],["FFA000","Orange Peel"],["FFA194","Mona Lisa"],["FFA500","Web Orange"],["FFA6C9","Carnation Pink"],["FFAB81","Hit Pink"],["FFAE42","Yellow Orange"],["FFB0AC","Cornflower Lilac"],["FFB1B3","Sundown"],["FFB31F","My Sin"],["FFB555","Texas Rose"],["FFB7D5","Cotton Candy"],["FFB97B","Macaroni and Cheese"],["FFBA00","Selective Yellow"],["FFBD5F","Koromiko"],["FFBF00","Amber"],["FFC0A8","Wax Flower"],["FFC0CB","Pink"],["FFC3C0","Your Pink"],["FFC901","Supernova"],["FFCBA4","Flesh"],["FFCC33","Sunglow"],["FFCC5C","Golden Tainoi"],["FFCC99","Peach Orange"],["FFCD8C","Chardonnay"],["FFD1DC","Pastel Pink"],["FFD2B7","Romantic"],["FFD38C","Grandis"],["FFD700","Gold"],["FFD800","School bus Yellow"],["FFD8D9","Cosmos"],["FFDB58","Mustard"],["FFDCD6","Peach Schnapps"],["FFDDAF","Caramel"],["FFDDCD","Tuft Bush"],["FFDDCF","Watusi"],["FFDDF4","Pink Lace"],["FFDEAD","Navajo White"],["FFDEB3","Frangipani"],["FFE1DF","Pippin"],["FFE1F2","Pale Rose"],["FFE2C5","Negroni"],["FFE5A0","Cream Brulee"],["FFE5B4","Peach"],["FFE6C7","Tequila"],["FFE772","Kournikova"],["FFEAC8","Sandy Beach"],["FFEAD4","Karry"],["FFEC13","Broom"],["FFEDBC","Colonial White"],["FFEED8","Derby"],["FFEFA1","Vis Vis"],["FFEFC1","Egg White"],["FFEFD5","Papaya Whip"],["FFEFEC","Fair Pink"],["FFF0DB","Peach Cream"],["FFF0F5","Lavender blush"],["FFF14F","Gorse"],["FFF1B5","Buttermilk"],["FFF1D8","Pink Lady"],["FFF1EE","Forget Me Not"],["FFF1F9","Tutu"],["FFF39D","Picasso"],["FFF3F1","Chardon"],["FFF46E","Paris Daisy"],["FFF4CE","Barley White"],["FFF4DD","Egg Sour"],["FFF4E0","Sazerac"],["FFF4E8","Serenade"],["FFF4F3","Chablis"],["FFF5EE","Seashell Peach"],["FFF5F3","Sauvignon"],["FFF6D4","Milk Punch"],["FFF6DF","Varden"],["FFF6F5","Rose White"],["FFF8D1","Baja White"],["FFF9E2","Gin Fizz"],["FFF9E6","Early Dawn"],["FFFACD","Lemon Chiffon"],["FFFAF4","Bridal Heath"],["FFFBDC","Scotch Mist"],["FFFBF9","Soapstone"],["FFFC99","Witch Haze"],["FFFCEA","Buttery White"],["FFFCEE","Island Spice"],["FFFDD0","Cream"],["FFFDE6","Chilean Heath"],["FFFDE8","Travertine"],["FFFDF3","Orchid White"],["FFFDF4","Quarter Pearl Lusta"],["FFFEE1","Half and Half"],["FFFEEC","Apricot White"],["FFFEF0","Rice Cake"],["FFFEF6","Black White"],["FFFEFD","Romance"],["FFFF00","Yellow"],["FFFF66","Laser Lemon"],["FFFF99","Pale Canary"],["FFFFB4","Portafino"],["FFFFF0","Ivory"],["FFFFFF","White"]]};

/**
 * Check color contrast according to WCAG 2.0 spec
 * @namespace ColorContrast
 * @see http://www.w3.org/TR/WCAG20-TECHS/G17.html
 * @author Alexey Androsov <doochik@ya.ru>, Sergey Gorobtsov <grey-evil@ya.ru>
 * @licence GPLv3
 * @version 0.11
 */
var WCAGColorContrast = {
	/**
	 * Calculate contast ratio beetween rgb1 and rgb2
	 * @param {String} rgb1 6-letter RGB color.
	 * @param {String} rgb2 6-letter RGB color.
	 * @return {Number}
	 */
	ratio: function (rgb1, rgb2) {
		if (this.validRGB(rgb1)) {
			var sRGB1 = this.RGBtosRGB(rgb1);
		} else {
			throw 'Invalid color ' + rgb1;
		}
		if (this.validRGB(rgb2)) {
			var sRGB2 = this.RGBtosRGB(rgb2);
		} else {
			throw 'Invalid color ' + rgb2;
		}
		var L1 = this.sRGBLightness(sRGB1);
		var L2 = this.sRGBLightness(sRGB2);
		/*
		 Calculate the contrast ratio using the following formula.
		 (L1 + 0.05) / (L2 + 0.05), where
		 L1 is the relative luminance of the lighter of the foreground or background colors, and
		 L2 is the relative luminance of the darker of the foreground or background colors.
		 */
		return L1 > L2 ? (L1 + 0.05) / (L2 + 0.05) : (L2 + 0.05) / (L1 + 0.05);
	},
	/**
	 * Convert RGB color to sRGB
	 * @param {String} rgb 6-letter RGB color.
	 * @return {Number[]} [R, G, B]
	 */
	RGBtosRGB: function (rgb) {
		if (rgb.length === 3) {
			rgb += rgb;
		}
		return [
				parseInt(rgb.slice(0, 2), 16) / 255,
				parseInt(rgb.slice(2, 4), 16) / 255,
				parseInt(rgb.slice(4, 6), 16) / 255
		];
	},
	/**
	 * Calculate lightness for sRGB color.
	 * @param {Number[]} sRGB sRGB color [R, G, B]
	 * @return {Number}
	 */
	sRGBLightness: function (sRGB) {
		// L = 0.2126 * R + 0.7152 * G + 0.0722 * B where R, G and B are defined as
		// if R <= 0.03928 then R = R sRGB /12.92 else R = ((R sRGB +0.055)/1.055) ^ 2.4
		// if G <= 0.03928 then G = G sRGB /12.92 else G = ((G sRGB +0.055)/1.055) ^ 2.4
		// if B <= 0.03928 then B = B sRGB /12.92 else B = ((B sRGB +0.055)/1.055) ^ 2.4
		var RsRGB = sRGB[0];
		var GsRGB = sRGB[1];
		var BsRGB = sRGB[2];
		return 0.2126 * (RsRGB <= 0.03928 ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4)) +
			0.7152 * (GsRGB <= 0.03928 ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4)) +
			0.0722 * (BsRGB <= 0.03928 ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4));
	},
	/**
	 * Validate RGB string.
	 * @param {String} rgb Color.
	 * @return {Boolean}
	 */
	validRGB: function (rgb) {
		return rgb && (/^[a-f0-9]{3}$/i.test(rgb) || /^[a-f0-9]{6}$/i.test(rgb));
	}
};

/* Copyright (c) 2010-2013 Marcus Westin */
(function(e){function o(){try{return r in e&&e[r]}catch(t){return!1}}var t={},n=e.document,r="localStorage",i="script",s;t.disabled=!1,t.set=function(e,t){},t.get=function(e){},t.remove=function(e){},t.clear=function(){},t.transact=function(e,n,r){var i=t.get(e);r==null&&(r=n,n=null),typeof i=="undefined"&&(i=n||{}),r(i),t.set(e,i)},t.getAll=function(){},t.forEach=function(){},t.serialize=function(e){return JSON.stringify(e)},t.deserialize=function(e){if(typeof e!="string")return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}};if(o())s=e[r],t.set=function(e,n){return n===undefined?t.remove(e):(s.setItem(e,t.serialize(n)),n)},t.get=function(e){return t.deserialize(s.getItem(e))},t.remove=function(e){s.removeItem(e)},t.clear=function(){s.clear()},t.getAll=function(){var e={};return t.forEach(function(t,n){e[t]=n}),e},t.forEach=function(e){for(var n=0;n<s.length;n++){var r=s.key(n);e(r,t.get(r))}};else if(n.documentElement.addBehavior){var u,a;try{a=new ActiveXObject("htmlfile"),a.open(),a.write("<"+i+">document.w=window</"+i+'><iframe src="/favicon.ico"></iframe>'),a.close(),u=a.w.frames[0].document,s=u.createElement("div")}catch(f){s=n.createElement("div"),u=n.body}function l(e){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(s),u.appendChild(s),s.addBehavior("#default#userData"),s.load(r);var i=e.apply(t,n);return u.removeChild(s),i}}var c=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function h(e){return e.replace(/^d/,"___$&").replace(c,"___")}t.set=l(function(e,n,i){return n=h(n),i===undefined?t.remove(n):(e.setAttribute(n,t.serialize(i)),e.save(r),i)}),t.get=l(function(e,n){return n=h(n),t.deserialize(e.getAttribute(n))}),t.remove=l(function(e,t){t=h(t),e.removeAttribute(t),e.save(r)}),t.clear=l(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(r);for(var n=0,i;i=t[n];n++)e.removeAttribute(i.name);e.save(r)}),t.getAll=function(e){var n={};return t.forEach(function(e,t){n[e]=t}),n},t.forEach=l(function(e,n){var r=e.XMLDocument.documentElement.attributes;for(var i=0,s;s=r[i];++i)n(s.name,t.deserialize(e.getAttribute(s.name)))})}try{var p="__storejs__";t.set(p,p),t.get(p)!=p&&(t.disabled=!0),t.remove(p)}catch(f){t.disabled=!0}t.enabled=!t.disabled,typeof module!="undefined"&&module.exports&&this.module!==module?module.exports=t:typeof define=="function"&&define.amd?define(t):e.store=t})(Function("return this")());


(function ($) {
	$(document).ready(function () {
		var $input = $('#rgbinput');
		var $infoContainer = $('.other');
		var $opposite = $('.opposite');
		var $container = $('.container');
		var $sass = $('.sass');
		var $message = $('.message');
		var $contrast = $('.contrast-example');
		var $colorList = $('.color-list');
		var $charcount = $('.char-count');

		var wcagBackground = 'ffffff';
		var storageKey = 'rgbto-colors';
		var currentColor;
		var colorList = [];

//		$input.val('#' + rgbToHex(intToRgb(getRandomInRange(1, 16777216))));

		ntc.init();

		checkAndupdate($input.val());
		updateColorStore();

		$input.on('change paste keyup', function () {
			checkAndupdate($(this).val());
		});

		$(document).on('click', '.color-list a', function(e) {
			$input.val($(this).data('color'));
			$input.change();
			e.preventDefault();
		});

		$contrast.click(function(e){
			if(currentColor){
				wcagBackground = currentColor;
				$contrast.css({'background': '#'+wcagBackground});
			}
		});

		function checkAndupdate(value) {
			var validColor = validColorProps(value);

			if (value) {
				$container.addClass('has-color');
			}

			if (validColor) {
				var hex;
				var rgb;
				var colorStr;

				console.log(validColor);

				switch (validColor.type) {
					// @todo: Add cmyk / hsl support
					case 'rgb':
						rgb = validColor.string;
						hex = '#' + rgbToHex(validColor.raw);
						colorStr = hex;
						break;
					case 'hex':
						rgb = hexToRgb(validColor.raw, true);
						hex = validColor.string;
						colorStr = rgb;
						break;
				}

				currentColor = hex.replace('#', '');
				updateColorStore(rgb);

				var contrastText = WCAGColorContrast.ratio(currentColor, wcagBackground) >= 7 ? 'WCAG Pass' : 'WCAG Fail';

				// Content
				$opposite.text(colorStr);
				$sass.text('$' + ntc.name(hex)[1].toLowerCase().replace(' ', '') + ': ' + hex.toUpperCase()+';');
				$message.text(contrastText);
				$contrast.css({'color': '#'+currentColor, 'background': '#'+wcagBackground});

				// Style
				$container.css('background', validColor.string);
				$infoContainer.removeClass('light-theme, dark-theme').addClass(darkOrLight(hexToRgb(hex)));
			}

			$charcount.text('chars: '+value.length+' words: '+value.split(' ').length);
		}

		function updateColorStore(newColor) {
			colorList = store.get(storageKey);

			if (colorList) {
				colorList = JSON.parse(store.get(storageKey));

				if(newColor && colorList.indexOf(newColor) === -1) {
					colorList.push(newColor);
				}
				store.set(storageKey, JSON.stringify(colorList));
				updateColorListHtml(colorList);
			} else {
				store.set(storageKey, JSON.stringify([newColor]));
				updateColorListHtml([newColor]);
			}
		}

		function updateColorListHtml(colors) {
			var html = [];
			for (var i = 0; i < colors.length-1; i++) {
				html.push($('<a href="#"/>').css('background', colors[i]).attr('data-color', colors[i]));
			}
			$colorList.html(html);
		}

	});



	function validColorProps(value) {

		if (value.indexOf(',') !== -1) {
			// support rgb(0,0,0);
			// support rgba(0,0,0,0);

			var rgb = value.trim().replace(/rgba?\(/, '').replace(')', '').split(',').filter(hasValue).filter(le255);
			switch (true) {
				// Support r:106 g:6 b:106
				case rgb.length == 3:
					return {
						string: 'rgb(' + rgb.join(',') + ')',
						raw: rgb,
						type: 'rgb'
					};
				case rgb.length == 4:
					if (rgb[3] > 1) {
						return false;
					}
					return {
						string: 'rgba(' + rgb.join(',') + ')',
						raw: rgb,
						type: 'rgb'
					};
				default:
					return false;
			}
		} else if (value.indexOf('R') !== -1) {
			// support R:252 G:252 B:252
			// support (R145 / G145 / B149)

			var rgb = value.replace(/:/g, '')
				.replace(/\(/g, '')
				.replace(/\)/g, '')
				.replace(/\//g, '')
				.replace(/ /g, '')
				.toLowerCase()
				.split(/r|g|b/)
				.filter(function(elm) { return elm.length > 0; })

			return {
				string: 'rgb(' + rgb.join(',') + ')',
				raw: rgb,
				type: 'rgb'
			};
		} else {
			// support #000000
			// support #000

			var hex = value.trim().replace('#', '');
			var validChars = 'abcedfABCDEF0123456789';

			if ((hex.length == 3 || hex.length == 6) && containsOnlyChars(validChars, hex)) {
				return {
					string: '#' + hex,
					raw: hex,
					type: 'hex'
				};
			}
			return false;
		}
	}

	function le255(number) {
		return number <= 255;
	}

	function hasValue(string) {
		return string.replace(new RegExp(/\s/g), '').length > 0;
	}

	function containsOnlyChars(needles, stack) {
		for (var i = 0; i < needles.length; i++) {
			stack = stack.replace(new RegExp(needles[i], 'g'), '');
			if(stack.length === 0) {
				return true;
			}
		}
		return false;
	}

	function hexToRgb(hex, asString) {
		var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, function (m, r, g, b) {
			return r + r + g + g + b + b;
		});

		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (asString) {
			return result ? 'rgb(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ')' : null;
		} else {
			return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
		}
	}

	function rgbToHex(rgb) {
		return ((1 << 24) + (parseInt(rgb[0], 10) << 16) + (parseInt(rgb[1], 10) << 8) + parseInt(rgb[2], 10)).toString(16).slice(1);
	}

	function darkOrLight(rgb) {
		var brightness;
		brightness = (parseInt(rgb[0], 10) * 299) + (parseInt(rgb[1], 10) * 587) + parseInt((rgb[2], 10) * 114);
		brightness = brightness / 255000;

		if (brightness >= 0.5) {
			return 'dark-theme';
		} else {
			return 'light-theme';
		}
	}

	function getRandomInRange(from, to) {
		return (Math.random() * (to - from) + from).toFixed(0) * 1;
	}

	function intToRgb(colour) {
		return [(colour >> 0x10) % 256, (colour >> 0x8) % 256, (colour >> 0x00) % 256];
	}
})(jQuery);