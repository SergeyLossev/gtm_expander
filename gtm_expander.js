javascript: /* GTM - разворачивание тегов для быстрого просмотра (c) SergeyLossev */ 
!function(){
    document.body.style.backgroundColor='pink';
    var div_cl = $('div.gtm-cloaked-ready'); div_cl.css('background-color','pink');
    var fb = 'https://www.facebook.com/LossevSergey', title = document.title;
	var st = 'border-right: 1px dotted grey; padding-bottom: 1px; padding-top: 1px; height: 10px; line-height: 13px; margin: 1px; ';
	var reduce_object=(obj)=>obj&&Object.entries(obj).reduce((sum,[k,v])=>sum+' '+k+'="'+v+'"','')||'';
	'table,tr,td,a,span,pre,textarea,col,colgroup,div'.split(',').forEach(tag=>{
		String.prototype[tag]=function(obj){return'<'+tag+reduce_object(obj)+'>'+this+'</'+tag+'>';};
	});
	
	if (!$('div.card-title>div>.ser_exp').length)
		$('div.card-title>div').html($('div.card-title>div')[0].innerHTML+ ' '
		+ '[expanded by (c) SergeyLossev]'.a({
			href  : fb,
			class :'ser_exp',
			target:'blank'
		}));
	
	$('.gtm-container-page').attr('style', 'display:contents');
	$('table.gtm-table--hide-empty.gtm-multiselect-table>colgroup>col:eq(1)').attr('width', '50%');

	var tags = [...$('.open-tag-button')], count=tags.length;
	tags.forEach((ahref_foreach)=>{
		var xhr = new XMLHttpRequest;
		xhr.ahref = ahref_foreach;
		xhr.open('get', ahref_foreach.hash.replace('#/container', 'https://tagmanager.google.com/api')+ahref_foreach.search);
		xhr.onload = function(){
            document.title = 'count: '+ --count;
			var default_data = JSON.parse(this.responseText.replace(")]}',", '')).default.data;
			this.ahref['param'] = default_data.vendorTemplate.param;

			var ahref = this.ahref,
			trtd = ahref.param.map(({key, value})=>{
				var types = {
					1: 'string',
					8: 'boolean'
				};
				var value_final = '';
				if (value.type in types) {
					type = types[value.type];
					value_final = value[type].toString().replace(/[\u00A0-\u9999<>\&]/g, (i)=>'&#'+i.charCodeAt(0)+';');
				}
				return (
					key.span({style:"margin: 1px;"}).td({
						class:'td_key_'+key,
						style:'width: 50%; '+st
					})+
					value_final.pre({style:"margin: 1px;"}).td({
						class:'td_val_'+key,
						style:'width: 100%; '+st+' overflow: auto;'
					})
				).tr({
					class:'tr_key_'+key,
					style:'line-height: 14px;'
				});
			}).join(''),
			userInstructions = ('userInstructions' in default_data) && default_data['userInstructions'] && default_data['userInstructions'].textarea().td({colspan:"2"}).tr()||'',
			div_outerHTML =
				('<col width="30%"><col width="70%">'.colgroup() + trtd + userInstructions)
				.table({style:"border: 1px dotted lightgrey; width: 100%"})
				.div({class:"ser"});

			if ($('.ser', ahref.parentElement).length) {
				ahref.parentElement.querySelector('.ser').outerHTML = div_outerHTML;
			} else {
				var div = document.createElement('div');
				ahref.parentElement.appendChild(div);
				div.outerHTML = div_outerHTML;
			}
            if (!count) {
                document.title = title;
                console.clear();
                console.log('(c) '+fb);
                document.body.style.backgroundColor='';
                div_cl.css('background-color','');
            }
		};
		xhr.send();
	});
}();
