// Links needs proper structure

export const PurchasesLinks = [
	{
		id: 1221,
		text: 'Bills',
		link: '/add-bill',
		parent: 'purchases'
	},
	{
		id: 2120,
		text: 'Vendors',
		link: '/vendors',
		parent: 'purchases'
	},
	{
		id: 2342,
		text: 'Product & Services',
		link: '/products',
		parent: 'purchases'
	},
]

export const AnalyticsLink = [
	{
		id: 1221,
		text: 'View Report',
		link: '/view-reports',
	},
	{
		id: 2120,
		text: 'To-Do',
		link: '/vendors',
	},
	{
		id: 2342,
		text: 'Upload Docs',
		link: '/products',
	},
	{
		id: 4542,
		text: 'Chat',
		link: '/products',
	},
	{
		id: 2082,
		text: 'Schedule',
		link: '/products',
	},
	{
		id: 1242,
		text: 'Message Board',
		link: '/products',
	},
	{
		id: 4308,
		text: 'Make Payments',
		link: '/products',
	},
	{
		id: 9801,
		text: 'Billing',
		link: '/products',
	},
]

export const mainLinks = [
	{
		id: 9021,
		text: 'Purchases',
		children: [...PurchasesLinks]
	},
	{
		id: 9102,
		text: 'Vendors',
	},
	{
		id: 2100,
		text: 'Product & Services',
	},
	{
		id: 2100,
		text: 'Analytics',
	},
]