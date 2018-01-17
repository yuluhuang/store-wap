
/**
 * 获取首页默认地址
 */

export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});


/**
 * 获取首页热门城市
 */

export const hotcity = () => fetch('/v1/cities', {
	type: 'hot'
});


/**
 * 获取首页所有城市
 */

export const groupcity = () => fetch('/v1/cities', {
	type: 'group'
});


/**
 * 获取当前所在城市
 */

export const currentcity = number => fetch('/v1/cities/' + number);


/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => fetch('/v1/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});


/**
 * 获取msite页面地址信息
 */

export const msiteAdress = {"address":"安徽省安庆市宜秀区龙眠山路12-9号","city":"安徽省","geohash":"30.55367,117.07399","latitude":"30.55367","longitude":"117.07399","name":"宜秀区喜达商务宾馆(龙眠山北路西)"}


/**
 * 获取msite页面食品分类列表
 */

export const msiteFoodTypes = geohash => fetch('/v2/index_entry', {
	geohash,
	group_type: '1',
	'flags[]': 'F'
});


/**
 * 获取msite商铺列表
 */

export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
	let supportStr = '';
	support_ids.forEach(item => {
		if (item.status) {
			supportStr += '&support_ids[]=' + item.id;
		}
	});
	let data = {
		latitude,
		longitude,
		offset,
		limit: '20',
		'extras[]': 'activities',
		keyword: '',
		restaurant_category_id,
		'restaurant_category_ids[]': restaurant_category_ids,
		order_by,
		'delivery_mode[]': delivery_mode + supportStr
	};
	return fetch('/shopping/restaurants', data);
};


/**
 * 获取search页面搜索结果
 */

export const searchRestaurant = (geohash, keyword) => fetch('/v4/restaurants', {
	'extras[]': 'restaurant_activity',
	geohash,
	keyword,
	type: 'search'
});


/**
 * 获取food页面的 category 种类列表
 */

export const foodCategory = (latitude, longitude) => fetch('/shopping/v2/restaurant/category', {
	latitude,
	longitude
});


/**
 * 获取food页面的配送方式
 */

export const foodDelivery = (latitude, longitude) => fetch('/shopping/v1/restaurants/delivery_modes', {
	latitude,
	longitude,
	kw: ''
});


/**
 * 获取food页面的商家属性活动列表
 */

export const foodActivity = (latitude, longitude) => fetch('/shopping/v1/restaurants/activity_attributes', {
	latitude,
	longitude,
	kw: ''
});


/**
 * 获取shop页面商铺详情
 */

export const shopDetails = {"name":"演示","address":"地铁11号线支线,地铁11号线","id":1,"latitude":31.14123,"longitude":121.66807,"location":[121.66807,31.14123],"phone":"12387387234","category":"快餐便当/简餐","supports":[{"description":"已加入“外卖保”计划，食品安全有保障","icon_color":"999999","icon_name":"保","id":7,"name":"外卖保","_id":"5a22f885ec81ce77ee844995"},{"description":"准时必达，超时秒赔","icon_color":"57A9FF","icon_name":"准","id":9,"name":"准时达","_id":"5a22f885ec81ce77ee844994"},{"description":"该商家支持开发票，请在下单时填写好发票抬头","icon_color":"999999","icon_name":"票","id":4,"name":"开发票","_id":"5a22f885ec81ce77ee844993"}],"status":0,"recent_order_num":934,"rating_count":190,"rating":4.4,"promotion_info":"好吃多好吃的","piecewise_agent_fee":{"tips":"配送费约¥5"},"opening_hours":["05:30/23:00"],"license":{"catering_service_license_image":"160189a9e0b29.png","business_license_image":"1601898d52d27.png"},"is_new":true,"is_premium":true,"image_path":"16018a6492334.jpeg","identification":{"registered_number":"","registered_address":"","operation_period":"","licenses_scope":"","licenses_number":"","licenses_date":"","legal_person":"","identificate_date":null,"identificate_agency":"","company_name":""},"float_minimum_order_amount":20,"float_delivery_fee":5,"distance":"","order_lead_time":"","description":"好吃多好吃的","delivery_mode":{"color":"57A9FF","id":1,"is_solid":true,"text":"蜂鸟专送"},"activities":[{"icon_name":"减","name":"满减优惠","description":"满30减5，满60减8","icon_color":"f07373","id":1,"_id":"5a22f885ec81ce77ee844997"},{"icon_name":"特","name":"优惠大酬宾","description":"支付是对方是否的","icon_color":"EDC123","id":2,"_id":"5a22f885ec81ce77ee844996"}],"__v":0}



/**
 * 获取shop页面菜单列表
 */

