
export default function Home() {

    return <div>
        <h1 className="text-4xl font-bold text-left text-gray-800 mb-10">Personal Loan</h1>
        <h3 className="text-2xl ">A flexible loan disbursed directly to your bank account. Just your PAN Card and one address proof are all you need. Borrow up to ₹2 Lakhs with repayment terms from 3 to 36 months.</h3>

        <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-between p-4 ">


            <section className="border rounded-lg p-6 shadow hover:shadow-lg transition w-full md:w-[48%] lg:w-[30%]">
                <h2 className="text-2xl font-bold mb-3 border-b pb-1">Features</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Loan Amount:</strong> ₹6,000 – ₹2,00,000</li>
                    <li><strong>Interest Rate:</strong> 14% – 36%</li>
                    <li><strong>Tenure:</strong> 3 to 36 months</li>
                    <li><strong>Processing Fee:</strong> Up to 4%</li>
                    <li><strong>Disbursal:</strong> Instant transfer to bank account</li>
                    <li><strong>Security:</strong> No collateral required</li>
                </ul>
            </section>


            <section className="border rounded-lg p-6 shadow hover:shadow-lg transition w-full md:w-[48%] lg:w-[30%]">
                <h2 className="text-2xl font-bold mb-3 border-b pb-1">Eligibility Criteria</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Age Limit:</strong> 21 to 50 years</li>
                    <li><strong>Monthly Income:</strong> ₹18,000 (Metro), ₹15,000 (Non-metro)</li>
                    <li><strong>Residency:</strong> Must be a Resident Indian Citizen</li>
                    <li><strong>Work Experience:</strong> At least 1 year in current job/profession</li>
                </ul>
            </section>


            <section className="border rounded-lg p-6 shadow hover:shadow-lg transition w-full md:w-[48%] lg:w-[30%]">
                <h2 className="text-2xl font-bold mb-3 border-b pb-1">Documents</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>PAN Card</li>
                    <li>Aadhaar Card</li>
                    <li>Bank Statement (Last 3 months)</li>
                    <li>Selfie</li>
                    <li>Address Proof (Permanent & Current Address)</li>
                </ul>
            </section>


            <section className="border rounded-lg p-6 shadow hover:shadow-lg transition w-full md:w-[48%] lg:w-[30%]">
                <h2 className="text-2xl font-bold mb-3 border-b pb-1">Other Fees & Charges</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Interest Rate:</strong> Starting from 14% p.a.</li>
                    <li><strong>Processing Fee:</strong> 2–4.5% of loan amount</li>
                    <li><strong>Late Payment Fee:</strong> ₹500 or 3% of overdue amount (whichever is higher)</li>
                    <li><strong>Bounced Payment Fee:</strong> ₹500 + GST</li>
                    <li><strong>Stamp Duty:</strong> 0.1% of loan amount</li>
                    <li><strong>Mandate Rejection Charges:</strong> ₹250 + GST</li>
                    <li><strong>Foreclosure Charges:</strong> 4% on remaining principal</li>
                </ul>
            </section>
        </div>

    </div>
}