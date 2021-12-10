const data1 = {
	id: 'D320205S2021-0050',
	basicInformation: {
		name: '无锡锡东环保能源有限公司',
		unifiedAuthentication: '91320205684910709J',
		representative: '熊建平',
		street: '东港镇',
		address: '无锡市锡山区东港镇黄土塘村',
		category: '电力生产',
		mainProducts: [
			{
				type: '垃圾发电',
				annualOutput: '256000000kwh/a',
				quota: '/',
				actualQuota: '/'
			}
		],
		purpose: '工业用水',
		honor: null,
		manager: '洪海龙',
		iphone1: '18951518650'
	},
	permit: {
		number: 'D320205S2021-0050',
		stratTime: '2017/8/1',
		endTime: '2022/7/31',
		type: '地表水',
		waterIntake: '240.9',
		waterIntakeDate: '510.0',
		waterIntakeMax: '1.5600',
		imgUrl: '../../static/file/d1/xkz.jpg',
		pdfUrl: '../../static/file/d1/d1.pdf',
		pafName: '取水证许可-锡东环保能源.pdf'
	},
	monitor: {
		waterIntake: '47',
		longitude: "120°28'31.0'",
		latitude: "31°42'23.0'",
		address: '厂区外东南面东青河西岸，距下游晃山桥约400',
		classification: '长江-太湖水系-武阳区',
		type: '地表水',
		facilities: '水泵',
		lift: '36.0',
		number: null,
		well: [
			{
				layer: null,
				wellDepth: null,
				wellDiameter: null,
			}
		],
		ability: '510.0',
		metering: '超声波流量计',
		meteringConten: '流量',
		meteringMode: '管道计量-插入式超声波流量',
		dataMode: '在线',
		meteringTime: '2017/8/1',
		requirement: '定期检定'
	}
}

const data2 = {
	id: 'D320205S2021-0114',
	basicInformation: {
		name: '无锡晶海氨基酸股份有限公司',
		unifiedAuthentication: '91320200717435204L',
		representative: '李松年',
		street: '东港镇',
		address: '无锡市锡山区东港镇港下',
		category: '生物药品制品制造',
		mainProducts: [
			{
				type: '氨基酸',
				annualOutput: '1900吨',
				quota: '/',
				actualQuota: '/'
			}
		],
		purpose: '工业用水',
		honor: '八大行业节水行动企业',
		manager: '陈建刚',
		iphone1: '13961705102'
	},
	permit: {
		number: 'D320205S2021-0114',
		stratTime: '2018/6/10',
		endTime: '2023/6/9',
		type: '地表水',
		waterIntake: '25.0',
		waterIntakeDate: '833.0',
		waterIntakeMax: '0.0096',
		imgUrl: '',
		pdfUrl: '',
		pafName: '取水证许可-晶海氨基酸地表水.pdf'

	},
	monitor: {
		waterIntake: '108',
		longitude: "120°33'36.1'",
		latitude: "31°41'59.0'",
		address: '锡北运河支流公司东南角处',
		classification: '长江-太湖水系-武阳区',
		type: '地表水',
		facilities: '水泵',
		lift: '22.0',
		number: null,
		layer: null,
		wellDepth: null,
		wellDiameter: null,
		ability: '833.0',
		metering: '超声波流量计',
		meteringConten: '流量',
		meteringMode: '管道计量-插入式超声波流量',
		dataMode: '在线',
		meteringTime: '2013/6/10',
		requirement: '定期检定'
	}
}

const data3 = {
	id: 'D320205G2021-0125',
	basicInformation: {
		name: '无锡晶海氨基酸股份有限公司',
		unifiedAuthentication: '91320200717435204L',
		representative: '李松年',
		street: '东港镇',
		address: '无锡市锡山区东港镇港下',
		category: '生物药品制品制造',
		mainProducts: [
			{
				type: '氨基酸',
				annualOutput: '1900吨',
				quota: '/',
				actualQuota: '/'
			}
		],
		purpose: '工业用水',
		honor: '八大行业节水行动企业',
		manager: '陈建刚',
		iphone1: '13961705102'
	},
	permit: {
		number: 'D320205G2021-0125',
		stratTime: '2018/6/10',
		endTime: '2023/6/9',
		type: '地下水',
		waterIntake: '16.0',
		waterIntakeDate: '533.0',
		waterIntakeMax: '0.0060',
		imgUrl: '',
		pdfUrl: '',
		pafName: '取水证许可-晶海氨基酸地下水.pdf'

	},
	monitor: {
		waterIntake: '119',
		longitude: "120°32'55.0'",
		latitude: "31°41'30.0'",
		address: '1.公司内煤场旁,2.公司内机修车间西面',
		classification: '长江-太湖水系-武阳区',
		type: '地下水',
		facilities: '水井',
		lift: null,
		number: 2,
		layer: '第II承压',
		wellDepth: '110',
		wellDiameter: '30',
		ability: '532.0',
		metering: '超声波流量计',
		meteringConten: '流量',
		meteringMode: '管道计量-插入式超声波流量',
		dataMode: '在线',
		meteringTime: '2013/5/22',
		requirement: '定期检定'
	}
}

export default {
	data1,
	data2,
	data3
}
