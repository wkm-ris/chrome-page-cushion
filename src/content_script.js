//----------------------
$(function () {
    //遷移先URLと保存URLのホストが一致すれば煽る
    //保存URLは改行コードで切って回す
    var stored_url = chrome.storage.local.get(full_url, function(items){
    	stored_url = items.split(/\n/);
    	return stored_url;
    });
    //今urlと保存urlビンゴでクッションページに飛ぶ
    for (var one_stored_url in stored_url){
    	if (location.host == one_stored_url) {
    		chrome.runtime.sendMessage({current_page: document.title});
    		chrome.runtime.sendMessage({current_url: location.host});

    		window.location.href = 'cushion.html';
    		continue;
    	}
    }
});