export const foodMenu = [{"name":"热销榜","description":"大家喜欢吃，才叫真好吃。","id":2,"restaurant_id":1,"foods":[{"_id":"5a24b9683ba8590522fa70bf","tips":"809评价 月售545份","item_id":6,"category_id":2,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"bbb"},"image_path":"160211a2a2693.jpg","name":"德州扒鸡","__v":0,"specfoods":[{"specs_name":"默认","name":"德州扒鸡","item_id":6,"sku_id":330,"food_id":330,"restaurant_id":1,"_id":"5a40aaa19c2bc57d52deec62","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":324,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":2.2,"packing_fee":1,"pinyin_name":"","original_price":0}],"satisfy_rate":56,"satisfy_count":323,"attributes":[{"icon_color":"5ec452","icon_name":"新"}],"is_essential":false,"server_utc":"2017-12-03T12:37:27.907Z","specifications":[],"rating_count":809,"month_sales":545,"description":"地方小吃","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.5},{"_id":"5a251aa73ba8590522fa7321","tips":"435评价 月售374份","item_id":7,"category_id":2,"restaurant_id":1,"activity":null,"image_path":"16020f014f888.jpg","name":"吉祥馄饨","__v":0,"specfoods":[{"specs_name":"默认","name":"吉祥馄饨","item_id":7,"sku_id":335,"food_id":335,"restaurant_id":1,"_id":"5a40aadc9c2bc57d52deec7a","specs":[{"name":"规格","value":"默认","_id":"5a40aadc9c2bc57d52deec7b"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":602,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3.2,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"","name":"吉祥馄饨","item_id":7,"sku_id":336,"food_id":336,"restaurant_id":1,"_id":"5a40aadc9c2bc57d52deec78","specs":[{"name":"规格","value":"","_id":"5a40aadc9c2bc57d52deec79"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":521,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.2,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":14,"satisfy_count":172,"attributes":[{"icon_name":"招牌","icon_color":"f07373"}],"is_essential":false,"server_utc":"2017-12-03T12:37:27.907Z","specifications":[{"values":["默认",""],"name":"规格"}],"rating_count":435,"month_sales":374,"description":"地方特色主食","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.2},{"_id":"5a43095e9c2bc57d52def4be","tips":"617评价 月售188份","item_id":106,"category_id":2,"restaurant_id":1,"activity":null,"image_path":"16095dc91c01229.jpg","name":"啊啊啊","__v":0,"specfoods":[{"specs_name":"默认","name":"啊啊啊","item_id":106,"sku_id":411,"food_id":411,"restaurant_id":1,"_id":"5a43095e9c2bc57d52def4bf","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":993,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0,"packing_fee":1,"pinyin_name":"","original_price":0}],"satisfy_rate":10,"satisfy_count":524,"attributes":[],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":617,"month_sales":188,"description":"","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.8},{"_id":"5a4343de9c2bc57d52def65f","tips":"231评价 月售201份","item_id":109,"category_id":2,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"rrrrrrrrr"},"image_path":"16096c12a811245.jpg","name":"rrrrrrrr","__v":0,"specfoods":[{"specs_name":"默认","name":"rrrrrrrr","item_id":109,"sku_id":416,"food_id":416,"restaurant_id":1,"_id":"5a4343de9c2bc57d52def660","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":777,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":2,"packing_fee":2,"pinyin_name":"","original_price":0}],"satisfy_rate":1,"satisfy_count":223,"attributes":[{"icon_color":"f07373","icon_name":"招牌"}],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":231,"month_sales":201,"description":"rrrrrrrrrrrrr","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.9}],"type":1,"icon_url":"5da3872d782f707b4c82ce4607c73d1ajpeg","is_selected":true,"__v":48},{"name":"优惠","description":"美味又实惠, 大家快来抢!","id":3,"restaurant_id":1,"foods":[{"_id":"5a237c305e602c0c46e3b2ba","tips":"974评价 月售899份","item_id":3,"category_id":3,"restaurant_id":1,"activity":null,"image_path":"1601a9c8c2041.jpg","name":"米粉","__v":0,"specfoods":[{"specs_name":"默认","name":"米粉","item_id":3,"sku_id":398,"food_id":398,"restaurant_id":1,"_id":"5a420d619c2bc57d52def25a","specs":[{"name":"规格","value":"默认","_id":"5a420d619c2bc57d52def25b"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":564,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.3,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"中辣","name":"米粉","item_id":3,"sku_id":399,"food_id":399,"restaurant_id":1,"_id":"5a420d619c2bc57d52def258","specs":[{"name":"规格","value":"中辣","_id":"5a420d619c2bc57d52def259"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":996,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":73,"satisfy_count":906,"attributes":[{"icon_name":"新","icon_color":"5ec452"},{"icon_name":"招牌","icon_color":"f07373"}],"is_essential":false,"server_utc":"2017-12-02T19:07:11.840Z","specifications":[{"values":["默认","中辣"],"name":"规格"}],"rating_count":974,"month_sales":899,"description":"面粉","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.2},{"_id":"5a237ca05e602c0c46e3b2c1","tips":"114评价 月售358份","item_id":4,"category_id":3,"restaurant_id":1,"activity":null,"image_path":"1601a9ed72642.jpg","name":"凉皮2","__v":0,"specfoods":[{"specs_name":"默认","name":"凉皮2","item_id":4,"sku_id":20,"food_id":20,"restaurant_id":1,"_id":"5a24f0083ba8590522fa719c","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":395,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":4,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":84,"satisfy_count":31,"attributes":[{"icon_color":"f07373","icon_name":"招牌"}],"is_essential":false,"server_utc":"2017-12-02T19:07:11.840Z","specifications":[],"rating_count":114,"month_sales":358,"description":"done","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4},{"_id":"5a264b103ba8590522fa776e","tips":"917评价 月售49份","item_id":11,"category_id":3,"restaurant_id":1,"activity":null,"image_path":"160266f6e65151.jpg","name":"北京烤鸭","__v":0,"specfoods":[{"specs_name":"默认","name":"北京烤鸭","item_id":11,"sku_id":341,"food_id":341,"restaurant_id":1,"_id":"5a40ab4f9c2bc57d52deec8e","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":598,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":2.1,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":98,"satisfy_count":141,"attributes":[],"is_essential":false,"server_utc":"2017-12-03T12:37:27.907Z","specifications":[],"rating_count":917,"month_sales":49,"description":"老北京特色菜","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.3},{"_id":"5a28f7773ba8590522fa8025","tips":"380评价 月售412份","item_id":23,"category_id":3,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"i今年年"},"image_path":"1603006babd247.png","name":"‘；啦啦啦啦啦， ","__v":0,"specfoods":[{"specs_name":"默认","name":"‘；啦啦啦啦啦， ","item_id":23,"sku_id":525,"food_id":525,"restaurant_id":1,"_id":"5a4a3a399c2bc57d52df06ac","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":631,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.1,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":44,"satisfy_count":962,"attributes":[{"icon_color":"5ec452","icon_name":"新"},{"icon_color":"f07373","icon_name":"招牌"}],"is_essential":false,"server_utc":"2017-12-03T12:37:27.907Z","specifications":[],"rating_count":380,"month_sales":412,"description":"iiin","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":5},{"_id":"5a22fb555e602c0c46e3b210","tips":"248评价 月售635份","item_id":2,"category_id":3,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"是对方是否是对方是否的沙发上"},"image_path":"1601a3cdafe35.jpg","name":"汉堡","__v":0,"specfoods":[{"specs_name":"默认","name":"汉堡","item_id":2,"sku_id":332,"food_id":332,"restaurant_id":1,"_id":"5a40aaaf9c2bc57d52deec6f","specs":[{"name":"规格","value":"默认","_id":"5a40aaaf9c2bc57d52deec70"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":945,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1.8,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"sadsa","name":"汉堡","item_id":2,"sku_id":333,"food_id":333,"restaurant_id":1,"_id":"5a40aaaf9c2bc57d52deec6d","specs":[{"name":"规格","value":"sadsa","_id":"5a40aaaf9c2bc57d52deec6e"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":795,"sold_out":false,"price":21,"promotion_stock":-1,"recent_rating":3,"packing_fee":1,"pinyin_name":"","original_price":0},{"specs_name":"123","name":"汉堡","item_id":2,"sku_id":334,"food_id":334,"restaurant_id":1,"_id":"5a40aaaf9c2bc57d52deec6b","specs":[{"name":"规格","value":"123","_id":"5a40aaaf9c2bc57d52deec6c"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":768,"sold_out":false,"price":21,"promotion_stock":-1,"recent_rating":3,"packing_fee":1,"pinyin_name":"","original_price":0}],"satisfy_rate":27,"satisfy_count":470,"attributes":[{"icon_color":"5ec452","icon_name":"新"},{"icon_color":"f07373","icon_name":"招牌"}],"is_essential":false,"server_utc":"2017-12-02T19:07:11.840Z","specifications":[{"name":"规格","values":["默认","sadsa","123"]}],"rating_count":248,"month_sales":635,"description":"快餐","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.6},{"_id":"5a30e4eae003dc051d4ef6cd","tips":"803评价 月售108份","item_id":52,"category_id":3,"restaurant_id":1,"activity":null,"image_path":"1604efe04f5534.jpg","name":"jh123","__v":0,"specfoods":[{"specs_name":"默认","name":"jh123","item_id":52,"sku_id":146,"food_id":146,"restaurant_id":1,"_id":"5a30e4eae003dc051d4ef6ce","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":584,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1.4,"packing_fee":3,"pinyin_name":"","original_price":0}],"satisfy_rate":23,"satisfy_count":858,"attributes":[],"is_essential":false,"server_utc":"2017-12-11T15:23:48.203Z","specifications":[],"rating_count":803,"month_sales":108,"description":"","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.6},{"_id":"5a38c3a11ac38a078acc8879","tips":"445评价 月售521份","item_id":74,"category_id":3,"restaurant_id":1,"activity":{"image_text":"是","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"1606dbbe5b1849.jpg","name":"火腿肠","__v":0,"specfoods":[{"specs_name":"默认","name":"火腿肠","item_id":74,"sku_id":299,"food_id":299,"restaurant_id":1,"_id":"5a3dae239c2bc57d52dee7b1","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":563,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":26,"satisfy_count":144,"attributes":[{"icon_name":"招牌","icon_color":"f07373"},{"icon_name":"新","icon_color":"5ec452"}],"is_essential":false,"server_utc":"2017-12-16T14:54:26.519Z","specifications":[],"rating_count":445,"month_sales":521,"description":"是asd ","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.6},{"_id":"5a3db8419c2bc57d52dee7bf","tips":"734评价 月售690份","item_id":93,"category_id":3,"restaurant_id":1,"activity":{"image_text":"11111111111111","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"160811798b21041.jpg","name":"1111111111111111177","__v":0,"specfoods":[{"specs_name":"","name":"1111111111111111177","item_id":93,"sku_id":317,"food_id":317,"restaurant_id":1,"_id":"5a4070679c2bc57d52deead7","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":237,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":22,"satisfy_count":327,"attributes":[{"icon_name":"招牌","icon_color":"f07373"}],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":734,"month_sales":690,"description":"1111111111111111111111111","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.5},{"_id":"5a3a17941ac38a078acc8c8c","tips":"86评价 月售108份","item_id":83,"category_id":3,"restaurant_id":1,"activity":{"image_text":"111","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"16077b13001936.jpg","name":"碳烤羊腿","__v":0,"specfoods":[{"specs_name":"默认","name":"碳烤羊腿","item_id":83,"sku_id":374,"food_id":374,"restaurant_id":1,"_id":"5a41cbd29c2bc57d52def08e","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":168,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1.9,"packing_fee":1,"pinyin_name":"","original_price":0}],"satisfy_rate":71,"satisfy_count":387,"attributes":[{"icon_name":"招牌","icon_color":"f07373"}],"is_essential":false,"server_utc":"2017-12-16T14:54:26.519Z","specifications":[],"rating_count":86,"month_sales":108,"description":"吐鲁番美食","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.7},{"_id":"5a2f987be003dc051d4ef1be","tips":"874评价 月售602份","item_id":45,"category_id":3,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"asdfdasf"},"image_path":"16049eb7cbd461.png","name":"asfasf","__v":0,"specfoods":[{"specs_name":"默认","name":"asfasf","item_id":45,"sku_id":406,"food_id":406,"restaurant_id":1,"_id":"5a42fc009c2bc57d52def3e1","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":49,"sold_out":false,"price":23,"promotion_stock":-1,"recent_rating":0.4,"packing_fee":4,"pinyin_name":"","original_price":0}],"satisfy_rate":51,"satisfy_count":749,"attributes":[{"icon_color":"f07373","icon_name":"招牌"}],"is_essential":false,"server_utc":"2017-12-11T15:23:48.203Z","specifications":[],"rating_count":874,"month_sales":602,"description":"111111111111111112","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.6},{"_id":"5a436c619c2bc57d52def7d7","tips":"221评价 月售335份","item_id":113,"category_id":3,"restaurant_id":1,"activity":null,"image_path":"160975f65b21264.png","name":"3","__v":0,"specfoods":[{"specs_name":"xcxcx","name":"3","item_id":113,"sku_id":476,"food_id":476,"restaurant_id":1,"_id":"5a4516219c2bc57d52defeed","specs":[{"name":"规格","value":"xcxcx","_id":"5a4516219c2bc57d52defeee"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":742,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.2,"packing_fee":2,"pinyin_name":"","original_price":0},{"specs_name":"cccc","name":"3","item_id":113,"sku_id":477,"food_id":477,"restaurant_id":1,"_id":"5a4516219c2bc57d52defeeb","specs":[{"name":"规格","value":"cccc","_id":"5a4516219c2bc57d52defeec"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":542,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.5,"packing_fee":1,"pinyin_name":"","original_price":0},{"specs_name":"","name":"3","item_id":113,"sku_id":478,"food_id":478,"restaurant_id":1,"_id":"5a4516219c2bc57d52defee9","specs":[{"name":"规格","value":"","_id":"5a4516219c2bc57d52defeea"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":456,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"","name":"3","item_id":113,"sku_id":479,"food_id":479,"restaurant_id":1,"_id":"5a4516219c2bc57d52defee7","specs":[{"name":"规格","value":"","_id":"5a4516219c2bc57d52defee8"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":10,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":4.3,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"dfsds","name":"3","item_id":113,"sku_id":480,"food_id":480,"restaurant_id":1,"_id":"5a4516219c2bc57d52defee5","specs":[{"name":"规格","value":"dfsds","_id":"5a4516219c2bc57d52defee6"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":65,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":82,"satisfy_count":620,"attributes":[],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[{"values":["xcxcx","cccc","","","dfsds"],"name":"规格"}],"rating_count":221,"month_sales":335,"description":"自己退群吧","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.8},{"_id":"5a448f089c2bc57d52defbd0","tips":"88评价 月售268份","item_id":116,"category_id":3,"restaurant_id":1,"activity":{"image_text":"1","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"1609bcd07851307.JPG","name":"1","__v":0,"specfoods":[{"specs_name":"默认","name":"1","item_id":116,"sku_id":464,"food_id":464,"restaurant_id":1,"_id":"5a448f089c2bc57d52defbd1","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":984,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1.5,"packing_fee":1,"pinyin_name":"","original_price":0}],"satisfy_rate":11,"satisfy_count":354,"attributes":[{"icon_name":"招牌","icon_color":"f07373"}],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":88,"month_sales":268,"description":"1","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":5},{"_id":"5a45e6aa9c2bc57d52df0121","tips":"58评价 月售331份","item_id":121,"category_id":3,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"372722198501010101"},"image_path":"160a10cf2851386.jpg","name":"372722198501010101","__v":0,"specfoods":[{"specs_name":"默认","name":"372722198501010101","item_id":121,"sku_id":496,"food_id":496,"restaurant_id":1,"_id":"5a45e6aa9c2bc57d52df0122","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":13,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":4.8,"packing_fee":1,"pinyin_name":"","original_price":0}],"satisfy_rate":42,"satisfy_count":599,"attributes":[{"icon_color":"5ec452","icon_name":"新"}],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":58,"month_sales":331,"description":"372722198501010101","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.2},{"_id":"5a4c850f9c2bc57d52df0e1e","tips":"942评价 月售980份","item_id":135,"category_id":3,"restaurant_id":1,"activity":{"image_text":"1","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"160bc87a7941556.png","name":"1","__v":0,"specfoods":[{"specs_name":"默认","name":"1","item_id":135,"sku_id":568,"food_id":568,"restaurant_id":1,"_id":"5a4cef879c2bc57d52df1059","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":389,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3.4,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":48,"satisfy_count":814,"attributes":[],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":942,"month_sales":980,"description":"1","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.6},{"_id":"5a4dfc7e9c2bc57d52df1600","tips":"839评价 月售863份","item_id":143,"category_id":3,"restaurant_id":1,"activity":null,"image_path":"160c09d9a6a1613.png","name":"ssfsf","__v":0,"specfoods":[{"specs_name":"默认","name":"ssfsf","item_id":143,"sku_id":584,"food_id":584,"restaurant_id":1,"_id":"5a4e1d3c9c2bc57d52df1649","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":308,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1.3,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":34,"satisfy_count":723,"attributes":[],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":839,"month_sales":863,"description":"","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.9},{"_id":"5a4ee5919c2bc57d52df1782","tips":"204评价 月售227份","item_id":145,"category_id":3,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"3"},"image_path":"160c430791a1641.jpe","name":"2","__v":0,"specfoods":[{"specs_name":"默认","name":"2","item_id":145,"sku_id":623,"food_id":623,"restaurant_id":1,"_id":"5a5320d39c2bc57d52df2229","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":194,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":83,"satisfy_count":633,"attributes":[{"icon_color":"f07373","icon_name":"招牌"}],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":204,"month_sales":227,"description":"我叫程思颖","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.3},{"_id":"5a5701a29c2bc57d52df2e08","tips":"561评价 月售34份","item_id":164,"category_id":3,"restaurant_id":1,"activity":null,"image_path":"160e3de7fb42104.jpg","name":"分发多少","__v":0,"specfoods":[{"specs_name":"默认","name":"分发多少","item_id":164,"sku_id":706,"food_id":706,"restaurant_id":1,"_id":"5a5830c39c2bc57d52df3035","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":205,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":4.5,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":66,"satisfy_count":198,"attributes":[],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":561,"month_sales":34,"description":"","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.4}],"type":1,"icon_url":"4735c4342691749b8e1a531149a46117jpeg","is_selected":true,"__v":89},{"name":"饮料","description":"饮料","restaurant_id":1,"id":8,"foods":[{"_id":"5a23be5c5e602c0c46e3b310","tips":"61评价 月售534份","item_id":5,"category_id":8,"restaurant_id":1,"activity":{"image_text":"年末大优惠","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"1601f58257064.png","name":"冰红茶","__v":0,"specfoods":[{"specs_name":"默认","name":"冰红茶","item_id":5,"sku_id":73,"food_id":73,"restaurant_id":1,"_id":"5a27db1d3ba8590522fa7d52","specs":[{"name":"规格","value":"默认","_id":"5a27db1d3ba8590522fa7d53"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":784,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.8,"packing_fee":2,"pinyin_name":"","original_price":0},{"specs_name":"我的","name":"冰红茶","item_id":5,"sku_id":74,"food_id":74,"restaurant_id":1,"_id":"5a27db1d3ba8590522fa7d50","specs":[{"name":"规格","value":"我的","_id":"5a27db1d3ba8590522fa7d51"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":365,"sold_out":false,"price":22,"promotion_stock":-1,"recent_rating":1.1,"packing_fee":3,"pinyin_name":"","original_price":0}],"satisfy_rate":88,"satisfy_count":911,"attributes":[{"icon_name":"招牌","icon_color":"f07373"}],"is_essential":false,"server_utc":"2017-12-02T19:07:11.840Z","specifications":[{"values":["默认","我的"],"name":"规格"}],"rating_count":61,"month_sales":534,"description":"康师傅冰红茶","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.2},{"_id":"5a25254e3ba8590522fa7365","tips":"690评价 月售632份","item_id":8,"category_id":8,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"111"},"image_path":"1602119311f92.jpg","name":"蛋炒饭","__v":0,"specfoods":[{"specs_name":"默认","name":"蛋炒饭","item_id":8,"sku_id":337,"food_id":337,"restaurant_id":1,"_id":"5a40aaf79c2bc57d52deec80","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":542,"sold_out":false,"price":60,"promotion_stock":-1,"recent_rating":1.4,"packing_fee":20,"pinyin_name":"","original_price":0}],"satisfy_rate":8,"satisfy_count":565,"attributes":[{"icon_color":"f07373","icon_name":"招牌"}],"is_essential":false,"server_utc":"2017-12-03T12:37:27.907Z","specifications":[],"rating_count":690,"month_sales":632,"description":"美味中餐","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.9},{"_id":"5a25fb8d3ba8590522fa74d0","tips":"495评价 月售663份","item_id":9,"category_id":8,"restaurant_id":1,"activity":null,"image_path":"160245eaf9697.png","name":"家婆米线12","__v":0,"specfoods":[{"specs_name":"默认","name":"家婆米线12","item_id":9,"sku_id":510,"food_id":510,"restaurant_id":1,"_id":"5a47b7909c2bc57d52df04be","specs":[{"name":"规格","value":"默认","_id":"5a47b7909c2bc57d52df04bf"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":88,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3.2,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"点点滴滴","name":"家婆米线12","item_id":9,"sku_id":511,"food_id":511,"restaurant_id":1,"_id":"5a47b7909c2bc57d52df04bc","specs":[{"name":"规格","value":"点点滴滴","_id":"5a47b7909c2bc57d52df04bd"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":87,"sold_out":false,"price":24,"promotion_stock":-1,"recent_rating":1.2,"packing_fee":5,"pinyin_name":"","original_price":0}],"satisfy_rate":48,"satisfy_count":761,"attributes":[],"is_essential":false,"server_utc":"2017-12-03T12:37:27.907Z","specifications":[{"name":"规格","values":["默认","点点滴滴"]}],"rating_count":495,"month_sales":663,"description":"营养快餐","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.5},{"_id":"5a274b873ba8590522fa7a2a","tips":"560评价 月售770份","item_id":13,"category_id":8,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"12"},"image_path":"160297f0d49162.png","name":"叫花鸡","__v":0,"specfoods":[{"specs_name":"默认","name":"叫花鸡","item_id":13,"sku_id":344,"food_id":344,"restaurant_id":1,"_id":"5a40ab8e9c2bc57d52deec9c","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":109,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3.7,"packing_fee":2,"pinyin_name":"","original_price":0}],"satisfy_rate":46,"satisfy_count":921,"attributes":[{"icon_color":"5ec452","icon_name":"新"}],"is_essential":false,"server_utc":"2017-12-03T12:37:27.907Z","specifications":[],"rating_count":560,"month_sales":770,"description":"民间手艺","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.9},{"_id":"5a28ea463ba8590522fa7fda","tips":"409评价 月售788份","item_id":22,"category_id":8,"restaurant_id":1,"activity":{"image_text":"fsdf","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"1602fd332a1246.png","name":"fd","__v":0,"specfoods":[{"specs_name":"默认","name":"fd","item_id":22,"sku_id":81,"food_id":81,"restaurant_id":1,"_id":"5a28ed6a3ba8590522fa7ff7","specs":[{"name":"规格","value":"默认","_id":"5a28ed6a3ba8590522fa7ff8"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":373,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3.4,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"","name":"fd","item_id":22,"sku_id":82,"food_id":82,"restaurant_id":1,"_id":"5a28ed6a3ba8590522fa7ff5","specs":[{"name":"规格","value":"","_id":"5a28ed6a3ba8590522fa7ff6"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":15,"sold_out":false,"price":21,"promotion_stock":-1,"recent_rating":3.3,"packing_fee":1,"pinyin_name":"","original_price":0}],"satisfy_rate":14,"satisfy_count":957,"attributes":[],"is_essential":false,"server_utc":"2017-12-03T12:37:27.907Z","specifications":[{"values":["默认",""],"name":"规格"}],"rating_count":409,"month_sales":788,"description":"sdfsd","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.4},{"_id":"5a2a31623ba8590522fa8482","tips":"322评价 月售6份","item_id":29,"category_id":8,"restaurant_id":1,"activity":{"image_text":"是的","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"16034d0c7a2304.jpg","name":"无所谓","__v":0,"specfoods":[{"specs_name":"默认","name":"无所谓","item_id":29,"sku_id":107,"food_id":107,"restaurant_id":1,"_id":"5a2a31623ba8590522fa8483","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":135,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0,"packing_fee":1,"pinyin_name":"","original_price":0}],"satisfy_rate":61,"satisfy_count":190,"attributes":[{"icon_name":"新","icon_color":"5ec452"},{"icon_name":"招牌","icon_color":"f07373"}],"is_essential":false,"server_utc":"2017-12-03T12:37:27.907Z","specifications":[],"rating_count":322,"month_sales":6,"description":"任务","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.1},{"_id":"5a3b5e0a1ac38a078acc9017","tips":"764评价 月售414份","item_id":87,"category_id":8,"restaurant_id":1,"activity":null,"image_path":"1607836d797968.png","name":"桑拿小哥哥","__v":0,"specfoods":[{"specs_name":"默认","name":"桑拿小哥哥","item_id":87,"sku_id":296,"food_id":296,"restaurant_id":1,"_id":"5a3dae059c2bc57d52dee7ac","specs":[{"name":"规格","value":"默认","_id":"5a3dae059c2bc57d52dee7ad"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":550,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.6,"packing_fee":1,"pinyin_name":"","original_price":0},{"specs_name":"asfsf","name":"桑拿小哥哥","item_id":87,"sku_id":297,"food_id":297,"restaurant_id":1,"_id":"5a3dae059c2bc57d52dee7aa","specs":[{"name":"规格","value":"asfsf","_id":"5a3dae059c2bc57d52dee7ab"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":795,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":4.7,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":100,"satisfy_count":590,"attributes":[{"icon_color":"5ec452","icon_name":"新"}],"is_essential":false,"server_utc":"2017-12-16T14:54:26.519Z","specifications":[{"values":["默认","asfsf"],"name":"规格"}],"rating_count":764,"month_sales":414,"description":"撒旦发生","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.3},{"_id":"5a38c1e01ac38a078acc8872","tips":"44评价 月售901份","item_id":73,"category_id":8,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"1"},"image_path":"1606db51386848.jpg","name":"火腿肠","__v":0,"specfoods":[{"specs_name":"默认","name":"火腿肠","item_id":73,"sku_id":302,"food_id":302,"restaurant_id":1,"_id":"5a3db5d09c2bc57d52dee7bb","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":86,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.9,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":66,"satisfy_count":672,"attributes":[{"icon_color":"5ec452","icon_name":"新"}],"is_essential":false,"server_utc":"2017-12-16T14:54:26.519Z","specifications":[],"rating_count":44,"month_sales":901,"description":"1122","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.1},{"_id":"5a43442d9c2bc57d52def663","tips":"198评价 月售104份","item_id":110,"category_id":8,"restaurant_id":1,"activity":{"image_text":"ttttttttttttttttttt","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"16096c249e01246.jpg","name":"tttttttttt","__v":0,"specfoods":[{"specs_name":"默认","name":"tttttttttt","item_id":110,"sku_id":417,"food_id":417,"restaurant_id":1,"_id":"5a43442d9c2bc57d52def664","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":916,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.9,"packing_fee":1,"pinyin_name":"","original_price":0}],"satisfy_rate":93,"satisfy_count":818,"attributes":[{"icon_name":"新","icon_color":"5ec452"}],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":198,"month_sales":104,"description":"tttttttttttttt","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.5},{"_id":"5a4475379c2bc57d52defb14","tips":"37评价 月售575份","item_id":115,"category_id":8,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"as"},"image_path":"1609b69d4521298.JPG","name":"as","__v":0,"specfoods":[{"specs_name":"默认","name":"as","item_id":115,"sku_id":461,"food_id":461,"restaurant_id":1,"_id":"5a4475379c2bc57d52defb19","specs":[{"name":"规格","value":"默认","_id":"5a4475379c2bc57d52defb1a"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":369,"sold_out":false,"price":16,"promotion_stock":-1,"recent_rating":2.8,"packing_fee":8,"pinyin_name":"","original_price":0},{"specs_name":"as","name":"as","item_id":115,"sku_id":462,"food_id":462,"restaurant_id":1,"_id":"5a4475379c2bc57d52defb17","specs":[{"name":"规格","value":"as","_id":"5a4475379c2bc57d52defb18"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":823,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":2.6,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"asasa","name":"as","item_id":115,"sku_id":463,"food_id":463,"restaurant_id":1,"_id":"5a4475379c2bc57d52defb15","specs":[{"name":"规格","value":"asasa","_id":"5a4475379c2bc57d52defb16"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":785,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3.2,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":40,"satisfy_count":160,"attributes":[{"icon_color":"f07373","icon_name":"招牌"},{"icon_color":"5ec452","icon_name":"新"}],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[{"values":["默认","as","asasa"],"name":"规格"}],"rating_count":37,"month_sales":575,"description":"as","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.3},{"_id":"5a4b170e9c2bc57d52df0885","tips":"285评价 月售391份","item_id":129,"category_id":8,"restaurant_id":1,"activity":{"image_text":"12","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"160ba1780b71510.png","name":"1221","__v":0,"specfoods":[{"specs_name":"默认","name":"1221","item_id":129,"sku_id":541,"food_id":541,"restaurant_id":1,"_id":"5a4c4fc69c2bc57d52df0c85","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":611,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":2.9,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":69,"satisfy_count":234,"attributes":[{"icon_name":"新","icon_color":"5ec452"}],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":285,"month_sales":391,"description":"12","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.7},{"_id":"5a4da0049c2bc57d52df11d5","tips":"158评价 月售818份","item_id":141,"category_id":8,"restaurant_id":1,"activity":{"image_text":"aa","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"160bf3912c41576.PNG","name":"aa","__v":0,"specfoods":[{"specs_name":"默认","name":"aa","item_id":141,"sku_id":624,"food_id":624,"restaurant_id":1,"_id":"5a5333fb9c2bc57d52df238a","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":72,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":2.3,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":97,"satisfy_count":186,"attributes":[{"icon_name":"新","icon_color":"5ec452"}],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":158,"month_sales":818,"description":"aa","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.6},{"_id":"5a5341de9c2bc57d52df259e","tips":"831评价 月售619份","item_id":151,"category_id":8,"restaurant_id":1,"activity":null,"image_path":"160d556f0991813.jpg","name":"dkkk","__v":0,"specfoods":[{"specs_name":"默认","name":"dkkk","item_id":151,"sku_id":630,"food_id":630,"restaurant_id":1,"_id":"5a5382449c2bc57d52df2703","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":314,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1.3,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":34,"satisfy_count":856,"attributes":[{"icon_name":"新","icon_color":"5ec452"},{"icon_name":"招牌","icon_color":"f07373"}],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":831,"month_sales":619,"description":"","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.7},{"_id":"5a4f195b9c2bc57d52df1886","tips":"155评价 月售391份","item_id":148,"category_id":8,"restaurant_id":1,"activity":null,"image_path":"160c4fb14941664.jpg","name":"sdfsdfsdf","__v":0,"specfoods":[{"specs_name":"默认","name":"sdfsdfsdf","item_id":148,"sku_id":703,"food_id":703,"restaurant_id":1,"_id":"5a572ce09c2bc57d52df2ef0","specs":[{"name":"规格","value":"默认","_id":"5a572ce09c2bc57d52df2ef1"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":891,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3.9,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"554","name":"sdfsdfsdf","item_id":148,"sku_id":704,"food_id":704,"restaurant_id":1,"_id":"5a572ce09c2bc57d52df2eee","specs":[{"name":"规格","value":"554","_id":"5a572ce09c2bc57d52df2eef"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":18,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":73,"satisfy_count":740,"attributes":[],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[{"values":["默认","554"],"name":"规格"}],"rating_count":155,"month_sales":391,"description":"我叫程思颖33","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.7}],"type":1,"icon_url":"","is_selected":true,"__v":40},{"name":"单点","description":"","restaurant_id":1,"id":9,"foods":[{"_id":"5a32361fe003dc051d4efa99","tips":"763评价 月售163份","item_id":56,"category_id":9,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"ewrqwer"},"image_path":"16057e37bd2628.jpg","name":"中国食品","__v":0,"specfoods":[{"specs_name":"默认","name":"中国食品","item_id":56,"sku_id":172,"food_id":172,"restaurant_id":1,"_id":"5a335fcae003dc051d4efdf9","specs":[{"name":"规格","value":"默认","_id":"5a335fcae003dc051d4efdfa"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":748,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":2.8,"packing_fee":5,"pinyin_name":"","original_price":0},{"specs_name":"a","name":"中国食品","item_id":56,"sku_id":173,"food_id":173,"restaurant_id":1,"_id":"5a335fcae003dc051d4efdf7","specs":[{"name":"规格","value":"a","_id":"5a335fcae003dc051d4efdf8"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":5,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.4,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":14,"satisfy_count":958,"attributes":[{"icon_color":"f07373","icon_name":"招牌"},{"icon_color":"5ec452","icon_name":"新"}],"is_essential":false,"server_utc":"2017-12-11T15:23:48.203Z","specifications":[{"values":["默认","a"],"name":"规格"}],"rating_count":763,"month_sales":163,"description":"好吃","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.1},{"_id":"5a39c8c31ac38a078acc8acb","tips":"106评价 月售945份","item_id":76,"category_id":9,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"123"},"image_path":"16076b49ada909.jpg","name":"123123","__v":0,"specfoods":[{"specs_name":"默认","name":"123123","item_id":76,"sku_id":293,"food_id":293,"restaurant_id":1,"_id":"5a3d8c439c2bc57d52dee79c","specs":[{"name":"规格","value":"默认","_id":"5a3d8c439c2bc57d52dee79d"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":576,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1.7,"packing_fee":1,"pinyin_name":"","original_price":0},{"specs_name":"cai","name":"123123","item_id":76,"sku_id":294,"food_id":294,"restaurant_id":1,"_id":"5a3d8c439c2bc57d52dee79a","specs":[{"name":"规格","value":"cai","_id":"5a3d8c439c2bc57d52dee79b"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":116,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1.1,"packing_fee":1,"pinyin_name":"","original_price":0}],"satisfy_rate":77,"satisfy_count":315,"attributes":[],"is_essential":false,"server_utc":"2017-12-16T14:54:26.519Z","specifications":[{"name":"规格","values":["默认","cai"]}],"rating_count":106,"month_sales":945,"description":"1321","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.2},{"_id":"5a4b56119c2bc57d52df0b5d","tips":"827评价 月售34份","item_id":132,"category_id":9,"restaurant_id":1,"activity":{"image_text":"312","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"160baa261771515.jpg","name":"23123","__v":0,"specfoods":[{"specs_name":"w","name":"23123","item_id":132,"sku_id":561,"food_id":561,"restaurant_id":1,"_id":"5a4cc7ca9c2bc57d52df100c","specs":[{"name":"规格","value":"w","_id":"5a4cc7ca9c2bc57d52df100d"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":397,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1.9,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"2","name":"23123","item_id":132,"sku_id":562,"food_id":562,"restaurant_id":1,"_id":"5a4cc7ca9c2bc57d52df100a","specs":[{"name":"规格","value":"2","_id":"5a4cc7ca9c2bc57d52df100b"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":181,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":2.6,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"7","name":"23123","item_id":132,"sku_id":563,"food_id":563,"restaurant_id":1,"_id":"5a4cc7ca9c2bc57d52df1008","specs":[{"name":"规格","value":"7","_id":"5a4cc7ca9c2bc57d52df1009"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":174,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.5,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":51,"satisfy_count":623,"attributes":[{"icon_name":"新","icon_color":"5ec452"}],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[{"values":["w","2","7"],"name":"规格"}],"rating_count":827,"month_sales":34,"description":"1144","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.8},{"_id":"5a4fbc009c2bc57d52df1b9e","tips":"575评价 月售121份","item_id":149,"category_id":9,"restaurant_id":1,"activity":null,"image_path":"160c776576e1741.png","name":"你好哇塞","__v":0,"specfoods":[{"specs_name":"121","name":"你好哇塞","item_id":149,"sku_id":613,"food_id":613,"restaurant_id":1,"_id":"5a53209f9c2bc57d52df220f","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":260,"sold_out":false,"price":23,"promotion_stock":-1,"recent_rating":3.6,"packing_fee":3,"pinyin_name":"","original_price":0}],"satisfy_rate":76,"satisfy_count":506,"attributes":[],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[],"rating_count":575,"month_sales":121,"description":"我叫程思颖","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.8}],"type":1,"icon_url":"","is_selected":true,"__v":19},{"name":"新品","description":"","restaurant_id":1,"id":10,"foods":[{"_id":"5a336392e003dc051d4efe0a","tips":"244评价 月售506份","item_id":57,"category_id":10,"restaurant_id":1,"activity":null,"image_path":"16058be521a646.jpg","name":"我","__v":0,"specfoods":[{"specs_name":"默认","name":"我","item_id":57,"sku_id":199,"food_id":199,"restaurant_id":1,"_id":"5a35f6981ac38a078acc8038","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":534,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":4.1,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":43,"satisfy_count":333,"attributes":[],"is_essential":false,"server_utc":"2017-12-11T15:23:48.203Z","specifications":[],"rating_count":244,"month_sales":506,"description":"","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.7},{"_id":"5a55c79a9c2bc57d52df2c6b","tips":"924评价 月售537份","item_id":163,"category_id":10,"restaurant_id":1,"activity":{"image_text":"7.6折","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"160e05141d02079.jpg","name":"卷堡3人餐","__v":0,"specfoods":[{"specs_name":"默认","name":"卷堡3人餐","item_id":163,"sku_id":687,"food_id":687,"restaurant_id":1,"_id":"5a570b559c2bc57d52df2e36","specs":[{"name":"规格","value":"默认","_id":"5a570b559c2bc57d52df2e37"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":380,"sold_out":false,"price":90,"promotion_stock":-1,"recent_rating":4.5,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"鸡翅","name":"卷堡3人餐","item_id":163,"sku_id":688,"food_id":688,"restaurant_id":1,"_id":"5a570b559c2bc57d52df2e34","specs":[{"name":"规格","value":"鸡翅","_id":"5a570b559c2bc57d52df2e35"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":618,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3.7,"packing_fee":4,"pinyin_name":"","original_price":0},{"specs_name":"","name":"卷堡3人餐","item_id":163,"sku_id":689,"food_id":689,"restaurant_id":1,"_id":"5a570b559c2bc57d52df2e32","specs":[{"name":"规格","value":"","_id":"5a570b559c2bc57d52df2e33"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":780,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":4.7,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"123","name":"卷堡3人餐","item_id":163,"sku_id":690,"food_id":690,"restaurant_id":1,"_id":"5a570b559c2bc57d52df2e30","specs":[{"name":"规格","value":"123","_id":"5a570b559c2bc57d52df2e31"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":792,"sold_out":false,"price":21,"promotion_stock":-1,"recent_rating":0.1,"packing_fee":1,"pinyin_name":"","original_price":0},{"specs_name":"111","name":"卷堡3人餐","item_id":163,"sku_id":691,"food_id":691,"restaurant_id":1,"_id":"5a570b559c2bc57d52df2e2e","specs":[{"name":"规格","value":"111","_id":"5a570b559c2bc57d52df2e2f"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":47,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1.4,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":65,"satisfy_count":469,"attributes":[{"icon_name":"招牌","icon_color":"f07373"}],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[{"values":["默认","鸡翅","","123","111"],"name":"规格"}],"rating_count":924,"month_sales":537,"description":"香辣鸡腿堡1个+新奥尔良烤翅1个+老北京鸡肉卷1个+葡式蛋挞2个+九珍2杯","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.3}],"type":1,"icon_url":"","is_selected":true,"__v":11},{"name":"测试","description":"这是一个测试种类","restaurant_id":1,"id":15,"foods":[{"_id":"5a22fa825e602c0c46e3b20e","tips":"714评价 月售764份","item_id":1,"category_id":15,"restaurant_id":1,"activity":{"image_text":"舒服的沙发上对方","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"1604a5a1d9b467.jpg","name":"麻辣烫","__v":0,"specfoods":[{"specs_name":"","name":"麻辣烫","item_id":1,"sku_id":347,"food_id":347,"restaurant_id":1,"_id":"5a40ac309c2bc57d52deecb1","specs":[{"name":"规格","value":"","_id":"5a40ac309c2bc57d52deecb2"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":426,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1.1,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"","name":"麻辣烫","item_id":1,"sku_id":348,"food_id":348,"restaurant_id":1,"_id":"5a40ac309c2bc57d52deecaf","specs":[{"name":"规格","value":"","_id":"5a40ac309c2bc57d52deecb0"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":906,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":1.1,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":12,"satisfy_count":588,"attributes":[{"icon_name":"新","icon_color":"5ec452"},{"icon_name":"招牌","icon_color":"f07373"}],"is_essential":false,"server_utc":"2017-12-02T19:07:11.840Z","specifications":[{"name":"规格","values":["",""]}],"rating_count":714,"month_sales":764,"description":"南北风味","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.2},{"_id":"5a309bd1e003dc051d4ef461","tips":"421评价 月售742份","item_id":48,"category_id":15,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"是"},"image_path":"1604de075e1491.jpg","name":"英菲尼","__v":0,"specfoods":[{"specs_name":"默认","name":"英菲尼","item_id":48,"sku_id":138,"food_id":138,"restaurant_id":1,"_id":"5a30a090e003dc051d4ef4a1","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":395,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":100,"satisfy_count":759,"attributes":[{"icon_color":"5ec452","icon_name":"新"}],"is_essential":false,"server_utc":"2017-12-11T15:23:48.203Z","specifications":[],"rating_count":421,"month_sales":742,"description":"","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.7},{"_id":"5a33f687e003dc051d4f00d9","tips":"607评价 月售767份","item_id":62,"category_id":15,"restaurant_id":1,"activity":{"image_text":"asdfsad","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"1605afa695b677.jpg","name":"asdfsadfasdf","__v":0,"specfoods":[{"specs_name":"默认","name":"asdfsadfasdf","item_id":62,"sku_id":197,"food_id":197,"restaurant_id":1,"_id":"5a35f5461ac38a078acc8035","specs":[{"name":"规格","value":"默认","_id":"5a35f5461ac38a078acc8036"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":212,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":4.7,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"asdf ","name":"asdfsadfasdf","item_id":62,"sku_id":198,"food_id":198,"restaurant_id":1,"_id":"5a35f5461ac38a078acc8033","specs":[{"name":"规格","value":"asdf ","_id":"5a35f5461ac38a078acc8034"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":234,"sold_out":false,"price":22,"promotion_stock":-1,"recent_rating":4.3,"packing_fee":2,"pinyin_name":"","original_price":0}],"satisfy_rate":44,"satisfy_count":348,"attributes":[{"icon_name":"新","icon_color":"5ec452"},{"icon_name":"招牌","icon_color":"f07373"}],"is_essential":false,"server_utc":"2017-12-11T15:23:48.203Z","specifications":[{"values":["默认","asdf "],"name":"规格"}],"rating_count":607,"month_sales":767,"description":"asdfsadfsdf","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4}],"type":1,"icon_url":"","is_selected":true,"__v":7},{"name":"夜宵","description":"夜宵是一种夜里吃的食品","restaurant_id":1,"id":41,"foods":[{"_id":"5a2878313ba8590522fa7dc1","tips":"99评价 月售876份","item_id":20,"category_id":41,"restaurant_id":1,"activity":null,"image_path":"1602e158121219.jpg","name":"咸鸭蛋","__v":0,"specfoods":[{"specs_name":"默认","name":"咸鸭蛋","item_id":20,"sku_id":75,"food_id":75,"restaurant_id":1,"_id":"5a2878313ba8590522fa7dc6","specs":[{"name":"规格","value":"默认","_id":"5a2878313ba8590522fa7dc7"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":735,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3.6,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"大鸭蛋","name":"咸鸭蛋","item_id":20,"sku_id":76,"food_id":76,"restaurant_id":1,"_id":"5a2878313ba8590522fa7dc4","specs":[{"name":"规格","value":"大鸭蛋","_id":"5a2878313ba8590522fa7dc5"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":576,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3.8,"packing_fee":5,"pinyin_name":"","original_price":0},{"specs_name":"mini蛋","name":"咸鸭蛋","item_id":20,"sku_id":77,"food_id":77,"restaurant_id":1,"_id":"5a2878313ba8590522fa7dc2","specs":[{"name":"规格","value":"mini蛋","_id":"5a2878313ba8590522fa7dc3"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":949,"sold_out":false,"price":13,"promotion_stock":-1,"recent_rating":3.6,"packing_fee":3,"pinyin_name":"","original_price":0}],"satisfy_rate":7,"satisfy_count":878,"attributes":[{"icon_color":"5ec452","icon_name":"新"},{"icon_color":"f07373","icon_name":"招牌"}],"is_essential":false,"server_utc":"2017-12-03T12:37:27.907Z","specifications":[{"values":["默认","大鸭蛋","mini蛋"],"name":"规格"}],"rating_count":99,"month_sales":876,"description":"","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.2}],"type":1,"icon_url":"","is_selected":true,"__v":1},{"name":"adsad","description":"asdasd","restaurant_id":1,"id":103,"foods":[{"_id":"5a30fd54e003dc051d4ef76a","tips":"134评价 月售368份","item_id":55,"category_id":103,"restaurant_id":1,"activity":{"image_text":"active","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"1604f5d9f0d552.jpg","name":"coffee","__v":0,"specfoods":[{"specs_name":"快回家快好快","name":"coffee","item_id":55,"sku_id":200,"food_id":200,"restaurant_id":1,"_id":"5a361f2e1ac38a078acc806f","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":642,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.2,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":78,"satisfy_count":984,"attributes":[{"icon_name":"招牌","icon_color":"f07373"},{"icon_name":"新","icon_color":"5ec452"}],"is_essential":false,"server_utc":"2017-12-11T15:23:48.203Z","specifications":[],"rating_count":134,"month_sales":368,"description":"detail","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.5}],"type":1,"icon_url":"","is_selected":true,"__v":1},{"name":"www","description":"www","restaurant_id":1,"id":112,"foods":[{"_id":"5a3720431ac38a078acc822b","tips":"458评价 月售30份","item_id":65,"category_id":112,"restaurant_id":1,"activity":null,"image_path":"1606756030a743.png","name":"苹果","__v":0,"specfoods":[{"specs_name":"默认","name":"苹果","item_id":65,"sku_id":212,"food_id":212,"restaurant_id":1,"_id":"5a37575f1ac38a078acc832a","specs":[{"name":"规格","value":"默认","_id":"5a37575f1ac38a078acc832b"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":882,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.1,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"45","name":"苹果","item_id":65,"sku_id":213,"food_id":213,"restaurant_id":1,"_id":"5a37575f1ac38a078acc8328","specs":[{"name":"规格","value":"45","_id":"5a37575f1ac38a078acc8329"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":819,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":0.4,"packing_fee":1,"pinyin_name":"","original_price":0}],"satisfy_rate":74,"satisfy_count":385,"attributes":[],"is_essential":false,"server_utc":"2017-12-16T14:54:26.519Z","specifications":[{"name":"规格","values":["默认","45"]}],"rating_count":458,"month_sales":30,"description":"","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.2},{"_id":"5a38a7391ac38a078acc8747","tips":"870评价 月售41份","item_id":69,"category_id":112,"restaurant_id":1,"activity":{"image_text":"44","icon_color":"f07373","image_text_color":"f1884f"},"image_path":"1606d4c89a5830.png","name":"444","__v":0,"specfoods":[{"specs_name":"默认","name":"444","item_id":69,"sku_id":220,"food_id":220,"restaurant_id":1,"_id":"5a38a7391ac38a078acc8748","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":394,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3.6,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":2,"satisfy_count":225,"attributes":[{"icon_name":"新","icon_color":"5ec452"},{"icon_name":"招牌","icon_color":"f07373"}],"is_essential":false,"server_utc":"2017-12-16T14:54:26.519Z","specifications":[],"rating_count":870,"month_sales":41,"description":"44","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.6},{"_id":"5a38a7391ac38a078acc8749","tips":"595评价 月售939份","item_id":70,"category_id":112,"restaurant_id":1,"activity":{"image_text_color":"f1884f","icon_color":"f07373","image_text":"44"},"image_path":"1606d4c89a5830.png","name":"444","__v":0,"specfoods":[{"specs_name":"默认","name":"444","item_id":70,"sku_id":221,"food_id":221,"restaurant_id":1,"_id":"5a38a7391ac38a078acc874a","specs":[],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":541,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3.7,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":52,"satisfy_count":682,"attributes":[{"icon_color":"5ec452","icon_name":"新"},{"icon_color":"f07373","icon_name":"招牌"}],"is_essential":false,"server_utc":"2017-12-16T14:54:26.519Z","specifications":[],"rating_count":595,"month_sales":939,"description":"44","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.1}],"type":1,"icon_url":"","is_selected":true,"__v":6},{"name":"热销榜","description":"","restaurant_id":1,"id":146,"foods":[{"_id":"5a4dca459c2bc57d52df12d3","tips":"590评价 月售939份","item_id":142,"category_id":146,"restaurant_id":1,"activity":null,"image_path":"160bfddbb801585.jpg","name":"海贼王","__v":0,"specfoods":[{"specs_name":"默认","name":"海贼王","item_id":142,"sku_id":659,"food_id":659,"restaurant_id":1,"_id":"5a55b56f9c2bc57d52df2c16","specs":[{"name":"规格","value":"默认","_id":"5a55b56f9c2bc57d52df2c17"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":835,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":4.2,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"草帽","name":"海贼王","item_id":142,"sku_id":660,"food_id":660,"restaurant_id":1,"_id":"5a55b56f9c2bc57d52df2c14","specs":[{"name":"规格","value":"草帽","_id":"5a55b56f9c2bc57d52df2c15"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":733,"sold_out":false,"price":200,"promotion_stock":-1,"recent_rating":4.9,"packing_fee":4,"pinyin_name":"","original_price":0},{"specs_name":"2","name":"海贼王","item_id":142,"sku_id":661,"food_id":661,"restaurant_id":1,"_id":"5a55b56f9c2bc57d52df2c12","specs":[{"name":"规格","value":"2","_id":"5a55b56f9c2bc57d52df2c13"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":137,"sold_out":false,"price":21,"promotion_stock":-1,"recent_rating":1,"packing_fee":1,"pinyin_name":"","original_price":0}],"satisfy_rate":55,"satisfy_count":470,"attributes":[{"icon_color":"f07373","icon_name":"招牌"}],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[{"name":"规格","values":["默认","草帽","2"]}],"rating_count":590,"month_sales":939,"description":"路飞=>成为海贼王的男人1","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.3}],"type":1,"icon_url":"","is_selected":true,"__v":8},{"name":"affa","description":"afa","restaurant_id":1,"id":206,"foods":[{"_id":"5a4ca7f19c2bc57d52df0f65","tips":"904评价 月售583份","item_id":136,"category_id":206,"restaurant_id":1,"activity":null,"image_path":"160bb6fff5f1548.png","name":"123","__v":0,"specfoods":[{"specs_name":"123","name":"123","item_id":136,"sku_id":559,"food_id":559,"restaurant_id":1,"_id":"5a4cc6f49c2bc57d52df0fff","specs":[{"name":"规格","value":"123","_id":"5a4cc6f49c2bc57d52df1000"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":584,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":3.4,"packing_fee":0,"pinyin_name":"","original_price":0},{"specs_name":"41","name":"123","item_id":136,"sku_id":560,"food_id":560,"restaurant_id":1,"_id":"5a4cc6f49c2bc57d52df0ffd","specs":[{"name":"规格","value":"41","_id":"5a4cc6f49c2bc57d52df0ffe"}],"stock":1000,"checkout_mode":1,"is_essential":false,"recent_popularity":801,"sold_out":false,"price":20,"promotion_stock":-1,"recent_rating":4.7,"packing_fee":0,"pinyin_name":"","original_price":0}],"satisfy_rate":69,"satisfy_count":379,"attributes":[],"is_essential":false,"server_utc":"2017-12-21T15:25:08.297Z","specifications":[{"name":"规格","values":["123","41"]}],"rating_count":904,"month_sales":583,"description":"","attrs":[],"display_times":[],"pinyin_name":"","is_featured":0,"rating":4.1}],"type":1,"icon_url":"","is_selected":true,"__v":2}]


/**
 * 获取商铺评价列表
 */

export const getRatingList = [{"rated_at":"2017-02-10","rating_star":5,"rating_text":"","time_spent_desc":"按时送达","_id":"5a22f885ec81ce77ee8449b7","username":"4*******b","tags":[],"item_ratings":[{"food_id":508807792,"food_name":"超级至尊比萨-铁盘","_id":"5a22f885ec81ce77ee8449b9","is_valid":1,"image_hash":"dc864033625905f0a15a2d181d53a425jpeg"},{"food_id":508808743,"food_name":"韩式浓情风味鸡（标准份）","_id":"5a22f885ec81ce77ee8449b8","is_valid":1,"image_hash":"074e0e203f613deff4e456c31e4177d1jpeg"}],"highlights":[],"avatar":""},{"rated_at":"2017-02-09","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449b4","username":"t****n","tags":[],"item_ratings":[{"food_id":508809467,"food_name":"香草凤尾虾-5只装","_id":"5a22f885ec81ce77ee8449b6","is_valid":1,"image_hash":""},{"food_id":508808754,"food_name":"鸡茸蘑菇汤","_id":"5a22f885ec81ce77ee8449b5","is_valid":1,"image_hash":"5388b26ad173389d89e0e015dbf295fcjpeg"}],"highlights":[],"avatar":"15f6cf782b0c9cd5ca8daa7f76ab05aejpeg"},{"rated_at":"2017-01-18","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449b2","username":"，******C","tags":[],"item_ratings":[{"food_id":508809480,"food_name":"冰柠檬红茶（标准份）","_id":"5a22f885ec81ce77ee8449b3","is_valid":1,"image_hash":""}],"highlights":[],"avatar":""},{"rated_at":"2017-02-10","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449b1","username":"试******春","tags":[],"item_ratings":[],"highlights":[],"avatar":""},{"rated_at":"2017-02-10","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449ae","username":"王******a","tags":[],"item_ratings":[{"food_id":529149980,"food_name":"富贵“鸡”祥大吉大利比萨","_id":"5a22f885ec81ce77ee8449b0","is_valid":1,"image_hash":""},{"food_id":144654782,"food_name":"热柠檬红茶","_id":"5a22f885ec81ce77ee8449af","is_valid":1,"image_hash":""}],"highlights":[],"avatar":"1b523ca27369a0eed1ce0c3fc0a5ba8bjpeg"},{"rated_at":"2017-02-10","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449aa","username":"3*******7","tags":[],"item_ratings":[{"food_id":508808726,"food_name":"加州风情香烤牛肉比萨-铁盘","_id":"5a22f885ec81ce77ee8449ad","is_valid":1,"image_hash":""},{"food_id":508810265,"food_name":"海鲜至尊比萨-铁盘","_id":"5a22f885ec81ce77ee8449ac","is_valid":1,"image_hash":""},{"food_id":508807792,"food_name":"超级至尊比萨-铁盘","_id":"5a22f885ec81ce77ee8449ab","is_valid":1,"image_hash":""}],"highlights":[],"avatar":""},{"rated_at":"2017-02-10","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449a7","username":"3*******6","tags":[],"item_ratings":[{"food_id":529149980,"food_name":"富贵“鸡”祥大吉大利比萨","_id":"5a22f885ec81ce77ee8449a9","is_valid":1,"image_hash":""},{"food_id":508808743,"food_name":"韩式浓情风味鸡（标准份）","_id":"5a22f885ec81ce77ee8449a8","is_valid":1,"image_hash":""}],"highlights":[],"avatar":""},{"rated_at":"2017-02-10","rating_star":5,"rating_text":"送餐速度很快！","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449a6","username":"3*******7","tags":[],"item_ratings":[],"highlights":[],"avatar":"818cf0c977c77ca365557230db619a18jpeg"},{"rated_at":"2017-02-10","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449a5","username":"3*******b","tags":[],"item_ratings":[],"highlights":[],"avatar":""},{"rated_at":"2017-02-09","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449a4","username":"景***0","tags":[],"item_ratings":[],"highlights":[],"avatar":""}]


/**
 * 获取商铺评价分数
 */

export const ratingScores = {"compare_rating":0.76869,"deliver_time":40,"food_score":4.76378,"order_rating_amount":473,"overall_score":4.72836,"service_score":4.69295}


/**
 * 获取商铺评价分类
 */

export const ratingTags = [{"name":"全部","_id":"5a22f885ec81ce77ee8449a3","unsatisfied":false,"count":473},{"name":"满意","_id":"5a22f885ec81ce77ee8449a2","unsatisfied":false,"count":453},{"name":"不满意","_id":"5a22f885ec81ce77ee8449a1","unsatisfied":true,"count":20},{"name":"有图","_id":"5a22f885ec81ce77ee8449a0","unsatisfied":false,"count":2},{"name":"味道好","_id":"5a22f885ec81ce77ee84499f","unsatisfied":false,"count":47},{"name":"送货快","_id":"5a22f885ec81ce77ee84499e","unsatisfied":false,"count":32},{"name":"分量足","_id":"5a22f885ec81ce77ee84499d","unsatisfied":false,"count":18},{"name":"包装精美","_id":"5a22f885ec81ce77ee84499c","unsatisfied":false,"count":15},{"name":"干净卫生","_id":"5a22f885ec81ce77ee84499b","unsatisfied":false,"count":15},{"name":"食材新鲜","_id":"5a22f885ec81ce77ee84499a","unsatisfied":false,"count":15},{"name":"服务不错","_id":"5a22f885ec81ce77ee844999","unsatisfied":false,"count":11}]


/**
 * 获取短信验证码
 */

export const mobileCode = phone => fetch('/v4/mobile/verify_code/send', {
	mobile: phone,
	scene: 'login',
	type: 'sms'
}, 'POST');


/**
 * 获取图片验证码
 */

export const getcaptchas = () => fetch('/v1/captchas', {},'POST');


/**
 * 检测帐号是否存在
 */

export const checkExsis = (checkNumber, type) => fetch('/v1/users/exists', {
	[type]: checkNumber,
	type
});


/**
 * 发送帐号
 */

export const sendMobile = (sendData, captcha_code, type, password) => fetch('/v1/mobile/verify_code/send', {
	action: "send",
	captcha_code,
	[type]: sendData,
	type: "sms",
	way: type,
	password,
}, 'POST');


/**
 * 确认订单
 */

export const checkout = (geohash, entities, shopid) => fetch('/v1/carts/checkout', {
	come_from: "web",
	geohash,
	entities,
	restaurant_id: shopid,
}, 'POST');


/**
 * 获取快速备注列表
 */

export const getRemark = (id, sig) => fetch('/v1/carts/' + id + '/remarks', {
	sig
});


/**
 * 获取地址列表
 */

export const getAddress = (id, sig) => fetch('/v1/carts/' + id + '/addresses', {
	sig
});


/**
 * 搜索地址
 */

export const searchNearby = keyword => fetch('/v1/pois', {
	type: 'nearby',
	keyword
});


/**
 * 添加地址
 */

export const postAddAddress = (userId, address, address_detail, geohash, name, phone, phone_bk, poi_type, sex, tag, tag_type) => fetch('/v1/users/' + userId + '/addresses', {
	address,
	address_detail,
	geohash,
	name,
	phone,
	phone_bk,
	poi_type,
	sex,
	tag,
	tag_type,
}, 'POST');


/**
 * 下订单
 */

export const placeOrders = (user_id, cart_id, address_id, description, entities, geohash, sig) => fetch('/v1/users/' + user_id + '/carts/' + cart_id + '/orders', {
	address_id,
	come_from: "mobile_web",
	deliver_time: "",
	description,
	entities,
	geohash,
	paymethod_id: 1,
	sig,
}, 'POST');


/**
 * 重新发送订单验证码
 */

export const rePostVerify = (cart_id, sig, type) => fetch('/v1/carts/' + cart_id + '/verify_code', {
	sig,
	type,
}, 'POST');



/**
 * 下订单
 */

export const validateOrders = ({
	user_id,
	cart_id,
	address_id,
	description,
	entities,
	geohash,
	sig,
	validation_code,
	validation_token
}) => fetch('/v1/users/' + user_id + '/carts/' + cart_id + '/orders', {
	address_id,
	come_from: "mobile_web",
	deliver_time: "",
	description,
	entities,
	geohash,
	paymethod_id: 1,
	sig,
	validation_code,
	validation_token,
}, 'POST');


/**
 * 重新发送订单验证码
 */

export const payRequest = (merchantOrderNo, userId) => fetch('/payapi/payment/queryOrder', {
	merchantId: 5,
	merchantOrderNo,
	source: 'MOBILE_WAP',
	userId,
	version: '1.0.0',
});



/**
 * 获取服务中心信息
 */

export const getService = () => fetch('/v3/profile/explain');



/**
*兑换会员卡
*/

export const vipCart = (id, number, password) => fetch('/member/v1/users/' + id + '/delivery_card/physical_card/bind',{
	number,
	password
}, 'POST')



/**
 * 获取红包
*/

export const getHongbaoNum = id => fetch('/promotion/v2/users/' + id + '/hongbaos?limit=20&offset=0');



/**
 * 获取过期红包
*/


export const getExpired = id => fetch('/promotion/v2/users/' + id + '/expired_hongbaos?limit=20&offset=0');


/**
 * 兑换红包
*/

export const exChangeHongbao = (id, exchange_code, captcha_code) => fetch('/v1/users/' + id + '/hongbao/exchange',{
	exchange_code,
	captcha_code,
}, 'POST');


/**
 * 获取用户信息
 */

export const getUser = () => fetch('/v1/user', {user_id: getStore('user_id')});


/**
 * 手机号登录
 */

var sendLogin = (code, mobile, validate_token) => fetch('/v1/login/app_mobile', {
	code,
	mobile,
	validate_token
}, 'POST');


/**
 * 获取订单列表
 */

export const getOrderList = (user_id, offset) => fetch('/bos/v2/users/' + user_id + '/orders', {
	limit: 10,
	offset,
});


/**
 * 获取订单详情
 */

export const getOrderDetail = (user_id, orderid) => fetch('/bos/v1/users/' + user_id + '/orders/' + orderid + '/snapshot');


/**
*个人中心里编辑地址
*/

export const getAddressList = (user_id) => fetch('/v1/users/'+user_id+'/addresses')

/**
*个人中心里搜索地址
*/

export const getSearchAddress = (keyword) => fetch('v1/pois',{
	keyword:keyword,
	type:'nearby'
})

/**
* 删除地址
*/

export const deleteAddress = (userid, addressid) => fetch( '/v1/users/' + userid + '/addresses/' + addressid, {}, 'DELETE')



/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captcha_code) => fetch('/v2/login', {username, password, captcha_code}, 'POST');


/**
 * 退出登录
 */
export const signout = () => fetch('/v2/signout');


/**
 * 改密码
 */
export const changePassword = (username, oldpassWord, newpassword, confirmpassword, captcha_code) => fetch('/v2/changepassword', {username, oldpassWord, newpassword, confirmpassword, captcha_code}, 'POST');
