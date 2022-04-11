import React, { ReactNode } from 'react'
import Head from 'next/head'

// layout
import DashboardLayout from '../../layout/Dashboard';
import ReportItem from '../../layout/Dashboard/components/Reports';

const Index = () => {
	return (
		<DashboardLayout>
			<div className="p-10">
				<h4 className="font-semibold text-2xl">View Reports</h4>

				<div className="w-full border rounded border-gray-200 mt-14">
					<ReportItem active isNew />
					<ReportItem />
					<ReportItem />
					<ReportItem />
					<ReportItem />
					<ReportItem />
				</div>
			</div>
		</DashboardLayout> 
	)
}
export default Index;