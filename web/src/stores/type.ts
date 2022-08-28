
export interface Today {
	isUpdated: boolean;
	confirm: number;
}

export interface Total {
	provinceLocalConfirm: number;
	mtime: string;
	dead: number;
	wzz: number;
	adcode: string;
	heal: number;
	mediumRiskAreaNum: number;
	nowConfirm: number;
	confirm: number;
	showRate: boolean;
	showHeal: boolean;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	continueDayZeroLocalConfirm: number;
}

export interface Today {
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
}

export interface Total {
	confirm: number;
	dead: number;
	mtime: string;
	wzz: number;
	adcode: string;
	showRate: boolean;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	continueDayZeroConfirmAdd: number;
	nowConfirm: number;
	heal: number;
	showHeal: boolean;
	provinceLocalConfirm: number;
	continueDayZeroConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: string;
	local_confirm_add: number;
}

export interface Total {
	highRiskAreaNum: number;
	adcode: string;
	dead: number;
	showHeal: boolean;
	wzz: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	showRate: boolean;
	heal: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	nowConfirm: number;
	confirm: number;
	provinceLocalConfirm: number;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	today: Today;
	total: Total;
	children: Children[];
	name: string;
	adcode: string;
	date: string;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface ChinaTotal {
	localConfirmH5: number;
	localConfirmAdd: number;
	highRiskAreaNum: number;
	nowConfirm: number;
	noInfect: number;
	showLocalConfirm: number;
	showlocalinfeciton: number;
	noInfectH5: number;
	confirm: number;
	dead: number;
	localWzzAdd: number;
	mtime: string;
	mRiskTime: string;
	local_acc_confirm: number;
	confirmAdd: number;
	nowLocalWzz: number;
	deadAdd: number;
	mediumRiskAreaNum: number;
	localConfirm: number;
	heal: number;
	suspect: number;
	nowSevere: number;
	importedCase: number;
}

export interface ChinaAdd {
	confirm: number;
	noInfect: number;
	localConfirm: number;
	noInfectH5: number;
	nowSevere: number;
	importedCase: number;
	localConfirmH5: number;
	heal: number;
	dead: number;
	nowConfirm: number;
	suspect: number;
}

export interface ShowAddSwitch {
	all: boolean;
	heal: boolean;
	noInfect: boolean;
	localinfeciton: boolean;
	confirm: boolean;
	suspect: boolean;
	dead: boolean;
	nowConfirm: boolean;
	nowSevere: boolean;
	importedCase: boolean;
	localConfirm: boolean;
}

export interface Diseaseh5Shelf {
	areaTree: AreaTree[];
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
}

export interface StatisGradeCityDetail {
	mtime: string;
	sdate: string;
	confirmAdd: number;
	grade: string;
	date: string;
	confirm: number;
	dead: number;
	heal: number;
	syear: number;
	wzz_add: string;
	province: string;
	city: string;
	nowConfirm: number;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	statisGradeCityDetail: StatisGradeCityDetail[];
}